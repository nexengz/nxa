<template lang="pug">
	form
		.form__title
			input(name="name" v-model="categoryTitle" placeholder="Название новой группы").about__form-title
			.form__buttons
				button(type="button" name="add" @click.prevent="addSkillCategory").form__tick-btn
				button(type="button" name="remove" @click.revent="$emit('toggleAddForm')").form__remove-btn
		hr.form-divider
		.form__content
		.form__controls.disabled
			input(name="name" type="text" placeholder="" disabled).form__controls-name
			.form__controls-value-wrapper
				input(name="name" type="number" min="0" max="100" placeholder="" disabled).form__controls-value
			button(disabled="true").form__controls-btn
</template>

<script>
import {mapActions} from 'vuex';
import { generateStdError } from "@/helpers/errorHandler";
export default {
	data() {
	  return {
      categoryTitle: ""
		}
	},
	methods: {
    ...mapActions("tooltips", ["showTooltip"]),
		...mapActions('categories', ['addCategory']),
		async addSkillCategory() {
		  try {
        const {response} = await this.addCategory(this.categoryTitle);
        this.categoryTitle = "";
        this.$emit('toggleAddForm');
        this.showTooltip({
          type: "success",
          text: response.message
        });
			} catch (e) {
				//generateStdError(e);
        this.showTooltip({
          type: "error",
          text: e.message
        });
      }
		}
	}
}
</script>