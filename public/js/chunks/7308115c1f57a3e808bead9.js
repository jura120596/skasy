(self.webpackChunk=self.webpackChunk||[]).push([[730],{6730:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const i={name:"BusEvents",data:function(t){return{l:1,events:[],page:1,dialogPost:null,delete_id:0,show:!1,skip:!1}},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;window.axios.get("/bus/event/",{params:{page:this.page,per_page:10}}).then((function(e){t.events=e.data.data})).catch((function(t){console.log(t)}))},delete:function(){var t=this;this.delete_id>0&&window.axios.delete("/bus/event/"+this.delete_id).then((function(e){t.getPage(),t.delete_id=0})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()},delete_id:function(t){t>0&&this.delete()}}};const a=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"cover"},[s("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("Расписание автобуса")}}),t._v(" "),t.events.length>0?s("div",[s("v-container",{staticClass:"my-0 text-center"},[s("v-checkbox",{staticClass:"mt-0 ml-9",attrs:{label:"Показать всё расписание"},model:{value:t.skip,callback:function(e){t.skip=e},expression:"skip"}})],1),t._v(" "),s("v-container",{staticClass:"pt-0 mt-0"},[s("v-timeline",{attrs:{dense:""}},t._l(t.events,(function(e,i){return s("div",{key:i,staticStyle:{position:"relative"}},[1024!==t.$store.state.auth.user.role||e.skip&&!t.skip?t._e():s("div",{staticClass:"d-flex crud",staticStyle:{position:"absolute",right:"5px",top:"-10px","font-size":"10px"}},[s("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(s){t.delete_id=e.id}}},[s("v-icon",[t._v("mdi-delete")])],1)],1),t._v(" "),!e.skip||t.skip?s("v-timeline-item",{attrs:{small:"",color:e.color||"#11a506"}},[s("v-card",{staticClass:"container ma-0 pa-0 d-flex flex-column",attrs:{elevation:"0"}},[s("span",[t._v(t._s(e.time))]),t._v(" "),s("h4",[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v("Остановка: "+t._s(e.place))]),t._v(" "),s("span",{staticClass:"text-right history-time",attrs:{title:e.time}})])],1):t._e()],1)})),0)],1)],1):s("div",[s("div",{staticClass:"text-center my-3"},[t._v("Расписание еще не создано")])]),t._v(" "),1024===t.$store.state.auth.user.role?s("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",dark:""},on:{click:function(e){return t.$router.push("/bus/event/0")}}},[s("v-icon",[t._v("mdi-plus")])],1):t._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWU/NTY4YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZT9hNTIyIl0sIm5hbWVzIjpbIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJkb21Qcm9wcyIsIl9zIiwiX3YiLCJldmVudHMiLCJsZW5ndGgiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJza2lwIiwiZXhwcmVzc2lvbiIsIl9sIiwiZW50cnkiLCJpbmRleCIsImtleSIsInN0YXRpY1N0eWxlIiwiJHN0b3JlIiwic3RhdGUiLCJhdXRoIiwidXNlciIsInJvbGUiLCJfZSIsIm9uIiwiJGV2ZW50IiwiZGVsZXRlX2lkIiwiaWQiLCJjb2xvciIsInRpbWUiLCJ0aXRsZSIsInBsYWNlIiwiJHJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiJpSEFtRUEsTUNuRW9OLEVEbUVwTixDQUNFLEtBQUYsWUFDRSxLQUFGLFlBQ0ksTUFBSixDQUNNLEVBQU4sRUFDTSxPQUFOLEdBQ00sS0FBTixFQUNNLFdBQU4sS0FDTSxVQUFOLEVBQ00sTUFBTixFQUNNLE1BQU4sSUFHRSxRQWJGLFdBY0ksS0FBSixXQUdFLFFBQUYsQ0FDSSxRQURKLFdBQ00sSUFBTixPQUNNLE9BQU4seUJBQVEsT0FBUixDQUFVLEtBQVYsVUFBVSxTQUFWLHdCQUNRLEVBQVIsc0JBREEsT0FFQSxZQUNRLFFBQVIsV0FMSSxPQUFKLFdBUU0sSUFBTixPQUNBLGtCQUNBLG9FQUNRLEVBQVIsVUFDUSxFQUFSLGVBRkEsT0FHQSxZQUNRLFFBQVIsWUFJRSxNQUFGLENB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LEVBQUlVLEdBQUcsZUFBZSxHQUFHVixFQUFJNkIsTUFBTSxLQUMxNUQsSURVcEIsRUFDQSxLQUNBLEtBQ0EsTSIsImZpbGUiOiJqcy9jaHVua3MvNzMwODExNWMxZjU3YTNlODA4YmVhZDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxyXG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQoNCw0YHQv9C40YHQsNC90LjQtSDQsNCy0YLQvtCx0YPRgdCwJ1wiPlxyXG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImV2ZW50cy5sZW5ndGggPiAwXCI+XHJcblxyXG4gICAgICAgICAgICA8di1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm15LTAgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8di1jaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTAgbWwtOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJza2lwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiYNCf0L7QutCw0LfQsNGC0Ywg0LLRgdGRINGA0LDRgdC/0LjRgdCw0L3QuNC1YFwiXHJcbiAgICAgICAgICAgICAgICA+PC92LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJwdC0wIG10LTBcIj5cclxuICAgICAgICAgICAgICAgIDx2LXRpbWVsaW5lIGRlbnNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoZW50cnksIGluZGV4KSBpbiBldmVudHNcIiA6a2V5PVwiaW5kZXhcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0ICYmICghZW50cnkuc2tpcCB8fCBza2lwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggY3J1ZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZV9pZCA9IGVudHJ5LmlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGltZWxpbmUtaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhZW50cnkuc2tpcCB8fCBza2lwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2xvcj1cImVudHJ5LmNvbG9yIHx8ICcjMTFhNTA2J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgZWxldmF0aW9uPVwiMFwiIGNsYXNzPVwiY29udGFpbmVyIG1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBlbnRyeS50aW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57eyBlbnRyeS50aXRsZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J7RgdGC0LDQvdC+0LLQutCwOiB7eyBlbnRyeS5wbGFjZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXJpZ2h0IGhpc3RvcnktdGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJlbnRyeS50aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRpbWVsaW5lLWl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3YtdGltZWxpbmU+XHJcbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+0KDQsNGB0L/QuNGB0LDQvdC40LUg0LXRidC1INC90LUg0YHQvtC30LTQsNC90L48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxyXG4gICAgICAgICAgICAgICB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XCJcclxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgZmFiXHJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL2J1cy9ldmVudC8wJylcIlxyXG4gICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XHJcbiAgICAgICAgPC92LWJ0bj5cclxuICAgIDwvdi1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiQnVzRXZlbnRzXCIsXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsOiAxLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICBkaWFsb2dQb3N0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBza2lwOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBnZXRQYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL2J1cy9ldmVudC8nLCB7cGFyYW1zOiB7cGFnZTogdGhpcy5wYWdlLCBwZXJfcGFnZTogMTB9fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvYnVzL2V2ZW50LycgKyB0aGlzLmRlbGV0ZV9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHBhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlX2lkKG52KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobnYgPiAwKSB0aGlzLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzBkNjNiNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcImNvdmVyXCJ9LFtfYygndi10b29sYmFyLXRpdGxlJyx7c3RhdGljQ2xhc3M6XCJtYi0yXCIsYXR0cnM6e1wiYWxpZ25cIjpcImNlbnRlclwiLFwianVzdGlmeVwiOlwiY2VudGVyXCJ9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKCfQoNCw0YHQv9C40YHQsNC90LjQtSDQsNCy0YLQvtCx0YPRgdCwJyl9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLmV2ZW50cy5sZW5ndGggPiAwKT9fYygnZGl2JyxbX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJteS0wIHRleHQtY2VudGVyXCJ9LFtfYygndi1jaGVja2JveCcse3N0YXRpY0NsYXNzOlwibXQtMCBtbC05XCIsYXR0cnM6e1wibGFiZWxcIjpcItCf0L7QutCw0LfQsNGC0Ywg0LLRgdGRINGA0LDRgdC/0LjRgdCw0L3QuNC1XCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnNraXApLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uc2tpcD0kJHZ9LGV4cHJlc3Npb246XCJza2lwXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJwdC0wIG10LTBcIn0sW19jKCd2LXRpbWVsaW5lJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sX3ZtLl9sKChfdm0uZXZlbnRzKSxmdW5jdGlvbihlbnRyeSxpbmRleCl7cmV0dXJuIF9jKCdkaXYnLHtrZXk6aW5kZXgsc3RhdGljU3R5bGU6e1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCJ9fSxbKF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQgJiYgKCFlbnRyeS5za2lwIHx8IF92bS5za2lwKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZC1mbGV4IGNydWRcIixzdGF0aWNTdHlsZTp7XCJwb3NpdGlvblwiOlwiYWJzb2x1dGVcIixcInJpZ2h0XCI6XCI1cHhcIixcInRvcFwiOlwiLTEwcHhcIixcImZvbnQtc2l6ZVwiOlwiMTBweFwifX0sW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibXItM1wiLGF0dHJzOntcImNvbG9yXCI6XCJyZWRcIixcImZhYlwiOlwiXCIsXCJzbWFsbFwiOlwiXCIsXCJkYXJrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5kZWxldGVfaWQgPSBlbnRyeS5pZH19fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIm1kaS1kZWxldGVcIildKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKCFlbnRyeS5za2lwIHx8IF92bS5za2lwKT9fYygndi10aW1lbGluZS1pdGVtJyx7YXR0cnM6e1wic21hbGxcIjpcIlwiLFwiY29sb3JcIjplbnRyeS5jb2xvciB8fCAnIzExYTUwNid9fSxbX2MoJ3YtY2FyZCcse3N0YXRpY0NsYXNzOlwiY29udGFpbmVyIG1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW5cIixhdHRyczp7XCJlbGV2YXRpb25cIjpcIjBcIn19LFtfYygnc3BhbicsW192bS5fdihfdm0uX3MoZW50cnkudGltZSkpXSksX3ZtLl92KFwiIFwiKSxfYygnaDQnLFtfdm0uX3YoX3ZtLl9zKGVudHJ5LnRpdGxlKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyxbX3ZtLl92KFwi0J7RgdGC0LDQvdC+0LLQutCwOiBcIitfdm0uX3MoZW50cnkucGxhY2UpKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInRleHQtcmlnaHQgaGlzdG9yeS10aW1lXCIsYXR0cnM6e1widGl0bGVcIjplbnRyeS50aW1lfX0pXSldLDEpOl92bS5fZSgpXSwxKX0pLDApXSwxKV0sMSk6X2MoJ2RpdicsW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyIG15LTNcIn0sW192bS5fdihcItCg0LDRgdC/0LjRgdCw0L3QuNC1INC10YnQtSDQvdC1INGB0L7Qt9C00LDQvdC+XCIpXSldKSxfdm0uX3YoXCIgXCIpLChfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0KT9fYygndi1idG4nLHtzdGF0aWNDbGFzczpcInNhdmUtYnRuXCIsYXR0cnM6e1wiY29sb3JcIjpcInN1Y2Nlc3NcIixcImZhYlwiOlwiXCIsXCJkYXJrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uJHJvdXRlci5wdXNoKCcvYnVzL2V2ZW50LzAnKX19fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIm1kaS1wbHVzXCIpXSldLDEpOl92bS5fZSgpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==