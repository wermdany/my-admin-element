(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225dc9"],{e5cf:function(t,e,n){"use strict";n.r(e);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("keep-alive",{attrs:{include:t.include}},[n("router-view",{key:t.key})],1)},i=[],c=(n("7f7f"),n("6762"),n("2fdb"),{name:"authorityAuth",data:function(){return{key:this.$route.path}},computed:{include:function(){return this.$store.getters.findCachedByName("authorityAuth")}},watch:{$route:function(t){t.name.includes("authorityAuth")&&(this.key=t.path),0===this.include.length&&this.key}}}),r=c,a=n("2877"),h=Object(a["a"])(r,u,i,!1,null,null,null);e["default"]=h.exports}}]);