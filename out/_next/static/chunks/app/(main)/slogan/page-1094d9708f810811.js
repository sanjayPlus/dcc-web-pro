(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7335],{84686:function(e,t,r){Promise.resolve().then(r.bind(r,47126))},47126:function(e,t,r){"use strict";r.r(t);var n=r(3827),o=r(1017),c=r(4205),l=r(7908),s=r(47907),i=r(64090),a=r(70784);t.default=function(){let e=(0,s.useRouter)(),[t,r]=(0,i.useState)([]);return(0,i.useEffect)(()=>{localStorage.getItem("token")||e.push("/login"),l.Z.get(c.Z+"/user/protected",{headers:{"x-access-token":localStorage.getItem("token")}}).catch(t=>{e.push("/login"),localStorage.removeItem("token")}),l.Z.get(c.Z+"/admin/slogan").then(e=>{r(e.data)})},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{children:(0,n.jsxs)("div",{className:"slogan-container w-full min-h-screen  flex flex-col justify-start items-center relative",style:{backgroundImage:"url('images/backimg.jpeg')",backgroundSize:"cover"},children:[(0,n.jsx)(a.lrP,{className:"text-xl cursor-pointer absolute top-5 left-5 top-text",onClick:()=>e.back()}),(0,n.jsx)("h1",{className:"text-black text-2xl font-bold text-center my-7 top-text",children:"Slogan"}),(0,n.jsx)("div",{className:"w-80 flex flex-col justify-center items-center pt-1 rounded-md  pb-16",children:t.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"slogan-card w-[86%] flex gap-2 justify-center items-center bg-gradient-to-r from-orange-100 to-green-100 shadow-lg p-3 rounded-xl my-2 ",children:(0,n.jsx)("p",{className:"text-sm font-semibold my-2",children:e.slogan})},t)}))})]})})})}},1017:function(e,t,r){"use strict";var n=r(3827);r(64090);var o=r(18009);t.Z=function(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-screen h-screen flex justify-center items-center overflow-x-hidden",children:(0,n.jsx)("div",{className:"md:w-[45%] w-full h-screen ",children:t})}),(0,n.jsx)(o.x7,{})]})}},4205:function(e,t){"use strict";t.Z="https://dccbackend.plusitpark.com/api"},70158:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(64090),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(o),l=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,s({attr:a({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,a({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:o,size:c,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),f=c||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==c?n.createElement(c.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[6051,1296,7908,2971,9362,560],function(){return e(e.s=84686)}),_N_E=e.O()}]);