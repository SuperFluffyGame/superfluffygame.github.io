import{S as oe,i as fe,s as ce,k as y,a as F,l as I,m as E,c as V,h as b,n as w,p as ne,b as P,G as p,J as ie,a0 as Ye,f as G,g as A,t as N,d as Q,a1 as Ne,a2 as Fe,K as Oe,A as j,_ as Ve,$ as ke,q as M,r as $,u as T,a3 as Te,o as De,v as Z,w as x,x as ee,y as te,M as ue,H as we,Q as Me,a4 as We,N as Ue,O as Xe}from"../../../chunks/index-35a657ee.js";import{G as W,b as O,e as q,s as qe,r as He,f as ae,h as R,S as Je,t as $e,C as Ke,c as Re,g as ye,a as je,n as Ae,B as Qe,M as Ze,d as Ie}from"../../../chunks/SidebarLayout-1b651093.js";import{c as Ee}from"../../../chunks/singletons-671b2808.js";const xe=""+new URL("../../../assets/red_mine-cc7afd62.jpg",import.meta.url).href,et=""+new URL("../../../assets/red_flag-cf5f7b44.jpg",import.meta.url).href,Be=(n,e)=>{var c,a;if(n.state!==W.Playing)return;const s=n.board[e];if(s.state===O.Flagged)return;let t=e%n.width,l=Math.floor(e/n.height);if(s.state=O.Opened,n.firstMove){const r=[];for(let o=0;o<9;o++){const h=o%3-1,f=Math.floor(o/3)-1,d=(l+f)*n.width+(t+h);r.push(d)}for(let o=0;o<9;o++){const h=o%3-1,f=Math.floor(o/3)-1,d=(l+f)*n.width+(t+h),u=n.board[d];(u==null?void 0:u.type)===q.Mine&&(u.type=q.Empty,qe(n,r))}He(n)}if(n.firstMove=!1,s.type===q.Empty&&s.numNeighborMines===0)for(let r=0;r<9;r++){const o=r%3-1,h=Math.floor(r/3)-1,f=t+o,d=l+h;if(f<0||f>=n.width||d<0||d>=n.height||o===0&&h===0)continue;const u=d*n.width+f;((a=(c=n.board)==null?void 0:c[u])==null?void 0:a.state)===O.Closed&&Be(n,u)}if(s.type===q.Mine){n.state=W.Lost,n.lostToCell=e;for(let r=0;r<n.width*n.height;r++){let o=n.board[r];o.type===q.Mine&&(o.state=O.Opened)}}let i=!0;for(let r=0;r<n.width*n.height;r++)n.board[r].type!==q.Mine&&n.board[r].state!==O.Opened&&(i=!1);i&&(n.state=W.Won)},tt=(n,e)=>{let s=n.board[e];s.state===O.Closed?s.state=O.Flagged:s.state===O.Flagged&&(s.state=O.Closed)};function lt(n){let e=n[0].numNeighborMines+"",s;return{c(){s=M(e)},l(t){s=$(t,e)},m(t,l){P(t,s,l)},p(t,l){l&1&&e!==(e=t[0].numNeighborMines+"")&&T(s,e)},d(t){t&&b(s)}}}function st(n){let e,s;return{c(){e=y("img"),this.h()},l(t){e=I(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){w(e,"alt","M"),Oe(e.src,s=xe)||w(e,"src",s),w(e,"class","svelte-wuxr37")},m(t,l){P(t,e,l)},p:j,d(t){t&&b(e)}}}function Ce(n){let e,s,t;return{c(){e=y("div"),this.h()},l(l){e=I(l,"DIV",{class:!0}),E(e).forEach(b),this.h()},h(){w(e,"class","cover svelte-wuxr37")},m(l,i){P(l,e,i),t=!0},i(l){t||(s&&s.end(1),t=!0)},o(l){l&&(s=Fe(e,ae,{duration:100})),t=!1},d(l){l&&b(e),l&&s&&s.end()}}}function Ge(n){let e,s,t,l;return{c(){e=y("img"),this.h()},l(i){e=I(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Oe(e.src,s=et)||w(e,"src",s),w(e,"alt","F"),w(e,"class","flag svelte-wuxr37")},m(i,c){P(i,e,c),l=!0},p:j,i(i){l||(i&&Ve(()=>{t||(t=ke(e,ae,{duration:100},!0)),t.run(1)}),l=!0)},o(i){i&&(t||(t=ke(e,ae,{duration:100},!1)),t.run(0)),l=!1},d(i){i&&b(e),i&&t&&t.end()}}}function nt(n){let e,s,t,l,i=`${n[1]}px`,c,a;function r(u,v){if(u[0].type===q.Mine)return st;if(u[0].numNeighborMines!==0)return lt}let o=r(n),h=o&&o(n),f=n[0].state!==O.Opened&&Ce(),d=n[0].state===O.Flagged&&Ge();return{c(){e=y("div"),h&&h.c(),s=F(),f&&f.c(),t=F(),d&&d.c(),this.h()},l(u){e=I(u,"DIV",{class:!0});var v=E(e);h&&h.l(v),s=V(v),f&&f.l(v),t=V(v),d&&d.l(v),v.forEach(b),this.h()},h(){w(e,"class",l="wrapper "+n[0].state+" svelte-wuxr37"),ne(e,"font-size",i,!1)},m(u,v){P(u,e,v),h&&h.m(e,null),p(e,s),f&&f.m(e,null),p(e,t),d&&d.m(e,null),c||(a=[ie(e,"click",n[2]),ie(e,"contextmenu",Ye(n[3]))],c=!0)},p(u,[v]){o===(o=r(u))&&h?h.p(u,v):(h&&h.d(1),h=o&&o(u),h&&(h.c(),h.m(e,s))),u[0].state!==O.Opened?f?v&1&&G(f,1):(f=Ce(),f.c(),G(f,1),f.m(e,t)):f&&(A(),N(f,1,1,()=>{f=null}),Q()),u[0].state===O.Flagged?d?(d.p(u,v),v&1&&G(d,1)):(d=Ge(),d.c(),G(d,1),d.m(e,null)):d&&(A(),N(d,1,1,()=>{d=null}),Q()),v&1&&l!==(l="wrapper "+u[0].state+" svelte-wuxr37")&&w(e,"class",l),v&2&&i!==(i=`${u[1]}px`)&&ne(e,"font-size",i,!1)},i(u){G(f),G(d)},o(u){N(f),N(d)},d(u){u&&b(e),h&&h.d(),f&&f.d(),d&&d.d(),c=!1,Ne(a)}}}function it(n,e,s){let{cell:t}=e,{index:l}=e;const i=r=>{r.button===0&&R.update(o=>(Be(o,l),o))},c=()=>{R.update(r=>(tt(r,l),r))};let{fontSize:a}=e;return n.$$set=r=>{"cell"in r&&s(0,t=r.cell),"index"in r&&s(4,l=r.index),"fontSize"in r&&s(1,a=r.fontSize)},[t,a,i,c,l]}class rt extends oe{constructor(e){super(),fe(this,e,it,nt,ce,{cell:0,index:4,fontSize:1})}}function Se(n,e,s){const t=n.slice();return t[4]=e[s],t[6]=s,t}function Pe(n){let e,s;return e=new rt({props:{cell:n[4],index:n[6],fontSize:n[2]}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),s=!0},p(t,l){const i={};l&1&&(i.cell=t[4]),l&4&&(i.fontSize=t[2]),e.$set(i)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function at(n){let e,s,t,l=n[0].board,i=[];for(let a=0;a<l.length;a+=1)i[a]=Pe(Se(n,l,a));const c=a=>N(i[a],1,1,()=>{i[a]=null});return{c(){e=y("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=I(a,"DIV",{class:!0,style:!0});var r=E(e);for(let o=0;o<i.length;o+=1)i[o].l(r);r.forEach(b),this.h()},h(){var a,r;w(e,"class","board svelte-h57i0c"),w(e,"style",s=`grid-template-columns: repeat(${(a=n[0].width)!=null?a:2}, 1fr); grid-template-rows: repeat(${(r=n[0].height)!=null?r:2}, 1fr);`)},m(a,r){P(a,e,r);for(let o=0;o<i.length;o+=1)i[o].m(e,null);n[3](e),t=!0},p(a,[r]){var o,h;if(r&5){l=a[0].board;let f;for(f=0;f<l.length;f+=1){const d=Se(a,l,f);i[f]?(i[f].p(d,r),G(i[f],1)):(i[f]=Pe(d),i[f].c(),G(i[f],1),i[f].m(e,null))}for(A(),f=l.length;f<i.length;f+=1)c(f);Q()}(!t||r&1&&s!==(s=`grid-template-columns: repeat(${(o=a[0].width)!=null?o:2}, 1fr); grid-template-rows: repeat(${(h=a[0].height)!=null?h:2}, 1fr);`))&&w(e,"style",s)},i(a){if(!t){for(let r=0;r<l.length;r+=1)G(i[r]);t=!0}},o(a){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)N(i[r]);t=!1},d(a){a&&b(e),Te(i,a),n[3](null)}}}function ot(n,e,s){let{game:t}=e,l,i=0;De(()=>{new ResizeObserver(()=>{s(2,i=l.clientWidth/t.width*.8)}).observe(l)});function c(a){ue[a?"unshift":"push"](()=>{l=a,s(1,l)})}return n.$$set=a=>{"game"in a&&s(0,t=a.game)},[t,l,i,c]}class ft extends oe{constructor(e){super(),fe(this,e,ot,at,ce,{game:0})}}function ct(n){var d,u,v;let e,s,t,l,i,c=((d=n[1])==null?void 0:d.numMines)+"",a,r,o,h=$e((v=(u=n[1])==null?void 0:u.stats.timePlayed)!=null?v:0)+"",f;return{c(){e=y("div"),s=y("section"),t=y("p"),l=M(n[0]),i=M(" / "),a=M(c),r=F(),o=y("p"),f=M(h),this.h()},l(_){e=I(_,"DIV",{class:!0,slot:!0});var m=E(e);s=I(m,"SECTION",{class:!0});var g=E(s);t=I(g,"P",{});var L=E(t);l=$(L,n[0]),i=$(L," / "),a=$(L,c),L.forEach(b),r=V(g),o=I(g,"P",{});var D=E(o);f=$(D,h),D.forEach(b),g.forEach(b),m.forEach(b),this.h()},h(){var _,m,g;ne(t,"color",n[0]>=((m=(_=n[1])==null?void 0:_.numMines)!=null?m:0)?((g=n[1])==null?void 0:g.state)===W.Won?"green":"red":null,!1),w(s,"class","stats svelte-l3neex"),w(e,"class","sidebar"),w(e,"slot","sidebar")},m(_,m){P(_,e,m),p(e,s),p(s,t),p(t,l),p(t,i),p(t,a),p(s,r),p(s,o),p(o,f)},p(_,m){var g,L,D,H,J,X;m&1&&T(l,_[0]),m&2&&c!==(c=((g=_[1])==null?void 0:g.numMines)+"")&&T(a,c),m&3&&ne(t,"color",_[0]>=((D=(L=_[1])==null?void 0:L.numMines)!=null?D:0)?((H=_[1])==null?void 0:H.state)===W.Won?"green":"red":null,!1),m&2&&h!==(h=$e((X=(J=_[1])==null?void 0:J.stats.timePlayed)!=null?X:0)+"")&&T(f,h)},d(_){_&&b(e)}}}function ut(n){let e,s;return{c(){e=y("p"),s=M("Loading...")},l(t){e=I(t,"P",{});var l=E(e);s=$(l,"Loading..."),l.forEach(b)},m(t,l){P(t,e,l),p(e,s)},p:j,i:j,o:j,d(t){t&&b(e)}}}function dt(n){let e,s;return e=new ft({props:{game:n[1]}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),s=!0},p(t,l){const i={};l&2&&(i.game=t[1]),e.$set(i)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function _t(n){let e,s,t,l,i,c=n[1].width+"",a,r,o=n[1].height+"",h,f,d=n[1].numMines+"",u,v;return{c(){e=y("h2"),s=M("You Lost!"),t=F(),l=y("p"),i=M("You lost on a "),a=M(c),r=M("x"),h=M(o),f=M(`\r
                        board with `),u=M(d),v=M(" mines.")},l(_){e=I(_,"H2",{});var m=E(e);s=$(m,"You Lost!"),m.forEach(b),t=V(_),l=I(_,"P",{});var g=E(l);i=$(g,"You lost on a "),a=$(g,c),r=$(g,"x"),h=$(g,o),f=$(g,`\r
                        board with `),u=$(g,d),v=$(g," mines."),g.forEach(b)},m(_,m){P(_,e,m),p(e,s),P(_,t,m),P(_,l,m),p(l,i),p(l,a),p(l,r),p(l,h),p(l,f),p(l,u),p(l,v)},p(_,m){m&2&&c!==(c=_[1].width+"")&&T(a,c),m&2&&o!==(o=_[1].height+"")&&T(h,o),m&2&&d!==(d=_[1].numMines+"")&&T(u,d)},d(_){_&&b(e),_&&b(t),_&&b(l)}}}function ht(n){let e,s,t,l,i,c=n[1].width+"",a,r,o=n[1].height+"",h,f,d=n[1].numMines+"",u,v;return{c(){e=y("h2"),s=M("You Won!"),t=F(),l=y("p"),i=M("Congratulations, you won on a "),a=M(c),r=M("x"),h=M(o),f=M(`\r
                        board with `),u=M(d),v=M(" mines.")},l(_){e=I(_,"H2",{});var m=E(e);s=$(m,"You Won!"),m.forEach(b),t=V(_),l=I(_,"P",{});var g=E(l);i=$(g,"Congratulations, you won on a "),a=$(g,c),r=$(g,"x"),h=$(g,o),f=$(g,`\r
                        board with `),u=$(g,d),v=$(g," mines."),g.forEach(b)},m(_,m){P(_,e,m),p(e,s),P(_,t,m),P(_,l,m),p(l,i),p(l,a),p(l,r),p(l,h),p(l,f),p(l,u),p(l,v)},p(_,m){m&2&&c!==(c=_[1].width+"")&&T(a,c),m&2&&o!==(o=_[1].height+"")&&T(h,o),m&2&&d!==(d=_[1].numMines+"")&&T(u,d)},d(_){_&&b(e),_&&b(t),_&&b(l)}}}function ze(n){let e,s,t;return s=new Ze({props:{game:n[1],showMines:!0}}),{c(){e=y("div"),Z(s.$$.fragment),this.h()},l(l){e=I(l,"DIV",{class:!0});var i=E(e);x(s.$$.fragment,i),i.forEach(b),this.h()},h(){w(e,"class","mini-board svelte-l3neex")},m(l,i){P(l,e,i),ee(s,e,null),t=!0},p(l,i){const c={};i&2&&(c.game=l[1]),s.$set(c)},i(l){t||(G(s.$$.fragment,l),t=!0)},o(l){N(s.$$.fragment,l),t=!1},d(l){l&&b(e),te(s)}}}function pt(n){let e,s,t,l,i,c,a,r,o,h,f,d,u,v,_,m,g,L,D,H,J,X,re,de;const _e=[dt,ut],U=[];function he(k,z){return k[1]?0:1}s=he(n),t=U[s]=_e[s](n);function pe(k,z){var Y,B;if(((Y=k[1])==null?void 0:Y.state)===W.Won)return ht;if(((B=k[1])==null?void 0:B.state)===W.Lost)return _t}let K=pe(n),S=K&&K(n);function Le(k){n[6](k)}let me={};n[3]!==void 0&&(me.checked=n[3]),d=new Ke({props:me}),ue.push(()=>Ue(d,"checked",Le));let C=n[1]&&ze(n);return{c(){e=y("div"),t.c(),l=F(),i=y("dialog"),c=y("div"),S&&S.c(),a=F(),r=y("div"),o=y("p"),h=M("Keep Game"),f=F(),Z(d.$$.fragment),v=F(),_=y("div"),m=y("button"),g=M("Back to Menu"),L=F(),D=y("button"),H=M("New Game"),J=F(),C&&C.c(),this.h()},l(k){e=I(k,"DIV",{class:!0,slot:!0});var z=E(e);t.l(z),l=V(z),i=I(z,"DIALOG",{class:!0});var Y=E(i);c=I(Y,"DIV",{class:!0});var B=E(c);S&&S.l(B),a=V(B),r=I(B,"DIV",{class:!0});var le=E(r);o=I(le,"P",{class:!0});var be=E(o);h=$(be,"Keep Game"),be.forEach(b),f=V(le),x(d.$$.fragment,le),le.forEach(b),v=V(B),_=I(B,"DIV",{class:!0});var se=E(_);m=I(se,"BUTTON",{class:!0});var ve=E(m);g=$(ve,"Back to Menu"),ve.forEach(b),L=V(se),D=I(se,"BUTTON",{class:!0});var ge=E(D);H=$(ge,"New Game"),ge.forEach(b),se.forEach(b),B.forEach(b),J=V(Y),C&&C.l(Y),Y.forEach(b),z.forEach(b),this.h()},h(){w(o,"class","svelte-l3neex"),w(r,"class","keep-game-wrapper svelte-l3neex"),w(m,"class","goto-menu"),w(D,"class","new-game"),w(_,"class","buttons-container-vertical svelte-l3neex"),w(c,"class","modal-main svelte-l3neex"),w(i,"class","aftergame-modal svelte-l3neex"),w(e,"class","wrapper svelte-l3neex"),w(e,"slot","content")},m(k,z){P(k,e,z),U[s].m(e,null),p(e,l),p(e,i),p(i,c),S&&S.m(c,null),p(c,a),p(c,r),p(r,o),p(o,h),p(r,f),ee(d,r,null),p(c,v),p(c,_),p(_,m),p(m,g),p(_,L),p(_,D),p(D,H),p(i,J),C&&C.m(i,null),n[7](i),X=!0,re||(de=[ie(m,"click",n[5]),ie(D,"click",n[4])],re=!0)},p(k,z){let Y=s;s=he(k),s===Y?U[s].p(k,z):(A(),N(U[Y],1,1,()=>{U[Y]=null}),Q(),t=U[s],t?t.p(k,z):(t=U[s]=_e[s](k),t.c()),G(t,1),t.m(e,l)),K===(K=pe(k))&&S?S.p(k,z):(S&&S.d(1),S=K&&K(k),S&&(S.c(),S.m(c,a)));const B={};!u&&z&8&&(u=!0,B.checked=k[3],Xe(()=>u=!1)),d.$set(B),k[1]?C?(C.p(k,z),z&2&&G(C,1)):(C=ze(k),C.c(),G(C,1),C.m(i,null)):C&&(A(),N(C,1,1,()=>{C=null}),Q())},i(k){X||(G(t),G(d.$$.fragment,k),G(C),X=!0)},o(k){N(t),N(d.$$.fragment,k),N(C),X=!1},d(k){k&&b(e),U[s].d(),S&&S.d(),te(d),C&&C.d(),n[7](null),re=!1,Ne(de)}}}function mt(n){let e,s;return e=new Je({props:{$$slots:{content:[pt],sidebar:[ct]},$$scope:{ctx:n}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),s=!0},p(t,[l]){const i={};l&1039&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function bt(n,e,s){let t,l,i;we(n,R,u=>s(1,l=u)),we(n,Re,u=>s(9,i=u));let c,a;R.subscribe(u=>{var v;if((u==null?void 0:u.state)!==W.Playing){clearInterval(a);try{(v=c==null?void 0:c.showModal)==null||v.call(c)}catch{}}}),De(()=>{l===null?ye(`${Ee}`):l.state!==W.Playing&&c.showModal(),(l==null?void 0:l.state)===W.Playing&&(a=setInterval(()=>{Me(R,l.stats.timePlayed+=1,l)},1e3))}),We(()=>{clearInterval(a)});let r=!0;const o=()=>{clearInterval(a),r||Ie(i),je(Ae(Qe[l.width])),c.close(),a=setInterval(()=>{Me(R,l.stats.timePlayed+=1,l)},1e3)},h=()=>{r||Ie(i),ye(`${Ee}`),c.close()};function f(u){r=u,s(3,r)}function d(u){ue[u?"unshift":"push"](()=>{c=u,s(2,c)})}return n.$$.update=()=>{n.$$.dirty&2&&s(0,t=l==null?void 0:l.board.reduce((u,v)=>u+(v.state===O.Flagged?1:0),0))},[t,l,c,r,o,h,f,d]}class wt extends oe{constructor(e){super(),fe(this,e,bt,mt,ce,{})}}export{wt as default};