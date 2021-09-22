(this.webpackJsonpswift_message_parser_frontend=this.webpackJsonpswift_message_parser_frontend||[]).push([[10],{864:function(e,t,s){"use strict";s.r(t),s.d(t,"MessagesPage",(function(){return H}));var a,c=s(612),n=s(88),r=s(89),i=s(43),o=s(1),l=s(600),j=s(301),u=s(42),d=s(2),b=["Reference","SenderBIC","ReceiverBIC","Type","CreatedAt"],g=Object(o.memo)((function(e){var t=e.messageList;return Object(d.jsxs)(l.a,{className:"w-75 mt-5",striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{style:{backgroundColor:"#000000",color:"#E5E5E5",fontFamily:"Arial",textAlign:"center"},children:b.map((function(e){return Object(d.jsx)("th",{children:e})}))})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:{textAlign:"center"},children:Object(d.jsx)(j.b,{style:{color:"#F49D37",fontWeight:"bold"},to:"/messages/".concat(e.id),children:e.id})}),Object(d.jsx)(p,{children:e.senderBIC}),Object(d.jsx)(p,{children:e.receiverBIC}),Object(d.jsx)(p,{children:e.messageType}),Object(d.jsx)(p,{children:new Date(e.createdAt).toLocaleDateString()})]})}))})]})})),p=u.b.td(a||(a=Object(i.a)(["\n  text-align: center;\n  color: #707070;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n"]))),m=s(21),O=s(148),h=s(67),x=s(47),f=s(23),y=s.n(f),v=s(60),M=s(20),w=s(61),k=y.a.mark(z),F=y.a.mark(C),N=y.a.mark(I);function z(e){var t;return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(M.b)(w.a.get,v.c.messages+"?page=".concat(e.payload.page,"&size=").concat(e.payload.size));case 3:return t=s.sent,s.next=6,Object(M.c)(T.FetchMessagesSuccess(t));case 6:s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.log(s.t0);case 11:case"end":return s.stop()}}),k,null,[[0,8]])}function C(e){var t;return y.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(M.b)(w.a.get,v.c.messages+"/".concat(e.payload.messageType));case 3:return t=s.sent,s.next=6,Object(M.c)(T.FetchMessagesSuccessPerType(t));case 6:s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.log(s.t0);case 11:case"end":return s.stop()}}),F,null,[[0,8]])}function I(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([Object(M.d)(T.requestFetchMessages.type,z),Object(M.d)(T.requestFetchMessagesPerType.type,C)]);case 2:case"end":return e.stop()}}),N)}var P={messageGeneralInfoModels:[],page:"",size:"",totalPages:"",messageType:""},S=Object(h.a)({name:"messages",initialState:P,reducers:{requestFetchMessages:function(e,t){e.page=t.payload.page,e.size=t.payload.size},FetchMessagesSuccess:function(e,t){return e.messageGeneralInfoModels=t.payload.messageGeneralInfoModels,e.size=t.payload.pageSize,e.page=t.payload.pageNumber,e.totalPages=t.payload.totalPages,e},requestFetchMessagesPerType:function(e,t){e.messageType=t.payload.messageType},FetchMessagesSuccessPerType:function(e,t){return e.messageGeneralInfoModels=t.payload.messageGeneralInfoModels,e}}}),T=S.actions,q=Object(O.a)([function(e){return e.messages||P}],(function(e){return e})),A=s(869),G=Object(o.memo)((function(e){for(var t=e.size,s=e.paginate,a=e.paginatePrev,c=e.paginateNext,n=e.showPrev,r=e.showNext,i=[],o=0;o<=t-1;o++)i.push(o);return Object(d.jsxs)(A.a,{className:"justify-content-center",color:"#F49D37",children:[Object(d.jsx)(A.a.Prev,{onClick:function(){return a()},disabled:!n}),i.map((function(e){return Object(d.jsx)(A.a.Item,{onClick:function(){return s(e)},children:e+1})})),Object(d.jsx)(A.a.Next,{onClick:function(){return c()},disabled:!r})]})})),_=s(322),B=s(55),D=s(602),E=s(598),L=s(861),J=s(704),R=s(703);function H(){var e=Object(o.useState)(0),t=Object(c.a)(e,2),s=t[0],a=t[1],i=Object(o.useState)(!1),l=Object(c.a)(i,2),j=l[0],u=l[1],b=Object(o.useState)(!0),p=Object(c.a)(b,2),O=p[0],h=p[1],f=Object(o.useState)(""),y=Object(c.a)(f,2),v=y[0],M=y[1],w=Object(o.useState)("2"),k=Object(c.a)(w,2),F=k[0],N=k[1],z=(Object(x.a)({key:S.name,reducer:S.reducer}),Object(x.b)({key:S.name,saga:I}),{actions:S.actions}).actions,C=Object(m.c)();Object(o.useEffect)((function(){C(z.requestFetchMessages({page:s+"",size:F}))}),[z,s,C,F]);var P=Object(m.d)(q),T=parseInt(P.totalPages);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"mb-5",children:Object(d.jsx)(r.a,{})}),Object(d.jsxs)("div",{className:"row mt-5  d-flex justify-content-center",children:[Object(d.jsxs)(_.a,{children:[Object(d.jsx)(B.a,{xs:4}),Object(d.jsxs)(B.a,{xs:4,className:"d-flex",children:[Object(d.jsx)(D.a.Control,{className:"ml-2",placeholder:"Search",name:"messageType",value:v,onChange:function(e){M(e.target.value)}}),Object(d.jsx)(E.a,{className:"btn-danger",size:"sm",onClick:function(){M(""),C(z.requestFetchMessages({page:s+"",size:F}))},children:Object(d.jsx)(R.a,{})}),Object(d.jsx)(E.a,{className:"btn-secondary",size:"sm",onClick:function(){C(z.requestFetchMessagesPerType({messageType:v}))},children:Object(d.jsx)(J.a,{})})]}),Object(d.jsxs)(B.a,{xs:4,className:"d-flex",children:[Object(d.jsx)("div",{className:"ml-5 mt-1 mr-3",children:" Items per page: "}),Object(d.jsxs)(L.a,{children:[Object(d.jsx)(L.a.Toggle,{size:"sm",variant:"secondary",id:"dropdown-basic"}),Object(d.jsxs)(L.a.Menu,{className:"w-25",children:[Object(d.jsx)(L.a.Item,{onClick:function(){return N("3")},children:"3"}),Object(d.jsx)(L.a.Item,{onClick:function(){return N("5")},children:"5"}),Object(d.jsx)(L.a.Item,{onClick:function(){return N("8")},children:"8"})]})]})]})]}),Object(d.jsx)(g,{messageList:P.messageGeneralInfoModels})]}),Object(d.jsx)("div",{className:"mt-5 justify-content-center",children:Object(d.jsx)(G,{size:T,paginate:function(e){0===e?(u(!1),h(!0),a(e)):(u(!0),a(e),C(z.requestFetchMessages({page:e,size:F}))),e===T-1&&(h(!1),a(e)),e<=T-1&&e>=0&&(h(!0),a(e))},paginatePrev:function(){h(!0),0===s?u(!1):(u(!0),a(s-1),C(z.requestFetchMessages({page:s+"",size:F})))},paginateNext:function(){u(!0),s===T-1?h(!1):(h(!0),a(s+1),C(z.requestFetchMessages({page:s+"",size:F})))},showPrev:j,showNext:O})}),Object(d.jsx)(n.a,{})]})}}}]);