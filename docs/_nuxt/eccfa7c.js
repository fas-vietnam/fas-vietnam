(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1047:function(e,t,a){"use strict";a.r(t);var n=a(43),s=(a(130),a(4),a(5),a(28),{layout:"blank_layout",directives:{disabledIconFocus:{update:function(e){e.querySelectorAll(".v-input__icon button").forEach((function(e){return e.setAttribute("tabindex",-1)}))},bind:function(e){}}},data:function(){return{valid:!1,e1:!1,txtPassword:"",passwordRules:[function(e){return!!e||"Password is required"}],txtUsername:"",usernameRules:[function(e){return!!e||"Username is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}]}},mounted:function(){this.$refs.username.focus(),console.log("login mounted")},created:function(){console.log("login created"),this.$nuxt.context.userInfo&&this.$router.back()},methods:{submit:function(){this.$refs.form.validate()&&this.$refs.form.$el.submit()},clear:function(){this.$refs.form.reset()},doLogin:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("clicked"!=e&&13!=e.keyCode){a.next=14;break}return a.prev=1,a.next=4,t.$axios.post(t.$nuxt.context.appConfig.API+"/login",{appId:t.$nuxt.context.appConfig.appId,employeeId:t.txtUsername,password:t.txtPassword});case 4:n=a.sent,console.log(n.data),n.data.data.userInfo?"NO"==n.data.data.userInfo.IS_VALID?(console.log("Sai Password"),t.$toast.show("Sai Password!",{duration:3e3,position:"bottom-center"}),t.$refs.password.focus(),t.$refs.password.$el.getElementsByTagName("input")[0].select()):((s=n.data.data.userInfo).permissionList=n.data.data.permissionList,s.expriedTime=Date.now()+t.$nuxt.context.appConfig.keepLoginMinute,console.log(s),t.$nuxt.context.userInfo=s,localStorage.setItem(t.$nuxt.context.pkg.app_key,JSON.stringify(s)),t.$router.back()):(console.log("user k ton tai"),t.$toast.show("Username Không Tồn Tại!",{duration:3e3,position:"bottom-center"}),t.$refs.username.focus(),t.$refs.username.$el.getElementsByTagName("input")[0].select()),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:return a.prev=12,a.finish(12);case 14:case"end":return a.stop()}}),a,null,[[1,9,12,14]])})))()},doLogout:function(){localStorage.removeItem(this.$nuxt.context.pkg.app_key)}}}),o=(a(992),a(82)),r=a(111),i=a.n(r),l=a(239),c=a(393),u=a(98),d=a(392),f=a(415),p=a(397),m=a(414),v=a(62),x=a(103),g=a(162),b=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"page-login"}},[a("v-container",{staticClass:"loginOverlay mt-12",attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md5:"",lg4:"",xl3:""}},[a("v-card",{staticClass:"elevation-24 mt-12",attrs:{rounded:""}},[a("v-toolbar",{staticClass:"blue darken-4 text-center"},[a("v-toolbar-title",{staticClass:"white--text"},[a("h4",{staticClass:"justify-space-between"},[e._v("\n\t\t\t\t\t\t\t\t\tĐăng Nhập FAVV\n\t\t\t\t\t\t\t\t")])])],1),e._v(" "),a("v-card-text",{staticClass:"pt-4"},[a("v-container",{attrs:{"px-6":""}},[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{directives:[{name:"disabled-icon-focus",rawName:"v-disabled-icon-focus"}],ref:"username",attrs:{"prepend-icon":"mdi-account",label:"Username",rules:e.usernameRules,required:"",clearable:""},model:{value:e.txtUsername,callback:function(t){e.txtUsername=t},expression:"txtUsername"}}),e._v(" "),a("v-text-field",{directives:[{name:"disabled-icon-focus",rawName:"v-disabled-icon-focus"}],ref:"password",attrs:{"prepend-icon":"mdi-lock",label:"Mật khẩu","append-icon":e.e1?"mdi-eye":"mdi-eye-off",type:e.e1?"text":"password",rules:e.passwordRules,required:"",clearable:""},on:{"click:append":function(){return e.e1=!e.e1},keypress:e.doLogin},model:{value:e.txtPassword,callback:function(t){e.txtPassword=t},expression:"txtPassword"}}),e._v(" "),a("v-layout",{attrs:{"justify-space-between":""}},[a("span"),e._v(" "),a("v-btn",{staticClass:"elevation-2",class:{"pink darken-1 white--text":e.valid},attrs:{large:"",disabled:!e.valid},on:{click:function(t){return e.doLogin("clicked")}}},[e._v("Đăng nhập")])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=b.exports;i()(b,{VBtn:l.a,VCard:c.a,VCardText:u.d,VContainer:d.a,VFlex:f.a,VForm:p.a,VLayout:m.a,VTextField:v.a,VToolbar:x.a,VToolbarTitle:g.c})},975:function(e,t,a){var n=a(993);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(13).default)("3d4827ad",n,!0,{sourceMap:!1})},992:function(e,t,a){"use strict";a(975)},993:function(e,t,a){var n=a(12)(!1);n.push([e.i,"#login-page .loginOverlay{background-color:#deb887}",""]),e.exports=n}}]);