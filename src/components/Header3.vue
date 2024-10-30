<template>
    <!-- Navbar -->
    <div class="container-fluid">
        <div class="navbar navbar-expand-lg navbar-black bg-black fixed-top">
            <a class="nav-item nav-link" style="color: white;" href="#" @click="closeNav">HOME</a>
            <a class="navbar-toggler" type="button" @click="toggleNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </a>
            <div :class="['collapse', 'navbar-collapse', { 'show': navVisible }]" id="navbarNav">
                <div class="navbar-nav mr-auto">
                    <a style="padding: 12px 24px; color: white;" class="nav-item nav-link" href="#band" @click="closeNav">BAND</a>
                    <a style="padding: 12px 24px;" class="nav-item nav-link" href="#tour" @click="closeNav">TOUR</a>
                    <a style="padding: 12px 24px;" class="nav-item nav-link" href="#contact" @click="closeNav">CONTACT</a>
                    <div class="dropdown">
                        <a class="nav-item nav-link dropdown-toggle" style="padding: 12px 24px; color: white;" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            MORE
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Merchandise</a>
                            <a class="dropdown-item" href="#">Extras</a>
                            <a class="dropdown-item" href="#">Media</a>
                        </div>
                    </div>
                </div>
                <a href="#" style="border-color: black;" class="btn btn-outline-light my-2 my-sm-0" @click="closeNav">
                    <i class="fa fa-search"></i>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'BandHeader',
    data() {
        return {
            navVisible: false,
        };
    },
    methods: {
        toggleNav() {
            this.navVisible = !this.navVisible;
        },
        closeNav() {
            this.navVisible = false;
        },
    },
};
</script>

<style scoped>
.navbar {
    padding: 0px 0px;
}

.nav-link {
    color: white;
    padding: 0%;
}

.nav-item {
    padding: 12px 24px;
}

.navbar-toggler {
    color: white;
}

.nav-link:hover {
    background-color: rgba(240, 224, 224, 0.922);
    border-radius: 4px;
}
</style>