(this["webpackJsonpnasa-apod"]=this["webpackJsonpnasa-apod"]||[]).push([[0],{87:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(17),o=a.n(n),i=(a(87),a(25)),s=a(8),l=a(16),j=a(50),d=a(24),b=a(56),h=a.n(b),m=a(64),p=a(114),x=a(113),O=a(115),u=a(46),g=a.n(u),v=a(45),f=a.n(v),y=a(2),w=Object(x.a)((function(e){return{root:{maxWidth:"100%"},img:{position:"relative",width:"100%",height:"auto",display:"inline"},date:{position:"relative",flexGrow:1,bottom:e.spacing(2)},favIcon:{position:"relative"}}})),k=function(e){var t=[],a=JSON.parse(localStorage.getItem("favorites"));a&&(t=a),t.push({title:e.title,date:e.date,media_type:e.media_type,url:e.url,explanation:e.explanation,isFavorite:!0}),t=function(e){return Object(j.a)(new Map(e.map((function(e){return[JSON.stringify(e),e]}))).values())}(t),localStorage.setItem("favorites",JSON.stringify(t))};function N(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),a=t[0],r=t[1],n="rxtd7YyfZkoVoCorbjbuOnWptyDoP7alg8ULJxG4",o=Object(c.useState)(!1),i=Object(d.a)(o,2),s=i[0],l=i[1],j=w();return Object(c.useEffect)((function(){function e(){return(e=Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(n,"&count=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a?Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:j.root,children:[Object(y.jsxs)("div",{className:j.root,children:[Object(y.jsx)(p.a,{variant:"h2",align:"center",color:"textPrimary",children:a[0].title}),Object(y.jsx)(O.a,{edge:"end",color:"inherit",size:"medium",className:j.favIcon,onClick:function(){!1===s?k(a[0]):function(e){var t=[],a=JSON.parse(localStorage.getItem("favorites"));a&&(t=a),t.splice(t.findIndex((function(t){return t.url===e.url})),1),localStorage.setItem("favorites",JSON.stringify(t))}(a[0]),l(!s)},children:s?Object(y.jsx)(f.a,{}):Object(y.jsx)(g.a,{})}),Object(y.jsx)(p.a,{variant:"body1",align:"center",className:j.date,children:a[0].date})]}),"image"===a[0].media_type?Object(y.jsx)("img",{src:a[0].url,alt:a[0].title,className:j.img}):Object(y.jsx)("iframe",{title:a[0].title,src:a[0].url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:j.img}),Object(y.jsx)("div",{children:Object(y.jsx)(p.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:a[0].explanation})})]})}):Object(y.jsx)("div",{})}var S=a(101),I=a(122),C=a(123),F=a(69),T=a(118),G=a(125),D=a(119),J=a(117),B=a(48),P=a.n(B),W=a(47),_=a.n(W),z=a(102),H=a(121),L=a(120),V=a(124),q=a(49),A=a.n(q),E=a(126),M=a(116),R=Object(x.a)((function(e){return{root:{position:"sticky",maxWidth:"100%"},title:{flexGrow:1},appbar:{width:"100%"},scrollBackTop:{position:"relative",bottom:e.spacing(6)},nphoto:{width:"100%"},buttonGroup:{display:"flex",flexGrow:1,flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}}})),U={bgcolor:"background.paper",m:1,border:1};function Y(e){var t=e.children,a=e.window,c=Object(M.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(y.jsx)(E.a,{in:c,children:Object(y.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",children:t})})}function Z(e){var t=window.localStorage.getItem("isDarkTheme")===String(!0),a=Object(c.useState)(t),n=Object(d.a)(a,2),o=n[0],s=n[1],b=R(),h=Object(F.a)({palette:{type:o?"dark":"light"}});return Object(y.jsxs)(r.a.Fragment,{className:b.nphoto,children:[Object(y.jsx)(J.a,{}),Object(y.jsx)(T.a,{theme:h,className:b.root,children:Object(y.jsxs)(S.a,{elevation:3,className:b.root,children:[Object(y.jsx)(D.a,{position:"sticky",children:Object(y.jsxs)(L.a,{className:b.appbar,children:[Object(y.jsx)(O.a,{edge:"start",color:"inherit",onClick:function(){s(!o),localStorage.setItem("isDarkTheme",String(!o))},children:o?Object(y.jsx)(_.a,{}):Object(y.jsx)(P.a,{})}),Object(y.jsx)(p.a,{variant:"h6",className:b.title,children:"Toggle ".concat(o?"light":"dark"," mode")}),Object(y.jsx)(z.a,{color:"inherit",onClick:function(){window.location.reload()},children:Object(y.jsx)(p.a,{children:"Load more"})})]})}),Object(y.jsx)(L.a,{id:"back-to-top-anchor",children:Object(y.jsx)("div",{className:b.buttonGroup,children:Object(y.jsxs)(H.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:[Object(y.jsx)(z.a,{component:i.b,children:Object(y.jsx)(p.a,{variant:"h5",children:"HomePage"})}),Object(y.jsx)(z.a,{component:i.b,to:"/nasaapod/favorites",children:Object(y.jsx)(p.a,{variant:"h5",children:"Favorites"})})]})})}),Object(y.jsx)("div",{className:b.root,children:Object(j.a)(Array(10)).map((function(e,t){return Object(y.jsx)(I.a,{maxWidth:"md",children:Object(y.jsx)(C.a,{wrap:"noWrap",container:!0,spacing:12,className:b.nphoto,children:Object(y.jsx)(G.a,Object(l.a)(Object(l.a)(Object(l.a)({mx:"auto",border:2,boxShadow:3,borderColor:"grey.500"},U),{},{borderRadius:16},U),{},{children:Object(y.jsx)(N,{})}))})})}))}),Object(y.jsx)(Y,Object(l.a)(Object(l.a)({},e),{},{children:Object(y.jsx)(V.a,{color:"secondary",size:"medium","aria-label":"scroll back to top",className:b.scrollBackTop,children:Object(y.jsx)(A.a,{})})}))]})})]})}var K=Object(x.a)((function(e){return{img:{position:"relative",width:"100%",height:"auto",display:"inline"},date:{position:"relative",flexGrow:1,bottom:e.spacing(2)},favIcon:{position:"relative"},root:{position:"sticky",maxWidth:"100%"},title:{flexGrow:1},appbar:{width:"100%"},scrollBackTop:{position:"relative",bottom:e.spacing(6)},nphoto:{width:"100%"},buttonGroup:{display:"flex",flexGrow:1,flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}}}}));function Q(e){var t=e.children,a=e.window,c=Object(M.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(y.jsx)(E.a,{in:c,children:Object(y.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",children:t})})}var X={bgcolor:"background.paper",m:1,border:1};function $(e){var t=Object(c.useState)(!0),a=Object(d.a)(t,2),n=a[0],o=a[1],s=K(),j=window.localStorage.getItem("isDarkTheme")===String(!0),b=Object(c.useState)(j),h=Object(d.a)(b,2),m=h[0],x=h[1],u=Object(F.a)({palette:{type:m?"dark":"light"}}),v=[],w=JSON.parse(localStorage.getItem("favorites"));return w&&(v=w),v?Object(y.jsx)("div",{children:Object(y.jsxs)(r.a.Fragment,{className:s.nphoto,children:[Object(y.jsx)(J.a,{}),Object(y.jsx)(T.a,{theme:u,className:s.root,children:Object(y.jsxs)(S.a,{elevation:3,className:s.root,children:[Object(y.jsx)(D.a,{position:"sticky",children:Object(y.jsxs)(L.a,{className:s.appbar,children:[Object(y.jsx)(O.a,{edge:"start",color:"inherit",onClick:function(){x(!m),localStorage.setItem("isDarkTheme",String(!m))},children:m?Object(y.jsx)(_.a,{}):Object(y.jsx)(P.a,{})}),Object(y.jsx)(p.a,{variant:"h6",className:s.title,children:"Toggle ".concat(m?"light":"dark"," mode")})]})}),Object(y.jsx)(L.a,{id:"back-to-top-anchor",children:Object(y.jsx)("div",{className:s.buttonGroup,children:Object(y.jsxs)(H.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:[Object(y.jsx)(z.a,{component:i.b,to:"/nasaapod",children:Object(y.jsx)(p.a,{variant:"h5",children:"HomePage"})}),Object(y.jsx)(z.a,{children:Object(y.jsx)(p.a,{variant:"h5",children:"Favorites"})})]})})}),Object(y.jsx)("div",{className:s.root,children:v.map((function(e){return Object(y.jsx)(I.a,{maxWidth:"md",children:Object(y.jsx)(C.a,{wrap:"noWrap",container:!0,spacing:12,className:s.nphoto,children:Object(y.jsx)(G.a,Object(l.a)(Object(l.a)(Object(l.a)({mx:"auto",border:2,boxShadow:3,borderColor:"grey.500"},X),{},{borderRadius:16},X),{},{children:Object(y.jsxs)("div",{className:s.root,children:[Object(y.jsxs)("div",{className:s.root,children:[Object(y.jsx)(p.a,{variant:"h2",align:"center",color:"textPrimary",children:e.title}),Object(y.jsx)(O.a,{edge:"end",color:"inherit",size:"medium",className:s.favIcon,onClick:function(){!1===n&&o(!n)},children:n?Object(y.jsx)(f.a,{}):Object(y.jsx)(g.a,{})}),Object(y.jsx)(p.a,{variant:"body1",align:"center",className:s.date,children:e.date})]}),"image"===e.media_type?Object(y.jsx)("img",{src:e.url,alt:e.title,className:s.img}):Object(y.jsx)("iframe",{title:e.title,src:e.url,frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:s.img}),Object(y.jsx)("div",{children:Object(y.jsx)(p.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:e.explanation})})]})}))})})}))}),Object(y.jsx)(Q,Object(l.a)(Object(l.a)({},e),{},{children:Object(y.jsx)(V.a,{color:"secondary",size:"medium","aria-label":"scroll back to top",className:s.scrollBackTop,children:Object(y.jsx)(A.a,{})})}))]})})]})}):Object(y.jsx)(p.a,{variant:"h1",align:"center",color:"textPrimary",children:"Aucun favoris pour le moment..."})}a(96);var ee=function(){return Object(y.jsx)(i.a,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(s.a,{component:Z,path:"/nasaapod",exact:!0}),Object(y.jsx)(s.a,{component:N,path:"/nasaapod/nasaphotocomponent"}),Object(y.jsx)(s.a,{component:$,path:"/nasaapod/favorites"})]})})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),r(e),n(e),o(e)}))};o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(ee,{})}),document.getElementById("root")),te()}},[[98,1,2]]]);
//# sourceMappingURL=main.b40fa3e6.chunk.js.map