(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/feng-parse/components/wxParseVideo"],{1406:function(t,n,e){"use strict";e.r(n);var o=e("3a51"),a=e("9f4e");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("8434");var i,r=e("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=c.exports},"3a51":function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return o})},"4e6e":function(t,n,e){},"661d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"wxParseVideo",props:{node:{}},data:function(){return{playState:!0,videoStyle:"width: 100%;"}},methods:{play:function(){console.log("点击了video 播放"),this.playState=!this.playState}},mounted:function(){var n=this;t.$on("slideMenuShow",function(t){console.log("捕获事件："+t),"show"==t&&n.playState&&(n.playState=!1)})}};n.default=e}).call(this,e("543d")["default"])},8434:function(t,n,e){"use strict";var o=e("4e6e"),a=e.n(o);a.a},"9f4e":function(t,n,e){"use strict";e.r(n);var o=e("661d"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/feng-parse/components/wxParseVideo-create-component',
    {
        'components/feng-parse/components/wxParseVideo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1406"))
        })
    },
    [['components/feng-parse/components/wxParseVideo-create-component']]
]);
