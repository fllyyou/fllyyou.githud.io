import{G as f,c as y}from"./tsparticles-engine.62396409.js";function t(s,e,o,i){switch(s.options.size.animation.destroy){case"max":e>=i&&s.destroy();break;case"min":e<=o&&s.destroy();break}}function l(s,e){var o,i,z,n,d;const v=((o=s.size.velocity)!==null&&o!==void 0?o:0)*e.factor,a=s.size.min,u=s.size.max,m=(i=s.size.decay)!==null&&i!==void 0?i:1;if(!(s.destroyed||!s.size.enable||((z=s.size.maxLoops)!==null&&z!==void 0?z:0)>0&&((n=s.size.loops)!==null&&n!==void 0?n:0)>((d=s.size.maxLoops)!==null&&d!==void 0?d:0))){switch(s.size.status){case 0:s.size.value>=u?(s.size.status=1,s.size.loops||(s.size.loops=0),s.size.loops++):s.size.value+=v;break;case 1:s.size.value<=a?(s.size.status=0,s.size.loops||(s.size.loops=0),s.size.loops++):s.size.value-=v}s.size.velocity&&m!==1&&(s.size.velocity*=m),t(s,s.size.value,a,u),s.destroyed||(s.size.value=y(s.size.value,a,u))}}class b{init(e){var o;const i=e.container,z=e.options.size,n=z.animation;n.enable&&(e.size.velocity=((o=e.retina.sizeAnimationSpeed)!==null&&o!==void 0?o:i.retina.sizeAnimationSpeed)/100*i.retina.reduceFactor,n.sync||(e.size.velocity*=f()))}isEnabled(e){var o,i,z,n;return!e.destroyed&&!e.spawning&&e.size.enable&&(((o=e.size.maxLoops)!==null&&o!==void 0?o:0)<=0||((i=e.size.maxLoops)!==null&&i!==void 0?i:0)>0&&((z=e.size.loops)!==null&&z!==void 0?z:0)<((n=e.size.maxLoops)!==null&&n!==void 0?n:0))}reset(e){e.size.loops=0}update(e,o){!this.isEnabled(e)||l(e,o)}}async function x(s){await s.addParticleUpdater("size",()=>new b)}export{x as l};
