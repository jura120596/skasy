(self.webpackChunk=self.webpackChunk||[]).push([[368],{4368:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>a});const s={name:"Posts",data:function(t){return{l:1,posts:[],page:1,dialogPost:null,delete_id:0,show:!1}},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;window.axios.get("/post/",{params:{page:this.page,per_page:10}}).then((function(e){t.posts=e.data.data,t.l=e.data.last_page})).catch((function(t){console.log(t)}))},delete:function(){var t=this;this.delete_id>0&&window.axios.delete("/post/"+this.delete_id).then((function(e){t.getPage(),t.delete_id=0})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()},delete_id:function(t){t>0&&this.delete()}}};const a=(0,o(1900).Z)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"cover"},[o("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("Последние новости")}}),t._v(" "),t.posts.length>0?o("div",[o("v-layout",{staticClass:"d-flex flex-row flex-wrap"},t._l(t.posts,(function(e,s){return o("v-flex",{key:s,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[o("v-card",{staticClass:"ma-1",staticStyle:{position:"relative"},attrs:{elevation:"0",outlined:""}},[1024===t.$store.state.auth.user.role?o("div",{staticClass:"d-flex crud",staticStyle:{position:"absolute",right:"5px",top:"-10px","font-size":"10px"}},[o("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(o){t.delete_id=e.id}}},[o("v-icon",[t._v("mdi-delete")])],1),t._v(" "),o("v-btn",{attrs:{color:"yellow",fab:"",small:"",dark:""},on:{click:function(o){return t.$router.push("/post/"+e.id)}}},[o("v-icon",[t._v("mdi-pencil")])],1)],1):o("div",{staticStyle:{position:"absolute",right:"5px",top:"5px","font-size":"10px"},domProps:{textContent:t._s("Опубликовано: "+e.date)}}),t._v(" "),o("v-container",[o("v-spacer"),t._v(" "),o("v-toolbar-title",{staticClass:"text-center mt-3 mb-2",on:{click:function(o){t.dialogPost=e,t.show=!0}}},[t._v(t._s(e.title))]),t._v(" "),o("v-spacer")],1),t._v(" "),o("v-container",{staticClass:"ma-0 pa-0",on:{click:function(o){t.dialogPost=e,t.show=!0}}},[e.photos.length?o("div",{staticClass:"user-photo-module"},[o("v-carousel",t._l(e.photos,(function(t,e){return o("v-carousel-item",{key:e,attrs:{src:t.file,contain:""}})})),1)],1):t._e()])],1)],1)})),1),t._v(" "),t.l>1?o("div",{staticClass:"text-center xs-12"},[o("v-pagination",{attrs:{length:t.l,"total-visible":3},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1):o("div",[o("div",{staticClass:"text-center my-3"},[t._v("Новостей пока нет")])]),t._v(" "),1024===t.$store.state.auth.user.role?o("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",dark:""},on:{click:function(e){return t.$router.push("/post/0")}}},[o("v-icon",[t._v("mdi-plus")])],1):t._e(),t._v(" "),t.dialogPost?o("v-dialog",{attrs:{fullscreen:t.$vuetify.breakpoint.mobile},on:{close:function(e){t.show=!1,t.dialogPost=null}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[[o("v-container",{staticClass:"px-0 mx-0 pt-0 mt-0 cover",staticStyle:{"background-color":"white !important"}},[o("v-toolbar-title",{staticClass:"text-center my-3"},[t._v(t._s(t.dialogPost.title))]),t._v(" "),t.dialogPost.photos&&t.dialogPost.photos.length>0?o("div",{staticClass:"user-photo-module my-2"},[o("v-carousel",t._l(t.dialogPost.photos,(function(t,e){return o("v-carousel-item",{key:e,attrs:{src:t.file,contain:""}})})),1)],1):t._e(),t._v(" "),o("v-container",{domProps:{innerHTML:t._s(t.dialogPost.description)}}),t._v(" "),o("v-toolbar-title",{staticClass:"text-center my-3"},[o("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.show=!1,t.dialogPost=null}}},[t._v("Закрыть\n                    ")])],1)],1)]],2):t._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlP2Y4Y2MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1Bvc3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUG9zdHMudnVlPzkwZjciXSwibmFtZXMiOlsiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsImRvbVByb3BzIiwiX3MiLCJfdiIsInBvc3RzIiwibGVuZ3RoIiwiX2wiLCJwb3N0IiwieSIsImtleSIsInN0YXRpY1N0eWxlIiwiJHN0b3JlIiwic3RhdGUiLCJhdXRoIiwidXNlciIsInJvbGUiLCJvbiIsIiRldmVudCIsImRlbGV0ZV9pZCIsImlkIiwiJHJvdXRlciIsInB1c2giLCJkYXRlIiwiZGlhbG9nUG9zdCIsInNob3ciLCJ0aXRsZSIsInBob3RvcyIsInBob3RvIiwiaSIsImZpbGUiLCJfZSIsImwiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJwYWdlIiwiZXhwcmVzc2lvbiIsIiR2dWV0aWZ5IiwiYnJlYWtwb2ludCIsIm1vYmlsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiaUhBeUlBLE1DeklnTixFRHlJaE4sQ0FDRSxLQUFGLFFBQ0UsS0FBRixZQUNJLE1BQUosQ0FDTSxFQUFOLEVBQ00sTUFBTixHQUNNLEtBQU4sRUFDTSxXQUFOLEtBQ00sVUFBTixFQUNNLE1BQU4sSUFHRSxRQVpGLFdBYUksS0FBSixXQUVFLFFBQUYsQ0FDSSxRQURKLFdBQ00sSUFBTixPQUNNLE9BQU4sb0JBQVEsT0FBUixDQUFVLEtBQVYsVUFBVSxTQUFWLHdCQUNRLEVBQVIsa0JBQ1EsRUFBUixzQkFGQSxPQUdBLFlBQ1EsUUFBUixXQU5JLE9BQUosV0FTTSxJQUFOLE9B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Q0UsWUFBWSxvQkFBb0IsQ0FBQ04sRUFBSVUsR0FBR1YsRUFBSVMsR0FBR1QsRUFBSThCLFdBQVdFLFVBQVVoQyxFQUFJVSxHQUFHLEtBQU1WLEVBQUk4QixXQUFXRyxRQUFVakMsRUFBSThCLFdBQVdHLE9BQU9yQixPQUFTLEVBQUdSLEVBQUcsTUFBTSxDQUFDRSxZQUFZLDBCQUEwQixDQUFDRixFQUFHLGFBQWFKLEVBQUlhLEdBQUliLEVBQUk4QixXQUFpQixRQUFFLFNBQVNJLEVBQU1DLEdBQUcsT0FBTy9CLEVBQUcsa0JBQWtCLENBQUNZLElBQUltQixFQUFFNUIsTUFBTSxDQUFDLElBQU0yQixFQUFNRSxLQUFLLFFBQVUsU0FBUSxJQUFJLEdBQUdwQyxFQUFJcUMsS0FBS3JDLEVBQUlVLEdBQUcsS0FBS04sRUFBRyxjQUFjLENBQUNJLFNBQVMsQ0FBQyxVQUFZUixFQUFJUyxHQUFHVCxFQUFJOEIsV0FBV2tCLGdCQUFnQmhELEVBQUlVLEdBQUcsS0FBS04sRUFBRyxrQkFBa0IsQ0FBQ0UsWUFBWSxvQkFBb0IsQ0FBQ0YsRUFBRyxRQUFRLENBQUNHLE1BQU0sQ0FBQyxNQUFRLFdBQVdnQixHQUFHLENBQUMsTUFBUSxTQUFTQyxHQUFReEIsRUFBSStCLE1BQU8sRUFDcnpCL0IsRUFBSThCLFdBQWEsUUFBUSxDQUFDOUIsRUFBSVUsR0FBRyxvQ0FBb0MsSUFBSSxLQUFLLEdBQUdWLEVBQUlxQyxNQUFNLEtBQzdGLElETXBCLEVBQ0EsS0FDQSxLQUNBLE0iLCJmaWxlIjoianMvY2h1bmtzLzM2ODkwNjljNGE1NjdjZTlhMzM0MTY0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cImNvdmVyXCI+XG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LXRleHQ9XCIn0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4J1wiPlxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgPGRpdiB2LWlmPVwicG9zdHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHYtbGF5b3V0IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IGZsZXgtd3JhcFwiPlxuXG4gICAgICAgICAgICAgICAgPHYtZmxleFxuICAgICAgICAgICAgICAgICAgICAgICAgeHMxMlxuICAgICAgICAgICAgICAgICAgICAgICAgc202XG4gICAgICAgICAgICAgICAgICAgICAgICBtZDZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxnNFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocG9zdCwgeSkgaW4gcG9zdHNcIiA6a2V5PVwieVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYS0xXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggY3J1ZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVfaWQgPSBwb3N0LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3Bvc3QvJytwb3N0LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXJrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPm1kaS1wZW5jaWw8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQntC/0YPQsdC70LjQutC+0LLQsNC90L46ICcrcG9zdC5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiA1cHg7IGZvbnQtc2l6ZTogMTBweFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0zIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93ID0gIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj57e3Bvc3QudGl0bGV9fTwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY29udGFpbmVyIGNsYXNzPVwibWEtMCBwYS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicG9zdC5waG90b3MubGVuZ3RoXCIgY2xhc3M9XCJ1c2VyLXBob3RvLW1vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcm91c2VsLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIocGhvdG8sIGkpIGluIHBvc3QucGhvdG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwicGhvdG8uZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgeHMtMTJcIiB2LWlmPVwibCA+IDFcIj5cbiAgICAgICAgICAgICAgICA8di1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVwibFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtdmlzaWJsZT1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInBhZ2VcIlxuICAgICAgICAgICAgICAgID48L3YtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPtCd0L7QstC+0YHRgtC10Lkg0L/QvtC60LAg0L3QtdGCPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcbiAgICAgICAgICAgICAgIHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvcG9zdC8wJylcIlxuICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgPHYtZGlhbG9nXG4gICAgICAgICAgICAgICAgdi1pZj1cIiEhZGlhbG9nUG9zdFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInNob3dcIlxuICAgICAgICAgICAgICAgIEBjbG9zZT1cIlxuICAgICAgICAgICAgICAgICAgICBzaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUG9zdCA9IG51bGxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIDpmdWxsc2NyZWVuPVwiJHZ1ZXRpZnkuYnJlYWtwb2ludC5tb2JpbGVcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdDpkZWZhdWx0PlxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+e3tkaWFsb2dQb3N0LnRpdGxlfX08L3YtdG9vbGJhci10aXRsZT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJkaWFsb2dQb3N0LnBob3RvcyAmJiBkaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJ1c2VyLXBob3RvLW1vZHVsZSBteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJvdXNlbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihwaG90bywgaSkgaW4gZGlhbG9nUG9zdC5waG90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInBob3RvLmZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2Fyb3VzZWwtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJvdXNlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciB2LWh0bWw9XCJkaWFsb2dQb3N0LmRlc2NyaXB0aW9uXCI+PC92LWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlIGNsYXNzPVwidGV4dC1jZW50ZXIgbXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1Bvc3QgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIj7Ql9Cw0LrRgNGL0YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiUG9zdHNcIixcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGw6IDEsXG4gICAgICAgICAgICAgICAgcG9zdHM6IFtdLFxuICAgICAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICAgICAgZGlhbG9nUG9zdDogbnVsbCxcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRQYWdlKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy9wb3N0LycsIHtwYXJhbXM6IHtwYWdlOiB0aGlzLnBhZ2UsIHBlcl9wYWdlOiAxMH19KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmwgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWxldGVfaWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MuZGVsZXRlKCcvcG9zdC8nICsgdGhpcy5kZWxldGVfaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfaWQgPSAwXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZV9pZChudikge1xuICAgICAgICAgICAgICAgIGlmIChudiA+IDApIHRoaXMuZGVsZXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Bvc3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDU5ZjNlOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qb3N0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Bvc3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJjb3ZlclwifSxbX2MoJ3YtdG9vbGJhci10aXRsZScse3N0YXRpY0NsYXNzOlwibWItMlwiLGF0dHJzOntcImFsaWduXCI6XCJjZW50ZXJcIixcImp1c3RpZnlcIjpcImNlbnRlclwifSxkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4Jyl9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLnBvc3RzLmxlbmd0aCA+IDApP19jKCdkaXYnLFtfYygndi1sYXlvdXQnLHtzdGF0aWNDbGFzczpcImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIn0sX3ZtLl9sKChfdm0ucG9zdHMpLGZ1bmN0aW9uKHBvc3QseSl7cmV0dXJuIF9jKCd2LWZsZXgnLHtrZXk6eSxhdHRyczp7XCJ4czEyXCI6XCJcIixcInNtNlwiOlwiXCIsXCJtZDZcIjpcIlwiLFwibGc0XCI6XCJcIn19LFtfYygndi1jYXJkJyx7c3RhdGljQ2xhc3M6XCJtYS0xXCIsc3RhdGljU3R5bGU6e1wicG9zaXRpb25cIjpcInJlbGF0aXZlXCJ9LGF0dHJzOntcImVsZXZhdGlvblwiOlwiMFwiLFwib3V0bGluZWRcIjpcIlwifX0sWyhfdm0uJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0KT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggY3J1ZFwiLHN0YXRpY1N0eWxlOntcInBvc2l0aW9uXCI6XCJhYnNvbHV0ZVwiLFwicmlnaHRcIjpcIjVweFwiLFwidG9wXCI6XCItMTBweFwiLFwiZm9udC1zaXplXCI6XCIxMHB4XCJ9fSxbX2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJtci0zXCIsYXR0cnM6e1wiY29sb3JcIjpcInJlZFwiLFwiZmFiXCI6XCJcIixcInNtYWxsXCI6XCJcIixcImRhcmtcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmRlbGV0ZV9pZCA9IHBvc3QuaWR9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktZGVsZXRlXCIpXSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7YXR0cnM6e1wiY29sb3JcIjpcInllbGxvd1wiLFwiZmFiXCI6XCJcIixcInNtYWxsXCI6XCJcIixcImRhcmtcIjpcIlwifSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS4kcm91dGVyLnB1c2goJy9wb3N0LycrcG9zdC5pZCl9fX0sW19jKCd2LWljb24nLFtfdm0uX3YoXCJtZGktcGVuY2lsXCIpXSldLDEpXSwxKTpfYygnZGl2Jyx7c3RhdGljU3R5bGU6e1wicG9zaXRpb25cIjpcImFic29sdXRlXCIsXCJyaWdodFwiOlwiNXB4XCIsXCJ0b3BcIjpcIjVweFwiLFwiZm9udC1zaXplXCI6XCIxMHB4XCJ9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKCfQntC/0YPQsdC70LjQutC+0LLQsNC90L46ICcrcG9zdC5kYXRlKX19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LWNvbnRhaW5lcicsW19jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtdG9vbGJhci10aXRsZScse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXIgbXQtMyBtYi0yXCIsb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5kaWFsb2dQb3N0ID0gcG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdyA9ICB0cnVlfX19LFtfdm0uX3YoX3ZtLl9zKHBvc3QudGl0bGUpKV0pLF92bS5fdihcIiBcIiksX2MoJ3Ytc3BhY2VyJyldLDEpLF92bS5fdihcIiBcIiksX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJtYS0wIHBhLTBcIixvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7X3ZtLmRpYWxvZ1Bvc3QgPSBwb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSAgdHJ1ZX19fSxbKHBvc3QucGhvdG9zLmxlbmd0aCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidXNlci1waG90by1tb2R1bGVcIn0sW19jKCd2LWNhcm91c2VsJyxfdm0uX2woKHBvc3QucGhvdG9zKSxmdW5jdGlvbihwaG90byxpKXtyZXR1cm4gX2MoJ3YtY2Fyb3VzZWwtaXRlbScse2tleTppLGF0dHJzOntcInNyY1wiOnBob3RvLmZpbGUsXCJjb250YWluXCI6XCJcIn19KX0pLDEpXSwxKTpfdm0uX2UoKV0pXSwxKV0sMSl9KSwxKSxfdm0uX3YoXCIgXCIpLChfdm0ubCA+IDEpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyIHhzLTEyXCJ9LFtfYygndi1wYWdpbmF0aW9uJyx7YXR0cnM6e1wibGVuZ3RoXCI6X3ZtLmwsXCJ0b3RhbC12aXNpYmxlXCI6M30sbW9kZWw6e3ZhbHVlOihfdm0ucGFnZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5wYWdlPSQkdn0sZXhwcmVzc2lvbjpcInBhZ2VcIn19KV0sMSk6X3ZtLl9lKCldLDEpOl9jKCdkaXYnLFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlciBteS0zXCJ9LFtfdm0uX3YoXCLQndC+0LLQvtGB0YLQtdC5INC/0L7QutCwINC90LXRglwiKV0pXSksX3ZtLl92KFwiIFwiKSwoX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNCk/X2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJzYXZlLWJ0blwiLGF0dHJzOntcImNvbG9yXCI6XCJzdWNjZXNzXCIsXCJmYWJcIjpcIlwiLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaCgnL3Bvc3QvMCcpfX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sMSk6X3ZtLl9lKCksX3ZtLl92KFwiIFwiKSwoISFfdm0uZGlhbG9nUG9zdCk/X2MoJ3YtZGlhbG9nJyx7YXR0cnM6e1wiZnVsbHNjcmVlblwiOl92bS4kdnVldGlmeS5icmVha3BvaW50Lm1vYmlsZX0sb246e1wiY2xvc2VcIjpmdW5jdGlvbigkZXZlbnQpe192bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IG51bGx9fSxtb2RlbDp7dmFsdWU6KF92bS5zaG93KSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnNob3c9JCR2fSxleHByZXNzaW9uOlwic2hvd1wifX0sW1tfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcInB4LTAgbXgtMCBwdC0wIG10LTAgY292ZXJcIixzdGF0aWNTdHlsZTp7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJ3aGl0ZSAhaW1wb3J0YW50XCJ9fSxbX2MoJ3YtdG9vbGJhci10aXRsZScse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXIgbXktM1wifSxbX3ZtLl92KF92bS5fcyhfdm0uZGlhbG9nUG9zdC50aXRsZSkpXSksX3ZtLl92KFwiIFwiKSwoX3ZtLmRpYWxvZ1Bvc3QucGhvdG9zICYmIF92bS5kaWFsb2dQb3N0LnBob3Rvcy5sZW5ndGggPiAwKT9fYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ1c2VyLXBob3RvLW1vZHVsZSBteS0yXCJ9LFtfYygndi1jYXJvdXNlbCcsX3ZtLl9sKChfdm0uZGlhbG9nUG9zdC5waG90b3MpLGZ1bmN0aW9uKHBob3RvLGkpe3JldHVybiBfYygndi1jYXJvdXNlbC1pdGVtJyx7a2V5OmksYXR0cnM6e1wic3JjXCI6cGhvdG8uZmlsZSxcImNvbnRhaW5cIjpcIlwifX0pfSksMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtY29udGFpbmVyJyx7ZG9tUHJvcHM6e1wiaW5uZXJIVE1MXCI6X3ZtLl9zKF92bS5kaWFsb2dQb3N0LmRlc2NyaXB0aW9uKX19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRvb2xiYXItdGl0bGUnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyIG15LTNcIn0sW19jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJwcmltYXJ5XCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nUG9zdCA9IG51bGx9fX0sW192bS5fdihcItCX0LDQutGA0YvRgtGMXFxuICAgICAgICAgICAgICAgICAgICBcIildKV0sMSldLDEpXV0sMik6X3ZtLl9lKCldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9