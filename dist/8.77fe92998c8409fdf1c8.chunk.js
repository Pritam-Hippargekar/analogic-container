webpackJsonp([8],{sYzU:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("WT6e"),u=e("pBY7"),d=e("DUFE"),a=e("bfOx"),i=function(){function l(l,n,e){this._intl=l,this.productivityservice=n,this.route=e,this.barChartLabels=[],this.barChartLegend=!0,this.chartColors=[],this.displayedColumns=[],this.dataSource=new d.x,this.empty=!0,this.setupChart(),this.displayedColumns=this.productivityservice.getTableColumnsProductivity()}return l.prototype.ngOnInit=function(){var l=this;this.paginator._intl.itemsPerPageLabel="Records Per Page",this.route.params.forEach(function(n){return l.machineID=n.machineID}),this.loaded=!1,this.empty=!1},l.prototype.ngAfterViewInit=function(){this.getProductivityDetails(this.machineID)},l.prototype.ngOnDestroy=function(){this.subscriber&&this.subscriber.unsubscribe()},l.prototype.getProductivityDetails=function(l){var n=this;void 0!==l&&(this.productivityservice.getProductivityDetails(l,0,0).subscribe(function(l){return n.setData(n.productivityservice.sortBy(l,"start_time"))},function(l){return n.handleError(l)}),this.productivityservice.getProductivityDetails(l,0,0).subscribe(function(l){return n.setDatachart(n.productivityservice.sortBy(l,"start_time"))},function(l){return n.handleError(l)}))},l.prototype.handleError=function(l,n){void 0===n&&(n=0),this.reset(),this.empty=!0,this.errMessage=this.productivityservice.getErrorMessage(n),this.productivityservice.throwError(l)},l.prototype.reset=function(){this.loaded=!0,this.isPaginatorLoading=!1},l.prototype.setData=function(l){l.length>0?(this.empty=!1,this.barChartData=this.productivityservice.getChartDataProductivity(l),this.dataSource=new d.x(l),this.dataSource.paginator=this.paginator):this.empty=!0,this.reset()},l.prototype.setDatachart=function(l){l.length>0?(this.empty=!1,this.barChartData=this.productivityservice.getChartDataProductivity(l)):this.empty=!0,this.reset()},l.prototype.setupChart=function(){var l=this.productivityservice.getChartOptionsProductivity();this.barChartOptions=l.options,this.chartColors=l.colors,this.barChartLabels=l.labels},l}(),o=function(){},r=e("zI1e"),c=e("D0Vv"),p=e("INQx"),m=e("efkn"),s=e("RsmO"),f=e("C7+D"),g=e("Xbny"),b=e("Z9HN"),h=e("Yf9w"),x=e("GRaa"),v=e("Xjw4"),y=e("mu/C"),C=e("1OzB"),w=e("W91W"),P=e("XMYV"),R=e("9zSE"),_=e("FX/J"),M=e("Z+/l"),O=t["\u0275crt"]({encapsulation:0,styles:[[".col1[_ngcontent-%COMP%]{background-color:#3e6ceb!important;height:180px;border:1px solid #3e6ceb!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol1[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#174cdf!important;border:1px solid #174cdf;color:#fff;text-shadow:none;padding-left:10px}.col2[_ngcontent-%COMP%]{background-color:#797e87!important;height:180px;border:1px solid #797e87!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol2[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#5b5b5b!important;border:1px solid #5b5b5b;color:#fff;text-shadow:none;padding-left:10px}.col3[_ngcontent-%COMP%]{background-color:#00bfa5!important;height:180px;border:1px solid #00bfa5!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol3[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#00897b!important;border:1px solid #00897b;color:#fff;text-shadow:none;padding-left:10px}.col4[_ngcontent-%COMP%]{background-color:#ff6e40!important;height:180px;border:1px solid #ff6e40!important;color:#fff!important;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol4[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#f4511e!important;border:1px solid #f4511e;color:#fff;text-shadow:none;padding-left:10px}.col5[_ngcontent-%COMP%]{width:425px;background-color:#fc438c!important;height:220px;border:1px solid #fc438c!important;color:#fff!important;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol5[_ngcontent-%COMP%]{width:423px;text-align:center;height:40px;margin-top:10px;background-color:#e90f65!important;border:1px solid #e90f65;color:#fff;text-shadow:none;padding-left:10px}.keyvalue[_ngcontent-%COMP%]{width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.keyItem[_ngcontent-%COMP%]{margin-left:10px;text-align:left;width:45%;word-wrap:break-word}.colon[_ngcontent-%COMP%]{width:5%;text-align:center}.valueItem[_ngcontent-%COMP%]{width:45%;text-align:left}.valueItem[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:6px}.valueItem[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{margin-right:0}.unitItem[_ngcontent-%COMP%]{display:inline-block;text-align:left;width:5%}dl[_ngcontent-%COMP%]{display:block;-webkit-margin-before:8px;margin-block-start:8px;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;-moz-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;-moz-margin-end:0;margin-inline-end:0}dd[_ngcontent-%COMP%]{display:block;-webkit-margin-start:0;-moz-margin-start:0;margin-inline-start:0}.headerClass[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#174cdf!important;border:1px solid #174cdf;color:#fff;text-shadow:none;padding-left:10px}.headerData[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;line-height:40px}.redClass[_ngcontent-%COMP%]{color:red}.greenClass[_ngcontent-%COMP%]{color:#58f150}.productivity[_ngcontent-%COMP%]{margin-top:10px}.productivity[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:500px;min-width:300px}.productivity[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:700;text-align:center}.productivity[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]{text-align:center}.productivity[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{overflow:auto;max-height:500px}.productivity[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]{display:none}@media (max-width:600px){.productivity[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]{width:100px;display:inline-block;font-weight:700;font-size:10px;margin-right:30px}.productivity[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:none}.productivity[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:start;padding:8px 24px}}"]],data:{}});function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"div",[["fxLayout",""],["fxLayout.xs","column"],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,s.g,[s.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"],layoutXs:[1,"layoutXs"]},null),t["\u0275did"](2,737280,null,0,s.f,[s.l,t.ElementRef,t.Renderer2,[2,s.g]],{align:[0,"align"]},null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](4,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["bufferValue","0"],["class","mat-progress-bar"],["color","primary"],["mode","buffer"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0]],null,null,f.b,f.a)),t["\u0275did"](5,49152,null,0,g.a,[t.ElementRef],{color:[0,"color"],bufferValue:[1,"bufferValue"],mode:[2,"mode"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "]))],function(l,n){l(n,1,0,"","column"),l(n,2,0,"center"),l(n,5,0,"primary","0","buffer")},function(l,n){l(n,4,0,t["\u0275nov"](n,5).value,t["\u0275nov"](n,5).mode)})}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"error",[],null,null,null,b.b,b.a)),t["\u0275did"](1,49152,null,0,h.a,[],{errMessage:[0,"errMessage"]},null)],function(l,n){l(n,1,0,n.component.errMessage)},null)}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"canvas",[["baseChart",""],["chartType","bar"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,x.BaseChartDirective,[t.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},null)],function(l,n){var e=n.component;l(n,1,0,e.barChartData,e.barChartLabels,e.barChartOptions,"bar",e.chartColors,e.barChartLegend)},null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,17,"div",[],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,v.q,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](2,{"margin-bottom":0}),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](4,0,null,null,12,"mat-card",[["class","chart mat-card"]],null,null,null,y.d,y.a)),t["\u0275did"](5,49152,null,0,C.a,[],null,null),(l()(),t["\u0275ted"](-1,0,["\n                "])),(l()(),t["\u0275eld"](7,0,null,0,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](8,16384,null,0,C.b,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275eld"](10,0,null,null,4,"div",[["class","chart-content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](13,16384,null,0,v.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,0,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n        "]))],function(l,n){var e=n.component;l(n,1,0,l(n,2,0,"20px")),l(n,13,0,e.barChartData)},null)}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","loading-shade"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](2,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["color","primary"],["mode","indeterminate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0]],null,null,f.b,f.a)),t["\u0275did"](3,49152,null,0,g.a,[t.ElementRef],{color:[0,"color"],mode:[1,"mode"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "]))],function(l,n){l(n,3,0,"primary","indeterminate")},function(l,n){l(n,2,0,t["\u0275nov"](n,3).value,t["\u0275nov"](n,3).mode)})}function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Start Date-Time"]))],null,null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Start Date-Time"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.start_time)})}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" End Date-Time"]))],null,null)}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["End Date-Time"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.end_time)})}function j(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Total Products(pkts) "]))],null,null)}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Total Products(pkts)"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.production)})}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Expected Products(pkts) "]))],null,null)}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Expected Products(pkts)"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.expectedProduction)})}function B(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Actual Products(pkts) "]))],null,null)}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,w.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Actual Products(pkts)"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,null==n.context.$implicit?null:n.context.$implicit.total_production)})}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,R.d,R.a)),t["\u0275did"](1,49152,null,0,w.f,[],null,null)],null,null)}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,R.e,R.b)),t["\u0275did"](1,49152,null,0,w.h,[],null,null)],null,null)}function X(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{paginator:0}),(l()(),t["\u0275eld"](1,0,null,null,123,"div",[["class","productivity"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](4,16384,null,0,v.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](7,16384,null,0,v.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](9,0,null,null,114,"section",[],[[8,"hidden",0]],null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](11,0,null,null,6,"div",[["fxLayout",""],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](12,737280,null,0,s.g,[s.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"]},null),t["\u0275did"](13,737280,null,0,s.f,[s.l,t.ElementRef,t.Renderer2,[2,s.g]],{align:[0,"align"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](15,0,null,null,1,"h2",[["class","mat-h2"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Productivity"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](20,16384,null,0,v.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n        "])),(l()(),t["\u0275eld"](22,0,null,null,100,"div",[["class","example-container mat-elevation-z8"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](25,16384,null,0,v.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n            "])),(l()(),t["\u0275eld"](27,0,null,null,88,"mat-table",[["class","mat-table"]],null,null,null,R.f,R.c)),t["\u0275did"](28,2342912,[["productionTable",4]],3,w.j,[t.IterableDiffers,t.ChangeDetectorRef,t.ElementRef,[8,null]],{dataSource:[0,"dataSource"]},null),t["\u0275qud"](603979776,2,{_contentColumnDefs:1}),t["\u0275qud"](603979776,3,{_contentRowDefs:1}),t["\u0275qud"](335544320,4,{_headerRowDef:0}),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](33,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](34,16384,null,2,w.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,5,{cell:0}),t["\u0275qud"](335544320,6,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[w.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,q)),t["\u0275did"](40,16384,null,0,w.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[6,4]],P.f,null,[w.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,L)),t["\u0275did"](44,16384,null,0,w.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[5,4]],P.b,null,[w.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275eld"](48,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](49,16384,null,2,w.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,7,{cell:0}),t["\u0275qud"](335544320,8,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[w.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,z)),t["\u0275did"](55,16384,null,0,w.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[8,4]],P.f,null,[w.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,S)),t["\u0275did"](59,16384,null,0,w.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[7,4]],P.b,null,[w.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275eld"](63,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](64,16384,null,2,w.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,9,{cell:0}),t["\u0275qud"](335544320,10,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[w.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,j)),t["\u0275did"](70,16384,null,0,w.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[10,4]],P.f,null,[w.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,V)),t["\u0275did"](74,16384,null,0,w.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[9,4]],P.b,null,[w.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275eld"](78,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](79,16384,null,2,w.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,11,{cell:0}),t["\u0275qud"](335544320,12,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[w.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,N)),t["\u0275did"](85,16384,null,0,w.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[12,4]],P.f,null,[w.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,F)),t["\u0275did"](89,16384,null,0,w.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[11,4]],P.b,null,[w.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275eld"](93,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](94,16384,null,2,w.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,13,{cell:0}),t["\u0275qud"](335544320,14,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[w.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,B)),t["\u0275did"](100,16384,null,0,w.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[14,4]],P.f,null,[w.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,Z)),t["\u0275did"](104,16384,null,0,w.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[13,4]],P.b,null,[w.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275and"](0,null,null,2,null,A)),t["\u0275did"](109,540672,null,0,w.g,[t.TemplateRef,t.IterableDiffers],{columns:[0,"columns"]},null),t["\u0275prd"](2048,[[4,4]],P.h,null,[w.g]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275and"](0,null,null,2,null,$)),t["\u0275did"](113,540672,null,0,w.i,[t.TemplateRef,t.IterableDiffers],{columns:[0,"columns"]},null),t["\u0275prd"](2048,[[3,4]],P.j,null,[w.i]),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n\n            "])),(l()(),t["\u0275eld"](117,0,null,null,4,"mat-paginator",[["class","mat-paginator"],["showFirstLastButtons",""]],null,null,null,_.b,_.a)),t["\u0275did"](118,278528,null,0,v.q,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](119,{"font-size":0,"font-weigth":1}),t["\u0275did"](120,245760,[[1,4]],0,M.b,[M.c,t.ChangeDetectorRef],{length:[0,"length"],pageSize:[1,"pageSize"],pageSizeOptions:[2,"pageSizeOptions"],showFirstLastButtons:[3,"showFirstLastButtons"]},null),t["\u0275pad"](121,5),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n\n    "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,!e.loaded),l(n,7,0,e.errMessage),l(n,12,0,""),l(n,13,0,"center"),l(n,20,0,!e.empty),l(n,25,0,e.isPaginatorLoading),l(n,28,0,e.dataSource),l(n,34,0,"start_time"),l(n,49,0,"end_time"),l(n,64,0,"production"),l(n,79,0,"expectedProduction"),l(n,94,0,"total_production"),l(n,109,0,e.displayedColumns),l(n,113,0,e.displayedColumns),l(n,118,0,l(n,119,0,"15px","bold")),l(n,120,0,e.datasetLength,10,l(n,121,0,5,10,15,25,30),"")},function(l,n){l(n,9,0,!n.component.loaded)})}var W=t["\u0275ccf"]("app-productivity",i,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-productivity",[],null,null,null,X,O)),t["\u0275did"](1,4440064,null,0,i,[M.c,u.a,a.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Y=e("9Sd6"),G=e("XHgV"),H=e("U/+3"),U=e("z7Rf"),J=e("ItHS"),K=e("OE0E"),Q=e("1T37"),ll=e("+j5Y"),nl=e("F1jI"),el=e("6sdf"),tl=e("8tOD"),ul=e("1GLL"),dl=e("a9YB"),al=e("Uo70"),il=e("kINy"),ol=e("NwsS"),rl=e("Mcof"),cl=e("7u3n"),pl=e("p5vt"),ml=e("7DMc"),sl=e("G4M3"),fl=e("ve9G"),gl=e("E5Zk"),bl=e("gsbp"),hl=e("ZuzD"),xl=e("bkcK"),vl=e("AP/s"),yl=e("yvW1"),Cl=e("q2BM"),wl=e("4rwD"),Pl=e("TBIh"),Rl=e("704W"),_l=e("sqmn"),Ml=e("Bp8q"),Ol=e("y/Fr"),kl=e("kJ/S"),Dl=e("6GVX"),El=e("j06o"),Il=e("86rF"),Tl=e("qDvO"),ql=e("Alnm"),Ll=e("Wpp4"),zl=e("eQTd"),Sl=e("eobq"),jl=e("8j6V");e.d(n,"ProductivityModuleNgFactory",function(){return Vl});var Vl=t["\u0275cmf"](o,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,c.a,p.a,m.a,m.b,W]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,v.p,v.o,[t.LOCALE_ID,[2,v.A]]),t["\u0275mpd"](6144,Y.b,null,[v.d]),t["\u0275mpd"](4608,Y.c,Y.c,[[2,Y.b]]),t["\u0275mpd"](4608,G.a,G.a,[]),t["\u0275mpd"](4608,H.k,H.k,[G.a]),t["\u0275mpd"](4608,H.j,H.j,[H.k,t.NgZone,v.d]),t["\u0275mpd"](136192,H.d,H.b,[[3,H.d],v.d]),t["\u0275mpd"](5120,H.n,H.m,[[3,H.n],[2,H.l],v.d]),t["\u0275mpd"](5120,H.i,H.g,[[3,H.i],t.NgZone,G.a]),t["\u0275mpd"](5120,U.d,U.a,[[3,U.d],[2,J.c],K.c,[2,v.d]]),t["\u0275mpd"](5120,Q.d,Q.b,[[3,Q.d],t.NgZone,G.a]),t["\u0275mpd"](5120,Q.g,Q.f,[[3,Q.g],G.a,t.NgZone]),t["\u0275mpd"](4608,ll.j,ll.j,[Q.d,Q.g,t.NgZone,v.d]),t["\u0275mpd"](5120,ll.f,ll.k,[[3,ll.f],v.d]),t["\u0275mpd"](4608,ll.i,ll.i,[Q.g,v.d]),t["\u0275mpd"](5120,ll.g,ll.n,[[3,ll.g],v.d]),t["\u0275mpd"](4608,ll.d,ll.d,[ll.j,ll.f,t.ComponentFactoryResolver,ll.i,ll.g,t.ApplicationRef,t.Injector,t.NgZone,v.d]),t["\u0275mpd"](5120,ll.l,ll.m,[ll.d]),t["\u0275mpd"](5120,nl.a,nl.b,[ll.d]),t["\u0275mpd"](4608,el.b,el.b,[]),t["\u0275mpd"](5120,s.a,s.c,[]),t["\u0275mpd"](4608,s.b,s.b,[s.a]),t["\u0275mpd"](4608,s.k,s.k,[t.NgZone,v.d]),t["\u0275mpd"](5120,s.l,s.j,[[3,s.l],s.b,s.k]),t["\u0275mpd"](5120,s.o,s.n,[[3,s.o],s.k,s.b]),t["\u0275mpd"](5120,tl.c,tl.d,[ll.d]),t["\u0275mpd"](4608,tl.e,tl.e,[ll.d,t.Injector,[2,v.j],[2,tl.b],tl.c,[3,tl.e],ll.f]),t["\u0275mpd"](4608,ul.g,ul.g,[]),t["\u0275mpd"](5120,ul.a,ul.b,[ll.d]),t["\u0275mpd"](5120,dl.c,dl.d,[[3,dl.c]]),t["\u0275mpd"](4608,al.d,al.d,[]),t["\u0275mpd"](5120,il.b,il.h,[ll.d]),t["\u0275mpd"](6144,al.h,null,[t.LOCALE_ID]),t["\u0275mpd"](4608,al.c,al.y,[[2,al.h]]),t["\u0275mpd"](5120,ol.a,ol.b,[ll.d]),t["\u0275mpd"](4608,rl.d,rl.d,[G.a]),t["\u0275mpd"](135680,rl.a,rl.a,[rl.d,t.NgZone]),t["\u0275mpd"](5120,cl.b,cl.c,[ll.d]),t["\u0275mpd"](5120,M.c,M.a,[[3,M.c]]),t["\u0275mpd"](4608,pl.b,pl.b,[ll.d,H.n,t.Injector,rl.a,[3,pl.b]]),t["\u0275mpd"](4608,K.f,al.e,[[2,al.i],[2,al.n]]),t["\u0275mpd"](4608,ml.z,ml.z,[]),t["\u0275mpd"](4608,ml.f,ml.f,[]),t["\u0275mpd"](4608,sl.a,sl.a,[fl.a,gl.a]),t["\u0275mpd"](4608,u.a,u.a,[fl.a,gl.a]),t["\u0275mpd"](512,v.c,v.c,[]),t["\u0275mpd"](512,a.n,a.n,[[2,a.s],[2,a.k]]),t["\u0275mpd"](512,x.ChartsModule,x.ChartsModule,[]),t["\u0275mpd"](512,Y.a,Y.a,[]),t["\u0275mpd"](256,al.f,!0,[]),t["\u0275mpd"](512,al.n,al.n,[[2,al.f]]),t["\u0275mpd"](512,G.b,G.b,[]),t["\u0275mpd"](512,al.x,al.x,[]),t["\u0275mpd"](512,H.a,H.a,[]),t["\u0275mpd"](512,bl.c,bl.c,[]),t["\u0275mpd"](512,U.c,U.c,[]),t["\u0275mpd"](512,h.b,h.b,[]),t["\u0275mpd"](512,hl.b,hl.b,[]),t["\u0275mpd"](512,al.v,al.v,[]),t["\u0275mpd"](512,al.t,al.t,[]),t["\u0275mpd"](512,xl.g,xl.g,[]),t["\u0275mpd"](512,Q.c,Q.c,[]),t["\u0275mpd"](512,ll.h,ll.h,[]),t["\u0275mpd"](512,nl.c,nl.c,[]),t["\u0275mpd"](512,el.c,el.c,[]),t["\u0275mpd"](512,vl.c,vl.c,[]),t["\u0275mpd"](512,P.l,P.l,[]),t["\u0275mpd"](512,s.m,s.m,[]),t["\u0275mpd"](512,s.e,s.e,[]),t["\u0275mpd"](512,C.d,C.d,[]),t["\u0275mpd"](512,tl.j,tl.j,[]),t["\u0275mpd"](512,ul.h,ul.h,[]),t["\u0275mpd"](512,yl.c,yl.c,[]),t["\u0275mpd"](512,Cl.b,Cl.b,[]),t["\u0275mpd"](512,al.o,al.o,[]),t["\u0275mpd"](512,wl.b,wl.b,[]),t["\u0275mpd"](512,Pl.d,Pl.d,[]),t["\u0275mpd"](512,Rl.b,Rl.b,[]),t["\u0275mpd"](512,_l.d,_l.d,[]),t["\u0275mpd"](512,il.f,il.f,[]),t["\u0275mpd"](512,al.z,al.z,[]),t["\u0275mpd"](512,al.q,al.q,[]),t["\u0275mpd"](512,ol.d,ol.d,[]),t["\u0275mpd"](512,rl.c,rl.c,[]),t["\u0275mpd"](512,cl.e,cl.e,[]),t["\u0275mpd"](512,M.d,M.d,[]),t["\u0275mpd"](512,Ml.b,Ml.b,[]),t["\u0275mpd"](512,Ol.c,Ol.c,[]),t["\u0275mpd"](512,kl.h,kl.h,[]),t["\u0275mpd"](512,pl.d,pl.d,[]),t["\u0275mpd"](512,w.l,w.l,[]),t["\u0275mpd"](512,Dl.i,Dl.i,[]),t["\u0275mpd"](512,El.b,El.b,[]),t["\u0275mpd"](512,g.b,g.b,[]),t["\u0275mpd"](512,Il.a,Il.a,[]),t["\u0275mpd"](512,Tl.a,Tl.a,[]),t["\u0275mpd"](512,ml.w,ml.w,[]),t["\u0275mpd"](512,ml.k,ml.k,[]),t["\u0275mpd"](512,ml.u,ml.u,[]),t["\u0275mpd"](512,ql.b,ql.b,[]),t["\u0275mpd"](512,Ll.b,Ll.b,[]),t["\u0275mpd"](512,zl.a,zl.a,[]),t["\u0275mpd"](512,Sl.b,Sl.b,[]),t["\u0275mpd"](512,jl.a,jl.a,[]),t["\u0275mpd"](512,o,o,[]),t["\u0275mpd"](256,il.a,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[]),t["\u0275mpd"](256,al.g,al.k,[]),t["\u0275mpd"](256,cl.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,kl.a,!1,[]),t["\u0275mpd"](1024,a.i,function(){return[[{path:"",component:i},{path:":machineID",component:i}]]},[])])})}});