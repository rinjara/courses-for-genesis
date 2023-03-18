"use strict";(self.webpackChunkcourses_for_genesis=self.webpackChunkcourses_for_genesis||[]).push([[723],{1723:function(e,n,t){t.r(n),t.d(n,{default:function(){return G}});var r=t(9439),o=t(6598),a=t(2791),s=t(1889),c=t(1413),i=t(5987),u=t(3400),l=t(7621),d=t(2169),p=t(2363),h=t(6151),x=t(9504),f=t(890),g=t(6125),m=t(493),Z=t(4852),v=t(6259),j=t(1131),y=t(6710),w=t(225),b=t(1087),k=t(184),C=["expand"],P=(0,w.Z)((function(e){e.expand;var n=(0,i.Z)(e,C);return(0,k.jsx)(u.Z,(0,c.Z)({},n))}))((function(e){var n=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})}})),S=function(e){var n=e.data,t=(0,a.useState)(!1),o=(0,r.Z)(t,2),s=o[0],c=o[1],i=(0,a.useState)(!1),u=(0,r.Z)(i,2),w=u[0],C=u[1],S=n.id,B=n.title,L=n.previewImageLink,z=n.lessonsCount,A=n.rating,E=n.meta,M=E.skills,_=E.courseVideoPreview,R=void 0!==_;return(0,k.jsxs)(l.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},children:[R&&s?(0,k.jsx)(y.Z,{url:"https://cors-proxy.fringe.zone/".concat(_.link),playing:s,loop:s,muted:!0,controls:!1,width:"100%",height:"200px","object-fit":"cover"}):(0,k.jsx)(d.Z,{component:"img",src:"".concat(L,"/cover.webp"),width:"100%",height:"200px",alt:B,style:{display:"block"}}),(0,k.jsx)(p.Z,{children:(0,k.jsx)(h.Z,{size:"small",color:"primary",onClick:function(){},component:b.OL,to:"course/".concat(S),children:"View course"})}),(0,k.jsxs)(x.Z,{children:[(0,k.jsx)(f.Z,{gutterBottom:!0,variant:"h6",component:"h2",children:B}),(0,k.jsxs)(f.Z,{gutterBottom:!0,variant:"body2",color:"text.secondary",children:[z," Lessons"]}),(0,k.jsxs)(f.Z,{variant:"body2",color:"text.secondary",children:["Rating: ",A]}),M&&(0,k.jsxs)(p.Z,{disableSpacing:!0,style:{padding:0},children:[(0,k.jsx)(f.Z,{variant:"h6",color:"text.secondary",children:"Skills"}),(0,k.jsx)(P,{expand:w,onClick:function(){C(!w)},"aria-expanded":w,"aria-label":"more",children:(0,k.jsx)(j.Z,{})})]}),M&&(0,k.jsx)(g.Z,{in:w,timeout:"auto",unmountOnExit:!0,children:(0,k.jsx)(x.Z,{children:(0,k.jsx)(m.Z,{children:M.map((function(e){return(0,k.jsx)(Z.ZP,{children:(0,k.jsx)(v.Z,{primary:e})},e)}))})})})]})]})},B=function(e){var n=e.courses;return(0,k.jsx)(s.ZP,{container:!0,spacing:4,component:"ul",sx:{py:8},maxWidth:"lg",children:n.map((function(e){return(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:4,component:"li",children:(0,k.jsx)(S,{data:e})},e.id)}))})},L=t(4554),z=t(266),A=t(6314),E=function(){return(0,k.jsx)(L.Z,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:(0,k.jsxs)(z.Z,{maxWidth:"sm",children:[(0,k.jsx)(f.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Genesis Academy"}),(0,k.jsx)(f.Z,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:"Explore our catalog of courses available at Genesis Academy, a tech company dedicated to providing top-quality education in the latest technologies. Browse our courses and start your learning journey today!"}),(0,k.jsxs)(A.Z,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:[(0,k.jsx)(h.Z,{variant:"contained",children:"Main call to action"}),(0,k.jsx)(h.Z,{variant:"outlined",children:"Secondary action"})]})]})})},M=t(7246),_=function(e){var n=e.totalPages,t=e.currentPage,r=e.handleChange;return(0,k.jsx)(A.Z,{spacing:2,alignContent:"center",children:(0,k.jsx)(M.Z,{count:n,page:t,onChange:r,style:{display:"flex",justifyContent:"center",marginBottom:"50px"}})})},R=t(43),G=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],c=(0,a.useState)(1),i=(0,r.Z)(c,2),u=i[0],l=i[1],d=Math.ceil(t.length/10),p=10*(u-1),h=p+10,x=t.slice(p,h);(0,a.useEffect)((function(){(0,R.CA)().then((function(e){return s(e)}))}),[]);return(0,k.jsxs)("section",{children:[(0,k.jsx)(E,{}),t&&(0,k.jsxs)(o.Z,{children:[(0,k.jsx)(B,{courses:x}),(0,k.jsx)(_,{totalPages:d,currentPage:u,handleChange:function(e,n){l(n)}})]})]})}},43:function(e,n,t){t.d(n,{XR:function(){return u},CA:function(){return i}});var r=t(4165),o=t(5861),a=t(1243).Z.create({baseURL:"https://cors-proxy.fringe.zone/http://api.wisey.app/api/v1/"}),s=function(e){if(e)return a.defaults.headers.common.authorization="Bearer ".concat(e);a.defaults.headers.common.authorization=""},c=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.get("/auth/anonymous?platform=subscriptions");case 3:n=e.sent,t=n.data.token,s(t),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:return e.next=5,a.get("/core/preview-courses");case 5:return n=e.sent,t=n.data,e.abrupt("return",t.courses);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:return e.next=5,a.get("/core/preview-courses/".concat(n));case 5:return t=e.sent,o=t.data,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=723.8414f742.chunk.js.map