import{S as fe,i as de,s as _e,k as p,a as y,q as S,l as g,m as b,h as u,c as G,r as w,n as d,I as Ge,p as Ne,b as q,G as o,J as pe,g as ke,t as M,d as Te,f as I,u as ue,K as Pe,A as he,v as ae,w as ne,x as oe,y as re,B as ge,D as ve,E as $e,F as be,L as Re,H as Ae,e as je,M as Fe}from"../../chunks/index-61ba0940.js";import{l as qe,d as ze,c as Je,g as Le,M as Ke,v as Ie,u as Qe,a as We,n as Xe,B as Ye}from"../../chunks/MiniBoard-d02bee88.js";import{c as Ve}from"../../chunks/singletons-6ded0c3e.js";const Ze=""+new URL("../../assets/delete-685fc792.svg",import.meta.url).href,xe=""+new URL("../../assets/play-8408aa2d.svg",import.meta.url).href;function et(n){let e;return{c(){e=S("Loading...")},l(s){e=w(s,"Loading...")},m(s,t){q(s,e,t)},p:he,i:he,o:he,d(s){s&&u(e)}}}function tt(n){let e,s;return e=new Ke({props:{game:n[1]}}),{c(){ae(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,l){oe(e,t,l),s=!0},p(t,l){const a={};l&2&&(a.game=t[1]),e.$set(a)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){re(e,t)}}}function st(n){var Z,le,ee;let e,s,t,l,a,i,r,c,v,f,m=((Z=n[1])==null?void 0:Z.width)+"",C,z,O=((le=n[1])==null?void 0:le.height)+"",H,U,P=((ee=n[1])==null?void 0:ee.state)+"",T,J,E,h,k,N,K,L,V,D,X,A,x,W;const se=[tt,et],F=[];function Y(_,$){return _[1]?0:1}return t=Y(n),l=F[t]=se[t](n),{c(){e=p("div"),s=p("div"),l.c(),a=y(),i=p("div"),r=p("p"),c=S(n[0]),v=y(),f=p("p"),C=S(m),z=S("x"),H=S(O),U=S(" ("),T=S(P),J=S(")"),E=y(),h=p("div"),k=p("button"),N=p("img"),L=y(),V=p("button"),D=p("img"),this.h()},l(_){e=g(_,"DIV",{class:!0});var $=b(e);s=g($,"DIV",{class:!0});var j=b(s);l.l(j),j.forEach(u),a=G($),i=g($,"DIV",{class:!0});var R=b(i);r=g(R,"P",{class:!0});var Q=b(r);c=w(Q,n[0]),Q.forEach(u),v=G(R),f=g(R,"P",{class:!0});var B=b(f);C=w(B,m),z=w(B,"x"),H=w(B,O),U=w(B," ("),T=w(B,P),J=w(B,")"),B.forEach(u),R.forEach(u),E=G($),h=g($,"DIV",{class:!0});var te=b(h);k=g(te,"BUTTON",{class:!0});var ce=b(k);N=g(ce,"IMG",{alt:!0,src:!0,class:!0,draggable:!0}),ce.forEach(u),L=G(te),V=g(te,"BUTTON",{class:!0});var ie=b(V);D=g(ie,"IMG",{alt:!0,src:!0,class:!0,draggable:!0}),ie.forEach(u),te.forEach(u),$.forEach(u),this.h()},h(){d(s,"class","miniboard svelte-3ogpkh"),d(r,"class","name svelte-3ogpkh"),d(f,"class","size svelte-3ogpkh"),d(i,"class","info svelte-3ogpkh"),d(N,"alt","delete"),Ge(N.src,K=Ze)||d(N,"src",K),d(N,"class","delete svelte-3ogpkh"),d(N,"draggable","false"),Ne(N,"stroke","whitesmoke",!1),d(k,"class","delete unstyled svelte-3ogpkh"),d(D,"alt","play"),Ge(D.src,X=xe)||d(D,"src",X),d(D,"class","delete svelte-3ogpkh"),d(D,"draggable","false"),Ne(D,"stroke","whitesmoke",!1),d(V,"class","play unstyled svelte-3ogpkh"),d(h,"class","right svelte-3ogpkh"),d(e,"class","wrapper svelte-3ogpkh")},m(_,$){q(_,e,$),o(e,s),F[t].m(s,null),o(e,a),o(e,i),o(i,r),o(r,c),o(i,v),o(i,f),o(f,C),o(f,z),o(f,H),o(f,U),o(f,T),o(f,J),o(e,E),o(e,h),o(h,k),o(k,N),o(h,L),o(h,V),o(V,D),A=!0,x||(W=[pe(k,"click",n[2]),pe(V,"click",n[3])],x=!0)},p(_,[$]){var R,Q,B;let j=t;t=Y(_),t===j?F[t].p(_,$):(ke(),M(F[j],1,1,()=>{F[j]=null}),Te(),l=F[t],l?l.p(_,$):(l=F[t]=se[t](_),l.c()),I(l,1),l.m(s,null)),(!A||$&1)&&ue(c,_[0]),(!A||$&2)&&m!==(m=((R=_[1])==null?void 0:R.width)+"")&&ue(C,m),(!A||$&2)&&O!==(O=((Q=_[1])==null?void 0:Q.height)+"")&&ue(H,O),(!A||$&2)&&P!==(P=((B=_[1])==null?void 0:B.state)+"")&&ue(T,P)},i(_){A||(I(l),A=!0)},o(_){M(l),A=!1},d(_){_&&u(e),F[t].d(),x=!1,Pe(W)}}}function lt(n,e,s){let t,l,{slot:a}=e;const i=()=>{ze(a)},r=()=>{Je.set(a),Le(`${Ve}/game`)};return n.$$set=c=>{"slot"in c&&s(4,a=c.slot)},n.$$.update=()=>{n.$$.dirty&16&&s(1,t=qe(a)),n.$$.dirty&16&&s(0,l=`Save Game ${a}`)},[l,t,i,r,a]}class at extends fe{constructor(e){super(),de(this,e,lt,st,_e,{slot:4})}}const nt=n=>({}),Oe=n=>({class:"content"}),ot=n=>({}),Ue=n=>({});function rt(n){let e,s,t,l,a,i,r,c,v,f,m,C,z,O,H,U;const P=n[1].sidebar,T=ge(P,n,n[0],Ue),J=n[1].content,E=ge(J,n,n[0],Oe);return{c(){e=p("main"),s=p("aside"),t=p("header"),l=p("h1"),a=S("MineSweeper"),i=y(),r=p("h3"),c=S("By SFG and TMH"),v=y(),f=p("hr"),m=y(),T&&T.c(),C=y(),E&&E.c(),z=y(),O=p("footer"),H=S(Ie),this.h()},l(h){e=g(h,"MAIN",{class:!0});var k=b(e);s=g(k,"ASIDE",{class:!0});var N=b(s);t=g(N,"HEADER",{class:!0});var K=b(t);l=g(K,"H1",{id:!0,class:!0});var L=b(l);a=w(L,"MineSweeper"),L.forEach(u),i=G(K),r=g(K,"H3",{id:!0,class:!0});var V=b(r);c=w(V,"By SFG and TMH"),V.forEach(u),K.forEach(u),v=G(N),f=g(N,"HR",{class:!0}),m=G(N),T&&T.l(N),N.forEach(u),C=G(k),E&&E.l(k),z=G(k),O=g(k,"FOOTER",{class:!0});var D=b(O);H=w(D,Ie),D.forEach(u),k.forEach(u),this.h()},h(){d(l,"id","title"),d(l,"class","svelte-16mcjit"),d(r,"id","creator"),d(r,"class","svelte-16mcjit"),d(t,"class","svelte-16mcjit"),d(f,"class","svelte-16mcjit"),d(s,"class","sidebar svelte-16mcjit"),d(O,"class","version svelte-16mcjit"),d(e,"class","wrapper svelte-16mcjit")},m(h,k){q(h,e,k),o(e,s),o(s,t),o(t,l),o(l,a),o(t,i),o(t,r),o(r,c),o(s,v),o(s,f),o(s,m),T&&T.m(s,null),o(e,C),E&&E.m(e,null),o(e,z),o(e,O),o(O,H),U=!0},p(h,[k]){T&&T.p&&(!U||k&1)&&ve(T,P,h,h[0],U?be(P,h[0],k,ot):$e(h[0]),Ue),E&&E.p&&(!U||k&1)&&ve(E,J,h,h[0],U?be(J,h[0],k,nt):$e(h[0]),Oe)},i(h){U||(I(T,h),I(E,h),U=!0)},o(h){M(T,h),M(E,h),U=!1},d(h){h&&u(e),T&&T.d(h),E&&E.d(h)}}}function ct(n,e,s){let{$$slots:t={},$$scope:l}=e;return n.$$set=a=>{"$$scope"in a&&s(0,l=a.$$scope)},[l,t]}class it extends fe{constructor(e){super(),de(this,e,ct,rt,_e,{})}}function ut(n){let e,s,t,l;const a=n[2].default,i=ge(a,n,n[1],null);return{c(){e=p("button"),i&&i.c(),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var c=b(e);i&&i.l(c),c.forEach(u),this.h()},h(){e.disabled=n[0],d(e,"class","svelte-1bjd3ab")},m(r,c){q(r,e,c),i&&i.m(e,null),s=!0,t||(l=pe(e,"click",n[3]),t=!0)},p(r,[c]){i&&i.p&&(!s||c&2)&&ve(i,a,r,r[1],s?be(a,r[1],c,null):$e(r[1]),null),(!s||c&1)&&(e.disabled=r[0])},i(r){s||(I(i,r),s=!0)},o(r){M(i,r),s=!1},d(r){r&&u(e),i&&i.d(r),t=!1,l()}}}function ft(n,e,s){let{$$slots:t={},$$scope:l}=e,{disabled:a=!1}=e;function i(r){Re.call(this,n,r)}return n.$$set=r=>{"disabled"in r&&s(0,a=r.disabled),"$$scope"in r&&s(1,l=r.$$scope)},[a,l,t,i]}class me extends fe{constructor(e){super(),de(this,e,ft,ut,_e,{disabled:0})}}function De(n,e,s){const t=n.slice();return t[3]=e[s],t}function He(n){let e,s,t,l=n[0],a=[];for(let c=0;c<l.length;c+=1)a[c]=Me(De(n,l,c));const i=c=>M(a[c],1,1,()=>{a[c]=null});let r=n[0].length===0&&Ce();return{c(){for(let c=0;c<a.length;c+=1)a[c].c();e=y(),r&&r.c(),s=je()},l(c){for(let v=0;v<a.length;v+=1)a[v].l(c);e=G(c),r&&r.l(c),s=je()},m(c,v){for(let f=0;f<a.length;f+=1)a[f].m(c,v);q(c,e,v),r&&r.m(c,v),q(c,s,v),t=!0},p(c,v){if(v&1){l=c[0];let f;for(f=0;f<l.length;f+=1){const m=De(c,l,f);a[f]?(a[f].p(m,v),I(a[f],1)):(a[f]=Me(m),a[f].c(),I(a[f],1),a[f].m(e.parentNode,e))}for(ke(),f=l.length;f<a.length;f+=1)i(f);Te()}c[0].length===0?r||(r=Ce(),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},i(c){if(!t){for(let v=0;v<l.length;v+=1)I(a[v]);t=!0}},o(c){a=a.filter(Boolean);for(let v=0;v<a.length;v+=1)M(a[v]);t=!1},d(c){Fe(a,c),c&&u(e),r&&r.d(c),c&&u(s)}}}function Me(n){let e,s;return e=new at({props:{slot:n[3]}}),{c(){ae(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,l){oe(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.slot=t[3]),e.$set(a)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){re(e,t)}}}function Ce(n){let e,s;return{c(){e=p("p"),s=S("No Saved Games"),this.h()},l(t){e=g(t,"P",{class:!0});var l=b(e);s=w(l,"No Saved Games"),l.forEach(u),this.h()},h(){d(e,"class","svelte-fcpjc1")},m(t,l){q(t,e,l),o(e,s)},d(t){t&&u(e)}}}function dt(n){let e,s,t=n[0]&&He(n);return{c(){e=p("div"),t&&t.c(),this.h()},l(l){e=g(l,"DIV",{slot:!0,class:!0});var a=b(e);t&&t.l(a),a.forEach(u),this.h()},h(){d(e,"slot","sidebar"),d(e,"class","savegames svelte-fcpjc1")},m(l,a){q(l,e,a),t&&t.m(e,null),s=!0},p(l,a){l[0]?t?(t.p(l,a),a&1&&I(t,1)):(t=He(l),t.c(),I(t,1),t.m(e,null)):t&&(ke(),M(t,1,1,()=>{t=null}),Te())},i(l){s||(I(t),s=!0)},o(l){M(t),s=!1},d(l){l&&u(e),t&&t.d()}}}function _t(n){let e;return{c(){e=S("New Game")},l(s){e=w(s,"New Game")},m(s,t){q(s,e,t)},d(s){s&&u(e)}}}function ht(n){let e;return{c(){e=S("Button Testing")},l(s){e=w(s,"Button Testing")},m(s,t){q(s,e,t)},d(s){s&&u(e)}}}function mt(n){let e;return{c(){e=S("Button Testing")},l(s){e=w(s,"Button Testing")},m(s,t){q(s,e,t)},d(s){s&&u(e)}}}function pt(n){let e,s,t,l,a,i,r,c,v,f,m,C,z,O,H,U,P,T,J,E,h,k,N,K,L,V,D,X,A,x,W,se,F,Y,Z,le,ee;return i=new me({props:{$$slots:{default:[_t]},$$scope:{ctx:n}}}),i.$on("click",n[1]),T=new me({props:{$$slots:{default:[ht]},$$scope:{ctx:n}}}),E=new me({props:{disabled:!0,$$slots:{default:[mt]},$$scope:{ctx:n}}}),{c(){e=p("div"),s=p("section"),t=p("h2"),l=S("Standard"),a=y(),ae(i.$$.fragment),r=y(),c=p("h3"),v=S("Button Styles"),f=y(),m=p("div"),C=p("button"),z=S("Button Testing"),O=y(),H=p("button"),U=S("Button Testing"),P=y(),ae(T.$$.fragment),J=y(),ae(E.$$.fragment),h=y(),k=p("button"),N=S("Button Testing"),K=y(),L=p("button"),V=S("Button Testing"),D=y(),X=p("button"),A=S("Button Testing"),x=y(),W=p("button"),se=S("Button Testing"),F=y(),Y=p("section"),Z=p("h2"),le=S("Custom"),this.h()},l(_){e=g(_,"DIV",{class:!0,slot:!0});var $=b(e);s=g($,"SECTION",{class:!0});var j=b(s);t=g(j,"H2",{});var R=b(t);l=w(R,"Standard"),R.forEach(u),a=G(j),ne(i.$$.fragment,j),r=G(j),c=g(j,"H3",{});var Q=b(c);v=w(Q,"Button Styles"),Q.forEach(u),f=G(j),m=g(j,"DIV",{class:!0});var B=b(m);C=g(B,"BUTTON",{});var te=b(C);z=w(te,"Button Testing"),te.forEach(u),O=G(B),H=g(B,"BUTTON",{});var ce=b(H);U=w(ce,"Button Testing"),ce.forEach(u),P=G(B),ne(T.$$.fragment,B),J=G(B),ne(E.$$.fragment,B),h=G(B),k=g(B,"BUTTON",{class:!0});var ie=b(k);N=w(ie,"Button Testing"),ie.forEach(u),K=G(B),L=g(B,"BUTTON",{class:!0});var Be=b(L);V=w(Be,"Button Testing"),Be.forEach(u),D=G(B),X=g(B,"BUTTON",{class:!0});var Ee=b(X);A=w(Ee,"Button Testing"),Ee.forEach(u),x=G(B),W=g(B,"BUTTON",{class:!0});var Se=b(W);se=w(Se,"Button Testing"),Se.forEach(u),B.forEach(u),j.forEach(u),F=G($),Y=g($,"SECTION",{class:!0});var we=b(Y);Z=g(we,"H2",{});var ye=b(Z);le=w(ye,"Custom"),ye.forEach(u),we.forEach(u),$.forEach(u),this.h()},h(){H.disabled=!0,d(k,"class","test2 svelte-fcpjc1"),L.disabled=!0,d(L,"class","test2 svelte-fcpjc1"),d(X,"class","test3 svelte-fcpjc1"),W.disabled=!0,d(W,"class","test3 svelte-fcpjc1"),d(m,"class","test-buttons svelte-fcpjc1"),d(s,"class","presets"),d(Y,"class","custom"),d(e,"class","content svelte-fcpjc1"),d(e,"slot","content")},m(_,$){q(_,e,$),o(e,s),o(s,t),o(t,l),o(s,a),oe(i,s,null),o(s,r),o(s,c),o(c,v),o(s,f),o(s,m),o(m,C),o(C,z),o(m,O),o(m,H),o(H,U),o(m,P),oe(T,m,null),o(m,J),oe(E,m,null),o(m,h),o(m,k),o(k,N),o(m,K),o(m,L),o(L,V),o(m,D),o(m,X),o(X,A),o(m,x),o(m,W),o(W,se),o(e,F),o(e,Y),o(Y,Z),o(Z,le),ee=!0},p(_,$){const j={};$&64&&(j.$$scope={dirty:$,ctx:_}),i.$set(j);const R={};$&64&&(R.$$scope={dirty:$,ctx:_}),T.$set(R);const Q={};$&64&&(Q.$$scope={dirty:$,ctx:_}),E.$set(Q)},i(_){ee||(I(i.$$.fragment,_),I(T.$$.fragment,_),I(E.$$.fragment,_),ee=!0)},o(_){M(i.$$.fragment,_),M(T.$$.fragment,_),M(E.$$.fragment,_),ee=!1},d(_){_&&u(e),re(i),re(T),re(E)}}}function gt(n){let e,s;return e=new it({props:{$$slots:{content:[pt],sidebar:[dt]},$$scope:{ctx:n}}}),{c(){ae(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,l){oe(e,t,l),s=!0},p(t,[l]){const a={};l&65&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){M(e.$$.fragment,t),s=!1},d(t){re(e,t)}}}let vt=12;function $t(n,e,s){let t;return Ae(n,Qe,a=>s(0,t=a)),[t,()=>{We(Xe(Ye[vt])),Le(`${Ve}/game`)}]}class Bt extends fe{constructor(e){super(),de(this,e,$t,gt,_e,{})}}export{Bt as default};
