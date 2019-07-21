<template lang="pug">
	.container.works
		.works__info
			h1.section__title Блок "Работы"
		.works__section
			works-add(
				v-if="addFormVisible"
				)
		.works__section
			.works__item.list--third.works__item--add
				works-button(
					@click="toggleAddForm"
					)
			.works__item.list--third(
				v-for="work in works"
				:key="work.id"
				)
				works-item(
					:work="work"
					)
				

</template>

<script>
  import { generateStdError } from "@/helpers/errorHandler";
  import { mapActions, mapState } from 'vuex';
  export default {
    components: {
      worksAdd: () => import('components/works-add'),
			worksButton: () => import('components/works-button'),
			worksItem: () => import('components/works-item')
		},
		data() {
      return {
        addFormVisible: false
			}
		},
    computed: {
      ...mapState("works", { works: state => state.work })
    },
		methods: {
      ...mapActions("works", ["fetchWorks"]),
      toggleAddForm() {
        this.addFormVisible = !this.addFormVisible;
			},
      async getWorks() {
        try {
          await this.fetchWorks();
        } catch (e) {
          generateStdError(e);
        }
      },
      created() {
        this.getWorks();
      }
		}
  }
</script>

<style lang="postcss">
	@import "../../../styles/mixins.pcss";
	
	.works {
		display: flex;
		flex-direction: column;

		&__add-item {
			width: 100%;
			height: 100%;
			display: flex;
			text-align: center;
			color: #fff;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		&__add-plus {
			font-size: 72px;
			font-weight: 300;
			width: 150px;
			height: 150px;
			border: solid 2px #ffffff;
			border-radius: 50%;
			text-align: center;
			line-height: 150px;
			margin-bottom: 10px;
		}
		&__add-text {
			font-size: 18px;
			font-weight: bold;
			line-height: 1.67;
			text-align: center;
			color: #ffffff;
		}
		&__info {
			display: flex;
			align-items: center;
			padding-bottom: 30px;
		}
		&__section {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			align-items: stretch;
			flex-direction: row;
		}
		&__form-title {
			border: 0;
			width: 60%;
			padding: 5px 0;
			color: $text-color;
			font-size: 18px;
			font-weight: 600;
		}
		&__form {
			width: 48%;
		}
		&__item {
			box-shadow: 4.1px 2.9px 20px 0 #00000011;
			background-color: #ffffff;
			margin-bottom: 30px;
			padding-bottom: 60px;
			position: relative;
			&--add {
				background-image: linear-gradient(to right, #006aed, #3f35cb);
			}
		}
		&__item-content {
			padding: 30px;
		}
		&__image {
			position: relative;
			width: 100%;
		}
		&__image-img {
			width: 100%;
			height: auto;
		}
		&__tags {
			position: absolute;
			bottom: 10px;
			right: 10px;
			display: flex;
			justify-content: flex-end;
		}
		&__tag {
			background: #f4f4f4;
			height: 30px;
			line-height: 30px;
			font-size: 13px;
			font-weight: 600;
			padding: 0 15px;
			margin-left: 10px;
			border-radius: 16px;
			text-align: center;
			color: rgba($text-color, 0.7);
		}
		&__title {
			margin-bottom: 20px;
			font-size: 18px;
			font-weight: bold;
			color: $text-color;
		}
		&__text {
			font-size: 16px;
			font-weight: 600;
			line-height: 1.88;
			color: rgba($text-color, 0.7);
			margin-bottom: 20px;
		}
		&__link {
			font-size: 16px;
			font-weight: 600;
			line-height: 1.88;
			color: $main-color;
			text-decoration: none;
		}
		&__control {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			bottom: 30px;
			left: 50%;
			transform: translateX(-50%);
			padding: 0 30px;
			width: 100%;
		}
		&__control-edit {
			color: rgba($text-color, 0.5);
			font-size: 16px;
			font-weight: 600;
			line-height: 1.88;
			&:after {
				content: '';
				width: 15px;
				height: 15px;
				margin-left: 10px;
				display: inline-block;
				background: svg-load("pencil.svg", fill="$main-color") center center no-repeat / contain;
			}

		}
		&__control-remove {
			color: rgba($text-color, 0.5);
			font-size: 16px;
			font-weight: 600;
			line-height: 1.88;
			&:after {
				content: '';
				width: 15px;
				height: 15px;
				margin-left: 10px;
				display: inline-block;
				background: svg-load("cross.svg", fill="#bf2929") center center no-repeat / contain;
			}
		}

	}
	.list {
		&--full {
			width: 100%;
		}
		&--half {
			width: calc(100% / 2 -15px);
		}
		&--third {
			width: calc(100% / 3 -15px);
		}
	}
</style>



