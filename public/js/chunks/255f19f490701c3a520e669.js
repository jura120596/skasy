(self.webpackChunk=self.webpackChunk||[]).push([[255],{4255:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});const a={name:"Types",data:function(t){return{l:1,types:t.$store.state.types,page:1,delete_id:0,show:!1}},mounted:function(){this.getPage()},methods:{getPage:function(){var t=this;window.axios.get("type").then((function(e){var s=[];e.data.data.forEach((function(t){s.push({value:t.id,text:t.name})})),t.$store.state.types=s,t.types=t.$store.state.types}))},delete:function(){var t=this;this.delete_id>0&&window.axios.delete("/type/"+this.delete_id).then((function(e){t.getPage(),t.delete_id=0})).catch((function(t){console.log(t)}))}},watch:{page:function(){this.getPage()},delete_id:function(t){t>0&&this.delete()}}};const n=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"cover"},[s("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:t._s("Типы заявок")}}),t._v(" "),t.$store.state.types.length>0?s("div",[s("v-container",t._l(t.$store.state.types,(function(e,a){return s("v-card",{key:a,staticStyle:{position:"relative"},attrs:{elevation:"0"}},[1024===t.$store.state.auth.user.role?s("div",{staticClass:"d-flex crud",staticStyle:{position:"absolute",right:"5px",top:"-10px","font-size":"10px"}},[s("v-btn",{staticClass:"mr-3",attrs:{color:"red",fab:"",small:"",dark:""},on:{click:function(s){t.delete_id=e.value}}},[s("v-icon",[t._v("mdi-delete")])],1)],1):t._e(),t._v(" "),s("h4",[t._v(t._s(e.text))])])})),1)],1):s("div",[s("div",{staticClass:"text-center my-3"},[t._v("Типов пока нет")])]),t._v(" "),1024===t.$store.state.auth.user.role?s("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",dark:""},on:{click:function(e){return t.$router.push("/type/0")}}},[s("v-icon",[t._v("mdi-plus")])],1):t._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1R5cGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVHlwZXMudnVlP2EyOWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1R5cGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVHlwZXMudnVlP2EzZjgiXSwibmFtZXMiOlsiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJhdHRycyIsImRvbVByb3BzIiwiX3MiLCJfdiIsIiRzdG9yZSIsInN0YXRlIiwidHlwZXMiLCJsZW5ndGgiLCJfbCIsImVudHJ5IiwiaW5kZXgiLCJrZXkiLCJzdGF0aWNTdHlsZSIsImF1dGgiLCJ1c2VyIiwicm9sZSIsIm9uIiwiJGV2ZW50IiwiZGVsZXRlX2lkIiwidmFsdWUiLCJfZSIsInRleHQiLCIkcm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6ImlIQXlDQSxNQ3pDZ04sRUR5Q2hOLENBQ0UsS0FBRixRQUNFLEtBQUYsWUFDSSxNQUFKLENBQ00sRUFBTixFQUNNLE1BQU4scUJBQ00sS0FBTixFQUNNLFVBQU4sRUFDTSxNQUFOLElBR0UsUUFYRixXQVlJLEtBQUosV0FFRSxRQUFGLENBQ0ksUUFESixXQUNNLElBQU4sT0FDTSxPQUFOLG9DQUNRLElBQVIsS0FDUSxFQUFSLCtCQUNVLEVBQVYsTUFDWSxNQUFaLEtBQ1ksS0FBWixZQUdRLEVBQVIscUJBQ1EsRUFBUiwrQkFYSSxPQUFKLFdBY00sSUFBTixPQUNBLGtCQUNBLCtEQUNRLEVBQVIsVUFDUSxFQUFSLGVBRkEsT0FHQSxZQUNRLFFBQVIsWUFJRSxNQUFGLENBQ0ksS0FESixXQUVNLEtBQU4sV0FFSSxVQUpKLFNBSUEsR0FDQSxzQkVsRUEsU0FYZ0IsRSxRQUFBLEdBQ2QsR0NSVyxXQUFhLElBQUlBLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsY0FBYyxDQUFDRSxZQUFZLFNBQVMsQ0FBQ0YsRUFBRyxrQkFBa0IsQ0FBQ0UsWUFBWSxPQUFPQyxNQUFNLENBQUMsTUFBUSxTQUFTLFFBQVUsVUFBVUMsU0FBUyxDQUFDLFlBQWNSLEVBQUlTLEdBQUcsa0JBQWtCVCxFQUFJVSxHQUFHLEtBQU1WLEVBQUlXLE9BQU9DLE1BQU1DLE1BQU1DLE9BQVMsRUFBR1YsRUFBRyxNQUFNLENBQUNBLEVBQUcsY0FBY0osRUFBSWUsR0FBSWYsRUFBSVcsT0FBT0MsTUFBVyxPQUFFLFNBQVNJLEVBQU1DLEdBQU8sT0FBT2IsRUFBRyxTQUFTLENBQUNjLElBQUlELEVBQU1FLFlBQVksQ0FBQyxTQUFXLFlBQVlaLE1BQU0sQ0FBQyxVQUFZLE1BQU0sQ0FBc0MsT0FBcENQLEVBQUlXLE9BQU9DLE1BQU1RLEtBQUtDLEtBQUtDLEtBQWVsQixFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxjQUFjYSxZQUFZLENBQUMsU0FBVyxXQUFXLE1BQVEsTUFBTSxJQUFNLFFBQVEsWUFBWSxTQUFTLENBQUNmLEVBQUcsUUFBUSxDQUFDRSxZQUFZLE9BQU9DLE1BQU0sQ0FBQyxNQUFRLE1BQU0sSUFBTSxHQUFHLE1BQVEsR0FBRyxLQUFPLElBQUlnQixHQUFHLENBQUMsTUFBUSxTQUFTQyxHQUFReEIsRUFBSXlCLFVBQVlULEVBQU1VLFNBQVMsQ0FBQ3RCLEVBQUcsU0FBUyxDQUFDSixFQUFJVSxHQUFHLGlCQUFpQixJQUFJLEdBQUdWLEVBQUkyQixLQUFLM0IsRUFBSVUsR0FBRyxLQUFLTixFQUFHLEtBQUssQ0FBQ0osRUFBSVUsR0FBR1YsRUFBSVMsR0FBR08sRUFBTVksY0FBYSxJQUFJLEdBQUd4QixFQUFHLE1BQU0sQ0FBQ0EsRUFBRyxNQUFNLENBQUNFLFlBQVksb0JBQW9CLENBQUNOLEVBQUlVLEdBQUcsc0JBQXNCVixFQUFJVSxHQUFHLEtBQTBDLE9BQXBDVixFQUFJVyxPQUFPQyxNQUFNUSxLQUFLQyxLQUFLQyxLQUFlbEIsRUFBRyxRQUFRLENBQUNFLFlBQVksV0FBV0MsTUFBTSxDQUFDLE1BQVEsVUFBVSxJQUFNLEdBQUcsS0FBTyxJQUFJZ0IsR0FBRyxDQUFDLE1BQVEsU0FBU0MsR0FBUSxPQUFPeEIsRUFBSTZCLFFBQVFDLEtBQUssY0FBYyxDQUFDMUIsRUFBRyxTQUFTLENBQUNKLEVBQUlVLEdBQUcsZUFBZSxHQUFHVixFQUFJMkIsTUFBTSxLQUN4c0MsSURVcEIsRUFDQSxLQUNBLEtBQ0EsTSIsImZpbGUiOiJqcy9jaHVua3MvMjU1ZjE5ZjQ5MDcwMWMzYTUyMGU2NjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiY292ZXJcIj5cbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGV4dD1cIifQotC40L/RiyDQt9Cw0Y/QstC+0LonXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8ZGl2IHYtaWY9XCIkc3RvcmUuc3RhdGUudHlwZXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQgIHYtZm9yPVwiKGVudHJ5LCBpbmRleCkgaW4gJHN0b3JlLnN0YXRlLnR5cGVzXCIgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGV2YXRpb249XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggY3J1ZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OiA1cHg7IHRvcDogLTEwcHg7IGZvbnQtc2l6ZTogMTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZV9pZCA9IGVudHJ5LnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5tZGktZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7IGVudHJ5LnRleHQgfX08L2g0PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTNcIj7QotC40L/QvtCyINC/0L7QutCwINC90LXRgjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8di1idG4gY2xhc3M9XCJzYXZlLWJ0blwiXG4gICAgICAgICAgICAgICB2LWlmPVwiJHN0b3JlLnN0YXRlLmF1dGgudXNlci5yb2xlID09PSAxMDI0XCJcbiAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICBmYWJcbiAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL3R5cGUvMCcpXCJcbiAgICAgICAgICAgICAgIGRhcms+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XG4gICAgICAgIDwvdi1idG4+XG4gICAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBcIlR5cGVzXCIsXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsOiAxLFxuICAgICAgICAgICAgICAgIHR5cGVzOiB2bS4kc3RvcmUuc3RhdGUudHlwZXMsXG4gICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICBkZWxldGVfaWQ6IDAsXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldFBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLmdldCgndHlwZScpLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHIuZGF0YS5kYXRhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHYubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLnR5cGVzID0gdHlwZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXMgPSB0aGlzLiRzdG9yZS5zdGF0ZS50eXBlc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGV0ZV9pZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5kZWxldGUoJy90eXBlLycgKyB0aGlzLmRlbGV0ZV9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9pZCA9IDBcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlX2lkKG52KSB7XG4gICAgICAgICAgICAgICAgaWYgKG52ID4gMCkgdGhpcy5kZWxldGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1R5cGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1R5cGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVHlwZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdkNTRhNTQ0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1R5cGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVHlwZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcImNvdmVyXCJ9LFtfYygndi10b29sYmFyLXRpdGxlJyx7c3RhdGljQ2xhc3M6XCJtYi0yXCIsYXR0cnM6e1wiYWxpZ25cIjpcImNlbnRlclwiLFwianVzdGlmeVwiOlwiY2VudGVyXCJ9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKCfQotC40L/RiyDQt9Cw0Y/QstC+0LonKX19KSxfdm0uX3YoXCIgXCIpLChfdm0uJHN0b3JlLnN0YXRlLnR5cGVzLmxlbmd0aCA+IDApP19jKCdkaXYnLFtfYygndi1jb250YWluZXInLF92bS5fbCgoX3ZtLiRzdG9yZS5zdGF0ZS50eXBlcyksZnVuY3Rpb24oZW50cnksaW5kZXgpe3JldHVybiBfYygndi1jYXJkJyx7a2V5OmluZGV4LHN0YXRpY1N0eWxlOntcInBvc2l0aW9uXCI6XCJyZWxhdGl2ZVwifSxhdHRyczp7XCJlbGV2YXRpb25cIjpcIjBcIn19LFsoX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNCk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZC1mbGV4IGNydWRcIixzdGF0aWNTdHlsZTp7XCJwb3NpdGlvblwiOlwiYWJzb2x1dGVcIixcInJpZ2h0XCI6XCI1cHhcIixcInRvcFwiOlwiLTEwcHhcIixcImZvbnQtc2l6ZVwiOlwiMTBweFwifX0sW19jKCd2LWJ0bicse3N0YXRpY0NsYXNzOlwibXItM1wiLGF0dHJzOntcImNvbG9yXCI6XCJyZWRcIixcImZhYlwiOlwiXCIsXCJzbWFsbFwiOlwiXCIsXCJkYXJrXCI6XCJcIn0sb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe192bS5kZWxldGVfaWQgPSBlbnRyeS52YWx1ZX19fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIm1kaS1kZWxldGVcIildKV0sMSldLDEpOl92bS5fZSgpLF92bS5fdihcIiBcIiksX2MoJ2g0JyxbX3ZtLl92KF92bS5fcyhlbnRyeS50ZXh0KSldKV0pfSksMSldLDEpOl9jKCdkaXYnLFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ0ZXh0LWNlbnRlciBteS0zXCJ9LFtfdm0uX3YoXCLQotC40L/QvtCyINC/0L7QutCwINC90LXRglwiKV0pXSksX3ZtLl92KFwiIFwiKSwoX3ZtLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIucm9sZSA9PT0gMTAyNCk/X2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJzYXZlLWJ0blwiLGF0dHJzOntcImNvbG9yXCI6XCJzdWNjZXNzXCIsXCJmYWJcIjpcIlwiLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6ZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaCgnL3R5cGUvMCcpfX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sMSk6X3ZtLl9lKCldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9