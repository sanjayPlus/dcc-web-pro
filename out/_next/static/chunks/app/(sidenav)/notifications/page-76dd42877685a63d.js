(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6143],{65888:function(e,t,s){Promise.resolve().then(s.bind(s,62602))},62602:function(e,t,s){"use strict";s.r(t);var n=s(3827),r=s(1017),c=s(4205),i=s(7908),l=s(8792),a=s(47907),o=s(64090),d=s(70784);t.default=function(){let e=(0,a.useRouter)(),[t,s]=(0,o.useState)([]);return(0,o.useEffect)(()=>{localStorage.getItem("token")||e.push("/login"),i.Z.get(c.Z+"/user/protected",{headers:{"x-access-token":localStorage.getItem("token")}}).catch(t=>{e.push("/login"),localStorage.removeItem("token")}),i.Z.get(c.Z+"/admin/notifications?page=1&limit=10").then(e=>{s(e.data)})},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"Notification-container w-full min-h-screen  flex flex-col justify-start items-center relative",style:{backgroundImage:"url('images/backimg.jpeg')",backgroundSize:"cover"},children:[(0,n.jsx)(d.lrP,{className:"text-xl cursor-pointer absolute top-5 left-5 top-text",onClick:()=>e.back()}),(0,n.jsx)("h1",{className:"text-black text-2xl font-bold text-center my-7 top-text",children:"Notification"}),(0,n.jsx)("div",{className:"w-80 flex flex-col justify-center items-center pt-1 rounded-md  pb-16",children:t.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"Notification-card w-80 flex gap-2 justify-center items-center bg-gradient-to-r from-orange-100 to-green-100 shadow-lg p-3 rounded-xl my-2",children:[e.image&&(0,n.jsx)("img",{src:e.image,className:"w-16 h-16 rounded-full",alt:""}),(0,n.jsx)("p",{className:"text-sm font-semibold my-2",children:e.title}),(0,n.jsx)(l.default,{href:e.url,children:e.url&&(0,n.jsx)("button",{className:"bg-amber-700 text-white px-3 py-1 text-sm rounded-lg",children:"View"})})]},t)}))})]})})})}},1017:function(e,t,s){"use strict";var n=s(3827);s(64090);var r=s(18009);t.Z=function(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-screen h-screen flex justify-center items-center overflow-x-hidden",children:(0,n.jsx)("div",{className:"md:w-[45%] w-full h-screen ",children:t})}),(0,n.jsx)(r.x7,{})]})}},4205:function(e,t){"use strict";t.Z="https://dccbackend.plusitpark.com/api"}},function(e){e.O(0,[6051,1296,7908,3985,2971,9362,560],function(){return e(e.s=65888)}),_N_E=e.O()}]);