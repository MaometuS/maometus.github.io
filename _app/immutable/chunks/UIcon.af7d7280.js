import{t as U,a as q,S as E,i as L}from"./index.28409b7f.js";import{u as P,s as K,f as Q,g as V,h as B,d as T,j as C,i as H,n as R}from"./scheduler.7a274a43.js";import{w as O,b as G}from"./paths.ae5fb862.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,t){U(e,1,1,()=>{t.delete(e.key)})}function ts(e,t,a,n,g,i,r,S,m,h,c,v){let f=e.length,u=i.length,p=f;const b={};for(;p--;)b[e[p].key]=p;const y=[],k=new Map,J=new Map,j=[];for(p=u;p--;){const o=v(g,i,p),l=a(o);let d=r.get(l);d?n&&j.push(()=>d.p(o,t)):(d=h(l,o),d.c()),k.set(l,y[p]=d),l in b&&J.set(l,Math.abs(p-b[l]))}const M=new Set,N=new Set;function A(o){q(o,1),o.m(S,c),r.set(o.key,o),c=o.first,u--}for(;f&&u;){const o=y[u-1],l=e[f-1],d=o.key,w=l.key;o===l?(c=o.first,f--,u--):k.has(w)?!r.has(d)||M.has(d)?A(o):N.has(w)?f--:J.get(d)>J.get(w)?(N.add(d),A(o)):(M.add(w),f--):(m(l,r),f--)}for(;f--;){const o=e[f];k.has(o.key)||m(o,r)}for(;u;)A(y[u-1]);return P(j),y}const D="@riadh-adrani-theme",W=e=>{localStorage.setItem(D,JSON.stringify(e))},F=O(!1),x=e=>F.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return W(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),ns=()=>{const e=localStorage.getItem(D);e?x(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?x(!0):x(!1)},_=e=>`${G}/logos/${e}`,s=(e,t)=>t?{dark:_(t),light:_(e)}:_(e),as={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg")};let I;F.subscribe(e=>I=e);const os=e=>typeof e=="string"?e:I?e.dark:e.light;globalThis&&globalThis.__awaiter;function X(e){let t,a;return{c(){t=Q("i"),this.h()},l(n){t=V(n,"I",{class:!0}),B(t).forEach(T),this.h()},h(){C(t,"class",a=`${e[0]} ${e[1]}`)},m(n,g){H(n,t,g)},p(n,[g]){g&3&&a!==(a=`${n[0]} ${n[1]}`)&&C(t,"class",a)},i:R,o:R,d(n){n&&T(t)}}}function z(e,t,a){let{icon:n=void 0}=t,{classes:g=""}=t;return e.$$set=i=>{"icon"in i&&a(0,n=i.icon),"classes"in i&&a(1,g=i.classes)},[n,g]}class is extends E{constructor(t){super(),L(this,t,z,X,K,{icon:0,classes:1})}}export{as as A,is as U,x as a,es as b,ss as e,os as g,ns as o,F as t,ts as u};
