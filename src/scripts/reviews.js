import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
    el: '.reviews',
    components: {
        Flickity
    },

    data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: true,
                freeScroll: false,
                contain: true,
                selectedAttraction: 0.2,
                friction: 0.8
            }
        }
    },

    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        },
        checkArrows() {
            if (this.$refs.flickity.selectedIndex() == 0) {
                this.$el.querySelector('.reviews-slider__control--left').disabled = true;
            } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1) {
                this.$el.querySelector('.reviews-slider__control--right').disabled = true;
            } else {
                this.$el.querySelector('.reviews-slider__control--left').disabled = false;
                this.$el.querySelector('.reviews-slider__control--right').disabled = false;
            }
        }

    }
});