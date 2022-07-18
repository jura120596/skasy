(self.webpackChunk=self.webpackChunk||[]).push([[384],{384:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const n={name:"Types",data:function(t){return{l:1,types:t.$store.state.types,page:1,delete_id:0,show:!1}},mounted:function(){},methods:{getPage:function(){var t=this;window.axios.get("type").then((function(e){var s=[];e.data.data.forEach((function(t){s.push({value:t.id,text:t.name})})),t.$store.state.types=s,t.types=t.$store.state.types}))},delete:function(){var t=this;this.delete_id>0&&window.axios.delete("/type/"+this.delete_id).then((function(e){t.getPage(),t.delete_id=0})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()},delete_id:function(t){t>0&&this.delete()}}};const a=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"cover"},[s("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("Типы заявок")}}),t._v(" "),t.$store.state.types.length>0?s("div",[s("v-container",t._l(t.$store.state.types,(function(e,n){return s("v-card",{key:n,staticStyle:{position:"relative"},attrs:{elevation:"0"}},[1024===t.$store.state.auth.user.role?s("div",{staticClass:"d-flex crud",staticStyle:{position:"absolute",right:"5px",top:"-10px","font-size":"10px"}},[s("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(s){t.delete_id=e.value}}},[s("v-icon",[t._v("mdi-delete")])],1)],1):t._e(),t._v(" "),s("h4",[t._v(t._s(e.text))])])})),1)],1):s("div",[s("div",{staticClass:"text-center my-3"},[t._v("Типов пока нет")])]),t._v(" "),1024===t.$store.state.auth.user.role?s("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",dark:""},on:{click:function(e){return t.$router.push("/type/0")}}},[s("v-icon",[t._v("mdi-plus")])],1):t._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1R5cGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVHlwZXMudnVlP2EyOWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1R5cGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVHlwZXMudnVlPzQwZDIiXSwibmFtZXMiOlsiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsImRvbVByb3BzIiwiX3MiLCJfdiIsIiRzdG9yZSIsInN0YXRlIiwidHlwZXMiLCJsZW5ndGgiLCJfbCIsImVudHJ5IiwiaW5kZXgiLCJrZXkiLCJzdGF0aWNTdHlsZSIsImF1dGgiLCJ1c2VyIiwicm9sZSIsIm9uIiwiJGV2ZW50IiwiZGVsZXRlX2lkIiwidmFsdWUiLCJfZSIsInRleHQiLCIkcm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6ImdIQXlDQSxNQ3pDZ04sRUR5Q2hOLENBQ0UsS0FBRixRQUNFLEtBQUYsWUFDSSxNQUFKLENBQ00sRUFBTixFQUNNLE1BQU4scUJBQ00sS0FBTixFQUNNLFVBQU4sRUFDTSxNQUFOLElBR0UsUUFYRixhQWFFLFFBQUYsQ0FDSSxRQURKLFdBQ00sSUFBTixPQUNNLE9BQU4sb0NBQ1EsSUFBUixLQUNRLEVBQVIsK0JBQ1UsRUFBVixNQUNZLE1BQVosS0FDWSxLQUFaLFlBR1EsRUFBUixxQkFDUSxFQUFSLCtCQVhJLE9BQUosV0FjTSxJQUFOLE9BQ0Esa0JBQ0EsK0RBQ1EsRUFBUixVQUNRLEVBQVIsZUFGQSxPQUdBLFlBQ1EsUUFBUixZQUlFLE1BQUYsQ0FDSSxLQURKLFdBRU0sS0FBTixXQUVJLFVBSkosU0FJQSxHQUNBLHNCRWpFQSxTQVhnQixFLFFBQUEsR0FDZCxHQ1JXLFdBQWEsSUFBSUEsRUFBSUMsS0FBU0MsRUFBR0YsRUFBSUcsZUFBbUJDLEVBQUdKLEVBQUlLLE1BQU1ELElBQUlGLEVBQUcsT0FBT0UsRUFBRyxjQUFjLENBQUNFLFlBQVksU0FBUyxDQUFDRixFQUFHLGtCQUFrQixDQUFDRSxZQUFZLE9BQU9DLE1BQU0sQ0FBQyxNQUFRLFNBQVMsUUFBVSxVQUFVQyxTQUFTLENBQUMsWUFBY1IsRUFBSVMsR0FBRyxrQkFBa0JULEVBQUlVLEdBQUcsS0FBTVYsRUFBSVcsT0FBT0MsTUFBTUMsTUFBTUMsT0FBUyxFQUFHVixFQUFHLE1BQU0sQ0FBQ0EsRUFBRyxjQUFjSixFQUFJZSxHQUFJZixFQUFJVyxPQUFPQyxNQUFXLE9BQUUsU0FBU0ksRUFBTUMsR0FBTyxPQUFPYixFQUFHLFNBQVMsQ0FBQ2MsSUFBSUQsRUFBTUUsWUFBWSxDQUFDLFNBQVcsWUFBWVosTUFBTSxDQUFDLFVBQVksTUFBTSxDQUFzQyxPQUFwQ1AsRUFBSVcsT0FBT0MsTUFBTVEsS0FBS0MsS0FBS0MsS0FBZWxCLEVBQUcsTUFBTSxDQUFDRSxZQUFZLGNBQWNhLFlBQVksQ0FBQyxTQUFXLFdBQVcsTUFBUSxNQUFNLElBQU0sUUFBUSxZQUFZLFNBQVMsQ0FBQ2YsRUFBRyxRQUFRLENBQUNFLFlBQVksT0FBT0MsTUFBTSxDQUFDLE1BQVEsTUFBTSxJQUFNLEdBQUcsTUFBUSxHQUFHLEtBQU8sSUFBSWdCLEdBQUcsQ0FBQyxNQUFRLFNBQVNDLEdBQVF4QixFQUFJeUIsVUFBWVQsRUFBTVUsU0FBUyxDQUFDdEIsRUFBRyxTQUFTLENBQUNKLEVBQUlVLEdBQUcsaUJBQWlCLElBQUksR0FBR1YsRUFBSTJCLEtBQUszQixFQUFJVSxHQUFHLEtBQUtOLEVBQUcsS0FBSyxDQUFDSixFQUFJVSxHQUFHVixFQUFJUyxHQUFHTyxFQUFNWSxjQUFhLElBQUksR0FBR3hCLEVBQUcsTUFBTSxDQUFDQSxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxvQkFBb0IsQ0FBQ04sRUFBSVUsR0FBRyxzQkFBc0JWLEVBQUlVLEdBQUcsS0FBMEMsT0FBcENWLEVBQUlXLE9BQU9DLE1BQU1RLEtBQUtDLEtBQUtDLEtBQWVsQixFQUFHLFFBQVEsQ0FBQ0UsWUFBWSxXQUFXQyxNQUFNLENBQUMsTUFBUSxVQUFVLElBQU0sR0FBRyxLQUFPLElBQUlnQixHQUFHLENBQUMsTUFBUSxTQUFTQyxHQUFRLE9BQU94QixFQUFJNkIsUUFBUUMsS0FBSyxjQUFjLENBQUMxQixFQUFHLFNBQVMsQ0FBQ0osRUFBSVUsR0FBRyxlQUFlLEdBQUdWLEVBQUkyQixNQUFNLEtBQ3hzQyxJRFVwQixFQUNBLEtBQ0EsS0FDQSxNIiwiZmlsZSI6ImpzL2NodW5rcy8zODRiODJjZmNiMGVkMThhZTc5M2RkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Ci0LjQv9GLINC30LDRj9Cy0L7QuidcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDxkaXYgdi1pZj1cIiRzdG9yZS5zdGF0ZS50eXBlcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZCAgdi1mb3I9XCIoZW50cnksIGluZGV4KSBpbiAkc3RvcmUuc3RhdGUudHlwZXNcIiA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlX2lkID0gZW50cnkudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3sgZW50cnkudGV4dCB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPtCi0LjQv9C+0LIg0L/QvtC60LAg0L3QtdGCPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvdHlwZS8wJylcIlxuICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiVHlwZXNcIixcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGw6IDEsXG4gICAgICAgICAgICAgICAgdHlwZXM6IHZtLiRzdG9yZS5zdGF0ZS50eXBlcyxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGRlbGV0ZV9pZDogMCxcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRQYWdlKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJ3R5cGUnKS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByLmRhdGEuZGF0YS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS50eXBlcyA9IHR5cGVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzID0gdGhpcy4kc3RvcmUuc3RhdGUudHlwZXNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxldGVfaWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvdHlwZS8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UeXBlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UeXBlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1R5cGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMTVmNWNhMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UeXBlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1R5cGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJjb3ZlclwifSxbX2MoJ3YtdG9vbGJhci10aXRsZScse3N0YXRpY0NsYXNzOlwibWItMlwiLGF0dHJzOntcImFsaWduXCI6XCJjZW50ZXJcIixcImp1c3RpZnlcIjpcImNlbnRlclwifSxkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0KLQuNC/0Ysg0LfQsNGP0LLQvtC6Jyl9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLiRzdG9yZS5zdGF0ZS50eXBlcy5sZW5ndGggPiAwKT9fYygnZGl2JyxbX2MoJ3YtY29udGFpbmVyJyxfdm0uX2woKF92bS4kc3RvcmUuc3RhdGUudHlwZXMpLGZ1bmN0aW9uKGVudHJ5LGluZGV4KXtyZXR1cm4gX2MoJ3YtY2FyZCcse2tleTppbmRleCxzdGF0aWNTdHlsZTp7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIn0sYXR0cnM6e1wiZWxldmF0aW9uXCI6XCIwXCJ9fSxbKF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImQtZmxleCBjcnVkXCIsc3RhdGljU3R5bGU6e1wicG9zaXRpb25cIjpcImFic29sdXRlXCIsXCJyaWdodFwiOlwiNXB4XCIsXCJ0b3BcIjpcIi0xMHB4XCIsXCJmb250LXNpemVcIjpcIjEwcHhcIn19LFtfYygndi1idG4nLHtzdGF0aWNDbGFzczpcIm1yLTNcIixhdHRyczp7XCJjb2xvclwiOlwicmVkXCIsXCJmYWJcIjpcIlwiLFwic21hbGxcIjpcIlwiLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uZGVsZXRlX2lkID0gZW50cnkudmFsdWV9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktZGVsZXRlXCIpXSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCdoNCcsW192bS5fdihfdm0uX3MoZW50cnkudGV4dCkpXSldKX0pLDEpXSwxKTpfYygnZGl2JyxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXIgbXktM1wifSxbX3ZtLl92KFwi0KLQuNC/0L7QsiDQv9C+0LrQsCDQvdC10YJcIildKV0pLF92bS5fdihcIiBcIiksKF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQpP19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwic2F2ZS1idG5cIixhdHRyczp7XCJjb2xvclwiOlwic3VjY2Vzc1wiLFwiZmFiXCI6XCJcIixcImRhcmtcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS4kcm91dGVyLnB1c2goJy90eXBlLzAnKX19fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIm1kaS1wbHVzXCIpXSldLDEpOl92bS5fZSgpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==