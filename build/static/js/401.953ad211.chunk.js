"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[401],{5401:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var s=n(9439),r=n(2791),a=n(3433),l=n(7689),o=n(184),i=function(){return(0,o.jsx)("div",{className:"Skelethone_Container",children:(0,o.jsxs)("div",{className:"Skelethone_Wrapper",children:[(0,o.jsxs)("div",{className:"Skelethone_HorizonBar",children:[(0,o.jsx)("div",{className:"bar"}),(0,o.jsx)("div",{className:"bar"}),(0,o.jsx)("div",{className:"bar"})]}),(0,o.jsxs)("div",{className:"Skelethone_Box_Collection",children:[(0,o.jsx)("div",{className:"Skelethone_Box",style:{width:"100%",height:"68px"}}),(0,o.jsx)("div",{className:"Skelethone_Box",style:{width:"241px",height:"24px",borderRadius:"8px"}})]}),(0,o.jsx)("div",{className:"Skelethone_Bottom_Box",style:{width:"350px",height:"50px"}})]})})},u=(0,r.lazy)((function(){return n.e(87).then(n.bind(n,9087))})),c=(0,r.lazy)((function(){return Promise.all([n.e(97),n.e(699)]).then(n.bind(n,3699))})),h=(0,r.lazy)((function(){return n.e(339).then(n.bind(n,2339))})),d=(0,r.lazy)((function(){return Promise.all([n.e(411),n.e(703)]).then(n.bind(n,2703))})),x=(0,r.lazy)((function(){return n.e(996).then(n.bind(n,8996))}));function f(e){var t=e.gender,n=e.setGender,f=(e.setShowServerModal,e.result),j=e.navigate,m=e.showServerModal,p=e.setResult,S=(0,r.useState)([]),v=(0,s.Z)(S,2),b=v[0],g=v[1],k=r.useRef(null);return(0,l.V$)([{path:"/",element:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)(i,{}),children:(0,o.jsx)(u,{type:1})})},{path:"shot",element:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(c,{webcamRef:k,capturePhoto:function(){var e,t=k.current.getScreenshot();return fetch(t).then((function(e){return e.blob()})).then((function(e){var t=new File([e],"image.jpeg",{type:"image/jpeg"});g((function(e){return[].concat((0,a.Z)(e),[t])}))})),e=setTimeout((function(){j("/main/gender")}),1500),function(){clearTimeout(e)}},captures:b,showServerModal:m})})},{path:"color",element:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(h,{})})},{path:"gender",element:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(d,{gender:t,setGender:n,setResult:p,captures:b,showServerModal:m})})},{path:"cody",element:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(x,{result:f})})}])}var j=function(){var e=(0,r.useState)(),t=(0,s.Z)(e,2),n=t[0],a=t[1],i=(0,r.useState)(!1),u=(0,s.Z)(i,2),c=u[0],h=u[1],d=(0,r.useState)(),x=(0,s.Z)(d,2),j=x[0],m=x[1],p=(0,l.s0)();return(0,o.jsx)(f,{gender:n,setGender:a,setShowServerModal:h,result:j,navigate:p,showServerModal:c,setResult:m})}}}]);
//# sourceMappingURL=401.953ad211.chunk.js.map