var Me=Object.defineProperty;var Ee=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var j=(e,t,s)=>(Ee(e,typeof t!="symbol"?t+"":t,s),s);import{d as I,w as X}from"./singletons-41e2505e.js";import{U as me,S as Y,i as Z,s as K,k as M,l as E,m as k,h as w,n as u,b as V,A as q,o as ve,L as Se,V as ke,W as D,a as C,c as G,X as se,p as A,Y as le,G as _,J as Ie,Z as Ne,f as L,g as Ae,t as H,d as Ce,_ as ne,I as Ge,$ as Le,a0 as ie,B as ae,q as P,r as B,D as oe,E as re,F as ce}from"./index-b07a7884.js";function Re(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}var U=(e=>(e.Closed="closed",e.Opened="opened",e.Flagged="flagged",e))(U||{}),pe=(e=>(e.Empty="empty",e.Mine="mine",e))(pe||{}),Oe=(e=>(e.Playing="playing",e.Won="won",e.Lost="lost",e))(Oe||{}),Ue,Xe,Ye;class J{}Ue=8,Xe=12,Ye=16,j(J,Ue,{width:8,height:8,numMines:10}),j(J,Xe,{width:12,height:12,numMines:20}),j(J,Ye,{width:16,height:16,numMines:40});const ze=e=>{const t=Array(e.width*e.height);for(let l=0;l<e.height*e.width;l++)t[l]={state:"closed",numNeighborMines:0,type:"empty"};const s={board:t,...e,firstMove:!0,state:"playing",lostToCell:-1,title:"Save Game "};for(let l=0;l<e.numMines;l++)je(s);return He(s),s},je=(e,t=[])=>{const s=[];for(let n=0;n<e.width*e.height;n++)e.board[n].type==="empty"&&s.push(n);const l=s[Re(0,s.length)];e.board[l].type="mine"},He=e=>{for(let t=0;t<(e==null?void 0:e.width);t++)for(let s=0;s<(e==null?void 0:e.height);s++){let l=0;for(let i=0;i<9;i++){const a=Math.floor(i/3)-1,r=i%3-1,y=t+a,h=s+r;if(y<0||y>=e.width||h<0||h>=e.height)continue;const g=h*e.width+y;e.board[g].type==="mine"&&(l+=1)}const n=s*e.width+t;e.board[n].numNeighborMines=l}};I.disable_scroll_handling;const $e=I.goto;I.invalidate;I.invalidateAll;I.prefetch;I.prefetch_routes;I.before_navigate;I.after_navigate;const be="MINESWEEPER_SAVE_SLOTS",Q="MINESWEEPER_SAVE_GAME",Te=e=>{let t=localStorage[Q+`_${e}`];return t?JSON.parse(t):null},ye=(e,t)=>{we(e),localStorage[Q+`_${e}`]=JSON.stringify(t)},we=e=>{localStorage.removeItem(Q+`_${e}`)},he="v0.2.0";let z=X(null);z.subscribe(e=>{if(typeof window<"u"&&e!=null){let t=me(T);ye(t,e)}});let T=X(-1);T.subscribe(e=>{typeof window<"u"&&e!=null&&e!=-1&&z.set(Te(e))});let R=X(null);R.subscribe(e=>{typeof window<"u"&&e!=null&&(localStorage[be]=JSON.stringify(e.map(t=>t.index)))});var ge;typeof window<"u"&&R.set(JSON.parse((ge=localStorage[be])!=null?ge:"[]").map(e=>({index:e,selected:!1})));const et=e=>{R.update(t=>(t.splice(t.findIndex(s=>s.index===e),1),t)),we(e)},tt=e=>{let t=me(R),s;for(let l=0;;l++)if(t.findIndex(n=>n.index===l)===-1){s=l;break}e.title+=s,ye(s,e),T.set(-1),T.set(s),R.update(l=>{var n;return(n=l==null?void 0:l.push)==null||n.call(l,{index:s,selected:!1}),l}),z.set(e)};function Ve(e){let t,s,l;return{c(){t=M("canvas"),this.h()},l(n){t=E(n,"CANVAS",{width:!0,height:!0,class:!0}),k(t).forEach(w),this.h()},h(){u(t,"width",s=e[0].width+"px"),u(t,"height",l=e[0].height+"px"),u(t,"class","svelte-jhkqpr")},m(n,i){V(n,t,i),e[4](t)},p(n,[i]){i&1&&s!==(s=n[0].width+"px")&&u(t,"width",s),i&1&&l!==(l=n[0].height+"px")&&u(t,"height",l)},i:q,o:q,d(n){n&&w(t),e[4](null)}}}function We(e,t,s){let{showMines:l=!1}=t,{game:n}=t,i,a;ve(()=>{s(3,a=i.getContext("2d")),s(3,a.imageSmoothingEnabled=!1,a),a.fillRect(0,0,i.width,i.height)});const r={mine:"red",closed:"navy",empty:"blue",flag:"gold",clickedMine:"magenta"};function y(h){Se[h?"unshift":"push"](()=>{i=h,s(1,i)})}return e.$$set=h=>{"showMines"in h&&s(2,l=h.showMines),"game"in h&&s(0,n=h.game)},e.$$.update=()=>{if(e.$$.dirty&15&&a){const h=i.width/n.width,g=i.height/n.height;for(let o=0;o<n.width*n.height;o++){const c=n.board[o],d=o%n.width,v=Math.floor(o/n.height);c.state===U.Closed?s(3,a.fillStyle=r.closed,a):o===n.lostToCell&&l?s(3,a.fillStyle=r.clickedMine,a):c.type===pe.Mine&&l?s(3,a.fillStyle=r.mine,a):c.state===U.Flagged?s(3,a.fillStyle=r.flag,a):s(3,a.fillStyle=r.empty,a),a.fillRect(d*h,v*g,h,g)}}},[n,i,l,a,y]}class st extends Y{constructor(t){super(),Z(this,t,We,Ve,K,{showMines:2,game:0})}}function fe(e,{delay:t=0,duration:s=400,easing:l=ke}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:l,css:i=>`opacity: ${i*n}`}}const xe=""+new URL("../assets/check-ce7a5ec0.svg",import.meta.url).href;function de(e){let t,s,l,n;return{c(){t=M("img"),this.h()},l(i){t=E(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Ge(t.src,s=xe)||u(t,"src",s),u(t,"alt",""),u(t,"class","svelte-143f2yf")},m(i,a){V(i,t,a),n=!0},p:q,i(i){n||(Le(()=>{l||(l=ie(t,fe,{duration:50},!0)),l.run(1)}),n=!0)},o(i){l||(l=ie(t,fe,{duration:50},!1)),l.run(0),n=!1},d(i){i&&w(t),i&&l&&l.end()}}}function Fe(e){let t,s,l,n=`${e[2]}rem`,i=`${e[2]}rem`,a,r,y,h=[{type:"checkbox"},e[3]],g={};for(let c=0;c<h.length;c+=1)g=D(g,h[c]);let o=e[0]&&de();return{c(){t=M("div"),s=M("input"),l=C(),o&&o.c(),this.h()},l(c){t=E(c,"DIV",{class:!0});var d=k(t);s=E(d,"INPUT",{type:!0}),l=G(d),o&&o.l(d),d.forEach(w),this.h()},h(){se(s,g),A(s,"border-color",e[1],!1),le(s,"svelte-143f2yf",!0),u(t,"class","wrapper svelte-143f2yf"),A(t,"width",n,!1),A(t,"height",i,!1)},m(c,d){V(c,t,d),_(t,s),s.autofocus&&s.focus(),s.checked=e[0],_(t,l),o&&o.m(t,null),a=!0,r||(y=Ie(s,"change",e[4]),r=!0)},p(c,[d]){se(s,g=Ne(h,[{type:"checkbox"},d&8&&c[3]])),d&1&&(s.checked=c[0]),A(s,"border-color",c[1],!1),le(s,"svelte-143f2yf",!0),c[0]?o?(o.p(c,d),d&1&&L(o,1)):(o=de(),o.c(),L(o,1),o.m(t,null)):o&&(Ae(),H(o,1,1,()=>{o=null}),Ce()),d&4&&n!==(n=`${c[2]}rem`)&&A(t,"width",n,!1),d&4&&i!==(i=`${c[2]}rem`)&&A(t,"height",i,!1)},i(c){a||(L(o),a=!0)},o(c){H(o),a=!1},d(c){c&&w(t),o&&o.d(),r=!1,y()}}}function Pe(e,t,s){let{checked:l}=t,{borderColor:n="black"}=t,{size:i=1.5}=t;function a(){l=this.checked,s(0,l)}return e.$$set=r=>{s(3,t=D(D({},t),ne(r))),"checked"in r&&s(0,l=r.checked),"borderColor"in r&&s(1,n=r.borderColor),"size"in r&&s(2,i=r.size)},t=ne(t),[l,n,i,t,a]}class lt extends Y{constructor(t){super(),Z(this,t,Pe,Fe,K,{checked:0,borderColor:1,size:2})}}const Be=e=>({}),ue=e=>({class:"content"}),Je=e=>({}),_e=e=>({});function qe(e){let t,s,l,n,i,a,r,y,h,g,o,c,d,v,W,S;const x=e[1].sidebar,m=ae(x,e,e[0],_e),F=e[1].content,p=ae(F,e,e[0],ue);return{c(){t=M("main"),s=M("aside"),l=M("header"),n=M("h1"),i=P("MineSweeper"),a=C(),r=M("h3"),y=P("By SFG and TMH"),h=C(),g=M("hr"),o=C(),m&&m.c(),c=C(),p&&p.c(),d=C(),v=M("footer"),W=P(he),this.h()},l(f){t=E(f,"MAIN",{class:!0});var b=k(t);s=E(b,"ASIDE",{class:!0});var N=k(s);l=E(N,"HEADER",{class:!0});var O=k(l);n=E(O,"H1",{id:!0,class:!0});var $=k(n);i=B($,"MineSweeper"),$.forEach(w),a=G(O),r=E(O,"H3",{id:!0,class:!0});var ee=k(r);y=B(ee,"By SFG and TMH"),ee.forEach(w),O.forEach(w),h=G(N),g=E(N,"HR",{class:!0}),o=G(N),m&&m.l(N),N.forEach(w),c=G(b),p&&p.l(b),d=G(b),v=E(b,"FOOTER",{class:!0});var te=k(v);W=B(te,he),te.forEach(w),b.forEach(w),this.h()},h(){u(n,"id","title"),u(n,"class","svelte-1oaj3m2"),u(r,"id","creator"),u(r,"class","svelte-1oaj3m2"),u(l,"class","svelte-1oaj3m2"),u(g,"class","svelte-1oaj3m2"),u(s,"class","sidebar svelte-1oaj3m2"),u(v,"class","version svelte-1oaj3m2"),u(t,"class","wrapper svelte-1oaj3m2")},m(f,b){V(f,t,b),_(t,s),_(s,l),_(l,n),_(n,i),_(l,a),_(l,r),_(r,y),_(s,h),_(s,g),_(s,o),m&&m.m(s,null),_(t,c),p&&p.m(t,null),_(t,d),_(t,v),_(v,W),S=!0},p(f,[b]){m&&m.p&&(!S||b&1)&&oe(m,x,f,f[0],S?ce(x,f[0],b,Je):re(f[0]),_e),p&&p.p&&(!S||b&1)&&oe(p,F,f,f[0],S?ce(F,f[0],b,Be):re(f[0]),ue)},i(f){S||(L(m,f),L(p,f),S=!0)},o(f){H(m,f),H(p,f),S=!1},d(f){f&&w(t),m&&m.d(f),p&&p.d(f)}}}function De(e,t,s){let{$$slots:l={},$$scope:n}=t;return e.$$set=i=>{"$$scope"in i&&s(0,n=i.$$scope)},[n,l]}class nt extends Y{constructor(t){super(),Z(this,t,De,qe,K,{})}}export{J as B,lt as C,Oe as G,st as M,nt as S,tt as a,U as b,T as c,et as d,pe as e,fe as f,$e as g,z as h,Te as l,ze as n,He as r,je as s,R as u};
