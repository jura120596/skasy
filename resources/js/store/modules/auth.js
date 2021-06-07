import Axios from '@/utils/axios';
import router from '@/router'


const defaultState = {
  userId: null,
  name: null,
};

/**
 * Auth module for vuex store.
 *
 * Holds user authentication details.
 */
export default {
  namespaced: true,
  state: {
    user: defaultState,
    token: localStorage.getItem('token') || null,
    ttl: localStorage.getItem('ttl') || null,
    isRefreshing: false,
    loggingOut: false
  },
  getters: {
    authenticated: state => state.token && state.user,
    token: state => state.token,
    ttl: state => state.ttl,
    user: state => state.user,
    isRefreshing: state => state.isRefreshing
  },
  mutations: {
    /**
     * Set current authenticated user.
     */
    setToken: (state, token) => {

      state.token = token;
      localStorage.setItem('token', token);
    },
    /**
     * Set current authenticated user.
     */
    setTTL: (state, ttl) => {

      state.ttl = ttl;
      localStorage.setItem('ttl', ttl);
    },
    /**
     * Remove current authenticated user.
     */
    clearToken: state => {

      state.token = null;
      localStorage.removeItem('token');
    },
    /**
     * Remove current authenticated user.
     */
    clearTTL: state => {

      state.ttl = null;
      localStorage.removeItem('ttl');
    },
    /**
     * Set current authenticated user.
     */
    setUser: (state, payload) => {

      state.user = payload;
    },
    /**
     * Remove current authenticated user.
     */
    clearUser: state => {

      state.user = defaultState;
    },
    setLoggingOut: (state, payload) => {

      state.loggingOut = payload;
    },
    setRefreshing: (state, payload) => {

      state.isRefreshing = payload;
    },

  },
  actions: {

    /**
     * Send login details to server.
     */
    async login({ dispatch }, credentials){

      const response = await Axios.post('/auth/login', credentials);
      return dispatch('attempt', {
        token: response.data.data.access_token,
        ttl: response.data.data.expires_at,
        refreshTTL: true
      });
    },

    /**
     * Send reset-password details to server.
     */
    async reset({ dispatch }, credentials){

        const response = await Axios.post('/auth/reset', {'email': credentials.email});
        return response;
    },

    async resetPassword({ dispatch , vue}, passwords){
        const response = await Axios.post('/auth/reset/password', {
            password: passwords.pwd,
            password_confirmation: passwords.pwd2,
            token: router.currentRoute.query.token,
            email: router.currentRoute.query.email,
        });
        return;
    },


    /**
     * Verify token and get current authenticated user account details.
     */
    async attempt({ commit, state }, {token, ttl, refreshTTL = false }) {

      if (token){
        commit('setToken', token);
      }

      if (!state.token){
        return;
      }

      if(ttl && refreshTTL) {
        // get half time to expire, when we hit this time refresh the token
        commit('setTTL', Date.now() + (ttl/2) * 1000);
      } else {
        commit('setTTL', ttl);
      }

      try {
        const response = await Axios.post('/auth/profile');
        commit('setUser', response.data.data);
      }
      catch (error) {
        commit('clearUser');
        commit('clearToken');
        commit('clearTTL');
      }
    },
    async updateProfile({ commit,dispatch }, profileData) {
      let data = {
          name: profileData.name,
          email: profileData.email,
          second_name: profileData.second_name,
          last_name: profileData.last_name,
      };
      if (profileData.password || profileData.password_confirmation) {
          data.password = profileData.password;
          data.password_confirmation = profileData.password_confirmation;
      }
      const response = await Axios.put('/auth/profile', profileData);
      commit('setUser', response.data.data);
      return response;

    },

    /**
     * Verify token and get current authenticated user account details.
     */
    async refresh({ commit, dispatch, state }) {
      commit('setRefreshing', true);
      try {
        const response = await Axios.post('/auth/refresh');
        commit('setRefreshing', false);
        return dispatch('attempt', {
          token: response.data.data.access_token,
          ttl: response.data.data.expires_at,
          refreshTTL: true
        });
      }
      catch (error) {
        commit('clearUser');
        commit('clearToken');
        commit('clearTTL');
      }
    },

    /**
     * Logout current authenticated user.
     */
    async logout({ commit, getters, state }) {

      if (getters.authenticated) {
        try {
          await Axios.post('/auth/logout', { token: state.token });
          commit('clearUser');
          commit('clearToken');
          commit('clearTTL');
        }
        catch (e) {
          // Logout failed, probably because token is expired. Kill the user and token
          commit('clearUser');
          commit('clearToken');
          commit('clearTTL');
        }
        finally {
          window.location.href = '/login';
        }
      }
    },

    /**
     * Toggle logging out status ( used for ui purposes )
     */
    toggleLoggingOut({ commit }, setLogOut) {

      commit('setLoggingOut', setLogOut);
    }
  },
};
