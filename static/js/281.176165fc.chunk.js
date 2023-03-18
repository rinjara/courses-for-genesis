"use strict";(self.webpackChunkcourses_for_genesis=self.webpackChunkcourses_for_genesis||[]).push([[281],{3281:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(9439),s=t(2791),a=t(1413),i=t(6934),o=t(890),c=t(6710),u=t(2169),l=t(4554),h=t(184),d=(0,i.ZP)("div",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var n=e.theme,t=e.open,r=e.drawerwidth;return(0,a.Z)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px",flexGrow:1,padding:n.spacing(3),paddingTop:64,transition:n.transitions.create("margin",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),marginRight:0},t&&{transition:n.transitions.create("margin",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.enteringScreen}),marginRight:r})}));function p(e){var n=e.course,t=e.usedData;return(0,h.jsxs)(d,{open:t.isOpen,drawerwidth:t.drawerWidth,children:[(0,h.jsx)(u.Z,{component:"img",src:"".concat(n.previewImageLink,"/cover.webp"),width:"100%",height:"250px",style:{display:"block",objectFit:"contain"}}),(0,h.jsxs)(o.Z,{variant:"h3",component:"h2",children:['"',n.title,'"']}),(0,h.jsx)(o.Z,{align:"justify",paragraph:!0,children:n.description}),(0,h.jsx)(l.Z,{style:{width:750,height:350},children:(0,h.jsx)(c.Z,{url:"https://cors-proxy.fringe.zone/".concat(n.lessons[t.lesson].link),playing:!0,loop:!0,muted:!1,controls:!0,width:"100%",height:"100%"})}),(0,h.jsxs)(o.Z,{variant:"h4",component:"h4",children:["Lesson ",n.lessons[t.lesson].order,': "',n.lessons[t.lesson].title,'"']})]})}var x=t(43),g=t(7689),f=t(4663),m=t(3400),Z=t(9791),v=t(7924),w=t(493),j=t(4852),y=t(8008),k=t(1009),b=t(8996),C=t(7621),D=t(9504),L=t(6647),O=function(e){var n=e.lessonData,t=e.handleLessonsChange,a=e.index,i=(0,s.useState)(!1),d=(0,r.Z)(i,2),p=d[0],x=d[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(o.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:["Lesson ",n.order]}),(0,h.jsx)(C.Z,{sx:{maxWidth:345},onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:(0,h.jsxs)(L.Z,{onClick:function(){t(a)},children:[(0,h.jsx)(l.Z,{sx:{width:300,height:150},children:p&&"locked"!==n.status?(0,h.jsx)(c.Z,{url:"https://cors-proxy.fringe.zone/".concat(n.link),playing:p,loop:p,muted:!0,controls:!1,width:"100%",height:"100%"}):(0,h.jsx)(u.Z,{component:"img",width:"100%",height:"100%",image:"".concat(n.previewImageLink,"/lesson-").concat(n.order,".webp"),alt:"lesson-".concat(n.order),style:{display:"block"}})}),(0,h.jsxs)(D.Z,{children:[(0,h.jsxs)(o.Z,{gutterBottom:!0,variant:"h6",component:"h3",align:"center",children:['"',n.title,'"']}),(0,h.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:n.status})]})]})})]})},S=(0,i.ZP)("div")((function(e){var n=e.theme;return(0,a.Z)((0,a.Z)({display:"flex",alignItems:"center",padding:n.spacing(0,1)},n.mixins.toolbar),{},{justifyContent:"flex-start"})}));var F=function(e){var n=e.usedData,t=e.course,r=e.handleLessonsChange;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(f.Z,{style:{position:"absolute",right:8,top:0,gap:16},children:[(0,h.jsx)(o.Z,{variant:"h6",noWrap:!0,sx:{flexGrow:1},component:"div",children:"Lessons"}),(0,h.jsx)(m.Z,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:n.handleDrawerOpen,sx:(0,a.Z)({},n.isOpen&&{display:"none"}),children:(0,h.jsx)(y.Z,{})})]}),(0,h.jsxs)(Z.ZP,{sx:{width:n.drawerWidth,flexShrink:0,"& .MuiDrawer-paper":{width:n.drawerWidth}},variant:"persistent",anchor:"right",open:n.isOpen,children:[(0,h.jsx)(S,{children:(0,h.jsx)(m.Z,{onClick:n.handleDrawerClose,children:"rtl"===n.theme.direction?(0,h.jsx)(k.Z,{}):(0,h.jsx)(b.Z,{})})}),(0,h.jsx)(v.Z,{}),(0,h.jsx)(w.Z,{children:t.lessons.map((function(e,n){return(0,h.jsx)(j.ZP,{style:{display:"flex",flexDirection:"column"},children:(0,h.jsx)(O,{index:n,lessonData:e,handleLessonsChange:r})},e.id)}))})]})]})},W=t(3967),z=function(){var e=(0,s.useState)(null),n=(0,r.Z)(e,2),t=n[0],a=n[1],i=(0,s.useState)(!0),o=(0,r.Z)(i,2),c=o[0],u=o[1],l=(0,s.useState)(0),d=(0,r.Z)(l,2),f=d[0],m=d[1],Z=(0,g.UO)().courseId;(0,s.useEffect)((function(){(0,x.XR)(Z).then((function(e){console.log(e),a(e)}))}),[Z]);var v={isOpen:c,handleDrawerOpen:function(){u(!0)},handleDrawerClose:function(){u(!1)},drawerWidth:340,theme:(0,W.Z)(),lesson:f};return(0,h.jsx)(h.Fragment,{children:t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(F,{course:t,usedData:v,handleLessonsChange:function(e){m(e)}}),(0,h.jsx)(p,{course:t,usedData:v})]})})}},43:function(e,n,t){t.d(n,{XR:function(){return u},CA:function(){return c}});var r=t(4165),s=t(5861),a=t(1243).Z.create({baseURL:"https://cors-proxy.fringe.zone/http://api.wisey.app/api/v1/"}),i=function(e){if(e)return a.defaults.headers.common.authorization="Bearer ".concat(e);a.defaults.headers.common.authorization=""},o=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.get("/auth/anonymous?platform=subscriptions");case 3:n=e.sent,t=n.data.token,i(t),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o();case 3:return e.next=5,a.get("/core/preview-courses");case 5:return n=e.sent,t=n.data,e.abrupt("return",t.courses);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o();case 3:return e.next=5,a.get("/core/preview-courses/".concat(n));case 5:return t=e.sent,s=t.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=281.176165fc.chunk.js.map