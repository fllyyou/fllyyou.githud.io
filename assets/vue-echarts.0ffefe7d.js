import{a as H,r as J}from"./resize-detector.4e96b72b.js";import{d as W,s as U,G as L,ab as Z,f as b,g as $,w as z,l as P,e as K,J as Q,h as V,n as X,u as C}from"./@vue.e6dedf64.js";import{i as Y,t as ee}from"./echarts.b4fc8f11.js";var d=function(){return d=Object.assign||function(e){for(var o,i=1,c=arguments.length;i<c;i++)for(var t in o=arguments[i])Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);return e},d.apply(this,arguments)},te=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function ne(e){return o=Object.create(null),te.forEach(function(i){o[i]=function(c){return function(){for(var t=[],l=0;l<arguments.length;l++)t[l]=arguments[l];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[c].apply(e.value,t)}}(i)}),o;var o}var re={autoresize:Boolean},ae={loading:Boolean,loadingOptions:Object},oe=/^on[^a-z]/,ue=function(e){return oe.test(e)},R=[],y=[];(function(e,o){if(e&&typeof document<"u"){var i,c=o.prepend===!0?"prepend":"append",t=o.singleTag===!0,l=typeof o.container=="string"?document.querySelector(o.container):document.getElementsByTagName("head")[0];if(t){var p=R.indexOf(l);p===-1&&(p=R.push(l)-1,y[p]={}),i=y[p]&&y[p][c]?y[p][c]:y[p][c]=x()}else i=x();e.charCodeAt(0)===65279&&(e=e.substring(1)),i.styleSheet?i.styleSheet.cssText+=e:i.appendChild(document.createTextNode(e))}function x(){var O=document.createElement("style");if(O.setAttribute("type","text/css"),o.attributes)for(var g=Object.keys(o.attributes),m=0;m<g.length;m++)O.setAttribute(g[m],o.attributes[g[m]]);var T=c==="prepend"?"afterbegin":"beforeend";return l.insertAdjacentElement(T,O),O}})("x-vue-echarts{display:block;width:100%;height:100%}",{});var le=W({name:"echarts",props:d(d({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},re),ae),inheritAttrs:!1,setup:function(e,o){var i=o.attrs,c=U(),t=U(),l=U(),p=L("ecTheme",null),x=L("ecInitOptions",null),O=L("ecUpdateOptions",null),g=Z(e),m=g.autoresize,T=g.manualUpdate,I=g.loading,N=g.loadingOptions,q=b(function(){return l.value||e.option||null}),D=b(function(){return e.theme||C(p)||{}}),k=b(function(){return e.initOptions||C(x)||{}}),S=b(function(){return e.updateOptions||C(O)||{}}),F=b(function(){return function(s){var n={};for(var u in s)ue(u)||(n[u]=s[u]);return n}(i)}),M=$().proxy.$listeners;function j(s){if(c.value){var n=t.value=Y(c.value,D.value,k.value);e.group&&(n.group=e.group);var u=M;u||(u={},Object.keys(i).filter(function(a){return a.indexOf("on")===0&&a.length>2}).forEach(function(a){var r=a.charAt(2).toLowerCase()+a.slice(3);r.substring(r.length-4)==="Once"&&(r="~".concat(r.substring(0,r.length-4))),u[r]=i[a]})),Object.keys(u).forEach(function(a){var r=u[a];if(r){var f=a.toLowerCase();f.charAt(0)==="~"&&(f=f.substring(1),r.__once__=!0);var h=n;if(f.indexOf("zr:")===0&&(h=n.getZr(),f=f.substring(3)),r.__once__){delete r.__once__;var E=r;r=function(){for(var w=[],A=0;A<arguments.length;A++)w[A]=arguments[A];E.apply(void 0,w),h.off(f,r)}}h.on(f,r)}}),m.value?X(function(){n&&!n.isDisposed()&&n.resize(),v()}):v()}function v(){var a=s||q.value;a&&n.setOption(a,S.value)}}function B(){t.value&&(t.value.dispose(),t.value=void 0)}var _=null;z(T,function(s){typeof _=="function"&&(_(),_=null),s||(_=z(function(){return e.option},function(n,u){n&&(t.value?t.value.setOption(n,d({notMerge:n.value!==(u==null?void 0:u.value)},S.value)):j())},{deep:!0}))},{immediate:!0}),z([D,k],function(){B(),j()},{deep:!0}),P(function(){e.group&&t.value&&(t.value.group=e.group)});var G=ne(t);return function(s,n,u){var v=L("ecLoadingOptions",{}),a=b(function(){return d(d({},C(v)),u==null?void 0:u.value)});P(function(){var r=s.value;r&&(n.value?r.showLoading(a.value):r.hideLoading())})}(t,I,N),function(s,n,u){var v=null;z([u,s,n],function(a,r,f){var h=a[0],E=a[1],w=a[2];h&&E&&w&&(v=ee(function(){E.resize()},100),H(h,v)),f(function(){v&&h&&J(h,v)})})}(t,m,c),K(function(){j()}),Q(B),d({chart:t,root:c,setOption:function(s,n){e.manualUpdate&&(l.value=s),t.value?t.value.setOption(s,n||{}):j(s)},nonEventAttrs:F},G)},render:function(){var e=d({},this.nonEventAttrs);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",V("x-vue-echarts",e)}});export{le as C};
