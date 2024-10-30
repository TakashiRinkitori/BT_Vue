<template>
    <!-- Navbar -->
    <div class="navbar">
        <div class="navbar-content">
            <a href="#" class="navbar-item">HOME</a>
            <a href="#band" class="navbar-item hide-small">BAND</a>
            <a href="#tour" class="navbar-item hide-small">TOUR</a>
            <a href="#contact" class="navbar-item hide-small">CONTACT</a>
            <div class="dropdown hide-small">
                <button class="dropdown-button">
                    MORE <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item">Merchandise</a>
                    <a href="#" class="dropdown-item">Extras</a>
                    <a href="#" class="dropdown-item">Media</a>
                </div>
            </div>
            <a href="javascript:void(0)" class="search-button navbar-item"><i class="fa fa-search"></i></a>
        </div>
    </div>

    <!-- Navbar on small screens -->
    <div class="navbar-small" :class="{ show: navVisible }">
        <a href="#band" class="navbar-item" @click="closeNav">BAND</a>
        <a href="#tour" class="navbar-item" @click="closeNav">TOUR</a>
        <a href="#contact" class="navbar-item" @click="closeNav">CONTACT</a>
        <a href="#" class="navbar-item" @click="closeNav">MERCH</a>
    </div>
</template>
<script>
export default {
    name: "BandHeader",
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
/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: black;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    padding: 0%;
}

.navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar-item {
    color: white;
    text-decoration: none;
    padding: 12px 24px;
    transition: background-color 0.3s;
}

.navbar-item:hover {
    background-color: rgba(158, 160, 146, 0.7);
}

.navbar-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    text-align: j;
}
.search-button {
    margin-left: auto;
}
.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-button {
    color: white;
    background-color: black;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-item {
    color: black;
    padding: 10px;
    text-decoration: none;
}

.dropdown-item:hover {
    background-color: rgba(255, 0, 0, 0.1);
}

/* Responsive */
.navbar-small {
    display: none;
    background-color: black;
    padding: 10px 0;
}

.navbar-small.show {
    display: block;
}

.hide-small {
    display: inline-block;
}

@media (max-width: 768px) {
    .hide-small {
        display: none;
    }

    .navbar-small {
        display: block;
    }
}
</style>
