import{j as O,O as M,E as B,i as y,d as E,b as k,k as g,l as m,m as R,n as D,o as S,p as j,q,s as H,C as P,R as T,t as w,c as C}from"./tsparticles-engine.62396409.js";class x{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(!!e){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const t=this.color instanceof Array?void 0:this.color;this.color=O(e.color,o=>M.create(t,o))}e.size!==void 0&&(this.size=e.size)}}}class _ extends x{constructor(){super(),this.selectors=[]}get ids(){return O(this.selectors,e=>e.replace("#",""))}set ids(e){this.selectors=O(e,t=>`#${t}`)}load(e){super.load(e),e&&(e.ids!==void 0&&(this.ids=e.ids),e.selectors!==void 0&&(this.selectors=e.selectors))}}class I extends x{load(e){super.load(e),e&&(this.divs=O(e.divs,t=>{const o=new _;return o.load(t),o}))}}function z(f,e,t,o){if(e>=t){const i=f+(e-t)*o;return C(i,f,e)}else if(e<t){const i=f-(t-e)*o;return C(i,e,f)}}class A extends B{constructor(e){super(e),e.bubble||(e.bubble={}),this.handleClickMode=t=>{t==="bubble"&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,t,o){e.bubble.inRange&&!o||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,t=e.actualOptions.interactivity.modes.bubble;!t||(e.retina.bubbleModeDistance=t.distance*e.retina.pixelRatio,t.size!==void 0&&(e.retina.bubbleModeSize=t.size*e.retina.pixelRatio))}async interact(e){const t=this.container.actualOptions,o=t.interactivity.events,i=o.onHover,s=o.onClick,b=i.enable,u=i.mode,n=s.enable,r=s.mode,l=o.onDiv;b&&y("bubble",u)?this.hoverBubble(e):n&&y("bubble",r)?this.clickBubble(e):E("bubble",l,(v,a)=>this.singleSelectorHover(e,v,a))}isEnabled(e){var t;const o=this.container,i=o.actualOptions,s=o.interactivity.mouse,b=((t=e==null?void 0:e.interactivity)!==null&&t!==void 0?t:i.interactivity).events,u=b.onDiv,n=k("bubble",u);if(!(n||b.onHover.enable&&s.position||b.onClick.enable&&s.clickPosition))return!1;const r=b.onHover.mode,l=b.onClick.mode;return y("bubble",r)||y("bubble",l)||n}loadModeOptions(e,...t){e.bubble||(e.bubble=new I);for(const o of t)e.bubble.load(o==null?void 0:o.bubble)}reset(e){e.bubble.inRange=!1}clickBubble(e){var t,o;const i=this.container,s=i.actualOptions,b=i.interactivity.mouse.clickPosition,u=s.interactivity.modes.bubble;if(!u||!b)return;i.bubble||(i.bubble={});const n=i.retina.bubbleModeDistance;if(!n||n<0)return;const r=i.particles.quadTree.queryCircle(b,n,l=>this.isEnabled(l));for(const l of r){if(!i.bubble.clicking)continue;l.bubble.inRange=!i.bubble.durationEnd;const v=l.getPosition(),a=g(v,b),d=(new Date().getTime()-(i.interactivity.mouse.clickTime||0))/1e3;d>u.duration&&(i.bubble.durationEnd=!0),d>u.duration*2&&(i.bubble.clicking=!1,i.bubble.durationEnd=!1);const c={bubbleObj:{optValue:i.retina.bubbleModeSize,value:l.bubble.radius},particlesObj:{optValue:m(l.options.size.value)*i.retina.pixelRatio,value:l.size.value},type:"size"};this.process(l,a,d,c);const h={bubbleObj:{optValue:u.opacity,value:l.bubble.opacity},particlesObj:{optValue:m(l.options.opacity.value),value:(o=(t=l.opacity)===null||t===void 0?void 0:t.value)!==null&&o!==void 0?o:1},type:"opacity"};this.process(l,a,d,h),i.bubble.durationEnd?delete l.bubble.color:a<=n?this.hoverBubbleColor(l,a):delete l.bubble.color}}hoverBubble(e){const t=this.container,o=t.interactivity.mouse.position,i=t.retina.bubbleModeDistance;if(!i||i<0||o===void 0)return;const s=t.particles.quadTree.queryCircle(o,i,b=>this.isEnabled(b));for(const b of s){b.bubble.inRange=!0;const u=b.getPosition(),n=g(u,o),r=1-n/i;n<=i?r>=0&&t.interactivity.status===R&&(this.hoverBubbleSize(b,r),this.hoverBubbleOpacity(b,r),this.hoverBubbleColor(b,r)):this.reset(b),t.interactivity.status===D&&this.reset(b)}}hoverBubbleColor(e,t,o){const i=this.container.actualOptions,s=o!=null?o:i.interactivity.modes.bubble;if(!!s){if(!e.bubble.finalColor){const b=s.color;if(!b)return;const u=S(b);e.bubble.finalColor=j(u)}if(!!e.bubble.finalColor)if(s.mix){e.bubble.color=void 0;const b=e.getFillColor();e.bubble.color=b?q(H(b,e.bubble.finalColor,1-t,t)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}}hoverBubbleOpacity(e,t,o){var i,s,b,u;const n=this.container,r=n.actualOptions,l=(i=o==null?void 0:o.opacity)!==null&&i!==void 0?i:(s=r.interactivity.modes.bubble)===null||s===void 0?void 0:s.opacity;if(!l)return;const v=e.options.opacity.value,a=(u=(b=e.opacity)===null||b===void 0?void 0:b.value)!==null&&u!==void 0?u:1,d=z(a,l,m(v),t);d!==void 0&&(e.bubble.opacity=d)}hoverBubbleSize(e,t,o){const i=this.container,s=o!=null&&o.size?o.size*i.retina.pixelRatio:i.retina.bubbleModeSize;if(s===void 0)return;const b=m(e.options.size.value)*i.retina.pixelRatio,u=e.size.value,n=z(u,s,b,t);n!==void 0&&(e.bubble.radius=n)}process(e,t,o,i){const s=this.container,b=i.bubbleObj.optValue,u=s.actualOptions,n=u.interactivity.modes.bubble;if(!n||b===void 0)return;const r=n.duration,l=s.retina.bubbleModeDistance,v=i.particlesObj.optValue,a=i.bubbleObj.value,d=i.particlesObj.value||0,c=i.type;if(!(!l||l<0||b===v))if(s.bubble||(s.bubble={}),s.bubble.durationEnd)a&&(c==="size"&&delete e.bubble.radius,c==="opacity"&&delete e.bubble.opacity);else if(t<=l){if((a!=null?a:d)!==b){const p=d-o*(d-b)/r;c==="size"&&(e.bubble.radius=p),c==="opacity"&&(e.bubble.opacity=p)}}else c==="size"&&delete e.bubble.radius,c==="opacity"&&delete e.bubble.opacity}singleSelectorHover(e,t,o){const i=this.container,s=document.querySelectorAll(t),b=i.actualOptions.interactivity.modes.bubble;!b||!s.length||s.forEach(u=>{const n=u,r=i.retina.pixelRatio,l={x:(n.offsetLeft+n.offsetWidth/2)*r,y:(n.offsetTop+n.offsetHeight/2)*r},v=n.offsetWidth/2*r,a=o.type==="circle"?new P(l.x,l.y,v):new T(n.offsetLeft*r,n.offsetTop*r,n.offsetWidth*r,n.offsetHeight*r),d=i.particles.quadTree.query(a,c=>this.isEnabled(c));for(const c of d){if(!a.contains(c.getPosition()))continue;c.bubble.inRange=!0;const h=b.divs,p=w(h,n);(!c.bubble.div||c.bubble.div!==n)&&(this.clear(c,e,!0),c.bubble.div=n),this.hoverBubbleSize(c,1,p),this.hoverBubbleOpacity(c,1,p),this.hoverBubbleColor(c,1,p)}})}}async function W(f){await f.addInteractor("externalBubble",e=>new A(e))}export{W as l};
