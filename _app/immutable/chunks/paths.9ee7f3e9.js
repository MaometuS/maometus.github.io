import{n as b,s as h}from"./scheduler.7a274a43.js";const e=[];function d(n,l=b){let i;const o=new Set;function r(t){if(h(n,t)&&(n=t,i)){const a=!e.length;for(const s of o)s[1](),e.push(s,n);if(a){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(n))}function _(t,a=b){const s=[t,a];return o.add(s),o.size===1&&(i=l(r,c)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1a8zjxa)==null?void 0:f.base)??"";var u;const z=((u=globalThis.__sveltekit_1a8zjxa)==null?void 0:u.assets)??p;export{z as a,p as b,d as w};
