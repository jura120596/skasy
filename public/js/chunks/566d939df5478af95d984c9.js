(self.webpackChunk=self.webpackChunk||[]).push([[566],{4566:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});const n={name:"UserPointsHistory",data:function(t){return{l:1,events:[],page:1,dialogPost:null,delete_id:0,show:!1}},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;window.axios.get("/user/event/",{params:{page:this.page,per_page:10}}).then((function(e){t.events=e.data.data,t.l=e.data.last_page})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()}}};const s=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"cover"},[a("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("История баллов")}}),t._v(" "),t.events.length>0?a("div",[a("v-container",[a("v-timeline",{attrs:{dense:""}},t._l(t.events,(function(e,n){return a("div",{key:n,staticStyle:{position:"relative"}},[a("v-timeline-item",{attrs:{small:"",left:"",color:e.map_object?e.map_object.color:"#00ff00"}},[a("v-card",{staticClass:"container ma-0 pa-0 d-flex flex-column",attrs:{elevation:"0"}},[a("h4",[t._v(t._s(e.map_object?e.map_object.name:e.event&&e.event.name))]),t._v(" "),a("span",[t._v(t._s(e.map_object?"-":"+")+t._s(e.points)+" баллов благодарности")]),t._v(" "),a("span",{staticClass:"text-right history-time",attrs:{title:e.created_at}},[a("span",[t._v(t._s(e.created_at))])])])],1)],1)})),0)],1),t._v(" "),t.l>1?a("div",{staticClass:"text-center xs-12"},[a("v-pagination",{attrs:{length:t.l,"total-visible":3},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1):a("div",[a("div",{staticClass:"text-center my-3"},[t._v("Мы еще не знаем, где вы использовали баллы")])])],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb2ludHNIaXN0b3J5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvaW50c0hpc3RvcnkudnVlPzVhNGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1VzZXJQb2ludHNIaXN0b3J5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVXNlclBvaW50c0hpc3RvcnkudnVlPzUyNWUiXSwibmFtZXMiOlsiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsImRvbVByb3BzIiwiX3MiLCJfdiIsImV2ZW50cyIsImxlbmd0aCIsIl9sIiwiZW50cnkiLCJpbmRleCIsImtleSIsInN0YXRpY1N0eWxlIiwibWFwX29iamVjdCIsImNvbG9yIiwibmFtZSIsImV2ZW50IiwicG9pbnRzIiwiY3JlYXRlZF9hdCIsImwiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJwYWdlIiwiZXhwcmVzc2lvbiIsIl9lIl0sIm1hcHBpbmdzIjoiaUhBNENBLE1DNUM0TixFRDRDNU4sQ0FDRSxLQUFGLG9CQUNFLEtBQUYsWUFDSSxNQUFKLENBQ00sRUFBTixFQUNNLE9BQU4sR0FDTSxLQUFOLEVBQ00sV0FBTixLQUNNLFVBQU4sRUFDTSxNQUFOLElBR0UsUUFaRixXQWFJLEtBQUosV0FFRSxRQUFGLENBQ0ksUUFESixXQUNNLElBQU4sT0FDTSxPQUFOLDBCQUFRLE9BQVIsQ0FBVSxLQUFWLFVBQVUsU0FBVix3QkFDUSxFQUFSLG1CQUNRLEVBQVIsc0JBRkEsT0FHQSxZQUNRLFFBQVIsWUFJRSxNQUFGLENBQ0ksS0FESixXQUVNLEtBQU4sYUVyREEsU0FYZ0IsRSxRQUFBLEdBQ2QsR0NSVyxXQUFhLElBQUlBLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsY0FBYyxDQUFDRSxZQUFZLFNBQVMsQ0FBQ0YsRUFBRyxrQkFBa0IsQ0FBQ0UsWUFBWSxPQUFPQyxNQUFNLENBQUMsTUFBUSxTQUFTLFFBQVUsVUFBVUMsU0FBUyxDQUFDLFlBQWNSLEVBQUlTLEdBQUcscUJBQXFCVCxFQUFJVSxHQUFHLEtBQU1WLEVBQUlXLE9BQU9DLE9BQVMsRUFBR1IsRUFBRyxNQUFNLENBQUNBLEVBQUcsY0FBYyxDQUFDQSxFQUFHLGFBQWEsQ0FBQ0csTUFBTSxDQUFDLE1BQVEsS0FBS1AsRUFBSWEsR0FBSWIsRUFBVSxRQUFFLFNBQVNjLEVBQU1DLEdBQU8sT0FBT1gsRUFBRyxNQUFNLENBQUNZLElBQUlELEVBQU1FLFlBQVksQ0FBQyxTQUFXLGFBQWEsQ0FBQ2IsRUFBRyxrQkFBa0IsQ0FBQ0csTUFBTSxDQUFDLE1BQVEsR0FBRyxLQUFPLEdBQUcsTUFBUU8sRUFBTUksV0FBYUosRUFBTUksV0FBV0MsTUFBUSxZQUFZLENBQUNmLEVBQUcsU0FBUyxDQUFDRSxZQUFZLHlDQUF5Q0MsTUFBTSxDQUFDLFVBQVksTUFBTSxDQUFDSCxFQUFHLEtBQUssQ0FBQ0osRUFBSVUsR0FBR1YsRUFBSVMsR0FBR0ssRUFBTUksV0FBYUosRUFBTUksV0FBV0UsS0FBU04sRUFBTU8sT0FBU1AsRUFBTU8sTUFBTUQsU0FBVXBCLEVBQUlVLEdBQUcsS0FBS04sRUFBRyxPQUFPLENBQUNKLEVBQUlVLEdBQUdWLEVBQUlTLEdBQUdLLEVBQU1JLFdBQWEsSUFBTSxLQUFLbEIsRUFBSVMsR0FBR0ssRUFBTVEsUUFBUSwyQkFBMkJ0QixFQUFJVSxHQUFHLEtBQUtOLEVBQUcsT0FBTyxDQUFDRSxZQUFZLDBCQUEwQkMsTUFBTSxDQUFDLE1BQVFPLEVBQU1TLGFBQWEsQ0FBQ25CLEVBQUcsT0FBTyxDQUFDSixFQUFJVSxHQUFHVixFQUFJUyxHQUFHSyxFQUFNUyxvQkFBb0IsSUFBSSxNQUFLLElBQUksR0FBR3ZCLEVBQUlVLEdBQUcsS0FBTVYsRUFBSXdCLEVBQUksRUFBR3BCLEVBQUcsTUFBTSxDQUFDRSxZQUFZLHFCQUFxQixDQUFDRixFQUFHLGVBQWUsQ0FBQ0csTUFBTSxDQUFDLE9BQVNQLEVBQUl3QixFQUFFLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLE1BQU8xQixFQUFRLEtBQUUyQixTQUFTLFNBQVVDLEdBQU01QixFQUFJNkIsS0FBS0QsR0FBS0UsV0FBVyxXQUFXLEdBQUc5QixFQUFJK0IsTUFBTSxHQUFHM0IsRUFBRyxNQUFNLENBQUNBLEVBQUcsTUFBTSxDQUFDRSxZQUFZLG9CQUFvQixDQUFDTixFQUFJVSxHQUFHLG1EQUFtRCxLQUM3MkMsSURVcEIsRUFDQSxLQUNBLEtBQ0EsTSIsImZpbGUiOiJqcy9jaHVua3MvNTY2ZDkzOWRmNTQ3OGFmOTVkOTg0YzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQmNGB0YLQvtGA0LjRjyDQsdCw0LvQu9C+0LInXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8ZGl2IHYtaWY9XCJldmVudHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDx2LXRpbWVsaW5lIGRlbnNlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGVudHJ5LCBpbmRleCkgaW4gZXZlbnRzXCIgOmtleT1cImluZGV4XCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRpbWVsaW5lLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29sb3I9XCJlbnRyeS5tYXBfb2JqZWN0ID8gZW50cnkubWFwX29iamVjdC5jb2xvciA6ICcjMDBmZjAwJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBlbGV2YXRpb249XCIwXCIgY2xhc3M9XCJjb250YWluZXIgbWEtMCBwYS0wIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3sgZW50cnkubWFwX29iamVjdCA/IGVudHJ5Lm1hcF9vYmplY3QubmFtZSAgOiAoZW50cnkuZXZlbnQgJiYgZW50cnkuZXZlbnQubmFtZSkgIH19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgZW50cnkubWFwX29iamVjdCA/ICctJyA6ICcrJ319e3sgZW50cnkucG9pbnRzIH19INCx0LDQu9C70L7QsiDQsdC70LDQs9C+0LTQsNGA0L3QvtGB0YLQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtcmlnaHQgaGlzdG9yeS10aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCJlbnRyeS5jcmVhdGVkX2F0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBlbnRyeS5jcmVhdGVkX2F0IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10aW1lbGluZS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3YtdGltZWxpbmU+XG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHhzLTEyXCIgdi1pZj1cImwgPiAxXCI+XG4gICAgICAgICAgICAgICAgPHYtcGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXZpc2libGU9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCJcbiAgICAgICAgICAgICAgICA+PC92LXBhZ2luYXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj7QnNGLINC10YnQtSDQvdC1INC30L3QsNC10LwsINCz0LTQtSDQstGLINC40YHQv9C+0LvRjNC30L7QstCw0LvQuCDQsdCw0LvQu9GLPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlVzZXJQb2ludHNIaXN0b3J5XCIsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsOiAxLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICBkaWFsb2dQb3N0OiBudWxsLFxuICAgICAgICAgICAgICAgIGRlbGV0ZV9pZDogMCxcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgnL3VzZXIvZXZlbnQvJywge3BhcmFtczoge3BhZ2U6IHRoaXMucGFnZSwgcGVyX3BhZ2U6IDEwfX0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmwgPSByZXNwb25zZS5kYXRhLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9pbnRzSGlzdG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUG9pbnRzSGlzdG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXJQb2ludHNIaXN0b3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGE5YmE2MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyUG9pbnRzSGlzdG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJQb2ludHNIaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJjb3ZlclwifSxbX2MoJ3YtdG9vbGJhci10aXRsZScse3N0YXRpY0NsYXNzOlwibWItMlwiLGF0dHJzOntcImFsaWduXCI6XCJjZW50ZXJcIixcImp1c3RpZnlcIjpcImNlbnRlclwifSxkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0JjRgdGC0L7RgNC40Y8g0LHQsNC70LvQvtCyJyl9fSksX3ZtLl92KFwiIFwiKSwoX3ZtLmV2ZW50cy5sZW5ndGggPiAwKT9fYygnZGl2JyxbX2MoJ3YtY29udGFpbmVyJyxbX2MoJ3YtdGltZWxpbmUnLHthdHRyczp7XCJkZW5zZVwiOlwiXCJ9fSxfdm0uX2woKF92bS5ldmVudHMpLGZ1bmN0aW9uKGVudHJ5LGluZGV4KXtyZXR1cm4gX2MoJ2Rpdicse2tleTppbmRleCxzdGF0aWNTdHlsZTp7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIn19LFtfYygndi10aW1lbGluZS1pdGVtJyx7YXR0cnM6e1wic21hbGxcIjpcIlwiLFwibGVmdFwiOlwiXCIsXCJjb2xvclwiOmVudHJ5Lm1hcF9vYmplY3QgPyBlbnRyeS5tYXBfb2JqZWN0LmNvbG9yIDogJyMwMGZmMDAnfX0sW19jKCd2LWNhcmQnLHtzdGF0aWNDbGFzczpcImNvbnRhaW5lciBtYS0wIHBhLTAgZC1mbGV4IGZsZXgtY29sdW1uXCIsYXR0cnM6e1wiZWxldmF0aW9uXCI6XCIwXCJ9fSxbX2MoJ2g0JyxbX3ZtLl92KF92bS5fcyhlbnRyeS5tYXBfb2JqZWN0ID8gZW50cnkubWFwX29iamVjdC5uYW1lICA6IChlbnRyeS5ldmVudCAmJiBlbnRyeS5ldmVudC5uYW1lKSkpXSksX3ZtLl92KFwiIFwiKSxfYygnc3BhbicsW192bS5fdihfdm0uX3MoZW50cnkubWFwX29iamVjdCA/ICctJyA6ICcrJykrX3ZtLl9zKGVudHJ5LnBvaW50cykrXCIg0LHQsNC70LvQvtCyINCx0LvQsNCz0L7QtNCw0YDQvdC+0YHRgtC4XCIpXSksX3ZtLl92KFwiIFwiKSxfYygnc3Bhbicse3N0YXRpY0NsYXNzOlwidGV4dC1yaWdodCBoaXN0b3J5LXRpbWVcIixhdHRyczp7XCJ0aXRsZVwiOmVudHJ5LmNyZWF0ZWRfYXR9fSxbX2MoJ3NwYW4nLFtfdm0uX3YoX3ZtLl9zKGVudHJ5LmNyZWF0ZWRfYXQpKV0pXSldKV0sMSldLDEpfSksMCldLDEpLF92bS5fdihcIiBcIiksKF92bS5sID4gMSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGV4dC1jZW50ZXIgeHMtMTJcIn0sW19jKCd2LXBhZ2luYXRpb24nLHthdHRyczp7XCJsZW5ndGhcIjpfdm0ubCxcInRvdGFsLXZpc2libGVcIjozfSxtb2RlbDp7dmFsdWU6KF92bS5wYWdlKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLnBhZ2U9JCR2fSxleHByZXNzaW9uOlwicGFnZVwifX0pXSwxKTpfdm0uX2UoKV0sMSk6X2MoJ2RpdicsW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInRleHQtY2VudGVyIG15LTNcIn0sW192bS5fdihcItCc0Ysg0LXRidC1INC90LUg0LfQvdCw0LXQvCwg0LPQtNC1INCy0Ysg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQu9C4INCx0LDQu9C70YtcIildKV0pXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==