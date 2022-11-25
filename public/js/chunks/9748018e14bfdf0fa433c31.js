(self.webpackChunk=self.webpackChunk||[]).push([[974],{330:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(4015),s=n.n(r),a=n(3645),o=n.n(a)()(s());o.push([e.id,".place.v-text-field>.v-input__control>.v-input__slot:after,.place.v-text-field>.v-input__control>.v-input__slot:before,.place .v-text-field__slot textarea{display:none!important}","",{version:3,sources:["webpack://./resources/js/pages/TypeEdit.vue"],names:[],mappings:"AAuEA,2JAEA,sBACA",sourcesContent:['<template>\r\n    <v-container\r\n            class="cover">\r\n        <v-toolbar-title align="center" justify="center" class="mb-2"\r\n        v-text="\'Добавление типа заявки\'">\r\n        </v-toolbar-title>\r\n        <v-text-field\r\n            type="text"\r\n            name="title"\r\n            label="Название"\r\n            v-model="model.name"\r\n            :error-messages="messages.name"\r\n            >\r\n        </v-text-field>\r\n        <v-spacer/>\r\n        <v-btn class="save-btn"\r\n               color="success"\r\n               fab\r\n               @click="create"\r\n               :disabled="!(model.name)"\r\n               dark>\r\n            <v-icon>mdi-plus</v-icon>\r\n        </v-btn>\r\n    </v-container>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        name: "PostAdd",\r\n        components: {\r\n        },\r\n        data: (vm) => {\r\n            return {\r\n                model: {\r\n                    id: vm.$route.params.id,\r\n                    name: \'\',\r\n                },\r\n                messages: {\r\n                    name: \'\',\r\n                }\r\n            }\r\n        },\r\n        mounted() {\r\n        },\r\n        methods: {\r\n            create() {\r\n                window.axios.post(\'/type\', this.model)\r\n                    .then((r) => {\r\n                        this.$store.state.types.push({\r\n                            value: r.data.data.id,\r\n                            text: r.data.data.name\r\n                        })\r\n                        this.$router.push({name: "types"});\r\n                    }).catch((e) => {\r\n                        console.log(e);\r\n                    if (e.response && e.response.status === 422) {\r\n                        let errors = e.response.data.errors\r\n                        Object.keys(this.messages).forEach((k)=> {\r\n                            this.messages[k] = errors[k]?.[0] || \'\';\r\n                        });\r\n                    }\r\n                })\r\n            },\r\n        }\r\n    }\r\n<\/script>\r\n\r\n<style>\r\n    .place .v-text-field__slot textarea {\r\n        display: none !important;\r\n    }\r\n    .place.v-text-field>.v-input__control>.v-input__slot:after ,\r\n    .place.v-text-field>.v-input__control>.v-input__slot:before{\r\n        display: none !important;\r\n    }\r\n</style>'],sourceRoot:""}]);const l=o},7974:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});const r={name:"PostAdd",components:{},data:function(e){return{model:{id:e.$route.params.id,name:""},messages:{name:""}}},mounted:function(){},methods:{create:function(){var e=this;window.axios.post("/type",this.model).then((function(t){e.$store.state.types.push({value:t.data.data.id,text:t.data.data.name}),e.$router.push({name:"types"})})).catch((function(t){if(console.log(t),t.response&&422===t.response.status){var n=t.response.data.errors;Object.keys(e.messages).forEach((function(t){var r;e.messages[t]=(null===(r=n[t])||void 0===r?void 0:r[0])||""}))}}))}}};n(8700);const s=(0,n(1900).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"cover"},[n("v-toolbar-title",{staticClass:"mb-2",attrs:{align:"center",justify:"center"},domProps:{textContent:e._s("Добавление типа заявки")}}),e._v(" "),n("v-text-field",{attrs:{type:"text",name:"title",label:"Название","error-messages":e.messages.name},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"save-btn",attrs:{color:"success",fab:"",disabled:!e.model.name,dark:""},on:{click:e.create}},[n("v-icon",[e._v("mdi-plus")])],1)],1)}),[],!1,null,null,null).exports},8700:(e,t,n)=>{var r=n(330);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5346).Z)("2432e41d",r,!0,{})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvVHlwZUVkaXQudnVlPzJhZTMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9wYWdlcy9UeXBlRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1R5cGVFZGl0LnZ1ZT9hMGRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9UeXBlRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL1R5cGVFZGl0LnZ1ZT9kOTZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9UeXBlRWRpdC52dWU/NzI1MiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJkb21Qcm9wcyIsIl9zIiwiX3YiLCJtZXNzYWdlcyIsIm5hbWUiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCIkc2V0IiwiZXhwcmVzc2lvbiIsIm9uIiwiY3JlYXRlIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwibG9jYWxzIiwiZXhwb3J0cyIsImFkZCJdLCJtYXBwaW5ncyI6ImlKQUdJQSxFLE1BQTBCLEdBQTRCLEtBRTFEQSxFQUF3QkMsS0FBSyxDQUFDQyxFQUFPQyxHQUFJLHFMQUFzTCxHQUFHLENBQUMsUUFBVSxFQUFFLFFBQVUsQ0FBQywrQ0FBK0MsTUFBUSxHQUFHLFNBQVcsb0JBQW9CLGVBQWlCLENBQUMsNDJFQUFpNEUsV0FBYSxNQUVudkYsVywwRENvQkEsTUMzQm1OLEVEMkJuTixDQUNFLEtBQUYsVUFDRSxXQUFGLEdBRUUsS0FBRixZQUNJLE1BQUosQ0FDTSxNQUFOLENBQ1EsR0FBUixtQkFDUSxLQUFSLElBRU0sU0FBTixDQUNRLEtBQVIsTUFJRSxRQWZGLGFBaUJFLFFBQUYsQ0FDSSxPQURKLFdBQ00sSUFBTixPQUNNLE9BQU4sK0JBQ0Esa0JBQ1EsRUFBUix5QkFDVSxNQUFWLGVBQ1UsS0FBVixtQkFFUSxFQUFSLGNBQVUsS0FBVixhQU5BLE9BT0EsWUFFUSxHQURBLFFBQVIsT0FDQSxxQ0FDVSxJQUFWLHlCQUNVLE9BQVYsc0NBQVksSUFBWixFQUNZLEVBQVosb0UsUUV2Q0EsU0FYZ0IsRSxRQUFBLEdBQ2QsR0NUVyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsY0FBYyxDQUFDRSxZQUFZLFNBQVMsQ0FBQ0YsRUFBRyxrQkFBa0IsQ0FBQ0UsWUFBWSxPQUFPQyxNQUFNLENBQUMsTUFBUSxTQUFTLFFBQVUsVUFBVUMsU0FBUyxDQUFDLFlBQWNSLEVBQUlTLEdBQUcsNkJBQTZCVCxFQUFJVSxHQUFHLEtBQUtOLEVBQUcsZUFBZSxDQUFDRyxNQUFNLENBQUMsS0FBTyxPQUFPLEtBQU8sUUFBUSxNQUFRLFdBQVcsaUJBQWlCUCxFQUFJVyxTQUFTQyxNQUFNQyxNQUFNLENBQUNDLE1BQU9kLEVBQUlhLE1BQVUsS0FBRUUsU0FBUyxTQUFVQyxHQUFNaEIsRUFBSWlCLEtBQUtqQixFQUFJYSxNQUFPLE9BQVFHLElBQU1FLFdBQVcsZ0JBQWdCbEIsRUFBSVUsR0FBRyxLQUFLTixFQUFHLFlBQVlKLEVBQUlVLEdBQUcsS0FBS04sRUFBRyxRQUFRLENBQUNFLFlBQVksV0FBV0MsTUFBTSxDQUFDLE1BQVEsVUFBVSxJQUFNLEdBQUcsVUFBYVAsRUFBSWEsTUFBVSxLQUFFLEtBQU8sSUFBSU0sR0FBRyxDQUFDLE1BQVFuQixFQUFJb0IsU0FBUyxDQUFDaEIsRUFBRyxTQUFTLENBQUNKLEVBQUlVLEdBQUcsZUFBZSxJQUFJLEtBQ3RzQixJRFdwQixFQUNBLEtBQ0EsS0FDQSxNLHdCRVpGLElBQUlXLEVBQVUsRUFBUSxLQUNuQkEsRUFBUUMsYUFBWUQsRUFBVUEsRUFBUUUsU0FDbkIsaUJBQVpGLElBQXNCQSxFQUFVLENBQUMsQ0FBQ3ZCLEVBQU9DLEdBQUlzQixFQUFTLE1BQzdEQSxFQUFRRyxTQUFRMUIsRUFBTzJCLFFBQVVKLEVBQVFHLFNBRy9CRSxFQURILFdBQ08sV0FBWUwsR0FBUyxFQUFNIiwiZmlsZSI6ImpzL2NodW5rcy85NzQ4MDE4ZTE0YmZkZjBmYTQzM2MzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciwucGxhY2Uudi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZSwucGxhY2UgLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9UeXBlRWRpdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBdUVBLDJKQUVBLHNCQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHYtY29udGFpbmVyXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImNvdmVyXFxcIj5cXHJcXG4gICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XFxcImNlbnRlclxcXCIganVzdGlmeT1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwibWItMlxcXCJcXHJcXG4gICAgICAgIHYtdGV4dD1cXFwiJ9CU0L7QsdCw0LLQu9C10L3QuNC1INGC0LjQv9CwINC30LDRj9Cy0LrQuCdcXFwiPlxcclxcbiAgICAgICAgPC92LXRvb2xiYXItdGl0bGU+XFxyXFxuICAgICAgICA8di10ZXh0LWZpZWxkXFxyXFxuICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXHJcXG4gICAgICAgICAgICBuYW1lPVxcXCJ0aXRsZVxcXCJcXHJcXG4gICAgICAgICAgICBsYWJlbD1cXFwi0J3QsNC30LLQsNC90LjQtVxcXCJcXHJcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJtb2RlbC5uYW1lXFxcIlxcclxcbiAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cXFwibWVzc2FnZXMubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICA+XFxyXFxuICAgICAgICA8L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgICAgIDx2LXNwYWNlci8+XFxyXFxuICAgICAgICA8di1idG4gY2xhc3M9XFxcInNhdmUtYnRuXFxcIlxcclxcbiAgICAgICAgICAgICAgIGNvbG9yPVxcXCJzdWNjZXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgIGZhYlxcclxcbiAgICAgICAgICAgICAgIEBjbGljaz1cXFwiY3JlYXRlXFxcIlxcclxcbiAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIShtb2RlbC5uYW1lKVxcXCJcXHJcXG4gICAgICAgICAgICAgICBkYXJrPlxcclxcbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cXHJcXG4gICAgICAgIDwvdi1idG4+XFxyXFxuICAgIDwvdi1jb250YWluZXI+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBuYW1lOiBcXFwiUG9zdEFkZFxcXCIsXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGlkOiB2bS4kcm91dGUucGFyYW1zLmlkLFxcclxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtb3VudGVkKCkge1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIG1ldGhvZHM6IHtcXHJcXG4gICAgICAgICAgICBjcmVhdGUoKSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdHlwZScsIHRoaXMubW9kZWwpXFxyXFxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLnN0YXRlLnR5cGVzLnB1c2goe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogci5kYXRhLmRhdGEuaWQsXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHIuZGF0YS5kYXRhLm5hbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcXFwidHlwZXNcXFwifSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UgJiYgZS5yZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNba10gPSBlcnJvcnNba10/LlswXSB8fCAnJztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICB9LFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgICAucGxhY2UgLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXFxyXFxuICAgIC5wbGFjZS52LXRleHQtZmllbGQ+LnYtaW5wdXRfX2NvbnRyb2w+LnYtaW5wdXRfX3Nsb3Q6YmVmb3Jle1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiPHRlbXBsYXRlPlxyXG4gICAgPHYtY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY292ZXJcIj5cclxuICAgICAgICA8di10b29sYmFyLXRpdGxlIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiIGNsYXNzPVwibWItMlwiXHJcbiAgICAgICAgdi10ZXh0PVwiJ9CU0L7QsdCw0LLQu9C10L3QuNC1INGC0LjQv9CwINC30LDRj9Cy0LrQuCdcIj5cclxuICAgICAgICA8L3YtdG9vbGJhci10aXRsZT5cclxuICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLQndCw0LfQstCw0L3QuNC1XCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsLm5hbWVcIlxyXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5uYW1lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgIDwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgIDx2LXNwYWNlci8+XHJcbiAgICAgICAgPHYtYnRuIGNsYXNzPVwic2F2ZS1idG5cIlxyXG4gICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICBmYWJcclxuICAgICAgICAgICAgICAgQGNsaWNrPVwiY3JlYXRlXCJcclxuICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIShtb2RlbC5uYW1lKVwiXHJcbiAgICAgICAgICAgICAgIGRhcms+XHJcbiAgICAgICAgICAgIDx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj5cclxuICAgICAgICA8L3YtYnRuPlxyXG4gICAgPC92LWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJQb3N0QWRkXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB2bS4kcm91dGUucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5heGlvcy5wb3N0KCcvdHlwZScsIHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudHlwZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogci5kYXRhLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByLmRhdGEuZGF0YS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiBcInR5cGVzXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpLmZvckVhY2goKGspPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1trXSA9IGVycm9yc1trXT8uWzBdIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAucGxhY2UgLnYtdGV4dC1maWVsZF9fc2xvdCB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBsYWNlLnYtdGV4dC1maWVsZD4udi1pbnB1dF9fY29udHJvbD4udi1pbnB1dF9fc2xvdDphZnRlciAsXHJcbiAgICAucGxhY2Uudi10ZXh0LWZpZWxkPi52LWlucHV0X19jb250cm9sPi52LWlucHV0X19zbG90OmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1R5cGVFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1R5cGVFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVHlwZUVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ4MmJjYWM0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1R5cGVFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVHlwZUVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1R5cGVFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygndi1jb250YWluZXInLHtzdGF0aWNDbGFzczpcImNvdmVyXCJ9LFtfYygndi10b29sYmFyLXRpdGxlJyx7c3RhdGljQ2xhc3M6XCJtYi0yXCIsYXR0cnM6e1wiYWxpZ25cIjpcImNlbnRlclwiLFwianVzdGlmeVwiOlwiY2VudGVyXCJ9LGRvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKCfQlNC+0LHQsNCy0LvQtdC90LjQtSDRgtC40L/QsCDQt9Cw0Y/QstC60LgnKX19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJ0eXBlXCI6XCJ0ZXh0XCIsXCJuYW1lXCI6XCJ0aXRsZVwiLFwibGFiZWxcIjpcItCd0LDQt9Cy0LDQvdC40LVcIixcImVycm9yLW1lc3NhZ2VzXCI6X3ZtLm1lc3NhZ2VzLm5hbWV9LG1vZGVsOnt2YWx1ZTooX3ZtLm1vZGVsLm5hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0ubW9kZWwsIFwibmFtZVwiLCAkJHYpfSxleHByZXNzaW9uOlwibW9kZWwubmFtZVwifX0pLF92bS5fdihcIiBcIiksX2MoJ3Ytc3BhY2VyJyksX3ZtLl92KFwiIFwiKSxfYygndi1idG4nLHtzdGF0aWNDbGFzczpcInNhdmUtYnRuXCIsYXR0cnM6e1wiY29sb3JcIjpcInN1Y2Nlc3NcIixcImZhYlwiOlwiXCIsXCJkaXNhYmxlZFwiOiEoX3ZtLm1vZGVsLm5hbWUpLFwiZGFya1wiOlwiXCJ9LG9uOntcImNsaWNrXCI6X3ZtLmNyZWF0ZX19LFtfYygndi1pY29uJyxbX3ZtLl92KFwibWRpLXBsdXNcIildKV0sMSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1R5cGVFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyNDMyZTQxZFwiLCBjb250ZW50LCB0cnVlLCB7fSk7Il0sInNvdXJjZVJvb3QiOiIifQ==