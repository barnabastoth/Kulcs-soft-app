webpackJsonp([4],{DcE1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mtWM"),l=a.n(s),n=a("7109"),r={name:"user-list",data:function(){return{selectedUsers:[],columns:[{name:"ID",required:!0,label:"Id",align:"left",field:"name",sortable:!0},{name:"userName",required:!0,label:"Felhasználó név",align:"left",field:"userName",sortable:!0},{name:"userEmail",required:!0,label:"Email cím",align:"left",field:"userEmail",sortable:!0}],tableData:[]}},created:function(){var e=this;l.a.get("/api/user/").then(function(t){for(var a=0;a<t.data.length;a++){var s={};s.name=t.data[a].id,s.userName=t.data[a].userName,s.userEmail=t.data[a].userEmail,e.$data.tableData.push(s)}})},methods:{deleteSelectedUsers:function(){for(var e=this,t=function(t){l.a.get("/api/user/"+e.$data.selectedUsers[t].name+"/deleteUser").then(function(){n.a.create({type:"positive",color:"positive",position:"bottom",timeout:3e3,message:"Sikeresen törölted a következő felhasználót: "+e.$data.selectedUsers[t].userName})}).catch(function(){n.a.create({type:"info",color:"info",position:"bottom",timeout:3e3,message:"A következő felhasználó törlése sikertelen volt: "+e.$data.selectedUsers[t].userName})})},a=0;a<this.$data.selectedUsers.length;a++)t(a)}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-center",staticStyle:{"margin-top":"5vw"}},[a("q-table",{attrs:{data:e.tableData,columns:e.columns,selection:"multiple",selected:e.selectedUsers,"row-key":"name",color:"secondary",title:"Felhasználók"},on:{"update:selected":function(t){e.selectedUsers=t}},scopedSlots:e._u([{key:"top-selection",fn:function(t){return[a("q-btn",{staticClass:"q-mr-sm",attrs:{icon:"delete",color:"negative",label:"Kijelölt felhasználók törlése"},on:{click:function(t){e.deleteSelectedUsers()}}})]}}])})],1)},o=[];i._withStripped=!0;var c=a("XyMi"),u=Object(c.a)(r,i,o,!1,null,null,null);u.options.__file="src\\pages\\user-list.vue";t.default=u.exports}});