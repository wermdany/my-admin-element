(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab50d198"],{"1d0a":function(t,e,n){"use strict";var o=n("61ea"),i=n.n(o);i.a},"61ea":function(t,e,n){},a9c3:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"authority-route--service"},[n("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"warning"}},[t._v("服务器设置，主要是把本地的默认路由设置，保存至服务器端，同时可以对路由节点进行任意的修改和删除，支持拖拽排序；"),n("br"),t._v("第一次启用此功能一般是初始化服务器设置，全部保存至服务器，然后再此基础上进行修改；"),n("br"),t._v("如果对本系统充分了解可以直接从零编写路由，但是必须是合法的配置，并且匹配组件映射；"),n("br"),t._v("路由修改支持两种方式和服务器保持一直："),n("br"),t._v("1.全部修改后整体保存至服务器"),n("br"),t._v("2.每次修改任意一个节点都实时保存至服务器"),n("br"),t._v("目前以默认数据模拟")]),n("div",{staticClass:"header"},[n("el-button",{attrs:{type:"primary",title:"向根部末尾添加一个路由节点"},on:{click:t.addRootRoute}},[t._v("新增")]),n("el-button",{attrs:{type:"success",title:"把本地默认路由设置保持至服务器"}},[t._v("初始化")]),n("el-button",{attrs:{type:"danger",title:"重置服务器路由设置，也就是清空服务器所有保存路由数据"},on:{click:t.resetService}},[t._v("重置")]),n("el-button",{attrs:{type:"success",title:"把当前页面修改都保存至服务器"},on:{click:t.saveAll}},[t._v("保存")])],1),n("route-tree",{ref:"RouteTree",attrs:{data:t.defaultAllRoutes,"use-type":"edit",draggable:!0},on:{"get-node":t.getRoute,"node-drop":t.RouteDrop}}),n("el-dialog",{attrs:{visible:t.dialog_visible,"show-close":!1,center:"","destroy-on-close":""},on:{"update:visible":function(e){t.dialog_visible=e}}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t._f("EventFormat")(t.dialog_title,t.event)))]),n("div",{staticClass:"body"},[n("route-form",{attrs:{disabled:!1,model:t.formRoute},on:{"update:model":function(e){t.formRoute=e}}})],1),n("span",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialog_visible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.saveRoute}},[t._v("确 定")])],1)])],1)},i=[],s=(n("a7cc"),n("450d"),n("df33")),r=n.n(s),u=(n("1951"),n("eedf")),a=n.n(u),c=(n("915d"),n("e04d")),l=n.n(c),f=n("d3ce"),d=n("c46e"),h=n("a85b"),v=n("8271"),p=n("bc5f"),_=n("a1a3"),b=n("0a11"),R={methods:{$_E_Cat:function(t,e,n){this.formRoute=Object(_["a"])(this.$deepCopy(b["a"]),t),this.event=n},$_E_Edit:function(t,e,n){this.selectRoute=t,this.formRoute=Object(_["a"])(this.$deepCopy(b["a"]),t),this.event=n},$_E_Delete:function(t,e,n){this.selectRoute=t,this.event=n},$_E_Append:function(t,e,n){this.selectRoute=t,this.formRoute=this.$deepCopy(b["a"]),this.event=n},$_E_InsertAfter:function(t,e,n){this.selectRoute=t,this.formRoute=this.$deepCopy(b["a"]),this.event=n},$_E_InsertBefore:function(t,e,n){this.selectRoute=t,this.formRoute=this.$deepCopy(b["a"]),this.event=n}}},m={methods:{$_H_Edit:function(t,e){return new Promise((function(t,e){t()}))},$_H_Delete:function(t){return new Promise((function(t,e){t()}))},$_H_Append:function(t,e){return new Promise((function(t,e){t()}))},$_H_InsertAfter:function(t,e){return new Promise((function(t,e){t()}))},$_H_InsertBefore:function(t,e){return new Promise((function(t,e){t()}))},$_E_Drop:function(t,e,n){return new Promise((function(t,e){t()}))}}},$={name:"AuthorityRouteService",components:{elAlert:l.a,elButton:a.a,elDialog:r.a,RouteTree:f["a"],RouteForm:d["a"]},data:function(){return this.eventType=["Cat","Edit","Delete","Append","InsertAfter","InsertBefore","Drop"],{defaultAllRoutes:Object(v["a"])(this.$deepCopy(h["a"])),visible:!1,title:"",formRoute:{},selectRoute:{},event:""}},mixins:[p["a"],R,m],methods:{getRoute:function(t,e,n){this.dispenseEvent(t,e,n)},dispenseEvent:function(t,e,n){if(n>this.eventType.length)throw new Error("[Route tree]:未知的修改事件！");this["$_E_"+this.eventType[n]](t,e,n),2==n?this.backEvent():this.beginEdit(t,e)},beginEdit:function(t,e){this.$_setDialogTitle(Object(v["b"])(e)),this.$_openDialog()},backEvent:function(){var t=this;this["$_H_"+this.eventType[this.event]](this.selectRoute,this.formRoute).then((function(){t.$refs.RouteTree.receiveEvent(t.selectRoute,t.formRoute,t.eventType[t.event],t.defaultAllRoutes)})).catch((function(e){t.$message.error(e)}))},addRootRoute:function(){var t=this.defaultAllRoutes[this.defaultAllRoutes.length-1];if(t){var e=this.$refs.RouteTree.getTreeNode(t);this.$_E_InsertAfter(t,e,4),this.beginEdit(t,e)}else this.$_E_Append({},{},3),this.beginEdit(null,null)},RouteDrop:function(t,e,n,o){var i=this;this.$_E_Drop(t,e,n).then((function(){i.$message.success("拖拽成功！")}))},saveRoute:function(){this.backEvent(),this.$_closeDialog()},saveAll:function(){},resetService:function(){var t=this,e=this.$createElement;this.$prompt("",{title:"再次确认",message:e("p",null,["如果确认重置服务端路由信息，请在下输入",e("b",{style:{color:"red"}},"确认重置"),"以完成重置操作！"]),inputPattern:/\u786e\u8ba4\u91cd\u7f6e/,inputErrorMessage:"请输入“确认重置”完成操作"}).then((function(){t.defaultAllRoutes=[]})).catch((function(){t.$message.warning("重置取消...")}))}},filters:{EventFormat:function(t,e){var n=["查看","编辑","删除","内部插入新路由","后置插入新路由","前置插入新路由"];return"[ ".concat(t," ] ").concat(n[e])}}},g=$,E=(n("1d0a"),n("2877")),y=Object(E["a"])(g,o,i,!1,null,"d9690338",null);e["default"]=y.exports}}]);