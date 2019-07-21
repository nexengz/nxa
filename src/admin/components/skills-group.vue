<template lang="pug">
	form
		.form__title
			input(name="name" v-model="editedCategory.category" :disabled="inputDisabled").about__form-title
			.form__buttons(v-if="inputDisabled")
				button(type="button" name="edit" @click.prevent="toggleInput").form__pencil-btn
				button(type="button" name="remove" @click.prevent="removeSkillCategory").form__trash-btn
			.form__buttons(v-else)
				button(type="button" name="save" @click.prevent="updateSkillCategory").form__tick-btn
				button(type="button" name="cancel" @click.prevent="toggleInput").form__remove-btn
		hr.form-divider
		ul.form__content.form__content--about
			skills-item(
				v-for="skill in skills"
				:key="skill.id"
				:skill="skill"
			)
		.form__controls
			input(name="name" type="text" v-model="skill.title" placeholder="Новый навык").form__controls-name
			.form__controls-value-wrapper
				input(name="name" type="number" min="0" max="100" v-model="skill.percent").form__controls-value
			button(type="button" @click="addNewSkill").form__controls-btn
</template>

<script>
import {generateStdError} from '@/helpers/errorHandler'
import { mapActions } from 'vuex';
export default {
	props: {
	  category: Object,
		skills: Array
	},
	data() {
	  return {
      inputDisabled: true,
      editedCategory: {...this.category},
	  	skill: {
	  	  category: this.category.id,
				title: "",
				precent: ""
			}
		}
	},
	components: {
	  skillsItem: () => import('components/skills-item')
	},
	methods: {
    ...mapActions("tooltips", ["showTooltip"]),
	  ...mapActions('skills', ['addSkill']),
    ...mapActions('categories', ['updateCategory', 'removeCategory']),
	  async addNewSkill() {
	  	try {
				const { response } = await this.addSkill(this.skill);
				this.skill.title = "";
				this.skill.percent = "";
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
		},
		async updateSkillCategory() {
	    //console.log(this.editedCategory.category);
			this.editedCategory.title = this.editedCategory.category;
	    try {
	      const {response} = await this.updateCategory(this.editedCategory);
	      this.toggleInput();
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
		},
		async removeSkillCategory() {
	    try {
				const { response} = await this.removeCategory(this.editedCategory.id);
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
		},
		toggleInput() {
      if (!this.inputDisabled) {
        this.editedCategory = {...this.category};
      }
	    this.inputDisabled = !this.inputDisabled;
		}
	}
}
</script>