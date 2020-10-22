webpackJsonp([41],{"123l":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("WT6e"),a=function(){},d=e("RsmO"),o=e("nyDa"),r=e("Wpp4"),u=e("Z9HN"),i=e("Yf9w"),c=e("aqfx"),m=e("eobq"),p=e("G4M3"),s=e("mu/C"),g=e("1OzB"),f=e("GRaa"),h=e("W91W"),b=e("XMYV"),x=e("9zSE"),C=e("0GeU"),O=e("q2BM"),y=e("a9YB"),M=e("U/+3"),_=e("Xjw4"),v=e("DGGb"),k=e("ve9G"),w=e("E5Zk"),P=e("Alnm"),D=e("bfOx"),R=e("cmqK"),I=e("p5vt"),E=e("DUFE"),j=e("mBZL"),F=e("M4fF"),T=function(){return function(l,n){var e=this;this.error=l,this.rest=n,this.getProductAlarmCount=function(l){return e.rest.get("alarmCountInformation/"+l)},this.getProductAlarmDetails=function(l){return e.rest.get("alarmInformation/"+l)},this.getErrorMessage=function(l){return e.error.getErrorMessage(l)},this.getTableData=function(l){var n=Object(F.groupBy)(l,"alarmName"),t=[];return Object.keys(n).forEach(function(l,a){var d=e.sortBy(n[l],"alarmOntime");t.push({open:0===a,type:l.toUpperCase()+" ("+n[l].length+")",data:new E.x(d)})}),t},this.getChartData=function(l){var n,t="",a=[];if(l&&l.length>0)for(var d=e.sortBy(l,"alarmCount"),o=d.length,r=0;r<(o>10?10:o);r++){var u=d[r].alarmName;a.push({data:[e.groupedAlarm(d,{alarmName:u})],label:Object(F.capitalize)(u)})}else n=!0,t="No data found.";return{chart:a,empty:n,errMessage:t}},this.getTableColumns=function(){return["alarmName","alarmIntime","alarmOntime"]},this.getChartOptions=function(){return{colors:[{backgroundColor:"#36B3F2"},{backgroundColor:"#517BED"},{backgroundColor:"#FF5725"},{backgroundColor:"#FF7951"},{backgroundColor:"#FF8BB1"},{backgroundColor:"#FFE391"},{backgroundColor:"#33D2CF"},{backgroundColor:"#F1F2F4"},{backgroundColor:"#36B3F2"},{backgroundColor:"#A6CAD8"}],options:{responsive:!0,scales:{xAxes:[{barPercentage:.4}],yAxes:[{ticks:{min:0,userCallback:function(l,n,e){if(Math.floor(l)===l)return l}}}]}}}},this.groupedAlarm=function(l,n){var e=Object(F.find)(l,n);return e?e.alarmCount:0},this.throwError=function(l){return e.error.handleError(l)},this.sortBy=function(l,n,e){return void 0===e&&(e=["desc"]),Object(F.orderBy)(l,n.slice(),e)}}}(),A=function(){function l(l,n,e){this.alarm=l,this._intl=n,this.logout=e,this.chartColors=[],this.chartOptions={},this.displayedColumns=[],this.empty=!0,this.setupChart(),this.displayedColumns=this.alarm.getTableColumns()}return l.prototype.ngOnInit=function(){localStorage.setItem("lastAction",Date.now().toString())},l.prototype.ngOnDestroy=function(){this.subscriber&&this.subscriber.unsubscribe()},l.prototype.onSelect=function(l){this.loaded=!1,this.empty=!1,this.machineID=l.machineID,this.getProductAlarmDetails(l.machineID)},l.prototype.getProductAlarmDetails=function(l){var n=this;void 0!==l?(this.subscriber=this.alarm.getProductAlarmDetails(l).subscribe(function(l){return n.tableData=n.alarm.getTableData(l)},function(l){return n.handleError(l)}),this.subscriber=this.alarm.getProductAlarmCount(l).subscribe(function(l){return n.setChartData(l)},function(l){return n.handleError(l)})):this.handleError("")},l.prototype.handleError=function(l){this.reset(),this.empty=!0,this.errMessage=this.alarm.getErrorMessage(0),this.alarm.throwError(l)},l.prototype.setupChart=function(){var l=this.alarm.getChartOptions();this.chartOptions=l.options,this.chartColors=l.colors},l.prototype.setChartData=function(l){var n=this.alarm.getChartData(l),e=n.chart,t=n.errMessage;this.empty=n.empty,this.chartData=e,this.errMessage=t,this.reset()},l.prototype.reset=function(){this.loaded=!0},l}(),N=e("Z+/l"),z=t["\u0275crt"]({encapsulation:0,styles:[[".col1[_ngcontent-%COMP%]{background-color:#3e6ceb!important;height:180px;border:1px solid #3e6ceb!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol1[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#174cdf!important;border:1px solid #174cdf;color:#fff;text-shadow:none;padding-left:10px}.col2[_ngcontent-%COMP%]{background-color:#797e87!important;height:180px;border:1px solid #797e87!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol2[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#5b5b5b!important;border:1px solid #5b5b5b;color:#fff;text-shadow:none;padding-left:10px}.col3[_ngcontent-%COMP%]{background-color:#00bfa5!important;height:180px;border:1px solid #00bfa5!important;color:#fff;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol3[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#00897b!important;border:1px solid #00897b;color:#fff;text-shadow:none;padding-left:10px}.col4[_ngcontent-%COMP%]{background-color:#ff6e40!important;height:180px;border:1px solid #ff6e40!important;color:#fff!important;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol4[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#f4511e!important;border:1px solid #f4511e;color:#fff;text-shadow:none;padding-left:10px}.col5[_ngcontent-%COMP%]{width:425px;background-color:#fc438c!important;height:220px;border:1px solid #fc438c!important;color:#fff!important;text-shadow:none;padding-left:10px;border-radius:0!important;text-align:center}.headerCol5[_ngcontent-%COMP%]{width:423px;text-align:center;height:40px;margin-top:10px;background-color:#e90f65!important;border:1px solid #e90f65;color:#fff;text-shadow:none;padding-left:10px}.keyvalue[_ngcontent-%COMP%]{width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.keyItem[_ngcontent-%COMP%]{margin-left:10px;text-align:left;width:45%;word-wrap:break-word}.colon[_ngcontent-%COMP%]{width:5%;text-align:center}.valueItem[_ngcontent-%COMP%]{width:45%;text-align:left}.valueItem[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:6px}.valueItem[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{margin-right:0}.unitItem[_ngcontent-%COMP%]{display:inline-block;text-align:left;width:5%}dl[_ngcontent-%COMP%]{display:block;-webkit-margin-before:8px;margin-block-start:8px;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;-moz-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;-moz-margin-end:0;margin-inline-end:0}dd[_ngcontent-%COMP%]{display:block;-webkit-margin-start:0;-moz-margin-start:0;margin-inline-start:0}.headerClass[_ngcontent-%COMP%]{text-align:center;height:40px;margin-top:10px;background-color:#174cdf!important;border:1px solid #174cdf;color:#fff;text-shadow:none;padding-left:10px}.headerData[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;line-height:40px}.redClass[_ngcontent-%COMP%]{color:red}.greenClass[_ngcontent-%COMP%]{color:#58f150}.alarm[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{margin-bottom:20px}.alarm[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%]{border-radius:2px;position:absolute;top:0;left:0;bottom:55px;right:0;background:rgba(0,0,0,.15);z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.alarm[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-content[_ngcontent-%COMP%]{position:relative;margin:auto;width:100%;display:block}.alarm[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-content[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border-radius:2px;height:90vh;width:100%;font-size:10px}@media (max-width:600px){.alarm[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]{height:200%}.alarm[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]{margin-bottom:20px}.alarm[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .loading-shade[_ngcontent-%COMP%]{border-radius:2px;position:absolute;top:0;left:0;bottom:55px;right:0;background:rgba(0,0,0,.15);z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.alarm[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-content[_ngcontent-%COMP%]{position:relative;margin:auto;width:100%;display:block}.alarm[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-content[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{border-radius:2px;max-height:100%;width:100%;font-size:10px}}.alarm[_ngcontent-%COMP%]   .example-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:500px;min-width:300px}.alarm[_ngcontent-%COMP%]   mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:700;text-align:center}.alarm[_ngcontent-%COMP%]   mat-cell[_ngcontent-%COMP%]{text-align:center}.alarm[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{overflow:auto;max-height:500px}.alarm[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]{display:none}@media (max-width:600px){.alarm[_ngcontent-%COMP%]   .mobile-label[_ngcontent-%COMP%]{width:100px;display:inline-block;font-weight:700;font-size:10px;margin-right:30px}.alarm[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%]{display:none}.alarm[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:start;padding:8px 24px}}"]],data:{}});function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](1,0,null,null,6,"div",[["fxLayout",""],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](2,737280,null,0,d.g,[d.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"]},null),t["\u0275did"](3,737280,null,0,d.f,[d.l,t.ElementRef,t.Renderer2,[2,d.g]],{align:[0,"align"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](5,0,null,null,1,"app-spinner",[],null,null,null,o.b,o.a)),t["\u0275did"](6,49152,null,0,r.a,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n    "]))],function(l,n){l(n,2,0,""),l(n,3,0,"center")},null)}function B(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"error",[],null,null,null,u.b,u.a)),t["\u0275did"](1,49152,null,0,i.a,[],{errMessage:[0,"errMessage"]},null)],function(l,n){l(n,1,0,n.component.errMessage)},null)}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,18,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](2,0,null,null,1,"summary-highlight",[["color","#ff6e40"],["entity","alarm"],["type","strip"]],null,null,null,c.b,c.a)),t["\u0275did"](3,114688,null,0,m.a,[p.a],{machineID:[0,"machineID"],type:[1,"type"],entity:[2,"entity"],color:[3,"color"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](5,0,null,null,12,"mat-card",[["class","chart mat-card"]],null,null,null,s.d,s.a)),t["\u0275did"](6,49152,null,0,g.a,[],null,null),(l()(),t["\u0275ted"](-1,0,["\n                "])),(l()(),t["\u0275eld"](8,0,null,0,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](9,16384,null,0,g.b,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275eld"](11,0,null,null,4,"div",[["class","chart-content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275eld"](13,0,null,null,1,"canvas",[["baseChart",""],["chartType","bar"]],null,null,null,null,null)),t["\u0275did"](14,737280,null,0,f.BaseChartDirective,[t.ElementRef],{datasets:[0,"datasets"],options:[1,"options"],chartType:[2,"chartType"],colors:[3,"colors"]},null),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,0,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n        "]))],function(l,n){var e=n.component;l(n,3,0,e.machineID,"strip","alarm","#ff6e40"),l(n,14,0,e.chartData,e.chartOptions,"bar",e.chartColors)},null)}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,h.d,[b.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Name "]))],null,null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,h.a,[b.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](2,null,[""," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.alarmName)})}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,h.d,[b.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" Alarm InTime "]))],null,null)}function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,h.a,[b.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](2,null,[""," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.alarmIntime)})}function G(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,h.d,[b.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](-1,null,[" On Time"]))],null,null)}function W(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),t["\u0275did"](1,16384,null,0,h.a,[b.d,t.ElementRef],null,null),(l()(),t["\u0275ted"](2,null,[""," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.alarmOntime)})}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,x.d,x.a)),t["\u0275did"](1,49152,null,0,h.f,[],null,null)],null,null)}function U(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,x.e,x.b)),t["\u0275did"](1,49152,null,0,h.h,[],null,null)],null,null)}function X(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,16777216,null,null,77,"mat-expansion-panel",[["class","mat-expansion-panel"]],[[2,"mat-expanded",null],[2,"mat-expansion-panel-spacing",null]],null,null,C.d,C.a)),t["\u0275did"](1,1753088,null,1,O.c,[[2,O.a],t.ChangeDetectorRef,y.c,t.ViewContainerRef],{expanded:[0,"expanded"]},null),t["\u0275qud"](335544320,1,{_lazyContent:0}),(l()(),t["\u0275ted"](-1,1,["\n                "])),(l()(),t["\u0275eld"](4,0,null,0,12,"mat-expansion-panel-header",[["class","mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==t["\u0275nov"](l,5)._toggle()&&a),"keydown"===n&&(a=!1!==t["\u0275nov"](l,5)._keydown(e)&&a),a},C.c,C.b)),t["\u0275did"](5,180224,null,0,O.e,[O.c,t.ElementRef,M.i,t.ChangeDetectorRef],null,null),t["\u0275pod"](6,{collapsedHeight:0,expandedHeight:1}),t["\u0275pod"](7,{value:0,params:1}),(l()(),t["\u0275ted"](-1,2,["\n                    "])),(l()(),t["\u0275eld"](9,0,null,0,2,"mat-panel-title",[["class","mat-expansion-panel-header-title"]],null,null,null,null,null)),t["\u0275did"](10,16384,null,0,O.f,[],null,null),(l()(),t["\u0275ted"](11,null,["\n                        ","\n                    "])),(l()(),t["\u0275ted"](-1,2,["\n                    "])),(l()(),t["\u0275eld"](13,0,null,1,2,"mat-panel-description",[["class","mat-expansion-panel-header-description"]],null,null,null,null,null)),t["\u0275did"](14,16384,null,0,O.d,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275ted"](-1,2,["\n                "])),(l()(),t["\u0275ted"](-1,1,["\n              \n                "])),(l()(),t["\u0275eld"](18,0,null,1,58,"mat-table",[["class","mat-table"]],null,null,null,x.f,x.c)),t["\u0275did"](19,2342912,[["table",4]],3,h.j,[t.IterableDiffers,t.ChangeDetectorRef,t.ElementRef,[8,null]],{dataSource:[0,"dataSource"]},null),t["\u0275qud"](603979776,2,{_contentColumnDefs:1}),t["\u0275qud"](603979776,3,{_contentRowDefs:1}),t["\u0275qud"](335544320,4,{_headerRowDef:0}),(l()(),t["\u0275ted"](-1,null,["\n\n                    "])),(l()(),t["\u0275eld"](24,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](25,16384,null,2,h.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,5,{cell:0}),t["\u0275qud"](335544320,6,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],b.d,null,[h.c]),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275and"](0,null,null,2,null,Z)),t["\u0275did"](31,16384,null,0,h.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[6,4]],b.f,null,[h.e]),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275and"](0,null,null,2,null,L)),t["\u0275did"](35,16384,null,0,h.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[5,4]],b.b,null,[h.b]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275ted"](-1,null,["\n                    \n                    "])),(l()(),t["\u0275eld"](39,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](40,16384,null,2,h.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,7,{cell:0}),t["\u0275qud"](335544320,8,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],b.d,null,[h.c]),(l()(),t["\u0275ted"](-1,null,["\n                            "])),(l()(),t["\u0275and"](0,null,null,2,null,V)),t["\u0275did"](46,16384,null,0,h.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[8,4]],b.f,null,[h.e]),(l()(),t["\u0275ted"](-1,null,["\n                            "])),(l()(),t["\u0275and"](0,null,null,2,null,H)),t["\u0275did"](50,16384,null,0,h.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[7,4]],b.b,null,[h.b]),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275ted"](-1,null,["\n\n                    "])),(l()(),t["\u0275eld"](54,0,null,null,13,null,null,null,null,null,null,null)),t["\u0275did"](55,16384,null,2,h.c,[],{name:[0,"name"]},null),t["\u0275qud"](335544320,9,{cell:0}),t["\u0275qud"](335544320,10,{headerCell:0}),t["\u0275prd"](2048,[[2,4]],b.d,null,[h.c]),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275and"](0,null,null,2,null,G)),t["\u0275did"](61,16384,null,0,h.e,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[10,4]],b.f,null,[h.e]),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275and"](0,null,null,2,null,W)),t["\u0275did"](65,16384,null,0,h.b,[t.TemplateRef],null,null),t["\u0275prd"](2048,[[9,4]],b.b,null,[h.b]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275ted"](-1,null,["\n\n                  \n\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,$)),t["\u0275did"](70,540672,null,0,h.g,[t.TemplateRef,t.IterableDiffers],{columns:[0,"columns"]},null),t["\u0275prd"](2048,[[4,4]],b.h,null,[h.g]),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275and"](0,null,null,2,null,U)),t["\u0275did"](74,540672,null,0,h.i,[t.TemplateRef,t.IterableDiffers],{columns:[0,"columns"]},null),t["\u0275prd"](2048,[[3,4]],b.j,null,[h.i]),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,1,["\n             \n            "])),(l()(),t["\u0275and"](0,null,null,0))],function(l,n){var e=n.component;l(n,1,0,n.context.$implicit.open),l(n,19,0,n.context.$implicit.data),l(n,25,0,"alarmName"),l(n,40,0,"alarmIntime"),l(n,55,0,"alarmOntime"),l(n,70,0,e.displayedColumns),l(n,74,0,e.displayedColumns)},function(l,n){l(n,0,0,t["\u0275nov"](n,1).expanded,t["\u0275nov"](n,1)._hasSpacing()),l(n,4,0,t["\u0275nov"](n,5).panel._headerId,t["\u0275nov"](n,5).panel.disabled?-1:0,t["\u0275nov"](n,5)._getPanelId(),t["\u0275nov"](n,5)._isExpanded(),t["\u0275nov"](n,5).panel.disabled,t["\u0275nov"](n,5)._isExpanded(),l(n,7,0,t["\u0275nov"](n,5)._getExpandedState(),l(n,6,0,t["\u0275nov"](n,5).collapsedHeight,t["\u0275nov"](n,5).expandedHeight))),l(n,11,0,n.context.$implicit.type)})}function Y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,11,"section",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](3,16384,null,0,_.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](5,0,null,null,5,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),t["\u0275did"](6,16384,null,0,O.a,[],null,null),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275and"](16777216,null,null,1,null,X)),t["\u0275did"](9,802816,null,0,_.m,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n    "]))],function(l,n){var e=n.component;l(n,3,0,!e.empty),l(n,9,0,e.tableData)},null)}function J(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,19,"div",[["class","alarm"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](2,0,null,null,4,"div",[["fxLayout",""],["fxLayoutAlign","center"]],null,null,null,null,null)),t["\u0275did"](3,737280,null,0,d.g,[d.l,t.ElementRef,t.Renderer2],{layout:[0,"layout"]},null),t["\u0275did"](4,737280,null,0,d.f,[d.l,t.ElementRef,t.Renderer2,[2,d.g]],{align:[0,"align"]},null),(l()(),t["\u0275eld"](5,0,null,null,1,"h2",[["class","mat-h2"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Alarms"])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](0,[["loader",2]],null,0,null,q)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](10,0,null,null,2,"selection",[["dashboardtype","alarm_dashboard"]],null,[[null,"select"]],function(l,n,e){var t=!0;return"select"===n&&(t=!1!==l.component.onSelect(e)&&t),t},v.b,v.a)),t["\u0275prd"](512,null,p.a,p.a,[k.a,w.a]),t["\u0275did"](12,114688,null,0,P.a,[w.a,D.k,p.a,R.a,I.b],{dashboardtype:[0,"dashboardtype"]},{select:"select"}),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,B)),t["\u0275did"](15,16384,null,0,_.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,Y)),t["\u0275did"](18,16384,null,0,_.n,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,3,0,""),l(n,4,0,"center"),l(n,12,0,"alarm_dashboard"),l(n,15,0,e.errMessage),l(n,18,0,e.loaded,t["\u0275nov"](n,8))},null)}var K=t["\u0275ccf"]("app-alarm",A,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-alarm",[],null,null,null,J,z)),t["\u0275did"](1,245760,null,0,A,[T,N.c,j.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Q=e("zI1e"),ll=e("D0Vv"),nl=e("INQx"),el=e("efkn"),tl=e("9Sd6"),al=e("XHgV"),dl=e("z7Rf"),ol=e("ItHS"),rl=e("OE0E"),ul=e("1T37"),il=e("+j5Y"),cl=e("F1jI"),ml=e("6sdf"),pl=e("8tOD"),sl=e("1GLL"),gl=e("Uo70"),fl=e("kINy"),hl=e("NwsS"),bl=e("Mcof"),xl=e("7u3n"),Cl=e("7DMc"),Ol=function(){},yl=e("gsbp"),Ml=e("ZuzD"),_l=e("bkcK"),vl=e("AP/s"),kl=e("yvW1"),wl=e("4rwD"),Pl=e("TBIh"),Dl=e("704W"),Rl=e("sqmn"),Il=e("Bp8q"),El=e("y/Fr"),jl=e("kJ/S"),Fl=e("6GVX"),Tl=e("j06o"),Al=e("Xbny"),Nl=e("86rF"),zl=e("qDvO"),ql=e("eQTd"),Bl=e("8j6V");e.d(n,"AlarmModuleNgFactory",function(){return Sl});var Sl=t["\u0275cmf"](a,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[K,Q.a,ll.a,nl.a,el.a,el.b]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,_.p,_.o,[t.LOCALE_ID,[2,_.A]]),t["\u0275mpd"](6144,tl.b,null,[_.d]),t["\u0275mpd"](4608,tl.c,tl.c,[[2,tl.b]]),t["\u0275mpd"](4608,al.a,al.a,[]),t["\u0275mpd"](4608,M.k,M.k,[al.a]),t["\u0275mpd"](4608,M.j,M.j,[M.k,t.NgZone,_.d]),t["\u0275mpd"](136192,M.d,M.b,[[3,M.d],_.d]),t["\u0275mpd"](5120,M.n,M.m,[[3,M.n],[2,M.l],_.d]),t["\u0275mpd"](5120,M.i,M.g,[[3,M.i],t.NgZone,al.a]),t["\u0275mpd"](5120,dl.d,dl.a,[[3,dl.d],[2,ol.c],rl.c,[2,_.d]]),t["\u0275mpd"](5120,ul.d,ul.b,[[3,ul.d],t.NgZone,al.a]),t["\u0275mpd"](5120,ul.g,ul.f,[[3,ul.g],al.a,t.NgZone]),t["\u0275mpd"](4608,il.j,il.j,[ul.d,ul.g,t.NgZone,_.d]),t["\u0275mpd"](5120,il.f,il.k,[[3,il.f],_.d]),t["\u0275mpd"](4608,il.i,il.i,[ul.g,_.d]),t["\u0275mpd"](5120,il.g,il.n,[[3,il.g],_.d]),t["\u0275mpd"](4608,il.d,il.d,[il.j,il.f,t.ComponentFactoryResolver,il.i,il.g,t.ApplicationRef,t.Injector,t.NgZone,_.d]),t["\u0275mpd"](5120,il.l,il.m,[il.d]),t["\u0275mpd"](5120,cl.a,cl.b,[il.d]),t["\u0275mpd"](4608,ml.b,ml.b,[]),t["\u0275mpd"](5120,d.a,d.c,[]),t["\u0275mpd"](4608,d.b,d.b,[d.a]),t["\u0275mpd"](4608,d.k,d.k,[t.NgZone,_.d]),t["\u0275mpd"](5120,d.l,d.j,[[3,d.l],d.b,d.k]),t["\u0275mpd"](5120,d.o,d.n,[[3,d.o],d.k,d.b]),t["\u0275mpd"](5120,pl.c,pl.d,[il.d]),t["\u0275mpd"](4608,pl.e,pl.e,[il.d,t.Injector,[2,_.j],[2,pl.b],pl.c,[3,pl.e],il.f]),t["\u0275mpd"](4608,sl.g,sl.g,[]),t["\u0275mpd"](5120,sl.a,sl.b,[il.d]),t["\u0275mpd"](5120,y.c,y.d,[[3,y.c]]),t["\u0275mpd"](4608,gl.d,gl.d,[]),t["\u0275mpd"](5120,fl.b,fl.h,[il.d]),t["\u0275mpd"](6144,gl.h,null,[t.LOCALE_ID]),t["\u0275mpd"](4608,gl.c,gl.y,[[2,gl.h]]),t["\u0275mpd"](5120,hl.a,hl.b,[il.d]),t["\u0275mpd"](4608,bl.d,bl.d,[al.a]),t["\u0275mpd"](135680,bl.a,bl.a,[bl.d,t.NgZone]),t["\u0275mpd"](5120,xl.b,xl.c,[il.d]),t["\u0275mpd"](5120,N.c,N.a,[[3,N.c]]),t["\u0275mpd"](4608,I.b,I.b,[il.d,M.n,t.Injector,bl.a,[3,I.b]]),t["\u0275mpd"](4608,rl.f,gl.e,[[2,gl.i],[2,gl.n]]),t["\u0275mpd"](4608,Cl.z,Cl.z,[]),t["\u0275mpd"](4608,Cl.f,Cl.f,[]),t["\u0275mpd"](4608,p.a,p.a,[k.a,w.a]),t["\u0275mpd"](4608,T,T,[w.a,k.a]),t["\u0275mpd"](512,D.n,D.n,[[2,D.s],[2,D.k]]),t["\u0275mpd"](512,Ol,Ol,[]),t["\u0275mpd"](512,_.c,_.c,[]),t["\u0275mpd"](512,f.ChartsModule,f.ChartsModule,[]),t["\u0275mpd"](512,tl.a,tl.a,[]),t["\u0275mpd"](256,gl.f,!0,[]),t["\u0275mpd"](512,gl.n,gl.n,[[2,gl.f]]),t["\u0275mpd"](512,al.b,al.b,[]),t["\u0275mpd"](512,gl.x,gl.x,[]),t["\u0275mpd"](512,M.a,M.a,[]),t["\u0275mpd"](512,yl.c,yl.c,[]),t["\u0275mpd"](512,dl.c,dl.c,[]),t["\u0275mpd"](512,i.b,i.b,[]),t["\u0275mpd"](512,Ml.b,Ml.b,[]),t["\u0275mpd"](512,gl.v,gl.v,[]),t["\u0275mpd"](512,gl.t,gl.t,[]),t["\u0275mpd"](512,_l.g,_l.g,[]),t["\u0275mpd"](512,ul.c,ul.c,[]),t["\u0275mpd"](512,il.h,il.h,[]),t["\u0275mpd"](512,cl.c,cl.c,[]),t["\u0275mpd"](512,ml.c,ml.c,[]),t["\u0275mpd"](512,vl.c,vl.c,[]),t["\u0275mpd"](512,b.l,b.l,[]),t["\u0275mpd"](512,d.m,d.m,[]),t["\u0275mpd"](512,d.e,d.e,[]),t["\u0275mpd"](512,g.d,g.d,[]),t["\u0275mpd"](512,pl.j,pl.j,[]),t["\u0275mpd"](512,sl.h,sl.h,[]),t["\u0275mpd"](512,kl.c,kl.c,[]),t["\u0275mpd"](512,O.b,O.b,[]),t["\u0275mpd"](512,gl.o,gl.o,[]),t["\u0275mpd"](512,wl.b,wl.b,[]),t["\u0275mpd"](512,Pl.d,Pl.d,[]),t["\u0275mpd"](512,Dl.b,Dl.b,[]),t["\u0275mpd"](512,Rl.d,Rl.d,[]),t["\u0275mpd"](512,fl.f,fl.f,[]),t["\u0275mpd"](512,gl.z,gl.z,[]),t["\u0275mpd"](512,gl.q,gl.q,[]),t["\u0275mpd"](512,hl.d,hl.d,[]),t["\u0275mpd"](512,bl.c,bl.c,[]),t["\u0275mpd"](512,xl.e,xl.e,[]),t["\u0275mpd"](512,N.d,N.d,[]),t["\u0275mpd"](512,Il.b,Il.b,[]),t["\u0275mpd"](512,El.c,El.c,[]),t["\u0275mpd"](512,jl.h,jl.h,[]),t["\u0275mpd"](512,I.d,I.d,[]),t["\u0275mpd"](512,h.l,h.l,[]),t["\u0275mpd"](512,Fl.i,Fl.i,[]),t["\u0275mpd"](512,Tl.b,Tl.b,[]),t["\u0275mpd"](512,Al.b,Al.b,[]),t["\u0275mpd"](512,Nl.a,Nl.a,[]),t["\u0275mpd"](512,zl.a,zl.a,[]),t["\u0275mpd"](512,Cl.w,Cl.w,[]),t["\u0275mpd"](512,Cl.k,Cl.k,[]),t["\u0275mpd"](512,Cl.u,Cl.u,[]),t["\u0275mpd"](512,P.b,P.b,[]),t["\u0275mpd"](512,r.b,r.b,[]),t["\u0275mpd"](512,ql.a,ql.a,[]),t["\u0275mpd"](512,m.b,m.b,[]),t["\u0275mpd"](512,Bl.a,Bl.a,[]),t["\u0275mpd"](512,a,a,[]),t["\u0275mpd"](1024,D.i,function(){return[[{path:"",component:A},{path:":machineName",component:A}]]},[]),t["\u0275mpd"](256,fl.a,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[]),t["\u0275mpd"](256,gl.g,gl.k,[]),t["\u0275mpd"](256,xl.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,jl.a,!1,[])])})}});