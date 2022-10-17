var Ee=Object.defineProperty;var ke=(e,t,s)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var T=(e,t,s)=>(ke(e,typeof t!="symbol"?t+"":t,s),s);import{d as k,w as j,c as Ie}from"./singletons-671b2808.js";import{T as be,S as K,i as Z,s as Q,k as M,l as w,m as E,h as y,n as u,b as V,A as U,o as Ne,M as Ae,U as Ce,V as X,a as A,c as C,W as ie,p as N,X as ne,G as _,J as ye,Y as Ge,f as O,g as Oe,t as H,d as Re,Z as ae,K as Le,_ as Te,$ as oe,B as re,q as J,r as q,D as ce,E as he,F as fe}from"./index-35a657ee.js";const de="v0.3.0";function He(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function st(e){const t=Math.floor(e/3600),s=Math.floor(e/60)%60,l=e%60;let i="";return t>0&&(i+=t.toString().padStart(2,"0")+":"),i+=s.toString().padStart(2,"0")+":",i+=l.toString().padStart(2,"0"),i}var Y=(e=>(e.Closed="closed",e.Opened="opened",e.Flagged="flagged",e))(Y||{}),Me=(e=>(e.Empty="empty",e.Mine="mine",e))(Me||{}),Pe=(e=>(e.Playing="playing",e.Won="won",e.Lost="lost",e))(Pe||{}),Ze,Qe,ze;class D{}Ze=8,Qe=12,ze=16,T(D,Ze,{width:8,height:8,numMines:10}),T(D,Qe,{width:12,height:12,numMines:20}),T(D,ze,{width:16,height:16,numMines:40});const lt=e=>{const t=Array(e.width*e.height);for(let l=0;l<e.height*e.width;l++)t[l]={state:"closed",numNeighborMines:0,type:"empty"};const s={board:t,...e,firstMove:!0,state:"playing",lostToCell:-1,title:"Save Game ",stats:{timePlayed:0}};for(let l=0;l<e.numMines;l++)Ve(s);return We(s),s},Ve=(e,t=[])=>{const s=[];for(let i=0;i<e.width*e.height;i++)e.board[i].type==="empty"&&t.indexOf(i)===-1&&s.push(i);const l=s[He(0,s.length)];e.board[l].type="mine"},We=e=>{for(let t=0;t<(e==null?void 0:e.width);t++)for(let s=0;s<(e==null?void 0:e.height);s++){let l=0;for(let n=0;n<9;n++){const c=Math.floor(n/3)-1,a=n%3-1,g=t+c,h=s+a;if(g<0||g>=e.width||h<0||h>=e.height)continue;const o=h*e.width+g;e.board[o].type==="mine"&&(l+=1)}const i=s*e.width+t;e.board[i].numNeighborMines=l}};k.disable_scroll_handling;const Fe=k.goto;k.invalidate;k.invalidateAll;k.prefetch;k.prefetch_routes;k.before_navigate;k.after_navigate;const we="MINESWEEPER_SAVE_SLOTS",z="MINESWEEPER_SAVE_GAME",xe=e=>{let t=localStorage[z+`_${e}`];return t?JSON.parse(t):null},Se=(e,t)=>{ve(e),localStorage[z+`_${e}`]=JSON.stringify(t)},ve=e=>{localStorage.removeItem(z+`_${e}`)};let $=j(null);$.subscribe(e=>{if(typeof window<"u"&&e!=null){let t=be(P);Se(t,e)}});let P=j(-1);P.subscribe(e=>{typeof window<"u"&&e!=null&&e!=-1&&$.set(xe(e))});let R=j(null);R.subscribe(e=>{typeof window<"u"&&e!=null&&(localStorage[we]=JSON.stringify(e.map(t=>t.index)))});var pe;typeof window<"u"&&R.set(JSON.parse((pe=localStorage[we])!=null?pe:"[]").map(e=>({index:e,selected:!1})));const it=e=>{R.update(t=>(t.splice(t.findIndex(s=>s.index===e),1),t)),ve(e)},nt=e=>{let t=be(R),s;for(let l=0;;l++)if(t.findIndex(i=>i.index===l)===-1){s=l;break}e.title+=s,Se(s,e),P.set(-1),P.set(s),R.update(l=>{var i;return(i=l==null?void 0:l.push)==null||i.call(l,{index:s,selected:!1}),l}),$.set(e)};function Be(e){let t,s,l;return{c(){t=M("canvas"),this.h()},l(i){t=w(i,"CANVAS",{width:!0,height:!0,class:!0}),E(t).forEach(y),this.h()},h(){u(t,"width",s=e[0].width+"px"),u(t,"height",l=e[0].height+"px"),u(t,"class","svelte-jhkqpr")},m(i,n){V(i,t,n),e[4](t)},p(i,[n]){n&1&&s!==(s=i[0].width+"px")&&u(t,"width",s),n&1&&l!==(l=i[0].height+"px")&&u(t,"height",l)},i:U,o:U,d(i){i&&y(t),e[4](null)}}}function Je(e,t,s){let{showMines:l=!1}=t,{game:i}=t;const n={mine:"red",closed:"navy",empty:"blue",flag:"gold",clickedMine:"violet"};let c,a;Ne(()=>{s(3,a=c.getContext("2d")),s(3,a.imageSmoothingEnabled=!1,a),a.clearRect(0,0,c.width,c.height)});function g(h){Ae[h?"unshift":"push"](()=>{c=h,s(1,c)})}return e.$$set=h=>{"showMines"in h&&s(2,l=h.showMines),"game"in h&&s(0,i=h.game)},e.$$.update=()=>{if(e.$$.dirty&15&&a){const h=c.width/i.width,o=c.height/i.height;for(let r=0;r<i.width*i.height;r++){const d=i.board[r],G=r%i.width,S=Math.floor(r/i.height);r===i.lostToCell&&l?s(3,a.fillStyle=n.clickedMine,a):d.state===Y.Closed?s(3,a.fillStyle=n.closed,a):d.type===Me.Mine&&l?s(3,a.fillStyle=n.mine,a):d.state===Y.Flagged?s(3,a.fillStyle=n.flag,a):s(3,a.fillStyle=n.empty,a),a.fillRect(G*h,S*o,h,o)}}},[i,c,l,a,g]}class at extends K{constructor(t){super(),Z(this,t,Je,Be,Q,{showMines:2,game:0})}}function ue(e,{delay:t=0,duration:s=400,easing:l=Ce}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:l,css:n=>`opacity: ${n*i}`}}const qe=""+new URL("../assets/check-ce7a5ec0.svg",import.meta.url).href;function _e(e){let t,s,l,i;return{c(){t=M("img"),this.h()},l(n){t=w(n,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Le(t.src,s=qe)||u(t,"src",s),u(t,"alt",""),u(t,"class","svelte-8hkayd")},m(n,c){V(n,t,c),i=!0},p:U,i(n){i||(n&&Te(()=>{l||(l=oe(t,ue,{duration:50},!0)),l.run(1)}),i=!0)},o(n){n&&(l||(l=oe(t,ue,{duration:50},!1)),l.run(0)),i=!1},d(n){n&&y(t),n&&l&&l.end()}}}function De(e){let t,s,l,i=`${e[2]}rem`,n=`${e[2]}rem`,c,a,g=[{type:"checkbox"},e[3]],h={};for(let r=0;r<g.length;r+=1)h=X(h,g[r]);let o=e[0]&&_e();return{c(){t=M("div"),s=M("input"),l=A(),o&&o.c(),this.h()},l(r){t=w(r,"DIV",{class:!0});var d=E(t);s=w(d,"INPUT",{type:!0}),l=C(d),o&&o.l(d),d.forEach(y),this.h()},h(){ie(s,h),N(s,"border-color",e[1],!1),ne(s,"svelte-8hkayd",!0),u(t,"class","wrapper svelte-8hkayd"),N(t,"width",i,!1),N(t,"height",n,!1)},m(r,d){V(r,t,d),_(t,s),s.autofocus&&s.focus(),s.checked=e[0],_(t,l),o&&o.m(t,null),c||(a=ye(s,"change",e[4]),c=!0)},p(r,[d]){ie(s,h=Ge(g,[{type:"checkbox"},d&8&&r[3]])),d&1&&(s.checked=r[0]),N(s,"border-color",r[1],!1),ne(s,"svelte-8hkayd",!0),r[0]?o?(o.p(r,d),d&1&&O(o,1)):(o=_e(),o.c(),O(o,1),o.m(t,null)):o&&(Oe(),H(o,1,1,()=>{o=null}),Re()),d&4&&i!==(i=`${r[2]}rem`)&&N(t,"width",i,!1),d&4&&n!==(n=`${r[2]}rem`)&&N(t,"height",n,!1)},i(r){O(o)},o(r){H(o)},d(r){r&&y(t),o&&o.d(),c=!1,a()}}}function Ue(e,t,s){let{checked:l}=t,{borderColor:i="black"}=t,{size:n=1.5}=t;function c(){l=this.checked,s(0,l)}return e.$$set=a=>{s(3,t=X(X({},t),ae(a))),"checked"in a&&s(0,l=a.checked),"borderColor"in a&&s(1,i=a.borderColor),"size"in a&&s(2,n=a.size)},t=ae(t),[l,i,n,t,c]}class ot extends K{constructor(t){super(),Z(this,t,Ue,De,Q,{checked:0,borderColor:1,size:2})}}const Xe=e=>({}),ge=e=>({class:"content"}),Ye=e=>({}),me=e=>({});function je(e){let t,s,l,i,n,c,a,g,h,o,r,d,G,S,W,v,F,ee;const x=e[2].sidebar,m=re(x,e,e[1],me),B=e[2].content,p=re(B,e,e[1],ge);return{c(){t=M("main"),s=M("aside"),l=M("header"),i=M("h1"),n=J("MineSweeper"),c=A(),a=M("h3"),g=J("By SFG and TMH"),h=A(),o=M("hr"),r=A(),m&&m.c(),d=A(),p&&p.c(),G=A(),S=M("footer"),W=J(de),this.h()},l(f){t=w(f,"MAIN",{class:!0});var b=E(t);s=w(b,"ASIDE",{class:!0});var I=E(s);l=w(I,"HEADER",{class:!0});var L=E(l);i=w(L,"H1",{id:!0,class:!0});var te=E(i);n=q(te,"MineSweeper"),te.forEach(y),c=C(L),a=w(L,"H3",{id:!0,class:!0});var se=E(a);g=q(se,"By SFG and TMH"),se.forEach(y),L.forEach(y),h=C(I),o=w(I,"HR",{class:!0}),r=C(I),m&&m.l(I),I.forEach(y),d=C(b),p&&p.l(b),G=C(b),S=w(b,"FOOTER",{class:!0});var le=E(S);W=q(le,de),le.forEach(y),b.forEach(y),this.h()},h(){u(i,"id","title"),u(i,"class","svelte-18eget0"),u(a,"id","creator"),u(a,"class","svelte-18eget0"),u(l,"class","svelte-18eget0"),u(o,"class","svelte-18eget0"),u(s,"class","sidebar svelte-18eget0"),u(S,"class","version svelte-18eget0"),u(t,"class","wrapper svelte-18eget0")},m(f,b){V(f,t,b),_(t,s),_(s,l),_(l,i),_(i,n),_(l,c),_(l,a),_(a,g),_(s,h),_(s,o),_(s,r),m&&m.m(s,null),_(t,d),p&&p.m(t,null),_(t,G),_(t,S),_(S,W),v=!0,F||(ee=ye(l,"click",e[0]),F=!0)},p(f,[b]){m&&m.p&&(!v||b&2)&&ce(m,x,f,f[1],v?fe(x,f[1],b,Ye):he(f[1]),me),p&&p.p&&(!v||b&2)&&ce(p,B,f,f[1],v?fe(B,f[1],b,Xe):he(f[1]),ge)},i(f){v||(O(m,f),O(p,f),v=!0)},o(f){H(m,f),H(p,f),v=!1},d(f){f&&y(t),m&&m.d(f),p&&p.d(f),F=!1,ee()}}}function Ke(e,t,s){let{$$slots:l={},$$scope:i}=t;const n=()=>{Fe(`${Ie}`)};return e.$$set=c=>{"$$scope"in c&&s(1,i=c.$$scope)},[n,i,l]}class rt extends K{constructor(t){super(),Z(this,t,Ke,je,Q,{})}}export{D as B,ot as C,Pe as G,at as M,rt as S,nt as a,Y as b,P as c,it as d,Me as e,ue as f,Fe as g,$ as h,xe as l,lt as n,We as r,Ve as s,st as t,R as u};
