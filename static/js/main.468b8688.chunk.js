(this.webpackJsonptasktracker=this.webpackJsonptasktracker||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),c=(a(12),a(6)),i=a(1),u=(a(13),function(e){return new Date(e).toISOString().substr(11,8)}),s=(a(14),function(e){var t=e.task;return r.a.createElement("div",{className:"singleTask"},r.a.createElement("div",null,t.id),r.a.createElement("div",null,t.name),r.a.createElement("div",null,u(t.duration)),r.a.createElement("div",null,new Date(t.endAt).toLocaleTimeString("en-US")))}),m=function(e){var t=e.archive;e.timerGlobal;return r.a.createElement("div",{className:"taskArchive"},r.a.createElement("div",{className:"singleTask"},r.a.createElement("div",null,"#"),r.a.createElement("div",null,"Name"),r.a.createElement("div",null,"Duration"),r.a.createElement("div",null,"Ended at")),t.slice(0).reverse().map((function(e,t){return r.a.createElement(s,{task:e,key:t})})))};a(15);var v=function(e){var t=e.goal,a=e.handleGoals,n=e.tasks,l=t/n;return l=100/t*n,r.a.createElement("div",{className:"Goals"},r.a.createElement("h6",null,l.toFixed(2),"% of 100% | ",n," of"," ",r.a.createElement("input",{type:"number",value:t,onChange:a,onBlur:a,placeholder:"No. of Goals"})))};a(16);var d=function(e){var t,a=e.goal,n=e.tasks;return t=100/a*n,r.a.createElement("div",null,r.a.createElement("div",{className:"goalsBar"},r.a.createElement("div",{className:"bar",style:{width:"".concat(t,"%")}})))};var g=function(){var e=1,t=0,a=[],l=250;(localStorage.hasOwnProperty("tasks")||localStorage.hasOwnProperty("timerGlobal")||localStorage.hasOwnProperty("archive")||localStorage.hasOwnProperty("goal"))&&(e=Number(localStorage.getItem("tasks")),t=Number(localStorage.getItem("timerGlobal")),a=JSON.parse(localStorage.getItem("archive"))||[],l=Number(localStorage.getItem("goal")));var o=Object(n.useState)(a),s=Object(i.a)(o,2),g=s[0],b=s[1],f=Object(n.useState)(""),E=Object(i.a)(f,2),h=E[0],k=E[1],S=Object(n.useState)(Date.now()),O=Object(i.a)(S,2),p=O[0],w=O[1],j=Object(n.useState)(!0),N=Object(i.a)(j,2),I=N[0],y=N[1],C=Object(n.useState)(e),D=Object(i.a)(C,2),G=D[0],T=D[1],B=Object(n.useState)(0),A=Object(i.a)(B,2),J=A[0],P=A[1],x=Object(n.useState)(t),F=Object(i.a)(x,2),R=F[0],U=F[1],W=Object(n.useState)(l),K=Object(i.a)(W,2),L=K[0],M=K[1],$=Object(n.useState)("tasks"),q=Object(i.a)($,2),z=q[0];q[1],Object(n.useEffect)((function(){var e=setInterval((function(){I||P(Date.now()-p)}),1e3);return document.title="".concat(u(J)," | ").concat(G),U((function(){return g.reduce((function(e,t){return e+t.duration}),0)})),function(){clearInterval(e)}}),[p,G,J,I,g,L]);var H=function(e){return!!e},Q=function(e){w(Date.now()),e&&P(0),y(e)};return r.a.createElement("div",{className:"Main"},r.a.createElement("div",{className:"timer"},r.a.createElement("input",{type:"text",value:h,onChange:function(e){k(String(e.target.value))},placeholder:"Name of the Task"}),r.a.createElement("input",{type:"number",value:G,onChange:function(e){T(Number(e.target.value))}}),r.a.createElement("h3",null,"Time in current task"),r.a.createElement("h2",null,u(J)),r.a.createElement("button",{className:"finishTask",onClick:function(){return function(){var e={id:G,name:h,duration:J,endAt:Date.now()};b((function(t){return[].concat(Object(c.a)(t),[e])})),P(0),w(Date.now()),T(G+1),console.log(g),localStorage.setItem("archive",JSON.stringify(g)),localStorage.setItem("timerGlobal",R),localStorage.setItem("tasks",G+1)}()},disabled:H(I)},"Finish current task"),r.a.createElement("div",{className:"toolButtons"},r.a.createElement("button",{onClick:function(){return function(){P(0);var e=g;console.log(e.pop()),b(e),localStorage.setItem("tasks",G-1)}()},disabled:H(G<=1)},"Undo"),I?r.a.createElement("button",{onClick:function(){return Q(!1)}},"Start"):r.a.createElement("button",{onClick:function(){return Q(!0)}},"Stop"),r.a.createElement("button",{onClick:function(){return localStorage.clear(),w(Date.now()),void P(0)}},"Reset Current"),r.a.createElement("button",{onClick:function(){return localStorage.clear(),b([]),localStorage.setItem("tasks",1),T(1),P(0),y(!0),void U(0)}},"Reset"))),r.a.createElement(v,{goalKind:z,goal:L,tasks:G,handleGoals:function(e){M(Number(e.target.value)),localStorage.setItem("goal",L)}}),r.a.createElement(d,{goal:L,tasks:G}),r.a.createElement("h6",null,"Total Time: ",u(R)," | Average"," ",R&&u(R/g.length)),r.a.createElement(m,{archive:g,timerGlobal:R}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.468b8688.chunk.js.map