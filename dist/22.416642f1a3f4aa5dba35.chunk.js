webpackJsonp([22],{ziBC:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("WT6e"),a=function(){},u=e("RsmO"),d=e("nyDa"),i=e("Wpp4"),r=e("Z9HN"),o=e("Yf9w"),m=e("aqfx"),s=e("eobq"),c=e("G4M3"),p=e("mu/C"),h=e("1OzB"),f=e("AcAK"),b=e("P7V2"),g=e("+XWW"),y=e("DGGb"),_=e("ve9G"),v=e("E5Zk"),D=e("Alnm"),x=e("bfOx"),R=e("cmqK"),M=e("p5vt"),I=e("Xjw4"),E=e("zlUc"),N=e("8VUB"),A=e("mBZL"),S=function(){function l(l,n){var e=this;this._rest=l,this.error=n,this.getPlantDetail=function(l){e.plantName=l},this.getErrorMessage=function(l){return e.error.getErrorMessage(l)},this.throwError=function(l){return e.error.handleError(l)},this.getMachineHealthDetails=function(l){return e._rest.get("generic/machineInformation/"+l)},this.getMachineHealthSummary=function(l){return e._rest.get("perdayInformation/"+l)},this.defaultMachineSummary=function(){return{machineProductionTime:"0",machineDownTime:"0",machineIdleTime:"0",noOfTimeMachineStopages:0,reason:"N/A"}}}return l.prototype.getName=function(l){return this._rest.get("config/associativename/"+l)},l}(),j=function(){function l(l,n,e,t){this._machine=l,this._route=n,this._bar=e,this.logout=t,this.xAxis=E.a.values(screen.width),this.barData=[],this._barContainerWidth=1012,this.empty=!0}return l.prototype.onSelect=function(l){var n=this;this.loaded=!1,this.empty=!1,this.Errormsg=!0,this.machineID=l.machineID,this._machine.getName(l.machineID).subscribe(function(e){n.getProductDetails_MachineStatus(e.associated_name,l.machineID),console.log(e)})},l.prototype.getProductDetails_MachineStatus=function(l,n){var e=this;void 0!==l&&(this._machine.getMachineHealthDetails(l).subscribe(function(l){if(null!=l){for(var n=0;n<l.length;n++){var t=new Date;t.setHours(8,0,0,0);var a=e._bar.getHour(l[n].start_time),u=e._bar.getMin(l[n].start_time),d=e._bar.getSeconds(l[n].start_time),i=new Date;i.setHours(a,u,d,0);var r=e._bar.getHour(l[n].end_time),o=e._bar.getMin(l[n].end_time),m=e._bar.getSeconds(l[n].end_time),s=new Date;if(s.setHours(r,o,m,0),+i<+t.setHours(8,0,0,0)&&+s>+t.setHours(8,0,0,0)){var c=e._bar.formatDate1(l[n].end_time),p=e._bar.getDate(l[n].end_time);l[n].end_time=c,(h=Object()).machineName=l[n].machineName,h.reason=l[n].reason,h.status=l[n].status,h.timeslot_id=l[n].timeslot_id,h.start_time=c,h.end_time=p,l.push(h)}else if(+i<+t.setHours(16,0,0,0)&&+s>+t.setHours(16,0,0,0)){var h;c=e._bar.formatDate2(l[n].end_time),p=e._bar.getDate(l[n].end_time),l[n].end_time=c,(h=Object()).machineName=l[n].machineName,h.reason=l[n].reason,h.status=l[n].status,h.timeslot_id=l[n].timeslot_id,h.start_time=c,h.end_time=p,l.push(h)}}e.machineData=l,e.machineName=e.machineData[0].machineName,e.barData=e._bar.createBar(e.machineData,e.barContainerWidth)}},function(l){return e.handleError(l)}),this._machine.getMachineHealthSummary(n).subscribe(function(l){e.machineSummary=l,e.loaded=!0},function(l){return e.handleError(l)}))},Object.defineProperty(l.prototype,"barContainerWidth",{get:function(){return this._barContainerWidth},set:function(l){this.barContainerWidth=l},enumerable:!0,configurable:!0}),l.prototype.onResize=function(l){this.xAxis=E.a.values(l),this.barData=this._bar.createBar(this.machineData,l)},l.prototype.ngOnInit=function(){localStorage.setItem("lastAction",Date.now().toString()),this.machineSummary=this._machine.defaultMachineSummary()},l.prototype.handleError=function(l,n){void 0===n&&(n=0),this.reset(),this.empty=!0,this.Errormsg=!1,this.errMessage=this._machine.getErrorMessage(n),this._machine.throwError(l)},l.prototype.reset=function(){this.loaded=!0},l}(),w=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"div",[["fxLayout",""],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,u.g,[u.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"]},null),t["\u0275did"](2,737280,null,0,u.f,[u.l,t.ElementRef,t.Renderer2,[2,u.g]],{align:[0,"align"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](4,0,null,null,1,"app-spinner",[],null,null,null,d.b,d.a)),t["\u0275did"](5,49152,null,0,i.a,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n  "]))],function(l,n){l(n,1,0,""),l(n,2,0,"center")},null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"error",[],[[8,"hidden",0]],null,null,r.b,r.a)),t["\u0275did"](1,49152,null,0,o.a,[],{errMessage:[0,"errMessage"]},null)],function(l,n){l(n,1,0,n.component.errMessage)},function(l,n){l(n,0,0,n.component.Errormsg)})}function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,52,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n\n        "])),(l()(),t["\u0275eld"](2,0,null,null,1,"summary-highlight",[["color","#00897b"],["entity","machine"],["type","strip"]],null,null,null,m.b,m.a)),t["\u0275did"](3,114688,null,0,s.a,[c.a],{machineID:[0,"machineID"],type:[1,"type"],entity:[2,"entity"],color:[3,"color"]},null),(l()(),t["\u0275ted"](-1,null,["\n        \n        "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](6,0,null,null,45,"div",[["class","row"],["fxLayout",""],["fxLayout.xs","column"],["fxLayoutAlign","center"],["fxLayoutGap","15px"]],null,null,null,null,null)),t["\u0275did"](7,737280,null,0,u.g,[u.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"],layoutXs:[1,"layoutXs"]},null),t["\u0275did"](8,1785856,null,0,u.h,[u.l,t.ElementRef,t.Renderer2,[2,u.g],t.NgZone],{gap:[0,"gap"]},null),t["\u0275did"](9,737280,null,0,u.f,[u.l,t.ElementRef,t.Renderer2,[2,u.g]],{align:[0,"align"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](11,0,null,null,39,"div",[["fxFlex","100%"]],null,null,null,null,null)),t["\u0275did"](12,737280,null,0,u.d,[u.l,t.ElementRef,t.Renderer2,[3,u.g],[3,u.i]],{flex:[0,"flex"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](14,0,null,null,35,"mat-card",[["class","chart mat-card"]],null,null,null,p.d,p.a)),t["\u0275did"](15,49152,null,0,h.a,[],null,null),(l()(),t["\u0275ted"](-1,0,["\n              "])),(l()(),t["\u0275eld"](17,0,null,0,31,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](18,16384,null,0,h.b,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n               "])),(l()(),t["\u0275ted"](-1,null,["\n               "])),(l()(),t["\u0275eld"](21,0,null,null,1,"h3",[["class","mat-h3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Machine's 24 hours data"])),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](24,0,null,null,10,"div",[["class","legend"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                  "])),(l()(),t["\u0275eld"](26,0,null,null,1,"span",[["class","on"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Running"])),(l()(),t["\u0275ted"](-1,null,["\n                  "])),(l()(),t["\u0275eld"](29,0,null,null,1,"span",[["class","stop"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Stopped"])),(l()(),t["\u0275ted"](-1,null,["\n                  "])),(l()(),t["\u0275eld"](32,0,null,null,1,"span",[["class","idle"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Idle"])),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n             \n                "])),(l()(),t["\u0275eld"](36,0,null,null,11,"div",[["barContainer",""],["class","chart-content"]],null,[[null,"resize"]],function(l,n,e){var t=!0;return"resize"===n&&(t=!1!==l.component.onResize(e)&&t),t},null,null)),t["\u0275did"](37,278528,null,0,f.a,[t.ElementRef],null,{resize:"resize"}),(l()(),t["\u0275ted"](-1,null,["\n                  "])),(l()(),t["\u0275eld"](39,0,null,null,1,"svg-bar",[["title","00:00 to 08:00"]],null,null,null,b.b,b.a)),t["\u0275did"](40,114688,null,0,g.a,[],{xAxis:[0,"xAxis"],barData:[1,"barData"],title:[2,"title"]},null),(l()(),t["\u0275ted"](-1,null,["\n                  "])),(l()(),t["\u0275eld"](42,0,null,null,1,"svg-bar",[["title","08:00 to 16:00"]],null,null,null,b.b,b.a)),t["\u0275did"](43,114688,null,0,g.a,[],{xAxis:[0,"xAxis"],barData:[1,"barData"],title:[2,"title"]},null),(l()(),t["\u0275ted"](-1,null,["\n                  "])),(l()(),t["\u0275eld"](45,0,null,null,1,"svg-bar",[["title","16:00 to 00:00"]],null,null,null,b.b,b.a)),t["\u0275did"](46,114688,null,0,g.a,[],{xAxis:[0,"xAxis"],barData:[1,"barData"],title:[2,"title"]},null),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n                \n              "])),(l()(),t["\u0275ted"](-1,0,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n        \n    "]))],function(l,n){var e=n.component;l(n,3,0,e.machineID,"strip","machine","#00897b"),l(n,7,0,"","column"),l(n,8,0,"15px"),l(n,9,0,"center"),l(n,12,0,"100%"),l(n,37,0),l(n,40,0,e.xAxis.first,e.barData.first,"00:00 to 08:00"),l(n,43,0,e.xAxis.second,e.barData.second,"08:00 to 16:00"),l(n,46,0,e.xAxis.third,e.barData.third,"16:00 to 00:00")},null)}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,23,"div",[["class","machine"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](2,0,null,null,4,"div",[["fxLayout",""],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](3,737280,null,0,u.g,[u.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"]},null),t["\u0275did"](4,737280,null,0,u.f,[u.l,t.ElementRef,t.Renderer2,[2,u.g]],{align:[0,"align"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"h2",[["class","mat-h2"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Utility Status"])),(l()(),t["\u0275ted"](-1,null,["\n\n  "])),(l()(),t["\u0275eld"](8,0,null,null,2,"selection",[["dashboardtype","ums_machine_status"]],null,[[null,"select"]],function(l,n,e){var t=!0;return"select"===n&&(t=!1!==l.component.onSelect(e)&&t),t},y.b,y.a)),t["\u0275prd"](512,null,c.a,c.a,[_.a,v.a]),t["\u0275did"](10,114688,null,0,D.a,[v.a,x.k,c.a,R.a,M.b],{dashboardtype:[0,"dashboardtype"]},{select:"select"}),(l()(),t["\u0275ted"](-1,null,["\n  \n  "])),(l()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](13,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n  \n  "])),(l()(),t["\u0275eld"](15,0,null,null,7,"section",[],[[8,"hidden",0]],null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](18,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n    \n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,H)),t["\u0275did"](21,16384,null,0,I.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n \n  "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,3,0,""),l(n,4,0,"center"),l(n,10,0,"ums_machine_status"),l(n,13,0,!e.loaded),l(n,18,0,e.errMessage),l(n,21,0,!e.empty)},function(l,n){l(n,15,0,!n.component.loaded)})}var L=t["\u0275ccf"]("app-machine-status",j,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-machine-status",[],null,null,null,z,w)),t["\u0275did"](1,114688,null,0,j,[S,x.a,N.a,A.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),O=e("zI1e"),Z=e("D0Vv"),W=e("INQx"),T=e("efkn"),B=e("9Sd6"),P=e("XHgV"),V=e("U/+3"),q=e("z7Rf"),F=e("ItHS"),G=e("OE0E"),X=e("1T37"),U=e("+j5Y"),Y=e("F1jI"),K=e("6sdf"),J=e("8tOD"),Q=e("1GLL"),$=e("a9YB"),ll=e("Uo70"),nl=e("kINy"),el=e("NwsS"),tl=e("Mcof"),al=e("7u3n"),ul=e("Z+/l"),dl=e("7DMc"),il=function(){},rl=e("GRaa"),ol=e("gsbp"),ml=e("ZuzD"),sl=e("bkcK"),cl=e("AP/s"),pl=e("XMYV"),hl=e("yvW1"),fl=e("q2BM"),bl=e("4rwD"),gl=e("TBIh"),yl=e("704W"),_l=e("sqmn"),vl=e("Bp8q"),Dl=e("y/Fr"),xl=e("kJ/S"),Rl=e("W91W"),Ml=e("6GVX"),Il=e("j06o"),El=e("Xbny"),Nl=e("86rF"),Al=e("qDvO"),Sl=e("eQTd"),jl=e("8j6V"),wl=e("H6ie");e.d(n,"MachineStatusModuleNgFactory",function(){return Cl});var Cl=t["\u0275cmf"](a,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[L,O.a,Z.a,W.a,T.a,T.b]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,I.p,I.o,[t.LOCALE_ID,[2,I.A]]),t["\u0275mpd"](6144,B.b,null,[I.d]),t["\u0275mpd"](4608,B.c,B.c,[[2,B.b]]),t["\u0275mpd"](4608,P.a,P.a,[]),t["\u0275mpd"](4608,V.k,V.k,[P.a]),t["\u0275mpd"](4608,V.j,V.j,[V.k,t.NgZone,I.d]),t["\u0275mpd"](136192,V.d,V.b,[[3,V.d],I.d]),t["\u0275mpd"](5120,V.n,V.m,[[3,V.n],[2,V.l],I.d]),t["\u0275mpd"](5120,V.i,V.g,[[3,V.i],t.NgZone,P.a]),t["\u0275mpd"](5120,q.d,q.a,[[3,q.d],[2,F.c],G.c,[2,I.d]]),t["\u0275mpd"](5120,X.d,X.b,[[3,X.d],t.NgZone,P.a]),t["\u0275mpd"](5120,X.g,X.f,[[3,X.g],P.a,t.NgZone]),t["\u0275mpd"](4608,U.j,U.j,[X.d,X.g,t.NgZone,I.d]),t["\u0275mpd"](5120,U.f,U.k,[[3,U.f],I.d]),t["\u0275mpd"](4608,U.i,U.i,[X.g,I.d]),t["\u0275mpd"](5120,U.g,U.n,[[3,U.g],I.d]),t["\u0275mpd"](4608,U.d,U.d,[U.j,U.f,t.ComponentFactoryResolver,U.i,U.g,t.ApplicationRef,t.Injector,t.NgZone,I.d]),t["\u0275mpd"](5120,U.l,U.m,[U.d]),t["\u0275mpd"](5120,Y.a,Y.b,[U.d]),t["\u0275mpd"](4608,K.b,K.b,[]),t["\u0275mpd"](5120,u.a,u.c,[]),t["\u0275mpd"](4608,u.b,u.b,[u.a]),t["\u0275mpd"](4608,u.k,u.k,[t.NgZone,I.d]),t["\u0275mpd"](5120,u.l,u.j,[[3,u.l],u.b,u.k]),t["\u0275mpd"](5120,u.o,u.n,[[3,u.o],u.k,u.b]),t["\u0275mpd"](5120,J.c,J.d,[U.d]),t["\u0275mpd"](4608,J.e,J.e,[U.d,t.Injector,[2,I.j],[2,J.b],J.c,[3,J.e],U.f]),t["\u0275mpd"](4608,Q.g,Q.g,[]),t["\u0275mpd"](5120,Q.a,Q.b,[U.d]),t["\u0275mpd"](5120,$.c,$.d,[[3,$.c]]),t["\u0275mpd"](4608,ll.d,ll.d,[]),t["\u0275mpd"](5120,nl.b,nl.h,[U.d]),t["\u0275mpd"](6144,ll.h,null,[t.LOCALE_ID]),t["\u0275mpd"](4608,ll.c,ll.y,[[2,ll.h]]),t["\u0275mpd"](5120,el.a,el.b,[U.d]),t["\u0275mpd"](4608,tl.d,tl.d,[P.a]),t["\u0275mpd"](135680,tl.a,tl.a,[tl.d,t.NgZone]),t["\u0275mpd"](5120,al.b,al.c,[U.d]),t["\u0275mpd"](5120,ul.c,ul.a,[[3,ul.c]]),t["\u0275mpd"](4608,M.b,M.b,[U.d,V.n,t.Injector,tl.a,[3,M.b]]),t["\u0275mpd"](4608,G.f,ll.e,[[2,ll.i],[2,ll.n]]),t["\u0275mpd"](4608,dl.z,dl.z,[]),t["\u0275mpd"](4608,dl.f,dl.f,[]),t["\u0275mpd"](4608,c.a,c.a,[_.a,v.a]),t["\u0275mpd"](4608,N.a,N.a,[]),t["\u0275mpd"](4608,S,S,[_.a,v.a]),t["\u0275mpd"](512,I.c,I.c,[]),t["\u0275mpd"](512,x.n,x.n,[[2,x.s],[2,x.k]]),t["\u0275mpd"](512,il,il,[]),t["\u0275mpd"](512,rl.ChartsModule,rl.ChartsModule,[]),t["\u0275mpd"](512,B.a,B.a,[]),t["\u0275mpd"](256,ll.f,!0,[]),t["\u0275mpd"](512,ll.n,ll.n,[[2,ll.f]]),t["\u0275mpd"](512,P.b,P.b,[]),t["\u0275mpd"](512,ll.x,ll.x,[]),t["\u0275mpd"](512,V.a,V.a,[]),t["\u0275mpd"](512,ol.c,ol.c,[]),t["\u0275mpd"](512,q.c,q.c,[]),t["\u0275mpd"](512,o.b,o.b,[]),t["\u0275mpd"](512,ml.b,ml.b,[]),t["\u0275mpd"](512,ll.v,ll.v,[]),t["\u0275mpd"](512,ll.t,ll.t,[]),t["\u0275mpd"](512,sl.g,sl.g,[]),t["\u0275mpd"](512,X.c,X.c,[]),t["\u0275mpd"](512,U.h,U.h,[]),t["\u0275mpd"](512,Y.c,Y.c,[]),t["\u0275mpd"](512,K.c,K.c,[]),t["\u0275mpd"](512,cl.c,cl.c,[]),t["\u0275mpd"](512,pl.l,pl.l,[]),t["\u0275mpd"](512,u.m,u.m,[]),t["\u0275mpd"](512,u.e,u.e,[]),t["\u0275mpd"](512,h.d,h.d,[]),t["\u0275mpd"](512,J.j,J.j,[]),t["\u0275mpd"](512,Q.h,Q.h,[]),t["\u0275mpd"](512,hl.c,hl.c,[]),t["\u0275mpd"](512,fl.b,fl.b,[]),t["\u0275mpd"](512,ll.o,ll.o,[]),t["\u0275mpd"](512,bl.b,bl.b,[]),t["\u0275mpd"](512,gl.d,gl.d,[]),t["\u0275mpd"](512,yl.b,yl.b,[]),t["\u0275mpd"](512,_l.d,_l.d,[]),t["\u0275mpd"](512,nl.f,nl.f,[]),t["\u0275mpd"](512,ll.z,ll.z,[]),t["\u0275mpd"](512,ll.q,ll.q,[]),t["\u0275mpd"](512,el.d,el.d,[]),t["\u0275mpd"](512,tl.c,tl.c,[]),t["\u0275mpd"](512,al.e,al.e,[]),t["\u0275mpd"](512,ul.d,ul.d,[]),t["\u0275mpd"](512,vl.b,vl.b,[]),t["\u0275mpd"](512,Dl.c,Dl.c,[]),t["\u0275mpd"](512,xl.h,xl.h,[]),t["\u0275mpd"](512,M.d,M.d,[]),t["\u0275mpd"](512,Rl.l,Rl.l,[]),t["\u0275mpd"](512,Ml.i,Ml.i,[]),t["\u0275mpd"](512,Il.b,Il.b,[]),t["\u0275mpd"](512,El.b,El.b,[]),t["\u0275mpd"](512,Nl.a,Nl.a,[]),t["\u0275mpd"](512,Al.a,Al.a,[]),t["\u0275mpd"](512,dl.w,dl.w,[]),t["\u0275mpd"](512,dl.k,dl.k,[]),t["\u0275mpd"](512,dl.u,dl.u,[]),t["\u0275mpd"](512,D.b,D.b,[]),t["\u0275mpd"](512,i.b,i.b,[]),t["\u0275mpd"](512,Sl.a,Sl.a,[]),t["\u0275mpd"](512,s.b,s.b,[]),t["\u0275mpd"](512,jl.a,jl.a,[]),t["\u0275mpd"](512,wl.a,wl.a,[]),t["\u0275mpd"](512,a,a,[]),t["\u0275mpd"](1024,x.i,function(){return[[{path:"",component:j},{path:":machineName",component:j}]]},[]),t["\u0275mpd"](256,nl.a,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[]),t["\u0275mpd"](256,ll.g,ll.k,[]),t["\u0275mpd"](256,al.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,xl.a,!1,[])])})}});