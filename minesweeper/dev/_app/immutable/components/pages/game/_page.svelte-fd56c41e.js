import{N as ve,S as z,i as K,s as Q,k as y,a as B,l as $,m as N,c as P,h as p,n as b,b as I,G as m,L as R,O as be,f as G,g as U,t as S,d as H,M as ce,P as fe,Q as J,K as ue,A as T,q as k,r as M,u as Y,H as _e,e as le,I as ke,v as de,w as he,x as me,y as pe,o as Me,R as we}from"../../../chunks/index-1de6b368.js";import{G as D,C as O,s as ye,r as $e,a as A,n as Ce,B as Ee,M as Ne,g as se}from"../../../chunks/navigation-10264002.js";import{c as ie}from"../../../chunks/singletons-2c3c9f42.js";const Ie=""+new URL("../../../assets/red_mine-cc7afd62.jpg",import.meta.url).href,Ge=""+new URL("../../../assets/red_flag-cf5f7b44.jpg",import.meta.url).href;function X(i,{delay:e=0,duration:s=400,easing:l=ve}={}){const t=+getComputedStyle(i).opacity;return{delay:e,duration:s,easing:l,css:f=>`opacity: ${f*t}`}}const ge=(i,e)=>{if(i.state!==D.Playing)return;const s=i.board[e];if(s.state===O.Flagged)return;let l=e%i.width,t=Math.floor(e/i.height);if(s.state=O.Opened,s.isMine&&i.firstMove&&(ye(i),s.isMine=!1,$e(i)),!s.isMine&&s.numNeighborMines===0)for(let n=0;n<9;n++){const r=Math.floor(n/3)-1,o=n%3-1,a=l+r,c=t+o;if(a<0||a>=i.width||c<0||c>=i.height||r===0&&o===0)continue;const u=c*i.width+a;i.board[u].state===O.Closed&&ge(i,u)}if(s.isMine){i.state=D.Lost,i.lostToCell=e;for(let n=0;n<i.width*i.height;n++){let r=i.board[n];r.isMine&&(r.state=O.Opened)}}let f=!0;for(let n=0;n<i.width*i.height;n++)!i.board[n].isMine&&i.board[n].state!==O.Opened&&(f=!1);f&&(i.state=D.Won),i.firstMove=!1},Oe=(i,e)=>{let s=i.board[e];s.state===O.Closed?s.state=O.Flagged:s.state===O.Flagged&&(s.state=O.Closed)};function Le(i){let e=i[0].numNeighborMines+"",s;return{c(){s=k(e)},l(l){s=M(l,e)},m(l,t){I(l,s,t)},p(l,t){t&1&&e!==(e=l[0].numNeighborMines+"")&&Y(s,e)},d(l){l&&p(s)}}}function Se(i){let e,s;return{c(){e=y("img"),this.h()},l(l){e=$(l,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){b(e,"alt","M"),ue(e.src,s=Ie)||b(e,"src",s),b(e,"class","svelte-t8gmc5")},m(l,t){I(l,e,t)},p:T,d(l){l&&p(e)}}}function ne(i){let e,s,l;return{c(){e=y("div"),this.h()},l(t){e=$(t,"DIV",{class:!0}),N(e).forEach(p),this.h()},h(){b(e,"class","cover svelte-t8gmc5")},m(t,f){I(t,e,f),l=!0},i(t){l||(t&&fe(()=>{s||(s=J(e,X,{duration:100},!0)),s.run(1)}),l=!0)},o(t){t&&(s||(s=J(e,X,{duration:100},!1)),s.run(0)),l=!1},d(t){t&&p(e),t&&s&&s.end()}}}function re(i){let e,s,l,t;return{c(){e=y("img"),this.h()},l(f){e=$(f,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ue(e.src,s=Ge)||b(e,"src",s),b(e,"alt","F"),b(e,"class","flag svelte-t8gmc5")},m(f,n){I(f,e,n),t=!0},p:T,i(f){t||(f&&fe(()=>{l||(l=J(e,X,{duration:100},!0)),l.run(1)}),t=!0)},o(f){f&&(l||(l=J(e,X,{duration:100},!1)),l.run(0)),t=!1},d(f){f&&p(e),f&&l&&l.end()}}}function Be(i){let e,s,l,t,f,n;function r(_,h){if(_[0].isMine)return Se;if(_[0].numNeighborMines!==0)return Le}let o=r(i),a=o&&o(i),c=i[0].state!==O.Opened&&ne(),u=i[0].state===O.Flagged&&re();return{c(){e=y("div"),a&&a.c(),s=B(),c&&c.c(),l=B(),u&&u.c(),this.h()},l(_){e=$(_,"DIV",{class:!0});var h=N(e);a&&a.l(h),s=P(h),c&&c.l(h),l=P(h),u&&u.l(h),h.forEach(p),this.h()},h(){b(e,"class",t="wrapper "+i[0].state+" svelte-t8gmc5")},m(_,h){I(_,e,h),a&&a.m(e,null),m(e,s),c&&c.m(e,null),m(e,l),u&&u.m(e,null),f||(n=[R(e,"click",i[1]),R(e,"contextmenu",be(i[2]))],f=!0)},p(_,[h]){o===(o=r(_))&&a?a.p(_,h):(a&&a.d(1),a=o&&o(_),a&&(a.c(),a.m(e,s))),_[0].state!==O.Opened?c?h&1&&G(c,1):(c=ne(),c.c(),G(c,1),c.m(e,l)):c&&(U(),S(c,1,1,()=>{c=null}),H()),_[0].state===O.Flagged?u?(u.p(_,h),h&1&&G(u,1)):(u=re(),u.c(),G(u,1),u.m(e,null)):u&&(U(),S(u,1,1,()=>{u=null}),H()),h&1&&t!==(t="wrapper "+_[0].state+" svelte-t8gmc5")&&b(e,"class",t)},i(_){G(c),G(u)},o(_){S(c),S(u)},d(_){_&&p(e),a&&a.d(),c&&c.d(),u&&u.d(),f=!1,ce(n)}}}function Pe(i,e,s){let{cell:l}=e,{index:t}=e;const f=r=>{r.button===0&&A.update(o=>(ge(o,t),o))},n=()=>{A.update(r=>(Oe(r,t),r))};return i.$$set=r=>{"cell"in r&&s(0,l=r.cell),"index"in r&&s(3,t=r.index)},[l,f,n,t]}class Ye extends z{constructor(e){super(),K(this,e,Pe,Be,Q,{cell:0,index:3})}}function ae(i,e,s){const l=i.slice();return l[1]=e[s],l[3]=s,l}function De(i){let e;return{c(){e=k("Loading...")},l(s){e=M(s,"Loading...")},m(s,l){I(s,e,l)},p:T,i:T,o:T,d(s){s&&p(e)}}}function Fe(i){let e,s,l=i[0].board,t=[];for(let n=0;n<l.length;n+=1)t[n]=oe(ae(i,l,n));const f=n=>S(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=le()},l(n){for(let r=0;r<t.length;r+=1)t[r].l(n);e=le()},m(n,r){for(let o=0;o<t.length;o+=1)t[o].m(n,r);I(n,e,r),s=!0},p(n,r){if(r&1){l=n[0].board;let o;for(o=0;o<l.length;o+=1){const a=ae(n,l,o);t[o]?(t[o].p(a,r),G(t[o],1)):(t[o]=oe(a),t[o].c(),G(t[o],1),t[o].m(e.parentNode,e))}for(U(),o=l.length;o<t.length;o+=1)f(o);H()}},i(n){if(!s){for(let r=0;r<l.length;r+=1)G(t[r]);s=!0}},o(n){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)S(t[r]);s=!1},d(n){ke(t,n),n&&p(e)}}}function oe(i){let e,s;return e=new Ye({props:{cell:i[1],index:i[3]}}),{c(){de(e.$$.fragment)},l(l){he(e.$$.fragment,l)},m(l,t){me(e,l,t),s=!0},p(l,t){const f={};t&1&&(f.cell=l[1]),e.$set(f)},i(l){s||(G(e.$$.fragment,l),s=!0)},o(l){S(e.$$.fragment,l),s=!1},d(l){pe(e,l)}}}function Ve(i){let e,s,l,t,f;const n=[Fe,De],r=[];function o(a,c){return a[0]?0:1}return s=o(i),l=r[s]=n[s](i),{c(){e=y("div"),l.c(),this.h()},l(a){e=$(a,"DIV",{class:!0,style:!0});var c=N(e);l.l(c),c.forEach(p),this.h()},h(){var a,c,u,_;b(e,"class","board svelte-gq0y7i"),b(e,"style",t=`grid-template-columns: repeat(${(c=(a=i[0])==null?void 0:a.width)!=null?c:2}, 1fr); grid-template-rows: repeat(${(_=(u=i[0])==null?void 0:u.height)!=null?_:2}, 1fr);`)},m(a,c){I(a,e,c),r[s].m(e,null),f=!0},p(a,[c]){var _,h,w,d;let u=s;s=o(a),s===u?r[s].p(a,c):(U(),S(r[u],1,1,()=>{r[u]=null}),H(),l=r[s],l?l.p(a,c):(l=r[s]=n[s](a),l.c()),G(l,1),l.m(e,null)),(!f||c&1&&t!==(t=`grid-template-columns: repeat(${(h=(_=a[0])==null?void 0:_.width)!=null?h:2}, 1fr); grid-template-rows: repeat(${(d=(w=a[0])==null?void 0:w.height)!=null?d:2}, 1fr);`))&&b(e,"style",t)},i(a){f||(G(l),f=!0)},o(a){S(l),f=!1},d(a){a&&p(e),r[s].d()}}}function je(i,e,s){let l;return _e(i,A,t=>s(0,l=t)),[l]}class Te extends z{constructor(e){super(),K(this,e,je,Ve,Q,{})}}function Ae(i){let e,s,l,t,f,n=i[1].width+"",r,o,a=i[1].height+"",c,u,_=i[1].numMines+"",h,w;return{c(){e=y("h2"),s=k("You Lost!"),l=B(),t=y("p"),f=k("You lost on a "),r=k(n),o=k("x"),c=k(a),u=k(`\r
                    board with `),h=k(_),w=k(" mines.")},l(d){e=$(d,"H2",{});var g=N(e);s=M(g,"You Lost!"),g.forEach(p),l=P(d),t=$(d,"P",{});var v=N(t);f=M(v,"You lost on a "),r=M(v,n),o=M(v,"x"),c=M(v,a),u=M(v,`\r
                    board with `),h=M(v,_),w=M(v," mines."),v.forEach(p)},m(d,g){I(d,e,g),m(e,s),I(d,l,g),I(d,t,g),m(t,f),m(t,r),m(t,o),m(t,c),m(t,u),m(t,h),m(t,w)},p(d,g){g&2&&n!==(n=d[1].width+"")&&Y(r,n),g&2&&a!==(a=d[1].height+"")&&Y(c,a),g&2&&_!==(_=d[1].numMines+"")&&Y(h,_)},d(d){d&&p(e),d&&p(l),d&&p(t)}}}function We(i){let e,s,l,t,f,n=i[1].width+"",r,o,a=i[1].height+"",c,u,_=i[1].numMines+"",h,w;return{c(){e=y("h2"),s=k("You Won!"),l=B(),t=y("p"),f=k("Congratulations, you won on a "),r=k(n),o=k("x"),c=k(a),u=k(`\r
                    board with `),h=k(_),w=k(" mines.")},l(d){e=$(d,"H2",{});var g=N(e);s=M(g,"You Won!"),g.forEach(p),l=P(d),t=$(d,"P",{});var v=N(t);f=M(v,"Congratulations, you won on a "),r=M(v,n),o=M(v,"x"),c=M(v,a),u=M(v,`\r
                    board with `),h=M(v,_),w=M(v," mines."),v.forEach(p)},m(d,g){I(d,e,g),m(e,s),I(d,l,g),I(d,t,g),m(t,f),m(t,r),m(t,o),m(t,c),m(t,u),m(t,h),m(t,w)},p(d,g){g&2&&n!==(n=d[1].width+"")&&Y(r,n),g&2&&a!==(a=d[1].height+"")&&Y(c,a),g&2&&_!==(_=d[1].numMines+"")&&Y(h,_)},d(d){d&&p(e),d&&p(l),d&&p(t)}}}function qe(i){let e,s,l,t,f,n,r,o,a,c,u,_,h,w,d,g,v,Z;f=new Te({});function x(E,L){var V,j;if(((V=E[1])==null?void 0:V.state)===D.Won)return We;if(((j=E[1])==null?void 0:j.state)===D.Lost)return Ae}let F=x(i),C=F&&F(i);return{c(){e=y("main"),s=y("section"),l=y("div"),t=B(),de(f.$$.fragment),n=B(),r=y("dialog"),o=y("div"),C&&C.c(),a=B(),c=y("div"),u=y("button"),_=k("Back to Menu"),h=B(),w=y("button"),d=k("New Game"),this.h()},l(E){e=$(E,"MAIN",{class:!0});var L=N(e);s=$(L,"SECTION",{class:!0});var V=N(s);l=$(V,"DIV",{class:!0}),N(l).forEach(p),V.forEach(p),t=P(L),he(f.$$.fragment,L),n=P(L),r=$(L,"DIALOG",{class:!0});var j=N(r);o=$(j,"DIV",{class:!0});var W=N(o);C&&C.l(W),a=P(W),c=$(W,"DIV",{class:!0});var q=N(c);u=$(q,"BUTTON",{class:!0});var ee=N(u);_=M(ee,"Back to Menu"),ee.forEach(p),h=P(q),w=$(q,"BUTTON",{class:!0});var te=N(w);d=M(te,"New Game"),te.forEach(p),q.forEach(p),W.forEach(p),j.forEach(p),L.forEach(p),this.h()},h(){b(l,"class","click-type-container"),b(s,"class","save-game-sidebar"),b(u,"class","goto-menu"),b(w,"class","new-game"),b(c,"class","buttons-container-vertical svelte-c2sjrf"),b(o,"class","modal-main svelte-c2sjrf"),b(r,"class","aftergame-modal svelte-c2sjrf"),b(e,"class","wrapper svelte-c2sjrf")},m(E,L){I(E,e,L),m(e,s),m(s,l),m(e,t),me(f,e,null),m(e,n),m(e,r),m(r,o),C&&C.m(o,null),m(o,a),m(o,c),m(c,u),m(u,_),m(c,h),m(c,w),m(w,d),i[4](r),g=!0,v||(Z=[R(u,"click",i[3]),R(w,"click",i[2])],v=!0)},p(E,[L]){F===(F=x(E))&&C?C.p(E,L):(C&&C.d(1),C=F&&F(E),C&&(C.c(),C.m(o,a)))},i(E){g||(G(f.$$.fragment,E),g=!0)},o(E){S(f.$$.fragment,E),g=!1},d(E){E&&p(e),pe(f),C&&C.d(),i[4](null),v=!1,ce(Z)}}}function Re(i,e,s){let l;_e(i,A,o=>s(1,l=o));let t;A.subscribe(o=>{var a;(o==null?void 0:o.state)!==D.Playing&&((a=t==null?void 0:t.showModal)==null||a.call(t))}),Me(()=>{l===null?se(`${ie}`):l.state!==D.Playing&&t.showModal()});const f=()=>{Ce(Ee[l.width]),t.close()},n=()=>{localStorage.removeItem(Ne),se(`${ie}`),t.close()};function r(o){we[o?"unshift":"push"](()=>{t=o,s(0,t)})}return[t,l,f,n,r]}class Xe extends z{constructor(e){super(),K(this,e,Re,qe,Q,{})}}export{Xe as default};