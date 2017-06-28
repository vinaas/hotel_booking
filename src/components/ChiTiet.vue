<template>
  <div class="">
  
    <!-- SUB BANNER -->
    <section class="section-sub-banner bg-16">
      <div class="awe-overlay"></div>
      <div class="sub-banner">
        <div class="container">
          <div class="text text-center">
            <h2>{{roomDetail.title}}</h2>
            <p v-html="roomDetail.body_html"></p>
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
                  <img src="/static/images/room/detail/lager/img-1.jpg" alt="">
                  <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
                </div>
              
              </div>
              <!-- END / LAGER IMGAE -->
  
      
  
            </div>
  
            <div class="col-lg-3">
  
              <!-- FORM BOOK -->
              <div class="room-detail_book">
  
                <div class="room-detail_total">
                  <img src="/static/images/icon-logo.png" alt="" class="icon-logo">
  
                  <h6>STARTING ROOM FROM</h6>
  
                  <p class="price">
                    <span class="amout">${{roomDetail.price}}</span> /days
                  </p>
                </div>
  
                <div class="room-detail_form">
                  <label>Arrive</label>
                  <input type="text" class="awe-calendar from" placeholder="Arrive Date">
                  <label>Depature</label>
                  <input type="text" class="awe-calendar to" placeholder="Departure Date">
                  <label>Adult</label>
                  <select class="awe-select">
                    <option>1</option>
                    <option>2</option>
                    <option selected>3</option>
                    <option>4</option>
                  </select>
                  <label>Chirld</label>
                  <select class="awe-select">
                    <option>1</option>
                    <option>2</option>
                    <option selected>3</option>
                    <option>4</option>
                  </select>
                  <button class="awe-btn awe-btn-13">Book Now</button>
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
                <li>
                  <a href="room-detail.html#overview" data-toggle="tab">OVERVIEW</a>
                </li>
                <li class="active">
                  <a href="room-detail.html#amenities" data-toggle="tab">amenities</a>
                </li>
                <li>
                  <a href="room-detail.html#package" data-toggle="tab">PACKAGE</a>
                </li>
                <li>
                  <a href="room-detail.html#rates" data-toggle="tab">RATES</a>
                </li>
                <li>
                  <a href="room-detail.html#calendar" data-toggle="tab">Calendar</a>
                </li>
              </ul>
            </div>
  
            <div class="col-md-9">
              <div class="room-detail_tab-content tab-content">
  
                <!-- OVERVIEW -->
                <div class="tab-pane fade" id="overview">
  
                  <div class="room-detail_overview">
                    <h5 class='text-uppercase
                                          '>de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                    <p>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
  
                    <div class="row">
                      <div class="col-xs-6 col-md-4">
                        <h6>SPECIAL ROOM</h6>
                        <ul>
                          <li>Max: 4 Person(s)</li>
                          <li>Size: 35 m2 / 376 ft2</li>
                          <li>View: Ocen</li>
                          <li>Bed: King-size or twin beds</li>
                        </ul>
                      </div>
                      <div class="col-xs-6 col-md-4">
                        <h6>SERVICE ROOM</h6>
                        <ul>
                          <li>Oversized work desk</li>
                          <li>Hairdryer</li>
                          <li>Iron/ironing board upon request</li>
                        </ul>
                      </div>
                    </div>
  
                  </div>
  
                </div>
                <!-- END / OVERVIEW -->
  
                <!-- AMENITIES -->
                <div class="tab-pane fade active in" id="amenities">
  
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
  
                <!-- CALENDAR -->
                <div class="tab-pane fade" id="calendar">
  
                  <div class="room-detail_calendar-wrap row">
  
                    <div class="col-sm-6">
                      <!-- CALENDAR ITEM -->
                      <div class="calendar_custom">
  
                        <div class="calendar_title">
                          <span class="calendar_month">JUNE</span>
                          <span class="calendar_year">2015</span>
  
                          <a href="room-detail.html#" class="calendar_prev calendar_corner">
                            <i class="lotus-icon-left-arrow"></i>
                          </a>
                        </div>
  
                        <table class="calendar_tabel">
  
                          <thead>
                            <tr>
                              <th>Su</th>
                              <th>Mo</th>
                              <th>Tu</th>
                              <th>We</th>
                              <th>Th</th>
                              <th>Fr</th>
                              <th>Sa</th>
                            </tr>
                          </thead>
  
                          <tr>
                            <td></td>
                            <td class="apb-calendar_current-date">
                              <a href="room-detail.html#">
                                <small>1</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>2</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>3</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>4</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>5</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>6</small>
                              </a>
                            </td>
                          </tr>
  
                          <tr>
                            <td>
                              <a href="room-detail.html#">
                                <small>7</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>8</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>9</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>10</small>
                              </a>
                            </td>
                            <td class="apb-calendar_current-select">
                              <a href="room-detail.html#">
                                <small>11</small>
                              </a>
                            </td>
                            <td class="apb-calendar_current-select">
                              <a href="room-detail.html#">
                                <small>12</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>13</small>
                              </a>
                            </td>
                          </tr>
  
                          <tr>
                            <td>
                              <a href="room-detail.html#">
                                <small>14</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>15</small>
                              </a>
                            </td>
                            <td class="not-available">
                              <a href="room-detail.html#">
                                <small>16</small>
                              </a>
                            </td>
                            <td class="not-available">
                              <a href="room-detail.html#">
                                <small>17</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>18</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>19</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>20</small>
                              </a>
                            </td>
                          </tr>
  
                          <tr>
                            <td>
                              <a href="room-detail.html#">
                                <small>21</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>22</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>23</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>24</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>25</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>26</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>27</small>
                              </a>
                            </td>
                          </tr>
  
                          <tr>
                            <td>
                              <a href="room-detail.html#">
                                <small>28</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>29</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>30</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>31</small>
                              </a>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
  
                        </table>
  
                      </div>
                      <!-- END CALENDAR ITEM -->
                    </div>
  
                    <div class="col-sm-6">
  
                      <!-- CALENDAR ITEM -->
                      <div class="calendar_custom">
  
                        <div class="calendar_title">
                          <span class="calendar_month">JUNE</span>
                          <span class="calendar_year">2015</span>
  
                          <a href="room-detail.html#" class="calendar_next calendar_corner">
                            <i class="lotus-icon-right-arrow"></i>
                          </a>
                        </div>
  
                        <table class="calendar_tabel">
  
                          <thead>
                            <tr>
                              <th>Su</th>
                              <th>Mo</th>
                              <th>Tu</th>
                              <th>We</th>
                              <th>Th</th>
                              <th>Fr</th>
                              <th>Sa</th>
                            </tr>
                          </thead>
  
                          <tr>
                            <td></td>
                            <td class="apb-calendar_current-date">
                              <a href="room-detail.html#">
                                <small>1</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>2</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>3</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>4</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>5</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>6</small>
                              </a>
                            </td>
                          </tr>
  
                          <tr>
                            <td>
                              <a href="room-detail.html#">
                                <small>7</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>8</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>9</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>10</small>
                              </a>
                            </td>
                            <td class="apb-calendar_current-select">
                              <a href="room-detail.html#">
                                <small>11</small>
                              </a>
                            </td>
                            <td class="apb-calendar_current-select">
                              <a href="room-detail.html#">
                                <small>12</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>13</small>
                              </a>
                            </td>
                          </tr>
  
                          <tr>
                            <td>
                              <a href="room-detail.html#">
                                <small>14</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>15</small>
                              </a>
                            </td>
                            <td class="not-available">
                              <a href="room-detail.html#">
                                <small>16</small>
                              </a>
                            </td>
                            <td class="not-available">
                              <a href="room-detail.html#">
                                <small>17</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>18</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>19</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>20</small>
                              </a>
                            </td>
                          </tr>
  
                          <tr>
                            <td>
                              <a href="room-detail.html#">
                                <small>21</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>22</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>23</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>24</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>25</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>26</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>27</small>
                              </a>
                            </td>
                          </tr>
  
                          <tr>
                            <td>
                              <a href="room-detail.html#">
                                <small>28</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>29</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>30</small>
                              </a>
                            </td>
                            <td>
                              <a href="room-detail.html#">
                                <small>31</small>
                              </a>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
  
                        </table>
  
                      </div>
                      <!-- END CALENDAR ITEM -->
                    </div>
  
                    <div class="calendar_status text-center col-sm-12">
                      <span>Available</span>
                      <span class="not-available">Not Available</span>
                    </div>
                  </div>
  
                </div>
                <!-- END / CALENDAR -->
  
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
      roomID: this.$route.params.roomId
    }
  },
  computed: {
    roomDetailIndex: function () {
      return this.rooms.findIndex(a => a.permalink === this.roomID)
    },
    roomDetail: function () {
      return this.rooms[this.roomDetailIndex];
    }
  },
  created() {
    console.log('this', this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
