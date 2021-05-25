(this["webpackJsonpexchange-coin"]=this["webpackJsonpexchange-coin"]||[]).push([[0],{35:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c,a,r=t(1),i=t.n(r),s=t(22),o=t.n(s),l=(t(35),t(29)),h=t(5),j=t.n(h),u=t(10),b=t(8),d=t(3),p=t(4),f=t(0),O=p.a.td(c||(c=Object(d.a)(["\n    border: 1px solid #cccccc;\n    width: 25vh;\n    color: white;\n"])));function x(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)(O,{children:e.name}),Object(f.jsx)(O,{children:e.ticker}),Object(f.jsxs)(O,{children:["$",e.price]}),e.showBalance?Object(f.jsxs)(O,{children:["$",e.balance]}):null,Object(f.jsx)(O,{children:Object(f.jsx)("form",{action:"#",method:"POST",children:Object(f.jsx)("button",{onClick:function(n){n.preventDefault(),e.handleRefresh(e.tickerId)},children:"Refresh"})})})]})}var m,g=p.a.table(a||(a=Object(d.a)(["\n  margin: 50px auto 50px auto;\n  display: inline-block;\n  font-size: 1.4rem;\n\n"])));function v(e){return Object(f.jsxs)(g,{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Ticker"}),Object(f.jsx)("th",{children:"Price"}),e.showBalance?Object(f.jsx)("th",{children:"Balance"}):null,Object(f.jsx)("th",{children:"Actions"})]})}),Object(f.jsx)("tbody",{children:e.coinData.map((function(n){var t=n.key,c=n.name,a=n.ticker,r=n.price,i=n.balance;return Object(f.jsx)(x,{handleRefresh:e.handleRefresh,name:c,ticker:a,showBalance:e.showBalance,balance:i,price:r,tickerId:t},t)}))})]})}var k=p.a.section(m||(m=Object(d.a)(["\n    font-size: 2rem;\n    text-align: left;\n    padding: 1.5rem 0 1.5rem 5rem;\n"])));function w(e){var n=e.showBalance?"Hide Balance":"Show Balance",t=null;return e.showBalance&&(t=Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("strong",{children:"Balance = $"})," ",e.amount]})),Object(f.jsxs)(k,{className:"balance",children:[t,Object(f.jsx)("button",{onClick:e.handleBalanceVisibilityChange,children:n})]})}var B,y,C,S,F=t(26),D=t(27),R=t(30),P=t(28),z=t.p+"static/media/logo.6ce24c58.svg",I=p.a.img(B||(B=Object(d.a)(["\n    height: 5rem;\n    pointer-events: none;\n"]))),N=p.a.header(y||(y=Object(d.a)(["\n    background-color: #292a2c;\n    min-height: 20vh;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 36px;\n    color: white;\n"]))),T=p.a.h1(C||(C=Object(d.a)(["\n    font-size: 4rem;\n"]))),E=function(e){Object(R.a)(t,e);var n=Object(P.a)(t);function t(){return Object(F.a)(this,t),n.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){return Object(f.jsxs)(N,{children:[Object(f.jsx)(I,{src:z,alt:"React logo"}),Object(f.jsx)(T,{children:"Coin Exchange"})]})}}]),t}(r.Component),$=t(7),q=t.n($),A=p.a.div(S||(S=Object(d.a)(["\n  text-align: center;\n  background-color: rgb(59, 59, 156);\n  color: #cccccc;\n"]))),J=function(e){return parseFloat(Number(e).toFixed(4))};var L=function(e){var n=i.a.useState(1e4),t=Object(b.a)(n,2),c=t[0],a=(t[1],i.a.useState(!0)),s=Object(b.a)(a,2),o=s[0],h=s[1],d=i.a.useState([]),p=Object(b.a)(d,2),O=p[0],x=p[1],m=function(){var e=Object(u.a)(j.a.mark((function e(){var n,t,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://api.coinpaprika.com/v1/coins");case 2:return n=e.sent,t=n.data.slice(0,10).map((function(e){return e.id})),"https://api.coinpaprika.com/v1/tickers/",c=t.map((function(e){return q.a.get("https://api.coinpaprika.com/v1/tickers/"+e)})),e.next=8,Promise.all(c);case 8:a=e.sent,r=a.map((function(e){var n=e.data;return{key:n.id,name:n.name,ticker:n.symbol,balance:0,price:J(n.quotes.USD.price)}})),x(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0===O.length&&m()}));var g=function(){var e=Object(u.a)(j.a.mark((function e(n){var t,c,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.coinpaprika.com/v1/tickers/".concat(n),e.next=3,q.a.get(t);case 3:c=e.sent,a=J(c.data.quotes.USD.price),r=O.map((function(e){var t=Object(l.a)({},e);return n===e.key&&(t.price=a),t})),x(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(f.jsxs)(A,{className:"App",children:[Object(f.jsx)(E,{}),Object(f.jsx)(w,{amount:c,showBalance:o,handleBalanceVisibilityChange:function(){h((function(e){return!e}))}}),Object(f.jsx)(v,{coinData:O,showBalance:o,handleRefresh:g})]})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),U()}},[[56,1,2]]]);
//# sourceMappingURL=main.e1d52fa6.chunk.js.map