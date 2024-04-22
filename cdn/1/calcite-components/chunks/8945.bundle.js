/*! For license information please see 8945.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8945],{8945:(e,t,n)=>{n.r(t),n.d(t,{calcite_menu:()=>l,calcite_menu_item:()=>b});var i=n(9113),o=n(7146),s=n(8545),r=n(3213),a=n(8065),c=n(8220);const l=class{constructor(e){(0,i.r)(this,e),this.menuItems=[],this.handleMenuSlotChange=e=>{this.menuItems=(0,o.s)(e),this.setMenuItemLayout(this.menuItems,this.layout)},this.label=void 0,this.layout="horizontal",this.messageOverrides=void 0,this.messages=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleGlobalAttributesChanged(){(0,i.f)(this),this.setMenuItemLayout(this.menuItems,this.layout)}handleLayoutChange(e){this.setMenuItemLayout(this.menuItems,e)}onMessagesChange(){}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}connectedCallback(){(0,r.c)(this),(0,a.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,a.s)(this)}componentDidLoad(){(0,s.a)(this)}disconnectedCallback(){(0,r.d)(this),(0,a.d)(this)}async setFocus(){await(0,s.c)(this),this.el.focus()}calciteInternalNavMenuItemKeyEvent(e){const t=e.target,n=e.detail.children,i=e.detail.event.key;e.stopPropagation(),"ArrowDown"===i?"vertical"===t.layout?(0,o.l)(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&n[0].setFocus():"ArrowUp"===i?"vertical"===this.layout?(0,o.l)(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&n[n.length-1].setFocus():"ArrowRight"===i?"horizontal"===this.layout?(0,o.l)(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&n[0].setFocus():"ArrowLeft"===i?"horizontal"===this.layout?(0,o.l)(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&this.focusParentElement(e.target):"Escape"===i&&this.focusParentElement(e.target),e.preventDefault()}focusParentElement(e){const t=e.parentElement;t&&((0,o.d)(t),t.open=!1)}setMenuItemLayout(e,t){e.forEach((e=>{e.layout=t,"menubar"===this.getEffectiveRole()&&(e.isTopLevelItem=!0,e.topLevelMenuLayout=this.layout)}))}getEffectiveRole(){return this.el.getAttribute("role")||"menubar"}render(){return(0,i.h)(i.H,null,(0,i.h)("ul",{"aria-label":this.label,role:this.getEffectiveRole()},(0,i.h)("slot",{onSlotchange:this.handleMenuSlotChange})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,i.g)(this)}static get watchers(){return{role:["handleGlobalAttributesChanged"],layout:["handleLayoutChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};l.style=":host{display:flex}ul{margin:0px;display:inline-flex;block-size:100%;align-items:center;padding:0px}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}";const h="dropdown-action",u="hover-href-icon",d="icon",m="icon--breadcrumb",v="icon--dropdown",p="icon--end",f="icon--start",b=class{constructor(e){(0,i.r)(this,e),this.calciteInternalMenuItemKeyEvent=(0,i.c)(this,"calciteInternalMenuItemKeyEvent",7),this.calciteMenuItemSelect=(0,i.c)(this,"calciteMenuItemSelect",7),this.clickHandler=e=>{(this.href&&e.target===this.dropdownActionEl||!this.href&&this.hasSubmenu)&&(this.open=!this.open),this.selectMenuItem(e)},this.handleMenuItemSlotChange=e=>{this.submenuItems=(0,o.s)(e),this.submenuItems.forEach((e=>{e.topLevelMenuLayout||(e.topLevelMenuLayout=this.topLevelMenuLayout)})),this.hasSubmenu=this.submenuItems.length>0},this.keyDownHandler=async e=>{const{hasSubmenu:t,href:n,layout:i,open:o,submenuItems:s}=this,r=e.key,a=e.target===this.dropdownActionEl;if(" "===r||"Enter"===r)t&&(!n||n&&a)&&(this.open=!o),n&&a||"Enter"===r||this.selectMenuItem(e),(" "===r||n&&a)&&e.preventDefault();else if("Escape"===r){if(o)return void(this.open=!1);this.calciteInternalMenuItemKeyEvent.emit({event:e}),e.preventDefault()}else if("ArrowDown"===r||"ArrowUp"===r){if(e.preventDefault(),(a||!n)&&t&&!o&&"horizontal"===i)return void(this.open=!0);this.calciteInternalMenuItemKeyEvent.emit({event:e,children:s,isSubmenuOpen:o&&t})}else if("ArrowLeft"===r)e.preventDefault(),this.calciteInternalMenuItemKeyEvent.emit({event:e,children:s,isSubmenuOpen:!0});else if("ArrowRight"===r){if(e.preventDefault(),(a||!n)&&t&&!o&&"vertical"===i)return void(this.open=!0);this.calciteInternalMenuItemKeyEvent.emit({event:e,children:s,isSubmenuOpen:o&&t})}},this.active=void 0,this.breadcrumb=void 0,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.isTopLevelItem=!1,this.label=void 0,this.layout=void 0,this.messageOverrides=void 0,this.messages=void 0,this.open=!1,this.rel=void 0,this.target=void 0,this.text=void 0,this.topLevelMenuLayout=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasSubmenu=!1,this.submenuItems=void 0}onMessagesChange(){}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),this.anchorEl.focus()}handleClickOut(e){"vertical"!==this.topLevelMenuLayout&&this.hasSubmenu&&this.open&&!e.composedPath().includes(this.el)&&(this.open=!1)}handleFocusOut(e){"vertical"===this.topLevelMenuLayout||this.el.contains(e.relatedTarget)||(this.open=!1)}connectedCallback(){(0,r.c)(this),(0,a.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,a.s)(this)}componentDidLoad(){(0,s.a)(this)}disconnectedCallback(){(0,r.d)(this),(0,a.d)(this)}blurHandler(){this.isFocused=!1}focusHandler(e){const t=e.target;this.isFocused=!0,t.open&&!this.open&&(t.open=!1)}selectMenuItem(e){e.target!==this.dropdownActionEl&&this.calciteMenuItemSelect.emit()}renderIconStart(){return(0,i.h)("calcite-icon",{class:`${d} ${f}`,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,key:f,scale:"s"})}renderIconEnd(){return(0,i.h)("calcite-icon",{class:`${d} ${p}`,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,key:p,scale:"s"})}renderBreadcrumbIcon(e){return(0,i.h)("calcite-icon",{class:`${d} ${m}`,icon:"rtl"===e?"chevron-left":"chevron-right",key:m,scale:"s"})}renderDropdownIcon(e){const t="rtl"===e?"chevron-left":"chevron-right";return(0,i.h)("calcite-icon",{class:`${d} ${v}`,icon:"vertical"===this.topLevelMenuLayout||this.isTopLevelItem?this.open?"chevron-up":"chevron-down":t,key:v,scale:"s"})}renderDropdownAction(e){const t="rtl"===e?"chevron-left":"chevron-right";return(0,i.h)("calcite-action",{class:h,icon:"vertical"===this.topLevelMenuLayout||this.isTopLevelItem?this.open?"chevron-up":"chevron-down":t,key:h,onClick:this.clickHandler,onKeyDown:this.keyDownHandler,text:this.messages.open,ref:e=>this.dropdownActionEl=e})}renderSubmenuItems(e){return(0,i.h)("calcite-menu",{class:{"dropdown-menu-items":!0,open:this.open,nested:!this.isTopLevelItem,[c.C.rtl]:"rtl"===e,"dropdown--vertical":"vertical"===this.topLevelMenuLayout},label:this.messages.submenu,layout:"vertical",role:"menu"},(0,i.h)("slot",{name:"submenu-item",onSlotchange:this.handleMenuItemSlotChange}))}renderHrefIcon(e){return(0,i.h)("calcite-icon",{class:u,icon:"rtl"===e?"arrow-left":"arrow-right",key:u,scale:"s"})}renderItemContent(e){const t=this.href&&("vertical"===this.topLevelMenuLayout||!this.isTopLevelItem);return(0,i.h)(i.F,null,this.iconStart&&this.renderIconStart(),(0,i.h)("div",{class:"text-container"},(0,i.h)("span",null,this.text)),t&&this.renderHrefIcon(e),this.iconEnd&&this.renderIconEnd(),this.breadcrumb?this.renderBreadcrumbIcon(e):null,!this.href&&this.hasSubmenu?this.renderDropdownIcon(e):null)}render(){const e=(0,o.g)(this.el);return(0,i.h)(i.H,{onBlur:this.blurHandler,onFocus:this.focusHandler},(0,i.h)("li",{class:{container:!0,"parent--vertical":"vertical"===this.topLevelMenuLayout},role:"none"},(0,i.h)("div",{class:"item-content"},(0,i.h)("a",{"aria-current":!!this.isFocused&&"page","aria-expanded":this.open,"aria-haspopup":this.hasSubmenu,"aria-label":this.label,class:{"layout--vertical":"vertical"===this.layout,content:!0},href:this.href,onClick:this.clickHandler,onKeyDown:this.keyDownHandler,rel:this.rel,role:"menuitem",tabIndex:this.isTopLevelItem?0:-1,target:this.target,ref:e=>this.anchorEl=e},this.renderItemContent(e)),this.href&&this.hasSubmenu?this.renderDropdownAction(e):null),this.renderSubmenuItems(e)))}static get assetsDirs(){return["assets"]}get el(){return(0,i.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};b.style=':host{position:relative;box-sizing:border-box;display:flex;align-items:center;flex-shrink:0}:host .container,:host .item-content,:host .content{min-block-size:3rem}:host([layout=vertical]){inline-size:100%}:host(:not([layout=vertical])){block-size:100%}.container,.item-content{display:flex;block-size:100%;inline-size:100%;flex-direction:row;align-items:stretch}.content{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);padding-inline:1rem;font-size:var(--calcite-font-size-0);color:var(--calcite-color-text-2);outline:2px solid transparent;outline-offset:2px;text-decoration:none;border-block-end:0.125rem solid transparent;padding-block-start:0.125rem}.content:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-2)}.content:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-2);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content:active{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}.content span{display:inline-flex}.content.layout--vertical{display:flex;inline-size:100%;justify-content:flex-start;padding-block:1rem;border-block-end:0;border-inline-end:0.25rem solid transparent}:host([active]) .content{color:var(--calcite-color-text-1);border-color:var(--calcite-color-brand)}:host([active]) .content .icon{--calcite-ui-icon-color:var(--calcite-color-brand)}:host([layout=vertical]) .content{padding-inline:0.75rem}.icon--start{margin-inline-end:0.75rem}.icon--end{margin-inline-start:0.75rem}:host([layout=vertical]) .icon--end{margin-inline-start:auto;padding-inline-start:0.75rem}.icon--dropdown{position:relative;margin-inline-start:auto;margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-ui-icon-color:var(--calcite-color-text-3)}:host([layout=vertical]) .icon--end~.icon--dropdown{margin-inline-start:0.75rem}:host([layout=vertical]) .hover-href-icon{padding-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--end{margin-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--breadcrumb{margin-inline-start:0.75rem}.icon--breadcrumb{margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-ui-icon-color:var(--calcite-color-text-3)}:host([layout=vertical]) .icon--breadcrumb{margin-inline-start:auto}:host([layout=vertical]) .icon--breadcrumb~.icon--dropdown{margin-inline-start:0.5rem}:host([layout=vertical]) .icon--end~.icon--breadcrumb{margin-inline-start:0.5rem}:host([breadcrumb]) .content{padding-inline-end:0.75rem}calcite-action{position:relative;block-size:auto;border-inline-start:1px solid var(--calcite-color-foreground-1)}calcite-action:after{position:absolute;inset-inline-start:-1px;display:block;inline-size:1px;content:"";inset-block:0.75rem;background-color:var(--calcite-color-border-3)}calcite-action:hover:after{block-size:100%;inset-block:0}.content:focus~calcite-action,.content:hover~calcite-action{color:var(--calcite-color-text-1);border-inline-start:1px solid var(--calcite-color-border-3)}.container:hover .dropdown-action{background-color:var(--calcite-color-foreground-2)}.dropdown-menu-items{position:absolute;display:none;block-size:auto;min-inline-size:100%;flex-direction:column;overflow:visible;border:1px solid var(--calcite-color-border-3);background:var(--calcite-color-foreground-1);inset-block-start:100%;z-index:var(--calcite-z-index-dropdown)}.dropdown-menu-items.open{display:block}.dropdown-menu-items.nested{position:absolute;inset-block-start:-1px;transform:translateX(calc(100% - 2px))}.parent--vertical{flex-direction:column}.dropdown--vertical.dropdown-menu-items{position:relative;border-radius:0px;box-shadow:none;inset-block-start:0;transform:none}.dropdown--vertical.dropdown-menu-items:last-of-type{border-inline:0}:host([layout=vertical]:last-of-type) .dropdown-menu-items{border-block-end:0}:host([slot=submenu-item]) .parent--vertical{padding-inline-start:1.5rem}.dropdown-menu-items.nested.calcite--rtl{transform:translateX(calc(-100% + 2px))}.dropdown--vertical.dropdown-menu-items.nested.calcite--rtl{transform:none}.hover-href-icon{position:relative;inset-inline-end:0.25rem;margin-inline-start:auto;opacity:0;transition:all var(--calcite-internal-animation-timing-medium) ease-in-out}.content:focus .hover-href-icon,.content:hover .hover-href-icon{inset-inline-end:-0.25rem;opacity:1}:host([hidden]){display:none}[hidden]{display:none}'},8545:(e,t,n)=>{n.d(t,{a:()=>a,b:()=>c,c:()=>l,s:()=>r});var i=n(9113);const o=new WeakMap,s=new WeakMap;function r(e){s.set(e,new Promise((t=>o.set(e,t))))}function a(e){o.get(e)()}function c(e){return s.get(e)}async function l(e){return await c(e),(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},8065:(e,t,n)=>{n.d(t,{c:()=>u,d:()=>d,s:()=>c,u:()=>h});var i=n(9113),o=n(3213);const s={};function r(){throw new Error("could not fetch component message bundle")}function a(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await l(e,e.effectiveLocale),a(e)}async function l(e,t){const{el:n}=e,a=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return s[n]||(s[n]=fetch((0,i.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||r(),e.json()))).catch((()=>r()))),s[n]}((0,o.g)(t,"t9n"),a)}async function h(e,t){e.defaultMessages=await l(e,t),a(e)}function u(e){e.onMessagesChange=m}function d(e){e.onMessagesChange=void 0}function m(){a(this)}}}]);