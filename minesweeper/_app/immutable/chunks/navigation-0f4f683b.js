var b=Object.defineProperty;var g=(t,n,e)=>n in t?b(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var c=(t,n,e)=>(g(t,typeof n!="symbol"?n+"":n,e),e);import{w as M,c as s}from"./singletons-28df8af2.js";function w(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t)+t)}const _=()=>localStorage.MINESWEEPER_SAVE_GAME?JSON.parse(localStorage.MINESWEEPER_SAVE_GAME):null;let h;typeof window<"u"?h=M(_()):h=M(null);h.subscribe(t=>{typeof window<"u"&&t!=null&&(localStorage.MINESWEEPER_SAVE_GAME=JSON.stringify(t))});var y=(t=>(t.Opened="opened",t.Closed="closed",t.Flagged="flagged",t))(y||{}),N=(t=>(t.Playing="playing",t.Won="won",t.Lost="lost",t))(N||{});function A({width:t,height:n,numMines:e}){let o=Array(t*n),d=Array(t*n).fill(0);for(let i=0;i<t;i++)for(let r=0;r<n;r++){const l=r*t+i;o[l]={state:"closed",numNeighborMines:0,isMine:d[l]===1}}return o}var I,P,x;class u{}I=8,P=12,x=16,c(u,I,{width:8,height:8,numMines:10}),c(u,P,{width:12,height:12,numMines:20}),c(u,x,{width:16,height:16,numMines:40});const O=t=>{const e={board:A(t),width:t.width,height:t.height,numMines:t.numMines,firstMove:!0,state:"playing"};for(let o=0;o<t.numMines;o++)E(e);v(e),h.set(e)},E=t=>{const n=w(0,t.width),e=w(0,t.height);t.board[e*t.width+n].isMine?E(t):t.board[e*t.width+n].isMine=!0},v=t=>{for(let n=0;n<(t==null?void 0:t.width);n++)for(let e=0;e<(t==null?void 0:t.height);e++){let o=0;for(let i=0;i<9;i++){const r=Math.floor(i/3)-1,l=i%3-1,f=n+r,a=e+l;if(f<0||f>=t.width||a<0||a>=t.height)continue;const p=a*t.width+f;t.board[p].isMine&&(o+=1)}const d=e*t.width+n;t.board[d].numNeighborMines=o}};s.disable_scroll_handling;const R=s.goto;s.invalidate;s.invalidateAll;s.prefetch;s.prefetch_routes;s.before_navigate;s.after_navigate;export{u as B,y as C,N as G,h as a,R as g,O as n,v as r,E as s};
