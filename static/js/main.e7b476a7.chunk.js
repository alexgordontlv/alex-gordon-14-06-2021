(this.webpackJsonpbrandefender=this.webpackJsonpbrandefender||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(6),i=a.n(n),o=(a(87),a(8)),s=a(12),u=a.n(s),d=a(23),j=a(15),b=(a(89),{cloudy:"linear-gradient(90deg, rgba(241,240,252,0.3) 0%, rgba(215,233,245,0.5) 0%, rgba(176,214,255,0.7) 100%)",sunny:"linear-gradient(90deg, rgba(241,240,252,0.3) 0%, rgba(218,237,255,0.5) 0%, rgba(0,123,255,0.7) 100%)",stormy:"linear-gradient(90deg, rgba(230,220,220,0.5) 0%, rgba(230,220,220,0.5) 0%, rgba(109,109,109,1) 100%)",default:"linear-gradient(90deg, rgba(241,240,252,1) 0%, rgba(43,95,126,0.29315476190476186) 0%, rgba(245,245,245,1) 100%)"}),l=a(2),h=function(e){var t,a=e.children,c=e.weatherIcon;return t=c?c<4?"sunny":c>=4&&c<11?"cloudy":"stormy":"default",Object(l.jsx)("div",{className:"card",style:{background:b[t]},children:a})},O=a(5),f=function(e){return"https://developer.accuweather.com/sites/default/files/".concat(e<10?"0".concat(e):e,"-s.png")},p=(a(91),function(e){var t=e.cityWeather,a=e.width,c=e.iconWidth,r=e.forecast,n=e.currentCity,i=e.favoritecard,o=Object(O.f)(),s=function(e,t){return e?{img:f(e.WeatherIcon),headline:e.WeatherText,value:e.Temperature.Metric.Value,unit:e.Temperature.Metric.Unit}:{img:f(t.Day.Icon),headline:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t.Date).getDay()],value:t.Temperature.Maximum.Value,unit:t.Temperature.Maximum.Unit}}(t,r);return Object(l.jsxs)("div",{onClick:function(){i&&o.push({pathname:"/",state:{cityName:n.cityName,cityKey:n.cityKey}})},className:"weather_card_body ".concat(i),style:{width:a+"px"},children:[Object(l.jsx)("h2",{children:null===n||void 0===n?void 0:n.cityName}),Object(l.jsx)("p",{children:s.headline}),Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)("img",{loading:"lazy",alt:"weather",src:s.img,width:c,heigth:c})})," ",Object(l.jsx)("h3",{className:"temprature",children:s.value+s.unit})]})}),y=a(72),m=a.n(y),v=a(33),x=a(67),g=a.n(x),w="b1rtH1c7YGAGM5oe3z8xmeRuenABGxtA",k=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var c,r,n,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={autoComplete:"https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(w,"&q=").concat(a),weatherCondition:"https://dataservice.accuweather.com/currentconditions/v1/".concat(a,"?apikey=").concat(w),weatherForecast:"https://dataservice.accuweather.com//forecasts/v1/daily/5day/".concat(a,"?metric=true&apikey=").concat(w)},e.prev=1,e.next=4,g.a.get(n[t]);case 4:i=e.sent,r=i.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c=e.t0;case 11:return e.abrupt("return",{data:r,error:c});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),N="SET_THEME",C="TOGGLE_FAVORITE",_="TOGGLE_MODAL",T="HIDE_MODAL",E=function(e){return{type:_,payload:e}},S=a(7),K=(a(115),function(e){var t=e.setCurrentCity,a=Object(c.useState)(""),r=Object(j.a)(a,2),n=r[0],i=r[1],o=Object(c.useState)([]),s=Object(j.a)(o,2),b=s[0],h=s[1],O=Object(S.b)();return Object(c.useEffect)((function(){var e=setTimeout(Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0)){e.next=7;break}return e.next=3,k("autoComplete",n);case 3:t=e.sent,a=t.data,t.error?O(E("Error fetching  suggestions")):h(a);case 7:case"end":return e.stop()}}),e)}))),1e3);return function(){return clearTimeout(e)}}),[n,O]),Object(l.jsxs)(v.a,{children:[Object(l.jsx)(v.b,{value:n,onChange:function(e){i(e.target.value)},placeholder:"Search your city weather!"}),Object(l.jsx)(v.e,{children:Object(l.jsx)(v.c,{className:"option",children:b&&b.slice(0,5).map((function(e,a){return Object(l.jsx)(v.d,{value:e.LocalizedName,className:"search_option",onClick:function(){return function(e){t({cityName:e.LocalizedName,cityKey:e.Key}),i(""),h([])}(e)}},a)}))})})]})}),W=a(139),M=a(73),I=a.n(M),A=(a(116),function(){var e=Object(c.useState)({cityName:"Tel Aviv",cityKey:"215854"}),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),i=Object(j.a)(n,2),s=i[0],b=i[1],f=Object(c.useState)(""),y=Object(j.a)(f,2),v=y[0],x=y[1],g=Object(c.useState)([]),w=Object(j.a)(g,2),N=w[0],_=w[1],T=Object(O.f)(),M=Object(S.b)(),A=Object(S.c)((function(e){return e.favorites})),D=Object(c.useCallback)(Object(d.a)(u.a.mark((function e(){var t,c,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([k("weatherForecast",a.cityKey),k("weatherCondition",a.cityKey)]);case 2:t=e.sent,c=Object(j.a)(t,2),r=c[0],n=c[1],r.error||n.error?M(E("Error fetching data...")):(_(r.data.DailyForecasts),x(n.data[0]));case 7:case"end":return e.stop()}}),e)}))),[a,M]);return Object(c.useEffect)((function(){var e=T.location.state;e&&r(e),D(),T.replace()}),[a,T,D]),Object(c.useEffect)((function(){b(A.some((function(e){return e.cityKey===a.cityKey})))}),[A,a]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"search",children:Object(l.jsx)(K,{setCurrentCity:r})}),Object(l.jsx)(h,{weatherIcon:v&&v.WeatherIcon,children:v&&Object(l.jsxs)("div",{className:"main_weather",children:[Object(l.jsx)(W.a,{onClick:function(){var e;M((e=Object(o.a)(Object(o.a)({},v),a),{type:C,payload:e}))},children:s?Object(l.jsx)(m.a,{style:{color:"red"}}):Object(l.jsx)(I.a,{})}),Object(l.jsx)(p,{currentCity:a,cityWeather:v,width:"700",iconWidth:"200"}),N&&N.map((function(e,t){return Object(l.jsx)(p,{forecast:e,width:"120",iconWidth:"100"},t)}))]})})]})}),D=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(S.b)(),i=Object(S.c)((function(e){return e.favorites})),s=Object(c.useCallback)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(i.map(function(){var e=Object(d.a)(u.a.mark((function e(t){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("weatherCondition",t.cityKey);case 2:if(a=e.sent,c=a.data,!a.error){e.next=9;break}n(E("Error fetching favorites")),e.next=10;break;case 9:return e.abrupt("return",Object(o.a)(Object(o.a)({},c[0]),{},{cityName:t.cityName,cityKey:t.cityKey}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)}))),[i,n]);return Object(c.useEffect)((function(){s()}),[i,s]),Object(l.jsx)(h,{children:a&&a.map((function(e,t){return Object(l.jsx)(p,{favoritecard:"favoritecard",currentCity:e,cityWeather:e,width:"120",iconWidth:"100"},t)}))})},F=a(142),G=a(145),L=a(143),z=a(121),B=Object(F.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function H(){var e=B(),t=Object(S.b)(),a=Object(S.c)((function(e){return e.error})),c=a.open,r=a.message;return Object(l.jsx)("div",{children:Object(l.jsx)(G.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:c,onClose:function(){t({type:T})},closeAfterTransition:!0,BackdropComponent:L.a,BackdropProps:{timeout:500},children:Object(l.jsx)(z.a,{in:c,children:Object(l.jsx)("div",{className:e.paper,children:Object(l.jsx)("h2",{children:r})})})})})}var P=a(144),V=(a(118),a(27)),J=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(S.c)((function(e){return e.theme})),i=Object(S.b)();return Object(l.jsxs)("div",{className:"navigation navigation_".concat(n),children:[Object(l.jsx)(V.b,{to:"/",children:Object(l.jsx)("h2",{className:"nav_option nav_option_".concat(n),children:"Home"})}),Object(l.jsx)(V.b,{to:"/favorites",children:Object(l.jsx)("h2",{className:"nav_option nav_option_".concat(n),children:"Favorites"})}),Object(l.jsx)(P.a,{value:"check",selected:a,style:{color:a&&"#82ca9d",fontSize:16},onChange:function(){r((function(e){return!e})),i({type:N,payload:a?"light":"dark"})},children:n})," "]})};var R=function(){var e=Object(S.c)((function(e){return e.theme}));return Object(l.jsxs)(V.a,{children:[Object(l.jsx)(H,{}),Object(l.jsxs)("div",{className:"app app_".concat(e),children:[Object(l.jsx)(J,{}),Object(l.jsx)("div",{className:"app_body",children:Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{exact:!0,path:"/",children:Object(l.jsx)(A,{})}),Object(l.jsx)(O.a,{exact:!0,path:"/favorites",children:Object(l.jsx)(D,{})})]})})]})]})},U=a(75),q=a(74),Y={error:{open:!1,message:""},favorites:[],theme:"light"},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(o.a)(Object(o.a)({},e),{},{theme:t.payload});case C:var a,c=e.favorites.some((function(e){return e.cityKey===t.payload.cityKey}));return c?(a=e.favorites.filter((function(e){return e.cityName!==t.payload.cityName})),Object(o.a)(Object(o.a)({},e),{},{isFavorite:!1,favorites:a})):(a=[].concat(Object(q.a)(e.favorites),[t.payload]),Object(o.a)(Object(o.a)({},e),{},{isFavorite:!0,favorites:a}));case _:return Object(o.a)(Object(o.a)({},e),{},{error:Object(o.a)(Object(o.a)({},e.error),{},{open:!0,message:t.payload})});case T:return Y;default:return e}},X=Object(U.a)(Q);i.a.render(Object(l.jsxs)(r.a.StrictMode,{children:[Object(l.jsx)(S.a,{store:X,children:Object(l.jsx)(R,{})}),","]}),document.getElementById("root"))},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.e7b476a7.chunk.js.map