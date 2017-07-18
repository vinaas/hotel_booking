<template>
  <div class="">
  
    <div class="hero-image">
      <div class="hero-text">
        <h1>Boutique Hotel</h1>
      </div>
    </div>
  
  
    <section class="section-accomd awe-parallax bg-14">
      <div class="container">
        <div class="accomd-modations">
          <div class="row">
            <div class="col-md-12">
              <div class="accomd-modations-header">
                <h2 class="heading">Đặt phòng Boutique Hotel</h2>
                <img src="static/images/icon-accmod.png" alt="icon">
                <p>Boutique Hotel giữ sắc xanh thiên nhiên làm tông màu chủ đạo hòa cùng gam xám bạc của nội thất tạo thành một tổng thể hài hòa, sang trọng.</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="accomd-modations-content owl-single">
  
                <div class="row">
  
                  <div class="col-xs-4" v-for="room in rooms">
                    <div class="accomd-modations-room">
                      <div class="img">
  
                        <router-link :to="{ name: 'ChiTiet', params: { roomId: room.permalink }}">
                          <img v-bind:src="room.image_feature" alt="">
                        </router-link>
                      </div>
                      <div class="text">
                        <h2>
                          <a href="index.html#">{{ room.title }}</a>
                        </h2>
                        <p class="price">
                          <span class="amout">$ {{room.price}}</span>/days
                        </p>
                      </div>
                    </div>
                  </div>
  
                </div>
  
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
    </section>
  
    <section class="section-home-about bg-white hidden">
      <div class="container">
        <div class="home-about">
          <div class="row">
            <div class="col-md-6">
              <div class="img">
                <a href="#">
                  <img src="http://cocobaydanang.com.vn/wp-content/uploads/2017/03/Boutique-Hotel-Cocobay-Da-Nang192.jpg" alt="">
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text">
                <h2 class="heading">BOUTIQUE HOTEL</h2>
                <span class="box-border"></span>
                <p>Boutique Hotel là một chuỗi các khách sạn mini cao 7 tầng kết hợp lưu trú, thương mại và giải trí. Boutique Hotel nổi bật với không gian lưu trú mang hơi thở thiên nhiên và ánh sáng với nhiều mảng xanh công viên trải dọc lối tản bộ, đa dạng tiện về ích giải trí, đem lại sự thư thái cho du khách.</p>
  
                <p>Nếu loại hình lưu trú Condotel mang đến không gian sống đẳng cấp thì Boutique Hotel mà tiêu biểu là dự án Garden Bay cho cảm giác trải nghiệm thoải mái, tự tại nhưng không kém phần “sang chảnh” cho giới trẻ.</p>
                <p>Du khách lưu trú tại Boutique Hotel sẽ được tái tạo năng lượng, được tận hưởng cảm giác thư thái sau những chuỗi ngày làm việc và học tập căng thẳng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- OUR BEST -->
    <section class="section-our-best bg-white hidden">
      <div class="container">
  
        <div class="our-best">
          <div class="row">
  
            <div class="col-md-6 col-md-push-6">
              <div class="img">
                <img src="http://landing.engotheme.com/html/lotus/demo/images/home/ourbest/img-1.jpg" alt="">
              </div>
            </div>
  
            <div class="col-md-6 col-md-pull-6 ">
              <div class="text">
                <h2 class="heading">LỢI ÍCH</h2>
                <p>Nhà đầu tư được lợi ích gì khi mua Boutique Hotel?</p>
                <ul>
                  <li>
                    <div class="des-icon">
                      <i class="fa fa-line-chart "></i>
                    </div> Cam kết lợi nhuận tối thiểu 12,5%/năm
                  </li>
  
                  <li>
                    <div class="des-icon">
                      <i class="fa fa-university "></i>
                    </div> Ngân hàng hỗ trợ vay 60% trong 15 năm
                  </li>
  
                  <li>
                    <div class="des-icon">
                      <i class="fa fa-percent"></i>
                    </div> Hỗ trợ lãi suất 0% trong 18 tháng
                  </li>
  
                  <li>
                    <div class="des-icon">
                      <i class="fa fa-fighter-jet"></i>
                    </div> Miễn phí 15 đêm nghỉ dưỡng hằng năm
                  </li>
  
                  <li>
                    <div class="des-icon">
                      <i class="fa fa-picture-o"></i>
                    </div> Sử dụng tiện ích nội khu Cocobay
                  </li>
  
                  <li>
                    <div class="des-icon">
                      <i class="fa fa-eye "></i>
                    </div> SHB cam kết bảo lãnh tiến độ dự án
                  </li>
  
                </ul>
              </div>
            </div>
  
          </div>
        </div>
  
      </div>
    </section>
    <!-- END / OUR BEST -->
  
  </div>
</template>

<script>

// import Vue from 'vue'

// import VueFire from 'vuefire'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDZAdyrs9t1m_qx4jvq2SlRIAxifBeiZ68",
  authDomain: "hotel-c24ce.firebaseapp.com",
  databaseURL: "https://hotel-c24ce.firebaseio.com",
  projectId: "hotel-c24ce",
  storageBucket: "hotel-c24ce.appspot.com",
  messagingSenderId: "933087622720"
};
firebase.initializeApp(config);


var db = firebase.database()

export default {
  name: 'index',
  firebase: function () {
    return {
      rooms: db.ref('rooms')
    }
  },
  data() {
    return {
      rooms: ''
    }
  },
  created: function () {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.des-icon {
  color: #e1bd85;
  width: 48px;
  height: 48px;
  border: 2px solid #e1bd85;
  line-height: 48px;
  text-align: center;
  font-size: 22px;
  display: inline-block;
  margin-right: 10px;
}

.hero-image {
    background-image: url("http://cocobaydanang.com.vn/wp-content/uploads/2017/03/Boutique-Hotel-Cocobay-Da-Nang192.jpg");
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px 30px;
    background: rgba(0,0,0,0.25);
    h1{
      color: white;
      font-size: 50px;
    }
}

</style>
