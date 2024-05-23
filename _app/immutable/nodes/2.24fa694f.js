import{s as Z,f as k,a as V,g as w,h as L,d as p,c as x,j as f,i as A,K as _,L as H,M as c1,u as u1,o as f1,l as P,m as j,T as K,p as m1,O as T,q as h1,U as W,V as Q,n as q,W as v1}from"../chunks/scheduler.7a274a43.js";import{S as F,i as Y,b as D,d as U,m as O,a as y,t as $,e as R,c as d1,g as p1}from"../chunks/index.28409b7f.js";import{U as X,e as G,g as I}from"../chunks/UIcon.af7d7280.js";import{P as E}from"../chunks/types.1ebf2f37.js";import{u as z1,M as g1,t as _1}from"../chunks/app.950c8fad.js";import{s as C1,n as e1,l as t1,t as M1,a as l1,d as r1}from"../chunks/home.0b2aa228.js";import{i as b1}from"../chunks/skills.ba40b5ce.js";import{i as L1}from"../chunks/index.3c4f56ed.js";function a1(e,t,l){const a=e.slice();return a[16]=t[l],a}function s1(e){let t,l,a,o,r,c,h=e[16].name+"",u,z;return{c(){t=k("div"),l=k("img"),r=V(),c=k("span"),u=P(h),z=V(),this.h()},l(g){t=w(g,"DIV",{class:!0});var v=L(t);l=w(v,"IMG",{class:!0,src:!0,alt:!0}),r=x(v),c=w(v,"SPAN",{class:!0});var M=L(c);u=j(M,h),M.forEach(p),z=x(v),v.forEach(p),this.h()},h(){f(l,"class","w-120px h-120px aspect-square"),K(l.src,a=I(e[16].logo))||f(l,"src",a),f(l,"alt",o=e[16].name),f(c,"class","text-center m-t-20px"),f(t,"class","box-content w-150px p-15px col-center")},m(g,v){A(g,t,v),_(t,l),_(t,r),_(t,c),_(c,u),_(t,z)},p(g,v){v&1&&!K(l.src,a=I(g[16].logo))&&f(l,"src",a),v&1&&o!==(o=g[16].name)&&f(l,"alt",o),v&1&&h!==(h=g[16].name+"")&&m1(u,h)},d(g){g&&p(t)}}}function k1(e){let t,l,a,o,r,c,h,u,z,g,v;a=new X({props:{icon:"i-carbon-chevron-left"}});let M=G(e[0]),m=[];for(let n=0;n<M.length;n+=1)m[n]=s1(a1(e,M,n));return u=new X({props:{icon:"i-carbon-chevron-right"}}),{c(){t=k("div"),l=k("button"),D(a.$$.fragment),o=V(),r=k("div");for(let n=0;n<m.length;n+=1)m[n].c();c=V(),h=k("button"),D(u.$$.fragment),this.h()},l(n){t=w(n,"DIV",{class:!0});var b=L(t);l=w(b,"BUTTON",{class:!0});var s=L(l);U(a.$$.fragment,s),s.forEach(p),o=x(b),r=w(b,"DIV",{class:!0});var d=L(r);for(let i=0;i<m.length;i+=1)m[i].l(d);d.forEach(p),c=x(b),h=w(b,"BUTTON",{class:!0});var C=L(h);U(u.$$.fragment,C),C.forEach(p),b.forEach(p),this.h()},h(){f(l,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),f(r,"class","row overflow-hidden box-content w-150px"),f(h,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),f(t,"class","carrousel flex-[0.5] row-center")},m(n,b){A(n,t,b),_(t,l),O(a,l,null),_(t,o),_(t,r);for(let s=0;s<m.length;s+=1)m[s]&&m[s].m(r,null);e[11](r),_(t,c),_(t,h),O(u,h,null),z=!0,g||(v=[H(l,"click",e[2]),H(l,"keyup",e[8]),H(l,"keydown",e[9]),H(l,"keypress",e[10]),H(h,"click",e[3]),H(h,"keyup",e[5]),H(h,"keydown",e[6]),H(h,"keypress",e[7])],g=!0)},p(n,[b]){if(b&1){M=G(n[0]);let s;for(s=0;s<M.length;s+=1){const d=a1(n,M,s);m[s]?m[s].p(d,b):(m[s]=s1(d),m[s].c(),m[s].m(r,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=M.length}},i(n){z||(y(a.$$.fragment,n),y(u.$$.fragment,n),z=!0)},o(n){$(a.$$.fragment,n),$(u.$$.fragment,n),z=!1},d(n){n&&p(t),R(a),c1(m,n),e[11](null),R(u),g=!1,u1(v)}}}const w1=2e3;function V1(e,t,l){let{items:a=[]}=t,o,r,c=0,h=!0;const u=i=>{i?c<a.length-1?l(4,c=c+1):(l(4,c=c-1),h=!1):c>0?l(4,c=c-1):(l(4,c=c+1),h=!0)},z=i=>{clearTimeout(r),r=setTimeout(()=>{u(i),z(h)},w1)},g=()=>{clearTimeout(r),h=!1,u(!1),z(h)},v=()=>{clearTimeout(r),h=!0,u(!0),z(h)};f1(()=>{z(!0)});function M(i){T.call(this,e,i)}function m(i){T.call(this,e,i)}function n(i){T.call(this,e,i)}function b(i){T.call(this,e,i)}function s(i){T.call(this,e,i)}function d(i){T.call(this,e,i)}function C(i){h1[i?"unshift":"push"](()=>{o=i,l(1,o)})}return e.$$set=i=>{"items"in i&&l(0,a=i.items)},e.$$.update=()=>{e.$$.dirty&18&&o&&o.scroll({left:c*150,behavior:"smooth"})},[a,o,g,v,c,M,m,n,b,s,d,C]}class x1 extends F{constructor(t){super(),Y(this,t,V1,k1,Z,{items:0})}}var S=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(S||{});const A1=e=>{switch(e){case E.GitHub:return"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";case E.Linkedin:return"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z";case E.StackOverflow:return"m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z";case E.Facebook:return"M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z";case E.Email:return"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z";case E.Twitter:return"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";case E.Youtube:return"M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"}},n1=e=>e===S.Youtube?"0 0 461.001 461.001":e===S.Facebook?"0 0 408.788 408.788":[S.GitHub,S.Search,S.Code].includes(e)?"0 0 16 16":"0 0 24 24";function H1(e){let t,l,a;return{c(){t=W("svg"),l=W("path"),this.h()},l(o){t=Q(o,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var r=L(t);l=Q(r,"path",{d:!0}),L(l).forEach(p),r.forEach(p),this.h()},h(){f(l,"d",e[2]),f(t,"class","inline-block"),f(t,"viewBox",a=n1(e[2])),f(t,"fill",e[1]),f(t,"height",e[0]),f(t,"width",e[0])},m(o,r){A(o,t,r),_(t,l),e[4](t)},p(o,[r]){r&4&&f(l,"d",o[2]),r&4&&a!==(a=n1(o[2]))&&f(t,"viewBox",a),r&2&&f(t,"fill",o[1]),r&1&&f(t,"height",o[0]),r&1&&f(t,"width",o[0])},i:q,o:q,d(o){o&&p(t),e[4](null)}}}function y1(e,t,l){let a,{size:o="30px"}=t,{color:r="var(--main-text)"}=t,{icon:c}=t;function h(u){h1[u?"unshift":"push"](()=>{a=u,l(3,a)})}return e.$$set=u=>{"size"in u&&l(0,o=u.size),"color"in u&&l(1,r=u.color),"icon"in u&&l(2,c=u.icon)},[o,r,c,a,h]}class E1 extends F{constructor(t){super(),Y(this,t,y1,H1,Z,{size:0,color:1,icon:2})}}function o1(e,t,l){const a=e.slice();return a[1]=t[l],a}function $1(e){let t,l,a,o;return{c(){t=P(e1),l=V(),a=P(t1),o=P(",")},l(r){t=j(r,e1),l=x(r),a=j(r,t1),o=j(r,",")},m(r,c){A(r,t,c),A(r,l,c),A(r,a,c),A(r,o,c)},p:q,d(r){r&&(p(t),p(l),p(a),p(o))}}}function i1(e){let t,l,a,o;return l=new E1({props:{icon:A1(e[1].platform),color:"var(--accent-text)",size:"20px"}}),{c(){t=k("a"),D(l.$$.fragment),a=V(),this.h()},l(r){t=w(r,"A",{class:!0,href:!0,target:!0,rel:!0});var c=L(t);U(l.$$.fragment,c),a=x(c),c.forEach(p),this.h()},h(){f(t,"class","decoration-none"),f(t,"href",`${e[0](e[1].link)?"mailto:":""}${e[1].link}`),f(t,"target","_blank"),f(t,"rel","noreferrer")},m(r,c){A(r,t,c),O(l,t,null),_(t,a),o=!0},p:q,i(r){o||(y(l.$$.fragment,r),o=!0)},o(r){$(l.$$.fragment,r),o=!1},d(r){r&&p(t),R(l)}}}function T1(e){let t,l,a,o,r,c,h,u,z,g,v,M;document.title=z1(M1,_1),o=new g1({props:{classes:"md:text-left ",$$slots:{default:[$1]},$$scope:{ctx:e}}});let m=G(l1),n=[];for(let s=0;s<m.length;s+=1)n[s]=i1(o1(e,m,s));const b=s=>$(n[s],1,1,()=>{n[s]=null});return v=new x1({props:{items:C1??b1}}),{c(){t=V(),l=k("div"),a=k("div"),D(o.$$.fragment),r=V(),c=k("p"),h=P(r1),u=V(),z=k("div");for(let s=0;s<n.length;s+=1)n[s].c();g=V(),D(v.$$.fragment),this.h()},l(s){v1("svelte-1tippc1",document.head).forEach(p),t=x(s),l=w(s,"DIV",{class:!0});var C=L(l);a=w(C,"DIV",{class:!0});var i=L(a);U(o.$$.fragment,i),r=x(i),c=w(i,"P",{class:!0});var B=L(c);h=j(B,r1),B.forEach(p),u=x(i),z=w(i,"DIV",{class:!0});var J=L(z);for(let N=0;N<n.length;N+=1)n[N].l(J);J.forEach(p),i.forEach(p),g=x(C),U(v.$$.fragment,C),C.forEach(p),this.h()},h(){f(c,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),f(z,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),f(a,"class","md:flex-1 gap-10px"),f(l,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(s,d){A(s,t,d),A(s,l,d),_(l,a),O(o,a,null),_(a,r),_(a,c),_(c,h),_(a,u),_(a,z);for(let C=0;C<n.length;C+=1)n[C]&&n[C].m(z,null);_(l,g),O(v,l,null),M=!0},p(s,[d]){const C={};if(d&16&&(C.$$scope={dirty:d,ctx:s}),o.$set(C),d&1){m=G(l1);let i;for(i=0;i<m.length;i+=1){const B=o1(s,m,i);n[i]?(n[i].p(B,d),y(n[i],1)):(n[i]=i1(B),n[i].c(),y(n[i],1),n[i].m(z,null))}for(p1(),i=m.length;i<n.length;i+=1)b(i);d1()}},i(s){if(!M){y(o.$$.fragment,s);for(let d=0;d<m.length;d+=1)y(n[d]);y(v.$$.fragment,s),M=!0}},o(s){$(o.$$.fragment,s),n=n.filter(Boolean);for(let d=0;d<n.length;d+=1)$(n[d]);$(v.$$.fragment,s),M=!1},d(s){s&&(p(t),p(l)),R(o),c1(n,s),R(v)}}}function S1(e){return[l=>{const a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!L1(l)&&a.test(l)}]}class G1 extends F{constructor(t){super(),Y(this,t,S1,T1,Z,{})}}export{G1 as component};
