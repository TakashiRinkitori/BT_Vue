<template>
  <div class="container-fluid p-0">
    <!-- Slideshow -->
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(slide, index) in slides" :key="index"
          :class="{ active: currentSlide === index }">
          <img :src="slide.img" class="d-block w-100" alt="..." style="height: 100vh; object-fit: cover;">
          <div class="carousel-caption d-none d-md-block">
            <h3>{{ slide.title }}</h3>
            <p><b>{{ slide.description }}</b></p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Band Section -->
    <div class="container my-5 text-center" style="max-width:800px" id="band">
      <h2 class="fw-bold">THE BAND</h2>
      <p class="text-muted"><i>We love music</i></p>
      <p class="text-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="row" style="padding: 32px 0px;">
        <div class="col-md-4" v-for="(member, index) in bandMembers" :key="index">
          <p>{{ member.name }}</p>
          <img :src="member.img" class="rounded mb-3" alt="Random name" style="width:60%">
        </div>
      </div>
    </div>

    <!-- Tour Section -->
    <div class="bg-dark text-white" id="tour">
      <div class="container my-5" style="max-width:800px">
        <h2 class="text-center fw-bold">TOUR DATES</h2>
        <p class="text-center text-muted"><i>Don't forget to book your tickets!</i></p>
        <ul class="list-group">
          <li class="list-group-item" style="text-align: left;">September <span
              class="badge bg-danger float-2 item-tickets">Sold Out</span></li>
          <li class="list-group-item" style="text-align: left;">October <span
              class="badge bg-danger float-2  item-tickets">Sold Out</span></li>
          <li class="list-group-item" style="text-align: left;">November <span
              class="badge bg-secondary float-end  item-tickets"
              style="background-color: black; border-radius: 45%;">3</span></li>
        </ul>
        <div class="row my-4">
          <div class="col-md-4" v-for="(tour, index) in tours" :key="index">
            <img :src="tour.img" class="img-fluid" alt="Tour City">
            <div class="card mt-2">
              <div class="card-body">
                <p class="card-title"><b>{{ tour.city }}</b></p>
                <p class="card-text" style="opacity: 70%;">{{ tour.date }}</p>
                <p class="card-text">{{ tour.description }}</p>
                <button class="btn btn-dark" @click="openModal">Buy Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ticket Modal -->
    <div class="modal fade" id="ticketModal" tabindex="-1" aria-labelledby="ticketModalLabel" aria-hidden="true"
      v-if="modalOpen">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ticketModalLabel"><i class="fa fa-suitcase"></i> Tickets</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <label><i class="fa fa-shopping-cart"></i> Tickets, $15 each</label>
            <input class="form-control mb-3" type="number" v-model="ticketQuantity" placeholder="Quantity?" min="1" />
            <label><i class="fa fa-user"></i> Send to</label>
            <input class="form-control mb-3" type="email" v-model="email" placeholder="Enter email" />
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary">PAY <i class="fa fa-check"></i></button>
            <button type="button" class="btn btn-danger" @click="closeModal">Close <i class="fa fa-remove"></i></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="container my-5" id="contact" style="max-width:800px; padding-top: 80px;">
      <h2 class="text-center fw-bold">CONTACT</h2>
      <p class="text-center text-muted"><i>Fans? Send us a message!</i></p>
      <div class="row text-left">
        <div class="col-md-6">
          <i class="fa fa-map-marker"></i> Chicago, USA<br>
          <i class="fa fa-phone"></i> Phone: +00 151515<br>
          <i class="fa fa-envelope"></i> Email: mail@mail.com<br>
        </div>
        <div class="col-md-6">
          <form @submit.prevent="sendMessage">
            <div class="row mb-2">
              <div class="col">
                <input class="form-control" type="text" placeholder="Name" required v-model="contactName" />
              </div>
              <div class="col">
                <input class="form-control" type="email" placeholder="Email" required v-model="contactEmail" />
              </div>
            </div>
            <input class="form-control mb-2" type="text" placeholder="Message" required v-model="contactMessage" />
            <button class="btn btn-dark float-end" type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>

    <img src="/img/band/map.jpg" class="img-fluid" alt="Map" style="width:100%;">
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
.container {
  padding: 64px 0px;
}

.item-tickets {
  font-size: 15px;
  border-radius: 0%;
  margin-left: 12px;
}

.card {
  text-align: left;
}

@media (max-width: 576px) {

  /* Điều chỉnh cho mobile */
  .container {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
