import{S as Ge,i as De,s as Ee,k as A,a as z,q as S,v as N,l as M,m as V,h as $,c as C,r as w,w as q,n as L,b as G,G as p,x as B,g as ee,t as b,d as te,f as k,u as x,y as R,o as Me,W as Ie,X as ze,Y as Ce,A as oe,H as Ve,e as le,Z as Le,_ as Ne,$ as qe}from"./index-35ca9ab3.js";import{t as pe,B as T,b as Be,C as Pe,d as Ae,c as $e,g as Re,M as Ue,G as ge,u as ve}from"./MiniBoard-edde8563.js";import{c as He}from"./singletons-2a96e98d.js";const Oe=""+new URL("../assets/delete-a7f9a337.svg",import.meta.url).href,We=""+new URL("../assets/play-563e3e7e.svg",import.meta.url).href;function Xe(a){let e;return{c(){e=S("Loading...")},l(l){e=w(l,"Loading...")},m(l,t){G(l,e,t)},p:oe,i:oe,o:oe,d(l){l&&$(e)}}}function Ye(a){let e,l;return e=new Ue({props:{game:a[2],showMines:a[2].state!==ge.Playing}}),{c(){N(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,n){const o={};n&4&&(o.game=t[2]),n&4&&(o.showMines=t[2].state!==ge.Playing),e.$set(o)},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function ke(a){let e,l,t;function n(c){a[6](c)}let o={borderColor:"white",size:1.15};return a[0].selected!==void 0&&(o.checked=a[0].selected),e=new Pe({props:o}),Ie.push(()=>ze(e,"checked",n)),{c(){N(e.$$.fragment)},l(c){q(e.$$.fragment,c)},m(c,f){B(e,c,f),t=!0},p(c,f){const u={};!l&&f&1&&(l=!0,u.checked=c[0].selected,Ce(()=>l=!1)),e.$set(u)},i(c){t||(k(e.$$.fragment,c),t=!0)},o(c){b(e.$$.fragment,c),t=!1},d(c){R(e,c)}}}function Ze(a){var fe,ue,_e,de,me;let e,l,t,n,o,c,f,u,i,s,h=((fe=a[2])==null?void 0:fe.width)+"",D,K,U=((ue=a[2])==null?void 0:ue.height)+"",d,r,_=pe((de=(_e=a[2])==null?void 0:_e.stats.timePlayed)!=null?de:0)+"",I,F,H=((me=a[2])==null?void 0:me.state)+"",Z,se,ne,E,O,ae,W,ie,X;const ce=[Ye,Xe],Y=[];function re(m,v){return m[2]?0:1}t=re(a),n=Y[t]=ce[t](a),O=new T({props:{type:"icon",iconSrc:Oe,size:"medium",padding:.1}}),O.$on("click",a[4]),W=new T({props:{type:"icon",iconSrc:We,size:"medium",padding:.1}}),W.$on("click",a[5]);let g=a[1]&&ke(a);return{c(){e=A("div"),l=A("div"),n.c(),o=z(),c=A("div"),f=A("p"),u=S(a[3]),i=z(),s=A("p"),D=S(h),K=S("x"),d=S(U),r=S(" ("),I=S(_),F=S(", "),Z=S(H),se=S(")"),ne=z(),E=A("div"),N(O.$$.fragment),ae=z(),N(W.$$.fragment),ie=z(),g&&g.c(),this.h()},l(m){e=M(m,"DIV",{class:!0});var v=V(e);l=M(v,"DIV",{class:!0});var J=V(l);n.l(J),J.forEach($),o=C(v),c=M(v,"DIV",{class:!0});var j=V(c);f=M(j,"P",{class:!0});var Q=V(f);u=w(Q,a[3]),Q.forEach($),i=C(j),s=M(j,"P",{class:!0});var y=V(s);D=w(y,h),K=w(y,"x"),d=w(y,U),r=w(y," ("),I=w(y,_),F=w(y,", "),Z=w(y,H),se=w(y,")"),y.forEach($),j.forEach($),ne=C(v),E=M(v,"DIV",{class:!0});var P=V(E);q(O.$$.fragment,P),ae=C(P),q(W.$$.fragment,P),ie=C(P),g&&g.l(P),P.forEach($),v.forEach($),this.h()},h(){L(l,"class","miniboard svelte-8lsehp"),L(f,"class","name svelte-8lsehp"),L(s,"class","size svelte-8lsehp"),L(c,"class","info svelte-8lsehp"),L(E,"class","right svelte-8lsehp"),L(e,"class","wrapper svelte-8lsehp")},m(m,v){G(m,e,v),p(e,l),Y[t].m(l,null),p(e,o),p(e,c),p(c,f),p(f,u),p(c,i),p(c,s),p(s,D),p(s,K),p(s,d),p(s,r),p(s,I),p(s,F),p(s,Z),p(s,se),p(e,ne),p(e,E),B(O,E,null),p(E,ae),B(W,E,null),p(E,ie),g&&g.m(E,null),X=!0},p(m,[v]){var j,Q,y,P,he;let J=t;t=re(m),t===J?Y[t].p(m,v):(ee(),b(Y[J],1,1,()=>{Y[J]=null}),te(),n=Y[t],n?n.p(m,v):(n=Y[t]=ce[t](m),n.c()),k(n,1),n.m(l,null)),(!X||v&4)&&h!==(h=((j=m[2])==null?void 0:j.width)+"")&&x(D,h),(!X||v&4)&&U!==(U=((Q=m[2])==null?void 0:Q.height)+"")&&x(d,U),(!X||v&4)&&_!==(_=pe((P=(y=m[2])==null?void 0:y.stats.timePlayed)!=null?P:0)+"")&&x(I,_),(!X||v&4)&&H!==(H=((he=m[2])==null?void 0:he.state)+"")&&x(Z,H),m[1]?g?(g.p(m,v),v&2&&k(g,1)):(g=ke(m),g.c(),k(g,1),g.m(E,null)):g&&(ee(),b(g,1,1,()=>{g=null}),te())},i(m){X||(k(n),k(O.$$.fragment,m),k(W.$$.fragment,m),k(g),X=!0)},o(m){b(n),b(O.$$.fragment,m),b(W.$$.fragment,m),b(g),X=!1},d(m){m&&$(e),Y[t].d(),R(O),R(W),g&&g.d()}}}function je(a,e,l){let{showSelect:t=!1}=e,{slot:n}=e,o=`Save Game ${n.index}`,c;Me(()=>{l(2,c=Be(n.index))});const f=()=>{Ae(n.index)},u=()=>{$e.set(-1),$e.set(n.index),Re(`${He}/play`)};function i(s){a.$$.not_equal(n.selected,s)&&(n.selected=s,l(0,n))}return a.$$set=s=>{"showSelect"in s&&l(1,t=s.showSelect),"slot"in s&&l(0,n=s.slot)},[n,t,c,o,f,u,i]}class Fe extends Ge{constructor(e){super(),De(this,e,je,Ze,Ee,{showSelect:1,slot:0})}}function be(a,e,l){const t=a.slice();return t[7]=e[l],t}function Je(a){let e;return{c(){e=S("Select All")},l(l){e=w(l,"Select All")},m(l,t){G(l,e,t)},d(l){l&&$(e)}}}function Ke(a){let e;return{c(){e=S("Deselect All")},l(l){e=w(l,"Deselect All")},m(l,t){G(l,e,t)},d(l){l&&$(e)}}}function Qe(a){let e;return{c(){e=S("Delete Selected")},l(l){e=w(l,"Delete Selected")},m(l,t){G(l,e,t)},d(l){l&&$(e)}}}function Se(a){let e=[],l=new Map,t,n,o,c=a[1];const f=i=>i[7].index;for(let i=0;i<c.length;i+=1){let s=be(a,c,i),h=f(s);l.set(h,e[i]=we(h,s))}let u=a[1].length===0&&ye();return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=z(),u&&u.c(),n=le()},l(i){for(let s=0;s<e.length;s+=1)e[s].l(i);t=C(i),u&&u.l(i),n=le()},m(i,s){for(let h=0;h<e.length;h+=1)e[h].m(i,s);G(i,t,s),u&&u.m(i,s),G(i,n,s),o=!0},p(i,s){s&3&&(c=i[1],ee(),e=Le(e,s,f,1,i,c,l,t.parentNode,Ne,we,t,be),te()),i[1].length===0?u||(u=ye(),u.c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null)},i(i){if(!o){for(let s=0;s<c.length;s+=1)k(e[s]);o=!0}},o(i){for(let s=0;s<e.length;s+=1)b(e[s]);o=!1},d(i){for(let s=0;s<e.length;s+=1)e[s].d(i);i&&$(t),u&&u.d(i),i&&$(n)}}}function we(a,e){let l,t,n;return t=new Fe({props:{slot:e[7],showSelect:e[0]}}),{key:a,first:null,c(){l=le(),N(t.$$.fragment),this.h()},l(o){l=le(),q(t.$$.fragment,o),this.h()},h(){this.first=l},m(o,c){G(o,l,c),B(t,o,c),n=!0},p(o,c){e=o;const f={};c&2&&(f.slot=e[7]),c&1&&(f.showSelect=e[0]),t.$set(f)},i(o){n||(k(t.$$.fragment,o),n=!0)},o(o){b(t.$$.fragment,o),n=!1},d(o){o&&$(l),R(t,o)}}}function ye(a){let e,l;return{c(){e=A("p"),l=S("No Saved Games"),this.h()},l(t){e=M(t,"P",{class:!0});var n=V(e);l=w(n,"No Saved Games"),n.forEach($),this.h()},h(){L(e,"class","svelte-154apux")},m(t,n){G(t,e,n),p(e,l)},d(t){t&&$(e)}}}function Te(a){let e,l,t,n,o,c,f,u,i,s,h,D;function K(r){a[4](r)}let U={borderColor:"white"};a[0]!==void 0&&(U.checked=a[0]),l=new Pe({props:U}),Ie.push(()=>ze(l,"checked",K)),o=new T({props:{type:"text",size:"verysmall",$$slots:{default:[Je]},$$scope:{ctx:a}}}),o.$on("click",a[5]),f=new T({props:{type:"text",size:"verysmall",$$slots:{default:[Ke]},$$scope:{ctx:a}}}),f.$on("click",a[6]),i=new T({props:{type:"text",size:"verysmall",$$slots:{default:[Qe]},$$scope:{ctx:a}}}),i.$on("click",a[3]);let d=a[1]&&Se(a);return{c(){e=A("div"),N(l.$$.fragment),n=z(),N(o.$$.fragment),c=z(),N(f.$$.fragment),u=z(),N(i.$$.fragment),s=z(),h=A("div"),d&&d.c(),this.h()},l(r){e=M(r,"DIV",{class:!0});var _=V(e);q(l.$$.fragment,_),n=C(_),q(o.$$.fragment,_),c=C(_),q(f.$$.fragment,_),u=C(_),q(i.$$.fragment,_),_.forEach($),s=C(r),h=M(r,"DIV",{class:!0});var I=V(h);d&&d.l(I),I.forEach($),this.h()},h(){L(e,"class","mass-select svelte-154apux"),L(h,"class","savegames svelte-154apux")},m(r,_){G(r,e,_),B(l,e,null),p(e,n),B(o,e,null),p(e,c),B(f,e,null),p(e,u),B(i,e,null),G(r,s,_),G(r,h,_),d&&d.m(h,null),D=!0},p(r,[_]){const I={};!t&&_&1&&(t=!0,I.checked=r[0],Ce(()=>t=!1)),l.$set(I);const F={};_&1024&&(F.$$scope={dirty:_,ctx:r}),o.$set(F);const H={};_&1024&&(H.$$scope={dirty:_,ctx:r}),f.$set(H);const Z={};_&1024&&(Z.$$scope={dirty:_,ctx:r}),i.$set(Z),r[1]?d?(d.p(r,_),_&2&&k(d,1)):(d=Se(r),d.c(),k(d,1),d.m(h,null)):d&&(ee(),b(d,1,1,()=>{d=null}),te())},i(r){D||(k(l.$$.fragment,r),k(o.$$.fragment,r),k(f.$$.fragment,r),k(i.$$.fragment,r),k(d),D=!0)},o(r){b(l.$$.fragment,r),b(o.$$.fragment,r),b(f.$$.fragment,r),b(i.$$.fragment,r),b(d),D=!1},d(r){r&&$(e),R(l),R(o),R(f),R(i),r&&$(s),r&&$(h),d&&d.d()}}}function xe(a,e,l){let t;Ve(a,ve,s=>l(1,t=s));let n=!1;const o=s=>{!n||t.forEach((h,D)=>{qe(ve,t[D].selected=s,t)})},c=()=>{if(!!n)for(;;){const s=t.findIndex(h=>h.selected);if(s===-1)break;Ae(t[s].index)}};function f(s){n=s,l(0,n)}return[n,t,o,c,f,()=>o(!0),()=>o(!1)]}class st extends Ge{constructor(e){super(),De(this,e,xe,Te,Ee,{})}}export{st as S};
