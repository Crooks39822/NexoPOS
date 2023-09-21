import{b as u,f as g}from"./components-56572fa4.js";import{c as w}from"./npm~@vue~runtime-dom_-a668b91e.js";import y from"./ns-alert-popup-883dcb0b.js";import C from"./ns-pos-confirm-popup-47015db9.js";import{n as L,a as Q}from"./ns-orders-preview-popup-3b2cd782.js";import U from"./ns-pos-loading-popup-c5c20a52.js";import{n as k}from"./ns-procurement-quantity-f64edfbe.js";import{_ as O,n as V}from"./currency-47ec5b79.js";import{n as A}from"./bootstrap-4befc3ba.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as a,a6 as n,z as m,A as e,c,ax as l,F as q,ac as B,y as _,x as j}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as s}from"./npm~@vue~shared_-82b01912.js";import N from"./ns-prompt-popup-64b67141.js";import{n as z}from"./ns-paginate-881a9632.js";import{x as D}from"./npm~@vue~reactivity_-481192b6.js";import"./ns-avatar-image-b0a3f8ba.js";import"./npm~@dicebear~avatars_-e73ed2cc.js";import"./npm~pure-color-28f75675.js";import"./npm~svgson-a2b86d8a.js";import"./npm~omit-deep-3a616dcc.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-9802c842.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-8dab041c.js";import"./npm~xml-reader-1784d248.js";import"./npm~eventemitter3-c7e30f9c.js";import"./npm~xml-lexer-6516179a.js";import"./npm~@dicebear~avatars-avataaars-sprites_-e47afe24.js";import"./npm~moment-fbc5633a.js";import"./ns-switch-91bfd2af.js";import"./npm~@ckeditor~ckeditor5-vue_-b5744b68.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~vue2-daterange-picker-f17f6b76.js";import"./npm~vuedraggable-90a90e9d.js";import"./npm~sortablejs-9be29f79.js";import"./npm~vue-upload-component-9e5d4563.js";import"./npm~lodash-f7a36ac5.js";import"./ns-numpad-plus-f3ffaa01.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./print-3c0412fa.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";const E={name:"ns-products-preview",props:["popup"],computed:{product(){return this.popup.params.product}},methods:{__:O,nsCurrency:V,changeActiveTab(t){this.active=t,this.active==="units-quantities"&&this.loadProductQuantities()},loadProductQuantities(){this.hasLoadedUnitQuantities=!1,A.get(`/api/products/${this.product.id}/units/quantities`).subscribe(t=>{this.unitQuantities=t,this.hasLoadedUnitQuantities=!0})}},data(){return{active:"units-quantities",unitQuantities:[],hasLoadedUnitQuantities:!1}},mounted(){this.loadProductQuantities()}},F={class:"shadow-lg w-6/7-screen lg:w-3/5-screen h-6/7-screen lg:h-4/5-screen ns-box overflow-hidden flex flex-col"},M={class:"p-2 border-b ns-box-header text-primary text-center font-medium flex justify-between items-center"},R={class:"flex-auto overflow-y-auto ns-box-body"},T={class:"p-2"},H={key:0,class:"table ns-table w-full"},I={class:"p-1 border"},W={width:"150",class:"text-right p-1 border"},G={width:"150",class:"text-right p-1 border"},J={width:"150",class:"text-right p-1 border"},K={class:"p-1 border text-left"},X={class:"p-1 border text-right"},Y={class:"p-1 border text-right"},Z={class:"p-1 border text-right"};function $(t,r,f,et,p,o){const b=a("ns-close-button"),P=a("ns-spinner"),v=a("ns-tabs-item"),x=a("ns-tabs");return n(),m("div",F,[e("div",M,[e("div",null,s(o.__("Previewing :"))+" "+s(o.product.name),1),e("div",null,[c(b,{onClick:r[0]||(r[0]=i=>f.popup.close())})])]),e("div",R,[e("div",T,[c(x,{active:p.active,onActive:r[1]||(r[1]=i=>o.changeActiveTab(i))},{default:l(()=>[c(v,{label:o.__("Units & Quantities"),identifier:"units-quantities"},{default:l(()=>[p.hasLoadedUnitQuantities?(n(),m("table",H,[e("thead",null,[e("tr",null,[e("th",I,s(o.__("Unit")),1),e("th",W,s(o.__("Sale Price")),1),e("th",G,s(o.__("Wholesale Price")),1),e("th",J,s(o.__("Quantity")),1)])]),e("tbody",null,[(n(!0),m(q,null,B(p.unitQuantities,i=>(n(),m("tr",{key:i.id},[e("td",K,s(i.unit.name),1),e("td",X,s(o.nsCurrency(i.sale_price)),1),e("td",Y,s(o.nsCurrency(i.wholesale_price)),1),e("td",Z,s(i.quantity),1)]))),128))])])):_("",!0),p.hasLoadedUnitQuantities?_("",!0):(n(),j(P,{key:1,size:"16",border:"4"}))]),_:1},8,["label"])]),_:1},8,["active"])])])])}const tt=S(E,[["render",$]]),h={nsOrderPreview:L,nsProductPreview:tt,nsAlertPopup:y,nsConfirmPopup:C,nsPromptPopup:N,nsMediaPopup:g,nsProcurementQuantity:k,nsOrdersRefund:Q,nsSelectPopup:z,nsPOSLoadingPopup:U};for(let t in h)window[t]=h[t];const d=w({data(){return{popups:[],defaultClass:"absolute top-0 left-0 w-full h-full flex items-center justify-center is-popup"}},mounted(){nsState.subscribe(t=>{t.popups!==void 0&&(this.popups=D(t.popups),this.$forceUpdate())})},methods:{closePopup(t,r){Object.values(r.target.classList).includes("is-popup")&&t.config!==void 0&&[void 0,!0].includes(t.config.closeOnOverlayClick)&&(r.stopPropagation(),t.close())},preventPropagation(t){t.stopImmediatePropagation()}}});for(let t in u)d.component(t,u[t]);document.addEventListener("DOMContentLoaded",()=>{d.mount("#dashboard-popups"),window.nsPopups=d});