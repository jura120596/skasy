(self.webpackChunk=self.webpackChunk||[]).push([[588],{5588:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const r={name:"UserEdit",components:{},data:function(e){return{user:{id:e.$route.params.id,name:"",second_name:"",email:"",address:"",phone:"",points:0,card_id:""},messages:{name:"",second_name:"",last_name:"",address:"",email:"",phone:"",points:"",card_id:""}}},computed:{isAdmin:function(){return this.$store.state.auth.user.role>=1024}},mounted:function(){var e=this,s=this.$route.params.id;0!=s&&window.axios.get("/user/"+s).then((function(s){e.user=s.data.data})).catch((function(s){var a;console.log(s),e.$root.$children[0].snackbarText=(null==s||null===(a=s.response)||void 0===a?void 0:a.error)||"Произошла ошибка",e.$root.$children[0].snackbar=!0}))},methods:{save:function(){var e=this;window.axios.put("/user/"+this.user.id,this.user).then((function(s){e.$router.push({name:"users"})})).catch((function(s){if(s.response&&422===s.response.status){var a=s.response.data.errors;Object.keys(e.messages).forEach((function(s){var r;e.messages[s]=(null===(r=a[s])||void 0===r?void 0:r[0])||""}))}}))}}};const t=(0,a(1900).Z)(r,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("v-container",{staticClass:"cover"},[a("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:e._s("Редактирование пользователя")}}),e._v(" "),a("v-text-field",{attrs:{label:"Имя",disabled:!e.isAdmin,"error-messages":e.messages.name},model:{value:e.user.name,callback:function(s){e.$set(e.user,"name",s)},expression:"user.name"}}),e._v(" "),a("v-text-field",{attrs:{label:"Фамилия",disabled:!e.isAdmin,"error-messages":e.messages.second_name},model:{value:e.user.second_name,callback:function(s){e.$set(e.user,"second_name",s)},expression:"user.second_name"}}),e._v(" "),a("v-text-field",{attrs:{label:"Отчество",disabled:!e.isAdmin,"error-messages":e.messages.last_name},model:{value:e.user.last_name,callback:function(s){e.$set(e.user,"last_name",s)},expression:"user.last_name"}}),e._v(" "),a("v-text-field",{attrs:{label:"Почта",disabled:!e.isAdmin,"error-messages":e.messages.email},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}),e._v(" "),a("v-text-field",{attrs:{label:"Телефон",counter:"10",disabled:!e.isAdmin,"error-messages":e.messages.phone},model:{value:e.user.phone,callback:function(s){e.$set(e.user,"phone",s)},expression:"user.phone"}}),e._v(" "),a("v-text-field",{attrs:{label:"Баллы","error-messages":e.messages.points},model:{value:e.user.points,callback:function(s){e.$set(e.user,"points",s)},expression:"user.points"}}),e._v(" "),a("v-text-field",{attrs:{label:"Номер карты",disabled:!e.isAdmin,"error-messages":e.messages.card_id},model:{value:e.user.card_id,callback:function(s){e.$set(e.user,"card_id",s)},expression:"user.card_id"}}),e._v(" "),a("v-text-field",{attrs:{label:"Адрес",disabled:!e.isAdmin,"error-messages":e.messages.address},model:{value:e.user.address,callback:function(s){e.$set(e.user,"address",s)},expression:"user.address"}}),e._v(" "),e.isAdmin?a("v-checkbox",{attrs:{label:"Староста"},model:{value:e.user.curator,callback:function(s){e.$set(e.user,"curator",s)},expression:"user.curator"}}):e._e(),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{staticClass:"save-btn-text",attrs:{color:"success",disabled:!e.isAdmin||!(e.user.name&&e.user.second_name&&e.user.email&&e.user.phone)},on:{click:e.save}},[e._v("\n        Сохранить\n    ")])],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlPzRjOWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlckVkaXQudnVlPzJkNzUiXSwibmFtZXMiOlsiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsImRvbVByb3BzIiwiX3MiLCJfdiIsImlzQWRtaW4iLCJtZXNzYWdlcyIsIm5hbWUiLCJtb2RlbCIsInZhbHVlIiwidXNlciIsImNhbGxiYWNrIiwiJCR2IiwiJHNldCIsImV4cHJlc3Npb24iLCJzZWNvbmRfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJwb2ludHMiLCJjYXJkX2lkIiwiYWRkcmVzcyIsIl9lIiwib24iLCJzYXZlIl0sIm1hcHBpbmdzIjoiaUhBc0VBLE1DdEVtTixFRHNFbk4sQ0FDRSxLQUFGLFdBQ0UsV0FBRixHQUNFLEtBQUYsWUFDSSxNQUFKLENBQ00sS0FBTixDQUNRLEdBQVIsbUJBQ1EsS0FBUixHQUNRLFlBQVIsR0FDUSxNQUFSLEdBQ1EsUUFBUixHQUNRLE1BQVIsR0FDUSxPQUFSLEVBQ1EsUUFBUixJQUVNLFNBQU4sQ0FDUSxLQUFSLEdBQ1EsWUFBUixHQUNRLFVBQVIsR0FDUSxRQUFSLEdBQ1EsTUFBUixHQUNRLE1BQVIsR0FDUSxPQUFSLEdBQ1EsUUFBUixNQUlFLFNBQUYsQ0FDSSxRQURKLFdBRU0sT0FBTix5Q0FHRSxRQWhDRixXQWdDSSxJQUFKLE9BQ0Esd0JBQ0EsTUFDTSxPQUFOLHdDQUNRLEVBQVIsb0JBREEsT0FFQSxZQUFRLElBQVIsRUFDUSxRQUFSLE9BQ1EsRUFBUixnSEFDUSxFQUFSLG1DQUlFLFFBQUYs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LFFBQVEsVUFBWVAsRUFBSVcsUUFBUSxpQkFBaUJYLEVBQUlZLFNBQVNlLFNBQVNiLE1BQU0sQ0FBQ0MsTUFBT2YsRUFBSWdCLEtBQVksUUFBRUMsU0FBUyxTQUFVQyxHQUFNbEIsRUFBSW1CLEtBQUtuQixFQUFJZ0IsS0FBTSxVQUFXRSxJQUFNRSxXQUFXLGtCQUFrQnBCLEVBQUlVLEdBQUcsS0FBTVYsRUFBVyxRQUFFSSxFQUFHLGFBQWEsQ0FBQ0csTUFBTSxDQUFDLE1BQVEsWUFBWU8sTUFBTSxDQUFDQyxNQUFPZixFQUFJZ0IsS0FBWSxRQUFFQyxTQUFTLFNBQVVDLEdBQU1sQixFQUFJbUIsS0FBS25CLEVBQUlnQixLQUFNLFVBQVdFLElBQU1FLFdBQVcsa0JBQWtCcEIsRUFBSTRCLEtBQUs1QixFQUFJVSxHQUFHLEtBQUtOLEVBQUcsWUFBWUosRUFBSVUsR0FBRyxLQUFLTixFQUFHLFFBQVEsQ0FBQ0UsWUFBWSxnQkFBZ0JDLE1BQU0sQ0FBQyxNQUFRLFVBQVUsVUFBWVAsRUFBSVcsV0FBYVgsRUFBSWdCLEtBQUtILE1BQVFiLEVBQUlnQixLQUFLSyxhQUFlckIsRUFBSWdCLEtBQUtPLE9BQVF2QixFQUFJZ0IsS0FBS1EsUUFBUUssR0FBRyxDQUFDLE1BQVE3QixFQUFJOEIsT0FBTyxDQUFDOUIsRUFBSVUsR0FBRyxnQ0FBZ0MsS0FDbGxGLElEVXBCLEVBQ0EsS0FDQSxLQUNBLE0iLCJmaWxlIjoianMvY2h1bmtzLzU4ODk3ZTA2YjgyOWIyOWFkM2YyNDU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lclxuICAgICAgICAgICAgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JjQvNGPXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5uYW1lXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pblwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMubmFtZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCk0LDQvNC40LvQuNGPXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5zZWNvbmRfbmFtZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnNlY29uZF9uYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0J7RgtGH0LXRgdGC0LLQvlwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIubGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pblwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMubGFzdF9uYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0J/QvtGH0YLQsFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFpc0FkbWluXCJcbiAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5lbWFpbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCi0LXQu9C10YTQvtC9XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5waG9uZVwiXG4gICAgICAgICAgICAgICAgY291bnRlcj1cIjEwXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pblwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMucGhvbmVcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQkdCw0LvQu9GLXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5wb2ludHNcIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLnBvaW50c1wiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCd0L7QvNC10YAg0LrQsNGA0YLRi1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuY2FyZF9pZFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmNhcmRfaWRcIlxuICAgICAgICAvPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQkNC00YDQtdGBXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNBZG1pblwiXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMuYWRkcmVzc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LWNoZWNrYm94XG4gICAgICAgICAgICAgICAgdi1pZj1cImlzQWRtaW5cIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0KHRgtCw0YDQvtGB0YLQsFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuY3VyYXRvclwiXG4gICAgICAgIC8+XG4gICAgICAgIDx2LXNwYWNlci8+XG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuLXRleHRcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmVcIlxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWlzQWRtaW4gfHwgISh1c2VyLm5hbWUgJiYgdXNlci5zZWNvbmRfbmFtZSAmJiB1c2VyLmVtYWlsJiYgdXNlci5waG9uZSlcIj5cbiAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxuICAgICAgICA8L3YtYnRuPlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJVc2VyRWRpdFwiLFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZtLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAwLFxuICAgICAgICAgICAgICAgICAgICBjYXJkX2lkOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2FyZF9pZDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0FkbWluKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA+PSAxMDI0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCBtb2RlbElkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgICAgICAgaWYgKG1vZGVsSWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy91c2VyLycgKyBtb2RlbElkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyVGV4dCA9IGU/LnJlc3BvbnNlPy5lcnJvciB8fCAn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucHV0KCcvdXNlci8nICsgKHRoaXMudXNlci5pZCksIHRoaXMudXNlcilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInVzZXJzXCJ9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ycyA9IGUucmVzcG9uc2UuZGF0YS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGM2MjNiZDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlckVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LWNvbnRhaW5lcicse3N0YXRpY0NsYXNzOlwiY292ZXJcIn0sW19jKCd2LXRvb2xiYXItdGl0bGUnLHtzdGF0aWNDbGFzczpcIm1iLTJcIixhdHRyczp7XCJhbGlnblwiOlwiY2VudGVyXCIsXCJqdXN0aWZ5XCI6XCJjZW50ZXJcIn0sZG9tUHJvcHM6e1widGV4dENvbnRlbnRcIjpfdm0uX3MoJ9Cg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyl9fSksX3ZtLl92KFwiIFwiKSxfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wibGFiZWxcIjpcItCY0LzRj1wiLFwiZGlzYWJsZWRcIjohX3ZtLmlzQWRtaW4sXCJlcnJvci1tZXNzYWdlc1wiOl92bS5tZXNzYWdlcy5uYW1lfSxtb2RlbDp7dmFsdWU6KF92bS51c2VyLm5hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0udXNlciwgXCJuYW1lXCIsICQkdil9LGV4cHJlc3Npb246XCJ1c2VyLm5hbWVcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJsYWJlbFwiOlwi0KTQsNC80LjQu9C40Y9cIixcImRpc2FibGVkXCI6IV92bS5pc0FkbWluLFwiZXJyb3ItbWVzc2FnZXNcIjpfdm0ubWVzc2FnZXMuc2Vjb25kX25hbWV9LG1vZGVsOnt2YWx1ZTooX3ZtLnVzZXIuc2Vjb25kX25hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0udXNlciwgXCJzZWNvbmRfbmFtZVwiLCAkJHYpfSxleHByZXNzaW9uOlwidXNlci5zZWNvbmRfbmFtZVwifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcImxhYmVsXCI6XCLQntGC0YfQtdGB0YLQstC+XCIsXCJkaXNhYmxlZFwiOiFfdm0uaXNBZG1pbixcImVycm9yLW1lc3NhZ2VzXCI6X3ZtLm1lc3NhZ2VzLmxhc3RfbmFtZX0sbW9kZWw6e3ZhbHVlOihfdm0udXNlci5sYXN0X25hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0udXNlciwgXCJsYXN0X25hbWVcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInVzZXIubGFzdF9uYW1lXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wibGFiZWxcIjpcItCf0L7Rh9GC0LBcIixcImRpc2FibGVkXCI6IV92bS5pc0FkbWluLFwiZXJyb3ItbWVzc2FnZXNcIjpfdm0ubWVzc2FnZXMuZW1haWx9LG1vZGVsOnt2YWx1ZTooX3ZtLnVzZXIuZW1haWwpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkJHYpfSxleHByZXNzaW9uOlwidXNlci5lbWFpbFwifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcImxhYmVsXCI6XCLQotC10LvQtdGE0L7QvVwiLFwiY291bnRlclwiOlwiMTBcIixcImRpc2FibGVkXCI6IV92bS5pc0FkbWluLFwiZXJyb3ItbWVzc2FnZXNcIjpfdm0ubWVzc2FnZXMucGhvbmV9LG1vZGVsOnt2YWx1ZTooX3ZtLnVzZXIucGhvbmUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0udXNlciwgXCJwaG9uZVwiLCAkJHYpfSxleHByZXNzaW9uOlwidXNlci5waG9uZVwifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcImxhYmVsXCI6XCLQkdCw0LvQu9GLXCIsXCJlcnJvci1tZXNzYWdlc1wiOl92bS5tZXNzYWdlcy5wb2ludHN9LG1vZGVsOnt2YWx1ZTooX3ZtLnVzZXIucG9pbnRzKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnVzZXIsIFwicG9pbnRzXCIsICQkdil9LGV4cHJlc3Npb246XCJ1c2VyLnBvaW50c1wifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcImxhYmVsXCI6XCLQndC+0LzQtdGAINC60LDRgNGC0YtcIixcImRpc2FibGVkXCI6IV92bS5pc0FkbWluLFwiZXJyb3ItbWVzc2FnZXNcIjpfdm0ubWVzc2FnZXMuY2FyZF9pZH0sbW9kZWw6e3ZhbHVlOihfdm0udXNlci5jYXJkX2lkKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnVzZXIsIFwiY2FyZF9pZFwiLCAkJHYpfSxleHByZXNzaW9uOlwidXNlci5jYXJkX2lkXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wibGFiZWxcIjpcItCQ0LTRgNC10YFcIixcImRpc2FibGVkXCI6IV92bS5pc0FkbWluLFwiZXJyb3ItbWVzc2FnZXNcIjpfdm0ubWVzc2FnZXMuYWRkcmVzc30sbW9kZWw6e3ZhbHVlOihfdm0udXNlci5hZGRyZXNzKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnVzZXIsIFwiYWRkcmVzc1wiLCAkJHYpfSxleHByZXNzaW9uOlwidXNlci5hZGRyZXNzXCJ9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLmlzQWRtaW4pP19jKCd2LWNoZWNrYm94Jyx7YXR0cnM6e1wibGFiZWxcIjpcItCh0YLQsNGA0L7RgdGC0LBcIn0sbW9kZWw6e3ZhbHVlOihfdm0udXNlci5jdXJhdG9yKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnVzZXIsIFwiY3VyYXRvclwiLCAkJHYpfSxleHByZXNzaW9uOlwidXNlci5jdXJhdG9yXCJ9fSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSxfYygndi1zcGFjZXInKSxfdm0uX3YoXCIgXCIpLF9jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwic2F2ZS1idG4tdGV4dFwiLGF0dHJzOntcImNvbG9yXCI6XCJzdWNjZXNzXCIsXCJkaXNhYmxlZFwiOiFfdm0uaXNBZG1pbiB8fCAhKF92bS51c2VyLm5hbWUgJiYgX3ZtLnVzZXIuc2Vjb25kX25hbWUgJiYgX3ZtLnVzZXIuZW1haWwmJiBfdm0udXNlci5waG9uZSl9LG9uOntcImNsaWNrXCI6X3ZtLnNhdmV9fSxbX3ZtLl92KFwiXFxuICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcXG4gICAgXCIpXSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9