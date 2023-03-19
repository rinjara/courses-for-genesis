"use strict";(self.webpackChunkcourses_for_genesis=self.webpackChunkcourses_for_genesis||[]).push([[0,454],{1454:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var t,s=r(8966),o=r(168),a=r(6088).Z.div(t||(t=(0,o.Z)(["\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n"]))),i=r(184),c=function(){return(0,i.jsx)(a,{children:(0,i.jsx)(s.BR,{height:"200",width:"200",radius:1,color:"#002884",ariaLabel:"puff-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},3e3:function(e,n,r){r.r(n),r.d(n,{default:function(){return W}});var t=r(9439),s=r(2791),o=r(890),a=r(2169),i=r(4554),c=r(4942),l=r(1686),u=r(6710),d=r(9323),h=r(1454),p=r(184),f=function(e){var n=e.URL,r=e.muted,o=(0,s.useState)(!0),a=(0,t.Z)(o,2),i=a[0],f=a[1],g=(0,s.useRef)(null);return(0,p.jsxs)(p.Fragment,{children:[i&&(0,p.jsx)(h.default,{}),(0,p.jsx)(u.Z,{url:n,width:"100%",height:"100%",playing:!0,loop:!0,muted:r,controls:!0,onProgress:function(e){var r=(0,d.z)("videoProgress")||{};r[n]=e.playedSeconds,(0,d.a)("videoProgress",r)},onReady:function(){g.current.seekTo(function(){var e=(0,d.z)("videoProgress");if(e)return-1===Object.keys(e).indexOf(n)?0:parseFloat(e[n])}()),f(!1)},onEnded:function(){(0,d.a)("videoProgress",(0,c.Z)({},n,0))},onError:function(e){if(e&&e.target&&e.target.error&&e.target.error.code)switch(e.target.error.code){case 1:l.Notify.warning("The video is not found or has been removed");break;case 2:l.Notify.warning("The video is not playable in the current browser");break;case 3:l.Notify.warning("The video has an invalid source");break;case 4:l.Notify.info("To continue your lesson, please click play button");break;case 5:l.Notify.warning("The video is too long");break;case 6:l.Notify.warning("The video is not supported");break;default:l.Notify.warning("An unknown error occurred while playing the video")}else l.Notify.warning("An unknown error occurred while playing the video. Please, reload the page if needed")},ref:g})]})},g=r(1413),x=r(6934),v=(0,x.ZP)("div",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var n=e.theme,r=e.open,t=e.drawerwidth;return(0,g.Z)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px",flexGrow:1,padding:n.spacing(3),paddingTop:64,transition:n.transitions.create("margin",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),marginRight:0},r&&{transition:n.transitions.create("margin",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.enteringScreen}),marginRight:t})})),m=function(e){var n=e.course,r=e.usedData;return(0,p.jsxs)(v,{open:r.isOpen,drawerwidth:r.drawerWidth,children:[(0,p.jsx)(a.Z,{component:"img",src:"".concat(n.previewImageLink,"/cover.webp"),width:"100%",height:"250px",alt:n.title,style:{display:"block",objectFit:"contain"}}),(0,p.jsxs)(o.Z,{align:"center",variant:"h3",component:"h2",children:['"',n.title,'"']}),(0,p.jsx)(o.Z,{align:"justify",paragraph:!0,children:n.description}),(0,p.jsx)(i.Z,{sx:{width:{lg:"750px"},height:{md:"350px"}},children:(0,p.jsx)(f,{URL:"https://cors-proxy.fringe.zone/".concat(n.lessons[r.lesson].link),muted:!1})}),(0,p.jsxs)(o.Z,{variant:"h4",component:"h3",children:["Lesson ",n.lessons[r.lesson].order,': "',n.lessons[r.lesson].title,'"']})]})},w=r(43),Z=r(7689),y=r(3967),j=r(4663),k=r(3400),b=r(145),S=r(7924),P=r(493),O=r(4852),C=r(8008),L=r(1009),D=r(8996),N=r(7621),z=r(9504),R=r(6647),T=function(e){var n=e.lessonData,r=e.handleLessonsChange,c=e.index,d=(0,s.useState)(!1),h=(0,t.Z)(d,2),f=h[0],g=h[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(o.Z,{gutterBottom:!0,variant:"h5",component:"h3",children:["Lesson ",n.order]}),(0,p.jsx)(N.Z,{sx:{maxWidth:{lg:345}},onMouseEnter:function(){return g(!0)},onMouseLeave:function(){return g(!1)},children:(0,p.jsxs)(R.Z,{onClick:function(){"locked"!==n.status?r(c):l.Notify.failure("This lesson is locked. Please, follow the order!")},children:[(0,p.jsx)(i.Z,{sx:{height:150,maxWidth:{md:"300px"}},children:f&&"locked"!==n.status?(0,p.jsx)(u.Z,{url:"https://cors-proxy.fringe.zone/".concat(n.link),playing:f,loop:f,muted:!0,controls:!1,width:"100%",height:"100%"}):(0,p.jsx)(a.Z,{component:"img",width:"100%",height:"100%",image:"".concat(n.previewImageLink,"/lesson-").concat(n.order,".webp"),alt:"lesson-".concat(n.order),style:{display:"block"}})}),(0,p.jsxs)(z.Z,{children:[(0,p.jsxs)(o.Z,{gutterBottom:!0,variant:"h6",component:"h4",align:"center",children:['"',n.title,'"']}),(0,p.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:n.status})]})]})})]})},F=(0,x.ZP)("div")((function(e){var n=e.theme;return(0,g.Z)((0,g.Z)({display:"flex",alignItems:"center",padding:n.spacing(0,1)},n.mixins.toolbar),{},{justifyContent:"flex-start"})}));var I=function(e){var n,r=e.usedData,t=e.course,s=e.handleLessonsChange,a=(0,y.Z)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(j.Z,{style:{position:"absolute",right:8,top:0,gap:16},children:[(0,p.jsx)(o.Z,{variant:"h6",noWrap:!0,sx:{flexGrow:1,display:{xs:"none",sm:"block"}},component:"div",children:"Lessons"}),(0,p.jsx)(k.Z,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:r.handleDrawerOpen,sx:(0,g.Z)({},r.isOpen&&{display:"none"}),children:(0,p.jsx)(C.Z,{})})]}),(0,p.jsxs)(b.ZP,{sx:{flexShrink:0,"& .MuiDrawer-paper":(n={},(0,c.Z)(n,a.breakpoints.up("sm"),{width:r.drawerWidth}),(0,c.Z)(n,a.breakpoints.up("xs"),{width:"100%"}),n)},variant:"persistent",anchor:"right",open:r.isOpen,children:[(0,p.jsx)(F,{children:(0,p.jsx)(k.Z,{onClick:r.handleDrawerClose,children:"rtl"===r.theme.direction?(0,p.jsx)(L.Z,{}):(0,p.jsx)(D.Z,{})})}),(0,p.jsx)(S.Z,{}),(0,p.jsx)(P.Z,{children:t.lessons.map((function(e,n){return(0,p.jsx)(O.ZP,{style:{display:"flex",flexDirection:"column"},children:(0,p.jsx)(T,{index:n,lessonData:e,handleLessonsChange:s})},e.id)}))})]})]})},W=function(){var e=(0,s.useState)(null),n=(0,t.Z)(e,2),r=n[0],o=n[1],a=(0,s.useState)(!0),i=(0,t.Z)(a,2),c=i[0],l=i[1],u=(0,s.useState)(0),f=(0,t.Z)(u,2),g=f[0],x=f[1],v=(0,s.useState)(!0),j=(0,t.Z)(v,2),k=j[0],b=j[1],S=(0,Z.UO)().courseId;(0,s.useEffect)((function(){(0,w.XR)(S).then((function(e){o(e);var n=(0,d.z)("lessonProgress");n&&-1!==Object.keys(n).indexOf(S)&&x(n[S])})).then((function(){return b(!1)}))}),[S]);var P={isOpen:c,handleDrawerOpen:function(){l(!0)},handleDrawerClose:function(){l(!1)},drawerWidth:340,theme:(0,y.Z)(),lesson:g};return(0,p.jsxs)(p.Fragment,{children:[k&&(0,p.jsx)(h.default,{}),r&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(I,{course:r,usedData:P,handleLessonsChange:function(e){var n=(0,d.z)("lessonProgress")||{};n[S]=e,(0,d.a)("lessonProgress",n),x(e)}}),(0,p.jsx)(m,{course:r,usedData:P})]})]})}},43:function(e,n,r){r.d(n,{XR:function(){return u},CA:function(){return l}});var t=r(4165),s=r(5861),o=r(1686),a=r(1243).Z.create({baseURL:"https://cors-proxy.fringe.zone/http://api.wisey.app/api/v1/"}),i=function(e){if(e)return a.defaults.headers.common.authorization="Bearer ".concat(e);a.defaults.headers.common.authorization=""},c=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.get("/auth/anonymous?platform=subscriptions");case 3:n=e.sent,r=n.data.token,i(r),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:return e.next=5,a.get("/core/preview-courses");case 5:return n=e.sent,r=n.data,e.abrupt("return",r.courses);case 10:throw e.prev=10,e.t0=e.catch(0),o.Notify.failure("Oooops! Something goes wrong. Please, try again later!"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){var r,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:return e.next=5,a.get("/core/preview-courses/".concat(n));case 5:return r=e.sent,s=r.data,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(0),o.Notify.failure("Oooops! Something goes wrong. Please, try again later!"),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()},9323:function(e,n,r){r.d(n,{a:function(){return t},z:function(){return s}});var t=function(e,n){try{var r=JSON.stringify(n);localStorage.setItem(e,r)}catch(t){console.error("Set state error: ",t.message)}},s=function(e){try{var n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(r){console.error("Get state error: ",r.message)}}}}]);
//# sourceMappingURL=0.d2fa0105.chunk.js.map