(self.webpackChunk=self.webpackChunk||[]).push([[785],{518:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var s=n(4015),o=n.n(s),a=n(3645),r=n.n(a)()(o());r.push([e.id,".place.v-text-field>.v-input__control>.v-input__slot:after,.place.v-text-field>.v-input__control>.v-input__slot:before,.place .v-text-field__slot textarea{display:none!important}","",{version:3,sources:["webpack://./resources/js/pages/DistrictEdit.vue"],names:[],mappings:"AAuEA,2JAEA,sBACA",sourcesContent:['<template>\n    <v-container\n            class="cover">\n        <v-toolbar-title align="center" justify="center" class="mb-2"\n        v-text="\'Добавление района\'">\n        </v-toolbar-title>\n        <v-text-field\n            type="text"\n            name="title"\n            label="Название"\n            v-model="model.name"\n            :error-messages="messages.name"\n            >\n        </v-text-field>\n        <v-spacer/>\n        <v-btn class="save-btn"\n               color="success"\n               fab\n               @click="create"\n               :disabled="!(model.name)"\n               dark>\n            <v-icon>mdi-plus</v-icon>\n        </v-btn>\n    </v-container>\n</template>\n\n<script>\n    export default {\n        name: "PostAdd",\n        components: {\n        },\n        data: (vm) => {\n            let p =  vm.$route.query.parent_district_id;\n            return {\n                model: {\n                    id: vm.$route.params.id,\n                    region_id: vm.$route.params.region,\n                    parent_district_id: p ? p : null,\n                    level: vm.$route.query.level,\n                    name: \'\',\n                },\n                messages: {\n                    name: \'\',\n                }\n            }\n        },\n        mounted() {\n        },\n        methods: {\n            create() {\n                window.axios.post(\'/district\', this.model)\n                    .then((r) => {\n                        this.$router.go(-1);\n                    }).catch((e) => {\n                        console.log(e);\n                    if (e.response && e.response.status === 422) {\n                        let errors = e.response.data.errors\n                        Object.keys(this.messages).forEach((k)=> {\n                            this.messages[k] = errors[k]?.[0] || \'\';\n                        });\n                    }\n                })\n            },\n        }\n    }\n<\/script>\n\n<style>\n    .place .v-text-field__slot textarea {\n        display: none !important;\n    }\n    .place.v-text-field>.v-input__control>.v-input__slot:after ,\n    .place.v-text-field>.v-input__control>.v-input__slot:before{\n        display: none !important;\n    }\n</style>\n'],sourceRoot:""}]);const l=r},4785:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const s={name:"PostAdd",components:{},data:function(e){var t=e.$route.query.parent_district_id;return{model:{id:e.$route.params.id,region_id:e.$route.params.region,parent_district_id:t||null,level:e.$route.query.level,name:""},messages:{name:""}}},mounted:function(){},methods:{create:function(){var e=this;window.axios.post("/district",this.model).then((function(t){e.$router.go(-1)})).catch((function(t){if(console.log(t),t.response&&422===t.response.status){var n=t.response.data.errors;Object.keys(e.messages).forEach((function(t){var s;e.messages[t]=(null===(s=n[t])||void 0===s?void 0:s[0])||""}))}}))}}};n(6255);const o=(0,n(1900).Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"cover"},[n("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:e._s("Добавление района")}}),e._v(" "),n("v-text-field",{attrs:{type:"text",name:"title",label:"Название","error-messages":e.messages.name},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",disabled:!e.model.name,dark:""},on:{click:e.create}},[n("v-icon",[e._v("mdi-plus")])],1)],1)}),[],!1,null,null,null).exports},6255:(e,t,n)=>{var s=n(518);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,n(5346).Z)("29343f1d",s,!0,{})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRGlzdHJpY3RFZGl0LnZ1ZT8zOTdjIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvRGlzdHJpY3RFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRGlzdHJpY3RFZGl0LnZ1ZT8zZmFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdEVkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9EaXN0cmljdEVkaXQudnVlP2FhMTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Rpc3RyaWN0RWRpdC52dWU/YjA4ZSJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJkb21Qcm9wcyIsIl9zIiwiX3YiLCJtZXNzYWdlcyIsIm5hbWUiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCIkc2V0IiwiZXhwcmVzc2lvbiIsIm9uIiwiY3JlYXRlIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwibG9jYWxzIiwiZXhwb3J0cyIsImFkZCJdLCJtYXBwaW5ncyI6ImlKQUdJQSxFLE1BQTBCLEdBQTRCLEtBRTFEQSxFQUF3QkMsS0FBSyxDQUFDQyxFQUFPQyxHQUFJLHFMQUFzTCxHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQyxtREFBbUQsTUFBUSxHQUFHLFNBQVcsb0JBQW9CLGVBQWlCLENBQUMseXVFQUE0dkUsV0FBYSxNQUVsbkYsVywwRENvQkEsTUMzQnVOLEVEMkJ2TixDQUNFLEtBQUYsVUFDRSxXQUFGLEdBRUUsS0FBRixZQUNJLElBQUosb0NBQ0ksTUFBSixDQUNNLE1BQU4sQ0FDUSxHQUFSLG1CQUNRLFVBQVIsdUJBQ1EsbUJBQVIsUUFDUSxNQUFSLHFCQUNRLEtBQVIsSUFFTSxTQUFOLENBQ1EsS0FBUixNQUlFLFFBbkJGLGFBcUJFLFFBQUYsQ0FDSSxPQURKLFdBQ00sSUFBTixPQUNNLE9BQU4sbUNBQ0Esa0JBQ1EsRUFBUixrQkFGQSxPQUdBLFlBRVEsR0FEQSxRQUFSLE9BQ0EscUNBQ1UsSUFBVix5QkFDVSxPQUFWLHNDQUFZLElBQVosRUFDWSxFQUFaLG9FLFFFdkNBLFNBWGdCLEUsUUFBQSxHQUNkLEdDVFcsV0FBYSxJQUFJQyxFQUFJQyxLQUFTQyxFQUFHRixFQUFJRyxlQUFtQkMsRUFBR0osRUFBSUssTUFBTUQsSUFBSUYsRUFBRyxPQUFPRSxFQUFHLGNBQWMsQ0FBQ0UsWUFBWSxTQUFTLENBQUNGLEVBQUcsa0JBQWtCLENBQUNFLFlBQVksT0FBT0MsTUFBTSxDQUFDLE1BQVEsU0FBUyxRQUFVLFVBQVVDLFNBQVMsQ0FBQyxZQUFjUixFQUFJUyxHQUFHLHdCQUF3QlQsRUFBSVUsR0FBRyxLQUFLTixFQUFHLGVBQWUsQ0FBQ0csTUFBTSxDQUFDLEtBQU8sT0FBTyxLQUFPLFFBQVEsTUFBUSxXQUFXLGlCQUFpQlAsRUFBSVcsU0FBU0MsTUFBTUMsTUFBTSxDQUFDQyxNQUFPZCxFQUFJYSxNQUFVLEtBQUVFLFNBQVMsU0FBVUMsR0FBTWhCLEVBQUlpQixLQUFLakIsRUFBSWEsTUFBTyxPQUFRRyxJQUFNRSxXQUFXLGdCQUFnQmxCLEVBQUlVLEdBQUcsS0FBS04sRUFBRyxZQUFZSixFQUFJVSxHQUFHLEtBQUtOLEVBQUcsUUFBUSxDQUFDRSxZQUFZLFdBQVdDLE1BQU0sQ0FBQyxNQUFRLFVBQVUsSUFBTSxHQUFHLFVBQWFQLEVBQUlhLE1BQVUsS0FBRSxLQUFPLElBQUlNLEdBQUcsQ0FBQyxNQUFRbkIsRUFBSW9CLFNBQVMsQ0FBQ2hCLEVBQUcsU0FBUyxDQUFDSixFQUFJVSxHQUFHLGVBQWUsSUFBSSxLQUNqc0IsSURXcEIsRUFDQSxLQUNBLEtBQ0EsTSx3QkVaRixJQUFJVyxFQUFVLEVBQVEsS0FDbkJBLEVBQVFDLGFBQVlELEVBQVVBLEVBQVFFLFNBQ25CLGlCQUFaRixJQUFzQkEsRUFBVSxDQUFDLENBQUN2QixFQUFPQyxHQUFJc0IsRUFBUyxNQUM3REEsRUFBUUcsU0FBUTFCLEVBQU8yQixRQUFVSixFQUFRRyxTQUcvQkUsRUFESCxXQUNPLFdBQVlMLEdBQVMsRUFBTSIsImZpbGUiOiJqcy9jaHVua3MvNzg1N2ExZmMwOTQzYTFjMTYzNjk4NGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIsLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDpiZWZvcmUsLnBsYWNlIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWF7ZGlzcGxheTpub25lIWltcG9ydGFudH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvRGlzdHJpY3RFZGl0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUF1RUEsMkpBRUEsc0JBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8di1jb250YWluZXJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY292ZXJcXFwiPlxcbiAgICAgICAgPHYtdG9vbGJhci10aXRsZSBhbGlnbj1cXFwiY2VudGVyXFxcIiBqdXN0aWZ5PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJtYi0yXFxcIlxcbiAgICAgICAgdi10ZXh0PVxcXCIn0JTQvtCx0LDQstC70LXQvdC40LUg0YDQsNC50L7QvdCwJ1xcXCI+XFxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cXG4gICAgICAgIDx2LXRleHQtZmllbGRcXG4gICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgIG5hbWU9XFxcInRpdGxlXFxcIlxcbiAgICAgICAgICAgIGxhYmVsPVxcXCLQndCw0LfQstCw0L3QuNC1XFxcIlxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcIm1vZGVsLm5hbWVcXFwiXFxuICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2VzPVxcXCJtZXNzYWdlcy5uYW1lXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgIDwvdi10ZXh0LWZpZWxkPlxcbiAgICAgICAgPHYtc3BhY2VyLz5cXG4gICAgICAgIDx2LWJ0biBjbGFzcz1cXFwic2F2ZS1idG5cXFwiXFxuICAgICAgICAgICAgICAgY29sb3I9XFxcInN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgZmFiXFxuICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJjcmVhdGVcXFwiXFxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhKG1vZGVsLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgIGRhcms+XFxuICAgICAgICAgICAgPHYtaWNvbj5tZGktcGx1czwvdi1pY29uPlxcbiAgICAgICAgPC92LWJ0bj5cXG4gICAgPC92LWNvbnRhaW5lcj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6IFxcXCJQb3N0QWRkXFxcIixcXG4gICAgICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgIH0sXFxuICAgICAgICBkYXRhOiAodm0pID0+IHtcXG4gICAgICAgICAgICBsZXQgcCA9ICB2bS4kcm91dGUucXVlcnkucGFyZW50X2Rpc3RyaWN0X2lkO1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XFxuICAgICAgICAgICAgICAgICAgICBpZDogdm0uJHJvdXRlLnBhcmFtcy5pZCxcXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbl9pZDogdm0uJHJvdXRlLnBhcmFtcy5yZWdpb24sXFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfZGlzdHJpY3RfaWQ6IHAgPyBwIDogbnVsbCxcXG4gICAgICAgICAgICAgICAgICAgIGxldmVsOiB2bS4kcm91dGUucXVlcnkubGV2ZWwsXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWV0aG9kczoge1xcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcXG4gICAgICAgICAgICAgICAgd2luZG93LmF4aW9zLnBvc3QoJy9kaXN0cmljdCcsIHRoaXMubW9kZWwpXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5nbygtMSk7XFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiAgICAucGxhY2UgLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXFxuICAgIC5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICB9XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lclxuICAgICAgICAgICAgY2xhc3M9XCJjb3ZlclwiPlxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXG4gICAgICAgIHYtdGV4dD1cIifQlNC+0LHQsNCy0LvQtdC90LjQtSDRgNCw0LnQvtC90LAnXCI+XG4gICAgICAgIDwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgbGFiZWw9XCLQndCw0LfQstCw0L3QuNC1XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbC5uYW1lXCJcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLm5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICA8L3YtdGV4dC1maWVsZD5cbiAgICAgICAgPHYtc3BhY2VyLz5cbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxuICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICAgQGNsaWNrPVwiY3JlYXRlXCJcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiEobW9kZWwubmFtZSlcIlxuICAgICAgICAgICAgICAgZGFyaz5cbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cbiAgICAgICAgPC92LWJ0bj5cbiAgICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IFwiUG9zdEFkZFwiLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICh2bSkgPT4ge1xuICAgICAgICAgICAgbGV0IHAgPSAgdm0uJHJvdXRlLnF1ZXJ5LnBhcmVudF9kaXN0cmljdF9pZDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZtLiRyb3V0ZS5wYXJhbXMuaWQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbl9pZDogdm0uJHJvdXRlLnBhcmFtcy5yZWdpb24sXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudF9kaXN0cmljdF9pZDogcCA/IHAgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBsZXZlbDogdm0uJHJvdXRlLnF1ZXJ5LmxldmVsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY3JlYXRlKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvZGlzdHJpY3QnLCB0aGlzLm1vZGVsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JzID0gZS5yZXNwb25zZS5kYXRhLmVycm9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1trXSA9IGVycm9yc1trXT8uWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLnBsYWNlIC52LXRleHQtZmllbGRfX3Nsb3QgdGV4dGFyZWEge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YWZ0ZXIgLFxuICAgIC5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXN0cmljdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlzdHJpY3RFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGlzdHJpY3RFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDc1YTExYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EaXN0cmljdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EaXN0cmljdEVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Rpc3RyaWN0RWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ3YtY29udGFpbmVyJyx7c3RhdGljQ2xhc3M6XCJjb3ZlclwifSxbX2MoJ3YtdG9vbGJhci10aXRsZScse3N0YXRpY0NsYXNzOlwibWItMlwiLGF0dHJzOntcImFsaWduXCI6XCJjZW50ZXJcIixcImp1c3RpZnlcIjpcImNlbnRlclwifSxkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcygn0JTQvtCx0LDQstC70LXQvdC40LUg0YDQsNC50L7QvdCwJyl9fSksX3ZtLl92KFwiIFwiKSxfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1widHlwZVwiOlwidGV4dFwiLFwibmFtZVwiOlwidGl0bGVcIixcImxhYmVsXCI6XCLQndCw0LfQstCw0L3QuNC1XCIsXCJlcnJvci1tZXNzYWdlc1wiOl92bS5tZXNzYWdlcy5uYW1lfSxtb2RlbDp7dmFsdWU6KF92bS5tb2RlbC5uYW1lKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLm1vZGVsLCBcIm5hbWVcIiwgJCR2KX0sZXhwcmVzc2lvbjpcIm1vZGVsLm5hbWVcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXNwYWNlcicpLF92bS5fdihcIiBcIiksX2MoJ3YtYnRuJyx7c3RhdGljQ2xhc3M6XCJzYXZlLWJ0blwiLGF0dHJzOntcImNvbG9yXCI6XCJzdWNjZXNzXCIsXCJmYWJcIjpcIlwiLFwiZGlzYWJsZWRcIjohKF92bS5tb2RlbC5uYW1lKSxcImRhcmtcIjpcIlwifSxvbjp7XCJjbGlja1wiOl92bS5jcmVhdGV9fSxbX2MoJ3YtaWNvbicsW192bS5fdihcIm1kaS1wbHVzXCIpXSldLDEpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXN0cmljdEVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjI5MzQzZjFkXCIsIGNvbnRlbnQsIHRydWUsIHt9KTsiXSwic291cmNlUm9vdCI6IiJ9