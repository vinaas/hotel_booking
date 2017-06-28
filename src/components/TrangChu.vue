<template>
  <div class="hello">
  
    <section class="section-accomd awe-parallax bg-14">
      <div class="container">
        <div class="accomd-modations">
          <div class="row">
            <div class="col-md-12">
              <div class="accomd-modations-header">
                <h2 class="heading">ROOMS & RATES</h2>
                <img src="static/images/icon-accmod.png" alt="icon">
                <p>Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
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
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
