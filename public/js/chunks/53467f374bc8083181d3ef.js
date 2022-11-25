(self.webpackChunk=self.webpackChunk||[]).push([[53],{3181:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(4015),s=n.n(r),a=n(3645),l=n.n(a)()(s());l.push([e.id,".place.v-text-field>.v-input__control>.v-input__slot:after,.place.v-text-field>.v-input__control>.v-input__slot:before,.place .v-text-field__slot textarea{display:none!important}","",{version:3,sources:["webpack://./resources/js/pages/EventEdit.vue"],names:[],mappings:"AAkFA,2JAEA,sBACA",sourcesContent:['<template>\r\n    <v-container\r\n            class="cover">\r\n        <v-toolbar-title align="center" justify="center" class="mb-2"\r\n        v-text="\'Добавление мероприятия\'">\r\n        </v-toolbar-title>\r\n        <v-text-field\r\n            type="text"\r\n            name="title"\r\n            label="Заголовок"\r\n            v-model="event.title"\r\n            :error-messages="messages.title"\r\n            >\r\n        </v-text-field>\r\n        <v-text-field\r\n                name="place"\r\n                label="Место проведения"\r\n                v-model="event.place"\r\n                :error-messages="messages.place"\r\n        ></v-text-field>\r\n        <v-text-field\r\n                name="date"\r\n                label="Дата проведения"\r\n                v-model="event.date"\r\n                :error-messages="messages.date"\r\n        ></v-text-field>\r\n        <v-spacer/>\r\n        <v-btn class="save-btn"\r\n               color="success"\r\n               fab\r\n               @click="create"\r\n               :disabled="!(event.place && event.title && event.date)"\r\n               dark>\r\n            <v-icon>mdi-plus</v-icon>\r\n        </v-btn>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        name: "PostAdd",\r\n        components: {\r\n        },\r\n        data: (vm) => {\r\n            return {\r\n                event: {\r\n                    id: vm.$route.params.id,\r\n                    title: \'\',\r\n                    place: \'\',\r\n                    date: \'\',\r\n                },\r\n                messages: {\r\n                    title: \'\',\r\n                    place: \'\',\r\n                    date:\'\',\r\n                }\r\n            }\r\n        },\r\n        mounted() {\r\n        },\r\n        methods: {\r\n            create() {\r\n                window.axios.post(\'/event\', this.event)\r\n                    .then((r) => {\r\n                        this.$router.push({name: "events"});\r\n                    }).catch((e) => {\r\n                    if (e.response && e.response.status === 422) {\r\n                        let errors = e.response.data.errors\r\n                        Object.keys(this.messages).forEach((k)=> {\r\n                            this.messages[k] = errors[k]?.[0] || \'\';\r\n                        });\r\n                    }\r\n                })\r\n            },\r\n        }\r\n    }\r\n<\/script>\r\n\r\n<style>\r\n    .place .v-text-field__slot textarea {\r\n        display: none !important;\r\n    }\r\n    .place.v-text-field>.v-input__control>.v-input__slot:after ,\r\n    .place.v-text-field>.v-input__control>.v-input__slot:before{\r\n        display: none !important;\r\n    }\r\n</style>'],sourceRoot:""}]);const o=l},3053:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});const r={name:"PostAdd",components:{},data:function(e){return{event:{id:e.$route.params.id,title:"",place:"",date:""},messages:{title:"",place:"",date:""}}},mounted:function(){},methods:{create:function(){var e=this;window.axios.post("/event",this.event).then((function(t){e.$router.push({name:"events"})})).catch((function(t){if(t.response&&422===t.response.status){var n=t.response.data.errors;Object.keys(e.messages).forEach((function(t){var r;e.messages[t]=(null===(r=n[t])||void 0===r?void 0:r[0])||""}))}}))}}};n(9877);const s=(0,n(1900).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"cover"},[n("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:e._s("Добавление мероприятия")}}),e._v(" "),n("v-text-field",{attrs:{type:"text",name:"title",label:"Заголовок","error-messages":e.messages.title},model:{value:e.event.title,callback:function(t){e.$set(e.event,"title",t)},expression:"event.title"}}),e._v(" "),n("v-text-field",{attrs:{name:"place",label:"Место проведения","error-messages":e.messages.place},model:{value:e.event.place,callback:function(t){e.$set(e.event,"place",t)},expression:"event.place"}}),e._v(" "),n("v-text-field",{attrs:{name:"date",label:"Дата проведения","error-messages":e.messages.date},model:{value:e.event.date,callback:function(t){e.$set(e.event,"date",t)},expression:"event.date"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",disabled:!(e.event.place&&e.event.title&&e.event.date),dark:""},on:{click:e.create}},[n("v-icon",[e._v("mdi-plus")])],1)],1)}),[],!1,null,null,null).exports},9877:(e,t,n)=>{var r=n(3181);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5346).Z)("3e1d34fb",r,!0,{})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRXZlbnRFZGl0LnZ1ZT9jYjFkIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvRXZlbnRFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRXZlbnRFZGl0LnZ1ZT9jM2JhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9FdmVudEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9FdmVudEVkaXQudnVlP2UxNmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0V2ZW50RWRpdC52dWU/MTFkYiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJkb21Qcm9wcyIsIl9zIiwiX3YiLCJtZXNzYWdlcyIsInRpdGxlIiwibW9kZWwiLCJ2YWx1ZSIsImV2ZW50IiwiY2FsbGJhY2siLCIkJHYiLCIkc2V0IiwiZXhwcmVzc2lvbiIsInBsYWNlIiwiZGF0ZSIsIm9uIiwiY3JlYXRlIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwibG9jYWxzIiwiZXhwb3J0cyIsImFkZCJdLCJtYXBwaW5ncyI6ImlKQUdJQSxFLE1BQTBCLEdBQTRCLEtBRTFEQSxFQUF3QkMsS0FBSyxDQUFDQyxFQUFPQyxHQUFJLHFMQUFzTCxHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyxnREFBZ0QsTUFBUSxHQUFHLFNBQVcsb0JBQW9CLGVBQWlCLENBQUMsdXVGQUFvd0YsV0FBYSxNQUV2bkcsVywwRENnQ0EsTUN2Q29OLEVEdUNwTixDQUNFLEtBQUYsVUFDRSxXQUFGLEdBRUUsS0FBRixZQUNJLE1BQUosQ0FDTSxNQUFOLENBQ1EsR0FBUixtQkFDUSxNQUFSLEdBQ1EsTUFBUixHQUNRLEtBQVIsSUFFTSxTQUFOLENBQ1EsTUFBUixHQUNRLE1BQVIsR0FDUSxLQUFSLE1BSUUsUUFuQkYsYUFxQkUsUUFBRixDQUNJLE9BREosV0FDTSxJQUFOLE9BQ00sT0FBTixnQ0FDQSxrQkFDUSxFQUFSLGNBQVUsS0FBVixjQUZBLE9BR0EsWUFDUSxHQUFSLHFDQUNVLElBQVYseUJBQ1UsT0FBVixzQ0FBWSxJQUFaLEVBQ1ksRUFBWixvRSxRRWxEQSxTQVhnQixFLFFBQUEsR0FDZCxHQ1RXLFdBQWEsSUFBSUMsRUFBSUMsS0FBU0MsRUFBR0YsRUFBSUcsZUFBbUJDLEVBQUdKLEVBQUlLLE1BQU1ELElBQUlGLEVBQUcsT0FBT0UsRUFBRyxjQUFjLENBQUNFLFlBQVksU0FBUyxDQUFDRixFQUFHLGtCQUFrQixDQUFDRSxZQUFZLE9BQU9DLE1BQU0sQ0FBQyxNQUFRLFNBQVMsUUFBVSxVQUFVQyxTQUFTLENBQUMsWUFBY1IsRUFBSVMsR0FBRyw2QkFBNkJULEVBQUlVLEdBQUcsS0FBS04sRUFBRyxlQUFlLENBQUNHLE1BQU0sQ0FBQyxLQUFPLE9BQU8sS0FBTyxRQUFRLE1BQVEsWUFBWSxpQkFBaUJQLEVBQUlXLFNBQVNDLE9BQU9DLE1BQU0sQ0FBQ0MsTUFBT2QsRUFBSWUsTUFBVyxNQUFFQyxTQUFTLFNBQVVDLEdBQU1qQixFQUFJa0IsS0FBS2xCLEVBQUllLE1BQU8sUUFBU0UsSUFBTUUsV0FBVyxpQkFBaUJuQixFQUFJVSxHQUFHLEtBQUtOLEVBQUcsZUFBZSxDQUFDRyxNQUFNLENBQUMsS0FBTyxRQUFRLE1BQVEsbUJBQW1CLGlCQUFpQlAsRUFBSVcsU0FBU1MsT0FBT1AsTUFBTSxDQUFDQyxNQUFPZCxFQUFJZSxNQUFXLE1BQUVDLFNBQVMsU0FBVUMsR0FBTWpCLEVBQUlrQixLQUFLbEIsRUFBSWUsTUFBTyxRQUFTRSxJQUFNRSxXQUFXLGlCQUFpQm5CLEVBQUlVLEdBQUcsS0FBS04sRUFBRyxlQUFlLENBQUNHLE1BQU0sQ0FBQyxLQUFPLE9BQU8sTUFBUSxrQkFBa0IsaUJBQWlCUCxFQUFJVyxTQUFTVSxNQUFNUixNQUFNLENBQUNDLE1BQU9kLEVBQUllLE1BQVUsS0FBRUMsU0FBUyxTQUFVQyxHQUFNakIsRUFBSWtCLEtBQUtsQixFQUFJZSxNQUFPLE9BQVFFLElBQU1FLFdBQVcsZ0JBQWdCbkIsRUFBSVUsR0FBRyxLQUFLTixFQUFHLFlBQVlKLEVBQUlVLEdBQUcsS0FBS04sRUFBRyxRQUFRLENBQUNFLFlBQVksV0FBV0MsTUFBTSxDQUFDLE1BQVEsVUFBVSxJQUFNLEdBQUcsV0FBYVAsRUFBSWUsTUFBTUssT0FBU3BCLEVBQUllLE1BQU1ILE9BQVNaLEVBQUllLE1BQU1NLE1BQU0sS0FBTyxJQUFJQyxHQUFHLENBQUMsTUFBUXRCLEVBQUl1QixTQUFTLENBQUNuQixFQUFHLFNBQVMsQ0FBQ0osRUFBSVUsR0FBRyxlQUFlLElBQUksS0FDbnNDLElEV3BCLEVBQ0EsS0FDQSxLQUNBLE0sd0JFWkYsSUFBSWMsRUFBVSxFQUFRLE1BQ25CQSxFQUFRQyxhQUFZRCxFQUFVQSxFQUFRRSxTQUNuQixpQkFBWkYsSUFBc0JBLEVBQVUsQ0FBQyxDQUFDMUIsRUFBT0MsR0FBSXlCLEVBQVMsTUFDN0RBLEVBQVFHLFNBQVE3QixFQUFPOEIsUUFBVUosRUFBUUcsU0FHL0JFLEVBREgsV0FDTyxXQUFZTCxHQUFTLEVBQU0iLCJmaWxlIjoianMvY2h1bmtzLzUzNDY3ZjM3NGJjODA4MzE4MWQzZWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIsLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmUsLnBsYWNlIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWF7ZGlzcGxheTpub25lIWltcG9ydGFudH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRXZlbnRFZGl0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrRkEsMkpBRUEsc0JBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8di1jb250YWluZXJcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY292ZXJcXFwiPlxcclxcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cXFwiY2VudGVyXFxcIiBqdXN0aWZ5PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIlxcclxcbiAgICAgICAgdi10ZXh0PVxcXCIn0JTQvtCx0LDQstC70LXQvdC40LUg0LzQtdGA0L7Qv9GA0LjRj9GC0LjRjydcXFwiPlxcclxcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxyXFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICBuYW1lPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICBsYWJlbD1cXFwi0JfQsNCz0L7Qu9C+0LLQvtC6XFxcIlxcclxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcImV2ZW50LnRpdGxlXFxcIlxcclxcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cXFwibWVzc2FnZXMudGl0bGVcXFwiXFxyXFxuICAgICAgICAgICAgPlxcclxcbiAgICAgICAgPC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcInBsYWNlXFxcIlxcclxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwi0JzQtdGB0YLQviDQv9GA0L7QstC10LTQtdC90LjRj1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZXZlbnQucGxhY2VcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cXFwibWVzc2FnZXMucGxhY2VcXFwiXFxyXFxuICAgICAgICA+PC92LXRleHQtZmllbGQ+XFxyXFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgICAgICAgIG5hbWU9XFxcImRhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCLQlNCw0YLQsCDQv9GA0L7QstC10LTQtdC90LjRj1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZXZlbnQuZGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJtZXNzYWdlcy5kYXRlXFxcIlxcclxcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxcclxcbiAgICAgICAgPHYtc3BhY2VyLz5cXHJcXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cXFwic2F2ZS1idG5cXFwiXFxyXFxuICAgICAgICAgICAgICAgY29sb3I9XFxcInN1Y2Nlc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgZmFiXFxyXFxuICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJjcmVhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhKGV2ZW50LnBsYWNlICYmIGV2ZW50LnRpdGxlICYmIGV2ZW50LmRhdGUpXFxcIlxcclxcbiAgICAgICAgICAgICAgIGRhcms+XFxyXFxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxcclxcbiAgICAgICAgPC92LWJ0bj5cXHJcXG4gICAgPC92LWNvbnRhaW5lcj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgICAgIG5hbWU6IFxcXCJQb3N0QWRkXFxcIixcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXHJcXG4gICAgICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgICAgICBldmVudDoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZtLiRyb3V0ZS5wYXJhbXMuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXFxyXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZTogJycsXFxyXFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6JycsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbW91bnRlZCgpIHtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICAgICAgY3JlYXRlKCkge1xcclxcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2V2ZW50JywgdGhpcy5ldmVudClcXHJcXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6IFxcXCJldmVudHNcXFwifSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICAucGxhY2UgLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXFxyXFxuICAgIC5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY292ZXJcIj5cclxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXHJcbiAgICAgICAgdi10ZXh0PVwiJ9CU0L7QsdCw0LLQu9C10L3QuNC1INC80LXRgNC+0L/RgNC40Y/RgtC40Y8nXCI+XHJcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cImV2ZW50LnRpdGxlXCJcclxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMudGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPC92LXRleHQtZmllbGQ+XHJcbiAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBsYWNlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwi0JzQtdGB0YLQviDQv9GA0L7QstC10LTQtdC90LjRj1wiXHJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXZlbnQucGxhY2VcIlxyXG4gICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVwibWVzc2FnZXMucGxhY2VcIlxyXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cItCU0LDRgtCwINC/0YDQvtCy0LXQtNC10L3QuNGPXCJcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJldmVudC5kYXRlXCJcclxuICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmRhdGVcIlxyXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cclxuICAgICAgICA8di1zcGFjZXIvPlxyXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cInNhdmUtYnRuXCJcclxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgZmFiXHJcbiAgICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEoZXZlbnQucGxhY2UgJiYgZXZlbnQudGl0bGUgJiYgZXZlbnQuZGF0ZSlcIlxyXG4gICAgICAgICAgICAgICBkYXJrPlxyXG4gICAgICAgICAgICA8di1pY29uPm1kaS1wbHVzPC92LWljb24+XHJcbiAgICAgICAgPC92LWJ0bj5cclxuICAgIDwvdi1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiUG9zdEFkZFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdm0uJHJvdXRlLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOicnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYXhpb3MucG9zdCgnL2V2ZW50JywgdGhpcy5ldmVudClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogXCJldmVudHNcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gZS5yZXNwb25zZS5kYXRhLmVycm9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzKS5mb3JFYWNoKChrKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLnBsYWNlIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxyXG4gICAgLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXZlbnRFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjU1NjcwNyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FdmVudEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FdmVudEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0V2ZW50RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJjb3ZlclwifSxbX2MoJ3YtdG9vbGJhci10aXRsZScse3N0YXRpY0NsYXNzOlwibWItMlwiLGF0dHJzOntcImFsaWduXCI6XCJjZW50ZXJcIixcImp1c3RpZnlcIjpcImNlbnRlclwifSxkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0JTQvtCx0LDQstC70LXQvdC40LUg0LzQtdGA0L7Qv9GA0LjRj9GC0LjRjycpfX0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcInR5cGVcIjpcInRleHRcIixcIm5hbWVcIjpcInRpdGxlXCIsXCJsYWJlbFwiOlwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIsXCJlcnJvci1tZXNzYWdlc1wiOl92bS5tZXNzYWdlcy50aXRsZX0sbW9kZWw6e3ZhbHVlOihfdm0uZXZlbnQudGl0bGUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uZXZlbnQsIFwidGl0bGVcIiwgJCR2KX0sZXhwcmVzc2lvbjpcImV2ZW50LnRpdGxlXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wibmFtZVwiOlwicGxhY2VcIixcImxhYmVsXCI6XCLQnNC10YHRgtC+INC/0YDQvtCy0LXQtNC10L3QuNGPXCIsXCJlcnJvci1tZXNzYWdlc1wiOl92bS5tZXNzYWdlcy5wbGFjZX0sbW9kZWw6e3ZhbHVlOihfdm0uZXZlbnQucGxhY2UpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0uZXZlbnQsIFwicGxhY2VcIiwgJCR2KX0sZXhwcmVzc2lvbjpcImV2ZW50LnBsYWNlXCJ9fSksX3ZtLl92KFwiIFwiKSxfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wibmFtZVwiOlwiZGF0ZVwiLFwibGFiZWxcIjpcItCU0LDRgtCwINC/0YDQvtCy0LXQtNC10L3QuNGPXCIsXCJlcnJvci1tZXNzYWdlc1wiOl92bS5tZXNzYWdlcy5kYXRlfSxtb2RlbDp7dmFsdWU6KF92bS5ldmVudC5kYXRlKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLmV2ZW50LCBcImRhdGVcIiwgJCR2KX0sZXhwcmVzc2lvbjpcImV2ZW50LmRhdGVcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJzYXZlLWJ0blwiLGF0dHJzOntcImNvbG9yXCI6XCJzdWNjZXNzXCIsXCJmYWJcIjpcIlwiLFwiZGlzYWJsZWRcIjohKF92bS5ldmVudC5wbGFjZSAmJiBfdm0uZXZlbnQudGl0bGUgJiYgX3ZtLmV2ZW50LmRhdGUpLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmNyZWF0ZX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V2ZW50RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2UxZDM0ZmJcIiwgY29udGVudCwgdHJ1ZSwge30pOyJdLCJzb3VyY2VSb290IjoiIn0=