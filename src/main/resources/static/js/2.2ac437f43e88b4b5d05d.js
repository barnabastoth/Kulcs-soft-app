webpackJsonp([2],{"3rqP":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[t("q-layout",[t("q-page-container",[t("q-page",{staticStyle:{width:"700px","max-width":"90vw"},attrs:{padding:""}},[t("q-tabs",{attrs:{color:"secondary",glossy:"",align:"justify"}},[t("q-tab",{attrs:{slot:"title",default:"",name:"Belépés",icon:"fa-user",label:"Belépés"},slot:"title"}),n._v(" "),t("q-tab",{attrs:{slot:"title",name:"Regisztráció",icon:"fa-lock-open",label:"Regisztriáció"},slot:"title"}),n._v(" "),t("q-tab-pane",{attrs:{name:"Belépés"}},[t("q-item",[t("q-item-side",{attrs:{icon:"fa-info",inverted:"",color:"green"}}),n._v(" "),t("q-item-main",[t("q-item-tile",{attrs:{label:""}},[n._v("Üdvözöllek újra köztünk, itt tudsz belépni.")])],1)],1),n._v(" "),t("br"),n._v(" "),t("q-input",{attrs:{"float-label":"Felhasználónév",inverted:"",color:"primary",type:"text",before:[{icon:"fa-address-card",handler:function(){}}]},model:{value:n.login.userName,callback:function(e){n.$set(n.login,"userName",e)},expression:"login.userName"}}),n._v(" "),t("br"),n._v(" "),t("q-input",{attrs:{"float-label":"Jelszó",inverted:"",color:"primary",type:"password",before:[{icon:"fa-key",handler:function(){}}]},model:{value:n.login.password,callback:function(e){n.$set(n.login,"password",e)},expression:"login.password"}}),n._v(" "),t("br"),n._v(" "),t("q-btn",{attrs:{color:"primary","icon-right":"fa-sign-in-alt",label:"Bejelentkezés"},on:{click:function(e){n.performLogin()}}})],1),n._v(" "),t("q-tab-pane",{attrs:{name:"Regisztráció"}},[t("q-item",[t("q-item-side",{attrs:{icon:"fa-info",inverted:"",color:"green"}}),n._v(" "),t("q-item-main",[t("q-item-tile",{attrs:{label:""}},[n._v("Kérlek valós adatokat adj meg a regisztráció során")])],1)],1),n._v(" "),t("br"),n._v(" "),t("q-input",{attrs:{"float-label":"Felhasználónév",inverted:"",color:"primary",type:"text",before:[{icon:"fa-address-card",handler:function(){}}]},model:{value:n.registration.userName,callback:function(e){n.$set(n.registration,"userName",e)},expression:"registration.userName"}}),n._v(" "),t("br"),n._v(" "),t("q-input",{attrs:{"float-label":"Email cím",inverted:"",color:"primary",type:"email",before:[{icon:"fa-envelope",handler:function(){}}]},model:{value:n.registration.userEmail,callback:function(e){n.$set(n.registration,"userEmail",e)},expression:"registration.userEmail"}}),n._v(" "),t("br"),n._v(" "),t("q-input",{attrs:{"float-label":"Jelszó",inverted:"",color:"primary",type:"password",before:[{icon:"fa-key",handler:function(){}}]},model:{value:n.registration.password,callback:function(e){n.$set(n.registration,"password",e)},expression:"registration.password"}}),n._v(" "),t("br"),n._v(" "),t("q-btn",{attrs:{color:"primary","icon-right":"fa-sign-in-alt",label:"Regisztráció"},on:{click:function(e){n.performRegistration()}}})],1)],1)],1)],1)],1)],1)},r=[];a._withStripped=!0;var i=t("XyMi"),s=!1;var o=function(n){s||t("cxEc")},l=Object(i.a)({name:"authentication",data:function(){return{login:{userName:"",password:""},registration:{userName:"",userEmail:"",password:""}}},methods:{performLogin:function(){var n=this;this.$store.dispatch("login",{userName:this.$data.login.userName,password:this.$data.login.password}).then(function(){n.$router.push("/")}).catch(function(){n.$router.push("/bejelentkezes")})},performRegistration:function(){var n=this;this.$store.dispatch("registration",{userName:this.$data.registration.userName,userEmail:this.$data.registration.userEmail,password:this.$data.registration.password}).then(function(){n.$router.push("/")}).catch(function(){n.$router.push("/bejelentkezes")})}}},a,r,!1,o,"data-v-390bc216",null);l.options.__file="src\\pages\\authentication.vue";e.default=l.exports},SKhI:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},cxEc:function(n,e,t){var a=t("SKhI");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t("rjj0").default)("28e3a206",a,!1,{})}});