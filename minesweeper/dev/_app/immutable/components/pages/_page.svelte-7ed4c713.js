import{S as ee,i as te,s as se,k as m,l as g,m as p,h as d,n as u,b as R,A as W,I as Ve,J as N,a as C,q as M,c as O,r as G,K as $e,p as ke,G as f,L as ae,g as re,t as H,d as ne,f as B,u as Z,M as Ue,v as oe,w as ie,x as ce,y as fe,B as ye,D as we,E as Ee,F as Se,H as Ae,e as Me}from"../../chunks/index-1de6b368.js";import{C as x,l as Pe,u as Le,d as qe,c as ze,g as Fe,v as Ge,n as Je,B as Ke}from"../../chunks/navigation-330d9319.js";import{c as Re}from"../../chunks/singletons-122a9cd9.js";const je=""+new URL("../../assets/delete-685fc792.svg",import.meta.url).href,Qe=""+new URL("../../assets/play-8408aa2d.svg",import.meta.url).href;function Ie(r,e,s){const t=r.slice();return t[2]=e[s],t[4]=s,t}function Be(r){let e;return{c(){e=m("div"),this.h()},l(s){e=g(s,"DIV",{class:!0}),p(e).forEach(d),this.h()},h(){u(e,"class","svelte-a0al8x"),N(e,"cell",r[2]),N(e,"mine",r[2].isMine),N(e,"empty",!r[2].isMine||r[2].isMine&&!r[0]),N(e,"flag",r[2].state===x.Flagged&&!r[0]),N(e,"open",r[2].state===x.Opened),N(e,"clicked-mine",r[1].lostToCell===r[4]&&r[0])},m(s,t){R(s,e,t)},p(s,t){t&2&&N(e,"cell",s[2]),t&2&&N(e,"mine",s[2].isMine),t&3&&N(e,"empty",!s[2].isMine||s[2].isMine&&!s[0]),t&3&&N(e,"flag",s[2].state===x.Flagged&&!s[0]),t&2&&N(e,"open",s[2].state===x.Opened),t&3&&N(e,"clicked-mine",s[1].lostToCell===s[4]&&s[0])},d(s){s&&d(e)}}}function We(r){let e,s,t=r[1].board,a=[];for(let l=0;l<t.length;l+=1)a[l]=Be(Ie(r,t,l));return{c(){e=m("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=g(l,"DIV",{class:!0,style:!0});var _=p(e);for(let o=0;o<a.length;o+=1)a[o].l(_);_.forEach(d),this.h()},h(){var l,_;u(e,"class","wrapper svelte-a0al8x"),u(e,"style",s=`grid-template-columns: repeat(${(l=r[1].width)!=null?l:2}, 1fr); grid-template-rows: repeat(${(_=r[1].height)!=null?_:2}, 1fr);`)},m(l,_){R(l,e,_);for(let o=0;o<a.length;o+=1)a[o].m(e,null)},p(l,[_]){var o,n;if(_&3){t=l[1].board;let c;for(c=0;c<t.length;c+=1){const i=Ie(l,t,c);a[c]?a[c].p(i,_):(a[c]=Be(i),a[c].c(),a[c].m(e,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=t.length}_&2&&s!==(s=`grid-template-columns: repeat(${(o=l[1].width)!=null?o:2}, 1fr); grid-template-rows: repeat(${(n=l[1].height)!=null?n:2}, 1fr);`)&&u(e,"style",s)},i:W,o:W,d(l){l&&d(e),Ve(a,l)}}}function Xe(r,e,s){let{showMines:t=!1}=e,{game:a}=e;return r.$$set=l=>{"showMines"in l&&s(0,t=l.showMines),"game"in l&&s(1,a=l.game)},[t,a]}class Ye extends ee{constructor(e){super(),te(this,e,Xe,We,se,{showMines:0,game:1})}}function Ze(r){let e;return{c(){e=M("Loading...")},l(s){e=G(s,"Loading...")},m(s,t){R(s,e,t)},p:W,i:W,o:W,d(s){s&&d(e)}}}function xe(r){let e,s;return e=new Ye({props:{game:r[1]}}),{c(){oe(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){ce(e,t,a),s=!0},p(t,a){const l={};a&2&&(l.game=t[1]),e.$set(l)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){fe(e,t)}}}function et(r){var me,ge,pe;let e,s,t,a,l,_,o,n,c,i,k=((me=r[1])==null?void 0:me.width)+"",I,V,S=((ge=r[1])==null?void 0:ge.height)+"",A,T,U=((pe=r[1])==null?void 0:pe.state)+"",b,z,y,h,v,w,J,j,L,D,ue,P,le,_e;const de=[xe,Ze],q=[];function he($,E){return $[1]?0:1}return t=he(r),a=q[t]=de[t](r),{c(){e=m("div"),s=m("div"),a.c(),l=C(),_=m("div"),o=m("p"),n=M(r[0]),c=C(),i=m("p"),I=M(k),V=M("x"),A=M(S),T=M(" ("),b=M(U),z=M(")"),y=C(),h=m("div"),v=m("button"),w=m("img"),j=C(),L=m("button"),D=m("img"),this.h()},l($){e=g($,"DIV",{class:!0});var E=p(e);s=g(E,"DIV",{class:!0});var Q=p(s);a.l(Q),Q.forEach(d),l=O(E),_=g(E,"DIV",{class:!0});var K=p(_);o=g(K,"P",{class:!0});var X=p(o);n=G(X,r[0]),X.forEach(d),c=O(K),i=g(K,"P",{class:!0});var F=p(i);I=G(F,k),V=G(F,"x"),A=G(F,S),T=G(F," ("),b=G(F,U),z=G(F,")"),F.forEach(d),K.forEach(d),y=O(E),h=g(E,"DIV",{class:!0});var Y=p(h);v=g(Y,"BUTTON",{class:!0});var ve=p(v);w=g(ve,"IMG",{alt:!0,src:!0,class:!0,draggable:!0}),ve.forEach(d),j=O(Y),L=g(Y,"BUTTON",{class:!0});var be=p(L);D=g(be,"IMG",{alt:!0,src:!0,class:!0,draggable:!0}),be.forEach(d),Y.forEach(d),E.forEach(d),this.h()},h(){u(s,"class","miniboard svelte-3ogpkh"),u(o,"class","name svelte-3ogpkh"),u(i,"class","size svelte-3ogpkh"),u(_,"class","info svelte-3ogpkh"),u(w,"alt","delete"),$e(w.src,J=je)||u(w,"src",J),u(w,"class","delete svelte-3ogpkh"),u(w,"draggable","false"),ke(w,"stroke","whitesmoke",!1),u(v,"class","delete unstyled svelte-3ogpkh"),u(D,"alt","play"),$e(D.src,ue=Qe)||u(D,"src",ue),u(D,"class","delete svelte-3ogpkh"),u(D,"draggable","false"),ke(D,"stroke","whitesmoke",!1),u(L,"class","play unstyled svelte-3ogpkh"),u(h,"class","right svelte-3ogpkh"),u(e,"class","wrapper svelte-3ogpkh")},m($,E){R($,e,E),f(e,s),q[t].m(s,null),f(e,l),f(e,_),f(_,o),f(o,n),f(_,c),f(_,i),f(i,I),f(i,V),f(i,A),f(i,T),f(i,b),f(i,z),f(e,y),f(e,h),f(h,v),f(v,w),f(h,j),f(h,L),f(L,D),P=!0,le||(_e=[ae(v,"click",r[2]),ae(L,"click",r[3])],le=!0)},p($,[E]){var K,X,F;let Q=t;t=he($),t===Q?q[t].p($,E):(re(),H(q[Q],1,1,()=>{q[Q]=null}),ne(),a=q[t],a?a.p($,E):(a=q[t]=de[t]($),a.c()),B(a,1),a.m(s,null)),(!P||E&1)&&Z(n,$[0]),(!P||E&2)&&k!==(k=((K=$[1])==null?void 0:K.width)+"")&&Z(I,k),(!P||E&2)&&S!==(S=((X=$[1])==null?void 0:X.height)+"")&&Z(A,S),(!P||E&2)&&U!==(U=((F=$[1])==null?void 0:F.state)+"")&&Z(b,U)},i($){P||(B(a),P=!0)},o($){H(a),P=!1},d($){$&&d(e),q[t].d(),le=!1,Ue(_e)}}}function tt(r,e,s){let t,a,{slot:l}=e;const _=()=>{Le.update(n=>(n.splice(n.indexOf(l),1),n)),qe(l)},o=()=>{ze.set(l),Fe(`${Re}/game`)};return r.$$set=n=>{"slot"in n&&s(4,l=n.slot)},r.$$.update=()=>{r.$$.dirty&16&&s(1,t=Pe(l)),r.$$.dirty&16&&s(0,a=`Save Game ${l}`)},[a,t,_,o,l]}class st extends ee{constructor(e){super(),te(this,e,tt,et,se,{slot:4})}}const lt=r=>({}),Te=r=>({}),at=r=>({}),De=r=>({});function rt(r){let e,s,t,a,l,_,o,n,c,i,k,I,V,S,A,T;const U=r[1].sidebar,b=ye(U,r,r[0],De),z=r[1].content,y=ye(z,r,r[0],Te);return{c(){e=m("main"),s=m("aside"),t=m("header"),a=m("h1"),l=M("MineSweeper"),_=C(),o=m("h3"),n=M("By SFG and TMH"),c=C(),i=m("hr"),k=C(),b&&b.c(),I=C(),y&&y.c(),V=C(),S=m("footer"),A=M(Ge),this.h()},l(h){e=g(h,"MAIN",{class:!0});var v=p(e);s=g(v,"ASIDE",{class:!0});var w=p(s);t=g(w,"HEADER",{class:!0});var J=p(t);a=g(J,"H1",{id:!0,class:!0});var j=p(a);l=G(j,"MineSweeper"),j.forEach(d),_=O(J),o=g(J,"H3",{id:!0,class:!0});var L=p(o);n=G(L,"By SFG and TMH"),L.forEach(d),J.forEach(d),c=O(w),i=g(w,"HR",{class:!0}),k=O(w),b&&b.l(w),w.forEach(d),I=O(v),y&&y.l(v),V=O(v),S=g(v,"FOOTER",{class:!0});var D=p(S);A=G(D,Ge),D.forEach(d),v.forEach(d),this.h()},h(){u(a,"id","title"),u(a,"class","svelte-1ullted"),u(o,"id","creator"),u(o,"class","svelte-1ullted"),u(t,"class","svelte-1ullted"),u(i,"class","svelte-1ullted"),u(s,"class","sidebar svelte-1ullted"),u(S,"class","version svelte-1ullted"),u(e,"class","wrapper svelte-1ullted")},m(h,v){R(h,e,v),f(e,s),f(s,t),f(t,a),f(a,l),f(t,_),f(t,o),f(o,n),f(s,c),f(s,i),f(s,k),b&&b.m(s,null),f(e,I),y&&y.m(e,null),f(e,V),f(e,S),f(S,A),T=!0},p(h,[v]){b&&b.p&&(!T||v&1)&&we(b,U,h,h[0],T?Se(U,h[0],v,at):Ee(h[0]),De),y&&y.p&&(!T||v&1)&&we(y,z,h,h[0],T?Se(z,h[0],v,lt):Ee(h[0]),Te)},i(h){T||(B(b,h),B(y,h),T=!0)},o(h){H(b,h),H(y,h),T=!1},d(h){h&&d(e),b&&b.d(h),y&&y.d(h)}}}function nt(r,e,s){let{$$slots:t={},$$scope:a}=e;return r.$$set=l=>{"$$scope"in l&&s(0,a=l.$$scope)},[a,t]}class ot extends ee{constructor(e){super(),te(this,e,nt,rt,se,{})}}function Ne(r,e,s){const t=r.slice();return t[3]=e[s],t}function Ce(r){let e,s,t,a=r[0],l=[];for(let n=0;n<a.length;n+=1)l[n]=Oe(Ne(r,a,n));const _=n=>H(l[n],1,1,()=>{l[n]=null});let o=r[0].length===0&&He();return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=C(),o&&o.c(),s=Me()},l(n){for(let c=0;c<l.length;c+=1)l[c].l(n);e=O(n),o&&o.l(n),s=Me()},m(n,c){for(let i=0;i<l.length;i+=1)l[i].m(n,c);R(n,e,c),o&&o.m(n,c),R(n,s,c),t=!0},p(n,c){if(c&1){a=n[0];let i;for(i=0;i<a.length;i+=1){const k=Ne(n,a,i);l[i]?(l[i].p(k,c),B(l[i],1)):(l[i]=Oe(k),l[i].c(),B(l[i],1),l[i].m(e.parentNode,e))}for(re(),i=a.length;i<l.length;i+=1)_(i);ne()}n[0].length===0?o||(o=He(),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(n){if(!t){for(let c=0;c<a.length;c+=1)B(l[c]);t=!0}},o(n){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)H(l[c]);t=!1},d(n){Ve(l,n),n&&d(e),o&&o.d(n),n&&d(s)}}}function Oe(r){let e,s;return e=new st({props:{slot:r[3]}}),{c(){oe(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){ce(e,t,a),s=!0},p(t,a){const l={};a&1&&(l.slot=t[3]),e.$set(l)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){fe(e,t)}}}function He(r){let e,s;return{c(){e=m("p"),s=M("No Saved Games"),this.h()},l(t){e=g(t,"P",{class:!0});var a=p(e);s=G(a,"No Saved Games"),a.forEach(d),this.h()},h(){u(e,"class","svelte-16ycbuf")},m(t,a){R(t,e,a),f(e,s)},d(t){t&&d(e)}}}function it(r){let e,s,t=r[0]&&Ce(r);return{c(){e=m("div"),t&&t.c(),this.h()},l(a){e=g(a,"DIV",{slot:!0,class:!0});var l=p(e);t&&t.l(l),l.forEach(d),this.h()},h(){u(e,"slot","sidebar"),u(e,"class","savegames svelte-16ycbuf")},m(a,l){R(a,e,l),t&&t.m(e,null),s=!0},p(a,l){a[0]?t?(t.p(a,l),l&1&&B(t,1)):(t=Ce(a),t.c(),B(t,1),t.m(e,null)):t&&(re(),H(t,1,1,()=>{t=null}),ne())},i(a){s||(B(t),s=!0)},o(a){H(t),s=!1},d(a){a&&d(e),t&&t.d()}}}function ct(r){let e,s,t,a,l,_,o,n,c;return{c(){e=m("div"),s=m("section"),t=m("h2"),a=M("Standard"),l=C(),_=m("button"),o=M("New Game"),this.h()},l(i){e=g(i,"DIV",{class:!0,slot:!0});var k=p(e);s=g(k,"SECTION",{class:!0});var I=p(s);t=g(I,"H2",{class:!0});var V=p(t);a=G(V,"Standard"),V.forEach(d),l=O(I),_=g(I,"BUTTON",{});var S=p(_);o=G(S,"New Game"),S.forEach(d),I.forEach(d),k.forEach(d),this.h()},h(){u(t,"class","svelte-16ycbuf"),u(s,"class","presets svelte-16ycbuf"),u(e,"class","content2 svelte-16ycbuf"),u(e,"slot","content")},m(i,k){R(i,e,k),f(e,s),f(s,t),f(t,a),f(s,l),f(s,_),f(_,o),n||(c=ae(_,"click",r[1]),n=!0)},p:W,d(i){i&&d(e),n=!1,c()}}}function ft(r){let e,s;return e=new ot({props:{$$slots:{content:[ct],sidebar:[it]},$$scope:{ctx:r}}}),{c(){oe(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,a){ce(e,t,a),s=!0},p(t,[a]){const l={};a&65&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){fe(e,t)}}}let ut=12;function _t(r,e,s){let t;return Ae(r,Le,l=>s(0,t=l)),[t,()=>{Je(Ke[ut]),Fe(`${Re}/game`)}]}class gt extends ee{constructor(e){super(),te(this,e,_t,ft,se,{})}}export{gt as default};
