(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(n,e,t){n.exports=t(45)},34:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),u=(t(34),t(12)),i=t(10),l=t(1),s=t(2);function m(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 85%;\n  margin: 0;\n  padding-top: 1rem;\n  list-style: none;\n"]);return m=function(){return n},n}function p(){var n=Object(l.a)(["\n  width: 85%;\n  margin: 0 auto;\n"]);return p=function(){return n},n}var d=s.a.div(p()),b=s.a.ul(m());function f(){var n=Object(l.a)(["\n  margin: 0;\n  padding: 2rem 0;\n  text-align: center;\n  color: #FFFFFF;\n\n  @media (max-width: 650px) {\n    font-size: 1.5rem;\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(l.a)(["\n  background-color: #1e88e5;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n  box-sizing: border-box;\n"]);return x=function(){return n},n}var h=s.a.header(x()),g=s.a.h1(f()),v=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null,a.a.createElement(d,null,a.a.createElement(g,null,"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u0447\u0435\u0442\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"))))},j=t(6),E=t.n(j),O=t(9),w=t(4),k=function(){var n=Object(r.useState)(!1),e=Object(w.a)(n,2),t=e[0],a=e[1];return{loading:t,request:Object(r.useCallback)(function(){var n=Object(O.a)(E.a.mark((function n(e){var t,r,o,c,u,i=arguments;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,o=i.length>3&&void 0!==i[3]?i[3]:{},a(!0),n.prev=4,r&&(r=JSON.stringify(r),o["Content-Type"]="application/json"),n.next=8,fetch(e,{method:t,body:r,headers:o});case 8:return c=n.sent,n.next=11,c.json();case 11:if(u=n.sent,c.ok){n.next=14;break}throw new Error(u.message||"Something went wrong");case 14:return a(!1),n.abrupt("return",u);case 18:throw n.prev=18,n.t0=n.catch(4),a(!1),n.t0;case 22:case"end":return n.stop()}}),n,null,[[4,18]])})));return function(e){return n.apply(this,arguments)}}(),[])}};function y(){var n=Object(l.a)(["\n  color: black;\n"]);return y=function(){return n},n}function S(){var n=Object(l.a)(["\n  max-width: 200px;\n  height: auto;\n"]);return S=function(){return n},n}function C(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  text-decoration: none;\n  margin: 0 auto;\n  height: 100%;\n"]);return C=function(){return n},n}function F(){var n=Object(l.a)(["\n  width: 300px;\n  margin-right: 1.5rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #fff59d;\n  opacity: .7;\n  border-radius: 10px;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n  &:hover {\n    background-color: #fff176;\n  }\n"]);return F=function(){return n},n}var z=s.a.li(F()),q=Object(s.a)(u.b)(C()),J=s.a.img(S()),N=s.a.span(y()),T=function(n){var e=n.operator;return a.a.createElement(z,null,a.a.createElement(q,{to:"/pay/".concat(e.id)},a.a.createElement(J,{src:e.image,alt:e.title}),a.a.createElement(N,null,e.title)))};function B(){var n=Object(l.a)(["\n  border: 6px solid #90caf9;\n  border-top: 6px solid #1e88e5;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  animation: "," 2s linear infinite;\n"]);return B=function(){return n},n}function I(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8em 0px;\n"]);return I=function(){return n},n}function L(){var n=Object(l.a)(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n"]);return L=function(){return n},n}var R=Object(s.b)(L()),W=s.a.div(I()),D=s.a.div(B(),R),G=function(){return a.a.createElement(W,null,a.a.createElement(D,null))},M=function(){var n=k(),e=n.request,t=n.loading,o=Object(r.useState)([]),c=Object(w.a)(o,2),u=c[0],i=c[1],l=Object(r.useCallback)(Object(O.a)(E.a.mark((function n(){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e("/api/operators");case 3:t=n.sent,i(t),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])}))),[e]);Object(r.useEffect)((function(){l()}),[l]);return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(G,null):function(n){return a.a.createElement(b,null,n.map((function(n){return a.a.createElement(T,{key:n.id,operator:n})})))}(u))},P=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),a.a.createElement(M,null))},$=t(27),_=t.n($),A=t(16),H=t(28),K=function(n,e){var t=Object(r.useState)({phone:"",sum:""}),a=Object(w.a)(t,2),o=a[0],c=a[1],u=Object(r.useState)({phone:"",sum:""}),i=Object(w.a)(u,2),l=i[0],s=i[1],m=Object(r.useState)(!1),p=Object(w.a)(m,2),d=p[0],b=p[1];Object(r.useEffect)((function(){0===Object.keys(l).length&&d&&n()}),[l,n,d]);return{handleChange:function(n){n.persist(),c((function(e){return Object(H.a)({},e,Object(A.a)({},n.target.name,n.target.value))}))},handleSubmit:function(n){n&&n.preventDefault(),s(e(o)),b(!0)},values:o,errors:l}},Q=function(n){var e={};return n.phone?n.phone.includes("_")&&(e.phone="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"):e.phone="\u0422\u0435\u043b\u0435\u0444\u043e\u043d - \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",n.sum?+n.sum<1||+n.sum>1e3?e.sum="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043e\u0442 1 \u0434\u043e 1000":isNaN(parseInt(n.sum))&&(e.sum="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e"):e.sum="\u0421\u0443\u043c\u043c\u0430 - \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",e};function U(){var n=Object(l.a)(["\n  background: #1e88e5;\n  border: 0;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 30px;\n  padding: 10px 15px;\n  transition: transform 100ms ease-out;\n\n  &:hover {\n    background: #1565c0;\n    transform: scale(1.1);\n  }\n"]);return U=function(){return n},n}function V(){var n=Object(l.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 25px;\n"]);return V=function(){return n},n}function X(){var n=Object(l.a)(["\n  background: #e3f2fd;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 50px auto;\n  padding: 15px;\n  width: 560px;\n"]);return X=function(){return n},n}function Y(){var n=Object(l.a)(["\n\tbackground: rgba(0, 0, 0, .65);\n\tbottom: 0;\n\tleft: 0;\n\toverflow: auto;\n\tposition: fixed;\n\tright: 0;\n\ttop: 0;\n\tz-index: 1;\n"]);return Y=function(){return n},n}var Z=s.a.div(Y()),nn=s.a.div(X()),en=s.a.h3(V()),tn=s.a.button(U()),rn=function(n){var e=n.onRequestClose,t=n.isSuccess;return Object(r.useEffect)((function(){function n(n){27===n.keyCode&&e()}return document.body.style.overflow="hidden",document.addEventListener("keydown",n),function(){document.body.style.overflow="visible",document.removeEventListener("keydown",n)}})),a.a.createElement(Z,null,a.a.createElement(nn,null,a.a.createElement(en,null,t?"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c":"\u041e\u0448\u0438\u0431\u043a\u0430"),t?a.a.createElement("p",null,"\u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d"):a.a.createElement("p",null,"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"),a.a.createElement("p",null,"\u0414\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u044f \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043d\u0438\u0436\u0435 \u0438\u043b\u0438 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 Esc."),a.a.createElement(tn,{type:"button",onClick:e},t?"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e":"\u0415\u0449\u0435 \u0440\u0430\u0437")))};function an(){var n=Object(l.a)(["\n  max-width: 200px;\n  height: auto;\n\n  @media (max-width: 500px) {\n    order: -1;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(l.a)(["\n  margin: 0;\n  margin-bottom: .5rem;\n  color: red;\n"]);return on=function(){return n},n}function cn(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  padding: .3rem .7rem;\n  background-color: #ffd54f;\n  border: none;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n  transition: background-color .2s ease-out;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\n    background-color: #ffecb3;\n  }\n"]);return cn=function(){return n},n}function un(){var n=Object(l.a)(["\n  margin-bottom: 1.5rem;\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #1e88e5;\n  -webkit-box-shadow: 0 1px 0 0 #1e88e5;\n  box-shadow: 0 1px 0 0 #1e88e5;\n"]);return un=function(){return n},n}function ln(){var n=Object(l.a)(["\n  border: none;\n  outline: none;\n  border-bottom: 1px solid #1e88e5;\n  -webkit-box-shadow: 0 1px 0 0 #1e88e5;\n  box-shadow: 0 1px 0 0 #1e88e5;\n  margin-bottom: 1.5rem;\n"]);return ln=function(){return n},n}function sn(){var n=Object(l.a)(["\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n\n  @media (max-width: 650px) {\n    font-size: 1.2rem;\n  }\n"]);return sn=function(){return n},n}function mn(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n"]);return mn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 25%;\n  width: 50%;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);\n  border-radius: 5px;\n\n  @media (max-width: 650px) {\n    margin-left: 0;\n    width: auto;\n  }\n\n  @media (max-width: 500px) {\n    flex-direction: column;\n  }\n"]);return pn=function(){return n},n}var dn=s.a.div(pn()),bn=s.a.div(mn()),fn=s.a.label(sn()),xn=s.a.input(ln()),hn=Object(s.a)(_.a)(un()),gn=s.a.button(cn()),vn=s.a.p(on()),jn=s.a.img(an()),En=function(n){var e=n.operator,t=Object(i.g)(),o=Object(r.useState)(!1),c=Object(w.a)(o,2),u=c[0],l=c[1],s=k().request,m=Object(r.useCallback)(Object(O.a)(E.a.mark((function n(){var e;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s("/api/result");case 3:e=n.sent,l("success"===e),j(!0),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),[s]),p=K(m,Q),d=p.values,b=p.errors,f=p.handleChange,x=p.handleSubmit,h=Object(r.useState)(!1),g=Object(w.a)(h,2),v=g[0],j=g[1];return a.a.createElement(dn,null,v&&a.a.createElement(rn,{isSuccess:u,onRequestClose:function(){j(!1),u&&t.push("/")}}),a.a.createElement("form",{action:"/pay",method:"POST",onSubmit:x},a.a.createElement(bn,null,a.a.createElement(fn,{htmlFor:"phone"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:"),a.a.createElement(hn,{onChange:f,value:d.phone,mask:"+7 (999) 999-99-99",id:"phone",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",name:"phone",required:!0}),b.phone&&a.a.createElement(vn,null,b.phone)),a.a.createElement(bn,null,a.a.createElement(fn,{htmlFor:"sum"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 (\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 1000\u0440):"),a.a.createElement(xn,{onChange:f,value:d.sum,id:"sum",placeholder:"\u0421\u0443\u043c\u043c\u0430",name:"sum",required:!0}),b.sum&&a.a.createElement(vn,null,b.sum)),a.a.createElement(gn,{type:"submit"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c")),a.a.createElement(jn,{src:e.image}))};function On(){var n=Object(l.a)(["\n  text-align: center;\n\n  @media (max-width: 650px) {\n    font-size: 1.5rem;\n  }\n"]);return On=function(){return n},n}var wn=s.a.h1(On()),kn=function(n){var e=n.match.params.id,t=Object(r.useState)({id:"",title:"",image:""}),o=Object(w.a)(t,2),c=o[0],u=o[1],i=k(),l=i.request,s=i.loading,m=Object(r.useCallback)(Object(O.a)(E.a.mark((function n(){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l("/api/operators/".concat(e));case 3:t=n.sent,u(t),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])}))),[l,e]);return Object(r.useEffect)((function(){m()}),[m]),a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),s?a.a.createElement(G,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(wn,null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u043f\u043b\u0430\u0442\u044b ",c.title),a.a.createElement(En,{operator:c})))};var yn=function(){var n=a.a.createElement(i.d,null,a.a.createElement(i.b,{path:"/",exact:!0},a.a.createElement(P,null)),a.a.createElement(i.b,{path:"/pay/:id",component:kn}),a.a.createElement(i.a,{to:"/"}));return a.a.createElement(u.a,null,n)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(yn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.52c80b93.chunk.js.map