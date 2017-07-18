<template>
  <div class="">
  
    <!-- SUB BANNER -->
    <section class="section-sub-banner bg-16">
      <div class="awe-overlay"></div>
      <div class="sub-banner">
        <div class="container">
          <div class="text text-center">
  
            <h2 v-for="room in rooms" v-if="room.permalink == roomID">{{room.title}}</h2>
  
          </div>
        </div>
  
      </div>
  
    </section>
    <!-- END / SUB BANNER -->
  
    <section class="section-room-detail bg-white">
      <div class="container">
  
        <!-- DETAIL -->
        <div class="room-detail">
          <div class="row">
            <div class="col-lg-9">
  
              <!-- LAGER IMGAE -->
              <div class="room-detail_img">
                <div class="room_img-item">
                  <img src="static/images/room/detail/lager/img-1.jpg" alt="">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                </div>
                <div class="room_img-item">
                  <img src="static/images/room/detail/lager/img-2.jpg" alt="">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                </div>
                <div class="room_img-item">
                  <img src="static/images/room/detail/lager/img-3.jpg" alt="">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                </div>
                <div class="room_img-item">
                  <img src="static/images/room/detail/lager/img-5.jpg" alt="">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                </div>
                <div class="room_img-item">
                  <img src="static/images/room/detail/lager/img-6.jpg" alt="">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                </div>
                <div class="room_img-item">
                  <img src="static/images/room/detail/lager/img-7.jpg" alt="">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                </div>
                <div class="room_img-item">
                  <img src="static/images/room/detail/lager/img-5.jpg" alt="">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                </div>
              </div>
              <!-- END / LAGER IMGAE -->
  
              <!-- THUMBNAIL IMAGE -->
              <div class="room-detail_thumbs">
                <a href="room-detail.html#">
                  <img src="static/images/room/detail/img-2.jpg" alt="">
                </a>
                <a href="room-detail.html#">
                  <img src="static/images/room/detail/img-3.jpg" alt="">
                </a>
                <a href="room-detail.html#">
                  <img src="static/images/room/detail/img-4.jpg" alt="">
                </a>
                <a href="room-detail.html#">
                  <img src="static/images/room/detail/img-5.jpg" alt="">
                </a>
                <a href="room-detail.html#">
                  <img src="static/images/room/detail/img-6.jpg" alt="">
                </a>
                <a href="room-detail.html#">
                  <img src="static/images/room/detail/img-7.jpg" alt="">
                </a>
                <a href="room-detail.html#">
                  <img src="static/images/room/detail/img-8.jpg" alt="">
                </a>
                <a href="room-detail.html#">
                  <img src="static/images/room/detail/img-6.jpg" alt="">
                </a>
              </div>
              <!-- END / THUMBNAIL IMAGE -->
  
            </div>
  
            <div class="col-lg-3">
  
              <!-- FORM BOOK -->
              <div class="room-detail_book">
  
                <div class="room-detail_total">
                  <!-- <img src="/static/images/icon-logo.png" alt="" class="icon-logo"> -->
  
                  <h6>Giá phòng</h6>
  
                  <p class="price">
  
                    <span class="amout" v-for="room in rooms" v-if="room.permalink == roomID">$ {{room.price}}</span>
                  </p>
                </div>
  
                <div class="room-detail_form">
                  <label>Ngày đến</label>
  
                  <flat-pickr v-model="date" placeholder="Ngày đến" input-class="awe-calendar from"></flat-pickr>
  
                  <label>Ngày đi</label>
                  <flat-pickr v-model="date2" placeholder="Ngày đi" input-class="awe-calendar from"></flat-pickr>
  
                  <label>Người lớn</label>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option selected>3</option>
                    <option>4</option>
                  </select>
                  <label>Trẻ em</label>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option selected>3</option>
                    <option>4</option>
                  </select>
                  <button class="awe-btn awe-btn-13">Đặt ngay</button>
                </div>
  
              </div>
              <!-- END / FORM BOOK -->
  
            </div>
          </div>
        </div>
        <!-- END / DETAIL -->
  
        <!-- TAB -->
        <div class="room-detail_tab">
  
          <div class="row">
            <div class="col-md-3">
              <ul class="room-detail_tab-header">
                <li class="active" v-on:click.prevent="openTab($event,'overview')">
                  <a href="#">TỔNG QUAN</a>
                </li>
                <li v-on:click.prevent="openTab( $event,'amenities')">
                  <a href="#">TIỆN NGHI</a>
                </li>
                <li v-on:click.prevent="openTab($event,'package')">
                  <a href="#">GÓI PHÒNG</a>
                </li>
                <li v-on:click.prevent="openTab($event,'rates')">
                  <a href="#">RATES</a>
                </li>
  
              </ul>
            </div>
  
            <div class="col-md-9">
              <div class="room-detail_tab-content tab-content">
  
                <!-- OVERVIEW -->
                <div class="tab-pane fade active in" id="overview">
  
                  <div class="room-detail_overview">
                    <h5 class='text-uppercase'>Khách sạn Boutique</h5>
                    <p>Nằm ở quận 1 nên đi lại vào trung tâm thuận tiện, ra sân bay cũng tương đối nhanh. Thuộc loại căn hộ dịch vụ nên phòng ốc thoáng mát rộng rãi, sạch sẽ. Có đủ các tiện nghi trang bị nhà bếp, phòng khách.</p>
  
                    <div class="row">
                      <div class="col-xs-6 col-md-4">
                        <h6>TIỆN ÍCH</h6>
                        <ul>
                          <li>Wifi miễn phí</li>
                          <li>Đỗ xe miễn phí</li>
                          <li>Bữa sáng tự chọn</li>
                          <li>Điều hòa nhiệt độ</li>
                          <li>Bể bơi</li>
                        </ul>
                      </div>
                      <div class="col-xs-6 col-md-4">
                        <h6>THAM KHẢO</h6>
                        <ul>
                          <li>Phòng không hút thuốc</li>
                          <li>Nhà hàng</li>
                        </ul>
                      </div>
                    </div>
  
                  </div>
  
                </div>
                <!-- END / OVERVIEW -->
  
                <!-- AMENITIES -->
                <div class="tab-pane fade " id="amenities">
  
                  <div class="room-detail_amenities">
                    <p>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
  
                    <div class="row">
                      <div class="col-xs-6 col-lg-4">
                        <h6>LIVING ROOM</h6>
                        <ul>
                          <li>Oversized work desk</li>
                          <li>Hairdryer</li>
                          <li>Iron/ironing board upon request</li>
                        </ul>
                      </div>
                      <div class="col-xs-6 col-lg-4">
                        <h6>KITCHEN ROOM</h6>
                        <ul>
                          <li>AM/FM clock radio</li>
                          <li>Voicemail</li>
                          <li>High-speed Internet access</li>
                        </ul>
                      </div>
                      <div class="col-xs-6 col-lg-4">
                        <h6>balcony</h6>
                        <ul>
                          <li>AM/FM clock radio</li>
                          <li>Voicemail</li>
                          <li>High-speed Internet access</li>
                        </ul>
                      </div>
                      <div class="col-xs-6 col-lg-4">
                        <h6>bedroom</h6>
                        <ul>
                          <li>Coffee maker</li>
                          <li>25 inch or larger TV</li>
                          <li>Cable/satellite TV channels</li>
                          <li>AM/FM clock radio</li>
                          <li>Voicemail</li>
                        </ul>
                      </div>
                      <div class="col-xs-6 col-lg-4">
                        <h6>bathroom</h6>
                        <ul>
                          <li>Dataport</li>
                          <li>Phone access fees waived</li>
                          <li>24-hour Concierge service</li>
                          <li>Private concierge</li>
                        </ul>
                      </div>
                      <div class="col-xs-6 col-lg-4">
                        <h6>Oversized work desk</h6>
                        <ul>
                          <li>Dataport</li>
                          <li>Phone access fees waived</li>
                          <li>24-hour Concierge service</li>
                          <li>Private concierge</li>
                        </ul>
                      </div>
                    </div>
  
                  </div>
  
                </div>
                <!-- END / AMENITIES -->
  
                <!-- PACKAGE -->
                <div class="tab-pane fade" id="package">
  
                  <div class="room-detail_package">
  
                    <!-- ITEM package -->
                    <div class="room-package_item">
  
                      <div class="text">
                        <h4>
                          <a href="room-detail.html#">package standar</a>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
  
                        <div class="room-package_price">
                          <p class="price">
                            <span class="amout">$260</span> / Package
                          </p>
                          <a href="room-detail.html#" class="awe-btn awe-btn-default">Book package</a>
                        </div>
                      </div>
                    </div>
                    <!-- END / ITEM package -->
  
                    <!-- ITEM package -->
                    <div class="room-package_item">
  
                      <div class="text">
                        <h4>
                          <a href="room-detail.html#">package standar</a>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
  
                        <div class="room-package_price">
                          <p class="price">
                            <span class="amout">$260</span> / Package
                          </p>
                          <a href="room-detail.html#" class="awe-btn awe-btn-default">Book package</a>
                        </div>
                      </div>
                    </div>
                    <!-- END / ITEM package -->
  
                    <!-- ITEM package -->
                    <div class="room-package_item">
  
                      <div class="text">
                        <h4>
                          <a href="room-detail.html#">package standar</a>
                        </h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
  
                        <div class="room-package_price">
                          <p class="price">
                            <span class="amout">$260</span> / Package
                          </p>
                          <a href="room-detail.html#" class="awe-btn awe-btn-default">Book package</a>
                        </div>
                      </div>
                    </div>
                    <!-- END / ITEM package -->
                  </div>
  
                </div>
                <!-- END / PACKAGE -->
  
                <!-- RATES -->
                <div class="tab-pane fade" id="rates">
  
                  <div class="room-detail_rates">
                    <table>
                      <thead>
                        <tr>
                          <th>Rate Period</th>
                          <th>Nightly</th>
                          <th>Weekend Night</th>
                          <th>Weekly</th>
                          <th>Monthly</th>
                          <th>Event</th>
                        </tr>
                      </thead>
                      <tr>
                        <td>
                          <h6>Spring/Summer Season</h6>
                          <ul>
                            <li>Jun 1 - Aug 31</li>
                            <li>3 night minimum stay</li>
                          </ul>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$320</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$23</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$120</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$100</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$89</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Summer/Fall Season</h6>
                          <ul>
                            <li>Jun 1 - Aug 31</li>
                            <li>3 night minimum stay</li>
                          </ul>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$320</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$23</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$120</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$100</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$89</span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>Christmas Season</h6>
                          <ul>
                            <li>Jun 1 - Aug 31</li>
                            <li>3 night minimum stay</li>
                          </ul>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$320</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$23</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$120</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$100</span>
                          </p>
                        </td>
                        <td>
                          <p class="price">
                            <span class="amout">$89</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
  
                </div>
                <!-- END / RATES -->
  
              </div>
            </div>
  
          </div>
  
        </div>
        <!-- END / TAB -->
  
      </div>
    </section>
  
  </div>
