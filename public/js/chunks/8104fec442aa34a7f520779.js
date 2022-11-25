(self.webpackChunk=self.webpackChunk||[]).push([[810],{9810:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});function a(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?a(Object(t),!0).forEach((function(s){n(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function n(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const o={name:"Registration",data:function(e){return{user:{},messages:{email:"",name:"",second_name:"",last_name:"",password:"",password_confirmation:""},show:!1}},beforeMount:function(){this.user=r(r({},this.$store.state.auth.user),{},{password:"",password_confirmation:""}),this.user.email&&this.$store.dispatch("auth/attempt",{})},computed:{isFormValid:function(){return this.user.email!==this.$store.state.auth.user.email||this.user.second_name!==this.$store.state.auth.user.second_name||this.user.name!==this.$store.state.auth.user.name||this.user.last_name!==this.$store.state.auth.user.last_name||this.user.password&&this.user.password_confirmation}},methods:{update:function(){var e=this;this.$store.dispatch("auth/updateProfile",this.user).then((function(s){console.log(s),Object.keys(e.messages).forEach((function(s){e.messages[s]=""})),e.user=r(r({},s.data.data),{},{password:"",password_confirmation:""}),e.$root.$children[0].snackbarText="Данные профиля успешно обновлены",e.$root.$children[0].snackbar=!0})).catch((function(s){var t,a;if(console.log(s),null!=s&&null!==(t=s.response)&&void 0!==t&&null!==(a=t.data)&&void 0!==a&&a.message&&(e.$root.$children[0].snackbarText=s.response.data.message,e.$root.$children[0].snackbar=!0),s.response&&422===s.response.status){var r=s.response.data.errors;Object.keys(e.messages).forEach((function(s){var t;e.messages[s]=(null===(t=r[s])||void 0===t?void 0:t[0])||""}))}}))}}};const i=(0,t(1900).Z)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[t("v-toolbar-title",{staticClass:"pa-3",attrs:{align:"center",justify:"center"}},[e._v("Редактирование профиля")]),e._v(" "),t("v-form",{ref:"form",nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.signUp.apply(null,arguments)}}},[t("v-text-field",{attrs:{disabled:!0,"error-messages":e.messages.email,label:"Ваш E-mail",name:"email",type:"email"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.messages.second_name,label:"Фамилия",name:"second_name",type:"text"},model:{value:e.user.second_name,callback:function(s){e.$set(e.user,"second_name",s)},expression:"user.second_name"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.messages.name,label:"Имя",name:"name",type:"text"},model:{value:e.user.name,callback:function(s){e.$set(e.user,"name",s)},expression:"user.name"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.messages.last_name,label:"Отчество",name:"last_name",type:"text"},model:{value:e.user.last_name,callback:function(s){e.$set(e.user,"last_name",s)},expression:"user.last_name"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.messages.password,"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",label:"Пароль",name:"password"},on:{"click:append":function(s){e.show=!e.show}},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}}),e._v(" "),t("v-text-field",{attrs:{"error-messages":e.messages.password_confirmation,"append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",label:"Подтвердите пароль",name:"password"},on:{"click:append":function(s){e.show=!e.show}},model:{value:e.user.password_confirmation,callback:function(s){e.$set(e.user,"password_confirmation",s)},expression:"user.password_confirmation"}}),e._v(" "),t("v-card",{staticClass:"d-flex justify-center align-center mb-6",attrs:{flat:"",height:"auto",tile:""}},[t("v-btn",{attrs:{color:"primary",disabled:!e.isFormValid},on:{click:e.update}},[e._v("\n                        Сохранить\n                    ")])],1)],1)],1)],1)],1)}),[],!1,null,"20c7cf61",null).exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL1Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qcm9maWxlLnZ1ZT8zMDkzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvUHJvZmlsZS52dWU/NTZlYyJdLCJuYW1lcyI6WyJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwiX3YiLCJyZWYiLCJuYXRpdmVPbiIsIiRldmVudCIsInR5cGUiLCJpbmRleE9mIiwiX2siLCJrZXlDb2RlIiwia2V5Iiwic2lnblVwIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJtZXNzYWdlcyIsImVtYWlsIiwibW9kZWwiLCJ2YWx1ZSIsInVzZXIiLCJjYWxsYmFjayIsIiQkdiIsIiRzZXQiLCJleHByZXNzaW9uIiwic2Vjb25kX25hbWUiLCJuYW1lIiwibGFzdF9uYW1lIiwicGFzc3dvcmQiLCJzaG93Iiwib24iLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJpc0Zvcm1WYWxpZCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ind5QkF5RUEsTUN6RWtOLEVEeUVsTixDQUNFLEtBQUYsZUFDRSxLQUFGLFlBQ0ksTUFBSixDQUNNLEtBQU4sR0FDTSxTQUFOLENBQ1EsTUFBUixHQUNRLEtBQVIsR0FDUSxZQUFSLEdBQ1EsVUFBUixHQUNRLFNBQVIsR0FDUSxzQkFBUixJQUVNLE1BQU4sSUFHRSxZQWhCRixXQWlCSSxLQUFKLDZDQUNNLFNBQU4sR0FDTSxzQkFBTixLQUVBLGlCQUNNLEtBQU4sb0NBR0UsU0FBRixDQUNJLFlBQUosV0FDTSxPQUFOLHFEQUNBLGlFQUNBLG1EQUNBLDZEQUNBLHNEQUdFLFFBQUYsQ0FDSSxPQURKLFdBQ00sSUFBTixPQUNNLEtBQU4sZ0RBQ0Esa0JBQ1Es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U0FBRUMsU0FBUyxTQUFVQyxHQUFNMUIsRUFBSTJCLEtBQUszQixFQUFJd0IsS0FBTSxXQUFZRSxJQUFNRSxXQUFXLG1CQUFtQjVCLEVBQUlRLEdBQUcsS0FBS0osRUFBRyxlQUFlLENBQUNHLE1BQU0sQ0FBQyxpQkFBaUJQLEVBQUlvQixTQUFTZSxzQkFBc0IsY0FBY25DLEVBQUlpQyxLQUFPLFVBQVksY0FBYyxLQUFPakMsRUFBSWlDLEtBQU8sT0FBUyxXQUFXLE1BQVEscUJBQXFCLEtBQU8sWUFBWUMsR0FBRyxDQUFDLGVBQWUsU0FBU3ZCLEdBQVFYLEVBQUlpQyxNQUFRakMsRUFBSWlDLE9BQU9YLE1BQU0sQ0FBQ0MsTUFBT3ZCLEVBQUl3QixLQUEwQixzQkFBRUMsU0FBUyxTQUFVQyxHQUFNMUIsRUFBSTJCLEtBQUszQixFQUFJd0IsS0FBTSx3QkFBeUJFLElBQU1FLFdBQVcsZ0NBQWdDNUIsRUFBSVEsR0FBRyxLQUFLSixFQUFHLFNBQVMsQ0FBQ0UsWUFBWSwwQ0FBMENDLE1BQU0sQ0FBQyxLQUFPLEdBQUcsT0FBUyxPQUFPLEtBQU8sS0FBSyxDQUFDSCxFQUFHLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLE1BQVEsVUFBVSxVQUFZUCxFQUFJb0MsYUFBYUYsR0FBRyxDQUFDLE1BQVFsQyxFQUFJcUMsU0FBUyxDQUFDckMsRUFBSVEsR0FBRyxnRUFBZ0UsSUFBSSxJQUFJLElBQUksSUFBSSxLQUMxcUYsSURVcEIsRUFDQSxLQUNBLFdBQ0EsTSIsImZpbGUiOiJqcy9jaHVua3MvODEwNGZlYzQ0MmFhMzRhN2Y1MjA3NzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblxyXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwiZmlsbC1oZWlnaHRcIiBmbHVpZD5cclxuICAgICAgICA8di1yb3cgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjhcIiBtZD1cIjRcIj5cclxuICAgICAgICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGUgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3M9XCJwYS0zXCI+0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQv9GA0L7RhNC40LvRjzwvdi10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHYtZm9ybSAgQGtleXVwLm5hdGl2ZS5lbnRlcj1cInNpZ25VcFwiIHJlZj1cImZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCS0LDRiCBFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5zZWNvbmRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5zZWNvbmRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCk0LDQvNC40LvQuNGPXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWNvbmRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQmNC80Y9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIubGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlcz1cIm1lc3NhZ2VzLmxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cItCe0YLRh9C10YHRgtCy0L5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXBwZW5kLWljb249XCJzaG93ID8gJ21kaS1leWUnIDogJ21kaS1leWUtb2ZmJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s6YXBwZW5kPVwic2hvdyA9ICFzaG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0eXBlPVwic2hvdyA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLQn9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZXM9XCJtZXNzYWdlcy5wYXNzd29yZF9jb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFwcGVuZC1pY29uPVwic2hvdyA/ICdtZGktZXllJyA6ICdtZGktZXllLW9mZidcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrOmFwcGVuZD1cInNob3cgPSAhc2hvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dHlwZT1cInNob3cgPyAndGV4dCcgOiAncGFzc3dvcmQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi0J/QvtC00YLQstC10YDQtNC40YLQtSDQv9Cw0YDQvtC70YxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBtYi02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cInVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaXNGb3JtVmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC92LWZvcm0+XHJcbiAgICAgICAgICAgIDwvdi1jb2w+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgIDwvdi1jb250YWluZXI+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiUmVnaXN0cmF0aW9uXCIsXHJcbiAgICAgICAgZGF0YTogKHZtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgICAgICAgdXNlcjoge30sXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRfbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9uYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJlZm9yZU1vdW50KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0geyAuLi50aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvYXR0ZW1wdCcsIHt9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGlzRm9ybVZhbGlkIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5lbWFpbCAhPT0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy51c2VyLnNlY29uZF9uYW1lICE9PSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIuc2Vjb25kX25hbWVcclxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLnVzZXIubmFtZSAhPT0gdGhpcy4kc3RvcmUuc3RhdGUuYXV0aC51c2VyLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLnVzZXIubGFzdF9uYW1lICE9PSB0aGlzLiRzdG9yZS5zdGF0ZS5hdXRoLnVzZXIubGFzdF9uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy51c2VyLnBhc3N3b3JkICYmIHRoaXMudXNlci5wYXNzd29yZF9jb25maXJtYXRpb25cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHMgOntcclxuICAgICAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvdXBkYXRlUHJvZmlsZScsIHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXNzYWdlcykuZm9yRWFjaCgoayk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uci5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgPSAn0JTQsNC90L3Ri9C1INC/0YDQvtGE0LjQu9GPINGD0YHQv9C10YjQvdC+INC+0LHQvdC+0LLQu9C10L3Riyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGNoaWxkcmVuWzBdLnNuYWNrYmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGU/LnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhclRleHQgID0gZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRjaGlsZHJlblswXS5zbmFja2JhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlICYmIGUucmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlcnJvcnMgPSBlLnJlc3BvbnNlLmRhdGEuZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1lc3NhZ2VzKS5mb3JFYWNoKChrKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2tdID0gZXJyb3JzW2tdPy5bMF0gfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBjN2NmNjEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMGM3Y2Y2MVwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCd2LWNvbnRhaW5lcicse3N0YXRpY0NsYXNzOlwiZmlsbC1oZWlnaHRcIixhdHRyczp7XCJmbHVpZFwiOlwiXCJ9fSxbX2MoJ3Ytcm93Jyx7YXR0cnM6e1wiYWxpZ25cIjpcImNlbnRlclwiLFwianVzdGlmeVwiOlwiY2VudGVyXCJ9fSxbX2MoJ3YtY29sJyx7YXR0cnM6e1wiY29sc1wiOlwiMTJcIixcInNtXCI6XCI4XCIsXCJtZFwiOlwiNFwifX0sW19jKCd2LXRvb2xiYXItdGl0bGUnLHtzdGF0aWNDbGFzczpcInBhLTNcIixhdHRyczp7XCJhbGlnblwiOlwiY2VudGVyXCIsXCJqdXN0aWZ5XCI6XCJjZW50ZXJcIn19LFtfdm0uX3YoXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0YDQvtGE0LjQu9GPXCIpXSksX3ZtLl92KFwiIFwiKSxfYygndi1mb3JtJyx7cmVmOlwiZm9ybVwiLG5hdGl2ZU9uOntcImtleXVwXCI6ZnVuY3Rpb24oJGV2ZW50KXtpZighJGV2ZW50LnR5cGUuaW5kZXhPZigna2V5JykmJl92bS5faygkZXZlbnQua2V5Q29kZSxcImVudGVyXCIsMTMsJGV2ZW50LmtleSxcIkVudGVyXCIpKXsgcmV0dXJuIG51bGw7IH1yZXR1cm4gX3ZtLnNpZ25VcC5hcHBseShudWxsLCBhcmd1bWVudHMpfX19LFtfYygndi10ZXh0LWZpZWxkJyx7YXR0cnM6e1wiZGlzYWJsZWRcIjp0cnVlLFwiZXJyb3ItbWVzc2FnZXNcIjpfdm0ubWVzc2FnZXMuZW1haWwsXCJsYWJlbFwiOlwi0JLQsNGIIEUtbWFpbFwiLFwibmFtZVwiOlwiZW1haWxcIixcInR5cGVcIjpcImVtYWlsXCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnVzZXIuZW1haWwpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkJHYpfSxleHByZXNzaW9uOlwidXNlci5lbWFpbFwifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcImVycm9yLW1lc3NhZ2VzXCI6X3ZtLm1lc3NhZ2VzLnNlY29uZF9uYW1lLFwibGFiZWxcIjpcItCk0LDQvNC40LvQuNGPXCIsXCJuYW1lXCI6XCJzZWNvbmRfbmFtZVwiLFwidHlwZVwiOlwidGV4dFwifSxtb2RlbDp7dmFsdWU6KF92bS51c2VyLnNlY29uZF9uYW1lKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnVzZXIsIFwic2Vjb25kX25hbWVcIiwgJCR2KX0sZXhwcmVzc2lvbjpcInVzZXIuc2Vjb25kX25hbWVcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJlcnJvci1tZXNzYWdlc1wiOl92bS5tZXNzYWdlcy5uYW1lLFwibGFiZWxcIjpcItCY0LzRj1wiLFwibmFtZVwiOlwibmFtZVwiLFwidHlwZVwiOlwidGV4dFwifSxtb2RlbDp7dmFsdWU6KF92bS51c2VyLm5hbWUpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0udXNlciwgXCJuYW1lXCIsICQkdil9LGV4cHJlc3Npb246XCJ1c2VyLm5hbWVcIn19KSxfdm0uX3YoXCIgXCIpLF9jKCd2LXRleHQtZmllbGQnLHthdHRyczp7XCJlcnJvci1tZXNzYWdlc1wiOl92bS5tZXNzYWdlcy5sYXN0X25hbWUsXCJsYWJlbFwiOlwi0J7RgtGH0LXRgdGC0LLQvlwiLFwibmFtZVwiOlwibGFzdF9uYW1lXCIsXCJ0eXBlXCI6XCJ0ZXh0XCJ9LG1vZGVsOnt2YWx1ZTooX3ZtLnVzZXIubGFzdF9uYW1lKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnVzZXIsIFwibGFzdF9uYW1lXCIsICQkdil9LGV4cHJlc3Npb246XCJ1c2VyLmxhc3RfbmFtZVwifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcImVycm9yLW1lc3NhZ2VzXCI6X3ZtLm1lc3NhZ2VzLnBhc3N3b3JkLFwiYXBwZW5kLWljb25cIjpfdm0uc2hvdyA/ICdtZGktZXllJyA6ICdtZGktZXllLW9mZicsXCJ0eXBlXCI6X3ZtLnNob3cgPyAndGV4dCcgOiAncGFzc3dvcmQnLFwibGFiZWxcIjpcItCf0LDRgNC+0LvRjFwiLFwibmFtZVwiOlwicGFzc3dvcmRcIn0sb246e1wiY2xpY2s6YXBwZW5kXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uc2hvdyA9ICFfdm0uc2hvd319LG1vZGVsOnt2YWx1ZTooX3ZtLnVzZXIucGFzc3dvcmQpLGNhbGxiYWNrOmZ1bmN0aW9uICgkJHYpIHtfdm0uJHNldChfdm0udXNlciwgXCJwYXNzd29yZFwiLCAkJHYpfSxleHByZXNzaW9uOlwidXNlci5wYXNzd29yZFwifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtdGV4dC1maWVsZCcse2F0dHJzOntcImVycm9yLW1lc3NhZ2VzXCI6X3ZtLm1lc3NhZ2VzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcImFwcGVuZC1pY29uXCI6X3ZtLnNob3cgPyAnbWRpLWV5ZScgOiAnbWRpLWV5ZS1vZmYnLFwidHlwZVwiOl92bS5zaG93ID8gJ3RleHQnIDogJ3Bhc3N3b3JkJyxcImxhYmVsXCI6XCLQn9C+0LTRgtCy0LXRgNC00LjRgtC1INC/0LDRgNC+0LvRjFwiLFwibmFtZVwiOlwicGFzc3dvcmRcIn0sb246e1wiY2xpY2s6YXBwZW5kXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uc2hvdyA9ICFfdm0uc2hvd319LG1vZGVsOnt2YWx1ZTooX3ZtLnVzZXIucGFzc3dvcmRfY29uZmlybWF0aW9uKSxjYWxsYmFjazpmdW5jdGlvbiAoJCR2KSB7X3ZtLiRzZXQoX3ZtLnVzZXIsIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsICQkdil9LGV4cHJlc3Npb246XCJ1c2VyLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwifX0pLF92bS5fdihcIiBcIiksX2MoJ3YtY2FyZCcse3N0YXRpY0NsYXNzOlwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBtYi02XCIsYXR0cnM6e1wiZmxhdFwiOlwiXCIsXCJoZWlnaHRcIjpcImF1dG9cIixcInRpbGVcIjpcIlwifX0sW19jKCd2LWJ0bicse2F0dHJzOntcImNvbG9yXCI6XCJwcmltYXJ5XCIsXCJkaXNhYmxlZFwiOiFfdm0uaXNGb3JtVmFsaWR9LG9uOntcImNsaWNrXCI6X3ZtLnVwZGF0ZX19LFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0YxcXG4gICAgICAgICAgICAgICAgICAgIFwiKV0pXSwxKV0sMSldLDEpXSwxKV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=