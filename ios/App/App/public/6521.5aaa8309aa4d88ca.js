"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6521],{6521:(P,c,r)=>{r.r(c),r.d(c,{ion_input_password_toggle:()=>s});var i=r(4261),l=r(4929),u=r(333),d=r(3992),p=r(9483);const s=(()=>{let a=class{constructor(e){(0,i.r)(this,e),this.togglePasswordVisibility=()=>{const{inputElRef:n}=this;n&&(n.type="text"===n.type?"password":"text")},this.color=void 0,this.showIcon=void 0,this.hideIcon=void 0,this.type="password"}onTypeChange(e){"text"===e||"password"===e||(0,l.p)(`ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${e}" is not compatible.`,this.el)}connectedCallback(){const{el:e}=this,n=this.inputElRef=e.closest("ion-input");n?this.type=n.type:(0,l.p)("No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.",e)}disconnectedCallback(){this.inputElRef=null}render(){var e,n;const{color:h,type:E}=this,g=(0,p.b)(this),I=null!==(e=this.showIcon)&&void 0!==e?e:d.x,b=null!==(n=this.hideIcon)&&void 0!==n?n:d.y,y="text"===E;return(0,i.h)(i.f,{key:"ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d",class:(0,u.c)(h,{[g]:!0})},(0,i.h)("ion-button",{key:"9698eccdaedb86cf12d20acc53660371b3af3c55",mode:g,color:h,fill:"clear",shape:"round","aria-checked":y?"true":"false","aria-label":"show password",role:"switch",type:"button",onPointerDown:C=>{C.preventDefault()},onClick:this.togglePasswordVisibility},(0,i.h)("ion-icon",{key:"1f2119c30b56c800d9af44e6499445a0ebb466cf",slot:"icon-only","aria-hidden":"true",icon:y?b:I})))}get el(){return(0,i.i)(this)}static get watchers(){return{type:["onTypeChange"]}}};return a.style={ios:"",md:""},a})()},333:(P,c,r)=>{r.d(c,{c:()=>u,g:()=>p,h:()=>l,o:()=>_});var i=r(467);const l=(o,t)=>null!==t.closest(o),u=(o,t)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},t):t,p=o=>{const t={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(o).forEach(s=>t[s]=!0),t},f=/^[a-z][a-z0-9+\-.]*:/,_=function(){var o=(0,i.A)(function*(t,s,a,e){if(null!=t&&"#"!==t[0]&&!f.test(t)){const n=document.querySelector("ion-router");if(n)return null!=s&&s.preventDefault(),n.push(t,a,e)}return!1});return function(s,a,e,n){return o.apply(this,arguments)}}()}}]);