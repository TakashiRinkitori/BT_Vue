<template>
    <footer class="bg-dark text-white text-center py-4">
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook" class="text-white mx-2">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram" class="text-white mx-2">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.snapchat.com" target="_blank" aria-label="Snapchat" class="text-white mx-2">
            <i class="fab fa-snapchat-ghost"></i>
        </a>
        <a href="https://www.pinterest.com" target="_blank" aria-label="Pinterest" class="text-white mx-2">
            <i class="fab fa-pinterest"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" aria-label="Twitter" class="text-white mx-2">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn" class="text-white mx-2">
            <i class="fab fa-linkedin"></i>
        </a>
        <p class="mt-3">
            Copyright By <a href="https://getbootstrap.com" target="_blank" class="text-white"> Minh</a>
        </p>
    </footer>
</template>

<script>
export default {
    name: 'BootstrapFooter',
};
</script>

<style scoped>
footer {
    position: relative;
    bottom: 0;
    width: 100%;
}

footer a:hover {
    opacity: 0.7;
}
</style>
