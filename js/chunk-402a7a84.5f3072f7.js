(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-402a7a84"],{"4e5c":function(t,a,i){"use strict";(function(t){i("99af"),i("c975"),i("a434");a["a"]={name:"adopt_one",data:function(){return{id:"",data:[],allData:[],favorite:JSON.parse(localStorage.getItem("addfav"))||[],isLoading:!1,adoptVal:0}},methods:{getAdopt:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/product/").concat(t.id);t.isLoading=!0,t.$http.get(a).then((function(a){t.data=a.data.product,t.isLoading=!1}))},getProducts:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/products/all");t.$http.get(a).then((function(a){console.log(a),t.allData=a.data.products,console.log(t.allData)}))},learnmore:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/product/").concat(t),i=this;i.isLoading=!0,i.$http.get(a).then((function(t){i.id=t.data.product.id,i.$router.push("/adopt/".concat(t.data.product.id)),i.getAdopt()}))},editfav:function(t){var a=this,i=a.favorite.indexOf(t.id);-1===i?(a.favorite.push(t.id),a.isLoading=!0,a.favoriteadd=!0):(a.favorite.splice(i,1),a.favoriteadd=!1),localStorage.setItem("addfav",JSON.stringify(a.favorite)),a.isLoading=!1,a.$bus.$emit("favnum",a.favorite.length)},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/cart"),c=this;c.isLoading=!0;var e={product_id:t,qty:a};c.$http.post(i,{data:e}).then((function(t){t.data.success?(c.isLoading=!1,c.getCart(),console.log("success")):(console.log("error"),c.isLoading=!1)}))},getCart:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("shiauanimal","/cart"),a=this;a.isLoading=!0,a.$http.get(t).then((function(t){a.isLoading=!1,a.adoptVal=t.data.data.carts.length,a.$bus.$emit("cartVal",a.adoptVal)}))}},updated:function(){var a=this;a.$refs.slick&&t(".morelike").slick({slidesToShow:4,slidesToScroll:4,dots:!0,responsive:[{breakpoint:1200,settings:{arrows:!0,slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{arrows:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:500,settings:{arrows:!0,slidesToShow:1,slidesToScroll:1}}]})},created:function(){var t=this;t.id=t.$route.params.id,t.getCart(),t.getAdopt(),t.getProducts()}}}).call(this,i("1157"))},"5ec6":function(t,a,i){"use strict";i.r(a);var c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"adopt_one"},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[i("div",{staticClass:"loadingio-spinner-spin-vr67c069ls"},[i("div",{staticClass:"ldio-i4ihhev39wf"},[i("div",[i("div")]),i("div",[i("div")]),i("div",[i("div")]),i("div",[i("div")]),i("div",[i("div")]),i("div",[i("div")]),i("div",[i("div")])])])]),i("div",{staticClass:"backPage"},[i("router-link",{staticClass:"color-main",attrs:{to:"/adopt"}})],1),i("div",{staticClass:"adopt_one-content"},[i("div",{staticClass:"adopt_one-content-img"},[i("img",{attrs:{src:t.data.image,alt:""}})]),i("div",{staticClass:"adopt_one-content-info"},[i("div",[i("p",[t._v("姓名/品種 : "+t._s(t.data.title))]),i("p",[t._v("分類 : "+t._s(t.data.category))]),i("p",[t._v("性別 : "+t._s(t.data.unit))]),i("div",{staticClass:"adopt_one-content-info-notice"},[i("p",[t._v("備註 :")]),i("p",[t._v(t._s(t.data.description))])]),i("div",{staticClass:"adopt_one-content-info-add"},[i("a",{attrs:{href:""},on:{click:function(a){return a.preventDefault(),t.addCart(t.data.id)}}},[t._v("預約領養")]),i("button",{on:{click:function(a){return t.editfav(t.data)}}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"36",viewBox:"0 0 60 55",width:"36"}},[i("g",{attrs:{id:"Page-1",fill:"none","fill-rule":"evenodd"}},[i("g",{staticClass:"addAdopted",class:{adoptadded:-1!==t.favorite.indexOf(t.data.id)},attrs:{id:"029---Pet-Health",fill:"rgb(0,0,0)","fill-rule":"nonzero"}},[i("path",{attrs:{id:"Shape",d:"m44.5 1c-2.1117095.00235057-4.2098296.3378068-6.217.994-1.0701203-1.22169039-2.5996775-1.94391085-4.223-1.994-3.0113285.16336959-5.9902609.70392472-8.867 1.609-.6713244.19637636-1.2935809.53238126-1.826.986-2.4884178-1.0552075-5.1640981-1.59769002-7.867-1.595-8.691 0-15.5 8.4-15.5 19.12 0 11.256 7.278 26.691 27.588 34.106.019.009.039.015.058.022.6666667.244 1.3486667.4773333 2.046.7.0993529.0331844.2032594.0507271.308.052.1049487.0001819.2092562-.0163588.309-.049 1.8881305-.6122298 3.7432824-1.3218471 5.558-2.126.025-.009.051-.005.076-.016s.041-.032.065-.044c17.58-7.865 23.992-22.097 23.992-32.645 0-10.72-6.809-19.12-15.5-19.12zm13.5 19.12c-.1176303 6.0689625-2.0472791 11.9641248-5.541 16.928-2.591-5.752-5.9-10.969-7.692-12.755-1.3044537-1.4498544-2.9648945-2.5339495-4.817-3.145l-.412-2.889c1.7089365-1.1858634 2.6671558-3.1839902 2.522-5.259.0305788-3.27343787-.8275725-6.4938381-2.483-9.318 1.6019484-.45207297 3.2584855-.68155871 4.923-.682 7.57 0 13.5 7.52 13.5 17.12zm-56 0c0-9.6 5.93-17.12 13.5-17.12 2.236619.00392316 4.4531085.42267252 6.537 1.235l-1.951 2.923c-.4143229.62131721-1.0442246 1.0670225-1.768 1.251l-5.807 1.442c-.8588936.2173243-1.4704984.9765297-1.5 1.862-.064 1.7.163 7.375 5.732 9.235.102174.034303.2092215.0518628.317.052 2.949389.0339263 5.8751075.5313322 8.67 1.474l-.244.526c-1.6078346 3.0898276-2.4598228 6.5169724-2.486 10 .0667239 3.8272001 1.4834204 7.5077775 4 10.392v8.465c-18.368-7.228-25-21.373-25-31.737zm11-8.329 2-.5v1.709h-1.968c-.0340179-.4020432-.0447025-.8057202-.032-1.209zm23.156 38.7c-.1048519-.4900418-.1571476-.9898677-.156-1.491-.0521315-2.4835335 1.0677904-4.8467428 3.023-6.379 1.6567991-1.1541931 3.7800313-1.4062355 5.661-.672.3394023.1128959.7132522.0361471.9807241-.201336.2674719-.237483.3879304-.599621.316-.95s-.3253218-.6357681-.6647241-.748664c-2.4920741-.9320098-5.2833511-.5762735-7.462.951-2.4732452 1.9105965-3.901389 4.875088-3.854 8-.0038899.7829213.0970055 1.5628425.3 2.319-1.368.582-2.8 1.13-4.305 1.629-.34-.112-.666-.232-1-.349v-9.599c.0002093-.2645618-.1044287-.5184257-.291-.706-2.3044227-2.5565821-3.6182449-5.8531975-3.704-9.294.0252145-3.1914691.8138449-6.3305613 2.3-9.155l.244-.529c.2294894-.4891242.2475721-1.0511351.05-1.554-.2045596-.5119941-.6106421-.9173534-1.123-1.121-2.970452-1.0438215-6.0907777-1.5980432-9.239-1.641-1.8466721-.6326495-3.2694225-2.1251756-3.813-4h1.581c1.1045695 0 2-.8954305 2-2v-2.2l1.809-.449c1.2049818-.3061856 2.2535946-1.04837402 2.943-2.083l2.337-3.5c.0785063-.11655599.1650498-.22749206.259-.332.3705756-.42819561.8566011-.74064056 1.4-.9 2.6985911-.84530503 5.4895317-1.3610515 8.312-1.536 1.2567393.10358472 2.4046699.7535913 3.14 1.778 1.9248249 2.68418003 2.9282534 5.91971066 2.86 9.222 0 1.914-.682 3.2-2.029 3.812-1.4227316.5432205-3.0012185.5102158-4.4-.092-.381114-.1513089-.631234-.5199486-.631-.93v-6.79c0-.55228475-.4477153-1-1-1s-1 .44771525-1 1v6.79c.0045439 1.2285382.7530983 2.3317959 1.893 2.79 1.4995833.6112872 3.1455704.7691406 4.734.454l.344 2.4c.1126488.7888437.6865411 1.4336355 1.457 1.637 1.5120964.5283904 2.863694 1.4351932 3.926 2.634 1.553 1.544 5.05 6.934 7.737 13.2-4.0063823 4.9727493-9.1206904 8.9391291-14.934 11.582z"}})])])])])])])]),t._m(0)]),t._m(1),t.allData.length>0?i("div",{ref:"slick",staticClass:"morelike"},t._l(t.allData,(function(a,c){return i("div",{key:c,staticClass:"morelike-item"},[i("div",[i("div",{staticClass:"morelike-item-new"},[i("svg",{staticStyle:{"enable-background":"new 0 0 490.688 490.688"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 490.688 490.688","xml:space":"preserve"}},[i("path",{staticStyle:{fill:"#ff9a9e"},attrs:{d:"M462.784,209.088c-7.552-5.568-17.067-12.523-18.219-17.067c0.484-8.796,2.996-17.36,7.339-25.024  c6.656-15.275,13.525-31.104,5.888-44.267c-7.637-13.163-25.003-15.296-41.707-17.067c-8.658-0.058-17.188-2.094-24.939-5.952  c-3.864-7.778-5.893-16.339-5.931-25.024c-1.877-16.704-3.819-33.984-17.067-41.707c-13.248-7.723-29.099-0.96-44.373,5.781  c-7.672,4.341-16.243,6.852-25.045,7.339c-4.608-1.237-11.541-10.667-17.067-18.219c-9.685-13.056-20.587-27.861-36.331-27.861  s-26.645,14.805-36.267,27.861c-5.589,7.573-12.523,17.067-17.067,18.24c-8.794-0.53-17.356-3.038-25.045-7.339  c-15.36-6.763-31.189-13.504-44.309-5.909s-15.317,25.003-17.195,41.813c-0.061,8.655-2.089,17.183-5.931,24.939  c-7.736,3.803-16.233,5.801-24.853,5.845c-16.725,1.877-34.027,3.819-41.728,17.067S32,151.616,38.741,166.912  c4.357,7.689,6.869,16.284,7.339,25.109c-1.237,4.608-10.667,11.563-18.219,17.067C14.805,218.688,0,229.611,0,245.355  s14.805,26.667,27.883,36.267c7.552,5.568,17.067,12.523,18.219,17.067c-0.484,8.796-2.996,17.36-7.339,25.024  c-6.656,15.275-13.525,31.104-5.888,44.267c7.637,13.163,25.003,15.296,41.707,17.067c8.658,0.058,17.188,2.094,24.939,5.952  c3.864,7.778,5.893,16.339,5.931,25.024c1.877,16.704,3.819,33.984,17.067,41.707c13.248,7.723,28.971,0.768,44.267-5.888  c7.749-4.293,16.37-6.773,25.216-7.253c4.608,1.237,11.541,10.667,17.067,18.219c9.621,13.056,20.523,27.861,36.267,27.861  s26.645-14.805,36.267-27.861c5.589-7.573,12.523-17.067,17.067-18.24c8.8,0.498,17.368,3.008,25.045,7.339  c15.275,6.656,31.104,13.483,44.245,5.909c13.141-7.573,15.317-25.003,17.195-41.728c0.061-8.655,2.089-17.183,5.931-24.939  c7.75-3.834,16.271-5.855,24.917-5.909c16.725-1.877,34.027-3.819,41.728-17.067c7.701-13.248,0.747-28.971-5.888-44.267  c-4.343-7.728-6.826-16.362-7.253-25.216c1.237-4.608,10.667-11.563,18.219-17.067c13.056-9.621,27.883-20.544,27.883-36.267  S475.861,218.688,462.784,209.088z"}}),i("g",[i("path",{staticStyle:{fill:"#fafafa"},attrs:{d:"M181.333,298.688c-3.357,0-6.519-1.581-8.533-4.267L128,234.688v53.333   c0,5.891-4.776,10.667-10.667,10.667s-10.667-4.776-10.667-10.667v-85.333c0-5.891,4.776-10.667,10.667-10.667   c3.357,0,6.519,1.581,8.533,4.267l44.8,59.733v-53.333c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667   v85.333c-0.003,4.589-2.942,8.662-7.296,10.112C183.618,298.501,182.48,298.688,181.333,298.688z"}}),i("path",{staticStyle:{fill:"#fafafa"},attrs:{d:"M266.667,298.688H224c-5.891,0-10.667-4.776-10.667-10.667v-85.333   c0-5.891,4.776-10.667,10.667-10.667h42.667c5.891,0,10.667,4.776,10.667,10.667c0,5.891-4.776,10.667-10.667,10.667h-32v64h32   c5.891,0,10.667,4.776,10.667,10.667S272.558,298.688,266.667,298.688z"}}),i("path",{staticStyle:{fill:"#fafafa"},attrs:{d:"M266.667,256.021H224c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h42.667   c5.891,0,10.667,4.776,10.667,10.667S272.558,256.021,266.667,256.021z"}}),i("path",{staticStyle:{fill:"#fafafa"},attrs:{d:"M373.333,298.688c-4.597,0.006-8.681-2.934-10.133-7.296L352,257.749l-11.2,33.643   c-1.363,4.603-5.751,7.633-10.539,7.275c-4.738-0.18-8.788-3.465-9.941-8.064l-21.333-85.333   c-1.426-5.72,2.056-11.513,7.776-12.939c5.72-1.426,11.513,2.056,12.939,7.776l12.437,49.792l9.749-29.248   c2.535-5.591,9.122-8.068,14.713-5.533c2.454,1.113,4.42,3.079,5.533,5.533l9.749,29.248l12.437-49.792   c1.426-5.72,7.218-9.202,12.939-7.776c5.72,1.426,9.202,7.218,7.776,12.939l-21.333,85.333c-1.153,4.599-5.204,7.884-9.941,8.064   L373.333,298.688z"}})])])]),i("div",{staticClass:"morelike-item-header"},[i("img",{staticStyle:{height:"158px"},attrs:{src:a.image,alt:""}})]),i("div",{staticClass:"morelike-item-content"},[i("p",[t._v("姓名/品種 : "+t._s(a.title))]),i("p",[t._v("分類 : "+t._s(a.category))]),i("p",[t._v("性別 : "+t._s(a.unit))]),i("div",[i("a",{attrs:{href:""},on:{click:function(i){return i.preventDefault(),t.learnmore(a.id)}}},[t._v("前往查看")]),i("button",{on:{click:function(i){return t.editfav(a)}}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"36",viewBox:"0 0 60 55",width:"36"}},[i("g",{attrs:{id:"Page-1",fill:"none","fill-rule":"evenodd"}},[i("g",{staticClass:"addAdopted",class:{adoptadded:-1!==t.favorite.indexOf(a.id)},attrs:{id:"029---Pet-Health",fill:"rgb(0,0,0)","fill-rule":"nonzero"}},[i("path",{attrs:{id:"Shape",d:"m44.5 1c-2.1117095.00235057-4.2098296.3378068-6.217.994-1.0701203-1.22169039-2.5996775-1.94391085-4.223-1.994-3.0113285.16336959-5.9902609.70392472-8.867 1.609-.6713244.19637636-1.2935809.53238126-1.826.986-2.4884178-1.0552075-5.1640981-1.59769002-7.867-1.595-8.691 0-15.5 8.4-15.5 19.12 0 11.256 7.278 26.691 27.588 34.106.019.009.039.015.058.022.6666667.244 1.3486667.4773333 2.046.7.0993529.0331844.2032594.0507271.308.052.1049487.0001819.2092562-.0163588.309-.049 1.8881305-.6122298 3.7432824-1.3218471 5.558-2.126.025-.009.051-.005.076-.016s.041-.032.065-.044c17.58-7.865 23.992-22.097 23.992-32.645 0-10.72-6.809-19.12-15.5-19.12zm13.5 19.12c-.1176303 6.0689625-2.0472791 11.9641248-5.541 16.928-2.591-5.752-5.9-10.969-7.692-12.755-1.3044537-1.4498544-2.9648945-2.5339495-4.817-3.145l-.412-2.889c1.7089365-1.1858634 2.6671558-3.1839902 2.522-5.259.0305788-3.27343787-.8275725-6.4938381-2.483-9.318 1.6019484-.45207297 3.2584855-.68155871 4.923-.682 7.57 0 13.5 7.52 13.5 17.12zm-56 0c0-9.6 5.93-17.12 13.5-17.12 2.236619.00392316 4.4531085.42267252 6.537 1.235l-1.951 2.923c-.4143229.62131721-1.0442246 1.0670225-1.768 1.251l-5.807 1.442c-.8588936.2173243-1.4704984.9765297-1.5 1.862-.064 1.7.163 7.375 5.732 9.235.102174.034303.2092215.0518628.317.052 2.949389.0339263 5.8751075.5313322 8.67 1.474l-.244.526c-1.6078346 3.0898276-2.4598228 6.5169724-2.486 10 .0667239 3.8272001 1.4834204 7.5077775 4 10.392v8.465c-18.368-7.228-25-21.373-25-31.737zm11-8.329 2-.5v1.709h-1.968c-.0340179-.4020432-.0447025-.8057202-.032-1.209zm23.156 38.7c-.1048519-.4900418-.1571476-.9898677-.156-1.491-.0521315-2.4835335 1.0677904-4.8467428 3.023-6.379 1.6567991-1.1541931 3.7800313-1.4062355 5.661-.672.3394023.1128959.7132522.0361471.9807241-.201336.2674719-.237483.3879304-.599621.316-.95s-.3253218-.6357681-.6647241-.748664c-2.4920741-.9320098-5.2833511-.5762735-7.462.951-2.4732452 1.9105965-3.901389 4.875088-3.854 8-.0038899.7829213.0970055 1.5628425.3 2.319-1.368.582-2.8 1.13-4.305 1.629-.34-.112-.666-.232-1-.349v-9.599c.0002093-.2645618-.1044287-.5184257-.291-.706-2.3044227-2.5565821-3.6182449-5.8531975-3.704-9.294.0252145-3.1914691.8138449-6.3305613 2.3-9.155l.244-.529c.2294894-.4891242.2475721-1.0511351.05-1.554-.2045596-.5119941-.6106421-.9173534-1.123-1.121-2.970452-1.0438215-6.0907777-1.5980432-9.239-1.641-1.8466721-.6326495-3.2694225-2.1251756-3.813-4h1.581c1.1045695 0 2-.8954305 2-2v-2.2l1.809-.449c1.2049818-.3061856 2.2535946-1.04837402 2.943-2.083l2.337-3.5c.0785063-.11655599.1650498-.22749206.259-.332.3705756-.42819561.8566011-.74064056 1.4-.9 2.6985911-.84530503 5.4895317-1.3610515 8.312-1.536 1.2567393.10358472 2.4046699.7535913 3.14 1.778 1.9248249 2.68418003 2.9282534 5.91971066 2.86 9.222 0 1.914-.682 3.2-2.029 3.812-1.4227316.5432205-3.0012185.5102158-4.4-.092-.381114-.1513089-.631234-.5199486-.631-.93v-6.79c0-.55228475-.4477153-1-1-1s-1 .44771525-1 1v6.79c.0045439 1.2285382.7530983 2.3317959 1.893 2.79 1.4995833.6112872 3.1455704.7691406 4.734.454l.344 2.4c.1126488.7888437.6865411 1.4336355 1.457 1.637 1.5120964.5283904 2.863694 1.4351932 3.926 2.634 1.553 1.544 5.05 6.934 7.737 13.2-4.0063823 4.9727493-9.1206904 8.9391291-14.934 11.582z"}})])])])])])])])])})),0):t._e()],1)},e=[function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("div",{staticClass:"adopt_one-content-bg"},[c("img",{attrs:{src:i("622b"),alt:""}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"morelike-title"},[i("h4",[t._v("更多可愛家人")])])}],s=i("4e5c"),o=s["a"],n=i("2877"),l=Object(n["a"])(o,c,e,!1,null,null,null);a["default"]=l.exports},"622b":function(t,a,i){t.exports=i.p+"img/Dog_dries.4cddbc3f.gif"},a434:function(t,a,i){"use strict";var c=i("23e7"),e=i("23cb"),s=i("a691"),o=i("50c4"),n=i("7b0b"),l=i("65f0"),d=i("8418"),r=i("1dde"),v=i("ae40"),f=r("splice"),p=v("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,u=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,a){var i,c,r,v,f,p,w=n(this),_=o(w.length),x=e(t,_),C=arguments.length;if(0===C?i=c=0:1===C?(i=0,c=_-x):(i=C-2,c=u(h(s(a),0),_-x)),_+i-c>g)throw TypeError(m);for(r=l(w,c),v=0;v<c;v++)f=x+v,f in w&&d(r,v,w[f]);if(r.length=c,i<c){for(v=x;v<_-c;v++)f=v+c,p=v+i,f in w?w[p]=w[f]:delete w[p];for(v=_;v>_-c+i;v--)delete w[v-1]}else if(i>c)for(v=_-c;v>x;v--)f=v+c-1,p=v+i-1,f in w?w[p]=w[f]:delete w[p];for(v=0;v<i;v++)w[v+x]=arguments[v+2];return w.length=_-c+i,r}})},c975:function(t,a,i){"use strict";var c=i("23e7"),e=i("4d64").indexOf,s=i("a640"),o=i("ae40"),n=[].indexOf,l=!!n&&1/[1].indexOf(1,-0)<0,d=s("indexOf"),r=o("indexOf",{ACCESSORS:!0,1:0});c({target:"Array",proto:!0,forced:l||!d||!r},{indexOf:function(t){return l?n.apply(this,arguments)||0:e(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-402a7a84.5f3072f7.js.map