<template>
    <div class="w3-content" style="max-width:2000px;margin-top:46px">
      <!-- Slideshow -->
      <div class="mySlides w3-display-container w3-center" v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index">
        <img :src="slide.img" style="width:100%">
        <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
          <h3>{{ slide.title }}</h3>
          <p><b>{{ slide.description }}</b></p>   
        </div>
      </div>
  
      <!-- Band Section -->
      <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px" id="band">
        <h2 class="w3-wide">THE BAND</h2>
        <p class="w3-opacity"><i>We love music</i></p>
        <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class="w3-row w3-padding-32">
          <div class="w3-third" v-for="(member, index) in bandMembers" :key="index">
            <p>{{ member.name }}</p>
            <img :src="member.img" class="w3-round w3-margin-bottom" alt="Random name" style="width:60%">
          </div>
        </div>
      </div>
  
      <!-- Tour Section -->
      <div class="w3-black" id="tour">
        <div class="w3-container w3-content w3-padding-64 w3-left-align	" style="max-width:800px">
          <h2 class="w3-wide w3-center">TOUR DATES</h2>
          <p class="w3-opacity w3-center"><i>Don't forget to book your tickets!</i></p><br>
          <ul class="w3-ul w3-border w3-white w3-text-grey">
            <li class="w3-padding">September <span class="w3-tag w3-red w3-margin-left">Sold Out</span></li>
            <li class="w3-padding">October <span class="w3-tag w3-red w3-margin-left">Sold Out</span></li>
            <li class="w3-padding">November <span class="w3-badge w3-right w3-margin-right">3</span></li>
          </ul>
          <div class="w3-row-padding w3-padding-32" style="margin:0 -16px">
            <div class="w3-third w3-margin-bottom" v-for="(tour, index) in tours" :key="index">
              <img :src="tour.img" alt="Tour City" style="width:100%" class="w3-hover-opacity">
              <div class="w3-container w3-white">
                <p><b>{{ tour.city }}</b></p>
                <p class="w3-opacity">{{ tour.date }}</p>
                <p>{{ tour.description }}</p>
                <button class="w3-button w3-black w3-margin-bottom" @click="openModal">Buy Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Ticket Modal -->
      <div id="ticketModal" class="w3-modal" v-if="modalOpen">
        <div class="w3-modal-content w3-animate-top w3-card-4">
          <header class="w3-container w3-teal w3-center w3-padding-32"> 
            <span @click="closeModal" class="w3-button w3-teal w3-xlarge w3-display-topright">&times;</span>
            <h2 class="w3-wide"><i class="fa fa-suitcase w3-margin-right"></i> Tickets</h2>
          </header>
          <div class="w3-container">
            <p><label><i class="fa fa-shopping-cart"></i> Tickets, $15 each</label></p>
            <input class="w3-input w3-border" type="text" v-model="ticketQuantity" placeholder="Quantity?" />
            <p><label><i class="fa fa-user"></i> Send to</label></p>
            <input class="w3-input w3-border" type="text" v-model="email" placeholder="Enter email" />
            <button class="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i class="fa fa-check"></i></button>
            <button class="w3-button w3-red w3-section" @click="closeModal">Close <i class="fa fa-remove"></i></button>
            <p class="w3-right">Need <a href="#" class="w3-text-blue">help?</a></p>
          </div>
        </div>
      </div>
  
      <!-- Contact Section -->
      <div class="w3-container w3-content w3-padding-64" style="max-width:800px" id="contact">
        <h2 class="w3-wide w3-center">CONTACT</h2>
        <p class="w3-opacity w3-center"><i>Fans? Send us a message!</i></p>
        <div class="w3-row w3-padding-32">
          <div class="w3-col m6 w3-large w3-margin-bottom w3-left-align	">
            <i class="fa fa-map-marker " style="width:30px"></i> Chicago, USA<br>
            <i class="fa fa-phone" style="width:30px"></i> Phone: +00 151515<br>
            <i class="fa fa-envelope" style="width:30px"></i> Email: mail@mail.com<br>
          </div>
          <div class="w3-col m6">
            <form @submit.prevent="sendMessage">
              <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
                <div class="w3-half">
                  <input class="w3-input w3-border" type="text" placeholder="Name" required v-model="contactName" />
                </div>
                <div class="w3-half">
                  <input class="w3-input w3-border" type="text" placeholder="Email" required v-model="contactEmail" />
                </div>
              </div>
              <input class="w3-input w3-border" type="text" placeholder="Message" required v-model="contactMessage" />
              <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>

      <img src="/img/band/map.jpg" class="w3-image w3-greyscale-min" style="width:100%">
    </div>
  </template>
  
  <script>
  export default {
    name: 'BandBody',
    data() {
      return {
        slides: [
          { img: '/img/band/la.jpg', title: 'Los Angeles', description: 'We had a great time at Venice Beach!' },
          { img: '/img/band/ny.jpg', title: 'New York', description: 'The atmosphere in New York is amazing.' },
          { img: '/img/band/chicago.jpg', title: 'Chicago', description: 'Thank you Chicago - A night we will never forget.' }
        ],
        currentSlide: 0,
        modalOpen: false,
        ticketQuantity: 1,
        email: '',
        contactName: '',
        contactEmail: '',
        contactMessage: '',
        bandMembers: [
          { name: 'Member 1', img: '/img/band/bandmember.jpg' },
          { name: 'Member 2', img: '/img/band/bandmember.jpg' },
          { name: 'Member 3', img: '/img/band/bandmember.jpg' }
        ],
        tours: [
          { city: 'New York', date: 'Fri 27 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.', img: '/img/band/newyork.jpg' },
          { city: 'Paris', date: 'Sat 28 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.', img: '/img/band/paris.jpg' },
          { city: 'San Francisco', date: 'Sun 29 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.', img: '/img/band/sanfran.jpg' }
        ]
      };
    },
    mounted() {
      this.startCarousel();
    },
    methods: {
      startCarousel() {
        setInterval(() => {
          this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        }, 4000);
      },
      openModal() {
        this.modalOpen = true;
      },
      closeModal() {
        this.modalOpen = false;
      },
      sendMessage() {
        alert(`Message sent from ${this.contactName}`);
        this.contactName = '';
        this.contactEmail = '';
        this.contactMessage = '';
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  