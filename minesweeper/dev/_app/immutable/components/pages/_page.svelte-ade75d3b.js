import{S as je,i as Fe,s as Je,B as Pt,k as p,a as D,l as g,m as b,c as T,h as d,n as m,I as ft,p as dt,b as A,G as s,J as Ct,D as It,E as Mt,F as Ot,f as P,t as O,K as ut,L as Bt,q as E,v as J,r as S,w as K,x as Q,g as Pe,d as Ce,u as Ge,y as Y,o as Ht,M as Et,N as St,O as yt,A as Ue,H as At,e as Ie,P as Lt,Q as Nt,R as Vt}from"../../chunks/index-35a657ee.js";import{t as _t,l as Rt,C as Dt,d as Tt,c as ht,g as zt,M as qt,G as mt,S as Ut,u as vt,a as jt,n as Ft,B as Jt}from"../../chunks/SidebarLayout-8ba9c7de.js";import{c as Gt}from"../../chunks/singletons-c694b127.js";const Kt=""+new URL("../../assets/delete-685fc792.svg",import.meta.url).href,Qt=""+new URL("../../assets/play-8408aa2d.svg",import.meta.url).href;function $t(a){let e,t;return{c(){e=p("img"),this.h()},l(l){e=g(l,"IMG",{src:!0,alt:!0,draggable:!0,class:!0}),this.h()},h(){ut(e.src,t=a[3])||m(e,"src",t),m(e,"alt",""),m(e,"draggable","false"),m(e,"class","svelte-13k56ob")},m(l,r){A(l,e,r)},p(l,r){r&8&&!ut(e.src,t=l[3])&&m(e,"src",t)},d(l){l&&d(e)}}}function Yt(a){var _;let e,t,l,r=`${((_=a[4])!=null?_:a[1]==="icon")?0:null}rem`,c,f,u,o=a[1]==="icon"&&$t(a);const i=a[6].default,n=Pt(i,a,a[5],null);return{c(){e=p("button"),o&&o.c(),t=D(),n&&n.c(),this.h()},l(v){e=g(v,"BUTTON",{class:!0});var z=b(e);o&&o.l(z),t=T(z),n&&n.l(z),z.forEach(d),this.h()},h(){e.disabled=a[0],m(e,"class",l=ft(["unstyled",a[1],a[2]].join(" "))+" svelte-13k56ob"),dt(e,"padding",r,!1)},m(v,z){A(v,e,z),o&&o.m(e,null),s(e,t),n&&n.m(e,null),c=!0,f||(u=Ct(e,"click",a[7]),f=!0)},p(v,[z]){var y;v[1]==="icon"?o?o.p(v,z):(o=$t(v),o.c(),o.m(e,t)):o&&(o.d(1),o=null),n&&n.p&&(!c||z&32)&&It(n,i,v,v[5],c?Ot(i,v[5],z,null):Mt(v[5]),null),(!c||z&1)&&(e.disabled=v[0]),(!c||z&6&&l!==(l=ft(["unstyled",v[1],v[2]].join(" "))+" svelte-13k56ob"))&&m(e,"class",l),z&18&&r!==(r=`${((y=v[4])!=null?y:v[1]==="icon")?0:null}rem`)&&dt(e,"padding",r,!1)},i(v){c||(P(n,v),c=!0)},o(v){O(n,v),c=!1},d(v){v&&d(e),o&&o.d(),n&&n.d(v),f=!1,u()}}}function Wt(a,e,t){let{$$slots:l={},$$scope:r}=e,{disabled:c=!1}=e,{type:f="normal"}=e,{size:u="medium"}=e,{iconSrc:o=""}=e,{padding:i=null}=e;function n(_){Bt.call(this,a,_)}return a.$$set=_=>{"disabled"in _&&t(0,c=_.disabled),"type"in _&&t(1,f=_.type),"size"in _&&t(2,u=_.size),"iconSrc"in _&&t(3,o=_.iconSrc),"padding"in _&&t(4,i=_.padding),"$$scope"in _&&t(5,r=_.$$scope)},[c,f,u,o,i,r,l,n]}class ie extends je{constructor(e){super(),Fe(this,e,Wt,Yt,Je,{disabled:0,type:1,size:2,iconSrc:3,padding:4})}}function Xt(a){let e;return{c(){e=E("Loading...")},l(t){e=S(t,"Loading...")},m(t,l){A(t,e,l)},p:Ue,i:Ue,o:Ue,d(t){t&&d(e)}}}function Zt(a){let e,t;return e=new qt({props:{game:a[2],showMines:a[2].state!==mt.Playing}}),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,r){Q(e,l,r),t=!0},p(l,r){const c={};r&4&&(c.game=l[2]),r&4&&(c.showMines=l[2].state!==mt.Playing),e.$set(c)},i(l){t||(P(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function pt(a){let e,t,l;function r(f){a[6](f)}let c={borderColor:"white",size:1.25};return a[0].selected!==void 0&&(c.checked=a[0].selected),e=new Dt({props:c}),Et.push(()=>St(e,"checked",r)),{c(){J(e.$$.fragment)},l(f){K(e.$$.fragment,f)},m(f,u){Q(e,f,u),l=!0},p(f,u){const o={};!t&&u&1&&(t=!0,o.checked=f[0].selected,yt(()=>t=!1)),e.$set(o)},i(f){l||(P(e.$$.fragment,f),l=!0)},o(f){O(e.$$.fragment,f),l=!1},d(f){Y(e,f)}}}function xt(a){var me,se,ve,$e;let e,t,l,r,c,f,u,o,i,n,_=((me=a[2])==null?void 0:me.width)+"",v,z,y=((se=a[2])==null?void 0:se.height)+"",k,h,$=((ve=a[2])==null?void 0:ve.state)+"",C,j,W=_t(($e=a[2])==null?void 0:$e.stats.timePlayed)+"",Z,x,fe,V,R,de,X,ee,H;const he=[Zt,Xt],B=[];function le(w,I){return w[2]?0:1}l=le(a),r=B[l]=he[l](a),R=new ie({props:{type:"icon",iconSrc:Kt,size:"large"}}),R.$on("click",a[4]),X=new ie({props:{type:"icon",iconSrc:Qt,size:"large"}}),X.$on("click",a[5]);let G=a[1]&&pt(a);return{c(){e=p("div"),t=p("div"),r.c(),c=D(),f=p("div"),u=p("p"),o=E(a[3]),i=D(),n=p("p"),v=E(_),z=E("x"),k=E(y),h=E(" ("),C=E($),j=E(", "),Z=E(W),x=E(")"),fe=D(),V=p("div"),J(R.$$.fragment),de=D(),J(X.$$.fragment),ee=D(),G&&G.c(),this.h()},l(w){e=g(w,"DIV",{class:!0});var I=b(e);t=g(I,"DIV",{class:!0});var te=b(t);r.l(te),te.forEach(d),c=T(I),f=g(I,"DIV",{class:!0});var U=b(f);u=g(U,"P",{class:!0});var q=b(u);o=S(q,a[3]),q.forEach(d),i=T(U),n=g(U,"P",{class:!0});var N=b(n);v=S(N,_),z=S(N,"x"),k=S(N,y),h=S(N," ("),C=S(N,$),j=S(N,", "),Z=S(N,W),x=S(N,")"),N.forEach(d),U.forEach(d),fe=T(I),V=g(I,"DIV",{class:!0});var M=b(V);K(R.$$.fragment,M),de=T(M),K(X.$$.fragment,M),ee=T(M),G&&G.l(M),M.forEach(d),I.forEach(d),this.h()},h(){m(t,"class","miniboard svelte-1vvybk7"),m(u,"class","name svelte-1vvybk7"),m(n,"class","size svelte-1vvybk7"),m(f,"class","info svelte-1vvybk7"),m(V,"class","right svelte-1vvybk7"),m(e,"class","wrapper svelte-1vvybk7")},m(w,I){A(w,e,I),s(e,t),B[l].m(t,null),s(e,c),s(e,f),s(f,u),s(u,o),s(f,i),s(f,n),s(n,v),s(n,z),s(n,k),s(n,h),s(n,C),s(n,j),s(n,Z),s(n,x),s(e,fe),s(e,V),Q(R,V,null),s(V,de),Q(X,V,null),s(V,ee),G&&G.m(V,null),H=!0},p(w,[I]){var U,q,N,M;let te=l;l=le(w),l===te?B[l].p(w,I):(Pe(),O(B[te],1,1,()=>{B[te]=null}),Ce(),r=B[l],r?r.p(w,I):(r=B[l]=he[l](w),r.c()),P(r,1),r.m(t,null)),(!H||I&4)&&_!==(_=((U=w[2])==null?void 0:U.width)+"")&&Ge(v,_),(!H||I&4)&&y!==(y=((q=w[2])==null?void 0:q.height)+"")&&Ge(k,y),(!H||I&4)&&$!==($=((N=w[2])==null?void 0:N.state)+"")&&Ge(C,$),(!H||I&4)&&W!==(W=_t((M=w[2])==null?void 0:M.stats.timePlayed)+"")&&Ge(Z,W),w[1]?G?(G.p(w,I),I&2&&P(G,1)):(G=pt(w),G.c(),P(G,1),G.m(V,null)):G&&(Pe(),O(G,1,1,()=>{G=null}),Ce())},i(w){H||(P(r),P(R.$$.fragment,w),P(X.$$.fragment,w),P(G),H=!0)},o(w){O(r),O(R.$$.fragment,w),O(X.$$.fragment,w),O(G),H=!1},d(w){w&&d(e),B[l].d(),Y(R),Y(X),G&&G.d()}}}function el(a,e,t){let{showSelect:l=!1}=e,{slot:r}=e,c=`Save Game ${r.index}`,f;Ht(()=>{t(2,f=Rt(r.index))});const u=()=>{Tt(r.index)},o=()=>{ht.set(-1),ht.set(r.index),zt(`${Gt}/play`)};function i(n){a.$$.not_equal(r.selected,n)&&(r.selected=n,t(0,r))}return a.$$set=n=>{"showSelect"in n&&t(1,l=n.showSelect),"slot"in n&&t(0,r=n.slot)},[r,l,f,c,u,o,i]}class tl extends je{constructor(e){super(),Fe(this,e,el,xt,Je,{showSelect:1,slot:0})}}function gt(a,e,t){const l=a.slice();return l[11]=e[t],l}function ll(a){let e;return{c(){e=E("Select All")},l(t){e=S(t,"Select All")},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function sl(a){let e;return{c(){e=E("Deselect All")},l(t){e=S(t,"Deselect All")},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function al(a){let e;return{c(){e=E("Delete Selected")},l(t){e=S(t,"Delete Selected")},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function bt(a){let e=[],t=new Map,l,r,c,f=a[1];const u=i=>i[11].index;for(let i=0;i<f.length;i+=1){let n=gt(a,f,i),_=u(n);t.set(_,e[i]=kt(_,n))}let o=a[1].length===0&&wt();return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=D(),o&&o.c(),r=Ie()},l(i){for(let n=0;n<e.length;n+=1)e[n].l(i);l=T(i),o&&o.l(i),r=Ie()},m(i,n){for(let _=0;_<e.length;_+=1)e[_].m(i,n);A(i,l,n),o&&o.m(i,n),A(i,r,n),c=!0},p(i,n){n&3&&(f=i[1],Pe(),e=Lt(e,n,u,1,i,f,t,l.parentNode,Vt,kt,l,gt),Ce()),i[1].length===0?o||(o=wt(),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i(i){if(!c){for(let n=0;n<f.length;n+=1)P(e[n]);c=!0}},o(i){for(let n=0;n<e.length;n+=1)O(e[n]);c=!1},d(i){for(let n=0;n<e.length;n+=1)e[n].d(i);i&&d(l),o&&o.d(i),i&&d(r)}}}function kt(a,e){let t,l,r;return l=new tl({props:{slot:e[11],showSelect:e[0]}}),{key:a,first:null,c(){t=Ie(),J(l.$$.fragment),this.h()},l(c){t=Ie(),K(l.$$.fragment,c),this.h()},h(){this.first=t},m(c,f){A(c,t,f),Q(l,c,f),r=!0},p(c,f){e=c;const u={};f&2&&(u.slot=e[11]),f&1&&(u.showSelect=e[0]),l.$set(u)},i(c){r||(P(l.$$.fragment,c),r=!0)},o(c){O(l.$$.fragment,c),r=!1},d(c){c&&d(t),Y(l,c)}}}function wt(a){let e,t;return{c(){e=p("p"),t=E("No Saved Games"),this.h()},l(l){e=g(l,"P",{class:!0});var r=b(e);t=S(r,"No Saved Games"),r.forEach(d),this.h()},h(){m(e,"class","svelte-vwdp3r")},m(l,r){A(l,e,r),s(e,t)},d(l){l&&d(e)}}}function nl(a){let e,t,l,r,c,f,u,o,i,n,_,v;function z(h){a[7](h)}let y={borderColor:"white"};a[0]!==void 0&&(y.checked=a[0]),t=new Dt({props:y}),Et.push(()=>St(t,"checked",z)),c=new ie({props:{type:"text",size:"verysmall",$$slots:{default:[ll]},$$scope:{ctx:a}}}),c.$on("click",a[8]),u=new ie({props:{type:"text",size:"verysmall",$$slots:{default:[sl]},$$scope:{ctx:a}}}),u.$on("click",a[9]),i=new ie({props:{type:"text",size:"verysmall",$$slots:{default:[al]},$$scope:{ctx:a}}}),i.$on("click",a[6]);let k=a[1]&&bt(a);return{c(){e=p("div"),J(t.$$.fragment),r=D(),J(c.$$.fragment),f=D(),J(u.$$.fragment),o=D(),J(i.$$.fragment),n=D(),_=p("div"),k&&k.c(),this.h()},l(h){e=g(h,"DIV",{class:!0});var $=b(e);K(t.$$.fragment,$),r=T($),K(c.$$.fragment,$),f=T($),K(u.$$.fragment,$),o=T($),K(i.$$.fragment,$),$.forEach(d),n=T(h),_=g(h,"DIV",{slot:!0,class:!0});var C=b(_);k&&k.l(C),C.forEach(d),this.h()},h(){m(e,"class","mass-select svelte-vwdp3r"),m(_,"slot","sidebar"),m(_,"class","savegames svelte-vwdp3r")},m(h,$){A(h,e,$),Q(t,e,null),s(e,r),Q(c,e,null),s(e,f),Q(u,e,null),s(e,o),Q(i,e,null),A(h,n,$),A(h,_,$),k&&k.m(_,null),v=!0},p(h,$){const C={};!l&&$&1&&(l=!0,C.checked=h[0],yt(()=>l=!1)),t.$set(C);const j={};$&16384&&(j.$$scope={dirty:$,ctx:h}),c.$set(j);const W={};$&16384&&(W.$$scope={dirty:$,ctx:h}),u.$set(W);const Z={};$&16384&&(Z.$$scope={dirty:$,ctx:h}),i.$set(Z),h[1]?k?(k.p(h,$),$&2&&P(k,1)):(k=bt(h),k.c(),P(k,1),k.m(_,null)):k&&(Pe(),O(k,1,1,()=>{k=null}),Ce())},i(h){v||(P(t.$$.fragment,h),P(c.$$.fragment,h),P(u.$$.fragment,h),P(i.$$.fragment,h),P(k),v=!0)},o(h){O(t.$$.fragment,h),O(c.$$.fragment,h),O(u.$$.fragment,h),O(i.$$.fragment,h),O(k),v=!1},d(h){h&&d(e),Y(t),Y(c),Y(u),Y(i),h&&d(n),h&&d(_),k&&k.d()}}}function rl(a){let e;return{c(){e=E("Play")},l(t){e=S(t,"Play")},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function cl(a){let e;return{c(){e=E("Play")},l(t){e=S(t,"Play")},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function ol(a){let e;return{c(){e=E("Play")},l(t){e=S(t,"Play")},m(t,l){A(t,e,l)},d(t){t&&d(e)}}}function il(a){let e,t,l,r,c,f,u,o,i,n,_,v,z,y,k,h,$,C,j,W,Z,x,fe,V,R,de,X,ee,H,he,B,le,G,me,se,ve,$e,w,I,te,U,q,N,M,pe,Me,Oe,ge,Be,He,be,Ae,Le,ke,ae,Ne,ne,we,Ve,Re,ye,qe,Te;return H=new ie({props:{size:"small",$$slots:{default:[rl]},$$scope:{ctx:a}}}),H.$on("click",a[2]),q=new ie({props:{size:"small",$$slots:{default:[cl]},$$scope:{ctx:a}}}),q.$on("click",a[3]),ae=new ie({props:{size:"small",$$slots:{default:[ol]},$$scope:{ctx:a}}}),ae.$on("click",a[4]),{c(){e=p("div"),t=p("section"),l=p("h2"),r=E("Standard"),c=D(),f=p("table"),u=p("thead"),o=p("th"),i=E("Difficulty"),n=D(),_=p("th"),v=E("Size"),z=D(),y=p("th"),k=E("Mines"),h=D(),$=p("tbody"),C=p("tr"),j=p("td"),W=E("Easy"),Z=D(),x=p("td"),fe=E("8x8"),V=D(),R=p("td"),de=E("10"),X=D(),ee=p("td"),J(H.$$.fragment),he=D(),B=p("tr"),le=p("td"),G=E("Medium"),me=D(),se=p("td"),ve=E("12x12"),$e=D(),w=p("td"),I=E("20"),te=D(),U=p("td"),J(q.$$.fragment),N=D(),M=p("tr"),pe=p("td"),Me=E("Hard"),Oe=D(),ge=p("td"),Be=E("16x16"),He=D(),be=p("td"),Ae=E("40"),Le=D(),ke=p("td"),J(ae.$$.fragment),Ne=D(),ne=p("section"),we=p("h2"),Ve=E("Custom"),Re=D(),ye=p("p"),qe=E("TODO!!!"),this.h()},l(L){e=g(L,"DIV",{class:!0,slot:!0});var F=b(e);t=g(F,"SECTION",{class:!0});var ue=b(t);l=g(ue,"H2",{class:!0});var De=b(l);r=S(De,"Standard"),De.forEach(d),c=T(ue),f=g(ue,"TABLE",{class:!0});var _e=b(f);u=g(_e,"THEAD",{class:!0});var Ee=b(u);o=g(Ee,"TH",{class:!0});var Ke=b(o);i=S(Ke,"Difficulty"),Ke.forEach(d),n=T(Ee),_=g(Ee,"TH",{class:!0});var Qe=b(_);v=S(Qe,"Size"),Qe.forEach(d),z=T(Ee),y=g(Ee,"TH",{class:!0});var Ye=b(y);k=S(Ye,"Mines"),Ye.forEach(d),Ee.forEach(d),h=T(_e),$=g(_e,"TBODY",{});var Se=b($);C=g(Se,"TR",{});var re=b(C);j=g(re,"TD",{class:!0});var We=b(j);W=S(We,"Easy"),We.forEach(d),Z=T(re),x=g(re,"TD",{class:!0});var Xe=b(x);fe=S(Xe,"8x8"),Xe.forEach(d),V=T(re),R=g(re,"TD",{class:!0});var Ze=b(R);de=S(Ze,"10"),Ze.forEach(d),X=T(re),ee=g(re,"TD",{class:!0});var xe=b(ee);K(H.$$.fragment,xe),xe.forEach(d),re.forEach(d),he=T(Se),B=g(Se,"TR",{});var ce=b(B);le=g(ce,"TD",{class:!0});var et=b(le);G=S(et,"Medium"),et.forEach(d),me=T(ce),se=g(ce,"TD",{class:!0});var tt=b(se);ve=S(tt,"12x12"),tt.forEach(d),$e=T(ce),w=g(ce,"TD",{class:!0});var lt=b(w);I=S(lt,"20"),lt.forEach(d),te=T(ce),U=g(ce,"TD",{class:!0});var st=b(U);K(q.$$.fragment,st),st.forEach(d),ce.forEach(d),N=T(Se),M=g(Se,"TR",{});var oe=b(M);pe=g(oe,"TD",{class:!0});var at=b(pe);Me=S(at,"Hard"),at.forEach(d),Oe=T(oe),ge=g(oe,"TD",{class:!0});var nt=b(ge);Be=S(nt,"16x16"),nt.forEach(d),He=T(oe),be=g(oe,"TD",{class:!0});var rt=b(be);Ae=S(rt,"40"),rt.forEach(d),Le=T(oe),ke=g(oe,"TD",{class:!0});var ct=b(ke);K(ae.$$.fragment,ct),ct.forEach(d),oe.forEach(d),Se.forEach(d),_e.forEach(d),ue.forEach(d),Ne=T(F),ne=g(F,"SECTION",{class:!0});var ze=b(ne);we=g(ze,"H2",{class:!0});var ot=b(we);Ve=S(ot,"Custom"),ot.forEach(d),Re=T(ze),ye=g(ze,"P",{});var it=b(ye);qe=S(it,"TODO!!!"),it.forEach(d),ze.forEach(d),F.forEach(d),this.h()},h(){m(l,"class","svelte-vwdp3r"),m(o,"class","svelte-vwdp3r"),m(_,"class","svelte-vwdp3r"),m(y,"class","svelte-vwdp3r"),m(u,"class","svelte-vwdp3r"),m(j,"class","svelte-vwdp3r"),m(x,"class","svelte-vwdp3r"),m(R,"class","svelte-vwdp3r"),m(ee,"class","svelte-vwdp3r"),m(le,"class","svelte-vwdp3r"),m(se,"class","svelte-vwdp3r"),m(w,"class","svelte-vwdp3r"),m(U,"class","svelte-vwdp3r"),m(pe,"class","svelte-vwdp3r"),m(ge,"class","svelte-vwdp3r"),m(be,"class","svelte-vwdp3r"),m(ke,"class","svelte-vwdp3r"),m(f,"class","svelte-vwdp3r"),m(t,"class","presets"),m(we,"class","svelte-vwdp3r"),m(ne,"class","custom"),m(e,"class","content svelte-vwdp3r"),m(e,"slot","content")},m(L,F){A(L,e,F),s(e,t),s(t,l),s(l,r),s(t,c),s(t,f),s(f,u),s(u,o),s(o,i),s(u,n),s(u,_),s(_,v),s(u,z),s(u,y),s(y,k),s(f,h),s(f,$),s($,C),s(C,j),s(j,W),s(C,Z),s(C,x),s(x,fe),s(C,V),s(C,R),s(R,de),s(C,X),s(C,ee),Q(H,ee,null),s($,he),s($,B),s(B,le),s(le,G),s(B,me),s(B,se),s(se,ve),s(B,$e),s(B,w),s(w,I),s(B,te),s(B,U),Q(q,U,null),s($,N),s($,M),s(M,pe),s(pe,Me),s(M,Oe),s(M,ge),s(ge,Be),s(M,He),s(M,be),s(be,Ae),s(M,Le),s(M,ke),Q(ae,ke,null),s(e,Ne),s(e,ne),s(ne,we),s(we,Ve),s(ne,Re),s(ne,ye),s(ye,qe),Te=!0},p(L,F){const ue={};F&16384&&(ue.$$scope={dirty:F,ctx:L}),H.$set(ue);const De={};F&16384&&(De.$$scope={dirty:F,ctx:L}),q.$set(De);const _e={};F&16384&&(_e.$$scope={dirty:F,ctx:L}),ae.$set(_e)},i(L){Te||(P(H.$$.fragment,L),P(q.$$.fragment,L),P(ae.$$.fragment,L),Te=!0)},o(L){O(H.$$.fragment,L),O(q.$$.fragment,L),O(ae.$$.fragment,L),Te=!1},d(L){L&&d(e),Y(H),Y(q),Y(ae)}}}function fl(a){let e,t;return e=new Ut({props:{$$slots:{content:[il],sidebar:[nl]},$$scope:{ctx:a}}}),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,r){Q(e,l,r),t=!0},p(l,[r]){const c={};r&16387&&(c.$$scope={dirty:r,ctx:l}),e.$set(c)},i(l){t||(P(e.$$.fragment,l),t=!0)},o(l){O(e.$$.fragment,l),t=!1},d(l){Y(e,l)}}}function dl(a,e,t){let l;At(a,vt,y=>t(1,l=y));const r=()=>{u(8)},c=()=>{u(12)},f=()=>{u(16)},u=y=>{jt(Ft(Jt[y])),zt(`${Gt}/play`)};let o=!1;const i=y=>{!o||l==null||l.forEach((k,h)=>{Nt(vt,l[h].selected=y,l)})},n=()=>{if(!!o)for(;;){const y=l.findIndex(k=>k.selected);if(y===-1)break;Tt(l[y].index)}};function _(y){o=y,t(0,o)}return[o,l,r,c,f,i,n,_,()=>i(!0),()=>i(!1)]}class ml extends je{constructor(e){super(),Fe(this,e,dl,fl,Je,{})}}export{ml as default};
