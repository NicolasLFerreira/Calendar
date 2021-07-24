(this.webpackJsonpagenda=this.webpackJsonpagenda||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(10),i=n.n(s),o=n(2),c=n(3),l=n(5),d=n(4),u={jan:[],feb:[],mar:[],apr:[],may:[],jun:[],jul:[],aug:[],sep:[],oct:[],nov:[],dec:[]},b=function(){function e(){Object(o.a)(this,e),this.getEvent=function(e){return JSON.parse(localStorage.getItem(e))},null==localStorage.getItem("events")&&localStorage.setItem("events",JSON.stringify(u))}return Object(c.a)(e,[{key:"addEvent",value:function(e,t){var n=this.getEvent(e);null==n&&(n={events:[]}),n.events.push(t),localStorage.setItem(e,JSON.stringify(n)),this.dayLog(e,!0)}},{key:"deleteEvent",value:function(e,t){var n=this.getEvent(e);null!=n&&(n.events.splice(t,1),localStorage.setItem(e,JSON.stringify(n))),0==this.getEvent(e).events.length&&(localStorage.removeItem(e),this.dayLog(e,!1))}},{key:"dayLog",value:function(e,t){var n=e.slice(0,3),r=e.slice(3,5),a=JSON.parse(localStorage.getItem("events"));t?a[n].includes(r)||a[n].push(r):a[n].splice(a[n].indexOf(r),1),a[n].sort(),localStorage.setItem("events",JSON.stringify(a))}},{key:"getProperties",value:function(e,t){return JSON.parse(sessionStorage.getItem("properties"))[e][t]}},{key:"getPropertyIndex",value:function(e,t){return JSON.parse(sessionStorage.getItem("properties"))[e].indexOf(t)}},{key:"numberWithPrefix",value:function(e){if(!isNaN(e))switch(e.charAt(e.length-1)){case"1":return e+"st";case"2":return e+"nd";case"3":return e+"rd";default:return e+"th"}}}]),e}(),h=n(7),j=n(6),v=n.n(j),m=n(0),f=new b;function p(e){return Object(m.jsxs)("li",{className:"text-break list-group-item "+(e.insideModal?null:"list-item-bg"),children:[e.text,e.insideModal?Object(m.jsx)("button",{type:"button",className:"btn btn-outline-danger float-end",onClick:function(){return t=e.refresh,n=e,f.deleteEvent(n.id,n.index),void t();var t,n},children:"X"}):null]})}var g=function(e){var t=null===f.getEvent(e.id)?[]:(new b).getEvent(e.id).events,n=[];if(0===t.length&&e.insideModal)n=Object(m.jsx)("div",{children:"There are no events for today"});else for(var r=0;r<t.length;r++)n.push(Object(m.jsx)(p,{insideModal:e.insideModal,text:t[r],index:r,id:e.id,refresh:e.refresh}));return Object(m.jsx)("ul",{className:e.cap+" overflow-auto list-group",children:n})},O=new b,x=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"dateProcessor",value:function(e){var t=document.getElementById(e).value;if(null==t)return{raw:"0000-01-01",day:"01",month:"01",id:"jan01"};var n=t.length,r=""+t[n-2]+t[n-1],a=""+t[n-5]+t[n-4];return{raw:t,day:r,month:a,id:O.getProperties("id",a-1)+r}}},{key:"isEmpty",value:function(e){return""==document.getElementById(e).value&&(alert("Please don't leave nothing blank."),!0)}}]),e}(),y={content:{top:"25%",left:"25%",right:"25%",bottom:"auto",marginRight:"0%",transform:"translate(-0%, -0%)"}},N=new b,w=new x;var E=function(e){var t=a.a.useState(!1),n=Object(h.a)(t,2),r=n[0],s=n[1];function i(){s(!1)}return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",className:"btn btn-success "+e.buttonClass,onClick:function(){s(!0)},children:"New Event"}),Object(m.jsxs)(v.a,{isOpen:r,onAfterOpen:function(){},onRequestClose:i,style:y,contentLabel:"Event Creation Modal",children:[Object(m.jsx)("button",{type:"button",className:"btn-close float-end","aria-label":"Close",onClick:i}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"display-4 mb-1",children:"Create a new event"}),Object(m.jsx)("div",{children:"Fill everything before creating it"}),Object(m.jsxs)("div",{className:"form-floating mt-3 mb-3",children:[Object(m.jsx)("input",{id:"input-content",type:"text",className:"form-control",placeholder:"Do groceries!"}),Object(m.jsx)("label",{htmlFor:"floatingInput",children:"Event"})]}),Object(m.jsx)("input",{id:"input-date",type:"date",className:"form-control mb-3 p-3",placeholder:"pick a date",hidden:void 0!==e.object}),Object(m.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){if(void 0===e.object){if(w.isEmpty("input-date")||w.isEmpty("input-content"))return;N.addEvent(w.dateProcessor("input-date").id,document.getElementById("input-content").value)}else{if(w.isEmpty("input-content"))return;N.addEvent(e.object.id,document.getElementById("input-content").value)}e.refresh(),i()},children:"Save"})]})]})]})},k=new b,S={content:{top:"25%",left:"25%",right:"25%",bottom:"auto",marginRight:"0%",transform:"translate(-0%, -0%)"}};var C=function(e){var t=a.a.useState(!1),n=Object(h.a)(t,2),r=n[0],s=n[1];function i(){s(!0)}function o(){s(!1)}var c=k.numberWithPrefix(""+e.object.day)+" of "+e.object.month;return Object(m.jsxs)("div",{children:[null==e.fromUpcoming?Object(m.jsx)("div",{className:"day-button",onClick:i,children:e.object.day}):Object(m.jsxs)("button",{type:"button",className:"btn btn-primary w-100 mb-1",onClick:i,children:[c,": ",k.getEvent(e.object.id).events.length," event",1==k.getEvent(e.object.id).events.length?"":"s"]}),Object(m.jsxs)(v.a,{isOpen:r,onAfterOpen:function(){},onRequestClose:o,style:S,contentLabel:"Event Listing Modal",children:[Object(m.jsx)("button",{type:"button",className:"btn-close float-end","aria-label":"Close",onClick:o}),Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("div",{className:"display-3 mb-4",children:c}),Object(m.jsx)("div",{className:"h4",children:"Events for this day"}),Object(m.jsx)(g,{id:e.object.id,insideModal:!0,cap:"cap-lg",refresh:e.refresh}),Object(m.jsx)("div",{className:"btn-group-vertical",role:"group","aria-label":"Vertical button group",children:Object(m.jsx)(E,{object:e.object,refresh:e.refresh})})]})]})]})};new b;var I=function(e){var t={id:e.id,day:e.day,month:e.month};return Object(m.jsxs)("div",{className:"col calendar-box day-bg border-2 border-dark border-bottom border-end  "+e.extraStyle,children:[Object(m.jsx)("div",{className:"row display-6",children:null!=e.month?Object(m.jsx)(C,{object:t,refresh:e.refresh}):null}),Object(m.jsx)(g,{id:e.id,cap:"cap-sm",insideModal:!1})]})},M=new b,P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={name:M.getProperties("name",r.props.index),size:30+M.getProperties("size",r.props.index),id:M.getProperties("id",r.props.index)},r}return Object(c.a)(n,[{key:"render",value:function(){var e,t,n,r=[],a=[],s=[];s.push(Object(m.jsx)(I,{extraStyle:" rounded-end",day:"",content:"",id:-1}));for(var i=1;i<35-this.state.size;i++)6==i&&(n=" border-start rounded-start"),s.push(Object(m.jsx)(I,{extraStyle:n,day:"",content:"",id:-1}));n=void 0;for(var o=this.state.size;o>0;o--)t=localStorage.getItem(o),e=o<10?this.state.id+"0"+String(o):this.state.id+String(o),(o-1)%7==0&&(n=" border-start"),29==o&&(n+=" rounded-start"),s.push(Object(m.jsx)(I,{month:this.state.name,day:o,content:t,id:e,extraStyle:n,refresh:this.props.refresh})),e=void 0,n=void 0;for(var c=0;c<=4;c++){for(var l=1;l<=7;l++)a.push(s.pop());r.push(Object(m.jsx)("div",{className:"row",children:a})),a=[]}return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"text-center calendar-box month-bg border border-dark border-2 rounded-top display-2",children:this.state.name})}),r]})}}]),n}(r.Component);var D=function(e){var t=e.monthNum-1;return Object(m.jsx)("div",{children:Object(m.jsx)(P,{index:t,refresh:e.refresh},t)})},R=new b,J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).changeMonth=function(e){r.setState((function(){return{showingMonth:e}}))},r.state={showingMonth:(new Date).getMonth()+1},r}return Object(c.a)(n,[{key:"monthPagination",value:function(){for(var e=this,t=[],n=function(n){t.push(Object(m.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.changeMonth(n)},children:R.getProperties("name",n-1)}))},r=1;r<=12;r++)n(r);return Object(m.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic button group",children:t})}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("div",{className:"d-flex justify-content-center p-2",children:this.monthPagination()}),Object(m.jsx)(D,{monthNum:this.state.showingMonth,refresh:this.props.refresh},2021)]})})}}]),n}(r.Component),L=new b,A=new Date,T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={day:A.getDate(),month:A.getMonth(),id:L.getProperties("id",A.getMonth())+A.getDate()},r}return Object(c.a)(n,[{key:"upcomingEventsDays",value:function(){for(var e=[],t={},n=JSON.parse(localStorage.getItem("events")),r=L.getProperties("id",1),a=0;a<12;a++)if(0!=n[r=L.getProperties("id",a)].length)for(var s=0;s<=n[r].length-1;s++)t={id:L.getProperties("id",a)+n[r][s],day:parseInt(n[r][s]),month:L.getProperties("name",a)},e.push(Object(m.jsx)(C,{object:t,refresh:this.props.refresh,fromUpcoming:0}));return e}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"m-1",children:this.upcomingEventsDays()})}}]),n}(r.Component),F={content:{top:"25%",left:"25%",right:"25%",bottom:"auto",marginRight:"0%",transform:"translate(-0%, -0%)"}};var B=function(e){var t=a.a.useState(!1),n=Object(h.a)(t,2),r=n[0],s=n[1];function i(){s(!1)}function o(e,t,n){var r=0==n?" active":"",a=("list-"+e.toLowerCase()).replace(" ","-");return[Object(m.jsx)("a",{class:"list-group-item list-group-item-action"+r,id:a+"-list","data-bs-toggle":"list",href:"#"+a,role:"tab",children:e}),Object(m.jsx)("div",{class:"tab-pane fade show"+r,id:a,role:"tabpanel",children:t})]}return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{type:"button",className:"btn btn-primary w-100 mt-1",onClick:function(){s(!0)},children:"Help"}),Object(m.jsxs)(v.a,{isOpen:r,onAfterOpen:function(){},onRequestClose:i,style:F,contentLabel:"Help Modal",children:[Object(m.jsx)("button",{type:"button",className:"btn-close float-end","aria-label":"Close",onClick:i}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"display-4",children:["How to use ","<Cal-&-r/>"]}),Object(m.jsx)("p",{className:"fs-4",children:"A quick tutorial on its functionalities"}),Object(m.jsx)("div",{className:"row",children:function(e){for(var t,n=[],r=[],a=0;a<e.length;a++)t=o(e[a].name,e[a].text,a),n.push(t[0]),r.push(t[1]);return[Object(m.jsx)("div",{className:"col-5 col-lg-4",children:Object(m.jsxs)("div",{className:"list-group",id:"list-tab",role:"tablist",children:[n,Object(m.jsx)("a",{className:"list-group-item list-group-item-action",id:"list-danger-list","data-bs-toggle":"list",href:"#list-danger",role:"tab",children:"Danger Zone"})]})}),Object(m.jsx)("div",{className:"col-7 col-lg-8",children:Object(m.jsx)("div",{className:"tab-content",id:"list-nav-tabContent",children:r})})]}([{name:"Switch Months",text:"To change the current month being shown, click on the horizontal bar with the months' name ontop of the calendar."},{name:"Listing Events",text:"You can see the events of a specific day either in its own box in the calendar or by clicking on its number, where it will open a small popup window where you can also remove or add new ones."},{name:"Crete Events",text:"To create a new event, you can use the [New Event] button to the left of the calendar, or open the event listing and click on the [New Event]. The former requires you to enter a date, and the latter already has it."}])})]}),Object(m.jsxs)("div",{className:"tab-pane fade",id:"list-danger",children:[Object(m.jsx)("div",{className:"display-6 text-danger text-center p-5",children:"DANGER ZONE: "}),Object(m.jsxs)("div",{className:"text-center",children:["Things went south? Added ",Object(m.jsx)("b",{children:"way"})," too many events? Have to delete ",Object(m.jsx)("b",{children:"everything"})," for whatever reason, forever? Well, go ahead and do it! But be aware, because there is ",Object(m.jsxs)("span",{className:"text-danger",children:["no coming back, you will delete ",Object(m.jsx)("b",{children:"EVERYTHING... FOREVER!!!"})]})]}),Object(m.jsx)("button",{type:"button",className:"btn btn-danger w-100 m-1",onClick:function(){return e.clearEvents()},children:"Clear All Events"})]})]})]})},z=n.p+"static/media/logo-black.e9b8cdd7.png",U=(n(31),new b),q={name:["January","February","March","April","May","June","July","August","September","October","November","December"],id:["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],size:[1,-2,1,0,1,0,1,1,0,1,0,1]},H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).calendarRefresh=function(){e.forceUpdate()},e.clearEvents=function(){window.confirm("Are you REALLY sure about that? I'm telling you, there's simply no coming back for your dear grocery store lists...")&&(localStorage.clear(),U=new b,e.calendarRefresh())},e.state={},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;sessionStorage.setItem("properties",JSON.stringify(q));var t=Object(m.jsxs)("div",{className:"mb-3",children:["Today is ",U.numberWithPrefix(""+(new Date).getUTCDate())," "," ","of ",U.getProperties("name",(new Date).getUTCMonth())," "," ","of ",(new Date).getUTCFullYear()]});return Object(m.jsxs)("div",{className:"row left-padding text",children:[Object(m.jsxs)("div",{className:"col-2",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("img",{src:z})}),Object(m.jsxs)("div",{children:[t,Object(m.jsx)(E,{buttonClass:"w-100",object:void 0,refresh:this.calendarRefresh,pickDate:function(){return e.dateInput()}}),Object(m.jsx)(B,{clearEvents:this.clearEvents}),Object(m.jsx)("div",{className:"fw-bold mt-3",children:"Days with upcoming events:"}),Object(m.jsx)("div",{className:"showing-events-box day-bg overflow-auto border border-dark border-2 rounded",children:Object(m.jsx)(T,{refresh:this.calendarRefresh})})]})]}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(J,{refresh:function(){return e.calendarRefresh()}},1)})]})}}]),n}(r.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root")),W(console.log)}},[[32,1,2]]]);
//# sourceMappingURL=main.22d15d10.chunk.js.map