(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{113:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n(8),o=n.n(c),s=n(9),i=n(22),u=n(63),l=n(5),j="[ui] Open modal",d="[ui] Close modal",b="[event] Set active",m="[event] Clean event",p="[event] Add new",O="[event] Clear active event",f="[event] Event updated",v="[event] Event deleted",h="[event] Events loaded",x="[auth] Finish checking login state",g="[auth] Login",y="[auth] Start register",w="[auth] Logout",N={checking:!0},k=n(55),E=n(17),S=n.n(E),C={events:[],activeEvent:null},D={modalOpen:!1},P=Object(i.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case d:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case p:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(k.a)(e.events),[t.payload])});case O:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case v:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(l.a)(Object(l.a)({},e),{},{events:Object(k.a)(t.payload)});case m:return Object(l.a)({},C);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)({},e),{},{checking:!1},t.payload);case y:case x:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case w:return{checking:!1};default:return e}}}),T="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,A=Object(i.e)(P,T(Object(i.a)(u.a))),I=n(35),_=n(10),L=n(12),R=n.n(L),G=n(21),J=n(18),V=n.n(J),z="https://mern-calendar0.herokuapp.com/api",F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(z,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(z,"/").concat(e),r=localStorage.getItem("token");return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{start:S()(e.start).toDate(),end:S()(e.end).toDate()})}))},U=function(e){return{type:p,payload:e}},X=function(){return{type:O}},Y=function(e){return{type:f,payload:e}},q=function(){return{type:v}},B=function(e){return{type:h,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:m}),e(Z())}},K=function(e){return{type:g,payload:e}},Q=function(){return{type:x}},Z=function(){return{type:w}},$=n(14),ee=n(25),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object($.a)(t,2),a=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},a),{},Object(ee.a)({},t.name,t.value)))};return[a,s,o]},ne=(n(76),function(){var e=Object(s.b)(),t=te({lEmail:"david@gmail.com",lPassword:"123123"}),n=Object($.a)(t,2),r=n[0],c=n[1],o=te({rName:"Rose",rEmail:"rose@gmail.com",rPassword1:"123123",rPassword2:"123123"}),i=Object($.a)(o,2),u=i[0],l=i[1],j=r.lEmail,d=r.lPassword,b=u.rName,m=u.rEmail,p=u.rPassword1,O=u.rPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=j,a=d,function(){var e=Object(G.a)(R.a.mark((function e(t){var r,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:c.uid,name:c.name}))):V.a.fire("Error","Wrong email or password","error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"lEmail",value:j,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"lPassword",value:d,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Register"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),p!==O)return V.a.fire("Error","Not matching passwords","error");var n,a,r;e((n=m,a=p,r=b,function(){var e=Object(G.a)(R.a.mark((function e(t){var c,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:if(!(o=e.sent).ok){e.next=12;break}localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:o.uid,name:o.name})),e.next=13;break;case 12:return e.abrupt("return",V.a.fire("Error","Failed to create user","error"));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"rName",value:b,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"rEmail",value:m,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Pasword",name:"rPassword1",value:p,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm password",name:"rPassword2",value:O,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})}),ae=n(54),re=(n(77),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:t}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(W())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Exit"})]})]})}),ce=function(e){var t=e.event,n=t.title,r=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[n," "]}),Object(a.jsxs)("strong",{children:["- ",r.name]})]})},oe=n(49),se=n.n(oe),ie=n(50),ue=n.n(ie),le=function(){return{type:j}},je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var de=S()().minutes(0).seconds(0).add(1,"hours"),be=de.clone().add(1,"hours"),me={title:"",notes:"",start:de.toDate(),end:be.toDate()},pe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).modalOpen,n=Object(s.c)((function(e){return e.calendar})).activeEvent,c=Object(r.useState)(de.toDate()),o=Object($.a)(c,2),i=o[0],u=o[1],j=Object(r.useState)(be.toDate()),b=Object($.a)(j,2),m=b[0],p=b[1],O=Object(r.useState)(!0),f=Object($.a)(O,2),v=f[0],h=f[1],x=Object(r.useState)(me),g=Object($.a)(x,2),y=g[0],w=g[1],N=y.notes,k=y.title,E=y.start,C=y.end;Object(r.useEffect)((function(){w(n||me)}),[n,w]);var D=function(e){var t=e.target;w(Object(l.a)(Object(l.a)({},y),{},Object(ee.a)({},t.name,t.value)))},P=function(){e({type:d}),e(X()),w(me)};return Object(a.jsxs)(se.a,{isOpen:t,onRequestClose:P,style:je,className:"modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,children:[Object(a.jsxs)("h1",{children:[" ",n?"Edit event":"New event"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=S()(E),c=S()(C);return r.isSameOrAfter(c)?V.a.fire("Error","Dates have to be different","error"):k.trim().length<1?h(!1):(e(n?(a=y,function(){var e=Object(G.a)(R.a.mark((function e(t){var n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,console.log(r.msg),r.ok?t(Y(a)):V.a.dire("Error","You are not authorized to do this action","error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(G.a)(R.a.mark((function t(n,a){var r,c,o,s,i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,H("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.event.id,e.user={_id:c,name:o},n(U(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(y)),h(!0),void P())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Start date"}),Object(a.jsx)(ue.a,{onChange:function(e){u(e),w(Object(l.a)(Object(l.a)({},y),{},{start:e}))},value:i,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"End date"}),Object(a.jsx)(ue.a,{onChange:function(e){p(e),w(Object(l.a)(Object(l.a)({},y),{},{end:e}))},value:m,minDate:i,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Title and Notes"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!v&&"is-invalid"),placeholder:"Event name",name:"title",autoComplete:"off",value:k,onChange:D}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Some description"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:N,onChange:D}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Aditional information"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Save"})]})]})]})},Oe=function(){var e=Object(s.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(le())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})},fe=function(){var e=Object(s.b)();return Object(a.jsx)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(G.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,H("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent.ok?t(q()):V.a.dire("Error","You are not authorized to do this action","error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(a.jsx)("i",{className:"fas fa-trash"})})},ve=Object(ae.b)(S.a),he=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,o=Object(s.c)((function(e){return e.auth})).uid,i=Object(r.useState)(localStorage.getItem("lastView")||"month"),u=Object($.a)(i,2),l=u[0],j=u[1];Object(r.useEffect)((function(){e(function(){var e=Object(G.a)(R.a.mark((function e(t){var n,a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=M(a.event),t(B(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(re,{}),Object(a.jsx)(ae.a,{localizer:ve,events:n,startAccessor:"start",endAccessor:"end",style:{height:500},eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(le())},onSelectEvent:function(t){e({type:b,payload:t})},onView:function(e){j(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(X())},selectable:!0,components:{event:ce},view:l}),Object(a.jsx)(Oe,{}),c&&Object(a.jsx)(fe,{}),Object(a.jsx)(pe,{})]})},xe=n(38),ge=function(e){var t=e.isAuthenticated,n=e.component,r=Object(xe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(_.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(l.a)({},e)):Object(a.jsx)(_.a,{to:"/login"})}}))},ye=function(e){var t=e.isAuthenticated,n=e.component,r=Object(xe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(_.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(a.jsx)(_.a,{to:"/"}):Object(a.jsx)(n,Object(l.a)({},e))}}))},we=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).uid;return Object(r.useEffect)((function(){e(function(){var e=Object(G.a)(R.a.mark((function e(t){var n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:a.uid,name:a.name}))):t(Q);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.jsx)(I.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(_.d,{children:[Object(a.jsx)(ye,{exact:!0,path:"/login",component:ne,isAuthenticated:!!t}),Object(a.jsx)(ge,{exact:!0,path:"/",component:he,isAuthenticated:!!t}),Object(a.jsx)(_.a,{to:"/"})]})})})},Ne=function(){return Object(a.jsx)(s.a,{store:A,children:Object(a.jsx)(we,{})})};n(113);o.a.render(Object(a.jsx)(Ne,{}),document.getElementById("root"))},76:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.fcad84b0.chunk.js.map