</template>

<script>

import Firebase from 'firebase'

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
var db = Firebase.database()

export default {
  name: 'chitiet',
  firebase: function () {
    return {
      rooms: db.ref('rooms')
    }
  },

  data() {
    return {
      roomID: this.$route.params.roomId,
      date: null,
      date2: null,
      rooms: ''
    }
  },

  computed: {
    // roomDetailIndex: function () {
    //   return this.rooms.findIndex(a => a.permalink === this.roomID)
    // },
    // roomDetail: function () {
    //   return this.rooms[this.roomDetailIndex];
    // }
  },
  mounted() {
    console.log(this, "this");

    GalleryRoomDetail();

    function GalleryRoomDetail() {

      if ($('.room-detail_img').length) {

        $(".room-detail_img").owlCarousel({
          navigation: true,
          pagination: false,
          navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
          singleItem: true,
          mouseDrag: false,
          transitionStyle: 'fade'
        });
      }

      if ($('.room-detail_thumbs').length) {

        $(".room-detail_thumbs").owlCarousel({
          items: 7,
          pagination: false,
          navigation: true,
          mouseDrag: false,
          navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
          itemsCustom: [
            [0, 3],
            [320, 4],
            [480, 5],
            [768, 6],
            [992, 7],
            [1200, 7]
          ]
        });

        if ($(".room-detail_img").data("owlCarousel") !== undefined && $(".room-detail_thumbs").data("owlCarousel") !==
          undefined) {
          $('.room-detail_thumbs').on('click', '.owl-item', function (event) {

            var $this = $(this),
              index = $this.index();
            $('.room-detail_thumbs').find('.active').removeClass('active');
            $this.addClass('active');
            $(".room-detail_img").data("owlCarousel").goTo(index);

            return false;
          });
        }
      }
    }
  },
  components: {
    flatPickr
  },
  methods: {
    openTab: function (e, name) {

      var tabLink = document.querySelectorAll(".room-detail_tab-header li");
      tabLink.forEach(e => e.classList.remove("active"));

      e.currentTarget.className += " active";

      var tabName = document.querySelectorAll(".tab-pane");
      tabName.forEach(e => e.classList.remove("active", "in"))
      document.getElementById(name).classList.add("active", "in");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
