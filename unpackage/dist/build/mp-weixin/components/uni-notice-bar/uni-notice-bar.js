(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-notice-bar/uni-notice-bar"],{2179:function(t,n,e){"use strict";var i=e("41d3"),o=e.n(i);o.a},"22ba":function(t,n,e){"use strict";e.r(n);var i=e("af3d"),o=e("bb63");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("2179");var c,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"a72b56b2",null,!1,i["a"],c);n["default"]=r.exports},"41d3":function(t,n,e){},"8ba8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"864c"))},o={name:"UniNoticeBar",components:{uniIcons:i},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),n="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:n,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick(function(){t.initSize()})},methods:{initSize:function(){var n=this;if(this.scrollable){var e=[],i=new Promise(function(e,i){t.createSelectorQuery().in(n).select("#".concat(n.elId)).boundingClientRect().exec(function(t){n.textWidth=t[0].width,e()})}),o=new Promise(function(e,i){t.createSelectorQuery().in(n).select("#".concat(n.elIdBox)).boundingClientRect().exec(function(t){n.boxWidth=t[0].width,e()})});e.push(i),e.push(o),Promise.all(e).then(function(){n.animationDuration="".concat(n.textWidth/n.speed,"s"),n.animationDelay="-".concat(n.boxWidth/n.speed,"s"),setTimeout(function(){n.animationPlayState="running"},1e3)})}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};n.default=o}).call(this,e("543d")["default"])},af3d:function(t,n,e){"use strict";var i={"uni-icons":()=>Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"864c"))},o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},bb63:function(t,n,e){"use strict";e.r(n);var i=e("8ba8"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("22ba"))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);
