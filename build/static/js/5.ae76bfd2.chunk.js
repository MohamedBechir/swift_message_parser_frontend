(this.webpackJsonpswift_message_parser_frontend=this.webpackJsonpswift_message_parser_frontend||[]).push([[5],{710:function(e,t,c){},862:function(e,t,c){"use strict";c.r(t),c.d(t,"StatisticsPage",(function(){return V}));var s=c(88),a=c(89),r=c(21),n=(c(710),c(1)),i=c(866),u=c(699),o=c(849),l=c(841),d=c(2),j=Object(n.memo)((function(e){var t=e.data,c=e.COLORS,s=e.diagramName;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"col-md-6 half-quarter",children:Object(d.jsxs)(i.a,{className:"mt-5",width:400,height:290,children:[Object(d.jsx)(u.a,{className:"ml-5",layout:"vertical",verticalAlign:"top",align:"left"}),Object(d.jsx)(o.a,{legendType:"circle",data:t,cx:"50%",cy:"50%",labelLine:!0,outerRadius:110,dataKey:"value",children:t.map((function(e,t){return Object(d.jsx)(l.a,{fill:c[t%c.length]},"cell-".concat(t))}))})]})}),Object(d.jsx)("div",{className:" ml-3 mb-2 half-quarter",children:s})]})})),m=c(67),b=c(47),O=c(23),v=c.n(O),h=c(60),g=c(20),f=c(61),p=v.a.mark(x);function x(e){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g.b)(f.a.get,"".concat(h.d.messages_per_type));case 3:return t=e.sent,e.next=6,Object(g.c)(_.FetchMessagesPerTypeSuccess(t));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),p,null,[[0,8]])}var y=[{name:"",value:0}],F=Object(m.a)({name:"messages_per_type",initialState:y,reducers:{requestFetchMessagesPerType:function(e){},FetchMessagesPerTypeSuccess:function(e,t){return t.payload}}}),_=F.actions,S=c(148),k=Object(S.a)([function(e){return e.messages_per_type||y}],(function(e){return e})),M=c(867),w=v.a.mark(N);function N(e){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g.b)(f.a.get,"".concat(h.d.last_five_messages));case 3:return t=e.sent,e.next=6,Object(g.c)(E.FetchLastFiveMessagesSuccess(t));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),w,null,[[0,8]])}var R=[],q=Object(m.a)({name:"last_five_messages",initialState:R,reducers:{requestFetchLastFiveMessages:function(e){},FetchLastFiveMessagesSuccess:function(e,t){return t.payload}}}),E=q.actions,L=Object(S.a)([function(e){return e.last_five_messages||R}],(function(e){return e})),C=Object(n.memo)((function(){var e=(Object(b.a)({key:q.name,reducer:q.reducer}),Object(b.b)({key:q.name,saga:N}),{actions:q.actions}).actions;Object(r.c)()(e.requestFetchLastFiveMessages());var t=Object(r.d)(L);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"ml-3 mt-2",children:"Recently Received Messages: "}),t.map((function(e){return Object(d.jsx)(M.a,{bg:"Light",className:"mb-2 w-25 mt-3 ml-3 mr-3",style:{float:"left"},children:Object(d.jsxs)(M.a.Header,{children:["MT",e]})})}))]})})),T=v.a.mark(D),P=v.a.mark(B);function D(e){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(g.b)(f.a.get,"".concat(h.d.sent_received));case 3:return t=e.sent,e.next=6,Object(g.c)(H.FetchMessagesSentReceivedSuccess(t));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),T,null,[[0,8]])}function B(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(H.requestFetchSentReceived.type,D);case 2:case"end":return e.stop()}}),P)}var J=[{name:"",value:0}],A=Object(m.a)({name:"sent_received",initialState:J,reducers:{requestFetchSentReceived:function(e){},FetchMessagesSentReceivedSuccess:function(e,t){return t.payload}}}),H=A.actions,K=Object(S.a)([function(e){return e.sent_received||J}],(function(e){return e}));function V(){var e=(Object(b.a)({key:F.name,reducer:F.reducer}),Object(b.b)({key:F.name,saga:x}),{actions:F.actions}).actions;Object(r.c)()(e.requestFetchMessagesPerType());var t=Object(r.d)(k),c=(Object(b.a)({key:A.name,reducer:A.reducer}),Object(b.b)({key:A.name,saga:B}),{sentreceivedactions:A.actions}).sentreceivedactions;Object(r.c)()(c.requestFetchSentReceived());var n=Object(r.d)(K);return Object(d.jsxs)("div",{children:[Object(d.jsx)(a.a,{}),Object(d.jsxs)("div",{className:"contents ml-5 mr-5",children:[Object(d.jsxs)("div",{className:"col-md-5 mr-4  quarter",style:{backgroundColor:"#E5E5E5"},children:[Object(d.jsx)("h3",{className:"row ml-3 mt-4",children:"Most Pospular Messages:"}),Object(d.jsx)(j,{data:t,COLORS:["#0088FE","#00C49F","#F49D37","#FF8042","#fb8585"],diagramName:"Diagram: Based On the Most Received Types of Messages"})]}),Object(d.jsxs)("div",{className:"col-md-5 quarter",style:{backgroundColor:"#E5E5E5"},children:[Object(d.jsx)("h3",{className:"row ml-3 mt-4",children:"Received Versus Sent Messages:"}),Object(d.jsx)(j,{data:n,COLORS:["#00C49F","#F49D37"],diagramName:"Diagram: Based On the last received Messages"})]}),Object(d.jsx)("div",{className:"col-md-5 mt-5 quarter",style:{backgroundColor:"#E5E5E5"},children:Object(d.jsx)(C,{})}),Object(d.jsx)(s.a,{})]})]})}}}]);