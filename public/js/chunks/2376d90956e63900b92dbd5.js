(self.webpackChunk=self.webpackChunk||[]).push([[237],{8237:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});const a={name:"Events",data:function(t){return{l:1,events:[],page:1,dialogPost:null,delete_id:0,show:!1}},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;window.axios.get("/event/",{params:{page:this.page,per_page:10}}).then((function(e){t.events=e.data.data,t.l=e.data.last_page})).catch((function(t){console.log(t)}))},delete:function(){var t=this;this.delete_id>0&&window.axios.delete("/event/"+this.delete_id).then((function(e){t.getPage(),t.delete_id=0})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()},delete_id:function(t){t>0&&this.delete()}}};const n=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"cover"},[s("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("Ближайшие мероприятия")}}),t._v(" "),t.events.length>0?s("div",[s("v-container",[s("v-timeline",{attrs:{dense:""}},t._l(t.events,(function(e,a){return s("div",{key:a,staticStyle:{position:"relative"}},[1024===t.$store.state.auth.user.role?s("div",{staticClass:"d-flex crud",staticStyle:{position:"absolute",right:"5px",top:"-10px","font-size":"10px"}},[s("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(s){t.delete_id=e.id}}},[s("v-icon",[t._v("mdi-delete")])],1)],1):t._e(),t._v(" "),s("v-timeline-item",{attrs:{small:"",left:"",color:"#11a506"}},[s("v-card",{staticClass:"container ma-0 pa-0 d-flex flex-column",attrs:{elevation:"0"}},[s("h4",[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v("Место проведения: "+t._s(e.place))]),t._v(" "),s("span",{staticClass:"text-right history-time",attrs:{title:e.date}},[s("span",[t._v(t._s(e.date))])])])],1)],1)})),0)],1),t._v(" "),t.l>1?s("div",{staticClass:"text-center xs-12"},[s("v-pagination",{attrs:{length:t.l,"total-visible":3},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1):s("div",[s("div",{staticClass:"text-center my-3"},[t._v("Новостей пока нет")])]),t._v(" "),1024===t.$store.state.auth.user.role?s("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",dark:""},on:{click:function(e){return t.$router.push("/event/0")}}},[s("v-icon",[t._v("mdi-plus")])],1):t._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0V2ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0V2ZW50cy52dWU/YWRmMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRXZlbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRXZlbnRzLnZ1ZT8zMmJkIl0sIm5hbWVzIjpbIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJkb21Qcm9wcyIsIl9zIiwiX3YiLCJldmVudHMiLCJsZW5ndGgiLCJfbCIsImVudHJ5IiwiaW5kZXgiLCJrZXkiLCJzdGF0aWNTdHlsZSIsIiRzdG9yZSIsInN0YXRlIiwiYXV0aCIsInVzZXIiLCJyb2xlIiwib24iLCIkZXZlbnQiLCJkZWxldGVfaWQiLCJpZCIsIl9lIiwidGl0bGUiLCJwbGFjZSIsImRhdGUiLCJsIiwibW9kZWwiLCJ2YWx1ZSIsImNhbGxiYWNrIiwiJCR2IiwicGFnZSIsImV4cHJlc3Npb24iLCIkcm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6ImlIQWdFQSxNQ2hFaU4sRURnRWpOLENBQ0UsS0FBRixTQUNFLEtBQUYsWUFDSSxNQUFKLENBQ00sRUFBTixFQUNNLE9BQU4sR0FDTSxLQUFOLEVBQ00sV0FBTixLQUNNLFVBQU4sRUFDTSxNQUFOLElBR0UsUUFaRixXQWFJLEtBQUosV0FFRSxRQUFGLENBQ0ksUUFESixXQUNNLElBQU4sT0FDTSxPQUFOLHFCQUFRLE9BQVIsQ0FBVSxLQUFWLFVBQVUsU0FBVix3QkFDUSxFQUFSLG1CQUNRLEVBQVIsc0JBRkEsT0FHQSxZQUNRLFFBQVIsV0FOSSxPQUFKLFdBU00sSUFBTixPQUNBLGtCQUNBLGdFQUNRLEVBQVIsVUFDUSxFQUFSLGVBRkEsT0FHQSxZQUNRLFFBQVIsWUFJRSxNQUFGLENBQ0ksS0FESixXQUVNLEtB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bmtzLzIzNzZkOTA5NTZlNjM5MDBiOTJkYmQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cclxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIn0JHQu9C40LbQsNC50YjQuNC1INC80LXRgNC+0L/RgNC40Y/RgtC40Y8nXCI+XHJcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiZXZlbnRzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgPHYtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHYtdGltZWxpbmUgZGVuc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihlbnRyeSwgaW5kZXgpIGluIGV2ZW50c1wiIDprZXk9XCJpbmRleFwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGNydWRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyByaWdodDogNXB4OyB0b3A6IC0xMHB4OyBmb250LXNpemU6IDEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBlbnRyeS5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWRlbGV0ZTwvdi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRpbWVsaW5lLWl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29sb3I9XCInIzExYTUwNidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkIGVsZXZhdGlvbj1cIjBcIiBjbGFzcz1cImNvbnRhaW5lciBtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt7IGVudHJ5LnRpdGxlIH19PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QnNC10YHRgtC+INC/0YDQvtCy0LXQtNC10L3QuNGPOiB7eyBlbnRyeS5wbGFjZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXJpZ2h0IGhpc3RvcnktdGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJlbnRyeS5kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgZW50cnkuZGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGltZWxpbmUtaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdi10aW1lbGluZT5cclxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHhzLTEyXCIgdi1pZj1cImwgPiAxXCI+XHJcbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj7QndC+0LLQvtGB0YLQtdC5INC/0L7QutCwINC90LXRgjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXHJcbiAgICAgICAgICAgICAgIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxyXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvZXZlbnQvMCcpXCJcclxuICAgICAgICAgICAgICAgZGFyaz5cclxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxyXG4gICAgICAgIDwvdi1idG4+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkV2ZW50c1wiLFxyXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbDogMSxcclxuICAgICAgICAgICAgICAgIGV2ZW50czogW10sXHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgZGlhbG9nUG9zdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZV9pZDogMCxcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBnZXRQYWdlKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL2V2ZW50LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubCA9IHJlc3BvbnNlLmRhdGEubGFzdF9wYWdlXHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGV0ZV9pZCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmRlbGV0ZSgnL2V2ZW50LycgKyB0aGlzLmRlbGV0ZV9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHBhZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlX2lkKG52KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobnYgPiAwKSB0aGlzLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXZlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWEwOWY2ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FdmVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcImNvdmVyXCJ9LFtfYygndi10b29sYmFyLXRpdGxlJyx7c3RhdGljQ2xhc3M6XCJtYi0yXCIsYXR0cnM6e1wiYWxpZ25cIjpcImNlbnRlclwiLFwianVzdGlmeVwiOlwiY2VudGVyXCJ9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKCfQkdC70LjQttCw0LnRiNC40LUg0LzQtdGA0L7Qv9GA0LjRj9GC0LjRjycpfX0pLF92bS5fdihcIiBcIiksKF92bS5ldmVudHMubGVuZ3RoID4gMCk/X2MoJ2RpdicsW19jKCd2LWNvbnRhaW5lcicsW19jKCd2LXRpbWVsaW5lJyx7YXR0cnM6e1wiZGVuc2VcIjpcIlwifX0sX3ZtLl9sKChfdm0uZXZlbnRzKSxmdW5jdGlvbihlbnRyeSxpbmRleCl7cmV0dXJuIF9jKCdkaXYnLHtrZXk6aW5kZXgsc3RhdGljU3R5bGU6e1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCJ9fSxbKF92bS4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjQpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImQtZmxleCBjcnVkXCIsc3RhdGljU3R5bGU6e1wicG9zaXRpb25cIjpcImFic29sdXRlXCIsXCJyaWdodFwiOlwiNXB4XCIsXCJ0b3BcIjpcIi0xMHB4XCIsXCJmb250LXNpemVcIjpcIjEwcHhcIn19LFtfYygndi1idG4nLHtzdGF0aWNDbGFzczpcIm1yLTNcIixhdHRyczp7XCJjb2xvclwiOlwicmVkXCIsXCJmYWJcIjpcIlwiLFwic21hbGxcIjpcIlwiLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uZGVsZXRlX2lkID0gZW50cnkuaWR9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktZGVsZXRlXCIpXSldLDEpXSwxKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRpbWVsaW5lLWl0ZW0nLHthdHRyczp7XCJzbWFsbFwiOlwiXCIsXCJsZWZ0XCI6XCJcIixcImNvbG9yXCI6JyMxMWE1MDYnfX0sW19jKCd2LWNhcmQnLHtzdGF0aWNDbGFzczpcImNvbnRhaW5lciBtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uXCIsYXR0cnM6e1wiZWxldmF0aW9uXCI6XCIwXCJ9fSxbX2MoJ2g0JyxbX3ZtLl92KF92bS5fcyhlbnRyeS50aXRsZSkpXSksX3ZtLl92KFwiIFwiKSxfYygnc3BhbicsW192bS5fdihcItCc0LXRgdGC0L4g0L/RgNC+0LLQtdC00LXQvdC40Y86IFwiK192bS5fcyhlbnRyeS5wbGFjZSkpXSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwidGV4dC1yaWdodCBoaXN0b3J5LXRpbWVcIixhdHRyczp7XCJ0aXRsZVwiOmVudHJ5LmRhdGV9fSxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKGVudHJ5LmRhdGUpKV0pXSldKV0sMSldLDEpfSksMCldLDEpLF92bS5fdihcIiBcIiksKF92bS5sID4gMSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXIgeHMtMTJcIn0sW19jKCd2LXBhZ2luYXRpb24nLHthdHRyczp7XCJsZW5ndGhcIjpfdm0ubCxcInRvdGFsLXZpc2libGVcIjozfSxtb2RlbDp7dmFsdWU6KF92bS5wYWdlKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnBhZ2U9JCR2fSxleHByZXNzaW9uOlwicGFnZVwifX0pXSwxKTpfdm0uX2UoKV0sMSk6X2MoJ2RpdicsW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyIG15LTNcIn0sW192bS5fdihcItCd0L7QstC+0YHRgtC10Lkg0L/QvtC60LAg0L3QtdGCXCIpXSldKSxfdm0uX3YoXCIgXCIpLChfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0KT9fYygndi1idG4nLHtzdGF0aWNDbGFzczpcInNhdmUtYnRuXCIsYXR0cnM6e1wiY29sb3JcIjpcInN1Y2Nlc3NcIixcImZhYlwiOlwiXCIsXCJkYXJrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uJHJvdXRlci5wdXNoKCcvZXZlbnQvMCcpfX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sMSk6X3ZtLl9lKCldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9