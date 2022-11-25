(self.webpackChunk=self.webpackChunk||[]).push([[460],{6908:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var a=t(4015),n=t.n(a),o=t(3645),s=t.n(o)()(n());s.push([e.id,"#mapid[data-v-3ef8d79e]{min-height:200px;height:95vh}","",{version:3,sources:["webpack://./resources/js/pages/Map.vue"],names:[],mappings:"AAmCA,wBACA,gBAAA,CACA,WACA",sourcesContent:["<template>\r\n    <v-container class=\"ma-0 pa-0\">\r\n        <div id=\"mapid\"></div>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        name: \"Map\",\r\n        mounted() {\r\n            var mymap = L.map('mapid').setView([55.536446, 47.498600], 13);\r\n            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ', {\r\n                attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\r\n                maxZoom: 18,\r\n                id: 'mapbox/streets-v11',\r\n                tileSize: 512,\r\n                zoomOffset: -1,\r\n                accessToken: 'your.mapbox.access.token'\r\n            }).addTo(mymap);\r\n            let markers = [\r\n                [[55.530648, 47.505122], 'Дом культуры<br> Администрация послеления'],\r\n            ];\r\n            markers.forEach(function(v) {\r\n                L.marker(v[0]).addTo(mymap)\r\n                    .bindPopup(v[1])\r\n                    .openPopup()\r\n            });\r\n        },\r\n        methods: {\r\n\r\n        }\r\n    }\r\n<\/script>\r\n\r\n<style scoped>\r\n    #mapid {\r\n        min-height: 200px;\r\n        height: 95vh;\r\n    }\r\n</style>"],sourceRoot:""}]);const p=s},460:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});const a={name:"Map",mounted:function(){var e=L.map("mapid").setView([55.536446,47.4986],13);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVyYTk2IiwiYSI6ImNrcGw1MWVzODFkazQyd284bjY0ZWIxbmIifQ.CWG9L2rMStLO3i3AOgrnyQ",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"your.mapbox.access.token"}).addTo(e);[[[55.530648,47.505122],"Дом культуры<br> Администрация послеления"]].forEach((function(r){L.marker(r[0]).addTo(e).bindPopup(r[1]).openPopup()}))},methods:{}};t(9092);const n=(0,t(1900).Z)(a,(function(){var e=this.$createElement,r=this._self._c||e;return r("v-container",{staticClass:"ma-0 pa-0"},[r("div",{attrs:{id:"mapid"}})])}),[],!1,null,"3ef8d79e",null).exports},9092:(e,r,t)=>{var a=t(6908);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);(0,t(5346).Z)("5bd57277",a,!0,{})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZT84MGZkIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvTWFwLnZ1ZT85YTNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlPzY5NzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL01hcC52dWU/MzQ1MCJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsIl9oIiwidGhpcyIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJsb2NhbHMiLCJleHBvcnRzIiwiYWRkIl0sIm1hcHBpbmdzIjoia0pBR0lBLEUsTUFBMEIsR0FBNEIsS0FFMURBLEVBQXdCQyxLQUFLLENBQUNDLEVBQU9DLEdBQUksd0RBQXlELEdBQUcsQ0FBQyxRQUFVLEVBQUUsUUFBVSxDQUFDLDBDQUEwQyxNQUFRLEdBQUcsU0FBVyw4QkFBOEIsZUFBaUIsQ0FBQyx1NUNBQXM1QyxXQUFhLE1BRWhwRCxXLHlEQ0FBLE1DUDhNLEVETzlNLENBQ0UsS0FBRixNQUNFLFFBRkYsV0FHSSxJQUFKLGlEQUNJLEVBQUosMktBQ00sWUFBTiwySkFDTSxRQUFOLEdBQ00sR0FBTixxQkFDTSxTQUFOLElBQ00sWUFBTixFQUNNLFlBQU4sNkJBQ0EsU0FDQSxDQUNBLHFFQUVBLHFCQUNNLEVBQU4sc0JBQ0EsZ0JBQ0EsZ0JBR0UsUUFBRixJLFFFVEEsU0FYZ0IsRSxRQUFBLEdBQ2QsR0NUVyxXQUFhLElBQWlCQyxFQUFUQyxLQUFnQkMsZUFBbUJDLEVBQW5DRixLQUEwQ0csTUFBTUQsSUFBSUgsRUFBRyxPQUFPRyxFQUFHLGNBQWMsQ0FBQ0UsWUFBWSxhQUFhLENBQUNGLEVBQUcsTUFBTSxDQUFDRyxNQUFNLENBQUMsR0FBSyxlQUM1SSxJRFdwQixFQUNBLEtBQ0EsV0FDQSxNLHdCRVpGLElBQUlDLEVBQVUsRUFBUSxNQUNuQkEsRUFBUUMsYUFBWUQsRUFBVUEsRUFBUUUsU0FDbkIsaUJBQVpGLElBQXNCQSxFQUFVLENBQUMsQ0FBQ1QsRUFBT0MsR0FBSVEsRUFBUyxNQUM3REEsRUFBUUcsU0FBUVosRUFBT2EsUUFBVUosRUFBUUcsU0FHL0JFLEVBREgsV0FDTyxXQUFZTCxHQUFTLEVBQU0iLCJmaWxlIjoianMvY2h1bmtzLzQ2MGYxZmJlN2M1MjJlYmQzZTQ0MjRmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbWFwaWRbZGF0YS12LTNlZjhkNzllXXttaW4taGVpZ2h0OjIwMHB4O2hlaWdodDo5NXZofVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9NYXAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQW1DQSx3QkFDQSxnQkFBQSxDQUNBLFdBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8di1jb250YWluZXIgY2xhc3M9XFxcIm1hLTAgcGEtMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJtYXBpZFxcXCI+PC9kaXY+XFxyXFxuICAgIDwvdi1jb250YWluZXI+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiTWFwXFxcIixcXHJcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxyXFxuICAgICAgICAgICAgdmFyIG15bWFwID0gTC5tYXAoJ21hcGlkJykuc2V0VmlldyhbNTUuNTM2NDQ2LCA0Ny40OTg2MDBdLCAxMyk7XFxyXFxuICAgICAgICAgICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL3tpZH0vdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXBrLmV5SjFJam9pYW5WeVlUazJJaXdpWVNJNkltTnJjR3cxTVdWek9ERmthelF5ZDI4NGJqWTBaV0l4Ym1JaWZRLkNXRzlMMnJNU3RMTzNpM0FPZ3JueVEnLCB7XFxyXFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFxcXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCBJbWFnZXJ5IMKpIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXFxcIj5NYXBib3g8L2E+JyxcXHJcXG4gICAgICAgICAgICAgICAgbWF4Wm9vbTogMTgsXFxyXFxuICAgICAgICAgICAgICAgIGlkOiAnbWFwYm94L3N0cmVldHMtdjExJyxcXHJcXG4gICAgICAgICAgICAgICAgdGlsZVNpemU6IDUxMixcXHJcXG4gICAgICAgICAgICAgICAgem9vbU9mZnNldDogLTEsXFxyXFxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiAneW91ci5tYXBib3guYWNjZXNzLnRva2VuJ1xcclxcbiAgICAgICAgICAgIH0pLmFkZFRvKG15bWFwKTtcXHJcXG4gICAgICAgICAgICBsZXQgbWFya2VycyA9IFtcXHJcXG4gICAgICAgICAgICAgICAgW1s1NS41MzA2NDgsIDQ3LjUwNTEyMl0sICfQlNC+0Lwg0LrRg9C70YzRgtGD0YDRizxicj4g0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L/QvtGB0LvQtdC70LXQvdC40Y8nXSxcXHJcXG4gICAgICAgICAgICBdO1xcclxcbiAgICAgICAgICAgIG1hcmtlcnMuZm9yRWFjaChmdW5jdGlvbih2KSB7XFxyXFxuICAgICAgICAgICAgICAgIEwubWFya2VyKHZbMF0pLmFkZFRvKG15bWFwKVxcclxcbiAgICAgICAgICAgICAgICAgICAgLmJpbmRQb3B1cCh2WzFdKVxcclxcbiAgICAgICAgICAgICAgICAgICAgLm9wZW5Qb3B1cCgpXFxyXFxuICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbWV0aG9kczoge1xcclxcblxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gICAgI21hcGlkIHtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwibWEtMCBwYS0wXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm1hcGlkXCI+PC9kaXY+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIk1hcFwiLFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIHZhciBteW1hcCA9IEwubWFwKCdtYXBpZCcpLnNldFZpZXcoWzU1LjUzNjQ0NiwgNDcuNDk4NjAwXSwgMTMpO1xyXG4gICAgICAgICAgICBMLnRpbGVMYXllcignaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEve2lkfS90aWxlcy97en0ve3h9L3t5fT9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lhblZ5WVRrMklpd2lZU0k2SW1OcmNHdzFNV1Z6T0RGa2F6UXlkMjg0YmpZMFpXSXhibUlpZlEuQ1dHOUwyck1TdExPM2kzQU9ncm55UScsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIEltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPicsXHJcbiAgICAgICAgICAgICAgICBtYXhab29tOiAxOCxcclxuICAgICAgICAgICAgICAgIGlkOiAnbWFwYm94L3N0cmVldHMtdjExJyxcclxuICAgICAgICAgICAgICAgIHRpbGVTaXplOiA1MTIsXHJcbiAgICAgICAgICAgICAgICB6b29tT2Zmc2V0OiAtMSxcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiAneW91ci5tYXBib3guYWNjZXNzLnRva2VuJ1xyXG4gICAgICAgICAgICB9KS5hZGRUbyhteW1hcCk7XHJcbiAgICAgICAgICAgIGxldCBtYXJrZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgW1s1NS41MzA2NDgsIDQ3LjUwNTEyMl0sICfQlNC+0Lwg0LrRg9C70YzRgtGD0YDRizxicj4g0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0L/QvtGB0LvQtdC70LXQvdC40Y8nXSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgbWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIEwubWFya2VyKHZbMF0pLmFkZFRvKG15bWFwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAodlsxXSlcclxuICAgICAgICAgICAgICAgICAgICAub3BlblBvcHVwKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgI21hcGlkIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDk1dmg7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlZjhkNzllJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlZjhkNzllJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZWY4ZDc5ZVwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LWNvbnRhaW5lcicse3N0YXRpY0NsYXNzOlwibWEtMCBwYS0wXCJ9LFtfYygnZGl2Jyx7YXR0cnM6e1wiaWRcIjpcIm1hcGlkXCJ9fSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2VmOGQ3OWUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjViZDU3Mjc3XCIsIGNvbnRlbnQsIHRydWUsIHt9KTsiXSwic291cmNlUm9vdCI6IiJ9