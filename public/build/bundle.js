var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(){return f("")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}function w(t,e,n){t.classList[n?"add":"remove"](e)}let y;function b(t){y=t}const v=[],x=[];let _=[];const E=[],k=Promise.resolve();let C=!1;function O(t){_.push(t)}const P=new Set;let T=0;function N(){if(0!==T)return;const t=y;do{try{for(;T<v.length;){const t=v[T];T++,b(t),j(t.$$)}}catch(t){throw v.length=0,T=0,t}for(b(null),v.length=0,T=0;x.length;)x.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];P.has(e)||(P.add(e),e())}_.length=0}while(v.length);for(;E.length;)E.pop()();C=!1,P.clear(),b(t)}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const L=new Set;let X;function A(t,e){t&&t.i&&(L.delete(t),t.i(e))}function S(t,e,n,r){if(t&&t.o){if(L.has(t))return;L.add(t),X.c.push((()=>{L.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function M(t){t&&t.c()}function D(t,n,l,s){const{fragment:c,after_update:i}=t.$$;c&&c.m(n,l),s||O((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(O)}function q(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];_.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),_=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(v.push(t),C||(C=!0,k.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,o,l,s,c,u,a,f=[-1]){const d=y;b(e);const h=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};a&&a(h.root);let p=!1;if(h.ctx=l?l(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),p&&B(e,t)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!s&&s(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();o.intro&&A(e.$$.fragment),D(e,o.target,o.anchor,o.customElement),N()}b(d)}class U{$destroy(){q(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function z(t){let e,n,r,o,l,u=t[1].winner+"",d=t[1].loser+"";return{c(){e=a("strong"),n=f(u),r=f(" won over "),o=a("strong"),l=f(d)},m(t,i){c(t,e,i),s(e,n),c(t,r,i),c(t,o,i),s(o,l)},p(t,e){1&e&&u!==(u=t[1].winner+"")&&m(n,u),1&e&&d!==(d=t[1].loser+"")&&m(l,d)},d(t){t&&i(e),t&&i(r),t&&i(o)}}}function F(t){let e,n,r,o,l,u,d,h=t[1].winner+"",p=t[1].loser+"";return{c(){e=a("strong"),n=f(h),r=f(" played with "),o=a("strong"),l=f(p),u=f(" with result "),d=a("strong"),d.textContent="draw."},m(t,i){c(t,e,i),s(e,n),c(t,r,i),c(t,o,i),s(o,l),c(t,u,i),c(t,d,i)},p(t,e){1&e&&h!==(h=t[1].winner+"")&&m(n,h),1&e&&p!==(p=t[1].loser+"")&&m(l,p)},d(t){t&&i(e),t&&i(r),t&&i(o),t&&i(u),t&&i(d)}}}function G(t){let e,n,r,o,l=t[3]+1+"";function u(t,e){return t[1].draw?F:z}let h=u(t),p=h(t);return{c(){e=a("li"),n=f(l),r=f(".       \n        "),p.c(),o=d()},m(t,l){c(t,e,l),s(e,n),s(e,r),p.m(e,null),s(e,o)},p(t,n){h===(h=u(t))&&p?p.p(t,n):(p.d(1),p=h(t),p&&(p.c(),p.m(e,o)))},d(t){t&&i(e),p.d()}}}function H(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=G(W(e,r,t));return{c(){n=a("ul");for(let t=0;t<o.length;t+=1)o[t].c();g(n,"class","svelte-1m5evbw")},m(t,e){c(t,n,e);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(n,null)},p(t,[e]){if(1&e){let l;for(r=t[0],l=0;l<r.length;l+=1){const s=W(t,r,l);o[l]?o[l].p(s,e):(o[l]=G(s),o[l].c(),o[l].m(n,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},i:t,o:t,d(t){t&&i(n),u(o,t)}}}function I(t,e,n){let{history:r=[]}=e;return t.$$set=t=>{"history"in t&&n(0,r=t.history)},[r]}class J extends U{constructor(t){super(),R(this,t,I,H,l,{history:0})}}function K(t,e,n){const r=t.slice();return r[1]=e[n],r}function Q(t){let e,n,r,o,l,u,h,p,g,$,w,y,b,v,x,_=t[1].player+"",E=t[1].wins+"",k=t[1].draws+"",C=t[1].losses+"";return{c(){e=a("li"),n=a("strong"),r=f(_),o=f(": - "),l=a("strong"),l.textContent="Wins:",u=d(),h=f(E),p=f(" - "),g=a("strong"),g.textContent="Draw:",$=d(),w=f(k),y=f(" - "),b=a("strong"),b.textContent="Losses:",v=d(),x=f(C)},m(t,i){c(t,e,i),s(e,n),s(n,r),s(e,o),s(e,l),s(e,u),s(e,h),s(e,p),s(e,g),s(e,$),s(e,w),s(e,y),s(e,b),s(e,v),s(e,x)},p(t,e){1&e&&_!==(_=t[1].player+"")&&m(r,_),1&e&&E!==(E=t[1].wins+"")&&m(h,E),1&e&&k!==(k=t[1].draws+"")&&m(w,k),1&e&&C!==(C=t[1].losses+"")&&m(x,C)},d(t){t&&i(e)}}}function V(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=Q(K(e,r,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=h()},m(t,e){for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(t,e);c(t,n,e)},p(t,[e]){if(1&e){let l;for(r=t[0],l=0;l<r.length;l+=1){const s=K(t,r,l);o[l]?o[l].p(s,e):(o[l]=Q(s),o[l].c(),o[l].m(n.parentNode,n))}for(;l<o.length;l+=1)o[l].d(1);o.length=r.length}},i:t,o:t,d(t){u(o,t),t&&i(n)}}}function Y(t,e,n){let{leaderboard:r=[]}=e;return t.$$set=t=>{"leaderboard"in t&&n(0,r=t.leaderboard)},[r]}class Z extends U{constructor(t){super(),R(this,t,Y,V,l,{leaderboard:0})}}function tt(t,e,n){const r=t.slice();return r[22]=e[n],r[24]=n,r}function et(t,e,n){const r=t.slice();return r[25]=e[n],r[27]=n,r}function nt(t){let e,n,r,o,l,u=t[25]+"";function h(){return t[13](t[24],t[27])}return{c(){e=a("div"),n=f(u),r=d(),g(e,"class","cell svelte-vba4j0")},m(t,i){c(t,e,i),s(e,n),s(e,r),o||(l=p(e,"click",h),o=!0)},p(e,r){t=e,1&r&&u!==(u=t[25]+"")&&m(n,u)},d(t){t&&i(e),o=!1,l()}}}function rt(t){let e,n=t[22],r=[];for(let e=0;e<n.length;e+=1)r[e]=nt(et(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=h()},m(t,n){for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,n);c(t,e,n)},p(t,o){if(2049&o){let l;for(n=t[22],l=0;l<n.length;l+=1){const s=et(t,n,l);r[l]?r[l].p(s,o):(r[l]=nt(s),r[l].c(),r[l].m(e.parentNode,e))}for(;l<r.length;l+=1)r[l].d(1);r.length=n.length}},d(t){u(r,t),t&&i(e)}}}function ot(t){let e,n,o,l,h,y,b,v,x,_,E,k,C,O,P,T,N,j,L,X,B,R,U,W,z,F,G,H,I,K,Q,V,Y,et,nt,ot,lt,st,ct=t[0],it=[];for(let e=0;e<ct.length;e+=1)it[e]=rt(tt(t,ct,e));return Q=new Z({props:{leaderboard:t[3]}}),nt=new J({props:{history:t[2]}}),{c(){e=d(),n=a("h1"),n.textContent="TicTacToe in Svelte",o=d(),l=a("div");for(let t=0;t<it.length;t+=1)it[t].c();h=d(),y=a("div"),b=a("p"),v=f("Current player: "),x=a("strong"),_=f(t[5]),E=f(" | "),k=f(t[6]),C=d(),O=a("p"),P=f("Player1 name: "),T=f(t[7]),N=d(),j=a("p"),L=f("Player2 name: "),X=f(t[8]),B=d(),R=a("input"),U=d(),W=a("input"),z=d(),F=a("button"),G=f("Update player names"),H=d(),I=a("h2"),I.textContent="Leaderboard:",K=d(),M(Q.$$.fragment),V=d(),Y=a("h2"),Y.textContent="Results history:",et=d(),M(nt.$$.fragment),document.title="TicTacToe in Svelte",g(l,"class","board svelte-vba4j0"),w(l,"activePE",t[1]),g(R,"id","p1"),g(R,"placeholder","Enter name of the Player 1"),g(W,"id","p2"),g(W,"placeholder","Enter name of the Player 2"),g(F,"type","button"),F.disabled=t[4],g(y,"class","players")},m(r,i){c(r,e,i),c(r,n,i),c(r,o,i),c(r,l,i);for(let t=0;t<it.length;t+=1)it[t]&&it[t].m(l,null);c(r,h,i),c(r,y,i),s(y,b),s(b,v),s(b,x),s(x,_),s(x,E),s(x,k),s(y,C),s(y,O),s(O,P),s(O,T),s(y,N),s(y,j),s(j,L),s(j,X),s(y,B),s(y,R),$(R,t[9]),s(y,U),s(y,W),$(W,t[10]),s(y,z),s(y,F),s(F,G),c(r,H,i),c(r,I,i),c(r,K,i),D(Q,r,i),c(r,V,i),c(r,Y,i),c(r,et,i),D(nt,r,i),ot=!0,lt||(st=[p(R,"input",t[14]),p(W,"input",t[15]),p(F,"click",t[12])],lt=!0)},p(t,[e]){if(2049&e){let n;for(ct=t[0],n=0;n<ct.length;n+=1){const r=tt(t,ct,n);it[n]?it[n].p(r,e):(it[n]=rt(r),it[n].c(),it[n].m(l,null))}for(;n<it.length;n+=1)it[n].d(1);it.length=ct.length}(!ot||2&e)&&w(l,"activePE",t[1]),(!ot||32&e)&&m(_,t[5]),(!ot||64&e)&&m(k,t[6]),(!ot||128&e)&&m(T,t[7]),(!ot||256&e)&&m(X,t[8]),512&e&&R.value!==t[9]&&$(R,t[9]),1024&e&&W.value!==t[10]&&$(W,t[10]),(!ot||16&e)&&(F.disabled=t[4]);const n={};8&e&&(n.leaderboard=t[3]),Q.$set(n);const r={};4&e&&(r.history=t[2]),nt.$set(r)},i(t){ot||(A(Q.$$.fragment,t),A(nt.$$.fragment,t),ot=!0)},o(t){S(Q.$$.fragment,t),S(nt.$$.fragment,t),ot=!1},d(t){t&&i(e),t&&i(n),t&&i(o),t&&i(l),u(it,t),t&&i(h),t&&i(y),t&&i(H),t&&i(I),t&&i(K),q(Q,t),t&&i(V),t&&i(Y),t&&i(et),q(nt,t),lt=!1,r(st)}}}function lt(t,e,n){let r=[["","",""],["","",""],["","",""]],o=!1,l=0,s=[],c=[],i=!1,u=!1,a="X";a=1===Math.floor(2*Math.random()+1)?"X":"O";let f,d,h=a,p="",g="";function m(){n(6,h="O"===a?p:g)}function $(t,e,r){let o=c.find((e=>e.player===t)),l=c.find((t=>t.player===e));r?(o.draws+=1,l.draws+=1):(o.wins+=1,l.losses+=1),n(3,c),c.sort(((t,e)=>t.wins!==e.wins?e.wins-t.wins:t.draws!==e.draws?e.draws-t.draws:t.losses-e.losses)),n(3,c)}function w(t,e){n(4,i=!0),""===r[t][e]&&(n(0,r[t][e]=a,r),function(){for(let t=0;t<3;t++)(r[t][0]&&r[t][0]===r[t][1]&&r[t][0]===r[t][2]||r[0][t]&&r[0][t]===r[1][t]&&r[0][t]===r[2][t])&&(l=1);(r[0][0]&&r[0][0]===r[1][1]&&r[0][0]===r[2][2]||r[0][2]&&r[0][2]===r[1][1]&&r[0][2]===r[2][0])&&(l=1);r.flat().includes("")||(l=2);if(1===l){alert(`${h} | ${a} wins!`);let t=h===p?g:p;u=!1,s.push({winner:h,loser:t,draw:u}),n(2,s),$(h,t,u)}if(2===l){alert("Draw!");let t=h===p?g:p;u=!0,s.push({winner:h,loser:t,draw:u}),n(2,s),$(h,t,u)}l>0&&(l=0,u=!1,n(0,r=[["","",""],["","",""],["","",""]]),n(5,a="X"),n(4,i=!1))}(),n(5,a="X"===a?"O":"X"),m())}return[r,o,s,c,i,a,h,p,g,f,d,w,function(){void 0!==f&&void 0!==d&&f!==d&&(n(1,o=!0),n(7,p=f),n(8,g=d),m(),c.some((t=>t.player===p))||c.push({player:p,wins:0,draws:0,losses:0}),c.some((t=>t.player===g))||c.push({player:g,wins:0,draws:0,losses:0}),n(3,c))},(t,e)=>w(t,e),function(){f=this.value,n(9,f)},function(){d=this.value,n(10,d)}]}class st extends U{constructor(t){super(),R(this,t,lt,ot,l,{})}}function ct(e){let n,r,o;return r=new st({}),{c(){n=a("main"),M(r.$$.fragment)},m(t,e){c(t,n,e),D(r,n,null),o=!0},p:t,i(t){o||(A(r.$$.fragment,t),o=!0)},o(t){S(r.$$.fragment,t),o=!1},d(t){t&&i(n),q(r)}}}return new class extends U{constructor(t){super(),R(this,t,null,ct,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
