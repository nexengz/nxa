import Vue from 'vue';

const mobileMenu = new Vue({
    el: '.header',
    methods: {
        toggleMenu() {
            const menuWrapper = this.$refs['mobile-menu'];
            menuWrapper.classList.toggle('mobile-menu--hidden');
        }
    }
});