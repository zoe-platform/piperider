"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[914],{914:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(3433),l=n(9439),r=n(4190),s=n(7094),i=n(8625),o=n(2791),c=n(8353),d=n(8693),m=n(5650),u=n(3159),x=n(1573),j=n(1892),p=n(8982),h=n(709),b=n(8493),f=n(4304),g=n(4494),v=n(5456),C=n(5575),w=n(7369),D=n(5850),S=n(1364),_=n(5460),y=n(184);function T(e){var t=e.data,n=e.columnName,T=e.tableName,N=t.base,R=N.tables,Z=N.created_at,k=t.input,I=k.tables,H=k.created_at,Q=(0,i.TH)(),W=(0,l.Z)(Q,2)[1],z=(0,o.useState)(0),M=(0,l.Z)(z,2),O=M[0],K=M[1],Y="".concat((0,h.D8)(Z)," -> ").concat((0,h.D8)(H));if(!T||!R||!I)return(0,y.jsx)(c.o,{isSingleReport:!1,time:Y,children:(0,y.jsx)(b.J,{text:"No profile data found for table name: ".concat(T)})});var A=decodeURIComponent(n),B=decodeURIComponent(T),E=0===A.length,G=R[B],U=I[B],J=(null===G||void 0===G?void 0:G.columns)||{},L=(null===U||void 0===U?void 0:U.columns)||{},V=J[A],q=L[A],F=(0,_.Ix)({data:t,tableName:T,type:"piperider"}),X=(0,l.Z)(F,2),$=X[0],ee=X[1],te=(0,_.Ix)({data:t,tableName:T,type:"dbt"}),ne=(0,l.Z)(te,2),ae=ne[0],le=ne[1],re=[].concat((0,a.Z)((null===$||void 0===$?void 0:$.tests)||[]),(0,a.Z)((null===ee||void 0===ee?void 0:ee.tests)||[])),se=[].concat((0,a.Z)((null===ae||void 0===ae?void 0:ae.tests)||[]),(0,a.Z)((null===le||void 0===le?void 0:le.tests)||[])),ie=(V||{}).type,oe=(q||{}).type,ce=(0,D.WN)(J,L,{metadata:!0}).__meta__,de=ce.added,me=ce.deleted,ue=ce.changed,xe=[{label:"Tables",path:"/"},{label:B,path:"/tables/".concat(B,"/columns/")},{label:A,path:"/tables/".concat(B,"/columns/").concat(A)}],je=(0,f.MM)(V),pe=je.backgroundColor,he=je.icon;return(0,y.jsx)(c.o,{isSingleReport:!1,time:Y,maxHeight:x.t4,children:(0,y.jsxs)(r.rj,{width:"inherit",templateColumns:"1fr 2fr",children:[(0,y.jsx)(r.P4,{colSpan:3,children:(0,y.jsx)(C.Q,{breadcrumbList:xe})}),(0,y.jsx)(r.P4,{overflowY:"scroll",maxHeight:x.t4,children:(0,y.jsx)(u._,{baseDataTables:R,targetDataTables:I,currentTable:B,currentColumn:A,onSelect:function(e){var t=e.tableName,n=e.columnName;K(0),W("/tables/".concat(t,"/columns/").concat(n))}})}),E?(0,y.jsxs)(r.P4,{maxHeight:x.t4,overflowY:"auto",p:10,children:[(0,y.jsx)(S.Q,{title:T,subtitle:"Table",mb:5}),(0,y.jsxs)(s.mQ,{defaultIndex:0,children:[(0,y.jsxs)(s.td,{children:[(0,y.jsx)(s.OK,{children:"Overview"}),(0,y.jsx)(s.OK,{children:"Assertions"}),(0,y.jsx)(s.OK,{children:"Schema"})]}),(0,y.jsxs)(s.nP,{children:[(0,y.jsxs)(s.x4,{children:[(0,y.jsx)(P,{}),(0,y.jsxs)(r.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,y.jsx)(g.m,{tableDatum:G}),(0,y.jsx)(r.iz,{orientation:"vertical"}),(0,y.jsx)(g.m,{tableDatum:U}),(0,y.jsx)(g.a,{description:null===G||void 0===G?void 0:G.description}),(0,y.jsx)(r.iz,{orientation:"vertical"}),(0,y.jsx)(g.a,{description:null===U||void 0===U?void 0:U.description})]})]}),(0,y.jsx)(s.x4,{children:(0,y.jsx)(r.rj,{templateColumns:"1fr",gap:3,height:"100%",children:(0,y.jsx)(_.dz,{assertions:{piperider:re,dbt:se}})})}),(0,y.jsxs)(s.x4,{children:[(0,y.jsx)(r.kC,{pb:3,children:(0,y.jsx)(w.Q,{fontWeight:"semibold",color:"gray.600",added:de,deleted:me,changed:ue})}),(0,y.jsx)(P,{}),(0,y.jsx)(r.rj,{templateColumns:"1fr",gap:3,height:"100%",children:(0,y.jsx)(v.r,{baseTableDatum:G,targetTableDatum:U,onSelect:function(){}})})]})]})]})]}):(0,y.jsxs)(r.rj,{templateColumns:"1fr 1fr",templateRows:"5em 5em 1fr 1fr",width:"100%",maxHeight:x.t4,overflowY:"auto",children:[(0,y.jsxs)(r.P4,{colSpan:2,rowSpan:2,p:9,children:[(0,y.jsx)(S.Q,{title:n,subtitle:"Column",mb:5,borderBottom:x.dx,icon:he,iconColor:pe}),(0,y.jsx)(P,{})]}),(0,y.jsx)(r.P4,{colSpan:2,p:9,bg:"gray.50",children:(0,y.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,minWidth:0,children:[(0,y.jsx)(d.t,{columnDatum:V}),(0,y.jsx)(d.t,{columnDatum:q})]})}),(0,y.jsx)(r.P4,{colSpan:2,gridRow:"span 1",minWidth:0,p:9,bg:"gray.50",children:(0,y.jsx)(m.r,{baseColumnDatum:V,targetColumnDatum:q,hasSplitView:!0,hasAnimation:!0,tabIndex:O,onSelectTab:function(e){return K(e)}})}),((0,f.jl)(ie)||(0,f.jl)(oe))&&(0,y.jsx)(r.P4,{colSpan:2,gridRow:"span 1",p:9,bg:"gray.50",children:(0,y.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,children:[(0,y.jsx)(j.E,{columnDatum:V}),(0,y.jsx)(j.E,{columnDatum:q})]})}),((0,f.hG)(ie)||(0,f.hG)(oe))&&(0,y.jsx)(r.P4,{colSpan:2,gridRow:"span 1",p:9,bg:"gray.50",children:(0,y.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,children:[(0,y.jsx)(p.M,{columnDatum:V}),(0,y.jsx)(p.M,{columnDatum:q})]})})]})]})})}function P(){return(0,y.jsx)(r.rj,{templateColumns:"1fr 1fr",mb:2,gap:10,children:["Base","Target"].map((function(e,t){return(0,y.jsx)(r.kC,{alignItems:"center",w:"100%",children:(0,y.jsx)(r.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:e})},t)}))})}}}]);
//# sourceMappingURL=914.c8bcb677.chunk.js.map