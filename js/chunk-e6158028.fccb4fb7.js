(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6158028"],{6407:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!a.pages.has_pre},on:{click:function(t){return t.preventDefault(),a.updatePage(a.pages.current_page-1)}}},[a._m(0)]),a._l(a.pages.total_pages,(function(t){return e("li",{key:t,staticClass:"page-item",class:{active:a.pages.current_page===t},on:{click:function(e){return e.preventDefault(),a.updatePage(t)}}},[e("a",{staticClass:"page-link",attrs:{href:"#"}},[a._v(a._s(t))])])})),e("li",{staticClass:"page-item",class:{disabled:!a.pages.has_next},on:{click:function(t){return t.preventDefault(),a.updatePage(a.pages.current_page+1)}}},[a._m(1)])],2)])])},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("«")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("»")])])}],n={name:"page",props:["pages"],methods:{updatePage:function(a){this.$emit("emitPage",a)}}},s=n,d=e("2877"),l=Object(d["a"])(s,i,o,!1,null,null,null);t["a"]=l.exports},c2da:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"backAdopt"},[e("loading",{attrs:{active:a.isLoading},on:{"update:active":function(t){a.isLoading=t}}},[e("div",{staticClass:"loadingio-spinner-spin-vr67c069ls"},[e("div",{staticClass:"ldio-i4ihhev39wf"},[e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")])])])]),e("div",{staticClass:"backAdopt-wrap"},[e("div",{staticClass:"backAdopt-wrap-add"},[e("button",{staticClass:"btn-second",attrs:{type:"button","data-toggle":"modal","data-target":"#AdoptModal"},on:{click:function(t){t.preventDefault(),a.openModal(a.isNew=!0)}}},[a._v(" 新增動物 ")])]),e("div",{staticClass:"backAdopt-wrap-content"},a._l(a.data,(function(t,i){return e("div",{key:i,staticClass:"backAdopt-wrap-content-item"},[e("div",[e("img",{staticStyle:{height:"170px"},attrs:{src:t.image,alt:""}}),e("div",{staticClass:"backAdopt-wrap-content-item-info"},[e("p",[a._v("名字 : "+a._s(t.title))]),e("p",[a._v("種類 : "+a._s(t.category))]),e("p",[a._v("性別 : "+a._s(t.unit))]),e("p",[a._v("價錢 : "+a._s(t.price))]),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn-main",attrs:{"data-toggle":"modal","data-target":"#delModal"},on:{click:function(e){return e.preventDefault(),a.openDelmodal(t)}}},[a._v(" 刪除 ")]),e("button",{staticClass:"btn-second",on:{click:function(e){e.preventDefault(),a.openModal(a.isNew=!1,t)}}},[a._v(" 修改 ")])])])])])})),0)]),e("div",{staticClass:"d-flex justify-content-center mb-3"},[a.paginShow?e("pagination",{attrs:{pages:a.pagination},on:{emitPage:a.getAdopt}}):a._e()],1),e("div",{staticClass:"modal fade",attrs:{id:"AdoptModal",tabindex:"-1",role:"dialog","aria-labelledby":"AdoptModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog adopt-modal",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[a._m(0),e("div",{staticClass:"modal-body adopt-modal-content"},[e("div",[e("label",{attrs:{for:"back_name"}},[a._v("動物性名 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.modalData.title,expression:"modalData.title"}],attrs:{type:"text",id:"back_name"},domProps:{value:a.modalData.title},on:{input:function(t){t.target.composing||a.$set(a.modalData,"title",t.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_category"}},[a._v("分類 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.modalData.category,expression:"modalData.category"}],attrs:{type:"text",id:"back_category"},domProps:{value:a.modalData.category},on:{input:function(t){t.target.composing||a.$set(a.modalData,"category",t.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_unit"}},[a._v("性別 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.modalData.unit,expression:"modalData.unit"}],attrs:{type:"text",id:"back_unit"},domProps:{value:a.modalData.unit},on:{input:function(t){t.target.composing||a.$set(a.modalData,"unit",t.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_price"}},[a._v("原價 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.modalData.price,expression:"modalData.price"}],attrs:{type:"text",id:"back_price"},domProps:{value:a.modalData.price},on:{input:function(t){t.target.composing||a.$set(a.modalData,"price",t.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_origin_price"}},[a._v("售價 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.modalData.origin_price,expression:"modalData.origin_price"}],attrs:{type:"text",id:"back_origin_price"},domProps:{value:a.modalData.origin_price},on:{input:function(t){t.target.composing||a.$set(a.modalData,"origin_price",t.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_description"}},[a._v("詳細說明 : ")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.modalData.description,expression:"modalData.description"}],attrs:{name:"",id:"back_description",cols:"30",rows:"10"},domProps:{value:a.modalData.description},on:{input:function(t){t.target.composing||a.$set(a.modalData,"description",t.target.value)}}})]),e("div",[e("label",{attrs:{for:"back_content"}},[a._v("備註 : ")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.modalData.content,expression:"modalData.content"}],attrs:{name:"",id:"back_content",cols:"30",rows:"10"},domProps:{value:a.modalData.content},on:{input:function(t){t.target.composing||a.$set(a.modalData,"content",t.target.value)}}})]),e("div",{staticClass:"flex-column"},[e("div",[e("label",{attrs:{for:"back_images"}},[a._v("上傳圖片 : ")]),e("input",{ref:"files",attrs:{type:"file",id:"back_images"},on:{change:a.uploadfile}}),e("div",{staticClass:"d-flex align-items-center mb-3 mt-2"},[e("label",{attrs:{for:"back_imageUrl"}},[a._v("圖片網址 : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.modalData.image,expression:"modalData.image"}],attrs:{type:"text",id:"back_imageUrl"},domProps:{value:a.modalData.image},on:{input:function(t){t.target.composing||a.$set(a.modalData,"image",t.target.value)}}})]),e("img",{attrs:{src:a.modalData.image,alt:""}})])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn-main",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),a.updateAdopt(a.modalData.id)}}},[a._v(" 確定 ")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"delModal","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog del-modal",attrs:{role:"document"}},[e("div",{staticClass:"modal-content del-modal-content"},[e("div",{staticClass:"modal-body del-modal-body"},[a._v(" 請問你是否要刪除 "),e("span",[a._v(a._s(a.modalData.title))]),a._v(" ? ")]),e("div",{staticClass:"del-modal-content-btn"},[e("button",{staticClass:"btn-main",attrs:{type:"button","data-dismiss":"modal"}},[a._v(" 取消 ")]),e("button",{staticClass:"btn-second mt-0",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),a.delAdopt(a.modalData.id)}}},[a._v(" 確定 ")])])])])])],1)},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"AdoptModal"}},[a._v("新增領養動物資訊")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[a._v("×")])])])}],n=e("ed2b"),s=n["a"],d=e("2877"),l=Object(d["a"])(s,i,o,!1,null,null,null);t["default"]=l.exports},ed2b:function(a,t,e){"use strict";(function(a){e("99af");var i=e("6407");t["a"]={name:"backendAdopt",components:{pagination:i["a"]},data:function(){return{data:[],modalData:[],isNew:!1,isLoading:!1,pagination:{},paginShow:!1}},methods:{getAdopt:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/products?page=").concat(a),e=this;e.isLoading=!0,e.$http.get(t).then((function(a){e.pagination=a.data.pagination,e.data=a.data.products,e.isLoading=!1,console.log(a),a.data.success&&(e.paginShow=!0)}))},openModal:function(t,e){var i=this;t?(i.modalData={},i.isNew=!0):(i.modalData=Object.assign({},e),i.isNew=!1),a("#AdoptModal").modal("show")},updateAdopt:function(){var t=this;if(t.isLoading=!0,t.isNew){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/product/");t.$http.post(e,{data:t.modalData}).then((function(e){e.data.success&&t.getAdopt(),t.isLoading=!1,a("#AdoptModal").modal("hide")}))}else{var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/product/").concat(t.modalData.id);t.$http.put(i,{data:t.modalData}).then((function(e){e.data.success&&t.getAdopt(),t.isLoading=!1,a("#AdoptModal").modal("hide")}))}},uploadfile:function(){var a=this.$refs.files.files[0],t=this,e=new FormData;e.append("file-to-upload",a),t.isLoading=!0;var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/upload");t.$http.post(i,e,{header:{"Content-Type":"multipart/form-data"}}).then((function(a){a.data.success?t.$set(t.modalData,"image",a.data.imageUrl):console.log("error"),t.isLoading=!1}))},openDelmodal:function(t){var e=this;e.modalData=Object.assign({},t),a("#delModal").modal("show")},delAdopt:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/admin/product/").concat(t.modalData.id);t.isLoading=!0,t.$http.delete(e).then((function(e){e.data.success?t.getAdopt():console.log("error"),a("#delModal").modal("hide"),t.isLoading=!1}))}},created:function(){var a=this;a.getAdopt()}}}).call(this,e("1157"))}}]);
//# sourceMappingURL=chunk-e6158028.fccb4fb7.js.map