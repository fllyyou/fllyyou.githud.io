import{O as y,E as h,m,k as L,x as w,y as O,i as _,u as C,w as G}from"./tsparticles-engine.62396409.js";class E{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){!i||(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=y.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class x{constructor(){this.distance=100,this.links=new E}get lineLinked(){return this.links}set lineLinked(i){this.links=i}get line_linked(){return this.links}set line_linked(i){this.links=i}load(i){var e,n;!i||(i.distance!==void 0&&(this.distance=i.distance),this.links.load((n=(e=i.links)!==null&&e!==void 0?e:i.lineLinked)!==null&&n!==void 0?n:i.line_linked))}}function D(t,i,e,n,r,o){C(t,e,n),t.strokeStyle=G(r,o),t.lineWidth=i,t.stroke()}function I(t,i,e,n,r){t.canvas.draw(o=>{var s;const a=i.getPosition();D(o,(s=i.retina.linksWidth)!==null&&s!==void 0?s:0,a,r,e,n)})}class M extends h{constructor(i){super(i)}clear(){}init(){const i=this.container,e=i.actualOptions.interactivity.modes.grab;!e||(i.retina.grabModeDistance=e.distance*i.retina.pixelRatio)}async interact(){var i,e;const n=this.container,r=n.actualOptions,o=r.interactivity;if(!o.modes.grab||!o.events.onHover.enable||n.interactivity.status!==m)return;const s=n.interactivity.mouse.position;if(!s)return;const a=n.retina.grabModeDistance;if(!a||a<0)return;const g=n.particles.quadTree.queryCircle(s,a,l=>this.isEnabled(l));for(const l of g){const p=l.getPosition(),c=L(p,s);if(c>a)continue;const d=o.modes.grab.links,u=d.opacity,b=u-c*u/a;if(b<=0)continue;const f=(i=d.color)!==null&&i!==void 0?i:(e=l.options.links)===null||e===void 0?void 0:e.color;if(!n.particles.grabLineColor&&f){const k=o.modes.grab.links;n.particles.grabLineColor=w(f,k.blink,k.consent)}const v=O(l,void 0,n.particles.grabLineColor);if(!v)return;I(n,l,v,b,s)}}isEnabled(i){var e;const n=this.container,r=n.interactivity.mouse,o=((e=i==null?void 0:i.interactivity)!==null&&e!==void 0?e:n.actualOptions.interactivity).events;return o.onHover.enable&&!!r.position&&_("grab",o.onHover.mode)}loadModeOptions(i,...e){i.grab||(i.grab=new x);for(const n of e)i.grab.load(n==null?void 0:n.grab)}reset(){}}async function q(t){await t.addInteractor("externalGrab",i=>new M(i))}export{q as l};
