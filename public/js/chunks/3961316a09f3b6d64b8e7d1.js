(self.webpackChunk=self.webpackChunk||[]).push([[396],{7396:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});const i={name:"BusEvents",data:function(t){return{l:1,events:[],page:1,dialogPost:null,delete_id:0,show:!1,skip:!1,skipped:0}},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;window.axios.get("/bus/event/",{params:{page:this.page,per_page:10}}).then((function(e){e.data.data.forEach((function(e){t.skipped+=e.skip?1:0})),t.events=e.data.data})).catch((function(t){console.log(t)}))},delete:function(){var t=this;this.delete_id>0&&window.axios.delete("/bus/event/"+this.delete_id).then((function(e){t.getPage(),t.delete_id=0})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()},delete_id:function(t){t>0&&this.delete()}}};const a=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"cover"},[s("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("Расписание автобуса")}}),t._v(" "),t.events.length>0?s("div",[s("v-container",{staticClass:"my-0 text-center"},[s("v-checkbox",{staticClass:"mt-0 ml-9",attrs:{label:"Показать всё расписание"},model:{value:t.skip,callback:function(e){t.skip=e},expression:"skip"}})],1),t._v(" "),s("v-container",{staticClass:"pt-0 mt-0"},[s("v-timeline",{attrs:{dense:""}},t._l(t.events,(function(e,i){return s("div",{key:i,staticStyle:{position:"relative"}},[1024!==t.$store.state.auth.user.role||e.skip&&!t.skip?t._e():s("div",{staticClass:"d-flex crud",staticStyle:{position:"absolute",right:"5px",top:"-10px","font-size":"10px"}},[s("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(s){t.delete_id=e.id}}},[s("v-icon",[t._v("mdi-delete")])],1)],1),t._v(" "),!e.skip||t.skip||t.skipped===t.events.length?s("v-timeline-item",{attrs:{small:"",color:e.color||"#11a506"}},[s("v-card",{staticClass:"container ma-0 pa-0 d-flex flex-column",attrs:{elevation:"0"}},[s("span",[t._v(t._s(e.time))]),t._v(" "),s("h4",[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v("Остановка: "+t._s(e.place))]),t._v(" "),s("span",{staticClass:"text-right history-time",attrs:{title:e.time}})])],1):t._e()],1)})),0)],1)],1):s("div",[s("div",{staticClass:"text-center my-3"},[t._v("Расписание еще не создано")])]),t._v(" "),1024===t.$store.state.auth.user.role?s("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",dark:""},on:{click:function(e){return t.$router.push("/bus/event/0")}}},[s("v-icon",[t._v("mdi-plus")])],1):t._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0J1c0V2ZW50cy52dWU/NTY4YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQnVzRXZlbnRzLnZ1ZT80N2JjIl0sIm5hbWVzIjpbIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJkb21Qcm9wcyIsIl9zIiwiX3YiLCJldmVudHMiLCJsZW5ndGgiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJza2lwIiwiZXhwcmVzc2lvbiIsIl9sIiwiZW50cnkiLCJpbmRleCIsImtleSIsInN0YXRpY1N0eWxlIiwiJHN0b3JlIiwic3RhdGUiLCJhdXRoIiwidXNlciIsInJvbGUiLCJfZSIsIm9uIiwiJGV2ZW50IiwiZGVsZXRlX2lkIiwiaWQiLCJza2lwcGVkIiwiY29sb3IiLCJ0aW1lIiwidGl0bGUiLCJwbGFjZSIsIiRyb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiaUhBbUVBLE1DbkVvTixFRG1FcE4sQ0FDRSxLQUFGLFlBQ0UsS0FBRixZQUNJLE1BQUosQ0FDTSxFQUFOLEVBQ00sT0FBTixHQUNNLEtBQU4sRUFDTSxXQUFOLEtBQ00sVUFBTixFQUNNLE1BQU4sRUFDTSxNQUFOLEVBQ00sUUFBTixJQUdFLFFBZEYsV0FlSSxLQUFKLFdBR0UsUUFBRixDQUNJLFFBREosV0FDTSxJQUFOLE9BQ00sT0FBTix5QkFBUSxPQUFSLENBQVUsS0FBVixVQUFVLFNBQVYsd0JBQ1EsRUFBUiwrQkFDVSxFQUFWLHVCQUVRLEVBQVIsc0JBSkEsT0FLQSxZQUNRLFFBQVIsV0FSSSxPQUFKLFdBV00sSUFBTixPQUNBLGtCQUNBLG9FQUNRLEVBQVIs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RyxDQUFDLE1BQVEsU0FBU0MsR0FBUSxPQUFPL0IsRUFBSXVDLFFBQVFDLEtBQUssbUJBQW1CLENBQUNwQyxFQUFHLFNBQVMsQ0FBQ0osRUFBSVUsR0FBRyxlQUFlLEdBQUdWLEVBQUk2QixNQUFNLEtBQ2g4RCxJRFVwQixFQUNBLEtBQ0EsS0FDQSxNIiwiZmlsZSI6ImpzL2NodW5rcy8zOTYxMzE2YTA5ZjNiNmQ2NGI4ZTdkMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XHJcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1INCw0LLRgtC+0LHRg9GB0LAnXCI+XHJcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiZXZlbnRzLmxlbmd0aCA+IDBcIj5cclxuXHJcbiAgICAgICAgICAgIDx2LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXktMCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx2LWNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMCBtbC05XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNraXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJg0J/QvtC60LDQt9Cw0YLRjCDQstGB0ZEg0YDQsNGB0L/QuNGB0LDQvdC40LVgXCJcclxuICAgICAgICAgICAgICAgID48L3YtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cInB0LTAgbXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPHYtdGltZWxpbmUgZGVuc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihlbnRyeSwgaW5kZXgpIGluIGV2ZW50c1wiIDprZXk9XCJpbmRleFwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQgJiYgKCFlbnRyeS5za2lwIHx8IHNraXApXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlX2lkID0gZW50cnkuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8di10aW1lbGluZS1pdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFlbnRyeS5za2lwIHx8IHNraXAgfHwgIHNraXBwZWQgPT09IGV2ZW50cy5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNvbG9yPVwiZW50cnkuY29sb3IgfHwgJyMxMWE1MDYnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBlbGV2YXRpb249XCIwXCIgY2xhc3M9XCJjb250YWluZXIgbWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGVudHJ5LnRpbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7IGVudHJ5LnRpdGxlIH19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QntGB0YLQsNC90L7QstC60LA6IHt7IGVudHJ5LnBsYWNlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtcmlnaHQgaGlzdG9yeS10aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cImVudHJ5LnRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGltZWxpbmUtaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdi10aW1lbGluZT5cclxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj7QoNCw0YHQv9C40YHQsNC90LjQtSDQtdGJ0LUg0L3QtSDRgdC+0LfQtNCw0L3QvjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXHJcbiAgICAgICAgICAgICAgIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxyXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvYnVzL2V2ZW50LzAnKVwiXHJcbiAgICAgICAgICAgICAgIGRhcms+XHJcbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cclxuICAgICAgICA8L3YtYnRuPlxyXG4gICAgPC92LWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJCdXNFdmVudHNcIixcclxuICAgICAgICBkYXRhOiAodm0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGw6IDEsXHJcbiAgICAgICAgICAgICAgICBldmVudHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNraXA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2tpcHBlZDogMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBnZXRQYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL2J1cy9ldmVudC8nLCB7cGFyYW1zOiB7cGFnZTogdGhpcy5wYWdlLCBwZXJfcGFnZTogMTB9fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmRhdGEuZm9yRWFjaCgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lwcGVkICs9IGV2ZW50LnNraXAgPyAxIDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxldGVfaWQgPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy9idXMvZXZlbnQvJyArIHRoaXMuZGVsZXRlX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9pZCA9IDBcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgcGFnZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWxldGVfaWQobnYpIHtcclxuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1c0V2ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdXNFdmVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5MjMxYTZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0J1c0V2ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0J1c0V2ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LWNvbnRhaW5lcicse3N0YXRpY0NsYXNzOlwiY292ZXJcIn0sW19jKCd2LXRvb2xiYXItdGl0bGUnLHtzdGF0aWNDbGFzczpcIm1iLTJcIixhdHRyczp7XCJhbGlnblwiOlwiY2VudGVyXCIsXCJqdXN0aWZ5XCI6XCJjZW50ZXJcIn0sZG9tUHJvcHM6e1widGV4dENvbnRlbnRcIjpfdm0uX3MoJ9Cg0LDRgdC/0LjRgdCw0L3QuNC1INCw0LLRgtC+0LHRg9GB0LAnKX19KSxfdm0uX3YoXCIgXCIpLChfdm0uZXZlbnRzLmxlbmd0aCA+IDApP19jKCdkaXYnLFtfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcIm15LTAgdGV4dC1jZW50ZXJcIn0sW19jKCd2LWNoZWNrYm94Jyx7c3RhdGljQ2xhc3M6XCJtdC0wIG1sLTlcIixhdHRyczp7XCJsYWJlbFwiOlwi0J/QvtC60LDQt9Cw0YLRjCDQstGB0ZEg0YDQsNGB0L/QuNGB0LDQvdC40LVcIn0sbW9kZWw6e3ZhbHVlOihfdm0uc2tpcCksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5za2lwPSQkdn0sZXhwcmVzc2lvbjpcInNraXBcIn19KV0sMSksX3ZtLl92KFwiIFwiKSxfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcInB0LTAgbXQtMFwifSxbX2MoJ3YtdGltZWxpbmUnLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxfdm0uX2woKF92bS5ldmVudHMpLGZ1bmN0aW9uKGVudHJ5LGluZGV4KXtyZXR1cm4gX2MoJ2Rpdicse2tleTppbmRleCxzdGF0aWNTdHlsZTp7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIn19LFsoX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNCAmJiAoIWVudHJ5LnNraXAgfHwgX3ZtLnNraXApKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggY3J1ZFwiLHN0YXRpY1N0eWxlOntcInBvc2l0aW9uXCI6XCJhYnNvbHV0ZVwiLFwicmlnaHRcIjpcIjVweFwiLFwidG9wXCI6XCItMTBweFwiLFwiZm9udC1zaXplXCI6XCIxMHB4XCJ9fSxbX2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJtci0zXCIsYXR0cnM6e1wiY29sb3JcIjpcInJlZFwiLFwiZmFiXCI6XCJcIixcInNtYWxsXCI6XCJcIixcImRhcmtcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmRlbGV0ZV9pZCA9IGVudHJ5LmlkfX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLWRlbGV0ZVwiKV0pXSwxKV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoIWVudHJ5LnNraXAgfHwgX3ZtLnNraXAgfHwgIF92bS5za2lwcGVkID09PSBfdm0uZXZlbnRzLmxlbmd0aCk/X2MoJ3YtdGltZWxpbmUtaXRlbScse2F0dHJzOntcInNtYWxsXCI6XCJcIixcImNvbG9yXCI6ZW50cnkuY29sb3IgfHwgJyMxMWE1MDYnfX0sW19jKCd2LWNhcmQnLHtzdGF0aWNDbGFzczpcImNvbnRhaW5lciBtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uXCIsYXR0cnM6e1wiZWxldmF0aW9uXCI6XCIwXCJ9fSxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKGVudHJ5LnRpbWUpKV0pLF92bS5fdihcIiBcIiksX2MoJ2g0JyxbX3ZtLl92KF92bS5fcyhlbnRyeS50aXRsZSkpXSksX3ZtLl92KFwiIFwiKSxfYygnc3BhbicsW192bS5fdihcItCe0YHRgtCw0L3QvtCy0LrQsDogXCIrX3ZtLl9zKGVudHJ5LnBsYWNlKSldKSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LXJpZ2h0IGhpc3RvcnktdGltZVwiLGF0dHJzOntcInRpdGxlXCI6ZW50cnkudGltZX19KV0pXSwxKTpfdm0uX2UoKV0sMSl9KSwwKV0sMSldLDEpOl9jKCdkaXYnLFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlciBteS0zXCJ9LFtfdm0uX3YoXCLQoNCw0YHQv9C40YHQsNC90LjQtSDQtdGJ0LUg0L3QtSDRgdC+0LfQtNCw0L3QvlwiKV0pXSksX3ZtLl92KFwiIFwiKSwoX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNCk/X2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJzYXZlLWJ0blwiLGF0dHJzOntcImNvbG9yXCI6XCJzdWNjZXNzXCIsXCJmYWJcIjpcIlwiLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaCgnL2J1cy9ldmVudC8wJyl9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktcGx1c1wiKV0pXSwxKTpfdm0uX2UoKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=