(this["webpackJsonptic-fuvk-toe"]=this["webpackJsonptic-fuvk-toe"]||[]).push([[0],{50:function(e,t,a){e.exports=a.p+"static/media/mf-avatar.5fd88976.svg"},57:function(e,t,a){e.exports=a.p+"static/media/5tenedores.2fa8d2b2.png"},58:function(e,t,a){e.exports=a.p+"static/media/aduanalibre.61e787d2.png"},60:function(e,t,a){e.exports=a.p+"static/media/loader.83727e5f.svg"},65:function(e,t,a){e.exports=a(89)},76:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/logo-delete.d7fa1744.png"},82:function(e,t,a){e.exports=a.p+"static/media/delete1.45254f68.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/delete2.9b470fa4.jpg"},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(24),r=a.n(c),i=a(12),o=a(62),s=a(91),m=a(92),u=a(52),d=a(28),f=a(64).a.initializeApp({apiKey:"AIzaSyD6bz6G5gJPy25oY9RmSnAWEyf08yqAO9w",authDomain:"portfolio-aa6bc.firebaseapp.com",projectId:"portfolio-aa6bc",storageBucket:"portfolio-aa6bc.appspot.com",messagingSenderId:"15475591508",appId:"1:15475591508:web:e21c622717ed230f6c60c1",measurementId:"G-NQS81YJ2Z0"}),b=l.a.createContext(),E=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(i.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){f.auth().signInAnonymously().then((function(e){var t=e.additionalUserInfo,a=e.user,n={userNew:t.isNewUser,uid:a.uid};o(n),d(!0)})).catch((function(e){return console.log(e)}))}),[]),u?l.a.createElement(b.Provider,{value:{user:r}},t):l.a.createElement("div",null)},p=a(44),g=a(34),v=a(94),h=a(59),j=a.n(h),N=a(60),w=a.n(N),O=(a(76),a(61)),k=(a(77),a(78),O.a.firestore(f)),x=function(){return{name:"",email:"",message:""}},S=function(){var e=Object(n.useContext)(b).user,t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),E=f[0],h=f[1],N=Object(n.useState)(x()),O=Object(i.a)(N,2),S=O[0],y=O[1],C=function(e,t){r(""),y(Object(g.a)(Object(g.a)({},S),{},Object(p.a)({},t,e)))};return l.a.createElement(s.a,{fluid:!0,className:"contact-container center-text"},l.a.createElement(m.a,null,l.a.createElement(o.a,{lg:12,md:12,sm:12,className:"form-box"},l.a.createElement("h1",{className:"title-section"},"Contact"),l.a.createElement("div",{className:"form-container"},l.a.createElement(v.a,null,l.a.createElement(v.a.Group,null,l.a.createElement(v.a.Control,{onChange:function(e){return C(e.target.value,"name")},value:S.name,className:"form-input",placeholder:"Name",type:"text"}),l.a.createElement(v.a.Control,{onChange:function(e){return C(e.target.value,"email")},value:S.email,className:"form-input",placeholder:"Enter email",type:"email"}),l.a.createElement(v.a.Control,{onChange:function(e){return C(e.target.value,"message")},className:"form-input",value:S.message,placeholder:"Send me your message",as:"textarea",rows:4})),l.a.createElement("p",{className:"message-alert"},c),l.a.createElement(u.a,{variant:"primary",onClick:function(){S.name?S.email?S.message?(h(!0),k.collection("message").add({name:S.name,email:S.email,message:S.message,userNew:e.userNew,uid:e.uid}).then((function(e){h(!1),j()("Thanks!","Your message has been sent successfully!","success"),y(x())})).catch((function(e){return console.log(e)}))):r("Message required"):r("Email required"):r("Name required")}},E?l.a.createElement("img",{style:{width:"1em"},src:w.a,alt:"loader"}):"Submit"))))))},y=function(e){var t=e.twitter,a=e.fb,n=e.ig,c=e.linkedin,r=e.classname;return l.a.createElement(s.a,{fluid:!0,className:"footer-container"},l.a.createElement("footer",null,l.a.createElement("div",null,l.a.createElement("ul",{className:r},c?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:c},l.a.createElement(d.a,{icon:["fab","linkedin-in"]}))):"",t?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:t},l.a.createElement(d.a,{icon:["fab","twitter"]}))):"",a?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:a},l.a.createElement(d.a,{icon:["fab","facebook"]}))):"",n?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:n},l.a.createElement(d.a,{icon:["fab","instagram"]}))):""))),l.a.createElement("div",{className:"box-name"},l.a.createElement("p",{style:{marginRight:"1em"}},"Daniel Gazc\xf3n"),l.a.createElement("span",{style:{color:"#7f6cf7",fontSize:"1.em"}},"2021")))},C=a(93),z=(a(80),a(50)),A=a.n(z),L=a(35),I=[{title:"Delete Productions Dashboard",lang:"React/Redux",subtitle:"Manage events dashboard",content:"Delete Productions Dashboard was a web app for manages resources, products, stages and reservations in music events.",img:a(81),images:[a(82),a(83)],link:"",repo:"https://github.com/dgazcon27/delete-backoffice"},{title:"5 Tenedores",lang:"React Native/Firebase",subtitle:"Social App",content:"5 Tenedores offers to users add restaurants and rank it, add to favorites, comment and see the top 5 five of popular restaurants",img:a(57),images:[a(57)],link:"",repo:"https://github.com/dgazcon27/5-tenedores"},{title:"AduanaLibre",lang:"Angular/Loopback",subtitle:"Dashboard and Landing Page",content:"Aduanalibre is an e-commerce B2B that group and index all companies what work in free zone around the world",img:a(58),images:[a(58)],link:"",repo:"https://gitlab.com/aduanalibre/frontend"}],D={twitter:"https://twitter.com/dgazcon",ig:"https://www.instagram.com/dgazcon/",linkedin:"https://www.linkedin.com/in/dgazcon/"},T=[{name:"HTML",level:70,label:90,initial:0},{name:"CSS",level:70,label:90,initial:0},{name:"SASS",level:55,label:75,initial:0},{name:"JavaScript",level:65,label:85,initial:0},{name:"React",level:55,label:75,initial:0},{name:"React-Native",level:40,label:60,initial:0},{name:"VueJs",level:50,label:70,initial:0},{name:"Git",level:70,label:90,initial:0}],R={lg:6,md:6,sm:12},B=function(e){var t=e.animateStats,a=Object(n.useState)(T),c=Object(i.a)(a,2),r=c[0],u=c[1];return Object(n.useEffect)((function(){setTimeout((function(){if(t){var e=r.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{initial:e.level})}));u(e)}}),1e3)}),[r,t]),l.a.createElement(s.a,{className:"container-us",fluid:!0},l.a.createElement(m.a,{className:"text-center"},l.a.createElement(o.a,Object.assign({},R,{className:"box-profile"}),l.a.createElement("img",{src:A.a,alt:"avatar",className:"avatar"}),l.a.createElement("div",null,l.a.createElement("p",{className:"article-content"},"I'm a enthusiastic frontend developer from Venezuela.",l.a.createElement("br",null),"I have passion for UX details, usability and creating",l.a.createElement("br",null),"intuitive user interfaces."))),l.a.createElement(o.a,R,r.map((function(e,t){return l.a.createElement(C.a,{className:"statusBar",key:t},l.a.createElement(C.a,{className:"progress-title",label:e.name,variant:"info",now:20}),l.a.createElement(C.a,{label:"".concat(e.label,"%"),variant:"info",now:e.initial}))})))))},J=a(96),H=a(95),P=(a(84),function(e){var t=e.current,a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)(0),m=Object(i.a)(s,2),u=m[0],d=m[1],f=Object(n.useState)({height:"300px"}),b=Object(i.a)(f,2),E=b[0],p=b[1];return Object(n.useEffect)((function(){u>767&&(window.onscroll=function(e){window.pageYOffset>400?o(!0):o(!1)});var e=function(){var e=document.body.clientWidth;d(e)};e(),window.addEventListener("resize",e)}),[u]),Object(n.useEffect)((function(){p({height:window.innerHeight})}),[]),Object(n.useEffect)((function(){var e=function(){p({height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),l.a.createElement("div",null,l.a.createElement(J.a,{expand:"md",fixed:"top",className:"navbar-items ".concat(r?"navbartop":"")},l.a.createElement(J.a.Brand,null,l.a.createElement(J.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end"},l.a.createElement(H.a,null,l.a.createElement(H.a.Link,{href:"#about-me",className:"about"===t?"current":""},"About"),l.a.createElement(H.a.Link,{href:"#projects",className:"projects"===t?"current":""},"Projects"),l.a.createElement(H.a.Link,{href:"#contacts",className:"contacts"===t?"current":""},"Contact")))),l.a.createElement(J.a.Toggle,{"aria-controls":"basic-navbar-nav"})),l.a.createElement("div",{id:"home"}),l.a.createElement("section",{id:"banner-principal",style:E,className:"banner"},l.a.createElement("div",null,l.a.createElement("h1",null,"Hi I'm Daniel Gazc\xf3n",l.a.createElement("span",{className:"bar-text"},"\xa0")),l.a.createElement("h3",null,"Junior Frontend Developer | JS"))))}),q=function(e){var t=e.title,a=e.content;return l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h3",{className:"article-title"},t)),l.a.createElement("p",{className:"article-content"},a))},G=function(e){var t=e.img,a=e.classname,n=e.alt;return l.a.createElement("div",{className:a},l.a.createElement("img",{src:t,alt:n}))},U=a(40),F=function(e){e.handleShow;var t=e.handleClose,a=e.show,n=e.children,c=e.project;return l.a.createElement(U.a,{size:"lg",show:a,onHide:t},l.a.createElement(U.a.Header,null,n),l.a.createElement(U.a.Body,null,l.a.createElement("h2",{className:"modal-title"},c.title),l.a.createElement("h5",{className:"modal-subtitle"},c.subtitle),l.a.createElement("p",null,c.content)),l.a.createElement(U.a.Footer,{className:c.link?"footer-buttons":""},c.link&&l.a.createElement(u.a,{href:c.link,target:"_blank",variant:"outline-danger"},"Visit Site"),l.a.createElement(u.a,{variant:"light",style:{fontWeight:"bold"},onClick:t},"X")))},M=a(53),Y=function(e){var t=e.images;return l.a.createElement(M.a,{indicators:!1},t&&t.map((function(e,t){return l.a.createElement(M.a.Item,{key:t,className:"project-carousel"},l.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide"}))})))},_=(a(85),a(86),{lg:6,md:6,sm:6});var V=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),f=Object(i.a)(r,2),b=f[0],p=f[1],g=Object(n.useState)({}),v=Object(i.a)(g,2),h=v[0],j=v[1],N=Object(n.useState)(!1),w=Object(i.a)(N,2),O=w[0],k=w[1],x=Object(n.useState)(""),C=Object(i.a)(x,2),z=C[0],A=C[1];return Object(n.useEffect)((function(){c([{id:1,title:"Responsive",icon:L.b,content:"Adaptable layout to any screen or mobile device."},{id:2,title:"Develop",icon:L.a,content:"Intuitive and easy to use interface with a clean UI/UX"},{id:3,title:"Focus on",icon:L.c,content:"Attention to details and requirement make a organic and efficient development."}])}),[]),Object(n.useEffect)((function(){var e=document.querySelectorAll(".item-container");function t(t){var a=window.scrollY,n="";e.forEach((function(e){if(function(e){var t=e.getBoundingClientRect(),a=t.top,n=t.bottom,l=t.height;return a+l>=0&&l+window.innerHeight>=n+250}(e)&&(e.classList.add("active"),k(!0)),e.offsetTop<=a&&e.offsetTop+e.offsetHeight>a){var t=e.attributes["data-box"].textContent;console.log(t),n=t}})),A(n)}return window.addEventListener("scroll",t,!1),function(){window.removeEventListener("scroll",t)}}),[]),l.a.createElement("div",null,l.a.createElement(P,{current:z}),l.a.createElement("div",{"data-box":"about",id:"about-me",className:"item-container"},l.a.createElement(o.a,{style:{paddingTop:"1em"},className:"text-center",lg:12,md:12},l.a.createElement("h1",{className:"title-section"},"ABOUT ME")),l.a.createElement(s.a,{className:"container-post"},l.a.createElement(m.a,null,a?a.map((function(e,t){var a=(t+1)%2===0?"border-text":"";return l.a.createElement(o.a,{md:4,lg:4,sm:6,key:t,className:"".concat(a," title-post center-text")},l.a.createElement("div",{className:"icon"},l.a.createElement(d.a,{icon:e.icon})),l.a.createElement(q,{title:e.title,content:e.content}))})):"Loading...")),l.a.createElement(B,{animateStats:O})),l.a.createElement(s.a,{fluid:!0,className:"container-project title-post container-division item-container",id:"projects","data-box":"projects"},l.a.createElement(m.a,{className:"text-center"},l.a.createElement(o.a,{lg:{span:4,offset:4}},l.a.createElement("h1",{className:"title-section"},"PROJECTS"))),l.a.createElement(m.a,{className:"text-center"},I.map((function(e,t){return l.a.createElement(o.a,Object.assign({},_,{key:t,className:"project-box"}),l.a.createElement(G,{img:e.img,classname:"project-img",alt:e.alt}),l.a.createElement("div",{className:"project-title"},l.a.createElement("p",null,e.title),l.a.createElement("span",null,e.lang)),l.a.createElement("div",{className:"project-button"},l.a.createElement(u.a,{variant:"secondary",onClick:function(){return function(e){j(I[e]),p(!0)}(t)}},"Learn More")))}))),l.a.createElement(F,{show:b,handleClose:function(){p(!1),j({})},project:h},l.a.createElement(Y,{images:h.images}))),l.a.createElement("div",{id:"contacts",className:"item-container","data-box":"contacts"},l.a.createElement(E,null,l.a.createElement(S,null))),l.a.createElement(y,Object.assign({},D,{classname:"footer-box"})))},W=(a(87),a(88),a(38)),X=a(63);W.b.add(X.a,L.d),r.a.render(l.a.createElement(V,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.74afbe1f.chunk.js.map