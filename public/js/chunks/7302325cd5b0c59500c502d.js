(self.webpackChunk=self.webpackChunk||[]).push([[730],{6730:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const i={name:"BusEvents",data:function(t){return{l:1,events:[],page:1,dialogPost:null,delete_id:0,show:!1,skip:!1}},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;window.axios.get("/bus/event/",{params:{page:this.page,per_page:10}}).then((function(e){t.events=e.data.data})).catch((function(t){console.log(t)}))},delete:function(){var t=this;this.delete_id>0&&window.axios.delete("/bus/event/"+this.delete_id).then((function(e){t.getPage(),t.delete_id=0})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()},delete_id:function(t){t>0&&this.delete()}}};const a=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"cover"},[s("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("Расписание автобуса")}}),t._v(" "),t.events.length>0?s("div",[s("v-container",{staticClass:"my-0 text-center"},[s("v-checkbox",{staticClass:"mt-0 ml-9",attrs:{label:"Показать всё расписание"},model:{value:t.skip,callback:function(e){t.skip=e},expression:"skip"}})],1),t._v(" "),s("v-container",{staticClass:"pt-0 mt-0"},[s("v-timeline",{attrs:{dense:""}},t._l(t.events,(function(e,i){return s("div",{key:i,staticStyle:{position:"relative"}},[1024!==t.$store.state.auth.user.role||e.skip&&!t.skip?t._e():s("div",{staticClass:"d-flex crud",staticStyle:{position:"absolute",right:"5px",top:"-10px","font-size":"10px"}},[s("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(s){t.delete_id=e.id}}},[s("v-icon",[t._v("mdi-delete")])],1)],1),t._v(" "),!e.skip||t.skip?s("v-timeline-item",{attrs:{small:"",color:e.color||"#11a506"}},[s("v-card",{staticClass:"container ma-0 pa-0 d-flex flex-column",attrs:{elevation:"0"}},[s("span",[t._v(t._s(e.time))]),t._v(" "),s("h4",[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v("Остановка: "+t._s(e.place))]),t._v(" "),s("span",{staticClass:"text-right history-time",attrs:{title:e.time}})])],1):t._e()],1)})),0)],1)],1):s("div",[s("div",{staticClass:"text-center my-3"},[t._v("Расписание еще не создано")])]),t._v(" "),1024===t.$store.state.auth.user.role?s("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",dark:""},on:{click:function(e){return t.$router.push("/bus/event/0")}}},[s("v-icon",[t._v("mdi-plus")])],1):t._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWU/NTY4YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZT9hNTIyIl0sIm5hbWVzIjpbIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJkb21Qcm9wcyIsIl9zIiwiX3YiLCJldmVudHMiLCJsZW5ndGgiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJza2lwIiwiZXhwcmVzc2lvbiIsIl9sIiwiZW50cnkiLCJpbmRleCIsImtleSIsInN0YXRpY1N0eWxlIiwiJHN0b3JlIiwic3RhdGUiLCJhdXRoIiwidXNlciIsInJvbGUiLCJfZSIsIm9uIiwiJGV2ZW50IiwiZGVsZXRlX2lkIiwiaWQiLCJjb2xvciIsInRpbWUiLCJ0aXRsZSIsInBsYWNlIiwiJHJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiJpSEFtRUEsTUNuRW9OLEVEbUVwTixDQUNFLEtBQUYsWUFDRSxLQUFGLFlBQ0ksTUFBSixDQUNNLEVBQU4sRUFDTSxPQUFOLEdBQ00sS0FBTixFQUNNLFdBQU4sS0FDTSxVQUFOLEVBQ00sTUFBTixFQUNNLE1BQU4sSUFHRSxRQWJGLFdBY0ksS0FBSixXQUdFLFFBQUYsQ0FDSSxRQURKLFdBQ00sSUFBTixPQUNNLE9BQU4seUJBQVEsT0FBUixDQUFVLEtBQVYsVUFBVSxTQUFWLHdCQUNRLEVBQVIsc0JBREEsT0FFQSxZQUNRLFFBQVIsV0FMSSxPQUFKLFdBUU0sSUFBTixPQUNBLGtCQUNBLG9FQUNRLEVBQVIsVUFDUSxFQUFSLGVBRkEsT0FHQSxZQUNRLFFBQVIsWUFJRSxNQUFGLENB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LEVBQUlVLEdBQUcsZUFBZSxHQUFHVixFQUFJNkIsTUFBTSxLQUMxNUQsSURVcEIsRUFDQSxLQUNBLEtBQ0EsTSIsImZpbGUiOiJqcy9jaHVua3MvNzMwMjMyNWNkNWIwYzU5NTAwYzUwMmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQoNCw0YHQv9C40YHQsNC90LjQtSDQsNCy0YLQvtCx0YPRgdCwJ1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPGRpdiB2LWlmPVwiZXZlbnRzLmxlbmd0aCA+IDBcIj5cblxuICAgICAgICAgICAgPHYtY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXktMCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHYtY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMCBtbC05XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJza2lwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImDQn9C+0LrQsNC30LDRgtGMINCy0YHRkSDRgNCw0YHQv9C40YHQsNC90LjQtWBcIlxuICAgICAgICAgICAgICAgID48L3YtY2hlY2tib3g+XG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVwicHQtMCBtdC0wXCI+XG4gICAgICAgICAgICAgICAgPHYtdGltZWxpbmUgZGVuc2U+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoZW50cnksIGluZGV4KSBpbiBldmVudHNcIiA6a2V5PVwiaW5kZXhcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQgJiYgKCFlbnRyeS5za2lwIHx8IHNraXApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggY3J1ZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBlbnRyeS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRpbWVsaW5lLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFlbnRyeS5za2lwIHx8IHNraXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29sb3I9XCJlbnRyeS5jb2xvciB8fCAnIzExYTUwNidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgZWxldmF0aW9uPVwiMFwiIGNsYXNzPVwiY29udGFpbmVyIG1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgZW50cnkudGltZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7IGVudHJ5LnRpdGxlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0J7RgdGC0LDQvdC+0LLQutCwOiB7eyBlbnRyeS5wbGFjZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtcmlnaHQgaGlzdG9yeS10aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJlbnRyeS50aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10aW1lbGluZS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3YtdGltZWxpbmU+XG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPtCg0LDRgdC/0LjRgdCw0L3QuNC1INC10YnQtSDQvdC1INGB0L7Qt9C00LDQvdC+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvYnVzL2V2ZW50LzAnKVwiXG4gICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxuICAgICAgICA8L3YtYnRuPlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogXCJCdXNFdmVudHNcIixcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGw6IDEsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgZGVsZXRlX2lkOiAwLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNraXA6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XG5cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZ2V0KCcvYnVzL2V2ZW50LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsZXRlX2lkID4gMClcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL2J1cy9ldmVudC8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQnVzRXZlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YzBkNjNiNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcImNvdmVyXCJ9LFtfYygndi10b29sYmFyLXRpdGxlJyx7c3RhdGljQ2xhc3M6XCJtYi0yXCIsYXR0cnM6e1wiYWxpZ25cIjpcImNlbnRlclwiLFwianVzdGlmeVwiOlwiY2VudGVyXCJ9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKCfQoNCw0YHQv9C40YHQsNC90LjQtSDQsNCy0YLQvtCx0YPRgdCwJyl9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLmV2ZW50cy5sZW5ndGggPiAwKT9fYygnZGl2JyxbX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJteS0wIHRleHQtY2VudGVyXCJ9LFtfYygndi1jaGVja2JveCcse3N0YXRpY0NsYXNzOlwibXQtMCBtbC05XCIsYXR0cnM6e1wibGFiZWxcIjpcItCf0L7QutCw0LfQsNGC0Ywg0LLRgdGRINGA0LDRgdC/0LjRgdCw0L3QuNC1XCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnNraXApLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uc2tpcD0kJHZ9LGV4cHJlc3Npb246XCJza2lwXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJwdC0wIG10LTBcIn0sW19jKCd2LXRpbWVsaW5lJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sX3ZtLl9sKChfdm0uZXZlbnRzKSxmdW5jdGlvbihlbnRyeSxpbmRleCl7cmV0dXJuIF9jKCdkaXYnLHtrZXk6aW5kZXgsc3RhdGljU3R5bGU6e1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCJ9fSxbKF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQgJiYgKCFlbnRyeS5za2lwIHx8IF92bS5za2lwKSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZC1mbGV4IGNydWRcIixzdGF0aWNTdHlsZTp7XCJwb3NpdGlvblwiOlwiYWJzb2x1dGVcIixcInJpZ2h0XCI6XCI1cHhcIixcInRvcFwiOlwiLTEwcHhcIixcImZvbnQtc2l6ZVwiOlwiMTBweFwifX0sW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibXItM1wiLGF0dHJzOntcImNvbG9yXCI6XCJyZWRcIixcImZhYlwiOlwiXCIsXCJzbWFsbFwiOlwiXCIsXCJkYXJrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5kZWxldGVfaWQgPSBlbnRyeS5pZH19fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIm1kaS1kZWxldGVcIildKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksKCFlbnRyeS5za2lwIHx8IF92bS5za2lwKT9fYygndi10aW1lbGluZS1pdGVtJyx7YXR0cnM6e1wic21hbGxcIjpcIlwiLFwiY29sb3JcIjplbnRyeS5jb2xvciB8fCAnIzExYTUwNid9fSxbX2MoJ3YtY2FyZCcse3N0YXRpY0NsYXNzOlwiY29udGFpbmVyIG1hLTAgcGEtMCBkLWZsZXggZmxleC1jb2x1bW5cIixhdHRyczp7XCJlbGV2YXRpb25cIjpcIjBcIn19LFtfYygnc3BhbicsW192bS5fdihfdm0uX3MoZW50cnkudGltZSkpXSksX3ZtLl92KFwiIFwiKSxfYygnaDQnLFtfdm0uX3YoX3ZtLl9zKGVudHJ5LnRpdGxlKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyxbX3ZtLl92KFwi0J7RgdGC0LDQvdC+0LLQutCwOiBcIitfdm0uX3MoZW50cnkucGxhY2UpKV0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInRleHQtcmlnaHQgaGlzdG9yeS10aW1lXCIsYXR0cnM6e1widGl0bGVcIjplbnRyeS50aW1lfX0pXSldLDEpOl92bS5fZSgpXSwxKX0pLDApXSwxKV0sMSk6X2MoJ2RpdicsW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyIG15LTNcIn0sW192bS5fdihcItCg0LDRgdC/0LjRgdCw0L3QuNC1INC10YnQtSDQvdC1INGB0L7Qt9C00LDQvdC+XCIpXSldKSxfdm0uX3YoXCIgXCIpLChfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0KT9fYygndi1idG4nLHtzdGF0aWNDbGFzczpcInNhdmUtYnRuXCIsYXR0cnM6e1wiY29sb3JcIjpcInN1Y2Nlc3NcIixcImZhYlwiOlwiXCIsXCJkYXJrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uJHJvdXRlci5wdXNoKCcvYnVzL2V2ZW50LzAnKX19fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIm1kaS1wbHVzXCIpXSldLDEpOl92bS5fZSgpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==