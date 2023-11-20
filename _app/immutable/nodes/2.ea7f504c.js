import{s as O,f as I,a as $,g as T,h as y,d as _,c as B,j as m,i as S,I as E,J as z,K as ae,u as ce,o as ue,l as A,m as L,R as Z,p as fe,S as V,q as ie,T as J,U as X,n as C,V as he}from"../chunks/scheduler.bdaa4df1.js";import{S as G,i as K,b as q,d as N,m as P,a as M,t as U,e as R,c as me,g as de}from"../chunks/index.49b0a900.js";import{U as Q,e as F}from"../chunks/UIcon.62d4f51d.js";import{g as W,I as j,u as ee,M as pe,b as _e,T as te,H as ge}from"../chunks/params.6291ecd8.js";import{M as ve}from"../chunks/MainTitle.de67ff74.js";import{i as be}from"../chunks/index.97b3c5e0.js";function re(t,e,r){const s=t.slice();return s[16]=e[r],s}function ne(t){let e,r,s,l,n,o,u=t[16].name+"",h,w;return{c(){e=I("div"),r=I("img"),n=$(),o=I("span"),h=A(u),w=$(),this.h()},l(g){e=T(g,"DIV",{class:!0});var k=y(e);r=T(k,"IMG",{class:!0,src:!0,alt:!0}),n=B(k),o=T(k,"SPAN",{class:!0});var x=y(o);h=L(x,u),x.forEach(_),w=B(k),k.forEach(_),this.h()},h(){m(r,"class","w-120px h-120px aspect-square"),Z(r.src,s=W(t[16].logo))||m(r,"src",s),m(r,"alt",l=t[16].name),m(o,"class","text-center m-t-20px"),m(e,"class","box-content w-150px p-15px col-center")},m(g,k){S(g,e,k),E(e,r),E(e,n),E(e,o),E(o,h),E(e,w)},p(g,k){k&1&&!Z(r.src,s=W(g[16].logo))&&m(r,"src",s),k&1&&l!==(l=g[16].name)&&m(r,"alt",l),k&1&&u!==(u=g[16].name+"")&&fe(h,u)},d(g){g&&_(e)}}}function ke(t){let e,r,s,l,n,o,u,h,w,g,k;s=new Q({props:{icon:"i-carbon-chevron-left"}});let x=F(t[0]),d=[];for(let f=0;f<x.length;f+=1)d[f]=ne(re(t,x,f));return h=new Q({props:{icon:"i-carbon-chevron-right"}}),{c(){e=I("div"),r=I("button"),q(s.$$.fragment),l=$(),n=I("div");for(let f=0;f<d.length;f+=1)d[f].c();o=$(),u=I("button"),q(h.$$.fragment),this.h()},l(f){e=T(f,"DIV",{class:!0});var i=y(e);r=T(i,"BUTTON",{class:!0});var p=y(r);N(s.$$.fragment,p),p.forEach(_),l=B(i),n=T(i,"DIV",{class:!0});var a=y(n);for(let c=0;c<d.length;c+=1)d[c].l(a);a.forEach(_),o=B(i),u=T(i,"BUTTON",{class:!0});var v=y(u);N(h.$$.fragment,v),v.forEach(_),i.forEach(_),this.h()},h(){m(r,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(n,"class","row overflow-hidden box-content w-150px"),m(u,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(e,"class","carrousel flex-[0.5] row-center")},m(f,i){S(f,e,i),E(e,r),P(s,r,null),E(e,l),E(e,n);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(n,null);t[11](n),E(e,o),E(e,u),P(h,u,null),w=!0,g||(k=[z(r,"click",t[2]),z(r,"keyup",t[8]),z(r,"keydown",t[9]),z(r,"keypress",t[10]),z(u,"click",t[3]),z(u,"keyup",t[5]),z(u,"keydown",t[6]),z(u,"keypress",t[7])],g=!0)},p(f,[i]){if(i&1){x=F(f[0]);let p;for(p=0;p<x.length;p+=1){const a=re(f,x,p);d[p]?d[p].p(a,i):(d[p]=ne(a),d[p].c(),d[p].m(n,null))}for(;p<d.length;p+=1)d[p].d(1);d.length=x.length}},i(f){w||(M(s.$$.fragment,f),M(h.$$.fragment,f),w=!0)},o(f){U(s.$$.fragment,f),U(h.$$.fragment,f),w=!1},d(f){f&&_(e),R(s),ae(d,f),t[11](null),R(h),g=!1,ce(k)}}}const we=2e3;function xe(t,e,r){let{items:s=[]}=e,l,n,o=0,u=!0;const h=c=>{c?o<s.length-1?r(4,o=o+1):(r(4,o=o-1),u=!1):o>0?r(4,o=o-1):(r(4,o=o+1),u=!0)},w=c=>{clearTimeout(n),n=setTimeout(()=>{h(c),w(u)},we)},g=()=>{clearTimeout(n),u=!1,h(!1),w(u)},k=()=>{clearTimeout(n),u=!0,h(!0),w(u)};ue(()=>{w(!0)});function x(c){V.call(this,t,c)}function d(c){V.call(this,t,c)}function f(c){V.call(this,t,c)}function i(c){V.call(this,t,c)}function p(c){V.call(this,t,c)}function a(c){V.call(this,t,c)}function v(c){ie[c?"unshift":"push"](()=>{l=c,r(1,l)})}return t.$$set=c=>{"items"in c&&r(0,s=c.items)},t.$$.update=()=>{t.$$.dirty&18&&l&&l.scroll({left:o*150,behavior:"smooth"})},[s,l,g,k,o,x,d,f,i,p,a,v]}class Ee extends G{constructor(e){super(),K(this,e,xe,ke,O,{items:0})}}const se=t=>t===j.Youtube?"0 0 461.001 461.001":t===j.Facebook?"0 0 408.788 408.788":[j.GitHub,j.Search,j.Code].includes(t)?"0 0 16 16":"0 0 24 24";function ye(t){let e,r,s;return{c(){e=J("svg"),r=J("path"),this.h()},l(l){e=X(l,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var n=y(e);r=X(n,"path",{d:!0}),y(r).forEach(_),n.forEach(_),this.h()},h(){m(r,"d",t[2]),m(e,"class","inline-block"),m(e,"viewBox",s=se(t[2])),m(e,"fill",t[1]),m(e,"height",t[0]),m(e,"width",t[0])},m(l,n){S(l,e,n),E(e,r),t[4](e)},p(l,[n]){n&4&&m(r,"d",l[2]),n&4&&s!==(s=se(l[2]))&&m(e,"viewBox",s),n&2&&m(e,"fill",l[1]),n&1&&m(e,"height",l[0]),n&1&&m(e,"width",l[0])},i:C,o:C,d(l){l&&_(e),t[4](null)}}}function Ie(t,e,r){let s,{size:l="30px"}=e,{color:n="var(--main-text)"}=e,{icon:o}=e;function u(h){ie[h?"unshift":"push"](()=>{s=h,r(3,s)})}return t.$$set=h=>{"size"in h&&r(0,l=h.size),"color"in h&&r(1,n=h.color),"icon"in h&&r(2,o=h.icon)},[l,n,o,s,u]}class Te extends G{constructor(e){super(),K(this,e,Ie,ye,O,{size:0,color:1,icon:2})}}function le(t,e,r){const s=t.slice();return s[7]=e[r],s}function $e(t){let e,r,s,l;return{c(){e=A(t[3]),r=$(),s=A(t[1]),l=A(",")},l(n){e=L(n,t[3]),r=B(n),s=L(n,t[1]),l=L(n,",")},m(n,o){S(n,e,o),S(n,r,o),S(n,s,o),S(n,l,o)},p:C,d(n){n&&(_(e),_(r),_(s),_(l))}}}function oe(t){let e,r,s,l;return r=new Te({props:{icon:_e(t[7].platform),color:"var(--accent-text)",size:"20px"}}),{c(){e=I("a"),q(r.$$.fragment),s=$(),this.h()},l(n){e=T(n,"A",{class:!0,href:!0,target:!0,rel:!0});var o=y(e);N(r.$$.fragment,o),s=B(o),o.forEach(_),this.h()},h(){m(e,"class","decoration-none"),m(e,"href",`${t[6](t[7].link)?"mailto:":""}${t[7].link}`),m(e,"target","_blank"),m(e,"rel","noreferrer")},m(n,o){S(n,e,o),P(r,e,null),E(e,s),l=!0},p:C,i(n){l||(M(r.$$.fragment,n),l=!0)},o(n){U(r.$$.fragment,n),l=!1},d(n){n&&_(e),R(r)}}}function Be(t){let e,r,s,l,n,o,u,h,w,g,k,x,d;document.title=e=ee(t[4],te),n=new ve({props:{classes:"md:text-left ",$$slots:{default:[$e]},$$scope:{ctx:t}}});let f=F(t[2]),i=[];for(let a=0;a<f.length;a+=1)i[a]=oe(le(t,f,a));const p=a=>U(i[a],1,1,()=>{i[a]=null});return x=new Ee({props:{items:t[5]??pe}}),{c(){r=$(),s=I("div"),l=I("div"),q(n.$$.fragment),o=$(),u=I("p"),h=A(t[0]),w=$(),g=I("div");for(let a=0;a<i.length;a+=1)i[a].c();k=$(),q(x.$$.fragment),this.h()},l(a){he("svelte-gorrxo",document.head).forEach(_),r=B(a),s=T(a,"DIV",{class:!0});var c=y(s);l=T(c,"DIV",{class:!0});var b=y(l);N(n.$$.fragment,b),o=B(b),u=T(b,"P",{class:!0});var D=y(u);h=L(D,t[0]),D.forEach(_),w=B(b),g=T(b,"DIV",{class:!0});var Y=y(g);for(let H=0;H<i.length;H+=1)i[H].l(Y);Y.forEach(_),b.forEach(_),k=B(c),N(x.$$.fragment,c),c.forEach(_),this.h()},h(){m(u,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),m(g,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),m(l,"class","md:flex-1 gap-10px"),m(s,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(a,v){S(a,r,v),S(a,s,v),E(s,l),P(n,l,null),E(l,o),E(l,u),E(u,h),E(l,w),E(l,g);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(g,null);E(s,k),P(x,s,null),d=!0},p(a,[v]){(!d||v&16)&&e!==(e=ee(a[4],te))&&(document.title=e);const c={};if(v&1024&&(c.$$scope={dirty:v,ctx:a}),n.$set(c),v&68){f=F(a[2]);let b;for(b=0;b<f.length;b+=1){const D=le(a,f,b);i[b]?(i[b].p(D,v),M(i[b],1)):(i[b]=oe(D),i[b].c(),M(i[b],1),i[b].m(g,null))}for(de(),b=f.length;b<i.length;b+=1)p(b);me()}},i(a){if(!d){M(n.$$.fragment,a);for(let v=0;v<f.length;v+=1)M(i[v]);M(x.$$.fragment,a),d=!0}},o(a){U(n.$$.fragment,a),i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)U(i[v]);U(x.$$.fragment,a),d=!1},d(a){a&&(_(r),_(s)),R(n),ae(i,a),R(x)}}}function Se(t){const{description:e,lastName:r,links:s,name:l,title:n,skills:o}=ge;return[e,r,s,l,n,o,h=>{const w=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!be(h)&&w.test(h)}]}class Ae extends G{constructor(e){super(),K(this,e,Se,Be,O,{})}}export{Ae as component};
