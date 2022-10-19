import{S as fe,i as ce,s as ue,k as $,a as B,l as I,m as E,c as F,h as b,n as w,p as ne,b as S,G as p,J as ie,a0 as Ve,f as G,g as A,t as O,d as Q,a1 as De,a2 as Be,K as Le,A as R,U as Fe,V as we,q as M,r as y,u as j,a3 as We,v as Z,w as x,x as ee,y as te,W as de,H as Me,o as je,$ as ye,a4 as Te,X as Ue,Y as Xe}from"../../../chunks/index-35ca9ab3.js";import{G as W,e as D,s as re,f as X,h as qe,r as He,i as oe,j as K,S as Je,t as $e,C as Ke,c as Re,g as Ie,l as Ae,n as Qe,a as Ze,M as xe,d as Ee}from"../../../chunks/MiniBoard-edde8563.js";import{c as Ce}from"../../../chunks/singletons-2a96e98d.js";const et=""+new URL("../../../assets/red_mine-cc7afd62.jpg",import.meta.url).href,tt=""+new URL("../../../assets/red_flag-cf5f7b44.jpg",import.meta.url).href,Ne=(n,e)=>{var c;if(n.state!==W.Playing)return;const s=n.board[e];if(s.state===D.Flagged)return;re.update(i=>i&&(i.cellsOpened+=1,i));let t=e%n.width,l=Math.floor(e/n.height);if(s.state=D.Opened,n.firstMove){const i=[];for(let r=0;r<9;r++){const d=r%3-1,h=Math.floor(r/3)-1,o=(l+h)*n.width+(t+d);i.push(o)}for(let r=0;r<9;r++){const d=r%3-1,h=Math.floor(r/3)-1,o=(l+h)*n.width+(t+d),f=n.board[o];(f==null?void 0:f.type)===X.Mine&&(f.type=X.Empty,qe(n,i))}He(n)}if(n.firstMove=!1,s.type===X.Empty&&s.numNeighborMines===0)for(let i=0;i<9;i++){const r=i%3-1,d=Math.floor(i/3)-1,h=t+r,o=l+d;if(h<0||h>=n.width||o<0||o>=n.height||r===0&&d===0)continue;const f=o*n.width+h;((c=n.board)==null?void 0:c[f].state)===D.Closed&&Ne(n,f)}if(s.type===X.Mine){re.update(i=>i&&(i.gamesLost+=1,i)),n.state=W.Lost,n.lostToCell=e;for(let i=0;i<n.width*n.height;i++){let r=n.board[i];r.type===X.Mine&&(r.state=D.Opened)}}let a=!0;for(let i=0;i<n.width*n.height;i++)n.board[i].type!==X.Mine&&n.board[i].state!==D.Opened&&(a=!1);a&&(re.update(i=>i&&(i.gamesWon+=1,i)),n.state=W.Won)},lt=(n,e)=>{if(n.state!==W.Playing)return;let s=n.board[e];s.state===D.Closed?s.state=D.Flagged:s.state===D.Flagged&&(s.state=D.Closed)};function st(n){let e=n[0].numNeighborMines+"",s;return{c(){s=M(e)},l(t){s=y(t,e)},m(t,l){S(t,s,l)},p(t,l){l&1&&e!==(e=t[0].numNeighborMines+"")&&j(s,e)},d(t){t&&b(s)}}}function nt(n){let e,s;return{c(){e=$("img"),this.h()},l(t){e=I(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){w(e,"alt","M"),Le(e.src,s=et)||w(e,"src",s),w(e,"class","svelte-m4je3a")},m(t,l){S(t,e,l)},p:R,d(t){t&&b(e)}}}function Ge(n){let e,s,t;return{c(){e=$("div"),this.h()},l(l){e=I(l,"DIV",{class:!0}),E(e).forEach(b),this.h()},h(){w(e,"class","cover svelte-m4je3a")},m(l,a){S(l,e,a),t=!0},i(l){t||(s&&s.end(1),t=!0)},o(l){l&&(s=Be(e,oe,{duration:100})),t=!1},d(l){l&&b(e),l&&s&&s.end()}}}function Pe(n){let e,s,t,l;return{c(){e=$("img"),this.h()},l(a){e=I(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Le(e.src,s=tt)||w(e,"src",s),w(e,"alt","F"),w(e,"class","flag svelte-m4je3a")},m(a,c){S(a,e,c),l=!0},p:R,i(a){l||(a&&Fe(()=>{t||(t=we(e,oe,{duration:100},!0)),t.run(1)}),l=!0)},o(a){a&&(t||(t=we(e,oe,{duration:100},!1)),t.run(0)),l=!1},d(a){a&&b(e),a&&t&&t.end()}}}function it(n){let e,s,t,l,a=`${n[1]}px`,c,i;function r(_,g){if(_[0].type===X.Mine)return nt;if(_[0].numNeighborMines!==0)return st}let d=r(n),h=d&&d(n),o=n[0].state!==D.Opened&&Ge(),f=n[0].state===D.Flagged&&Pe();return{c(){e=$("div"),h&&h.c(),s=B(),o&&o.c(),t=B(),f&&f.c(),this.h()},l(_){e=I(_,"DIV",{class:!0});var g=E(e);h&&h.l(g),s=F(g),o&&o.l(g),t=F(g),f&&f.l(g),g.forEach(b),this.h()},h(){w(e,"class",l="wrapper "+n[0].state+" svelte-m4je3a"),ne(e,"font-size",a,!1)},m(_,g){S(_,e,g),h&&h.m(e,null),p(e,s),o&&o.m(e,null),p(e,t),f&&f.m(e,null),c||(i=[ie(e,"click",n[2]),ie(e,"contextmenu",Ve(n[3]))],c=!0)},p(_,[g]){d===(d=r(_))&&h?h.p(_,g):(h&&h.d(1),h=d&&d(_),h&&(h.c(),h.m(e,s))),_[0].state!==D.Opened?o?g&1&&G(o,1):(o=Ge(),o.c(),G(o,1),o.m(e,t)):o&&(A(),O(o,1,1,()=>{o=null}),Q()),_[0].state===D.Flagged?f?(f.p(_,g),g&1&&G(f,1)):(f=Pe(),f.c(),G(f,1),f.m(e,null)):f&&(A(),O(f,1,1,()=>{f=null}),Q()),g&1&&l!==(l="wrapper "+_[0].state+" svelte-m4je3a")&&w(e,"class",l),g&2&&a!==(a=`${_[1]}px`)&&ne(e,"font-size",a,!1)},i(_){G(o),G(f)},o(_){O(o),O(f)},d(_){_&&b(e),h&&h.d(),o&&o.d(),f&&f.d(),c=!1,De(i)}}}function at(n,e,s){let{cell:t}=e,{index:l}=e;const a=r=>{r.button===0&&K.update(d=>(Ne(d,l),d))},c=()=>{K.update(r=>(lt(r,l),r))};let{fontSize:i}=e;return n.$$set=r=>{"cell"in r&&s(0,t=r.cell),"index"in r&&s(4,l=r.index),"fontSize"in r&&s(1,i=r.fontSize)},[t,i,a,c,l]}class rt extends fe{constructor(e){super(),ce(this,e,at,it,ue,{cell:0,index:4,fontSize:1})}}function Se(n,e,s){const t=n.slice();return t[5]=e[s],t[7]=s,t}function ze(n){let e,s;return e=new rt({props:{cell:n[5],index:n[7],fontSize:n[2]}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.cell=t[5]),l&4&&(a.fontSize=t[2]),e.$set(a)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function ot(n){let e,s,t,l=n[0].board,a=[];for(let i=0;i<l.length;i+=1)a[i]=ze(Se(n,l,i));const c=i=>O(a[i],1,1,()=>{a[i]=null});return{c(){e=$("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=I(i,"DIV",{class:!0,style:!0});var r=E(e);for(let d=0;d<a.length;d+=1)a[d].l(r);r.forEach(b),this.h()},h(){var i,r;w(e,"class","board svelte-h57i0c"),w(e,"style",s=`grid-template-columns: repeat(${(i=n[0].width)!=null?i:2}, 1fr); grid-template-rows: repeat(${(r=n[0].height)!=null?r:2}, 1fr);`)},m(i,r){S(i,e,r);for(let d=0;d<a.length;d+=1)a[d].m(e,null);n[3](e),t=!0},p(i,[r]){var d,h;if(r&5){l=i[0].board;let o;for(o=0;o<l.length;o+=1){const f=Se(i,l,o);a[o]?(a[o].p(f,r),G(a[o],1)):(a[o]=ze(f),a[o].c(),G(a[o],1),a[o].m(e,null))}for(A(),o=l.length;o<a.length;o+=1)c(o);Q()}(!t||r&1&&s!==(s=`grid-template-columns: repeat(${(d=i[0].width)!=null?d:2}, 1fr); grid-template-rows: repeat(${(h=i[0].height)!=null?h:2}, 1fr);`))&&w(e,"style",s)},i(i){if(!t){for(let r=0;r<l.length;r+=1)G(a[r]);t=!0}},o(i){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)O(a[r]);t=!1},d(i){i&&b(e),We(a,i),n[3](null)}}}function ft(n,e,s){let{game:t}=e,l,a=0;const c=new ResizeObserver(()=>{var r;s(2,a=((r=l==null?void 0:l.clientWidth)!=null?r:0)/t.width*.8)});function i(r){de[r?"unshift":"push"](()=>{l=r,s(1,l)})}return n.$$set=r=>{"game"in r&&s(0,t=r.game)},n.$$.update=()=>{n.$$.dirty&2&&l&&c.observe(l)},[t,l,a,i]}class ct extends fe{constructor(e){super(),ce(this,e,ft,ot,ue,{game:0})}}function ut(n){var f,_,g;let e,s,t,l,a,c=((f=n[1])==null?void 0:f.numMines)+"",i,r,d,h=$e((g=(_=n[1])==null?void 0:_.stats.timePlayed)!=null?g:0)+"",o;return{c(){e=$("div"),s=$("section"),t=$("p"),l=M(n[0]),a=M(" / "),i=M(c),r=B(),d=$("p"),o=M(h),this.h()},l(u){e=I(u,"DIV",{class:!0,slot:!0});var m=E(e);s=I(m,"SECTION",{class:!0});var v=E(s);t=I(v,"P",{});var Y=E(t);l=y(Y,n[0]),a=y(Y," / "),i=y(Y,c),Y.forEach(b),r=F(v),d=I(v,"P",{});var L=E(d);o=y(L,h),L.forEach(b),v.forEach(b),m.forEach(b),this.h()},h(){var u,m,v;ne(t,"color",n[0]>=((m=(u=n[1])==null?void 0:u.numMines)!=null?m:0)?((v=n[1])==null?void 0:v.state)===W.Won?"green":"red":null,!1),w(s,"class","stats svelte-l3neex"),w(e,"class","sidebar"),w(e,"slot","sidebar")},m(u,m){S(u,e,m),p(e,s),p(s,t),p(t,l),p(t,a),p(t,i),p(s,r),p(s,d),p(d,o)},p(u,m){var v,Y,L,q,H,U;m&1&&j(l,u[0]),m&2&&c!==(c=((v=u[1])==null?void 0:v.numMines)+"")&&j(i,c),m&3&&ne(t,"color",u[0]>=((L=(Y=u[1])==null?void 0:Y.numMines)!=null?L:0)?((q=u[1])==null?void 0:q.state)===W.Won?"green":"red":null,!1),m&2&&h!==(h=$e((U=(H=u[1])==null?void 0:H.stats.timePlayed)!=null?U:0)+"")&&j(o,h)},d(u){u&&b(e)}}}function dt(n){let e,s;return{c(){e=$("p"),s=M("Loading...")},l(t){e=I(t,"P",{});var l=E(e);s=y(l,"Loading..."),l.forEach(b)},m(t,l){S(t,e,l),p(e,s)},p:R,i:R,o:R,d(t){t&&b(e)}}}function _t(n){let e,s;return e=new ct({props:{game:n[1]}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),s=!0},p(t,l){const a={};l&2&&(a.game=t[1]),e.$set(a)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function ht(n){let e,s,t,l,a,c=n[1].width+"",i,r,d=n[1].height+"",h,o,f=n[1].numMines+"",_,g;return{c(){e=$("h2"),s=M("You Lost!"),t=B(),l=$("p"),a=M("You lost on a "),i=M(c),r=M("x"),h=M(d),o=M(`\r
                        board with `),_=M(f),g=M(" mines.")},l(u){e=I(u,"H2",{});var m=E(e);s=y(m,"You Lost!"),m.forEach(b),t=F(u),l=I(u,"P",{});var v=E(l);a=y(v,"You lost on a "),i=y(v,c),r=y(v,"x"),h=y(v,d),o=y(v,`\r
                        board with `),_=y(v,f),g=y(v," mines."),v.forEach(b)},m(u,m){S(u,e,m),p(e,s),S(u,t,m),S(u,l,m),p(l,a),p(l,i),p(l,r),p(l,h),p(l,o),p(l,_),p(l,g)},p(u,m){m&2&&c!==(c=u[1].width+"")&&j(i,c),m&2&&d!==(d=u[1].height+"")&&j(h,d),m&2&&f!==(f=u[1].numMines+"")&&j(_,f)},d(u){u&&b(e),u&&b(t),u&&b(l)}}}function pt(n){let e,s,t,l,a,c=n[1].width+"",i,r,d=n[1].height+"",h,o,f=n[1].numMines+"",_,g;return{c(){e=$("h2"),s=M("You Won!"),t=B(),l=$("p"),a=M("Congratulations, you won on a "),i=M(c),r=M("x"),h=M(d),o=M(`\r
                        board with `),_=M(f),g=M(" mines.")},l(u){e=I(u,"H2",{});var m=E(e);s=y(m,"You Won!"),m.forEach(b),t=F(u),l=I(u,"P",{});var v=E(l);a=y(v,"Congratulations, you won on a "),i=y(v,c),r=y(v,"x"),h=y(v,d),o=y(v,`\r
                        board with `),_=y(v,f),g=y(v," mines."),v.forEach(b)},m(u,m){S(u,e,m),p(e,s),S(u,t,m),S(u,l,m),p(l,a),p(l,i),p(l,r),p(l,h),p(l,o),p(l,_),p(l,g)},p(u,m){m&2&&c!==(c=u[1].width+"")&&j(i,c),m&2&&d!==(d=u[1].height+"")&&j(h,d),m&2&&f!==(f=u[1].numMines+"")&&j(_,f)},d(u){u&&b(e),u&&b(t),u&&b(l)}}}function Oe(n){let e,s,t;return s=new xe({props:{game:n[1],showMines:!0}}),{c(){e=$("div"),Z(s.$$.fragment),this.h()},l(l){e=I(l,"DIV",{class:!0});var a=E(e);x(s.$$.fragment,a),a.forEach(b),this.h()},h(){w(e,"class","mini-board svelte-l3neex")},m(l,a){S(l,e,a),ee(s,e,null),t=!0},p(l,a){const c={};a&2&&(c.game=l[1]),s.$set(c)},i(l){t||(G(s.$$.fragment,l),t=!0)},o(l){O(s.$$.fragment,l),t=!1},d(l){l&&b(e),te(s)}}}function mt(n){let e,s,t,l,a,c,i,r,d,h,o,f,_,g,u,m,v,Y,L,q,H,U,ae,_e;const he=[_t,dt],T=[];function pe(k,z){return k[1]?0:1}s=pe(n),t=T[s]=he[s](n);function me(k,z){var V,N;if(((V=k[1])==null?void 0:V.state)===W.Won)return pt;if(((N=k[1])==null?void 0:N.state)===W.Lost)return ht}let J=me(n),P=J&&J(n);function Ye(k){n[6](k)}let be={};n[3]!==void 0&&(be.checked=n[3]),f=new Ke({props:be}),de.push(()=>Ue(f,"checked",Ye));let C=n[1]&&Oe(n);return{c(){e=$("div"),t.c(),l=B(),a=$("dialog"),c=$("div"),P&&P.c(),i=B(),r=$("div"),d=$("p"),h=M("Keep Game"),o=B(),Z(f.$$.fragment),g=B(),u=$("div"),m=$("button"),v=M("Back to Menu"),Y=B(),L=$("button"),q=M("New Game"),H=B(),C&&C.c(),this.h()},l(k){e=I(k,"DIV",{class:!0,slot:!0});var z=E(e);t.l(z),l=F(z),a=I(z,"DIALOG",{class:!0});var V=E(a);c=I(V,"DIV",{class:!0});var N=E(c);P&&P.l(N),i=F(N),r=I(N,"DIV",{class:!0});var le=E(r);d=I(le,"P",{class:!0});var ge=E(d);h=y(ge,"Keep Game"),ge.forEach(b),o=F(le),x(f.$$.fragment,le),le.forEach(b),g=F(N),u=I(N,"DIV",{class:!0});var se=E(u);m=I(se,"BUTTON",{class:!0});var ve=E(m);v=y(ve,"Back to Menu"),ve.forEach(b),Y=F(se),L=I(se,"BUTTON",{class:!0});var ke=E(L);q=y(ke,"New Game"),ke.forEach(b),se.forEach(b),N.forEach(b),H=F(V),C&&C.l(V),V.forEach(b),z.forEach(b),this.h()},h(){w(d,"class","svelte-l3neex"),w(r,"class","keep-game-wrapper svelte-l3neex"),w(m,"class","goto-menu"),w(L,"class","new-game"),w(u,"class","buttons-container-vertical svelte-l3neex"),w(c,"class","modal-main svelte-l3neex"),w(a,"class","aftergame-modal svelte-l3neex"),w(e,"class","wrapper svelte-l3neex"),w(e,"slot","content")},m(k,z){S(k,e,z),T[s].m(e,null),p(e,l),p(e,a),p(a,c),P&&P.m(c,null),p(c,i),p(c,r),p(r,d),p(d,h),p(r,o),ee(f,r,null),p(c,g),p(c,u),p(u,m),p(m,v),p(u,Y),p(u,L),p(L,q),p(a,H),C&&C.m(a,null),n[7](a),U=!0,ae||(_e=[ie(m,"click",n[5]),ie(L,"click",n[4])],ae=!0)},p(k,z){let V=s;s=pe(k),s===V?T[s].p(k,z):(A(),O(T[V],1,1,()=>{T[V]=null}),Q(),t=T[s],t?t.p(k,z):(t=T[s]=he[s](k),t.c()),G(t,1),t.m(e,l)),J===(J=me(k))&&P?P.p(k,z):(P&&P.d(1),P=J&&J(k),P&&(P.c(),P.m(c,i)));const N={};!_&&z&8&&(_=!0,N.checked=k[3],Xe(()=>_=!1)),f.$set(N),k[1]?C?(C.p(k,z),z&2&&G(C,1)):(C=Oe(k),C.c(),G(C,1),C.m(a,null)):C&&(A(),O(C,1,1,()=>{C=null}),Q())},i(k){U||(G(t),G(f.$$.fragment,k),G(C),U=!0)},o(k){O(t),O(f.$$.fragment,k),O(C),U=!1},d(k){k&&b(e),T[s].d(),P&&P.d(),te(f),C&&C.d(),n[7](null),ae=!1,De(_e)}}}function bt(n){let e,s;return e=new Je({props:{$$slots:{content:[mt],sidebar:[ut]},$$scope:{ctx:n}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,l){ee(e,t,l),s=!0},p(t,[l]){const a={};l&1039&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(G(e.$$.fragment,t),s=!0)},o(t){O(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function gt(n,e,s){let t,l,a;Me(n,K,_=>s(1,l=_)),Me(n,Re,_=>s(9,a=_));let c,i;K.subscribe(_=>{if((_==null?void 0:_.state)!==W.Playing){clearInterval(i);try{c==null||c.showModal()}catch{}}}),je(()=>{l===null?Ie(`${Ce}`):l.state!==W.Playing&&c.showModal(),(l==null?void 0:l.state)===W.Playing&&(i=setInterval(()=>{ye(K,l.stats.timePlayed+=1,l)},1e3))}),Te(()=>{clearInterval(i)});let r=!0;const d=()=>{clearInterval(i),r||Ee(a),Ae(Qe(Ze[l.width])),c.close(),i=setInterval(()=>{ye(K,l.stats.timePlayed+=1,l)},1e3)},h=()=>{r||Ee(a),Ie(`${Ce}`),c.close()};function o(_){r=_,s(3,r)}function f(_){de[_?"unshift":"push"](()=>{c=_,s(2,c)})}return n.$$.update=()=>{n.$$.dirty&2&&s(0,t=l==null?void 0:l.board.reduce((_,g)=>_+(g.state===D.Flagged?1:0),0))},[t,l,c,r,d,h,o,f]}class Mt extends fe{constructor(e){super(),ce(this,e,gt,bt,ue,{})}}export{Mt as default};
