<template lang="pug">
	li.form__row
		input(
			name="name"
			type="text"
			v-model="editedSkill.title"
			:disabled="inputDisabled"
			).form__row-name
		.form__row-value-wrapper
			input(
				name="name"
				type="number"
				min="0"
				max="100"
				v-model="editedSkill.percent"
				:disabled="inputDisabled").form__row-value
		.form__buttons(v-if="inputDisabled")
			button(name="edit" @click.prevent="toggleSkillEdit").form__pencil-btn
			button(name="remove" @click.prevent="removeThisSkill").form__trash-btn
		.form__buttons(v-else)
			button(type="button" name="save" @click.prevent="saveSkill").form__tick-btn
			button(type="button" name="remove" @click.prevent="toggleSkillEdit").form__remove-btn
</template>

<script>
import { generateStdError } from '@/helpers/errorHandler';
import {mapActions} from 'vuex';
export default {
  props: {
    skill: Object
	},
	data() {
    return {
      inputDisabled: true,
			editedSkill: {...this.skill}
		}
	},
  methods: {
    ...mapActions("tooltips", ["showTooltip"]),
    ...mapActions('skills', ['removeSkill', 'editSkill']),
    async removeThisSkill() {
      try {
				const response = await this.removeSkill(this.skill.id);
				console.log(response);
        this.showTooltip({
          type: "success",
          text: response.data.message
        });
      } catch (e) {
        this.showTooltip({
          type: "error",
          text: e.message
        });
      }
    
		},
    toggleSkillEdit() {
      if (!this.inputDisabled) {
        this.editedSkill = {...this.skill};
			}
      this.inputDisabled = !this.inputDisabled;
		},
		async saveSkill() {
  		try {
  		  const {response} = await this.editSkill(this.editedSkill);
  		  this.toggleSkillEdit();
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