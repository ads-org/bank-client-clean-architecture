(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"i/lw":function(n,t,l){"use strict";l.r(t);var u=l("8Y7J");class c{}var r=l("pMnS"),e=l("AytR"),s=l("IheW");const a=(()=>{class n{constructor(n){this.http=n,this.baseUrl=e.a.baseUrl+"/api/customers/"}createAccount(n,t){return this.http.post(this.baseUrl+n+"/accounts",JSON.stringify(t))}getAccount(n){return this.http.get(this.baseUrl+n+"/accounts")}}return n.ngInjectableDef=u.Cb({factory:function(){return new n(u.Gb(s.c))},token:n,providedIn:"root"}),n})();class o{constructor(n){this.accountService=n}ngOnInit(){}create(){this.accountService.createAccount(this.customerId,this.bankAccount).subscribe(n=>{})}}var b=u.lb({encapsulation:0,styles:[[""]],data:{}});function i(n){return u.Ab(0,[(n()(),u.nb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.zb(-1,null,[" create-accounts works!\n"]))],null,null)}function p(n){return u.Ab(0,[(n()(),u.nb(0,0,null,null,1,"app-create-accounts",[],null,null,null,i,b)),u.mb(1,114688,null,0,o,[a],null,null)],function(n,t){n(t,1,0)},null)}var h=u.jb("app-create-accounts",o,p,{},{},[]);class f{constructor(){}ngOnInit(){}get(){}}var g=u.lb({encapsulation:0,styles:[[""]],data:{}});function v(n){return u.Ab(0,[(n()(),u.nb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.zb(-1,null,[" get-accounts works!\n"]))],null,null)}function d(n){return u.Ab(0,[(n()(),u.nb(0,0,null,null,1,"app-get-accounts",[],null,null,null,v,g)),u.mb(1,114688,null,0,f,[],null,null)],function(n,t){n(t,1,0)},null)}var w=u.jb("app-get-accounts",f,d,{},{},[]),A=l("SVse"),k=l("iInd");class m{}l.d(t,"AccountsModuleNgFactory",function(){return I});var I=u.kb(c,[],function(n){return u.tb([u.ub(512,u.j,u.X,[[8,[r.a,h,w]],[3,u.j],u.v]),u.ub(4608,A.j,A.i,[u.s,[2,A.p]]),u.ub(1073742336,A.b,A.b,[]),u.ub(1073742336,k.m,k.m,[[2,k.r],[2,k.k]]),u.ub(1073742336,m,m,[]),u.ub(1073742336,c,c,[]),u.ub(1024,k.i,function(){return[[{path:"",component:o},{path:"get",component:f}]]},[])])})}}]);