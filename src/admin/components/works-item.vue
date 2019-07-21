<template lang="pug">
	.works__item-inner
		.works__image
			img(src="../../images/content/1.jpg").works__image-img
			.works__tags
				.works__tag HTML
				.works__tag JS
				.works__tag php
		.works__item-content
			h3.works__title Заголовок работы
			.works__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
			a(href="").works__link https://google.com
			.works__control
				a.works__control-edit Править
				a.works__control-remove Удалить
</template>

<script>
import { mapActions} from 'vuex';
import {generateStdError} from "../helpers/errorHandler";
export default {
  props: {
    work: Object
	},
  data() {
    return {
    
		}
	},
	methods: {
    ...mapActions("works", ["removeWork"]),
    ...mapMutations("works", ["SET_CURRENT_WORK"]),
    updateWork() {
      this.SET_CURRENT_WORK(this.work.id);
      this.$emit("updateWork");
    },
    async removeExistedWork() {
      if (confirm("Удалить работу?") === false) return;
      try {
        const response = await this.removeWork(this.work.id);
				
      } catch (e) {
        generateStdError(e)
      }
    }
	}
}
</script>

<style>

</style>