<template lang="pug">
	.container.about(@closeAddForm="addFormVisible = false")
		.about__info
			h1.section__title Блок "Обо мне"
			button(@click="toggleAddForm" v-if="!addFormVisible").add-btn Добавить группу
		ul.about__section
			li.form.about__form.list--half(v-if="addFormVisible")
				skills-add(@toggleAddForm="toggleAddForm")
			li.form.about__form.list--half(
				v-for="category in categories"
				:key="category.id"
			)
				skills-group(
					:category="category"
					:skills="filterCategorySkills(category.id)"
					)


</template>

<script>
import { generateStdError } from "@/helpers/errorHandler";
import {mapActions, mapState} from 'vuex';
export default {
	components: {
		skillsAdd: () => import('components/skills-add'),
		skillsGroup: () => import('components/skills-group')
	},
	data() {
		return {
			addFormVisible: false
		}
	},
	computed: {
	  ...mapState('categories', {
			categories: state => state.categories
		}),
    ...mapState('skills', {
      skills: state => state.skills
    })
	},
	methods: {
    ...mapActions("tooltips", ["showTooltip"]),
		...mapActions('categories', ['getCategories']),
		...mapActions('skills', ['getSkills']),
		filterCategorySkills(catid) {
		  return this.skills.filter(skill => skill.category === catid);
		},
		toggleAddForm() {
		  this.addFormVisible = !this.addFormVisible;
		}
	},
	async created() {
	  try {
			await this.getCategories();
    } catch (e) {
      //generateStdError(e);
      this.showTooltip({
        type: "error",
        text: e.message
      });
    }
    try {
      await this.getSkills();
    } catch (e) {
      //generateStdError(e);
      this.showTooltip({
        type: "error",
        text: e.message
      });
    }
	}
	
}
</script>

<style lang="postcss">
	@import "../../../styles/mixins.pcss";
	.about {
		display: flex;
		flex-direction: column;
		&__info {
			display: flex;
			align-items: center;
			padding-bottom: 30px;
		}
		&__section {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			flex-direction: row;
		}
		&__form-title {
			border: 0;
			width: 60%;
			padding: 5px 0;
			flex: 0.6;
			border-bottom: 1px solid $text-color;;
			color: $text-color;
			background: none;
			font-size: 18px;
			font-weight: 600;
			transition: all 0.2s ease-in-out;
			&:disabled {
				border-bottom: 1px solid transparent;
				transition: all 0.2s ease-in-out;
			}
			&:focus {
				border-bottom: 1px solid $main-color;
				transition: all 0.2s ease-in-out;
			}
			
		}
	}
</style>



