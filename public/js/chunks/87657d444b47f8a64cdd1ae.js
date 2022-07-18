(self.webpackChunk=self.webpackChunk||[]).push([[876],{1876:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});const a={name:"Users",data:function(t){return{l:1,users:[],page:1,block_id:0,show:!1,message:"",messageText:"",q:""}},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;window.axios.get("/user/",{params:{page:this.page,per_page:10,name:this.q}}).then((function(e){t.users=e.data.data,t.l=e.data.last_page})).catch((function(t){console.log(t)}))},delete:function(){var t=this;this.block_id>0&&window.axios.put("/user/"+this.block_id).then((function(e){t.getPage(),t.block_id=0})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()},block_id:function(t){t>0&&this.delete()}}};const n=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"cover"},[s("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("Список пользователей")}}),t._v(" "),s("v-text-field",{attrs:{label:"ФИО","append-outer-icon":"mdi-magnify"},on:{"click:append-outer":t.getPage},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}}),t._v(" "),t.users.length>0?s("div",[s("v-layout",{staticClass:"d-flex flex-row flex-wrap"},t._l(t.users,(function(e,a){return s("v-flex",{key:a,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[s("v-card",{staticClass:"ma-1",staticStyle:{position:"relative"},attrs:{elevation:"0",outlined:""}},[1024===t.$store.state.auth.user.role?s("div",{staticClass:"d-flex crud",staticStyle:{position:"absolute",right:"5px",top:"-10px","font-size":"10px"}},[e.blocked?s("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(s){t.block_id=e.id}}},[s("v-icon",[t._v("mdi-lock-open-variant-outline")])],1):s("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(s){t.block_id=e.id}}},[s("v-icon",[t._v("mdi-lock-outline")])],1)],1):t._e(),t._v(" "),s("v-card",{staticClass:"pa-1",attrs:{elevation:"0"}},[s("div",{domProps:{textContent:t._s("Почта: "+e.email)}}),t._v(" "),s("div",{domProps:{textContent:t._s("Телефон: "+(e.phone?e.phone:" не указан"))}}),t._v(" "),s("div",{domProps:{textContent:t._s("ФИО:"+e.full_name)}}),t._v(" "),s("div",{domProps:{textContent:t._s("Статус: "+(e.blocked?" заблокирован":" разблокирован"))}})])],1)],1)})),1),t._v(" "),t.l>1?s("div",{staticClass:"text-center xs-12"},[s("v-pagination",{attrs:{length:t.l,"total-visible":3},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1):s("div",[s("div",{staticClass:"text-center my-3"},[t._v("Пользователи не найдены")])])],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlcnMudnVlPzY2Y2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlcnMudnVlPzZiMDUiXSwibmFtZXMiOlsiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsImRvbVByb3BzIiwiX3MiLCJfdiIsIm9uIiwiZ2V0UGFnZSIsIm1vZGVsIiwidmFsdWUiLCJjYWxsYmFjayIsIiQkdiIsInEiLCJleHByZXNzaW9uIiwidXNlcnMiLCJsZW5ndGgiLCJfbCIsInVzZXIiLCJ5Iiwia2V5Iiwic3RhdGljU3R5bGUiLCIkc3RvcmUiLCJzdGF0ZSIsImF1dGgiLCJyb2xlIiwiYmxvY2tlZCIsIiRldmVudCIsImJsb2NrX2lkIiwiaWQiLCJfZSIsImVtYWlsIiwicGhvbmUiLCJmdWxsX25hbWUiLCJsIiwicGFnZSJdLCJtYXBwaW5ncyI6ImlIQXdFQSxNQ3hFZ04sRUR3RWhOLENBQ0UsS0FBRixRQUNFLEtBQUYsWUFDSSxNQUFKLENBQ00sRUFBTixFQUNNLE1BQU4sR0FDTSxLQUFOLEVBQ00sU0FBTixFQUNNLE1BQU4sRUFDTSxRQUFOLEdBQ00sWUFBTixHQUNNLEVBQU4sS0FHRSxRQWRGLFdBZUksS0FBSixXQUVFLFFBQUYsQ0FDSSxRQURKLFdBQ00sSUFBTixPQUNNLE9BQU4sb0JBQVEsT0FBUixDQUNVLEtBQVYsVUFDVSxTQUFWLEdBQ1UsS0FBVixVQUNBLGtCQUNRLEVBQVIsa0JBQ1EsRUFBUixzQkFOQSxPQU9BLFlBQ1EsUUFBUixXQVZJLE9BQUosV0FhTSxJQUFOLE9BQ0EsaUJBQ0EsMkRBQ1EsRUFBUixVQUNRLEVBQVIsY0FGQSxPQUdBLFlBQ1EsUUFB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T0FBU1AsRUFBSXNDLEVBQUUsZ0JBQWdCLEdBQUd6QixNQUFNLENBQUNDLE1BQU9kLEVBQVEsS0FBRWUsU0FBUyxTQUFVQyxHQUFNaEIsRUFBSXVDLEtBQUt2QixHQUFLRSxXQUFXLFdBQVcsR0FBR2xCLEVBQUlrQyxNQUFNLEdBQUc5QixFQUFHLE1BQU0sQ0FBQ0EsRUFBRyxNQUFNLENBQUNFLFlBQVksb0JBQW9CLENBQUNOLEVBQUlVLEdBQUcsZ0NBQWdDLEtBQ3RsRSxJRFVwQixFQUNBLEtBQ0EsS0FDQSxNIiwiZmlsZSI6ImpzL2NodW5rcy84NzY1N2Q0NDRiNDdmOGE2NGNkZDFhZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8di1jb250YWluZXIgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi10ZXh0PVwiJ9Ch0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuSdcIj5cbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwicVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCLQpNCY0J5cIlxuICAgICAgICAgICAgICAgIDphcHBlbmQtb3V0ZXItaWNvbj1cIidtZGktbWFnbmlmeSdcIlxuICAgICAgICAgICAgICAgIEBjbGljazphcHBlbmQtb3V0ZXI9XCJnZXRQYWdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDxkaXYgdi1pZj1cInVzZXJzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDx2LWxheW91dCBjbGFzcz1cImQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8di1mbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB4czEyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kNlxuICAgICAgICAgICAgICAgICAgICAgICAgbGc0XG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih1c2VyLCB5KSBpbiB1c2Vyc1wiIDprZXk9XCJ5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZXZhdGlvbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hLTFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkc3RvcmUuc3RhdGUuYXV0aC51c2VyLnJvbGUgPT09IDEwMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBjcnVkXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgcmlnaHQ6IDVweDsgdG9wOiAtMTBweDsgZm9udC1zaXplOiAxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiF1c2VyLmJsb2NrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYmxvY2tfaWQgPSB1c2VyLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktbG9jay1vdXRsaW5lPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImJsb2NrX2lkID0gdXNlci5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+bWRpLWxvY2stb3Blbi12YXJpYW50LW91dGxpbmU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQgZWxldmF0aW9uPVwiMFwiIGNsYXNzPVwicGEtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Cf0L7Rh9GC0LA6ICcrdXNlci5lbWFpbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Ci0LXQu9C10YTQvtC9OiAnKyh1c2VyLnBob25lID8gdXNlci5waG9uZSA6ICcg0L3QtSDRg9C60LDQt9Cw0L0nKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Ck0JjQnjonKyB1c2VyLmZ1bGxfbmFtZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi10ZXh0PVwiJ9Ch0YLQsNGC0YPRgTogJysgKHVzZXIuYmxvY2tlZCA/ICcg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC9JyA6ICcg0YDQsNC30LHQu9C+0LrQuNGA0L7QstCw0L0nKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB4cy0xMlwiIHYtaWY9XCJsID4gMVwiPlxuICAgICAgICAgICAgICAgIDx2LXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0b3RhbC12aXNpYmxlPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFnZVwiXG4gICAgICAgICAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS0zXCI+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INC90LUg0L3QsNC50LTQtdC90Ys8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlVzZXJzXCIsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsOiAxLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgICAgIGJsb2NrX2lkOiAwLFxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICBxOiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXRQYWdlKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5nZXQoJy91c2VyLycsIHtwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBwZXJfcGFnZTogMTAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucSxcbiAgICAgICAgICAgICAgICB9fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sID0gcmVzcG9uc2UuZGF0YS5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWxldGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxvY2tfaWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucHV0KCcvdXNlci8nICsgdGhpcy5ibG9ja19pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrX2lkID0gMFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmxvY2tfaWQobnYpIHtcbiAgICAgICAgICAgICAgICBpZiAobnYgPiAwKSB0aGlzLmRlbGV0ZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU2MmRkZDZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcImNvdmVyXCJ9LFtfYygndi10b29sYmFyLXRpdGxlJyx7c3RhdGljQ2xhc3M6XCJtYi0yXCIsYXR0cnM6e1wiYWxpZ25cIjpcImNlbnRlclwiLFwianVzdGlmeVwiOlwiY2VudGVyXCJ9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKCfQodC/0LjRgdC+0Log0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LknKX19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJsYWJlbFwiOlwi0KTQmNCeXCIsXCJhcHBlbmQtb3V0ZXItaWNvblwiOidtZGktbWFnbmlmeSd9LG9uOntcImNsaWNrOmFwcGVuZC1vdXRlclwiOl92bS5nZXRQYWdlfSxtb2RlbDp7dmFsdWU6KF92bS5xKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnE9JCR2fSxleHByZXNzaW9uOlwicVwifX0pLF92bS5fdihcIiBcIiksKF92bS51c2Vycy5sZW5ndGggPiAwKT9fYygnZGl2JyxbX2MoJ3YtbGF5b3V0Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggZmxleC1yb3cgZmxleC13cmFwXCJ9LF92bS5fbCgoX3ZtLnVzZXJzKSxmdW5jdGlvbih1c2VyLHkpe3JldHVybiBfYygndi1mbGV4Jyx7a2V5OnksYXR0cnM6e1wieHMxMlwiOlwiXCIsXCJzbTZcIjpcIlwiLFwibWQ2XCI6XCJcIixcImxnNFwiOlwiXCJ9fSxbX2MoJ3YtY2FyZCcse3N0YXRpY0NsYXNzOlwibWEtMVwiLHN0YXRpY1N0eWxlOntcInBvc2l0aW9uXCI6XCJyZWxhdGl2ZVwifSxhdHRyczp7XCJlbGV2YXRpb25cIjpcIjBcIixcIm91dGxpbmVkXCI6XCJcIn19LFsoX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZC1mbGV4IGNydWRcIixzdGF0aWNTdHlsZTp7XCJwb3NpdGlvblwiOlwiYWJzb2x1dGVcIixcInJpZ2h0XCI6XCI1cHhcIixcInRvcFwiOlwiLTEwcHhcIixcImZvbnQtc2l6ZVwiOlwiMTBweFwifX0sWyghdXNlci5ibG9ja2VkKT9fYygndi1idG4nLHtzdGF0aWNDbGFzczpcIm1yLTNcIixhdHRyczp7XCJjb2xvclwiOlwicmVkXCIsXCJmYWJcIjpcIlwiLFwic21hbGxcIjpcIlwiLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uYmxvY2tfaWQgPSB1c2VyLmlkfX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLWxvY2stb3V0bGluZVwiKV0pXSwxKTpfYygndi1idG4nLHtzdGF0aWNDbGFzczpcIm1yLTNcIixhdHRyczp7XCJjb2xvclwiOlwicmVkXCIsXCJmYWJcIjpcIlwiLFwic21hbGxcIjpcIlwiLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uYmxvY2tfaWQgPSB1c2VyLmlkfX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLWxvY2stb3Blbi12YXJpYW50LW91dGxpbmVcIildKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZCcse3N0YXRpY0NsYXNzOlwicGEtMVwiLGF0dHJzOntcImVsZXZhdGlvblwiOlwiMFwifX0sW19jKCdkaXYnLHtkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0J/QvtGH0YLQsDogJyt1c2VyLmVtYWlsKX19KSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0KLQtdC70LXRhNC+0L06ICcrKHVzZXIucGhvbmUgPyB1c2VyLnBob25lIDogJyDQvdC1INGD0LrQsNC30LDQvScpKX19KSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0KTQmNCeOicrIHVzZXIuZnVsbF9uYW1lKX19KSxfdm0uX3YoXCIgXCIpLF9jKCdkaXYnLHtkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0KHRgtCw0YLRg9GBOiAnKyAodXNlci5ibG9ja2VkID8gJyDQt9Cw0LHQu9C+0LrQuNGA0L7QstCw0L0nIDogJyDRgNCw0LfQsdC70L7QutC40YDQvtCy0LDQvScpKX19KV0pXSwxKV0sMSl9KSwxKSxfdm0uX3YoXCIgXCIpLChfdm0ubCA+IDEpP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyIHhzLTEyXCJ9LFtfYygndi1wYWdpbmF0aW9uJyx7YXR0cnM6e1wibGVuZ3RoXCI6X3ZtLmwsXCJ0b3RhbC12aXNpYmxlXCI6M30sbW9kZWw6e3ZhbHVlOihfdm0ucGFnZSksY2FsbGJhY2s6ZnVuY3Rpb24gKCQkdikge192bS5wYWdlPSQkdn0sZXhwcmVzc2lvbjpcInBhZ2VcIn19KV0sMSk6X3ZtLl9lKCldLDEpOl9jKCdkaXYnLFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlciBteS0zXCJ9LFtfdm0uX3YoXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0L3QtSDQvdCw0LnQtNC10L3Ri1wiKV0pXSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9