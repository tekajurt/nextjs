(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{4183:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/proyects",function(){return r(8872)}])},3875:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var n=r(5893),l=r(4184),a=r.n(l),s=r(7294),i=r(6792),o=r(6611),c=r(9602);let d=s.forwardRef(({bsPrefix:e,className:t,variant:r,as:l="img",...s},o)=>{let c=(0,i.vE)(e,"card-img");return(0,n.jsx)(l,{ref:o,className:a()(r?`${c}-${r}`:c,t),...s})});d.displayName="CardImg";var u=r(9059);let f=s.forwardRef(({bsPrefix:e,className:t,as:r="div",...l},o)=>{let c=(0,i.vE)(e,"card-header"),d=(0,s.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,n.jsx)(u.Z.Provider,{value:d,children:(0,n.jsx)(r,{ref:o,...l,className:a()(t,c)})})});f.displayName="CardHeader";let h=(0,c.Z)("h5"),m=(0,c.Z)("h6"),x=(0,o.Z)("card-body"),v=(0,o.Z)("card-title",{Component:h}),p=(0,o.Z)("card-subtitle",{Component:m}),j=(0,o.Z)("card-link",{Component:"a"}),b=(0,o.Z)("card-text",{Component:"p"}),y=(0,o.Z)("card-footer"),Z=(0,o.Z)("card-img-overlay"),g=s.forwardRef(({bsPrefix:e,className:t,bg:r,text:l,border:s,body:o,children:c,as:d="div",...u},f)=>{let h=(0,i.vE)(e,"card");return(0,n.jsx)(d,{ref:f,...u,className:a()(t,h,r&&`bg-${r}`,l&&`text-${l}`,s&&`border-${s}`),children:o?(0,n.jsx)(x,{children:c}):c})});g.displayName="Card",g.defaultProps={body:!1};var N=Object.assign(g,{Img:d,Title:v,Subtitle:p,Body:x,Link:j,Text:b,Header:f,Footer:y,ImgOverlay:Z}),C=r(9572);let w=()=>(0,n.jsxs)(N,{children:[(0,n.jsx)(N.Header,{children:"Proyecto"}),(0,n.jsxs)(N.Body,{children:[(0,n.jsx)(N.Title,{children:"Titulo del proyecto"}),(0,n.jsx)(N.Text,{children:"Descripci\xf3n del texto"}),(0,n.jsx)(C.default,{})]})]});var $=w},1487:function(e,t,r){"use strict";r.r(t);var n=r(5893),l=r(7294),a=r(130);let s=()=>{let[e,t]=(0,l.useState)(0),r=(e,r)=>{t(e)};return(0,n.jsxs)(a.Z,{className:" m-auto",activeIndex:e,onSelect:r,children:[(0,n.jsxs)(a.Z.Item,{children:[(0,n.jsx)("img",{className:"d-block w-100",src:"/first.svg",alt:"First slide"}),(0,n.jsxs)(a.Z.Caption,{children:[(0,n.jsx)("h3",{children:"First slide label"}),(0,n.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),(0,n.jsxs)(a.Z.Item,{children:[(0,n.jsx)("img",{className:"d-block w-100",src:"/second.svg",alt:"Second slide"}),(0,n.jsxs)(a.Z.Caption,{children:[(0,n.jsx)("h3",{children:"Second slide label"}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),(0,n.jsxs)(a.Z.Item,{children:[(0,n.jsx)("img",{className:"d-block w-100",src:"/third.svg",alt:"Third slide"}),(0,n.jsxs)(a.Z.Caption,{children:[(0,n.jsx)("h3",{children:"Third slide label"}),(0,n.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})};t.default=s},154:function(e,t,r){"use strict";r.r(t);var n=r(5893);let l=()=>(0,n.jsx)("footer",{className:" fixed-bottom align-items-center justify-content-center text-start",children:" footer"});t.default=l},9572:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n,l=r(5893),a=r(7294),s=r(5005),i=r(4184),o=r.n(i),c=r(9351),d=r(3004),u=r(7216),f=r(99);function h(e){if((!n&&0!==n||e)&&d.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),n=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return n}var m=r(2092),x=r(8146),v=r(5654),p=r(6852),j=r(4305),b=r(7785),y=r(9673),Z=r(1068),g=r(6611),N=(0,g.Z)("modal-body"),C=r(6467),w=r(6792);let $=a.forwardRef(({bsPrefix:e,className:t,contentClassName:r,centered:n,size:a,fullscreen:s,children:i,scrollable:c,...d},u)=>{e=(0,w.vE)(e,"modal");let f=`${e}-dialog`,h="string"==typeof s?`${e}-fullscreen-${s}`:`${e}-fullscreen`;return(0,l.jsx)("div",{...d,ref:u,className:o()(f,t,a&&`${e}-${a}`,n&&`${f}-centered`,c&&`${f}-scrollable`,s&&h),children:(0,l.jsx)("div",{className:o()(`${e}-content`,r),children:i})})});$.displayName="ModalDialog";var E=(0,g.Z)("modal-footer"),k=r(6695);let R=a.forwardRef(({bsPrefix:e,className:t,...r},n)=>(e=(0,w.vE)(e,"modal-header"),(0,l.jsx)(k.Z,{ref:n,...r,className:o()(t,e)})));R.displayName="ModalHeader",R.defaultProps={closeLabel:"Close",closeButton:!1};var T=r(9602);let I=(0,T.Z)("h4");var S=(0,g.Z)("modal-title",{Component:I});function D(e){return(0,l.jsx)(Z.Z,{...e,timeout:null})}function P(e){return(0,l.jsx)(Z.Z,{...e,timeout:null})}let F=a.forwardRef(({bsPrefix:e,className:t,style:r,dialogClassName:n,contentClassName:s,children:i,dialogAs:Z,"aria-labelledby":g,"aria-describedby":N,"aria-label":$,show:E,animation:k,backdrop:R,keyboard:T,onEscapeKeyDown:I,onShow:S,onHide:F,container:_,autoFocus:H,enforceFocus:O,restoreFocus:A,restoreFocusOptions:M,onEntered:B,onExit:L,onExiting:U,onEnter:z,onEntering:X,onExited:W,backdropClassName:K,manager:V,...G},q)=>{let[Q,J]=(0,a.useState)({}),[Y,ee]=(0,a.useState)(!1),et=(0,a.useRef)(!1),er=(0,a.useRef)(!1),en=(0,a.useRef)(null),[el,ea]=(0,m.Z)(),es=(0,v.Z)(q,ea),ei=(0,x.Z)(F),eo=(0,w.SC)();e=(0,w.vE)(e,"modal");let ec=(0,a.useMemo)(()=>({onHide:ei}),[ei]);function ed(){return V||(0,y.t)({isRTL:eo})}function eu(e){if(!d.Z)return;let t=ed().getScrollbarWidth()>0,r=e.scrollHeight>(0,u.Z)(e).documentElement.clientHeight;J({paddingRight:t&&!r?h():void 0,paddingLeft:!t&&r?h():void 0})}let ef=(0,x.Z)(()=>{el&&eu(el.dialog)});(0,p.Z)(()=>{(0,f.Z)(window,"resize",ef),null==en.current||en.current()});let eh=()=>{et.current=!0},em=e=>{et.current&&el&&e.target===el.dialog&&(er.current=!0),et.current=!1},ex=()=>{ee(!0),en.current=(0,j.Z)(el.dialog,()=>{ee(!1)})},ev=e=>{e.target===e.currentTarget&&ex()},ep=e=>{if("static"===R){ev(e);return}if(er.current||e.target!==e.currentTarget){er.current=!1;return}null==F||F()},ej=e=>{T?null==I||I(e):(e.preventDefault(),"static"===R&&ex())},eb=(e,t)=>{e&&eu(e),null==z||z(e,t)},ey=e=>{null==en.current||en.current(),null==L||L(e)},eZ=(e,t)=>{null==X||X(e,t),(0,c.ZP)(window,"resize",ef)},eg=e=>{e&&(e.style.display=""),null==W||W(e),(0,f.Z)(window,"resize",ef)},eN=(0,a.useCallback)(t=>(0,l.jsx)("div",{...t,className:o()(`${e}-backdrop`,K,!k&&"show")}),[k,K,e]),eC={...r,...Q};eC.display="block";let ew=r=>(0,l.jsx)("div",{role:"dialog",...r,style:eC,className:o()(t,e,Y&&`${e}-static`,!k&&"show"),onClick:R?ep:void 0,onMouseUp:em,"aria-label":$,"aria-labelledby":g,"aria-describedby":N,children:(0,l.jsx)(Z,{...G,onMouseDown:eh,className:n,contentClassName:s,children:i})});return(0,l.jsx)(C.Z.Provider,{value:ec,children:(0,l.jsx)(b.Z,{show:E,ref:es,backdrop:R,container:_,keyboard:!0,autoFocus:H,enforceFocus:O,restoreFocus:A,restoreFocusOptions:M,onEscapeKeyDown:ej,onShow:S,onHide:F,onEnter:eb,onEntering:eZ,onEntered:B,onExit:ey,onExiting:U,onExited:eg,manager:ed(),transition:k?D:void 0,backdropTransition:k?P:void 0,renderBackdrop:eN,renderDialog:ew})})});F.displayName="Modal",F.defaultProps={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:$};var _=Object.assign(F,{Body:N,Header:R,Title:S,Footer:E,Dialog:$,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});let H=()=>{let[e,t]=(0,a.useState)(!1),r=()=>t(!1),n=()=>t(!0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{variant:"primary",onClick:n,children:"Detalles"}),(0,l.jsxs)(_,{show:e,onHide:r,children:[(0,l.jsx)(_.Header,{closeButton:!0,children:(0,l.jsx)(_.Title,{children:"Detalles del proyecto"})}),(0,l.jsx)(_.Body,{children:"Descripcion del proyecto y cosas, etc"}),(0,l.jsxs)(_.Footer,{children:[(0,l.jsx)(s.Z,{variant:"secondary",onClick:r,children:"Close"}),(0,l.jsx)(s.Z,{variant:"primary",onClick:r,children:"Save Changes"})]})]})]})};var O=H},3010:function(e,t,r){"use strict";r.r(t);var n=r(5893),l=r(5001),a=r(4691),s=r(682),i=r(191),o=r(9352),c=r(3448);let d=()=>(0,n.jsx)(c.Z,{className:"text-light align-items-start fixed-top",expand:"xs",children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{"aria-controls":"basic-navbar-nav"}),(0,n.jsx)(l.Z,{href:"/",children:"LogoCAC"}),(0,n.jsx)(c.Z.Collapse,{id:"basic-navbar-nav",children:(0,n.jsxs)(o.Z,{className:"me-auto text-light",children:[(0,n.jsx)(a.Z,{href:"/",children:"Home"}),(0,n.jsx)(a.Z,{href:"who",children:"Quienes Somos"}),(0,n.jsx)(a.Z,{href:"proyects",children:"Proyectos"}),(0,n.jsx)(a.Z,{href:"join",children:"Inscripci\xf3n voluntariado"}),(0,n.jsx)(a.Z,{href:"contact",children:"Cont\xe1ctenos"})]})})]})});t.default=d},2755:function(e,t,r){"use strict";r.r(t);var n=r(5893),l=r(154),a=r(3010);let s=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.default,{}),(0,n.jsx)("div",{className:"containerPage w-75 h-auto text-center",children:e.children}),(0,n.jsx)(l.default,{})]});t.default=s},8872:function(e,t,r){"use strict";r.r(t);var n=r(5893),l=r(2755),a=r(1487),s=r(4051),i=r(1555),o=r(3875);let c=()=>(0,n.jsxs)(l.default,{children:[(0,n.jsx)("h1",{children:"Proyectos"}),(0,n.jsx)(a.default,{}),(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{children:(0,n.jsx)(o.default,{})}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(o.default,{})}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(o.default,{})})]})]});t.default=c},5005:function(e,t,r){"use strict";var n=r(4184),l=r.n(n),a=r(7294),s=r(861),i=r(6792),o=r(5893);let c=a.forwardRef(({as:e,bsPrefix:t,variant:r,size:n,active:a,className:c,...d},u)=>{let f=(0,i.vE)(t,"btn"),[h,{tagName:m}]=(0,s.FT)({tagName:e,...d});return(0,o.jsx)(m,{...h,...d,ref:u,className:l()(c,f,a&&"active",r&&`${f}-${r}`,n&&`${f}-${n}`,d.href&&d.disabled&&"disabled")})});c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c},130:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(8146),l=r(7294),a=function(e,t){var r=(0,l.useRef)(!0);(0,l.useEffect)(function(){if(r.current){r.current=!1;return}return e()},t)},s=r(2029),i=r(6454),o=r(6852),c=r(80),d=r(4184),u=r.n(d),f=r(5446),h=(0,r(6611).Z)("carousel-caption"),m=r(6792),x=r(5893);let v=l.forwardRef(({as:e="div",bsPrefix:t,className:r,...n},l)=>{let a=u()(r,(0,m.vE)(t,"carousel-item"));return(0,x.jsx)(e,{ref:l,...n,className:a})});v.displayName="CarouselItem";var p=r(3439),j=r(3825),b=r(4509),y=r(2785);let Z={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,x.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,x.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"},g=l.forwardRef((e,t)=>{var r,d;let h;let{as:v="div",bsPrefix:Z,slide:g,fade:N,controls:C,indicators:w,indicatorLabels:$,activeIndex:E,onSelect:k,onSlide:R,onSlid:T,interval:I,keyboard:S,onKeyDown:D,pause:P,onMouseOver:F,onMouseOut:_,wrap:H,touch:O,onTouchStart:A,onTouchMove:M,onTouchEnd:B,prevIcon:L,prevLabel:U,nextIcon:z,nextLabel:X,variant:W,className:K,children:V,...G}=(0,f.Ch)(e,{activeIndex:"onSelect"}),q=(0,m.vE)(Z,"carousel"),Q=(0,m.SC)(),J=(0,l.useRef)(null),[Y,ee]=(0,l.useState)("next"),[et,er]=(0,l.useState)(!1),[en,el]=(0,l.useState)(!1),[ea,es]=(0,l.useState)(E||0);(0,l.useEffect)(()=>{en||E===ea||(J.current?ee(J.current):ee((E||0)>ea?"next":"prev"),g&&el(!0),es(E||0))},[E,en,ea,g]),(0,l.useEffect)(()=>{J.current&&(J.current=null)});let ei=0;(0,p.Ed)(V,(e,t)=>{++ei,t===E&&(h=e.props.interval)});let eo=(0,s.Z)(h),ec=(0,l.useCallback)(e=>{if(en)return;let t=ea-1;if(t<0){if(!H)return;t=ei-1}J.current="prev",null==k||k(t,e)},[en,ea,k,H,ei]),ed=(0,n.Z)(e=>{if(en)return;let t=ea+1;if(t>=ei){if(!H)return;t=0}J.current="next",null==k||k(t,e)}),eu=(0,l.useRef)();(0,l.useImperativeHandle)(t,()=>({element:eu.current,prev:ec,next:ed}));let ef=(0,n.Z)(()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(eu.current)&&(Q?ec():ed())}),eh="next"===Y?"start":"end";a(()=>{g||(null==R||R(ea,eh),null==T||T(ea,eh))},[ea]);let em=`${q}-item-${Y}`,ex=`${q}-item-${eh}`,ev=(0,l.useCallback)(e=>{(0,b.Z)(e),null==R||R(ea,eh)},[R,ea,eh]),ep=(0,l.useCallback)(()=>{el(!1),null==T||T(ea,eh)},[T,ea,eh]),ej=(0,l.useCallback)(e=>{if(S&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),Q?ed(e):ec(e);return;case"ArrowRight":e.preventDefault(),Q?ec(e):ed(e);return}null==D||D(e)},[S,D,ec,ed,Q]),eb=(0,l.useCallback)(e=>{"hover"===P&&er(!0),null==F||F(e)},[P,F]),ey=(0,l.useCallback)(e=>{er(!1),null==_||_(e)},[_]),eZ=(0,l.useRef)(0),eg=(0,l.useRef)(0),eN=(r=(0,i.Z)(),d=(0,l.useRef)(),(0,o.Z)(function(){return clearTimeout(d.current)}),(0,l.useMemo)(function(){var e=function(){return clearTimeout(d.current)};return{set:function(t,n){void 0===n&&(n=0),r()&&(e(),n<=2147483647?d.current=setTimeout(t,n):function e(t,r,n){var l=n-Date.now();t.current=l<=2147483647?setTimeout(r,l):setTimeout(function(){return e(t,r,n)},2147483647)}(d,t,Date.now()+n))},clear:e}},[])),eC=(0,l.useCallback)(e=>{eZ.current=e.touches[0].clientX,eg.current=0,"hover"===P&&er(!0),null==A||A(e)},[P,A]),ew=(0,l.useCallback)(e=>{e.touches&&e.touches.length>1?eg.current=0:eg.current=e.touches[0].clientX-eZ.current,null==M||M(e)},[M]),e$=(0,l.useCallback)(e=>{if(O){let t=eg.current;Math.abs(t)>40&&(t>0?ec(e):ed(e))}"hover"===P&&eN.set(()=>{er(!1)},I||void 0),null==B||B(e)},[O,P,ec,ed,eN,I,B]),eE=null!=I&&!et&&!en,ek=(0,l.useRef)();(0,l.useEffect)(()=>{var e,t;if(eE)return ek.current=window.setInterval(document.visibilityState?ef:Q?ec:ed,null!=(e=null!=(t=eo.current)?t:I)?e:void 0),()=>{null!==ek.current&&clearInterval(ek.current)}},[eE,ec,ed,eo,I,ef,Q]);let eR=(0,l.useMemo)(()=>w&&Array.from({length:ei},(e,t)=>e=>{null==k||k(t,e)}),[w,ei,k]);return(0,x.jsxs)(v,{ref:eu,...G,onKeyDown:ej,onMouseOver:eb,onMouseOut:ey,onTouchStart:eC,onTouchMove:ew,onTouchEnd:e$,className:u()(K,q,g&&"slide",N&&`${q}-fade`,W&&`${q}-${W}`),children:[w&&(0,x.jsx)("div",{className:`${q}-indicators`,children:(0,p.UI)(V,(e,t)=>(0,x.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=$&&$.length?$[t]:`Slide ${t+1}`,className:t===ea?"active":void 0,onClick:eR?eR[t]:void 0,"aria-current":t===ea},t))}),(0,x.jsx)("div",{className:`${q}-inner`,children:(0,p.UI)(V,(e,t)=>{let r=t===ea;return g?(0,x.jsx)(y.Z,{in:r,onEnter:r?ev:void 0,onEntered:r?ep:void 0,addEndListener:j.Z,children:(t,n)=>l.cloneElement(e,{...n,className:u()(e.props.className,r&&"entered"!==t&&em,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ex)})}):l.cloneElement(e,{className:u()(e.props.className,r&&"active")})})}),C&&(0,x.jsxs)(x.Fragment,{children:[(H||0!==E)&&(0,x.jsxs)(c.Z,{className:`${q}-control-prev`,onClick:ec,children:[L,U&&(0,x.jsx)("span",{className:"visually-hidden",children:U})]}),(H||E!==ei-1)&&(0,x.jsxs)(c.Z,{className:`${q}-control-next`,onClick:ed,children:[z,X&&(0,x.jsx)("span",{className:"visually-hidden",children:X})]})]})]})});g.displayName="Carousel",g.defaultProps=Z;var N=Object.assign(g,{Caption:h,Item:v})},1555:function(e,t,r){"use strict";var n=r(4184),l=r.n(n),a=r(7294),s=r(6792),i=r(5893);let o=a.forwardRef((e,t)=>{let[{className:r,...n},{as:a="div",bsPrefix:o,spans:c}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,s.vE)(t,"col");let a=(0,s.pi)(),i=(0,s.zG)(),o=[],c=[];return a.forEach(e=>{let r,l,a;let s=n[e];delete n[e],"object"==typeof s&&null!=s?{span:r,offset:l,order:a}=s:r=s;let d=e!==i?`-${e}`:"";r&&o.push(!0===r?`${t}${d}`:`${t}${d}-${r}`),null!=a&&c.push(`order${d}-${a}`),null!=l&&c.push(`offset${d}-${l}`)}),[{...n,className:l()(r,...o,...c)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,i.jsx)(a,{...n,ref:t,className:l()(r,!c.length&&o)})});o.displayName="Col",t.Z=o},3439:function(e,t,r){"use strict";r.d(t,{Ed:function(){return a},UI:function(){return l},XW:function(){return s}});var n=r(7294);function l(e,t){let r=0;return n.Children.map(e,e=>n.isValidElement(e)?t(e,r++):e)}function a(e,t){let r=0;n.Children.forEach(e,e=>{n.isValidElement(e)&&t(e,r++)})}function s(e,t){return n.Children.toArray(e).some(e=>n.isValidElement(e)&&e.type===t)}},4051:function(e,t,r){"use strict";var n=r(4184),l=r.n(n),a=r(7294),s=r(6792),i=r(5893);let o=a.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},a)=>{let o=(0,s.vE)(e,"row"),c=(0,s.pi)(),d=(0,s.zG)(),u=`${o}-cols`,f=[];return c.forEach(e=>{let t;let r=n[e];delete n[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let l=e!==d?`-${e}`:"";null!=t&&f.push(`${u}${l}-${t}`)}),(0,i.jsx)(r,{ref:a,...n,className:l()(t,o,...f)})});o.displayName="Row",t.Z=o}},function(e){e.O(0,[728,834,715,619,774,888,179],function(){return e(e.s=4183)}),_N_E=e.O()}]);