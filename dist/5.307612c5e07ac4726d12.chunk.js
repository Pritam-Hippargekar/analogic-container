webpackJsonp([5],{tLJT:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("WT6e"),d=function(){},u=e("RsmO"),o=e("nyDa"),a=e("Wpp4"),r=e("Z9HN"),i=e("Yf9w"),c=e("aqfx"),p=e("eobq"),s=e("G4M3"),m=e("GRaa"),g=e("Xjw4"),f=e("mu/C"),h=e("1OzB"),b=e("C7+D"),x=e("Xbny"),C=e("W91W"),P=e("XMYV"),y=e("9zSE"),M=e("DGGb"),w=e("ve9G"),O=e("E5Zk"),_=e("Alnm"),v=e("bfOx"),k=e("cmqK"),R=e("p5vt"),D=e("FX/J"),E=e("Z+/l"),I=e("DUFE"),T=e("M4fF"),S=function(){return function(l,n){var e=this;this.error=l,this.rest=n,this.getProductionDetails=function(l,n,t){return e.rest.get("productionInformation/"+l+"/?limit="+n+"&offset="+t)},this.getErrorMessage=function(l){return e.error.getErrorMessage(l)},this.getChartData=function(l){var n=e.getEmptyArray(24),t=e.getEmptyArray(24);return Object(T.map)(l,function(l){var e=new Date(l.startDate).getHours();n[e]=l.perHrsGoodProduction,t[e]=l.perHrsRejectProduction}),[{data:n.slice(),label:"Good"},{data:t.slice(),label:"Rejection"}]},this.getChartOptions=function(){return{colors:[{backgroundColor:"#5cb85c"},{backgroundColor:"#d9534f"}],labels:e.getHours(24),options:{responsive:!0,scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Production Count (pkts)",fontColor:"#3e6ceb"}}],xAxes:[{scaleLabel:{display:!0,labelString:"Time",fontColor:"#3e6ceb"}}]}}}},this.getTableColumns=function(){return["startDate","endDate","perHrsTotalProduction","perHrsGoodProduction","perHrsRejectProduction"]},this.sortBy=function(l,n,e){return void 0===e&&(e=["desc"]),Object(T.orderBy)(l,n.slice(),e)},this.throwError=function(l){return e.error.handleError(l)},this.getEmptyArray=function(l){return Array.from(new Array(l),function(l,n){return 0})},this.getHours=function(l){return Array.from(new Array(l),function(l,n){return n})}}}(),j=function(){function l(l,n,e,t){this.product=l,this._intl=n,this.error=e,this.route=t,this.barChartLabels=[],this.barChartLegend=!0,this.chartColors=[],this.displayedColumns=[],this.dataSource=new I.x,this.loaded=!0,this.loadedSpinner=!0,this.empty=!0,this.setupChart(),this.displayedColumns=this.product.getTableColumns()}return l.prototype.ngOnInit=function(){localStorage.setItem("lastAction",Date.now().toString()),this.paginator._intl.itemsPerPageLabel="Records Per Page"},l.prototype.onSelect=function(l){this.loaded=!0,this.empty=!1,this.loadedSpinner=!0,this.Errormsg=!0,this.machineID=l.machineID,this.getProductionDetails(l.machineID)},l.prototype.getProductionDetails=function(l){var n=this;void 0!==l&&(this.product.getProductionDetails(l,0,0).subscribe(function(l){n.setChartData(l)}),this.product.getProductionDetails(l,0,0).subscribe(function(l){n.setData(l)}))},l.prototype.setChartData=function(l){null!=l?(this.barChartData=this.product.getChartData(l),this.loaded=!1,this.empty=!1,this.loadedSpinner=!1,this.isPaginatorLoading=!1):(this.Errormsg=!1,this.loadedSpinner=!1,this.errMessage=this.error.getErrorMessage(1))},l.prototype.setupChart=function(){var l=this.product.getChartOptions();this.barChartOptions=l.options,this.chartColors=l.colors,this.barChartLabels=l.labels},l.prototype.setData=function(l){null!=l?(this.dataSource=new I.x(l),this.dataSource.paginator=this.paginator,this.loaded=!1,this.empty=!1,this.loadedSpinner=!1,this.Errormsg=!0):(this.Errormsg=!1,this.loaded=!0,this.loadedSpinner=!1,this.errMessage=this.error.getErrorMessage(1))},l}(),q=t["\u0275crt"]({encapsulation:0,styles:[[".col1[_ngcontent-%COMP%]{background-color:#3e6ceb!important;height:180px;border:1px solid #3e6ceb!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol1[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#174cdf!important;border:1px solid #174cdf;color:#fff;text-shadow:none;padding-left:10px}.col2[_ngcontent-%COMP%]{background-color:#797e87!important;height:180px;border:1px solid #797e87!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol2[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#5b5b5b!important;border:1px solid #5b5b5b;color:#fff;text-shadow:none;padding-left:10px}.col3[_ngcontent-%COMP%]{background-color:#00bfa5!important;height:180px;border:1px solid #00bfa5!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol3[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#00897b!important;border:1px solid #00897b;color:#fff;text-shadow:none;padding-left:10px}.col4[_ngcontent-%COMP%]{background-color:#ff6e40!important;height:180px;border:1px solid #ff6e40!important;color:#fff!important;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol4[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#f4511e!important;border:1px solid #f4511e;color:#fff;text-shadow:none;padding-left:10px}.col5[_ngcontent-%COMP%]{width:425px;background-color:#fc438c!important;height:220px;border:1px solid #fc438c!important;color:#fff!important;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol5[_ngcontent-%COMP%]{width:423px;text-align:center;height:40px;margin-top:10px;background-color:#e90f65!important;border:1px solid #e90f65;color:#fff;text-shadow:none;padding-left:10px}.keyvalue[_ngcontent-%COMP%]{width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.keyItem[_ngcontent-%COMP%]{margin-left:10px;text-align:left;width:45%;word-wrap:break-word}.colon[_ngcontent-%COMP%]{width:5%;text-align:center}.valueItem[_ngcontent-%COMP%]{width:45%;text-align:left}.valueItem[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:6px}.valueItem[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{margin-right:0}.unitItem[_ngcontent-%COMP%]{display:inline-block;text-align:left;width:5%}dl[_ngcontent-%COMP%]{display:block;-webkit-margin-before:8px;margin-block-start:8px;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;-moz-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;-moz-margin-end:0;margin-inline-end:0}dd[_ngcontent-%COMP%]{display:block;-webkit-margin-start:0;-moz-margin-start:0;margin-inline-start:0}.headerClass[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#174cdf!important;border:1px solid #174cdf;color:#fff;text-shadow:none;padding-left:10px}.headerData[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;line-height:40px}.redClass[_ngcontent-%COMP%]{color:red}.greenClass[_ngcontent-%COMP%]{color:#58f150}.product[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{margin-bottom:20px}.product[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%]{border-radius:2px;position:absolute;top:0;left:0;bottom:55px;right:0;background:rgba(0,0,0,.15);z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.product[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-content[_ngcontent-%COMP%]{position:relative;margin:auto;width:100%;display:block}.product[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-content[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border-radius:2px;height:90vh;width:100%;font-size:10px}@media (max-width:600px){.product[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]{height:200%}.product[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{margin-bottom:20px}.product[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%]{border-radius:2px;position:absolute;top:0;left:0;bottom:55px;right:0;background:rgba(0,0,0,.15);z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.product[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-content[_ngcontent-%COMP%]{position:relative;margin:auto;width:100%;display:block}.product[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-content[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border-radius:2px;max-height:100%;width:100%;font-size:10px}}.product[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:500px;min-width:300px}.product[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:700;text-align:center}.product[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]{text-align:center}.product[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{overflow:auto;max-height:500px}.product[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]{display:none}@media (max-width:600px){.product[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]{width:100px;display:inline-block;font-weight:700;font-size:10px;margin-right:30px}.product[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:none}.product[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:start;padding:8px 24px}}"]],data:{}});function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"div",[["fxLayout",""],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,u.g,[u.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"]},null),t["\u0275did"](2,737280,null,0,u.f,[u.l,t.ElementRef,t.Renderer2,[2,u.g]],{align:[0,"align"]},null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](4,0,null,null,1,"app-spinner",[],null,null,null,o.b,o.a)),t["\u0275did"](5,49152,null,0,a.a,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n    "]))],function(l,n){l(n,1,0,""),l(n,2,0,"center")},null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"error",[],[[8,"hidden",0]],null,null,r.b,r.a)),t["\u0275did"](1,49152,null,0,i.a,[],{errMessage:[0,"errMessage"]},null)],function(l,n){l(n,1,0,n.component.errMessage)},function(l,n){l(n,0,0,n.component.Errormsg)})}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"summary-highlight",[["color","#3e6ceb"],["entity","production"],["type","strip"]],null,null,null,c.b,c.a)),t["\u0275did"](1,114688,null,0,p.a,[s.a],{machineID:[0,"machineID"],type:[1,"type"],entity:[2,"entity"],color:[3,"color"]},null)],function(l,n){l(n,1,0,n.component.machineID,"strip","production","#3e6ceb")},null)}function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"canvas",[["baseChart",""],["chartType","bar"]],null,null,null,null,null)),t["\u0275did"](1,737280,null,0,m.BaseChartDirective,[t.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},null)],function(l,n){var e=n.component;l(n,1,0,e.barChartData,e.barChartLabels,e.barChartOptions,"bar",e.chartColors,e.barChartLegend)},null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,20,"div",[],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,g.q,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](2,{"margin-bottom":0}),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](5,16384,null,0,g.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](7,0,null,null,12,"mat-card",[["class","chart mat-card"]],null,null,null,f.d,f.a)),t["\u0275did"](8,49152,null,0,h.a,[],null,null),(l()(),t["\u0275ted"](-1,0,["\n                "])),(l()(),t["\u0275eld"](10,0,null,0,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](11,16384,null,0,h.b,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275eld"](13,0,null,null,4,"div",[["class","chart-content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,H)),t["\u0275did"](16,16384,null,0,g.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,0,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n        "]))],function(l,n){var e=n.component;l(n,1,0,l(n,2,0,"20px")),l(n,5,0,e.machineID),l(n,16,0,e.barChartData)},null)}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](2,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["color","primary"],["mode","indeterminate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0]],null,null,b.b,b.a)),t["\u0275did"](3,49152,null,0,x.a,[t.ElementRef],{color:[0,"color"],mode:[1,"mode"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "]))],function(l,n){l(n,3,0,"primary","indeterminate")},function(l,n){l(n,2,0,t["\u0275nov"](n,3).value,t["\u0275nov"](n,3).mode)})}function G(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,["Start Date-Time"]))],null,null)}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Start Date-Time"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.startDate)})}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,["End Date-Time"]))],null,null)}function B(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["End Date-Time"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.endDate)})}function W(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Total Products(pkts)"]))],null,null)}function X(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Total Products(pkts)"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.perHrsTotalProduction)})}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Good Products(pkts) "]))],null,null)}function J(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Good Products(pkts)"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.perHrsGoodProduction)})}function K(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.d,[P.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Rejected Products(pkts) "]))],null,null)}function Y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,C.a,[P.d,t.ElementRef],null,null),(l()(),t["\u0275eld"](2,0,null,null,1,"span",[["class","mobile-label"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Rejected Products(pkts)"])),(l()(),t["\u0275ted"](4,null,[""," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.perHrsRejectProduction)})}function U(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,y.d,y.a)),t["\u0275did"](1,49152,null,0,C.f,[],null,null)],null,null)}function Q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,y.e,y.b)),t["\u0275did"](1,49152,null,0,C.h,[],null,null)],null,null)}function ll(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{paginator:0}),(l()(),t["\u0275eld"](1,0,null,null,127,"div",[["class","product"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](3,0,null,null,6,"div",[["fxLayout",""],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](4,737280,null,0,u.g,[u.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"]},null),t["\u0275did"](5,737280,null,0,u.f,[u.l,t.ElementRef,t.Renderer2,[2,u.g]],{align:[0,"align"]},null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](7,0,null,null,1,"h2",[["class","mat-h2"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Production"])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](11,0,null,null,2,"selection",[["dashboardtype","production_dashboard"]],null,[[null,"select"]],function(l,n,e){var t=!0;return"select"===n&&(t=!1!==l.component.onSelect(e)&&t),t},M.b,M.a)),t["\u0275prd"](512,null,s.a,s.a,[w.a,O.a]),t["\u0275did"](13,114688,null,0,_.a,[O.a,v.k,s.a,k.a,R.b],{dashboardtype:[0,"dashboardtype"]},{select:"select"}),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,z)),t["\u0275did"](16,16384,null,0,g.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](19,16384,null,0,g.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](21,0,null,null,106,"section",[],[[8,"hidden",0]],null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](24,16384,null,0,g.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n        "])),(l()(),t["\u0275eld"](26,0,null,null,100,"div",[["class","example-container mat-elevation-z8"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n\n            "])),(l()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](29,16384,null,0,g.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n            "])),(l()(),t["\u0275eld"](31,0,null,null,88,"mat-table",[["class","mat-table"]],null,null,null,y.f,y.c)),t["\u0275did"](32,2342912,[["productionTable",4]],3,C.j,[t.IterableDiffers,t.ChangeDetectorRef,t.ElementRef,[8,null]],{dataSource:[0,"dataSource"]},null),t["\u0275qud"](603979776,2,{_contentColumnDefs:1}),t["\u0275qud"](603979776,3,{_contentRowDefs:1}),t["\u0275qud"](335544320,4,{_headerRowDef:0}),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](37,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](38,16384,null,2,C.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,5,{cell:0}),t["\u0275qud"](335544320,6,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[C.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,G)),t["\u0275did"](44,16384,null,0,C.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[6,4]],P.f,null,[C.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,V)),t["\u0275did"](48,16384,null,0,C.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[5,4]],P.b,null,[C.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275eld"](52,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](53,16384,null,2,C.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,7,{cell:0}),t["\u0275qud"](335544320,8,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[C.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,Z)),t["\u0275did"](59,16384,null,0,C.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[8,4]],P.f,null,[C.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,B)),t["\u0275did"](63,16384,null,0,C.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[7,4]],P.b,null,[C.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275eld"](67,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](68,16384,null,2,C.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,9,{cell:0}),t["\u0275qud"](335544320,10,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[C.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,W)),t["\u0275did"](74,16384,null,0,C.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[10,4]],P.f,null,[C.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,X)),t["\u0275did"](78,16384,null,0,C.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[9,4]],P.b,null,[C.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275eld"](82,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](83,16384,null,2,C.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,11,{cell:0}),t["\u0275qud"](335544320,12,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[C.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,$)),t["\u0275did"](89,16384,null,0,C.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[12,4]],P.f,null,[C.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,J)),t["\u0275did"](93,16384,null,0,C.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[11,4]],P.b,null,[C.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275eld"](97,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](98,16384,null,2,C.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,13,{cell:0}),t["\u0275qud"](335544320,14,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],P.d,null,[C.c]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,K)),t["\u0275did"](104,16384,null,0,C.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[14,4]],P.f,null,[C.e]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,Y)),t["\u0275did"](108,16384,null,0,C.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[13,4]],P.b,null,[C.b]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n\n                "])),(l()(),t["\u0275and"](0,null,null,2,null,U)),t["\u0275did"](113,540672,null,0,C.g,[t.TemplateRef,t.IterableDiffers],{columns:[0,"columns"]},null),t["\u0275prd"](2048,[[4,4]],P.h,null,[C.g]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275and"](0,null,null,2,null,Q)),t["\u0275did"](117,540672,null,0,C.i,[t.TemplateRef,t.IterableDiffers],{columns:[0,"columns"]},null),t["\u0275prd"](2048,[[3,4]],P.j,null,[C.i]),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](121,0,null,null,4,"mat-paginator",[["class","mat-paginator"],["showFirstLastButtons",""]],null,null,null,D.b,D.a)),t["\u0275did"](122,278528,null,0,g.q,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](123,{color:0,"font-size":1,"font-weigth":2}),t["\u0275did"](124,245760,[[1,4]],0,E.b,[E.c,t.ChangeDetectorRef],{pageSize:[0,"pageSize"],pageSizeOptions:[1,"pageSizeOptions"],showFirstLastButtons:[2,"showFirstLastButtons"]},null),t["\u0275pad"](125,5),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,4,0,""),l(n,5,0,"center"),l(n,13,0,"production_dashboard"),l(n,16,0,e.loadedSpinner),l(n,19,0,e.errMessage),l(n,24,0,!e.empty),l(n,29,0,e.isPaginatorLoading),l(n,32,0,e.dataSource),l(n,38,0,"startDate"),l(n,53,0,"endDate"),l(n,68,0,"perHrsTotalProduction"),l(n,83,0,"perHrsGoodProduction"),l(n,98,0,"perHrsRejectProduction"),l(n,113,0,e.displayedColumns),l(n,117,0,e.displayedColumns),l(n,122,0,l(n,123,0,"#3e6ceb","15px","bold")),l(n,124,0,10,l(n,125,0,5,10,15,25,30),"")},function(l,n){l(n,21,0,n.component.loaded)})}var nl=t["\u0275ccf"]("app-product",j,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-product",[],null,null,null,ll,q)),t["\u0275did"](1,114688,null,0,j,[S,E.c,O.a,v.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),el=e("zI1e"),tl=e("D0Vv"),dl=e("INQx"),ul=e("efkn"),ol=e("9Sd6"),al=e("XHgV"),rl=e("U/+3"),il=e("z7Rf"),cl=e("ItHS"),pl=e("OE0E"),sl=e("1T37"),ml=e("+j5Y"),gl=e("F1jI"),fl=e("6sdf"),hl=e("8tOD"),bl=e("1GLL"),xl=e("a9YB"),Cl=e("Uo70"),Pl=e("kINy"),yl=e("NwsS"),Ml=e("Mcof"),wl=e("7u3n"),Ol=e("7DMc"),_l=function(){},vl=e("gsbp"),kl=e("ZuzD"),Rl=e("bkcK"),Dl=e("AP/s"),El=e("yvW1"),Il=e("q2BM"),Tl=e("4rwD"),Sl=e("TBIh"),jl=e("704W"),ql=e("sqmn"),zl=e("Bp8q"),Ll=e("y/Fr"),Al=e("kJ/S"),Hl=e("6GVX"),Nl=e("j06o"),Fl=e("86rF"),Gl=e("qDvO"),Vl=e("eQTd"),Zl=e("8j6V");e.d(n,"ProductModuleNgFactory",function(){return Bl});var Bl=t["\u0275cmf"](d,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[nl,el.a,tl.a,dl.a,ul.a,ul.b]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.p,g.o,[t.LOCALE_ID,[2,g.A]]),t["\u0275mpd"](6144,ol.b,null,[g.d]),t["\u0275mpd"](4608,ol.c,ol.c,[[2,ol.b]]),t["\u0275mpd"](4608,al.a,al.a,[]),t["\u0275mpd"](4608,rl.k,rl.k,[al.a]),t["\u0275mpd"](4608,rl.j,rl.j,[rl.k,t.NgZone,g.d]),t["\u0275mpd"](136192,rl.d,rl.b,[[3,rl.d],g.d]),t["\u0275mpd"](5120,rl.n,rl.m,[[3,rl.n],[2,rl.l],g.d]),t["\u0275mpd"](5120,rl.i,rl.g,[[3,rl.i],t.NgZone,al.a]),t["\u0275mpd"](5120,il.d,il.a,[[3,il.d],[2,cl.c],pl.c,[2,g.d]]),t["\u0275mpd"](5120,sl.d,sl.b,[[3,sl.d],t.NgZone,al.a]),t["\u0275mpd"](5120,sl.g,sl.f,[[3,sl.g],al.a,t.NgZone]),t["\u0275mpd"](4608,ml.j,ml.j,[sl.d,sl.g,t.NgZone,g.d]),t["\u0275mpd"](5120,ml.f,ml.k,[[3,ml.f],g.d]),t["\u0275mpd"](4608,ml.i,ml.i,[sl.g,g.d]),t["\u0275mpd"](5120,ml.g,ml.n,[[3,ml.g],g.d]),t["\u0275mpd"](4608,ml.d,ml.d,[ml.j,ml.f,t.ComponentFactoryResolver,ml.i,ml.g,t.ApplicationRef,t.Injector,t.NgZone,g.d]),t["\u0275mpd"](5120,ml.l,ml.m,[ml.d]),t["\u0275mpd"](5120,gl.a,gl.b,[ml.d]),t["\u0275mpd"](4608,fl.b,fl.b,[]),t["\u0275mpd"](5120,u.a,u.c,[]),t["\u0275mpd"](4608,u.b,u.b,[u.a]),t["\u0275mpd"](4608,u.k,u.k,[t.NgZone,g.d]),t["\u0275mpd"](5120,u.l,u.j,[[3,u.l],u.b,u.k]),t["\u0275mpd"](5120,u.o,u.n,[[3,u.o],u.k,u.b]),t["\u0275mpd"](5120,hl.c,hl.d,[ml.d]),t["\u0275mpd"](4608,hl.e,hl.e,[ml.d,t.Injector,[2,g.j],[2,hl.b],hl.c,[3,hl.e],ml.f]),t["\u0275mpd"](4608,bl.g,bl.g,[]),t["\u0275mpd"](5120,bl.a,bl.b,[ml.d]),t["\u0275mpd"](5120,xl.c,xl.d,[[3,xl.c]]),t["\u0275mpd"](4608,Cl.d,Cl.d,[]),t["\u0275mpd"](5120,Pl.b,Pl.h,[ml.d]),t["\u0275mpd"](6144,Cl.h,null,[t.LOCALE_ID]),t["\u0275mpd"](4608,Cl.c,Cl.y,[[2,Cl.h]]),t["\u0275mpd"](5120,yl.a,yl.b,[ml.d]),t["\u0275mpd"](4608,Ml.d,Ml.d,[al.a]),t["\u0275mpd"](135680,Ml.a,Ml.a,[Ml.d,t.NgZone]),t["\u0275mpd"](5120,wl.b,wl.c,[ml.d]),t["\u0275mpd"](5120,E.c,E.a,[[3,E.c]]),t["\u0275mpd"](4608,R.b,R.b,[ml.d,rl.n,t.Injector,Ml.a,[3,R.b]]),t["\u0275mpd"](4608,pl.f,Cl.e,[[2,Cl.i],[2,Cl.n]]),t["\u0275mpd"](4608,Ol.z,Ol.z,[]),t["\u0275mpd"](4608,Ol.f,Ol.f,[]),t["\u0275mpd"](4608,s.a,s.a,[w.a,O.a]),t["\u0275mpd"](4608,S,S,[O.a,w.a]),t["\u0275mpd"](512,g.c,g.c,[]),t["\u0275mpd"](512,v.n,v.n,[[2,v.s],[2,v.k]]),t["\u0275mpd"](512,_l,_l,[]),t["\u0275mpd"](512,m.ChartsModule,m.ChartsModule,[]),t["\u0275mpd"](512,ol.a,ol.a,[]),t["\u0275mpd"](256,Cl.f,!0,[]),t["\u0275mpd"](512,Cl.n,Cl.n,[[2,Cl.f]]),t["\u0275mpd"](512,al.b,al.b,[]),t["\u0275mpd"](512,Cl.x,Cl.x,[]),t["\u0275mpd"](512,rl.a,rl.a,[]),t["\u0275mpd"](512,vl.c,vl.c,[]),t["\u0275mpd"](512,il.c,il.c,[]),t["\u0275mpd"](512,i.b,i.b,[]),t["\u0275mpd"](512,kl.b,kl.b,[]),t["\u0275mpd"](512,Cl.v,Cl.v,[]),t["\u0275mpd"](512,Cl.t,Cl.t,[]),t["\u0275mpd"](512,Rl.g,Rl.g,[]),t["\u0275mpd"](512,sl.c,sl.c,[]),t["\u0275mpd"](512,ml.h,ml.h,[]),t["\u0275mpd"](512,gl.c,gl.c,[]),t["\u0275mpd"](512,fl.c,fl.c,[]),t["\u0275mpd"](512,Dl.c,Dl.c,[]),t["\u0275mpd"](512,P.l,P.l,[]),t["\u0275mpd"](512,u.m,u.m,[]),t["\u0275mpd"](512,u.e,u.e,[]),t["\u0275mpd"](512,h.d,h.d,[]),t["\u0275mpd"](512,hl.j,hl.j,[]),t["\u0275mpd"](512,bl.h,bl.h,[]),t["\u0275mpd"](512,El.c,El.c,[]),t["\u0275mpd"](512,Il.b,Il.b,[]),t["\u0275mpd"](512,Cl.o,Cl.o,[]),t["\u0275mpd"](512,Tl.b,Tl.b,[]),t["\u0275mpd"](512,Sl.d,Sl.d,[]),t["\u0275mpd"](512,jl.b,jl.b,[]),t["\u0275mpd"](512,ql.d,ql.d,[]),t["\u0275mpd"](512,Pl.f,Pl.f,[]),t["\u0275mpd"](512,Cl.z,Cl.z,[]),t["\u0275mpd"](512,Cl.q,Cl.q,[]),t["\u0275mpd"](512,yl.d,yl.d,[]),t["\u0275mpd"](512,Ml.c,Ml.c,[]),t["\u0275mpd"](512,wl.e,wl.e,[]),t["\u0275mpd"](512,E.d,E.d,[]),t["\u0275mpd"](512,zl.b,zl.b,[]),t["\u0275mpd"](512,Ll.c,Ll.c,[]),t["\u0275mpd"](512,Al.h,Al.h,[]),t["\u0275mpd"](512,R.d,R.d,[]),t["\u0275mpd"](512,C.l,C.l,[]),t["\u0275mpd"](512,Hl.i,Hl.i,[]),t["\u0275mpd"](512,Nl.b,Nl.b,[]),t["\u0275mpd"](512,x.b,x.b,[]),t["\u0275mpd"](512,Fl.a,Fl.a,[]),t["\u0275mpd"](512,Gl.a,Gl.a,[]),t["\u0275mpd"](512,Ol.w,Ol.w,[]),t["\u0275mpd"](512,Ol.k,Ol.k,[]),t["\u0275mpd"](512,Ol.u,Ol.u,[]),t["\u0275mpd"](512,_.b,_.b,[]),t["\u0275mpd"](512,a.b,a.b,[]),t["\u0275mpd"](512,Vl.a,Vl.a,[]),t["\u0275mpd"](512,p.b,p.b,[]),t["\u0275mpd"](512,Zl.a,Zl.a,[]),t["\u0275mpd"](512,d,d,[]),t["\u0275mpd"](1024,v.i,function(){return[[{path:"",component:j},{path:":machineName",component:j}]]},[]),t["\u0275mpd"](256,Pl.a,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[]),t["\u0275mpd"](256,Cl.g,Cl.k,[]),t["\u0275mpd"](256,wl.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,Al.a,!1,[])])})}});