webpackJsonp([1],{30:function(t,s,i){"use strict";var e=i(18),a=i(82),o=i(77),n=i.n(o),l=i(76),r=i.n(l);e.a.use(a.a),s.a=new a.a({routes:[{path:"/",name:"TrangChu",component:n.a},{path:"/:roomId",name:"ChiTiet",component:r.a}]})},31:function(t,s,i){function e(t){i(41)}var a=i(8)(i(34),i(80),e,null,null);t.exports=a.exports},33:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"Simplert",props:{useRadius:{type:Boolean,default:!0},useIcon:{type:Boolean,default:!0}},data:function(){return{DEFAULT_TYPE:"info",DEFAULT_BTN_CLOSE_TEXT:"Close",DEFAULT_BTN_CONFIRM_TEXT:"Confirm",INVALID_TYPE:"INVALID_TYPE",showSimplert:!1,title:"",message:"",type:this.DEFAULT_TYPE,customClass:"",customIconUrl:"",onOpen:null,customCloseBtnText:this.DEFAULT_BTN_CLOSE_TEXT,customCloseBtnClass:"",onClose:null,useConfirmBtn:!1,customConfirmBtnText:this.DEFAULT_BTN_CONFIRM_TEXT,customConfirmBtnClass:"",onConfirm:null,disableOverlayClick:!1,hideAllButton:!1}},computed:{classSimplert:function(){var t=this.customClass;return this.showSimplert&&(t=this.customClass+" simplert--shown"),t},classContent:function(){var t="";return this.useRadius&&(t="simplert__content--radius"),t},classBtnClose:function(){var t="simplert__close";return this.useRadius&&(t="simplert__close simplert__close--radius"),this.customCloseBtnClass&&(t=this.customCloseBtnClass),t},classBtnConfirm:function(){var t="simplert__confirm";return this.useRadius&&(t="simplert__confirm simplert__confirm--radius"),this.customConfirmBtnClass&&(t=this.customConfirmBtnClass),t}},methods:{closeOverlay:function(t){var s=this;t.target.className.indexOf("simplert--shown")>0&&!s.disableOverlayClick&&(s.showSimplert=!1)},whenConfirm:function(t){var s=this;t.preventDefault(),s.showSimplert=!1,null!==s.onConfirm&&s.onConfirm()},closeSimplert:function(t){var s=this;t.preventDefault(),s.showSimplert=!1,null!==s.onClose&&s.onClose()},openSimplert:function(t){var s=this;void 0!==t&&(s.showSimplert=!0,s.title=t.title,void 0!==t.message?s.message=t.message:s.message="",void 0!==t.type?s.type=t.type:s.type=s.DEFAULT_TYPE,void 0!==t.customClass?s.customClass=t.customClass:s.customClass="",void 0!==t.customIconUrl&&""!==t.customCloseBtnText?(s.customIconUrl=t.customIconUrl,s.type=s.INVALID_TYPE):s.customIconUrl="",void 0!==t.customCloseBtnText&&""!==t.customCloseBtnText?s.customCloseBtnText=t.customCloseBtnText:s.customCloseBtnText=s.DEFAULT_BTN_CLOSE_TEXT,void 0!==t.customCloseBtnClass?s.customCloseBtnClass=t.customCloseBtnClass:s.customCloseBtnClass="",void 0!==t.onClose&&null!==t.onClose?s.onClose=t.onClose:s.onClose=null,void 0!==t.useConfirmBtn?s.useConfirmBtn=t.useConfirmBtn:s.useConfirmBtn=!1,void 0!==t.customConfirmBtnText&&""!==t.customConfirmBtnText?s.customConfirmBtnText=t.customConfirmBtnText:s.customConfirmBtnText=s.DEFAULT_BTN_CONFIRM_TEXT,void 0!==t.customConfirmBtnClass?s.customConfirmBtnClass=t.customConfirmBtnClass:s.customConfirmBtnClass="",void 0!==t.onConfirm&&null!==t.onConfirm?s.onConfirm=t.onConfirm:s.onConfirm=null,void 0!==t.disableOverlayClick?s.disableOverlayClick=t.disableOverlayClick:s.disableOverlayClick=!1,void 0!==t.hideAllButton?s.hideAllButton=t.hideAllButton:s.hideAllButton=!1,void 0!==t.onOpen?s.onOpen=t.onOpen:s.onOpen=null,null!==s.onOpen&&s.onOpen())}}}},34:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app"}},35:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(10),a=i.n(e),o=i(84),n=i(74),l=i.n(n),r=i(38),c=(i.n(r),a.a.database()),m=c.ref("orderRooms");s.default={name:"chitiet",firebase:function(){return{rooms:c.ref("rooms")}},data:function(){return{roomID:this.$route.params.roomId,date:null,date2:null,rooms:"",orderRoom:{roomName:this.$route.params.roomId,date1:"",date2:"",adults:"1",children:"0"}}},computed:{},mounted:function(){console.log(this,"this"),function(){$(".room-detail_img").length&&$(".room-detail_img").owlCarousel({navigation:!0,pagination:!1,navigationText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],singleItem:!0,mouseDrag:!1,transitionStyle:"fade"}),$(".room-detail_thumbs").length&&($(".room-detail_thumbs").owlCarousel({items:7,pagination:!1,navigation:!0,mouseDrag:!1,navigationText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],itemsCustom:[[0,3],[320,4],[480,5],[768,6],[992,7],[1200,7]]}),void 0!==$(".room-detail_img").data("owlCarousel")&&void 0!==$(".room-detail_thumbs").data("owlCarousel")&&$(".room-detail_thumbs").on("click",".owl-item",function(t){var s=$(this),i=s.index();return $(".room-detail_thumbs").find(".active").removeClass("active"),s.addClass("active"),$(".room-detail_img").data("owlCarousel").goTo(i),!1}))}()},components:{flatPickr:l.a,simplert:o.a},methods:{openTab:function(t,s){document.querySelectorAll(".room-detail_tab-header li").forEach(function(t){return t.classList.remove("active")}),t.currentTarget.className+=" active",document.querySelectorAll(".tab-pane").forEach(function(t){return t.classList.remove("active","in")}),document.getElementById(s).classList.add("active","in")},addOrderRoom:function(t){var s=this;return""==t.date1?void this.$refs.simplert.openSimplert({title:"Thiếu thông tin",message:"Bạn chưa nhập ngày đến",type:"error",customCloseBtnText:"Đóng"}):""==t.date2?void this.$refs.simplert.openSimplert({title:"Thiếu thông tin",message:"Bạn chưa nhập ngày đi",type:"error",customCloseBtnText:"Đóng"}):t.date1>t.date2?void this.$refs.simplert.openSimplert({title:"Thiếu thông tin",message:"Ngày đến lớn hơn ngày đi",type:"error",customCloseBtnText:"Đóng"}):void m.push(t,function(t){var i=function(){s.$router.push({path:"/"})};if(t)return void s.$refs.simplert.openSimplert({title:"Có lỗi xảy ra",message:"Bạn vui lòng đăng ký lại",type:"error",customCloseBtnText:"Đóng"});s.$refs.simplert.openSimplert({title:"Đặt phòng thành công",message:"Chúng tôi sẽ liên lạc lại với bạn",type:"success",customCloseBtnText:"Đóng",onClose:i})})}}}},36:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(10),a=i.n(e),o={apiKey:"AIzaSyDZAdyrs9t1m_qx4jvq2SlRIAxifBeiZ68",authDomain:"hotel-c24ce.firebaseapp.com",databaseURL:"https://hotel-c24ce.firebaseio.com",projectId:"hotel-c24ce",storageBucket:"hotel-c24ce.appspot.com",messagingSenderId:"933087622720"};a.a.initializeApp(o);var n=a.a.database();s.default={name:"index",firebase:function(){return{rooms:n.ref("rooms")}},data:function(){return{rooms:""}},created:function(){}}},37:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(18),a=i(10),o=(i.n(a),i(30)),n=i(32),l=i.n(n),r=i(31),c=i.n(r);e.a.use(l.a),o.a.beforeEach(function(t,s,i){window.scrollTo(0,0),i()}),e.a.config.productionTip=!1,new e.a({el:"#app",router:o.a,template:"<App/>",components:{App:c.a}})},38:function(t,s){},39:function(t,s){},40:function(t,s){},41:function(t,s){},42:function(t,s){},75:function(t,s,i){function e(t){i(42)}var a=i(8)(i(33),i(81),e,null,null);t.exports=a.exports},76:function(t,s,i){function e(t){i(39)}var a=i(8)(i(35),i(78),e,"data-v-313c7e57",null);t.exports=a.exports},77:function(t,s,i){function e(t){i(40)}var a=i(8)(i(36),i(79),e,null,null);t.exports=a.exports},78:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{},[i("section",{staticClass:"section-sub-banner bg-16"},[i("div",{staticClass:"awe-overlay"}),t._v(" "),i("div",{staticClass:"sub-banner"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text text-center"},t._l(t.rooms,function(s){return s.permalink==t.roomID?i("h2",[t._v(t._s(s.title))]):t._e()}))])])]),t._v(" "),i("section",{staticClass:"section-room-detail bg-white"},[i("div",{staticClass:"container"},[i("div",{staticClass:"room-detail"},[i("div",{staticClass:"row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-lg-3"},[i("div",{staticClass:"room-detail_book"},[i("div",{staticClass:"room-detail_total"},[i("h6",[t._v("Giá phòng")]),t._v(" "),i("p",{staticClass:"price"},t._l(t.rooms,function(s){return s.permalink==t.roomID?i("span",{staticClass:"amout"},[t._v("$ "+t._s(s.price))]):t._e()}))]),t._v(" "),i("div",{staticClass:"room-detail_form"},[i("label",[t._v("Ngày đến")]),t._v(" "),i("flat-pickr",{attrs:{placeholder:"Ngày đến","input-class":"awe-calendar from"},model:{value:t.orderRoom.date1,callback:function(s){t.orderRoom.date1=s},expression:"orderRoom.date1"}}),t._v(" "),i("label",[t._v("Ngày đi")]),t._v(" "),i("flat-pickr",{attrs:{placeholder:"Ngày đi","input-class":"awe-calendar from"},model:{value:t.orderRoom.date2,callback:function(s){t.orderRoom.date2=s},expression:"orderRoom.date2"}}),t._v(" "),i("label",[t._v("Người lớn")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.orderRoom.adults,expression:"orderRoom.adults"}],staticClass:"form-control",on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.orderRoom.adults=s.target.multiple?i:i[0]}}},[i("option",[t._v("1")]),t._v(" "),i("option",[t._v("2")]),t._v(" "),i("option",[t._v("3")]),t._v(" "),i("option",[t._v("4")])]),t._v(" "),i("label",[t._v("Trẻ em")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.orderRoom.children,expression:"orderRoom.children"}],staticClass:"form-control",on:{change:function(s){var i=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.orderRoom.children=s.target.multiple?i:i[0]}}},[i("option",[t._v("0")]),t._v(" "),i("option",[t._v("1")]),t._v(" "),i("option",[t._v("2")]),t._v(" "),i("option",[t._v("3")]),t._v(" "),i("option",[t._v("4")])]),t._v(" "),i("button",{staticClass:"awe-btn awe-btn-13",on:{click:function(s){t.addOrderRoom(t.orderRoom)}}},[t._v("Đặt ngay")])],1)])])])]),t._v(" "),i("div",{staticClass:"room-detail_tab"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-3"},[i("ul",{staticClass:"room-detail_tab-header"},[i("li",{staticClass:"active",on:{click:function(s){s.preventDefault(),t.openTab(s,"overview")}}},[i("a",{attrs:{href:"#"}},[t._v("TỔNG QUAN")])]),t._v(" "),i("li",{on:{click:function(s){s.preventDefault(),t.openTab(s,"amenities")}}},[i("a",{attrs:{href:"#"}},[t._v("TIỆN NGHI")])]),t._v(" "),i("li",{on:{click:function(s){s.preventDefault(),t.openTab(s,"package")}}},[i("a",{attrs:{href:"#"}},[t._v("GÓI PHÒNG")])]),t._v(" "),i("li",{on:{click:function(s){s.preventDefault(),t.openTab(s,"rates")}}},[i("a",{attrs:{href:"#"}},[t._v("RATES")])])])]),t._v(" "),t._m(1)])])])]),t._v(" "),i("simplert",{ref:"simplert",attrs:{useRadius:!0,useIcon:!0}})],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-lg-9"},[i("div",{staticClass:"room-detail_img"},[i("div",{staticClass:"room_img-item"},[i("img",{attrs:{src:"static/images/room/detail/lager/img-1.jpg",alt:""}}),t._v(" "),i("h6",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry")])]),t._v(" "),i("div",{staticClass:"room_img-item"},[i("img",{attrs:{src:"static/images/room/detail/lager/img-2.jpg",alt:""}}),t._v(" "),i("h6",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry")])]),t._v(" "),i("div",{staticClass:"room_img-item"},[i("img",{attrs:{src:"static/images/room/detail/lager/img-3.jpg",alt:""}}),t._v(" "),i("h6",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry")])]),t._v(" "),i("div",{staticClass:"room_img-item"},[i("img",{attrs:{src:"static/images/room/detail/lager/img-5.jpg",alt:""}}),t._v(" "),i("h6",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry")])]),t._v(" "),i("div",{staticClass:"room_img-item"},[i("img",{attrs:{src:"static/images/room/detail/lager/img-6.jpg",alt:""}}),t._v(" "),i("h6",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry")])]),t._v(" "),i("div",{staticClass:"room_img-item"},[i("img",{attrs:{src:"static/images/room/detail/lager/img-7.jpg",alt:""}}),t._v(" "),i("h6",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry")])]),t._v(" "),i("div",{staticClass:"room_img-item"},[i("img",{attrs:{src:"static/images/room/detail/lager/img-5.jpg",alt:""}}),t._v(" "),i("h6",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry")])])]),t._v(" "),i("div",{staticClass:"room-detail_thumbs"},[i("a",{attrs:{href:"room-detail.html#"}},[i("img",{attrs:{src:"static/images/room/detail/img-2.jpg",alt:""}})]),t._v(" "),i("a",{attrs:{href:"room-detail.html#"}},[i("img",{attrs:{src:"static/images/room/detail/img-3.jpg",alt:""}})]),t._v(" "),i("a",{attrs:{href:"room-detail.html#"}},[i("img",{attrs:{src:"static/images/room/detail/img-4.jpg",alt:""}})]),t._v(" "),i("a",{attrs:{href:"room-detail.html#"}},[i("img",{attrs:{src:"static/images/room/detail/img-5.jpg",alt:""}})]),t._v(" "),i("a",{attrs:{href:"room-detail.html#"}},[i("img",{attrs:{src:"static/images/room/detail/img-6.jpg",alt:""}})]),t._v(" "),i("a",{attrs:{href:"room-detail.html#"}},[i("img",{attrs:{src:"static/images/room/detail/img-7.jpg",alt:""}})]),t._v(" "),i("a",{attrs:{href:"room-detail.html#"}},[i("img",{attrs:{src:"static/images/room/detail/img-8.jpg",alt:""}})]),t._v(" "),i("a",{attrs:{href:"room-detail.html#"}},[i("img",{attrs:{src:"static/images/room/detail/img-6.jpg",alt:""}})])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-9"},[i("div",{staticClass:"room-detail_tab-content tab-content"},[i("div",{staticClass:"tab-pane fade active in",attrs:{id:"overview"}},[i("div",{staticClass:"room-detail_overview"},[i("h5",{staticClass:"text-uppercase"},[t._v("Khách sạn Boutique")]),t._v(" "),i("p",[t._v("Nằm ở quận 1 nên đi lại vào trung tâm thuận tiện, ra sân bay cũng tương đối nhanh. Thuộc loại căn hộ dịch vụ nên phòng ốc thoáng mát rộng rãi, sạch sẽ. Có đủ các tiện nghi trang bị nhà bếp, phòng khách.")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-6 col-md-4"},[i("h6",[t._v("TIỆN ÍCH")]),t._v(" "),i("ul",[i("li",[t._v("Wifi miễn phí")]),t._v(" "),i("li",[t._v("Đỗ xe miễn phí")]),t._v(" "),i("li",[t._v("Bữa sáng tự chọn")]),t._v(" "),i("li",[t._v("Điều hòa nhiệt độ")]),t._v(" "),i("li",[t._v("Bể bơi")])])]),t._v(" "),i("div",{staticClass:"col-xs-6 col-md-4"},[i("h6",[t._v("THAM KHẢO")]),t._v(" "),i("ul",[i("li",[t._v("Phòng không hút thuốc")]),t._v(" "),i("li",[t._v("Nhà hàng")])])])])])]),t._v(" "),i("div",{staticClass:"tab-pane fade ",attrs:{id:"amenities"}},[i("div",{staticClass:"room-detail_amenities"},[i("p",[t._v("Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-6 col-lg-4"},[i("h6",[t._v("LIVING ROOM")]),t._v(" "),i("ul",[i("li",[t._v("Oversized work desk")]),t._v(" "),i("li",[t._v("Hairdryer")]),t._v(" "),i("li",[t._v("Iron/ironing board upon request")])])]),t._v(" "),i("div",{staticClass:"col-xs-6 col-lg-4"},[i("h6",[t._v("KITCHEN ROOM")]),t._v(" "),i("ul",[i("li",[t._v("AM/FM clock radio")]),t._v(" "),i("li",[t._v("Voicemail")]),t._v(" "),i("li",[t._v("High-speed Internet access")])])]),t._v(" "),i("div",{staticClass:"col-xs-6 col-lg-4"},[i("h6",[t._v("balcony")]),t._v(" "),i("ul",[i("li",[t._v("AM/FM clock radio")]),t._v(" "),i("li",[t._v("Voicemail")]),t._v(" "),i("li",[t._v("High-speed Internet access")])])]),t._v(" "),i("div",{staticClass:"col-xs-6 col-lg-4"},[i("h6",[t._v("bedroom")]),t._v(" "),i("ul",[i("li",[t._v("Coffee maker")]),t._v(" "),i("li",[t._v("25 inch or larger TV")]),t._v(" "),i("li",[t._v("Cable/satellite TV channels")]),t._v(" "),i("li",[t._v("AM/FM clock radio")]),t._v(" "),i("li",[t._v("Voicemail")])])]),t._v(" "),i("div",{staticClass:"col-xs-6 col-lg-4"},[i("h6",[t._v("bathroom")]),t._v(" "),i("ul",[i("li",[t._v("Dataport")]),t._v(" "),i("li",[t._v("Phone access fees waived")]),t._v(" "),i("li",[t._v("24-hour Concierge service")]),t._v(" "),i("li",[t._v("Private concierge")])])]),t._v(" "),i("div",{staticClass:"col-xs-6 col-lg-4"},[i("h6",[t._v("Oversized work desk")]),t._v(" "),i("ul",[i("li",[t._v("Dataport")]),t._v(" "),i("li",[t._v("Phone access fees waived")]),t._v(" "),i("li",[t._v("24-hour Concierge service")]),t._v(" "),i("li",[t._v("Private concierge")])])])])])]),t._v(" "),i("div",{staticClass:"tab-pane fade",attrs:{id:"package"}},[i("div",{staticClass:"room-detail_package"},[i("div",{staticClass:"room-package_item"},[i("div",{staticClass:"text"},[i("h4",[i("a",{attrs:{href:"room-detail.html#"}},[t._v("package standar")])]),t._v(" "),i("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled")]),t._v(" "),i("div",{staticClass:"room-package_price"},[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$260")]),t._v(" / Package\n                        ")]),t._v(" "),i("a",{staticClass:"awe-btn awe-btn-default",attrs:{href:"room-detail.html#"}},[t._v("Book package")])])])]),t._v(" "),i("div",{staticClass:"room-package_item"},[i("div",{staticClass:"text"},[i("h4",[i("a",{attrs:{href:"room-detail.html#"}},[t._v("package standar")])]),t._v(" "),i("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled")]),t._v(" "),i("div",{staticClass:"room-package_price"},[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$260")]),t._v(" / Package\n                        ")]),t._v(" "),i("a",{staticClass:"awe-btn awe-btn-default",attrs:{href:"room-detail.html#"}},[t._v("Book package")])])])]),t._v(" "),i("div",{staticClass:"room-package_item"},[i("div",{staticClass:"text"},[i("h4",[i("a",{attrs:{href:"room-detail.html#"}},[t._v("package standar")])]),t._v(" "),i("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled")]),t._v(" "),i("div",{staticClass:"room-package_price"},[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$260")]),t._v(" / Package\n                        ")]),t._v(" "),i("a",{staticClass:"awe-btn awe-btn-default",attrs:{href:"room-detail.html#"}},[t._v("Book package")])])])])])]),t._v(" "),i("div",{staticClass:"tab-pane fade",attrs:{id:"rates"}},[i("div",{staticClass:"room-detail_rates"},[i("table",[i("thead",[i("tr",[i("th",[t._v("Rate Period")]),t._v(" "),i("th",[t._v("Nightly")]),t._v(" "),i("th",[t._v("Weekend Night")]),t._v(" "),i("th",[t._v("Weekly")]),t._v(" "),i("th",[t._v("Monthly")]),t._v(" "),i("th",[t._v("Event")])])]),t._v(" "),i("tr",[i("td",[i("h6",[t._v("Spring/Summer Season")]),t._v(" "),i("ul",[i("li",[t._v("Jun 1 - Aug 31")]),t._v(" "),i("li",[t._v("3 night minimum stay")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$320")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$23")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$120")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$100")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$89")])])])]),t._v(" "),i("tr",[i("td",[i("h6",[t._v("Summer/Fall Season")]),t._v(" "),i("ul",[i("li",[t._v("Jun 1 - Aug 31")]),t._v(" "),i("li",[t._v("3 night minimum stay")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$320")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$23")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$120")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$100")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$89")])])])]),t._v(" "),i("tr",[i("td",[i("h6",[t._v("Christmas Season")]),t._v(" "),i("ul",[i("li",[t._v("Jun 1 - Aug 31")]),t._v(" "),i("li",[t._v("3 night minimum stay")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$320")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$23")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$120")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$100")])])]),t._v(" "),i("td",[i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$89")])])])])])])])])])}]}},79:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{},[t._m(0),t._v(" "),i("section",{staticClass:"section-accomd awe-parallax bg-14"},[i("div",{staticClass:"container"},[i("div",{staticClass:"accomd-modations"},[i("div",{staticClass:"row"},[t._m(1),t._v(" "),i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"accomd-modations-content owl-single"},[i("div",{staticClass:"row"},t._l(t.rooms,function(s){return i("div",{staticClass:"col-xs-4"},[i("div",{staticClass:"accomd-modations-room"},[i("div",{staticClass:"img"},[i("router-link",{attrs:{to:{name:"ChiTiet",params:{roomId:s.permalink}}}},[i("img",{attrs:{src:s.image_feature,alt:""}})])],1),t._v(" "),i("div",{staticClass:"text"},[i("h2",[i("a",{attrs:{href:"index.html#"}},[t._v(t._s(s.title))])]),t._v(" "),i("p",{staticClass:"price"},[i("span",{staticClass:"amout"},[t._v("$ "+t._s(s.price))]),t._v("/days\n                      ")])])])])}))])])])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hero-image"},[i("div",{staticClass:"hero-text"},[i("h1",[t._v("Boutique Hotel")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"accomd-modations-header"},[i("h2",{staticClass:"heading"},[t._v("Đặt phòng Boutique Hotel")]),t._v(" "),i("img",{attrs:{src:"static/images/icon-accmod.png",alt:"icon"}}),t._v(" "),i("p",[t._v("Boutique Hotel giữ sắc xanh thiên nhiên làm tông màu chủ đạo hòa cùng gam xám bạc của nội thất tạo thành một tổng thể hài hòa, sang trọng.")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"section-home-about bg-white hidden"},[i("div",{staticClass:"container"},[i("div",{staticClass:"home-about"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"img"},[i("a",{attrs:{href:"#"}},[i("img",{attrs:{src:"http://cocobaydanang.com.vn/wp-content/uploads/2017/03/Boutique-Hotel-Cocobay-Da-Nang192.jpg",alt:""}})])])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"text"},[i("h2",{staticClass:"heading"},[t._v("BOUTIQUE HOTEL")]),t._v(" "),i("span",{staticClass:"box-border"}),t._v(" "),i("p",[t._v("Boutique Hotel là một chuỗi các khách sạn mini cao 7 tầng kết hợp lưu trú, thương mại và giải trí. Boutique Hotel nổi bật với không gian lưu trú mang hơi thở thiên nhiên và ánh sáng với nhiều mảng xanh công viên trải dọc lối tản bộ, đa dạng tiện về ích giải trí, đem lại sự thư thái cho du khách.")]),t._v(" "),i("p",[t._v("Nếu loại hình lưu trú Condotel mang đến không gian sống đẳng cấp thì Boutique Hotel mà tiêu biểu là dự án Garden Bay cho cảm giác trải nghiệm thoải mái, tự tại nhưng không kém phần “sang chảnh” cho giới trẻ.")]),t._v(" "),i("p",[t._v("Du khách lưu trú tại Boutique Hotel sẽ được tái tạo năng lượng, được tận hưởng cảm giác thư thái sau những chuỗi ngày làm việc và học tập căng thẳng.")])])])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"section-our-best bg-white hidden"},[i("div",{staticClass:"container"},[i("div",{staticClass:"our-best"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 col-md-push-6"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://landing.engotheme.com/html/lotus/demo/images/home/ourbest/img-1.jpg",alt:""}})])]),t._v(" "),i("div",{staticClass:"col-md-6 col-md-pull-6 "},[i("div",{staticClass:"text"},[i("h2",{staticClass:"heading"},[t._v("LỢI ÍCH")]),t._v(" "),i("p",[t._v("Nhà đầu tư được lợi ích gì khi mua Boutique Hotel?")]),t._v(" "),i("ul",[i("li",[i("div",{staticClass:"des-icon"},[i("i",{staticClass:"fa fa-line-chart "})]),t._v(" Cam kết lợi nhuận tối thiểu 12,5%/năm\n                ")]),t._v(" "),i("li",[i("div",{staticClass:"des-icon"},[i("i",{staticClass:"fa fa-university "})]),t._v(" Ngân hàng hỗ trợ vay 60% trong 15 năm\n                ")]),t._v(" "),i("li",[i("div",{staticClass:"des-icon"},[i("i",{staticClass:"fa fa-percent"})]),t._v(" Hỗ trợ lãi suất 0% trong 18 tháng\n                ")]),t._v(" "),i("li",[i("div",{staticClass:"des-icon"},[i("i",{staticClass:"fa fa-fighter-jet"})]),t._v(" Miễn phí 15 đêm nghỉ dưỡng hằng năm\n                ")]),t._v(" "),i("li",[i("div",{staticClass:"des-icon"},[i("i",{staticClass:"fa fa-picture-o"})]),t._v(" Sử dụng tiện ích nội khu Cocobay\n                ")]),t._v(" "),i("li",[i("div",{staticClass:"des-icon"},[i("i",{staticClass:"fa fa-eye "})]),t._v(" SHB cam kết bảo lãnh tiến độ dự án\n                ")])])])])])])])])}]}},80:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)},staticRenderFns:[]}},81:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"simplert",class:t.classSimplert,attrs:{role:"modal"},on:{click:t.closeOverlay}},[i("div",{staticClass:"simplert__content",class:t.classContent},[i("div",{staticClass:"simplert__header"},[t.useIcon?i("div",["info"===t.type?i("div",{staticClass:"simplert__icon simplert__icon--info"},[i("div",{staticClass:"simplert__line simplert__line--info"}),t._v(" "),i("div",{staticClass:"simplert__line simplert__line--info-2"})]):t._e(),t._v(" "),"success"===t.type?i("div",{staticClass:"simplert__icon simplert__icon--success"},[i("div",{staticClass:"simplert__line simplert__line--success"}),t._v(" "),i("div",{staticClass:"simplert__line simplert__line--success-2"})]):t._e(),t._v(" "),"warning"===t.type?i("div",{staticClass:"simplert__icon simplert__icon--warning"},[i("div",{staticClass:"simplert__line simplert__line--warning"}),t._v(" "),i("div",{staticClass:"simplert__line simplert__line--warning-2"})]):t._e(),t._v(" "),"error"===t.type?i("div",{staticClass:"simplert__icon simplert__icon--error"},[i("div",{staticClass:"simplert__line simplert__line--error"}),t._v(" "),i("div",{staticClass:"simplert__line simplert__line--error-2"})]):t._e(),t._v(" "),""!==t.customIconUrl?i("div",{staticClass:"simplert__icon"},[i("img",{attrs:{src:t.customIconUrl}})]):t._e()]):t._e(),t._v(" "),i("b",{staticClass:"simplert__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"simplert__body"},[i("div",{domProps:{innerHTML:t._s(t.message)}})]),t._v(" "),i("div",{staticClass:"simplert__footer"},[t.useConfirmBtn&&!t.hideAllButton?i("button",{class:t.classBtnConfirm,on:{click:t.whenConfirm}},[t._v("\n        "+t._s(t.customConfirmBtnText)+"\n      ")]):t._e(),t._v(" "),t.hideAllButton?t._e():i("button",{class:t.classBtnClose,on:{click:t.closeSimplert}},[t._v("\n        "+t._s(t.customCloseBtnText)+"\n      ")])])])])},staticRenderFns:[]}}},[37]);
//# sourceMappingURL=app.a2cd6df3b4255fb753d5.js.map