if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const t=e=>s(e,c),d={module:{uri:c},exports:r,require:t};a[c]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Congress_seva.png",revision:"46216685192e615113dcd3078c20aedb"},{url:"/Group.jpg",revision:"c106189d0a3784916a83929cb5323b22"},{url:"/Indian_National_Congress_hand.png",revision:"25f691e614786fed43e8991d62265c5a"},{url:"/Kerala-students-union-flag 1.png",revision:"afa1d1fda2792150c922b6d455597255"},{url:"/Mahila.png",revision:"e3bec6a3f68f3332f0ed25e19fb4954b"},{url:"/_next/static/chunks/1296-54d70b25958cbc0a.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/1337-d9c41635a57a3146.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/13b76428-cbc66322bfb8df8b.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/1672-f8fbcea15ea6a709.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/267c2b52-5c6b7415a707b957.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/385cb88d-8b6875e999db5979.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/3985-59962e0e668ab1dc.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/3d8f973b-2ec2972ee8ab2015.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/479ba886-15334f0d9d3a6eeb.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/4842-d6d5ae54241b73c9.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/53c13509-e351f7faa4b4c684.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/5e22fd23-015676d44b34c3aa.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/6546-b72b8022b93d4348.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/6943-73b6c88f1980f91d.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/7085-557d60730eef4857.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/7908-883c301915b9bc94.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/795d4814-5b07c952393ca8e3.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/8e1d74a4-0a22d407fdb59d84.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/9362-7d1ab38edd6e5f74.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/94730671-a28878609daea6c8.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/9c4e2130-80086460fa344acc.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/aaea2bcf-edfba2ab6abf74c1.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(auth)/change-password/page-2491e16922994296.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(auth)/edit-profile/page-2e1442d8842be3b1.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(auth)/forgot-password/page-d5ba751ac3017f9e.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(auth)/login/page-30982f2274d40ea5.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(auth)/register/page-50e8ade1099be2c5.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(auth)/verify-otp/page-d6ba7e451ef84d34.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/Nutritional-organizations/page-6b8b331dc2831354.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/contribute/page-dd5f180d24ab010b.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/developers/page-6f76a4ee25419a84.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/events-gallery/page-2d5b2417fc123674.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/events/page-6b47492be9b3415b.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/gallery/page-640a8f1666ef8a40.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/history/page-fe845823e93ea020.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/home/page-5bfc9958fb740d58.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/leaderboard/page-30a6ffdd1d9e5bbc.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/leadership/page-2a6bd8a6fa05feb8.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/profile/page-edb36490071c5d4b.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/slogan/page-1094d9708f810811.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(main)/trade-union/page-cef14c4db30b1abc.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(sidenav)/contact/page-a9764f7e2061bed3.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(sidenav)/disclaimer/page-a778149d8f07ea68.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(sidenav)/feedback/page-13c71bf448ab3300.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(sidenav)/membership-form/page-d9b902b7fe152523.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(sidenav)/notifications/page-76dd42877685a63d.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(sidenav)/payment-history/page-41350104e8b8a923.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(sidenav)/privacy/page-c06fd8b7e162e533.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/(sidenav)/social-media/page-48c0800abdeac919.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/_not-found-0f1dde70a312e2fa.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/layout-53f4c29b2863a989.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/app/page-c70e4fb9ae83a5ea.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/c916193b-0791bd032a62f866.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/e34aaff9-3f2d68e277dab901.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/e8686b1f-cbaf4316f261f294.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/f7333993-18d051f7cf03b0be.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/fd9d1056-3933a3b650da6612.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/main-app-b50b0570a5c746cc.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/main-f75f194c215c8b1f.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/pages/_app-57bdff7978360b1c.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/pages/_error-29037c284dd0eec6.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-acd202a4337a50c3.js",revision:"p1I3MWvRsthiP1RqjSktk"},{url:"/_next/static/css/0448a516be5d8138.css",revision:"0448a516be5d8138"},{url:"/_next/static/css/0bb448769fb19add.css",revision:"0bb448769fb19add"},{url:"/_next/static/css/23960a1e96415b3b.css",revision:"23960a1e96415b3b"},{url:"/_next/static/css/2aab7703a3629c60.css",revision:"2aab7703a3629c60"},{url:"/_next/static/css/39fbe6a4c410100f.css",revision:"39fbe6a4c410100f"},{url:"/_next/static/css/5022c6ca0ff4b9d0.css",revision:"5022c6ca0ff4b9d0"},{url:"/_next/static/css/5eb4c265051446e3.css",revision:"5eb4c265051446e3"},{url:"/_next/static/css/606e47254994d713.css",revision:"606e47254994d713"},{url:"/_next/static/css/73c00cd95dc66651.css",revision:"73c00cd95dc66651"},{url:"/_next/static/css/7b9aa927f2ae477b.css",revision:"7b9aa927f2ae477b"},{url:"/_next/static/css/937da58cc661ae9f.css",revision:"937da58cc661ae9f"},{url:"/_next/static/css/b32a757c1b71a6fc.css",revision:"b32a757c1b71a6fc"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/p1I3MWvRsthiP1RqjSktk/_buildManifest.js",revision:"2b54d7db375d2b4c0e6af318090bebea"},{url:"/_next/static/p1I3MWvRsthiP1RqjSktk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"ef5e2973eed2d9c159635540569dd122"},{url:"/android-chrome-512x512.png",revision:"2bde67529dafedbb60a9b6371c18f33b"},{url:"/apple-touch-icon.png",revision:"ae0e862745f02202c411f38b5196768c"},{url:"/carousel1.jpg",revision:"11a35eae953f2d9af3fe415be4276063"},{url:"/carousel2.jpg.jpg",revision:"5b393f8938190856fe9b3a2071ff958c"},{url:"/carousel3.jpg",revision:"d248fa13ea52732011c6331ed0033b88"},{url:"/developers/1.png",revision:"50772f5548da3f4c21c70efc4a829834"},{url:"/developers/10.png",revision:"682ce616fa77d00c84c29cb84d3b28d9"},{url:"/developers/11.png",revision:"1b743dee4a797a1b611d59ca1d63bd22"},{url:"/developers/12.png",revision:"5d38c89b1b2f8f2a7c96cfbd03258adb"},{url:"/developers/13.png",revision:"95b09c7861a52d1f22665a57336fb6df"},{url:"/developers/14.png",revision:"3714b5f9262a4e617eeb9b26cc66493c"},{url:"/developers/15.png",revision:"1be51e94960910afd99ca68d67a911fb"},{url:"/developers/16.png",revision:"9920b03dbc61ed9799de24c05607ee60"},{url:"/developers/17.png",revision:"f02942382174e0982392122a91c06f3e"},{url:"/developers/18.png",revision:"50772f5548da3f4c21c70efc4a829834"},{url:"/developers/2.png",revision:"8b2dc306ebaa34c7d2021de3ab74d123"},{url:"/developers/3.png",revision:"07d91e16659406b6608b83cba0f47398"},{url:"/developers/4.png",revision:"437c8e77e2e462aff203fe95e594b0e3"},{url:"/developers/5.png",revision:"932d21ce2d2a74428f0a1323d9707e58"},{url:"/developers/6.png",revision:"39b5dc6c8525299e72dc43d1afb14eb8"},{url:"/developers/7.png",revision:"ee1f01a2c05d4cef4c99d330dcb3e719"},{url:"/developers/8.png",revision:"bcc6372b3582ba9ec78281d5bdb3fc62"},{url:"/developers/9.png",revision:"7101f2472cdea477621338eb9987e1c6"},{url:"/favicon-16x16.png",revision:"fda28d4e41a35eb3431e88c8d7eb537e"},{url:"/favicon-32x32.png",revision:"532deb168d3e916c53ea7b55370b6b8c"},{url:"/favicon.ico",revision:"182c31972a7965d9806d15a73530b730"},{url:"/firebase-messaging-sw.js",revision:"d3dfc73fbcc4a833e9e6ca6af84d23d3"},{url:"/forms/1.jpeg",revision:"b151795c82bc1ab2e28b6182b08d9c0b"},{url:"/forms/10.jpeg",revision:"090fb2790b28838626769f0a8159834e"},{url:"/forms/2.jpeg",revision:"eb73d1943874e1c80999827b7473cdb9"},{url:"/forms/3.jpeg",revision:"ae77cf7ef48494fc075a831ce9fe54ad"},{url:"/forms/4.jpeg",revision:"0e97e24b189441db0891bc7503dcb481"},{url:"/forms/5.jpeg",revision:"6367a6a0ea84ebb664baffb40090b780"},{url:"/forms/6.jpeg",revision:"259f34ec717b3f6a68bb232e2ce01e7d"},{url:"/forms/7.jpeg",revision:"af556547432216450f546edac3077ab9"},{url:"/forms/8.jpeg",revision:"8bda75720c0b2e0ce35b5666994936c5"},{url:"/forms/9.jpeg",revision:"73c139ddab57072ca3f35fef163e78f3"},{url:"/history/1.jpeg",revision:"4145efd65b15cbb6e598e95ec6edc301"},{url:"/history/10.jpeg",revision:"c760a5f68df8891012d297bac3f7886d"},{url:"/history/11.jpeg",revision:"d919946de771355a2d9364a98577b986"},{url:"/history/12.jpeg",revision:"3fed5b06dc06657872abb02e085f6036"},{url:"/history/13.jpeg",revision:"04d27ee5c520a25aa5631c7ed867aba2"},{url:"/history/14.jpeg",revision:"cd7b5fda454d58d9aaa69f6da41ac5d4"},{url:"/history/2.jpeg",revision:"0f6475fcd13aa82b141a126c94230f2d"},{url:"/history/3.jpeg",revision:"bf939a33a6a0ac9a491e740a17bea984"},{url:"/history/4.jpeg",revision:"efc19344a24323194810a69d8a278bf0"},{url:"/history/5.jpeg",revision:"c2b5ee02175a68e0a9541dca2d0990c4"},{url:"/history/6.jpeg",revision:"ca55e2103f19ed73094bc1d7c384200b"},{url:"/history/7.jpeg",revision:"24c4607421ba3959aed548a33c99754b"},{url:"/history/8.jpeg",revision:"2017de4a15cfc4a41098e6865db8a7ae"},{url:"/history/9.jpeg",revision:"b540482d4b589ba4dedf6aa7bd26b228"},{url:"/icons-icons-facebook-facebook-icon-png-and-psd-instagram-facebook-twitter-logo-115628509484rvrbar9nl 2.png",revision:"8310693c488a3cd40b478b72c9f0e9c1"},{url:"/icons-icons-facebook-facebook-icon-png-and-psd-instagram-facebook-twitter-logo-115628509484rvrbar9nl 4.png",revision:"8095b1d6aa15dbad608835a738a2af88"},{url:"/icons/customer-care.png",revision:"dd11fca969beab5022a558ba311c2223"},{url:"/icons/facebook.png",revision:"6f0021f8f38d12296709b9b7aed77649"},{url:"/icons/instagram.png",revision:"bde15c6c4dcd32a654e3880ff51685b7"},{url:"/icons/whatsapp.png",revision:"55f3f07b288fbcb2148d898926b66d69"},{url:"/icons/youtube.png",revision:"4a591ec7c4685384481bc6b52d28c5a3"},{url:"/images/Frame.png",revision:"f0d57b73469c1bb9ccc7cdb06e8eec58"},{url:"/images/Logo.png",revision:"4e4b7ec4598e5f4d1e81c633573019df"},{url:"/images/ads.png",revision:"212aae6ac0493cb17a89a2ab26f8d2fa"},{url:"/images/backimg.jpeg",revision:"6ea5c0a6263dd33828de5358f8020d42"},{url:"/images/banner-bg1.png",revision:"add6d92344e9cc5133e4ddc3cb8903f2"},{url:"/images/banner-bg2.png",revision:"8603dfb8904db093549b215923c23993"},{url:"/images/bg-1.png",revision:"cb43a86520390546ab204e8c254f2921"},{url:"/images/bg.png",revision:"6f1bdaee101d79ea6071ab9df6a4f4b4"},{url:"/images/bg_main.jpg",revision:"228ffd9fc00a74db3f199527f8fa9588"},{url:"/images/carousel.png",revision:"02216774993711b5f586b1c8b9fe2c2e"},{url:"/images/caurosel.jpg",revision:"2d3fcb1185b93177ea676d156a39ca7d"},{url:"/images/chandrasekharan.png",revision:"02432052172279fc7a7639b399d04f01"},{url:"/images/contrigandi.png",revision:"88ff923a97a47d01b8e1877347e1472b"},{url:"/images/dev-banner.jpg",revision:"1797eb0ea8408a0523ad9a09397c10ce"},{url:"/images/favicon_io.zip",revision:"896c66e2f8e7968e42c445e4d56a8d93"},{url:"/images/feedback.jpg",revision:"e6a0fbc2f519d409491e1541ae0dc265"},{url:"/images/imagecontri.png",revision:"5d8d49b0b8ce1df720599c371a9c5b04"},{url:"/images/intuc1.png",revision:"6f276ff9fef6cd0c22395c44b7d3a63b"},{url:"/images/jawahar3.png",revision:"1ffa2fcf281a9ea73691a09036f47141"},{url:"/images/loading.gif",revision:"0945fa00381b169332b2ced5c5a5f32b"},{url:"/images/logo-1.png",revision:"4e4b7ec4598e5f4d1e81c633573019df"},{url:"/images/mallikarjun.jpeg",revision:"f7bc938669fa4cf25fc747c592fc9f08"},{url:"/images/national-leaders/anil.jpg",revision:"13b0a9d170236ff22b7c4030f8d5c526"},{url:"/images/national-leaders/anwer.jpg",revision:"cd7da28352410b524a06323369a42ec3"},{url:"/images/national-leaders/balram.png",revision:"a106f3e66e4e7e8ee4a023013914a5e9"},{url:"/images/national-leaders/chandrasekharan.png",revision:"45e2ae4b5e505d5ff7d065ae24c65dac"},{url:"/images/national-leaders/chandy.png",revision:"edc8bc90733c06f20b4a585b88a591ca"},{url:"/images/national-leaders/chennithala.png",revision:"014d4106bbec857542438608823a9dc8"},{url:"/images/national-leaders/crdas.jpg",revision:"2d98aa2019889cc2f66461da18bf5ccc"},{url:"/images/national-leaders/hassan.png",revision:"0b9a95685fbee9e5eab854629f74a0e3"},{url:"/images/national-leaders/hibi.jpg",revision:"0aa4f21ccb91ac906569dd1c6f026a81"},{url:"/images/national-leaders/jose.jpeg",revision:"079b2925ab2093bc8c08d3cb57ce22ff"},{url:"/images/national-leaders/jose.png",revision:"f1b888a87729e5c0fc63ee81e678ee52"},{url:"/images/national-leaders/kumar.png",revision:"691efadd3d74b47d034082e384847af3"},{url:"/images/national-leaders/madhavan.jpg",revision:"53652fe5695b5ebc241a001451106be0"},{url:"/images/national-leaders/mahesh.jpg",revision:"e462ea39fcf8b3724cb9efcda689b7c5"},{url:"/images/national-leaders/mallikarjun.png",revision:"cf9e9181e253e6016397ca5710dc1dba"},{url:"/images/national-leaders/muraleedharan.png",revision:"e3cafb723890e10c524aba8573a509ae"},{url:"/images/national-leaders/prathapan.png",revision:"b5783df425061a279679d83dc45d065c"},{url:"/images/national-leaders/priyanka.png",revision:"8008bec065d1a07d93184ffbf3453ecd"},{url:"/images/national-leaders/rahul (1).png",revision:"c7c1421bb6ca3450a37a5a05e7059e16"},{url:"/images/national-leaders/rahul.png",revision:"14770539b8a67744061282248fbbbb30"},{url:"/images/national-leaders/reddy.png",revision:"925cd35b38607704defb571d55f231ee"},{url:"/images/national-leaders/roji.jpg",revision:"058e0f9fa21200129aa47feb550b41f2"},{url:"/images/national-leaders/sanjeeesh.jpeg",revision:"00232293c0f1de61bcef53849d7bf1b3"},{url:"/images/national-leaders/shafi.jpg",revision:"d620ff67ab31f8addde73a1b001d72b0"},{url:"/images/national-leaders/shashi.png",revision:"e88b7d15bc3820eb0037aa3e0da71f9b"},{url:"/images/national-leaders/shiva.png",revision:"6037a88b27fdae26c827839b043deacf"},{url:"/images/national-leaders/siddique.png",revision:"51fadf61afce1db15def0749c0cec183"},{url:"/images/national-leaders/sonia-gandhi.jpg",revision:"28d7ec172cf597975ba169b183e881c8"},{url:"/images/national-leaders/sudhakaran.jpeg",revision:"4682d63db773a3379a8b7649bc939c2a"},{url:"/images/national-leaders/sudhakaran.png",revision:"cc4d163d42efa40d636ad109dc8f854a"},{url:"/images/national-leaders/sundaran.png",revision:"7982ad4251a06d32ae98514078973ac5"},{url:"/images/national-leaders/tariq.png",revision:"8dbad312f316ff516d4fa50f30ed4884"},{url:"/images/national-leaders/vd.png",revision:"9f83c2518dd45c8d155de22a0ee16246"},{url:"/images/national-leaders/venugopal.png",revision:"8e28a768845e6de1da43aba23e63207a"},{url:"/images/national-leaders/vincent.jpg",revision:"a89c493d9e5e022d66117e8bceb32ae3"},{url:"/images/national-leaders/vincient.jpeg",revision:"3955a871d17d8eb675342ad7d8e42362"},{url:"/images/national-leaders/vishnunadh.png",revision:"9c4a97c7080d8347b9a3fa34650cc337"},{url:"/images/new-bg.png",revision:"7dd310dbbd41f59dc9101859a86c6050"},{url:"/images/profile.jpg",revision:"1668f882b545dae33f4d050062ce32f9"},{url:"/images/rajivejee.png",revision:"5f7c286e9c1fb7f9dbda90f91739aba2"},{url:"/images/ribbon.png",revision:"48a73e0b9a990b56a29c5d3866d7fbc0"},{url:"/images/sadhbhavanafavicon.png",revision:"339ced68ac483c855ff014233285e5cb"},{url:"/images/saneesh.jpeg",revision:"00232293c0f1de61bcef53849d7bf1b3"},{url:"/images/sanjeeva.png",revision:"0b7416a34dd8d07565e2b2017ef0774e"},{url:"/images/splash.gif",revision:"b14043e6cee76e45ae1d67682a228104"},{url:"/images/splashimage.jpg",revision:"ab7c6101040a417ecd8cabb99166456b"},{url:"/images/statamsham.gif.gif",revision:"ffdbb3d7de89679d41ff524c9bb74d16"},{url:"/images/sundaran.png",revision:"39bc0cafa63a57776c7e4cda4228a24a"},{url:"/intuc1.png",revision:"6f276ff9fef6cd0c22395c44b7d3a63b"},{url:"/jawahar3.png",revision:"1ffa2fcf281a9ea73691a09036f47141"},{url:"/manifest.json",revision:"fe670cf670dc5e9717180f63bee9abd5"},{url:"/maskable_icon.png",revision:"d3f5620819f7dd18ff757ebb389c1282"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.js",revision:"f663c0d2ab82fee471df48fd6e68a712"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/sounds/iphone_notification.mp3",revision:"799224a8a65d59fe387fba861eed088f"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/videos/sdmmp-1.gif",revision:"a8f5f0916595dfe7e6ce9f18617c2e50"},{url:"/videos/sdmmp.mp4",revision:"0b19c4a5f80f8c2f7f4867b0571c1064"},{url:"/youth congress.png",revision:"b830b1e33f42f43ad41be6f98b89b3e1"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
