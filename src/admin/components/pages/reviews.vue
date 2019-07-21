<template lang="pug">
	.container.reviews
		.reviews__info
			h1.section__title Блок "Отзывы"
		.reviews__section
			form.form.reviews__form.list--full
				.form__title
					h2.works__form-title Добавить отзыв
				hr.form-divider
				.form__content
					.form__content-left.form__content-left--reviews
						.form__row.form__row--vertical
							.form__user
								label(
									for="image"
									:data-value="avatarButtonValue"
									:class="{'hasPhoto' : this.photoUrl.length}"
									).form__file-label
									.form__user-photo(:style="{'background-image': `url(${this.photoUrl})`}")
									input(name="image" type="file" placeholder="" @change="loadPhoto").form__file
					.form__content-right.form__content-right--reviews
						.form__row
							.form__row.form__row--half
								label(for="name").form__label Имя автора
								input(name="name" type="text").form__input
							.form__row.form__row--half
								label(for="title").form__label Титул автора
								input(name="title" type="text").form__input
						.form__row.form__row--vertical
							label(for="review").form__label Отзыв
							textarea(name="review").form__textarea
				.form__controls
					a(href="").form__controls-cancel Отменить
					input(name="name" type="submit" value="Сохранить").form__controls-submit
		.reviews__section
			.reviews__item.list--third.reviews__item--add
				a.reviews__add-item
					.reviews__add-plus +
					.reviews__add-text Добавить отзыв
			.reviews__item.list--third.reviews__item--add
				a.reviews__add-item
					.reviews__add-plus +
					.reviews__add-text Добавить отзыв
			//- for (var i = 0; i < 3; i++)
			.reviews__item.list--third
				.reviews__item-content
					.reviews__user
						.reviews__image
							img(src="../../../images/content/user.jpg").reviews__image-img
						.reviews__details
							.reviews__name Владимир Сабанцев
							.reviews__title Разработчик
					hr.form-divider
					.reviews__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
					.reviews__control
						a.reviews__control-edit Править
						a.reviews__control-remove Удалить
</template>

<script>
import {generateStdError} from '@/helpers/errorHandler';
import {mapActions, mapState} from 'vuex';
export default {
  data() {
    return {
      avatarButtonValue: "Добавить фото",
      photoUrl: "",
			review: {
        photo: ""
			}
			
		}
	},
  methods: {
    loadPhoto(e) {
    	const file = e.target.files[0];
    	this.review.photo = file;
    	
    	const reader = new FileReader();
    	try {
				reader.readAsDataURL(file);
				reader.onload = () => {
				  this.photoUrl = reader.result;
          this.avatarButtonValue = "Изменить фото";
				}
      } catch (e) {
				generateStdError(e);
      }
		}
	}
}
</script>

<style lang="postcss" scoped>
	@import "../../../styles/mixins.pcss";
	.reviews {
		display: flex;
		flex-direction: column;

		&__info {
			display: flex;
			align-items: center;
			padding-bottom: 30px;
		}
		&__section {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			flex-direction: row;
		}
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
		&__user {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__name {
			font-size: 18px;
			font-weight: bold;
			color: $text-color;
		}
		&__title {
			font-size: 16px;
			font-weight: 600;
			color: rgba($text-color, 0.5);
		}
		&__details {
			display: flex;
			width: calc(100% - 50px- 25px);
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
		}
		&__image {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			overflow: hidden;
		}
		&__text {
			font-size: 16px;
			font-weight: 600;
			line-height: 1.88;
			color: rgba($text-color, 0.7);
			margin-bottom: 20px;
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
</style>



