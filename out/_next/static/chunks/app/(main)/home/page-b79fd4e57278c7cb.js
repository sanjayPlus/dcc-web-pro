(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5250],{6370:function(e,s,t){Promise.resolve().then(t.bind(t,37537))},37537:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return z}});var l=t(3827),a=t(1017),n=t(64090),i=t(21786);t(86978),t(61967);var c=t(49675),r=t(8792),o=function(e){let{carousel:s}=e,t=[];return s.map(e=>{t.push((0,l.jsx)(i.o5,{children:(0,l.jsx)(r.default,{href:e.href,children:(0,l.jsx)("img",{src:e.image,className:"w-[100%] bg-cover rounded-lg",alt:""})})},e._id))}),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(i.tq,{effect:"coverflow",onSlideChange:()=>console.log("slide change"),onSwiper:e=>console.log(e),centeredSlides:!0,modules:[c.pt,c.LG,c.lI],autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,grabCursor:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},children:t})})})},d=t(48796),m=t(44209),x=t(52840);t(73794);var u=t(7908),h=t(4205),p=t(47907),f=t(70784),j=t(6128),g=t(56733),v=t(70997),b=function(){let[e,s]=n.useState(!1),[t,a]=(0,n.useState)([]),[i,c]=n.useState(!1);(0,n.useEffect)(()=>{localStorage.getItem("token")||r.push("/login"),u.Z.get(h.Z+"/user/details",{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{a(e.data.profileImage)}).catch(e=>{console.log(e)})});let r=(0,p.useRouter)(),o=()=>{(e||i)&&(s(!1),c(!1))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"topnav sticky top-0 z-50 w-full h-16 flex justify-between items-center bg-white pl-5 pr-5",children:[(0,l.jsx)("div",{className:"sidebar-close absolute w-60 h-screen right-0 top-0",style:{display:e?"block":"none"},onClick:()=>{o(!1)}}),(0,l.jsx)(m.vHB,{size:24,onClick:()=>{s(!e)},className:"cursor-pointer"}),(0,l.jsx)(d.VGs,{size:23,className:"cursor-pointer",onClick:()=>r.push("/notifications")})]}),(0,l.jsxs)("div",{style:{display:e?"block":"none"},className:"sidenav fixed w-64 h-screen bg-white top-0 z-50 overflow-y-scroll overflow-x-hidden scrollbar-container pb-56 ",children:[(0,l.jsxs)("div",{className:"profile-img w-full flex justify-center items-center relative mt-0",children:[(0,l.jsx)("img",{src:t||"/images/imagecontri.png",alt:"noImage",className:"w-100% rounded-lg"}),(0,l.jsx)(x.bjh,{size:24,onClick:()=>{s(!e)},className:"absolute right-[5px] top-[5px] cursor-pointer bg-[#082282] text-[#fff] rounded-full p-[5px]"})]}),(0,l.jsxs)("div",{className:"nav-items cursor-pointer flex flex-row justify-start items-center pl-2 gap-x-3 mt-10 border-b border-b-gray-400 pb-3",onClick:()=>{r.push("/social-media")},children:[(0,l.jsx)(g.p17,{size:22}),(0,l.jsx)("p",{className:"m-0",style:{userSelect:"none"},children:"Social Media"})]}),(0,l.jsxs)("div",{onClick:()=>{u.Z.get(h.Z+"/user/auto-login",{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{200===e.status&&window.open(e.data.url)}).catch(e=>{toast.error("Store Login Falied")})},className:"nav-items cursor-pointer flex flex-row justify-start items-center pl-2 gap-x-3 mt-4 border-b border-b-gray-400 pb-3",children:[(0,l.jsx)(f.moe,{size:24}),(0,l.jsx)("p",{className:"m-0",style:{userSelect:"none"},children:"Store"})]}),(0,l.jsxs)("div",{onClick:()=>r.push("/payment-history"),className:"nav-items cursor-pointer flex flex-row justify-start items-center pl-2 gap-x-3 mt-4 border-b border-b-gray-400 pb-3",children:[(0,l.jsx)(f.Yi7,{size:24}),(0,l.jsx)("p",{className:"m-0",style:{userSelect:"none"},children:"Payment History"})]}),(0,l.jsxs)("div",{onClick:()=>r.push("/disclaimer"),className:"nav-items cursor-pointer flex flex-row justify-start items-center pl-2 gap-x-3 mt-4 border-b border-b-gray-400 pb-3",children:[(0,l.jsx)(j.znh,{size:23}),(0,l.jsx)("p",{className:"m-0",style:{userSelect:"none"},children:"Disclaimer"})]}),(0,l.jsxs)("div",{onClick:()=>r.push("/privacy"),className:"nav-items cursor-pointer flex flex-row justify-start items-center pl-2 gap-x-3 mt-4 border-b border-b-gray-400 pb-3",children:[(0,l.jsx)(f.CJb,{size:23}),(0,l.jsx)("p",{className:"m-0",style:{userSelect:"none"},children:"Privacy policy"})]}),(0,l.jsxs)("div",{onClick:()=>r.push("/contact"),className:"nav-items cursor-pointer flex flex-row justify-start items-center pl-2 gap-x-3 mt-4 border-b border-b-gray-400 pb-3",children:[(0,l.jsx)(d.KQH,{size:23}),(0,l.jsx)("p",{className:"m-0",style:{userSelect:"none"},children:"Contact Us"})]}),(0,l.jsxs)("div",{onClick:()=>r.push("/feedback"),className:"nav-items cursor-pointer flex flex-row justify-start items-center pl-2 gap-x-3 mt-4 border-b border-b-gray-400 pb-3",children:[(0,l.jsx)(v.eUg,{}),(0,l.jsx)("p",{className:"m-0",style:{userSelect:"none"},children:"Feedback"})]}),(0,l.jsxs)("div",{onClick:()=>{localStorage.removeItem("token"),r.push("/login")},className:"nav-items cursor-pointer flex flex-row justify-start items-center pl-2 gap-x-3 mt-4 border-b border-b-gray-400 pb-3 ",children:[(0,l.jsx)(d.CmG,{size:23}),(0,l.jsx)("p",{className:"m-0",style:{userSelect:"none"},children:"Log Out"})]})]})]})},N=t(37945),w=t(71399),y=t(26915),k=function(e){let{carousel:s}=e,t=[];return s.map(e=>{t.push((0,l.jsx)(i.o5,{children:(0,l.jsx)(r.default,{href:e.href,children:(0,l.jsx)("img",{src:e.image,className:"w-[100%] bg-cover rounded-lg",alt:""})})},e._id))}),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(i.tq,{effect:"coverflow",onSlideChange:()=>console.log("slide change"),onSwiper:e=>console.log(e),centeredSlides:!0,modules:[c.pt,c.LG,c.lI],autoplay:{delay:2500,disableOnInteraction:!1},loop:!0,grabCursor:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},children:t})})})},S=t(46340),_=t(43992);t(85176);var C=t(18020),I=t(69247),F=t.n(I);C.Z.use([c.pt,c.lI,c.LG]);var Z=function(){let[e,s]=(0,n.useState)([]),[t,a]=(0,n.useState)(""),[c,r]=(0,n.useState)(!1);(0,n.useEffect)(()=>{(async()=>{try{let e=await u.Z.get("".concat(h.Z,"/admin/poll"));s(e.data)}catch(e){console.error("Error fetching data:",e.message)}})()},[c]),(0,n.useEffect)(()=>{try{let e=localStorage.getItem("token"),s=F().decode(e);a(s.userId),console.log(s.userId)}catch(e){console.error("Error decoding JWT:",e.message)}},[]);let o=e=>({content:"''",position:"absolute",bottom:0,left:"15px",width:"".concat(e,"%"),height:"2px",background:"blue"}),d=(e,s)=>{u.Z.post(h.Z+"/user/add-vote",{pollId:e,optionId:s},{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{200===e.status&&r(!c)}).catch(e=>{console.log(e)})};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(i.tq,{onSlideChange:()=>console.log("slide change"),onSwiper:e=>console.log(e),centeredSlides:!0,autoplay:{delay:4500,disableOnInteraction:!1},loop:!0,grabCursor:!0,slidesPerView:"auto",children:e.map(e=>(0,l.jsx)(i.o5,{children:(0,l.jsxs)("div",{className:"polling-card poll-1 w-[96%] flex flex-col justify-center items-center shadow-lg rounded-xl py-9 px-1 my-3 bg-white",children:[(0,l.jsx)("h2",{className:"text-center text-sm font-bold",children:e.title}),e.options.map(s=>{var a;return(0,l.jsxs)("div",{onClick:()=>d(e._id,s._id),className:"opinion-option relative rounded-3xl flex justify-center items-center w-[90%] shadow-md my-2 cursor-pointer active:scale-95",children:[(0,l.jsx)("p",{className:"text-center m-0 p-2 font-semibold",children:s.option}),(null==e?void 0:null===(a=e.users)||void 0===a?void 0:a.includes(t))&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:"text-end self-end m-0 p-2 font-medium",children:[s.percentage,"%"]}),(0,l.jsx)("span",{style:o(s.percentage)})]})]},s._id)})]})},e._id))})})})},z=function(){let[e,s]=(0,n.useState)([]),t=(0,p.useRouter)(),[i,c]=(0,n.useState)([]),[m,j]=(0,n.useState)(null),g=async()=>{try{let e=await Notification.requestPermission();if("granted"===e){if(S.Fw){let e=await (0,_.LP)(S.Fw,{vapidKey:"BOiHJOdgnKQB3FdDSSuK5kY8yPw6lBhLYNpUxvUovc4Zv5eIwNFnir_V3g7WRyEN9baMRbR4Ll5BcPdQBYCt3Fo"});console.log(e),j(e),u.Z.post(h.Z+"/user/add-notification-token",{FCMToken:e},{headers:{"x-access-token":localStorage.getItem("token")||""}})}}else"denied"===e&&console.error("Notification permission denied")}catch(e){console.error("Error requesting notification permission:",e)}};return(0,n.useEffect)(()=>{g(),S.Fw&&(0,_.ps)(S.Fw,e=>{console.log("Message received:",e)})},[]),(0,n.useEffect)(()=>{u.Z.get(h.Z+"/admin/carousel").then(e=>{s(e.data)}),u.Z.get(h.Z+"/admin/ad").then(e=>{c(e.data)})},[]),(0,n.useEffect)(()=>{let e=localStorage.getItem("token");e||t.push("/login"),u.Z.get(h.Z+"/user/protected",{headers:{"x-access-token":e}}).then(e=>{200!==e.status&&t.push("/login")}).catch(e=>{t.push("/login"),localStorage.removeItem("token")})},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(a.Z,{children:[(0,l.jsxs)("div",{className:"w-full  flex flex-col relative ",style:{backgroundColor:"white",backgroundSize:"cover"},children:[(0,l.jsx)(b,{}),(0,l.jsx)("div",{className:"w-full p-2 rounded-2xl",children:0===e.length?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("img",{src:"/images/caurosel.jpg",alt:"noImage"})}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o,{carousel:e})})}),(0,l.jsxs)("div",{className:"cricle-contDiv",children:[(0,l.jsxs)("div",{className:"cricle-mainDiv",children:[(0,l.jsx)("img",{src:"/images/new-bg.png",alt:"noImage",className:"img object-center"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"textOne flex items-center justify-center w-12 h-12 rounded-full bg-[#082282]",children:(0,l.jsx)(f.d01,{className:"icon",onClick:()=>t.push("/leadership")})}),(0,l.jsx)("span",{className:"textOne-span",children:"Leadership"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"textTwo flex items-center justify-center w-12 h-12 rounded-full bg-[#082282]",onClick:()=>t.push("/leaderboard"),children:(0,l.jsx)(f.Cal,{className:"icon"})}),(0,l.jsx)("span",{className:"textTwo-span",children:"Leaderboard"})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"textThree flex items-center justify-center w-12 h-12 rounded-full bg-[#082282]",onClick:()=>window.open("https://dccthrissur.com/janaprathinithigal.php"),children:[(0,l.jsx)(f.te,{className:"icon"}),(0,l.jsx)("span",{className:"textThree-span",children:"peoples Representatives"})]})}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"textFour flex items-center justify-center w-12 h-12 rounded-full bg-[#082282]",onClick:()=>t.push("/history"),children:[(0,l.jsx)(f.Egn,{className:"icon"}),(0,l.jsx)("span",{className:"textFour-span",children:"History"})]})}),(0,l.jsx)("div",{className:"gandi-div",children:(0,l.jsx)("img",{className:"gandi-img",src:"/Group.jpg",alt:""})}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"textFive flex items-center justify-center w-12 h-12 rounded-full bg-[#082282]",onClick:()=>window.open("https://dccthrissur.com/leganal.php"),children:[(0,l.jsx)(f.TYc,{className:"icon"}),(0,l.jsx)("span",{className:"textFive-span",children:"Articles"})]})}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"textSix flex items-center justify-center w-12 h-12 rounded-full bg-[#082282]",onClick:()=>t.push("/Nutritional-organizations"),children:[(0,l.jsx)(N.QJX,{className:"icon"}),(0,l.jsx)("span",{className:"textSix-span",children:"Nutritional Organizations"})]})}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"textSeven flex items-center justify-center w-12 h-12 rounded-full bg-[#082282]",onClick:()=>window.open("https://soundcloud.com/keralapcc"),children:[(0,l.jsx)(d.n5x,{className:"icon"}),(0,l.jsx)("span",{className:"textSeven-span",children:"Music"})]})}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"textEight flex items-center justify-center w-12 h-12 rounded-full bg-[#082282]",onClick:()=>t.push("/slogan"),children:[(0,l.jsx)(f.dBs,{className:"icon"}),(0,l.jsx)("span",{className:"textEight-span",children:"Slogans"})]})})]}),(0,l.jsx)("div",{})]}),(0,l.jsx)("div",{className:"social-link-container w-full px-5 my-1",children:(0,l.jsxs)("div",{className:"p-1 mx-[10%] flex justify-between items-center mt-1 mb-1  bg-white",children:[(0,l.jsx)("div",{children:(0,l.jsx)(r.default,{href:"https://www.facebook.com/INTUCTHRISSUR?mibextid=ZbWKwL",children:(0,l.jsx)(w.Am9,{className:"fill-blue-600 gap-y-3 mt-1 mb-1 ",size:35})})}),(0,l.jsx)("div",{children:(0,l.jsx)(r.default,{href:"https://www.instagram.com/intuc__thrissur?igsh=Zm94eTE1MncwZWEw",children:(0,l.jsx)("img",{src:"/icons/instagram.png",alt:"",className:"w-14 p-1 mt-1"})})}),(0,l.jsx)("div",{children:(0,l.jsx)(r.default,{href:"https://youtube.com/@intucthrissur?si=1X-gjqOOaYuYSEHc",children:(0,l.jsx)("img",{src:"/icons/youtube.png",alt:"",className:"w-14 p-1 mt-1 mb-1"})})}),(0,l.jsx)("div",{children:(0,l.jsx)(r.default,{href:"wa.me/919846203965",children:(0,l.jsx)(x.ff9,{className:"fill-green-500 gap-y-3 mb-1",size:34})})}),(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:"/icons/customer-care.png",alt:"",className:"w-10 p-2 mr-1 ml-1"})})]})}),(0,l.jsx)("div",{onClick:()=>t.push("/contribute"),className:"social-link-container w-full px-4 my-2",children:(0,l.jsx)("img",{src:"/images/contrigandi.png",alt:""})}),(0,l.jsxs)("div",{className:"polling-container-2 w-full flex flex-col justify-center items-center my-7",children:[(0,l.jsx)("h2",{className:"text-lg font-bold m-0",style:{userSelect:"none"},children:"POLLING"}),(0,l.jsx)("h5",{className:"text-sm font-semibold text-blue-700",style:{userSelect:"none"},children:"make Your Statement"}),(0,l.jsx)(Z,{})]}),(0,l.jsx)("div",{className:"w-full p-2 rounded-2xl",children:(0,l.jsx)(k,{carousel:i})}),(0,l.jsx)("div",{className:"banner-image w-full h-full flex justify-center items-center px-2 rounded-lg mt-3 mb-20 cursor-pointer",children:(0,l.jsx)("img",{onClick:()=>t.push("/developers"),src:"/images/dev-banner.jpg",alt:"",className:"rounder-lg"})})]}),(0,l.jsx)(y.Z,{activeItem:"home"})]})})}},46340:function(e,s,t){"use strict";t.d(s,{Fw:function(){return r},I8:function(){return c}});var l=t(26142),a=t(92730),n=t(43992);let i=(0,l.C6)().length?(0,l.Mq)():(0,l.ZF)({apiKey:"AIzaSyCTEWdTung09yYQggc0dkPA-MAK7uTzoHE",authDomain:"dcc-app-ca253.firebaseapp.com",databaseURL:"https://dcc-app-ca253-default-rtdb.asia-southeast1.firebasedatabase.app/",projectId:"dcc-app-ca253",storageBucket:"dcc-app-ca253.appspot.com",messagingSenderId:"1085584810835",appId:"1:1085584810835:web:fb6935f801f39527bab7a6",measurementId:"G-F9GSRTLVTJ"}),c=(0,a.v0)(i),r=(0,n.KL)(i)},26915:function(e,s,t){"use strict";var l=t(3827);t(64090);var a=t(71399);t(49106);var n=t(70784),i=t(47907),c=t(8792);t(50946),s.Z=function(e){let{activeItem:s}=e;return(0,i.useRouter)(),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"bottom-nav relative z-50",children:(0,l.jsx)("nav",{className:"md:w-[45%] w-full",children:(0,l.jsx)("div",{className:"nav-box nav-bg",children:(0,l.jsxs)("ul",{className:"nav-container",children:[(0,l.jsx)("li",{className:"nav__item ".concat("home"===s?"active":""),children:(0,l.jsxs)(c.default,{href:"/home",className:"nav__item-link",children:[(0,l.jsx)("div",{className:"nav__item-icon",children:(0,l.jsx)(a.xng,{size:24,className:"text-blue-800"})}),(0,l.jsx)("span",{className:"nav__item-text nav-text",children:"Home"})]})}),(0,l.jsx)("li",{className:"nav__item ".concat("gallery"===s?"active":""),children:(0,l.jsxs)(c.default,{href:"/gallery",className:"nav__item-link",children:[(0,l.jsx)("div",{className:"nav__item-icon",children:(0,l.jsx)(a.H3h,{size:24,className:"text-blue-800"})}),(0,l.jsx)("span",{className:"nav__item-text nav-text",children:"Gallery"})]})}),(0,l.jsx)("li",{className:"nav__item ".concat("events"===s?"active":""),children:(0,l.jsxs)(c.default,{href:"/events",className:"nav__item-link",children:[(0,l.jsx)("div",{className:"nav__item-icon",children:(0,l.jsx)(n.t_b,{size:24,className:"text-blue-800"})}),(0,l.jsx)("span",{className:"nav__item-text nav-text",children:"Events"})]})}),(0,l.jsx)("li",{className:"nav__item ".concat("profile"===s?"active":""),children:(0,l.jsxs)(c.default,{href:"/profile",className:"nav__item-link",children:[(0,l.jsx)("div",{className:"nav__item-icon",children:(0,l.jsx)(a.Xws,{size:24,className:"text-blue-800"})}),(0,l.jsx)("span",{className:"nav__item-text nav-text",children:"Profile"})]})})]})})})})})}},1017:function(e,s,t){"use strict";var l=t(3827);t(64090);var a=t(18009);s.Z=function(e){let{children:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-screen h-screen flex justify-center items-center overflow-x-hidden",children:(0,l.jsx)("div",{className:"md:w-[45%] w-full h-screen ",children:s})}),(0,l.jsx)(a.x7,{})]})}},4205:function(e,s){"use strict";s.Z="https://dccbackend.plusitpark.com/api"},85176:function(){},50946:function(){},49106:function(){},73794:function(){}},function(e){e.O(0,[6051,7699,5706,5452,8565,522,2516,5505,1694,7259,8218,1296,7908,3985,4591,6943,502,2971,9362,560],function(){return e(e.s=6370)}),_N_E=e.O()}]);