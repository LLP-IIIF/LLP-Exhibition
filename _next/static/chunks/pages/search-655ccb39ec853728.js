(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{3235:function(e,t,n){"use strict";n.d(t,{Z:function(){return Card_Card}});var r=n(7178),o=n(9499),a=n(9288),i=(0,a.zo)("div",{padding:"$gr3 0 0",h4:{margin:"0",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"},span:{display:"block",margin:"0.25rem 0 0",fontWeight:"300",fontSize:"0.8333rem",color:"$slate10"}}),s=(0,a.zo)("div",{backgroundColor:"$slate6",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),c=(0,a.zo)("div",{display:"flex",width:"100%",maxWidth:"240px",position:"relative",a:(0,o.Z)({display:"flex",flexDirection:"column",width:"100%",color:"$slate12",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,o.Z)({color:"$indigo10"},"".concat(s),{transform:"scale3d(1.02, 1.02, 1.02)",boxShadow:"3px 3px 8px #0002"}))}),l=n(3093),d=n(8522),u=n(6225),p=n(3817),f=(0,a.zo)("img",(0,o.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0},"&.loaded",{opacity:1})),g=(0,a.zo)("figure",{backgroundColor:"$slate6",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",boxShadow:"2px 2px 5px #0001",transition:"$canopyAll"}),h=n(7294),m=n(6010),getResourceImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(n,"/").concat(t,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(n,"/").concat(t,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(n,"/").concat(t,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(n,"/").concat(t,"/0/default.jpg")},v=n(5893),Figure_Figure=function(e){var t=e.alt,n=e.resource,r=e.region,o=void 0===r?"full":r,a=e.size,i=void 0===a?"400,":a,s=e.isCover,c=(0,h.useState)(),l=c[0],d=c[1],u=(0,h.useState)(!1),p=u[0],x=u[1],y=(0,h.useRef)(null);return(0,h.useEffect)(function(){var e;d(getResourceImage(n,i,o)),null!=y&&y.current&&null!=y&&null!==(e=y.current)&&void 0!==e&&e.complete&&x(!0)},[]),(0,v.jsx)(g,{children:(0,v.jsx)(f,{alt:t,src:l,ref:y,style:void 0!==s&&s?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return x(!0)},className:(0,m.Z)("source",p&&"loaded")})})},x=n(1830),y=n(1664),b=n.n(y),j=n(9769),w=n(8956),$=n(2708),Card_Card=function(e){var t=e.resource,n=1,o=t.label,a=t.homepage,f=t.thumbnail,g=(0,w.J)(f),h=g.width,m=g.height;h&&m&&(n=h/m);var y=(0,$.YD)(),S=y.ref,O=y.inView,P=(0,j.i)(o);return(0,v.jsx)(c,{ref:S,children:(0,v.jsxs)(b(),{href:a&&a[0].id?a[0].id:"",children:[(0,v.jsx)(r.f,{ratio:n,children:(0,v.jsx)(s,{children:(0,v.jsx)(l.A,{transition:{duration:1},children:O&&t&&(0,v.jsx)(d.X,{features:u.H,children:(0,v.jsx)(p.m.div,{initial:{opacity:0},animate:{opacity:1},children:(0,v.jsx)(Figure_Figure,{resource:f,alt:P})})})})})}),(0,v.jsx)(i,{children:(0,v.jsx)(x.Label,{label:o,as:"h4"})})]})})}},2929:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9499),o=n(3235),a=n(827),i=n(9288),s=(0,i.zo)("div",{paddingBottom:"$gr5",zIndex:"1","@xxs":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr3"},"@sm":{paddingBottom:"$gr4"},"@md":{paddingBottom:"$gr4"}}),c=(0,i.zo)(a.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr5","@xxs":{marginLeft:"$gr3"},"@xs":{marginLeft:"$gr3"},"@sm":{marginLeft:"$gr4"},"@md":{marginLeft:"$gr4"},"&:first-child":{marginLeft:"0"}}});n(7294);var l=n(5893),d=n(7668),Grid=function(e){var t,n=e.children,o=(t={default:6},(0,r.Z)(t,d.b.xl,5),(0,r.Z)(t,d.b.lg,4),(0,r.Z)(t,d.b.md,4),(0,r.Z)(t,d.b.sm,3),(0,r.Z)(t,d.b.xs,2),t);return(0,l.jsx)(c,{breakpointCols:o,className:"canopy-grid",columnClassName:"canopy-grid-column",children:n})};Grid.Item=function(e){var t=e.item;return t?(0,l.jsx)(s,{children:(0,l.jsx)(o.Z,{resource:t},t.id)}):(0,l.jsx)(l.Fragment,{})};var u=Grid},9014:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ee},default:function(){return search}});var r=n(7294),o=n(9499),a=n(4729),i=n(2854),s=n(9288),c=(0,s.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"$indigo1",backgroundColor:"$indigo12",borderRadius:"50%"}),l=(0,s.zo)(i.xz,{position:"relative",right:"0",transition:"$canopySlideIn",boxShadow:"none"}),d=(0,s.zo)("div",(0,o.Z)({display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%"},"> ".concat(a.N),{display:"flex",justifyContent:"space-between",alignItems:"center"})),u=(0,s.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr3","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{opacity:"1",transition:"$canopyOpacity",fontSize:"$gr4",color:"$slate11",fontWeight:"300","@sm":{fontSize:"$gr3"}},variants:{isFixed:{true:(0,o.Z)({},"> ".concat(d),(0,o.Z)({"#canopy-search-summary":{opacity:"0"}},"".concat(l),{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"2px 2px 5px #0003"}))}}}),p=n(5893);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={facetsActive:[]},g=(0,r.createContext)(void 0);function facetsReducer(e,t){if("updateFacetsActive"===t.type)return _objectSpread(_objectSpread({},e),{},{facetsActive:t.facetsActive})}function FacetsProvider(e){var t=e.initialState,n=e.children,o=(0,r.useReducer)(facetsReducer,void 0===t?f:t),a=o[0],i=o[1];return(0,p.jsx)(g.Provider,{value:{facetsDispatch:i,facetsState:a},children:n})}function useFacetsState(){var e=(0,r.useContext)(g);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var h=n(5407),m=n(5014),v=n(2469),Activate=function(){var e=Array.from(useFacetsState().facetsState.facetsActive.keys()).filter(function(e){return"q"!==e}).length;return(0,p.jsx)(l,{asChild:!0,children:(0,p.jsxs)(h.O,{buttonType:"primary",children:[(0,m.EK)("searchFilter")," ",(0,p.jsx)(v.hsZ,{}),e>0&&(0,p.jsx)(c,{children:e})]})})},x=n(9802),y=n(3278),b=n(2765),j=(0,s.zo)(i.VY,{width:"calc(100% - $gr5 * 2)",maxWidth:y.G.default,maxHeight:"calc(100% - $gr5 * 2)",background:"$slate2",position:"fixed",top:"$gr5",left:"50%",overflowY:"auto",zIndex:"10",borderRadius:"3px",boxShadow:"5px 5px 13px ".concat(b.VS.slateA7),borderTop:"1px solid $slateA1",borderBottom:"1px solid $slateA4",transform:"translateX(-50%)",overflow:"clip",display:"flex","@lg":{width:"calc(100% - $gr4 * 2)",maxHeight:"calc(100% - $gr4 * 2)",top:"$gr4"},"@sm":{width:"calc(100% - $gr3 * 2)",maxHeight:"calc(100% - $gr3 * 2)",top:"$gr3"}}),w=(0,s.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),$=(0,s.zo)("header",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4",color:"$slate9",fontSize:"$gr3",fontFamily:"$display",fontWeight:"300",alignItems:"center","@sm":{padding:"$gr2 $gr3"}}),S=(0,s.zo)("footer",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),O=(0,s.zo)("div",{display:"flex",flexDirection:"column",flexGrow:"1",borderTop:"1px solid $slate4",borderBottom:"1px solid $slate4",overflowY:"scroll !important",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),P=(0,s.zo)(i.Dx,{}),k=(0,s.zo)(i.x8,{display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"50%",color:"$slate10",background:"transparent",cursor:"pointer",width:"$gr4",height:"$gr4",transition:"$canopyAll"}),_=(0,s.zo)(i.aV,{backgroundColor:"$slateA8",position:"fixed",top:0,left:0,right:0,bottom:0,display:"grid",placeItems:"center",overflowY:"auto",zIndex:"10",transition:"$canopyAll","&:hover":{backgroundColor:"$slateA9"},"&::after":{position:"fixed",zIndex:"11",background:"linear-gradient(180deg, $slate2, #0000)",width:"100%",height:"$gr9",left:"0",top:"0",content:""}}),L=(0,s.zo)(i.h_,{}),z=n(7058),C=(0,s.zo)(x.xz,{display:"flex",justifyContent:"space-between",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",fontFamily:"$display",fontSize:"$gr4",cursor:"pointer",borderTop:"1px solid $slate4","&:hover, &:focus":{color:"$indigo11"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"$slate10"},"&[aria-expanded='true']":{color:"$slate12 !important",fontWeight:"800",svg:{color:"$slate12 !important",transform:"rotate(0deg)"}}}),A=(0,s.zo)(x.VY,{padding:"$gr1 0 $gr4"}),F=(0,s.zo)(x.h4,{}),E=(0,s.zo)(x.ck,{"&:first-child":(0,o.Z)({},"".concat(C),{border:"none"})}),R=n(6069),D=(0,s.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"$slate12 !important",fontWeight:"800"}}},"&:hover, &:focus":{color:"$indigo11"},span:{color:"$slate11 !important",fontSize:"$gr2"}}),Z=(0,s.zo)(R.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"$slate4",boxShadow:"inset 1px 1px 2px #0002",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, $indigo11, $indigo8)",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{boxShadow:"1px 1px 2px ${indigoA.indigoA4}","&::before":{opacity:"1"}}}),I=(0,s.zo)(R.z$,{position:"absolute",zIndex:"1",color:"$indigo1",textShadow:"1px 1px 2px ".concat(b.EhR.indigoA12)}),q=(0,s.zo)("span",{display:"flex",margin:"0 0 $gr1",fontSize:"$gr3",color:"$slate11","&:last-child":{margin:"0"}}),Option=function(e){var t=e.active,n=e.facet,r=e.identifier,o=e.option,a=useFacetsState(),i=a.facetsDispatch,s=a.facetsState.facetsActive;return(0,p.jsxs)(q,{children:[(0,p.jsx)(Z,{value:o.value,id:r,checked:t,onCheckedChange:function(e){s.delete(n),e&&s.append(n,o.slug),i({type:"updateFacetsActive",facetsActive:s})},children:(0,p.jsx)(I,{asChild:!0,children:(0,p.jsx)(v.nQG,{})})}),(0,p.jsxs)(D,{htmlFor:r,isChecked:t,children:[o.value," ",(0,p.jsxs)("span",{children:["(",o.doc_count,")"]})]})]})},Facet=function(e){var t=e.label,n=e.slug,o=e.values,a=useFacetsState().facetsState.facetsActive,i=null==a?void 0:a.toString(),s={slug:"",value:(0,m.EK)("searchFilterAny")},c=(0,r.useState)({slug:"",value:(0,m.EK)("searchFilterAny")}),l=c[0],d=c[1];return(0,r.useEffect)(function(){var e,t=null==a?void 0:a.get(n);d(t?{slug:t,value:null===(e=o.find(function(e){return e.slug===t}))||void 0===e?void 0:e.value}:s)},[a,i,n,o]),(0,p.jsxs)(E,{value:n,children:[(0,p.jsx)(F,{asChild:!0,children:(0,p.jsxs)(C,{children:[(0,p.jsxs)("span",{children:[t," ",(0,p.jsx)(v.v4q,{})]}),(0,p.jsx)("span",{children:l.value})]})}),(0,p.jsx)(A,{children:o.map(function(e,t){var r="".concat(n,"-").concat(e.slug,"-").concat(t);return(0,p.jsx)(Option,{active:l.slug===e.slug,facet:n,identifier:r,option:e},r)})})]})},T=n(1163);function Modal_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Modal_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Modal_ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Modal_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Modal=function(e){var t=e.handleSubmit,n=useFacetsState(),o=n.facetsState,a=n.facetsDispatch,i=o.facetsActive,s=(0,T.useRouter)();return(0,p.jsxs)(L,{children:[(0,p.jsx)(_,{}),(0,p.jsx)(j,{children:(0,p.jsxs)(w,{children:[(0,p.jsxs)($,{children:[(0,p.jsx)(P,{asChild:!0,children:(0,p.jsx)("span",{children:(0,m.EK)("searchFilter")})}),(0,p.jsx)(k,{"aria-label":(0,m.EK)("searchFilterClose"),children:(0,p.jsx)(v.Pxu,{})})]}),(0,p.jsx)(O,{children:(0,p.jsx)(x.fC,{type:"single",collapsible:!0,children:z.map(function(e){return(0,r.createElement)(Facet,Modal_objectSpread(Modal_objectSpread({},e),{},{key:e.slug}))})})}),(0,p.jsxs)(S,{children:[(0,p.jsx)(h.O,{buttonType:"transparent",onClick:function(){z.forEach(function(e){return i.delete(e.slug)}),a({type:"updateFacetsActive",facetsActive:i})},children:(0,m.EK)("searchFilterClear")}),(0,p.jsx)(h.O,{buttonType:"primary",onClick:function(){s.push({pathname:"/search",query:i.toString()}),t()},children:(0,m.EK)("searchFilterSubmit")})]})]})})]})},K=(0,s.zo)(i.fC,{}),M=n(7642),Facets=function(){var e=(0,T.useRouter)().asPath,t=(0,r.useState)(!1),n=t[0],o=t[1],a=useFacetsState().facetsDispatch,i=(0,M.MQ)(),s=i.canopyDispatch,c=i.canopyState,l=c.headerVisible,d=c.searchParams;(0,r.useEffect)(function(){a({type:"updateFacetsActive",facetsActive:d})},[d,a]);var handleDialogChange=function(){o(!n),s({type:"updateHeaderVisible",headerVisible:!l})};return(0,r.useEffect)(function(){o(!1),s({type:"updateHeaderVisible",headerVisible:!0})},[e,s]),(0,p.jsxs)(K,{open:n,onOpenChange:handleDialogChange,children:[(0,p.jsx)(Activate,{}),(0,p.jsx)(Modal,{handleSubmit:handleDialogChange})]})},Facets_Facets=function(){return(0,p.jsx)(FacetsProvider,{children:(0,p.jsx)(Facets,{})})},N=n(7843),W=n(2929),B=n(7812),getPartOf=function(e){var t=new URL(e);return t.searchParams.delete("page"),[{id:t,type:"Collection"}]},V=n(3981),G=n(633),H=n(6486),U=n.n(H),Y=n(6304),getDocuments=function(e,t){var n=new Y.Document(t);V.forEach(function(e){return n.add(e)});var r=n.search(e).reduce(function(e,t){return(0,B.Z)(new Set([].concat((0,B.Z)(e),(0,B.Z)(t.result))))},[]);return r.length>0?r:[]},getResults=function(e,t,n,r){var o,a=t?getDocuments(t,r):V.map(function(e){return e.id}),i=0===n.length?G:(o=n.map(function(e){var t=z.find(function(t){return t.slug===e.label}).values.find(function(t){return t.slug===e.value});return null==t?void 0:t.docs}),G.filter(function(e){return U().intersection.apply(U(),(0,B.Z)(o)).includes(e.index)}));return a.filter(function(e){return i.some(function(t){return t.index===e})}).map(function(t){var n;return{id:(n=i.find(function(e){return e.index===t})).id,type:"Manifest",label:n.label,thumbnail:n.thumbnail,homepage:[{id:"".concat(e,"/works/").concat(n.slug),type:"Text",label:n.label}]}})};function request_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function request_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?request_ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):request_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var searchRequest=function(e){var t,n=e.params,r=e.baseUrl,o=e.flexSearch,a=z.map(function(e){return e.slug}).filter(function(e){return n.has(e)}).map(function(e){var t=n.get(e);return{label:e,value:t}}),i=null==n?void 0:n.get("q"),s=null==n?void 0:n.get("page"),c=new URL("".concat(r,"/search"));c.search=null==n?void 0:n.toString();var l=getResults(r,i,a,o),d=Array.from(Array(Math.ceil(l.length/10)).keys()).map(function(e){var t=l.slice(10*e,10*(e+1)).map(function(e){return e.id});return{page:e+1,items:t}}),u=s?(t=parseInt(s),d.find(function(e){return e.page===t}).items.map(function(e){return l.find(function(t){return t.id===e})})):d.map(function(e){var t=new URL(c);return t.searchParams.append("page",e.page),{id:t.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}});return request_objectSpread(request_objectSpread({"@context":"https://iiif.io/api/presentation/3/context.json",id:c.toString(),type:"Collection",label:{none:[i||"All Results"]},items:u},s?{summary:{none:["".concat(l.length,"}")]}}:{summary:{none:["".concat(l.length)]}}),s&&{partOf:getPartOf(c)})},hooks_usePageResults=function(e,t,n){var o=(0,r.useState)([]),a=o[0],i=o[1],s=(0,r.useState)(!1),c=s[0],l=s[1],d=(0,r.useState)(!0),u=d[0],p=d[1],f=(0,r.useState)(!1),g=f[0],h=f[1],m=(0,M.MQ)().canopyState.config,reset=function(){i([]),l(!1),p(!0),h(!1)};return(0,r.useEffect)(function(){return reset()},[n]),(0,r.useEffect)(function(){if(p(!0),l(!1),(null==e?void 0:e.length)>0&&e[t]){var n,r=searchRequest({params:new URL(e[t]).searchParams,baseUrl:null==m?void 0:m.baseUrl,flexSearch:null==m?void 0:null===(n=m.search)||void 0===n?void 0:n.flexSearch}).items;i(function(e){return[].concat((0,B.Z)(e),(0,B.Z)(r))}),h(e.length>t),p(!1)}},[m,e,t]),{data:a,error:c,loading:u,more:g}},Results=function(e){var t=e.pages,n=e.query,o=(0,r.useState)(0),a=o[0],i=o[1],s=hooks_usePageResults(t,a,n),c=s.data,l=s.loading,d=s.more;(0,r.useEffect)(function(){return i(0)},[n]);var u=(0,r.useRef)(),f=(0,r.useCallback)(function(e){!l&&(u.current&&u.current.disconnect(),u.current=new IntersectionObserver(function(e){e[0].isIntersecting&&d&&i(function(e){return e+1})}),e&&u.current.observe(e))},[l,d]);return(0,p.jsx)(W.Z,{children:c.map(function(e,t){return c.length===t+1?(0,p.jsx)("span",{ref:c.length===t+1?f:void 0,children:(0,p.jsx)(W.Z.Item,{item:e})},e.id):(0,p.jsx)("span",{children:(0,p.jsx)(W.Z.Item,{item:e})},e.id)})})},J=n(1830),Q=n(5049),hooks_useElementPosition=function(e){var t=(0,r.useState)(0),n=t[0],o=t[1];return(0,r.useEffect)(function(){var updatePosition=function(){o(window.pageYOffset),e.current&&o(window.pageYOffset-e.current.offsetTop)};return window.addEventListener("scroll",updatePosition),updatePosition(),function(){return window.removeEventListener("scroll",updatePosition)}},[e]),n},X=n(9332),ee=!0,search=function(){var e=(0,X.useSearchParams)(),t=(0,r.useState)([]),n=t[0],o=t[1],i=(0,r.useState)(),s=i[0],c=i[1],l=(0,r.useRef)(null),f=hooks_useElementPosition(l),g=(0,M.MQ)(),h=g.canopyDispatch,v=g.canopyState,x=v.config,y=v.searchHeaderFixed,b=v.searchSummary;return(0,r.useEffect)(function(){o([]),c(new URLSearchParams(e.toString()))},[e]),(0,r.useEffect)(function(){return h({searchHeaderFixed:f>-Q.J9,type:"updateSearchHeaderFixed"})},[h,f]),(0,r.useEffect)(function(){if(void 0!==s){h({searchParams:s,type:"updateSearchParams"});var e,t=null==x?void 0:null===(e=x.search)||void 0===e?void 0:e.flexSearch,n=searchRequest({params:s,baseUrl:null==x?void 0:x.baseUrl,flexSearch:t}),r=n.items,a=n.summary;o(r.map(function(e){return e.id})),a&&h({type:"updateSearchSummary",searchSummary:a})}},[x,s,h]),(0,p.jsxs)(N.Z,{children:[(0,p.jsx)(u,{ref:l,isFixed:y,children:(0,p.jsx)(d,{children:(0,p.jsxs)(a.Z,{containerType:"wide",children:[b&&(0,p.jsxs)("span",{id:"canopy-search-summary",children:[(0,p.jsx)(J.Summary,{as:"span",summary:b})," ",(0,m.EK)("searchResults")]}),(0,p.jsx)(Facets_Facets,{})]})})}),(0,p.jsx)(a.Z,{containerType:"wide",children:(0,p.jsx)(Results,{pages:n,query:s})})]})}},8266:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(9014)}])},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Genre","slug":"genre","values":[{"value":"figurines","slug":"figurines","doc_count":2,"docs":[3,10]},{"value":"appliqu\xe9 (textile visual works)","slug":"applique-textile-visual-works","doc_count":1,"docs":[1]},{"value":"arrows (projectiles)","slug":"arrows-projectiles","doc_count":1,"docs":[7]},{"value":"balance toys","slug":"balance-toys","doc_count":1,"docs":[4]},{"value":"beadwork (visual works)","slug":"beadwork-visual-works","doc_count":1,"docs":[6]},{"value":"dolls (figurines)","slug":"dolls-figurines","doc_count":1,"docs":[9]},{"value":"eating fork","slug":"eating-fork","doc_count":1,"docs":[0]},{"value":"eating knives","slug":"eating-knives","doc_count":1,"docs":[0]},{"value":"eating spoon","slug":"eating-spoon","doc_count":1,"docs":[0]},{"value":"purses (ladies\' accessories)","slug":"purses-ladies-accessories","doc_count":1,"docs":[5]},{"value":"tea services","slug":"tea-services","doc_count":1,"docs":[2]},{"value":"trays","slug":"trays","doc_count":1,"docs":[8]}]},{"label":"Series","slug":"series","values":[{"value":"Lydia Luhman Pederson collection--Other objects","slug":"lydia-luhman-pederson-collection-other-objects","doc_count":3,"docs":[2,4,8]},{"value":"Lydia Luhman Pederson collection--Sculptures","slug":"lydia-luhman-pederson-collection-sculptures","doc_count":2,"docs":[3,10]},{"value":"Lydia Luhman Pederson collection--Beaded objects","slug":"lydia-luhman-pederson-collection-beaded-objects","doc_count":1,"docs":[9]},{"value":"Lydia Luhman Pederson collection--Clothing and accessories","slug":"lydia-luhman-pederson-collection-clothing-and-accessories","doc_count":1,"docs":[5]},{"value":"Lydia Luhman Pederson collection--Jewelry","slug":"lydia-luhman-pederson-collection-jewelry","doc_count":1,"docs":[6]},{"value":"Lydia Luhman Pederson collection--Tableware","slug":"lydia-luhman-pederson-collection-tableware","doc_count":1,"docs":[0]},{"value":"Lydia Luhman Pederson collection--Textiles","slug":"lydia-luhman-pederson-collection-textiles","doc_count":1,"docs":[1]},{"value":"Lydia Luhman Pederson collection--Weapons or implements","slug":"lydia-luhman-pederson-collection-weapons-or-implements","doc_count":1,"docs":[7]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"Spoon, knife and fork with finials of a kneeling woman","metadata":"eating fork eating spoon eating knives Lydia Luhman Pederson collection--Tableware"},{"id":1,"label":"Appliqu\xe9 panel (obelisk, pyramids, sphinx, palm tree, person, camels)","metadata":"appliqu\xe9 (textile visual works) Lydia Luhman Pederson collection--Textiles"},{"id":2,"label":"Tea set","metadata":"tea services Lydia Luhman Pederson collection--Other objects"},{"id":3,"label":"Standing man holding spear and shield","metadata":"figurines Lydia Luhman Pederson collection--Sculptures"},{"id":4,"label":"Balancing toy","metadata":"balance toys Lydia Luhman Pederson collection--Other objects"},{"id":5,"label":"Leopard-skin purse with leopard face","metadata":"purses (ladies\' accessories) Lydia Luhman Pederson collection--Clothing and accessories"},{"id":6,"label":"Belt or necklace of 4 panels of beads, with text","metadata":"beadwork (visual works) Lydia Luhman Pederson collection--Jewelry"},{"id":7,"label":"Arrows with large metal points","metadata":"arrows (projectiles) Lydia Luhman Pederson collection--Weapons or implements"},{"id":8,"label":"Tray with design of snake","metadata":"trays Lydia Luhman Pederson collection--Other objects"},{"id":9,"label":"Doll","metadata":"dolls (figurines) Lydia Luhman Pederson collection--Beaded objects"},{"id":10,"label":"Head of a woman wearing earrings, surmounted by the head and arms of another figure, all on a base consisting of another face","metadata":"figurines Lydia Luhman Pederson collection--Sculptures"}]')}},function(e){e.O(0,[412,409,662,971,339,493,933,41,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);