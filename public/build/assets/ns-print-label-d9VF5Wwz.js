import{_ as x}from"./currency-Dtag6qPd.js";import{m as P,r as y,o as n,c as l,a as t,C as h,n as k,F as u,b as p,t as o,e as a,B as S,f as v,w as g,i as C,g as w}from"./runtime-core.esm-bundler-BlGpIK2k.js";import{v as $}from"./bootstrap-D4Eb4LmW.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chart-Cjxr_vbl.js";const F=defineComponent({name:"ns-print-label-settings",props:["popup"],template:`
    <div>
        <div class="shadow-lg ns-box w-95vw md:w-2/5-screen">
            <div class="border-b ns-box-body p-2 flex justify-between items-center">
                <h3>{{ __( 'Settings' ) }}</h3>
                <div>
                    <ns-close-button  @click="closePopup()"></ns-close-button>
                </div>
            </div>
            <div class="p-2">
                <ns-field :field="field" :key="index" :ref="field.name" v-for="(field, index) of fields"></ns-field>
            </div>
            <div class="border-t ns-box-footer p-2 flex justify-between">
                <div></div>
                <div>
                    <ns-button type="info" @click="saveSettings()">{{ __( 'Save' ) }}</ns-button>
                </div>
            </div>
        </div>
    </div>
    `,data(){return{fields:[],validation:new FormValidation}},methods:{__,saveSettings(){this.popup.close();const e=this.validation.extractFields(this.fields);this.popup.params.resolve(e)},closePopup(){this.popup.close(),this.popup.params.reject(!1)}},mounted(){const e=this.popup.params.product;this.fields=this.validation.createFields([{label:"Unit",type:"select",name:"selectedUnitQuantity",description:"Choose the unit to apply for the item",options:e.unit_quantities.map(i=>({label:i.unit.name,value:i})),value:e.selectedUnitQuantity||e.unit_quantities[0]},{label:"Unit",type:"select",name:"procurement_id",description:"Choose quantity from procurement",options:e.unit_quantities.map(i=>({label:i.unit.name,value:i})),value:e.procurement_id},{label:"Quantity",type:"number",name:"times",description:"Define how many time the product will be printed",value:e.times||1}]),setTimeout(()=>{this.$refs.times[0].$el.parentNode.querySelector("input").addEventListener("focus",function(){this.select()})},100)}}),T=P({name:"ns-print-label",props:{barcodeurl:{type:String,required:!0},storename:{type:String,required:!0}},computed:{form(){return new FormValidation().extractFields(this.fields)},visibility(){return new FormValidation().extractFields(this.visibilityFields)},itemsStyle(){return{padding:`${this.form.veritcal_padding||0}px ${this.form.horizontal_padding||0}px`}}},data(){return{product_field:[{label:"Product Field",name:"product_barcode",description:"Load Product By barcode"}],resultSuggestions:[],fields:[],search_product:"",searchTimer:null,products:[],itemsToPrint:[],visibilityFields:[],printingPopup:null}},watch:{search_product(){this.search_product.length>0?(clearTimeout(this.searchTimer),this.searchTimer=setTimeout(()=>{this.searchProduct()},500)):this.resultSuggestions=[]}},mounted(){const e=new FormValidation;this.fields=e.createFields([{type:"select",label:"Items Per Row",name:"max_columns",value:1,options:new Array(6).fill("").map((i,r)=>({label:r+1,value:r+1}))},{type:"number",label:"Vertical Padding (pixels)",name:"veritcal_padding"},{type:"number",label:"Horizontal Padding (pixels)",name:"horizontal_padding"},{type:"number",label:"Barcode Height (pixels)",name:"barcode_height",value:30},{type:"number",label:"Document Size (pixels)",name:"document_size",value:""}]),this.visibilityFields=[{type:"checkbox",label:"Show Store Name",name:"show_store_name",value:!0},{type:"checkbox",label:"Show Barcode Text",name:"show_barcode_text",value:!0},{type:"checkbox",label:"Show Product Price",name:"show_product_price",value:!0},{type:"checkbox",label:"Show Product Name",name:"show_product_name",value:!0}]},methods:{__:x,nsCurrency,removeProduct(e){const i=this.products.indexOf(e);this.products.splice(i,1)},print(){const e="menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";this.printingPopup&&this.printingPopup.close(),this.printingPopup=window.open("","printPopup",e);const i=Array.from(document.querySelectorAll("link")).map(c=>c.outerHTML).join(`
`),r=document.getElementById("label-printing-paper");this.printingPopup.document.writeln(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${i}
                <title>Printing Labels</title>
                <style>
                    body {   
                        width: ${this.form.document_size+"px"||"auto"}
                    }
                </style>
            </head>
            <body>
                ${r.outerHTML}
                <script type="text/javascript">window.print()<\/script>
            </body>
            </html>
            `),this.printingPopup.document.writeln(r.outerHTML)},async addProduct(e){try{await this.editProduct(e),this.resultSuggestions=[],this.search_product="",this.products.push(e)}catch(i){console.log(i)}},async editProduct(e){return new Promise(async(i,r)=>{const c=await new Promise((m,b)=>{Popup.show(F,{product:e,resolve:m,reject:b})});return e.selectedUnitQuantity=c.selectedUnitQuantity,e.times=c.times,this.$forceUpdate(),i(e)})},searchProduct(){nsHttpClient.post("/api/products/search",{search:this.search_product}).subscribe(e=>{this.resultSuggestions=e},e=>{nsSnackBar.error(e.message).subscribe()})},applySettings(){this.itemsToPrint=[],this.products.forEach(e=>{const i=new Array(parseInt(e.times)).fill("").map(r=>e);this.itemsToPrint.push(...i)})}}}),j={class:"flex flex-auto overflow-hidden"},Q={class:"flex-auto overflow-y-scroll ns-scrollbar bg-gray-900 p-10"},B={key:0,class:"font-bold text-black text-xl text-center"},z={key:1,class:"flex justify-between py-1"},V={key:2,class:"flex justify-between py-1"},L={key:3,class:"flex justify-between py-1"},q={key:4,class:"flex justify-between py-1"},N={class:"flex justify-center flex-col py-1"},A=["src","alt"],E={class:"flex justify-center w-full"},H={class:"-mt-4 bg-white inline-block p-1"},D={class:"w-1/4 p-4 flex-shrink-0 overflow-y-scroll ns-scrollbar"},I={class:"shadow ns-box mb-4"},M={class:"header border-b ns-box-header p-2"},O={class:"font-semibold"},R={class:"body p-2"},X={class:"input-group info rounded border-2"},Y=["placeholder"],G={key:0,class:"h-0 relative anim-duration-300 fade-in-entrance"},J={class:"shadow-lg ns-vertical-menu absolute w-full z-10"},K=["onClick"],W={class:"font-semibold"},Z={class:"text-xs"},ee={key:1,class:"flex flex-col"},te={class:"font-semibold"},se={class:"flex flex-col"},ie={class:"font-semibold"},oe={class:"text-xs"},ne={class:"flex items-center"},le={class:"flex flex-col"},re=["onClick"],ae=t("i",{class:"las la-cog"},null,-1),de=[ae],ce=["onClick"],ue=t("i",{class:"las la-times"},null,-1),pe=[ue],he={class:"border-t ns-box-footer p-2 flex justify-between"},me=t("i",{class:"las la-print"},null,-1),be={class:"shadow ns-box mb-4"},_e={class:"header border-b ns-box-header p-2"},fe={class:"font-semibold"},ye={class:"body p-2 ns-box-body"},ve={class:"shadow ns-box mb-4"},ge={class:"header border-b ns-box-header p-2"},we={class:"font-semibold"},xe={class:"body p-2 ns-box-body"};function Pe(e,i,r,c,m,b){const _=y("ns-button"),f=y("ns-field");return n(),l("div",j,[t("div",Q,[t("div",{class:"shadow-lg bg-white",id:"label-printing-paper",style:h({width:e.form.document_size+"px"||"auto"})},[t("div",{class:k(["grid","grid-cols-"+(e.form.max_columns||1)])},[(n(!0),l(u,null,p(e.itemsToPrint,s=>(n(),l("div",{class:"item border border-black",style:h(e.itemsStyle)},[e.visibility.show_store_name?(n(),l("h3",B,o(e.storename),1)):a("",!0),e.visibility.show_product_name?(n(),l("div",z,[t("span",null,o(e.__("Product")),1),t("span",null,o(s.name),1)])):a("",!0),e.visibility.show_product_name?(n(),l("div",V,[t("span",null,o(e.__("Unit")),1),t("span",null,o(s.selectedUnitQuantity.unit.name),1)])):a("",!0),e.visibility.show_barcode_text?(n(),l("div",L,[t("span",null,o(e.__("Barcode")),1),t("span",null,o(s.selectedUnitQuantity.barcode),1)])):a("",!0),e.visibility.show_product_price?(n(),l("div",q,[t("span",null,o(e.__("Price")),1),t("span",null,o(e.nsCurrency(s.selectedUnitQuantity.sale_price)),1)])):a("",!0),t("div",N,[t("img",{style:h({height:e.form.barcode_height+"px"}),src:e.barcodeurl+"/"+s.selectedUnitQuantity.barcode+".png",alt:s.selectedUnitQuantity.barcode},null,12,A),t("div",E,[t("span",H,o(s.selectedUnitQuantity.barcode),1)])])],4))),256))],2)],4)]),t("div",D,[t("div",null,[t("div",I,[t("div",M,[t("h3",O,o(e.__("Products")),1)]),t("div",R,[t("div",X,[S(t("input",{"onUpdate:modelValue":i[0]||(i[0]=s=>e.search_product=s),class:"w-full p-2",placeholder:e.__("Search Products...")},null,8,Y),[[$,e.search_product]])]),e.resultSuggestions.length>0?(n(),l("div",G,[t("ul",J,[(n(!0),l(u,null,p(e.resultSuggestions,s=>(n(),l("li",{onClick:d=>e.addProduct(s),class:"border p-2 flex flex-col cursor-pointer",style:{"margin-bottom":"-1px"}},[t("span",W,o(s.name),1),t("span",Z,o(s.barcode),1)],8,K))),256))])])):a("",!0),e.products.length>0?(n(),l("div",ee,[t("h3",te,o(e.__("Included Products")),1),t("ul",null,[(n(!0),l(u,null,p(e.products,s=>(n(),l("li",{key:s.id,class:"border border-box-elevation-edge bg-box-elevation-background p-2 flex justify-between items-center",style:{"margin-bottom":"-1px"}},[t("p",se,[t("span",ie,o(s.name)+" ("+o(s.selectedUnitQuantity.unit.name)+") x"+o(s.times),1),t("span",oe,o(s.selectedUnitQuantity.barcode),1)]),t("div",ne,[t("p",le,[t("button",{onClick:d=>e.editProduct(s),class:"rounded-full flex h-6 w-6 items-center bg-success-primary text-white justify-center"},de,8,re)]),t("div",null,[t("span",{onClick:d=>e.removeProduct(s),class:"ml-1 cursor-pointer bg-error-primary text-white rounded-full h-6 w-6 flex items-center justify-center font-bold"},pe,8,ce)])])]))),128))])])):a("",!0)]),t("div",he,[v(_,{onClick:i[1]||(i[1]=s=>e.print()),type:"success"},{default:g(()=>[me]),_:1}),v(_,{onClick:i[2]||(i[2]=s=>e.applySettings()),type:"info"},{default:g(()=>[C(o(e.__("Apply Settings")),1)]),_:1})])]),t("div",be,[t("div",_e,[t("h3",fe,o(e.__("Basic Settings")),1)]),t("div",ye,[(n(!0),l(u,null,p(e.fields,(s,d)=>(n(),w(f,{field:s,key:d},null,8,["field"]))),128))])]),t("div",ve,[t("div",ge,[t("h3",we,o(e.__("Visibility Settings")),1)]),t("div",xe,[(n(!0),l(u,null,p(e.visibilityFields,(s,d)=>(n(),w(f,{field:s,class:"mb-2",key:d},null,8,["field"]))),128))])])])])])}const Fe=U(T,[["render",Pe]]);export{Fe as default};