(this.webpackJsonpblablacarsearch=this.webpackJsonpblablacarsearch||[]).push([[0],{21:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e.n(a),i=e(10),o=e.n(i),s=(e(21),e(15)),u=e(6),d=e.n(u),p=e(11),l=function(){var n=Object(p.a)(d.a.mark((function n(t){var e,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=b(),n.next=3,fetch("/api/".concat(t),e);case 3:if(200===(r=n.sent).status){n.next=6;break}throw new Error("Data could not be retrieved");case 6:return n.next=8,r.json();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),b=function(){return{headers:{Accept:"application/json","Accept-Language":"fr","cache-control":"no-cache","Content-Type":"application/json"},method:"GET"}},f=e(2),j=e.n(f),x=e(3),h=e(4);function O(){var n=Object(x.a)(["\n  color: #395abe;\n  margin-left: ",";\n"]);return O=function(){return n},n}function v(){var n=Object(x.a)(["\n  font-size: 16px;\n  font-weight: bold;\n"]);return v=function(){return n},n}function m(){var n=Object(x.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return m=function(){return n},n}function g(){var n=Object(x.a)(["\n  display: flex;\n"]);return g=function(){return n},n}function y(){var n=Object(x.a)(["\n  border: 1px solid #dbd0d0;\n  border-radius: 4px;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  width: 550px;\n"]);return y=function(){return n},n}function _(){var n=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  \n  & > div {\n    margin-bottom: 30px;\n  }\n"]);return _=function(){return n},n}function w(){var n=Object(x.a)(["\n  color: #928888;\n  font-size: 18px;\n  margin: 60px 0;\n"]);return w=function(){return n},n}function k(){var n=Object(x.a)(["\n  font-size: 40px;\n"]);return k=function(){return n},n}function D(){var n=Object(x.a)(["\n  text-align: center;\n"]);return D=function(){return n},n}var E=h.a.div(D()),F=h.a.span(k()),R=h.a.div(w()),z=h.a.div(_()),P=h.a.div(y()),T=h.a.div(g()),A=h.a.div(m()),C=h.a.div(v()),S=Object(h.a)(C)(O(),(function(n){return n.isPrice?"auto":"10px"})),U=(j.a.shape({distance_in_meters:j.a.number,duration_in_seconds:j.a.number,link:j.a.string,price:j.a.shape({amount:j.a.string,currency:j.a.string}),waypoints:j.a.arrayOf(j.a.shape({date_time:j.a.string,place:j.a.shape({address:j.a.string,city:j.a.string,country_code:j.a.string,latitude:j.a.number,longitude:j.a.number})}))}),{EUR:"\u20ac"}),B=function(n){var t=n.tripData;return Object(r.jsxs)(P,{children:[Object(r.jsxs)(T,{children:[Object(r.jsx)("div",{children:t.waypoints.map((function(n,t){return Object(r.jsxs)(A,{children:[Object(r.jsx)(C,{children:"".concat(new Date(n.date_time).getHours(),":").concat(new Date(n.date_time).getMinutes())}),Object(r.jsx)(S,{isPrice:!1,children:n.place.city})]},t)}))}),Object(r.jsxs)(S,{isPrice:!0,children:[t.price.amount,U[t.price.currency]]})]}),Object(r.jsx)("a",{href:t.link,children:"Voir le d\xe9tail"})]})},J=function(n){var t=n.trips;return Object(r.jsx)(z,{children:t.length>0?t.map((function(n,t){return Object(r.jsx)(B,{tripData:n},t)})):Object(r.jsx)("span",{children:"Pas de trajet disponible"})})},L=function(){var n=Object(a.useState)([]),t=Object(s.a)(n,2),e=t[0],c=t[1];return Object(a.useEffect)((function(){l("v3/trips?key=YzbiA8L6DcqxTvSna1lOFQQU66FosDVs&from_coordinate=48.8566%2C2.3522&to_coordinate=45.764043%2C4.835659&from_country=FR&to_country=FR&locale=fr-FR&start_date_local=2020-11-21T08:00:00&currency=EUR").then((function(n){return c(n.trips)})).catch((function(n){return c([])}))}),[]),Object(r.jsxs)(E,{children:[Object(r.jsx)(F,{children:"Blablacar"}),Object(r.jsx)(R,{children:"".concat(e.length," trajets disponibles")}),Object(r.jsx)(J,{trips:e})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5291c118.chunk.js.map