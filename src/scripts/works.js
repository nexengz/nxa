import Vue from 'vue';

const sliderButtons = {
    template: '#slider-buttons'
}
const sliderThumbs = {
    template: '#slider-thumbs',
    components: {
        sliderButtons
    },
    props: {
        works: Array,
        currentWork: Object
    }
}
const sliderDisplay = {
    template: '#slider-display',
    components: {
        sliderThumbs
    },
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number
    },
    computed: {
        reversedWorks() {
            return [...this.works].reverse()
        }
    }
}
const sliderTags = {
    template: '#slider-tags',
    props: {
        tags: Array
    }
}
const sliderInfo = {
    template: '#slider-info',
    components: {
        sliderTags
    },
    props: {
        currentWork: Object
    },
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ');
        }
    }
}

new Vue ({
    el: '#slider-component',
    template: '#slider-container',
    components: {
        sliderDisplay, sliderInfo
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            const worksLength = this.works.length - 1;
            if (value < 0) this.currentIndex = worksLength;
            if (value > worksLength) this.currentIndex = 0;
        }
    },
    methods: {
        makeImagesArray(data) {
            return data.map(item => {
                const requireImg = require(`../images/content/${item.photo}`);
                item.photo = requireImg;
                return item;
            })
        },
        handleSlide(direction) {
            switch(direction)  {
                case 'next':
                    this.currentIndex++;
                    break;
                case 'prev':
                    this.currentIndex--;
                    break;
            }
        }
    },
    created() {
        const data = require('../data/works.json');
        this.works = this.makeImagesArray(data);
    }

});
