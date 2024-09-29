"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3303],{3303:(J,_,l)=>{l.r(_),l.d(_,{Tab2PageModule:()=>K});var p=l(4742),d=l(177),m=l(4341),C=l(1307),v=l(1667),g=l(5447),f=l(467),e=l(3953),T=l(3241);function y(t,o){if(1&t){const n=e.RV6();e.j41(0,"div")(1,"ion-item",17)(2,"ion-label"),e.EFF(3),e.k0s(),e.j41(4,"ion-label",18),e.EFF(5),e.nI1(6,"currency"),e.k0s(),e.j41(7,"ion-button",19),e.bIt("click",function(){const i=e.eBV(n).index,a=e.XpG();return e.Njj(a.deleteExpense(i))}),e.nrm(8,"ion-icon",20),e.k0s()()()}if(2&t){const n=o.$implicit;e.R7$(3),e.JRh(n.key),e.R7$(2),e.JRh(e.i5U(6,2,n.value,"TND"))}}const I=[{path:"",component:(()=>{var t;class o{constructor(s,i){this.pouchdbService=s,this.toastController=i,this.date=(new Date).toISOString().split("T")[0],this.income=0,this.expenses=[],this.newKey="",this.newValue=null}addExpense(){this.newKey&&null!==this.newValue&&(this.expenses.push({key:this.newKey,value:this.newValue}),this.newKey="",this.newValue=null)}saveRecord(){var s=this;return(0,f.A)(function*(){try{yield s.pouchdbService.addRecord(s.date,s.income,s.expenses),s.showToast("Record saved successfully!"),s.resetForm()}catch{s.showToast("Error saving record.","danger")}})()}resetForm(){this.date=(new Date).toISOString().split("T")[0],this.income=0,this.expenses=[],this.newKey="",this.newValue=null}deleteExpense(s){this.expenses.splice(s,1)}showToast(s,i="success"){var a=this;return(0,f.A)(function*(){(yield a.toastController.create({message:s,mode:"ios",duration:2e3,color:i,position:"top"})).present()})()}}return(t=o).\u0275fac=function(s){return new(s||t)(e.rXU(T.B),e.rXU(p.K_))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-tab2"]],decls:36,vars:7,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"p-fluid"],[1,"input"],["for","date"],["id","date","type","date",1,"p-inputtext",3,"ngModelChange","ngModel"],["for","income"],["id","income","type","number",1,"p-inputtext",3,"ngModelChange","ngModel"],["for","expenseKey"],["id","expenseKey",1,"p-inputtext",3,"ngModelChange","ngModel"],["for","expenseValue"],["id","expenseValue","type","number",1,"p-inputtext",3,"ngModelChange","ngModel"],[2,"width","-webkit-fill-available","margin-top","15px",3,"click"],["name","add","slot","start"],[4,"ngFor","ngForOf"],["mode","ios","lines","none"],["slot","end"],["color","danger","fill","clear","slot","end",3,"click"],["name","trash"]],template:function(s,i){1&s&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Add "),e.k0s()()(),e.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e.EFF(8,"Daily Finance"),e.k0s()()(),e.j41(9,"div",4)(10,"div",5)(11,"label",6),e.EFF(12,"Date:"),e.k0s(),e.j41(13,"input",7),e.mxI("ngModelChange",function(r){return e.DH7(i.date,r)||(i.date=r),r}),e.k0s()(),e.j41(14,"div",5)(15,"label",8),e.EFF(16,"Income"),e.k0s(),e.j41(17,"input",9),e.mxI("ngModelChange",function(r){return e.DH7(i.income,r)||(i.income=r),r}),e.k0s()(),e.j41(18,"div",5),e.nrm(19,"hr"),e.j41(20,"label",10),e.EFF(21,"Title"),e.k0s(),e.j41(22,"input",11),e.mxI("ngModelChange",function(r){return e.DH7(i.newKey,r)||(i.newKey=r),r}),e.k0s(),e.nrm(23,"hr"),e.j41(24,"label",12),e.EFF(25,"Price"),e.k0s(),e.j41(26,"input",13),e.mxI("ngModelChange",function(r){return e.DH7(i.newValue,r)||(i.newValue=r),r}),e.k0s(),e.j41(27,"ion-button",14),e.bIt("click",function(){return i.addExpense()}),e.nrm(28,"ion-icon",15),e.EFF(29,"\nAdd "),e.k0s()(),e.j41(30,"h3",5),e.EFF(31,"Added outcomes:"),e.k0s(),e.DNE(32,y,9,5,"div",16),e.j41(33,"ion-button",14),e.bIt("click",function(){return i.saveRecord()}),e.nrm(34,"ion-icon",15),e.EFF(35,"\nSave "),e.k0s()()()),2&s&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(9),e.R50("ngModel",i.date),e.R7$(4),e.R50("ngModel",i.income),e.R7$(5),e.R50("ngModel",i.newKey),e.R7$(4),e.R50("ngModel",i.newValue),e.R7$(6),e.Y8G("ngForOf",i.expenses))},dependencies:[p.Jm,p.W9,p.eU,p.iq,p.uz,p.he,p.BC,p.ai,d.Sq,m.me,m.Q0,m.BC,m.vS,d.oe],styles:[".p-fluid[_ngcontent-%COMP%]{margin:auto;padding:20px}.input[_ngcontent-%COMP%]{padding:10px;background:#e1e1e1;border-radius:12px;margin-top:15px}"]}),o})()}];let x=(()=>{var t;class o{}return(t=o).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[g.iI.forChild(I),g.iI]}),o})();var b=l(2242),w=l(1141),c=l(4467),P=l(5779),M=l(3306),h=l(461),u=l(4420);let O=(()=>{var t;class o extends h.h{constructor(...s){super(...s),(0,c.A)(this,"pathId",void 0)}ngOnInit(){this.pathId="url(#"+(0,u._Y)()+")"}}return t=o,(0,c.A)(o,"\u0275fac",(()=>{let n;return function(i){return(n||(n=e.xGo(t)))(i||t)}})()),(0,c.A)(o,"\u0275cmp",e.VBU({type:t,selectors:[["ExclamationTriangleIcon"]],standalone:!0,features:[e.Vt3,e.aNF],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(s,i){1&s&&(e.qSk(),e.j41(0,"svg",0)(1,"g"),e.nrm(2,"path",1)(3,"path",2)(4,"path",3),e.k0s(),e.j41(5,"defs")(6,"clipPath",4),e.nrm(7,"rect",5),e.k0s()()()),2&s&&(e.HbH(i.getClassNames()),e.BMQ("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),e.R7$(),e.BMQ("clip-path",i.pathId),e.R7$(5),e.Y8G("id",i.pathId))},encapsulation:2})),o})(),k=(()=>{var t;class o extends h.h{constructor(...s){super(...s),(0,c.A)(this,"pathId",void 0)}ngOnInit(){this.pathId="url(#"+(0,u._Y)()+")"}}return t=o,(0,c.A)(o,"\u0275fac",(()=>{let n;return function(i){return(n||(n=e.xGo(t)))(i||t)}})()),(0,c.A)(o,"\u0275cmp",e.VBU({type:t,selectors:[["InfoCircleIcon"]],standalone:!0,features:[e.Vt3,e.aNF],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(s,i){1&s&&(e.qSk(),e.j41(0,"svg",0)(1,"g"),e.nrm(2,"path",1),e.k0s(),e.j41(3,"defs")(4,"clipPath",2),e.nrm(5,"rect",3),e.k0s()()()),2&s&&(e.HbH(i.getClassNames()),e.BMQ("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),e.R7$(),e.BMQ("clip-path",i.pathId),e.R7$(3),e.Y8G("id",i.pathId))},encapsulation:2})),o})();var V=l(1512);let E=(()=>{var t;class o extends h.h{constructor(...s){super(...s),(0,c.A)(this,"pathId",void 0)}ngOnInit(){this.pathId="url(#"+(0,u._Y)()+")"}}return t=o,(0,c.A)(o,"\u0275fac",(()=>{let n;return function(i){return(n||(n=e.xGo(t)))(i||t)}})()),(0,c.A)(o,"\u0275cmp",e.VBU({type:t,selectors:[["TimesCircleIcon"]],standalone:!0,features:[e.Vt3,e.aNF],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(s,i){1&s&&(e.qSk(),e.j41(0,"svg",0)(1,"g"),e.nrm(2,"path",1),e.k0s(),e.j41(3,"defs")(4,"clipPath",2),e.nrm(5,"rect",3),e.k0s()()()),2&s&&(e.HbH(i.getClassNames()),e.BMQ("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),e.R7$(),e.BMQ("clip-path",i.pathId),e.R7$(3),e.Y8G("id",i.pathId))},encapsulation:2})),o})();var F=l(563);let Y=(()=>{var t;class o{}return t=o,(0,c.A)(o,"\u0275fac",function(s){return new(s||t)}),(0,c.A)(o,"\u0275mod",e.$C({type:t})),(0,c.A)(o,"\u0275inj",e.G2t({imports:[d.MD,F.Z,M.S,k,E,O,V.A,P.Gg]})),o})(),K=(()=>{var t;class o{}return(t=o).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.bv,d.MD,m.YN,C.S,x,v.rO,b.u,w.tm,Y]}),o})()}}]);