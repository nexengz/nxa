<template lang="pug">
	.wrapper
		section.auth
			.auth__content
				.auth__title Авторизация
				button.auth__close
				form.auth__form
					.auth__input-wrapper
						label.auth__label Логин
						.auth__icon.auth__icon--user
						input(type="text" name="login").auth__input
						.auth__tooltip
					.auth__input-wrapper
						label.auth__label Пароль
						.auth__icon.auth__icon--password
						input(type="password" name="password").auth__input
						.auth__tooltip
					button.auth__submit Отправить
		header.header
			.container
				.header__info
					.user
						.user__avatar
							img(src="../images/content/user.jpg").user__avatar-img
						.user__name Владимир Астаханов
					.header__title Панель администрирования
				a.exit-btn Выйти
		nav.menu
			.container
				ul.menu__list
					li.menu__item
						a(href="").menu__link Обо мне
					li.menu__item
						a(href="").menu__link Работы
					li.menu__item
						a(href="").menu__link Отзывы
		main.content
			.container.about
				.about__info
					h1.section__title Блок "Работы"
					a(href="").add-btn Добавить группу
				.about__section
					form.form.about__form.list--half
						.form__title
							input(name="name" value="Название новой группы").about__form-title
							.form__buttons
								button(name="add").form__tick-btn
								button(name="remove").form__remove-btn
						hr.form-divider
						.form__content

						.form__controls
							input(name="name" type="text" placeholder="" disabled).form__controls-name
							.form__controls-value-wrapper
								input(name="name" type="number" min="0" max="100" placeholder="" disabled).form__controls-value
							button(disabled="true").form__controls-btn
					- for (var i = 0; i < 2; i++)
						form.form.about__form.list--half
							.form__title
								input(name="name" value="Frontend").about__form-title
								.form__buttons
									button(name="save").form__pencil-btn
							hr.form-divider
							.form__content.form__content--about
								- for (var j = 0; j < 4; j++)
									.form__row
										input(name="name" type="text" placeholder="HTML").form__row-name
										.form__row-value-wrapper
											input(name="name" type="number" min="0" max="100" placeholder="50").form__row-value
										.form__buttons
											button(name="add").form__pencil-btn
											button(name="remove").form__trash-btn
							.form__controls
								input(name="name" type="text" placeholder="Новый навык").form__controls-name
								.form__controls-value-wrapper
									input(name="name" type="number" min="0" max="100" placeholder="100").form__controls-value
								button(href="").form__controls-btn
			.container.works
				.works__info
					h1.section__title Блок "Обо мне"
				.works__section
					form.form.works__form.list--full
						.form__title
							h2.works__form-title Редактирование работы
						hr.form-divider
						.form__content
							.form__content-left
								.form__row
									label(for="image").form__label-upload
										.form__label-text Перетащите либо загрузите изображение
										input(name="image" type="file" placeholder="item").form__file
										button.form__file-btn Загрузить
							.form__content-right
								.form__row.form__row--vertical
									label(for="name").form__label Название
									input(name="name" type="text").form__input
								.form__row.form__row--vertical
									label(for="link").form__label Ссылка
									input(name="link" type="text").form__input
								.form__row.form__row--vertical
									label(for="desc").form__label Описание
									textarea(name="desc").form__textarea
								.form__row.form__row--vertical
									label(for="tags").form__label Добавление тега
									input(name="tags").form__input
									.form__tags
										.form__tag HTML
										.form__tag JS
										.form__tag php
						.form__controls
							a(href="").form__controls-cancel Отменить
							input(name="name" type="submit" value="Сохранить").form__controls-submit

				.works__section
					.works__item.list--third.works__item--add
						a.works__add-item
							.works__add-plus +
							.works__add-text Добавить работу

					- for (var i = 0; i < 6; i++)
						.works__item.list--third
							.works__image
								img(src="../images/content/1.jpg").works__image-img
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
									input(name="image" type="file" placeholder="").form__file
									a.form__file-link Добавить фото
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
					.reviews__item.list--third.works__item--add
						a.reviews__add-item
							.reviews__add-plus +
							.reviews__add-text Добавить отзыв

					- for (var i = 0; i < 3; i++)
						.reviews__item.list--third
							.reviews__item-content
								.reviews__user
									.reviews__image
										img(src="../images/content/user.jpg").reviews__image-img
									.reviews__details
										.reviews__name Владимир Сабанцев
										.reviews__title Разработчик
								hr.form-divider
								.reviews__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur dignissimos ducimus ea eaque earum eum impedit ipsam laborum, modi nemo officiis optio possimus recusandae repellendus sunt suscipit tenetur velit!
								.reviews__control
									a.reviews__control-edit Править
									a.reviews__control-remove Удалить

		.message.message--green
			.message__container
				.message__text Сообщение отправлено
				button.message__close
		.message.message--orange
			.message__container
				.message__text Сервер перегружен
				button.message__close
		.message.message--red
			.message__container
				.message__text Сообщение не отправлено
				button.message__close


</template>
<style lang="postcss">
	@import "../styles/mixins.pcss";
	@import "../styles/layout/base.pcss";
	@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

	.admin-wrapper {
		display: flex;

		.maincontent {
			width: 100%;
			display: flex;
			flex-direction: column;
			min-height: 100vh;
		}
	}
	.container {
		width: 100%;
		display: flex;
		padding: 0 30px;
		justify-content: space-between;
	}
	.header {
		background-image: linear-gradient(to right, #3e3e59, #454573);
		color: #fff;
		padding: 15px 0;

		&__info {
			display: flex;
			align-items: center;
		}
		&__menu {

		}
		&__title {
			color: rgba(#fff, 0.5);
		}
	}
	.user {
		display: flex;
		align-items: center;
		&__avatar {
			max-width: 45px;
			max-height: 45px;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 20px;
		}
		&__avatar-img {
			max-height: 45px;
			max-width: 45px;
		}
		&__name {
			margin-right: 30px;
			font-size: 18px;
			font-weight: 600;
		}
	}
	.menu {
		background: #fff;

		&__list {
			list-style: none;
			display: flex;
			justify-content: flex-start;
			align-items: stretch;
		}
		&__item {
			border-bottom: 1px solid transparent;
			&:hover {
				border-bottom: 1px solid $main-color;
			}
		}
		&__link {
			padding: 0 20px;
			line-height: 77px;
			text-decoration: none;
			color: $text-color;
			&:hover {
				color: $main-color;
			}
		}
	}
	.content {
		position: relative;
		background: #f9f9f9;
		background-size: cover;
		height: 100%;
		padding-top: 60px;
		&:before {
			content: "";
			background: url("~images/admin/bg.jpg") center center no-repeat;
			opacity: 0.1;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		}
	}
	.exit-btn {
		line-height: 45px;
		&:hover {
			text-decoration: underline;
		}
	}
	.add-btn {
		color: $main-color;
		text-decoration: none;
		margin-left: 50px;
		font-weight: 600;
		&:before {
			content: "+";
			background-image: linear-gradient(to right, #006aed, #3f35cb);
			width: 21px;
			height: 21px;
			display: inline-block;
			text-align: center;
			font-size: 15px;
			font-weight: 600;
			color: #fff;
			border-radius: 50%;
			margin-right: 15px;
		}
		&:hover {
			text-decoration: underline;
		}
	}
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
			 border-bottom: 1px solid $text-color;
			 color: $text-color;
			 background: none;
			 font-size: 18px;
			 font-weight: 600;
			 &:focus {
				 outline: none;
			 }
		 }
	 }
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
			justify-content: space-between;
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
			justify-content: space-between;
			flex-wrap: wrap;
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
	.section__title {
		font-size: 21px;
		font-weight: bold;
		color: $text-color;
	}
	.form-divider {
		color: #ffffffe6;
		margin: 20px 0;
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
	.form {
		box-shadow: 4.1px 2.9px 20px 0 #00000011;
		background-color: #ffffff;
		padding: 20px;
		margin-bottom: 30px;

		&__content {
			min-height: 200px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			&--about {
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-start;
			}
		}
		&__content-left {
			width: 40%;
			&--reviews {
				width: 250px;
			}
		}
		&__content-right {
			width: calc(60% - 15px);
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			&--reviews {
				width: calc(100% - 15px -250px);
			}
		}
		&__label {
			width: 100%;
			font-size: 16px;
			font-weight: 600;
			line-height: 1.88;
			color: rgba($text-color, 0.5);
		}
		&__user {
			width: 200px;
			height: 200px;
			border-radius: 50%;
			background: #dee4ed;
			display: block;
			margin: 0 auto 20px;
			position: relative;
			&:before {
				position: absolute;
				content: '';
				width: 150px;
				height: 150px;

				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: svg-load("user.svg", fill="#fff") center center no-repeat / contain;
			}
		}
		&__input {
			width: 100%;
			padding: 10px 3px;
			border: 0;
			border-bottom: 1px solid rgba($text-color, 0.5);
			margin-bottom: 20px;
			font-size: 16px;
			font-weight: 600;
			color: $text-color;
		}
		&__textarea {
			font-family: "Open Sans";
			width: 100%;
			min-height: 150px;
			padding: 20px;
			border: 1px solid rgba($text-color, 0.5);
			margin-bottom: 20px;
			font-size: 16px;
			font-weight: 600;
			color: $text-color;
		}
		&__tags {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		&__tag {
			background: #f4f4f4;
			height: 30px;
			line-height: 30px;
			font-size: 13px;
			font-weight: 600;
			padding: 0 30px 0 10px;
			margin-right: 10px;
			border-radius: 16px;
			color: rgba($text-color, 0.7);
			position: relative;
			&:after {
				content: '';
				position: absolute;
				width: 12px;
				height: 12px;
				transform: translateY(-50%);
				right: 10px;
				top: 50%;
				background: svg-load("cross.svg", fill="$text-color") center center no-repeat / contain;
			}
		}
		&__row {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			&--vertical {
				flex-direction: column;
				align-items: flex-start;
			}
			&--half {
				width: calc(50% - 15px);
				flex-direction: column;

			}
		}
		&__label-upload {
			width: calc(100% - 30px);
			margin: 0 auto;
			height: 275px;
			cursor: pointer;
			border: dashed 1px #a1a1a1;
			background-color: #dee4ed;
		}
		&__label-text {
			width: 60%;
			padding: 20% 0 0;
			margin: 0 auto;
			text-align: center;
			font-size: 16px;
			font-weight: 600;
			line-height: 2.12;
			color: rgba($text-color, 0.5);
		}
		&__file {
			display: none;
		}
		&__file-btn {
			margin: 0 auto;
			padding: 0 25px;
			height: 50px;
			display: block;
			border-radius: 25px;
			line-height: 50px;
			text-align: center;
			font-size: 16px;
			font-weight: bold;
			color: #ffffff;
			text-transform: uppercase;
			background-image: linear-gradient(to right, #006aed, #3f35cb);
		}
		&__file-link {
			margin: 0 auto;
			color: $main-color;
			text-decoration: none;
			font-size: 16px;
			font-weight: 600;
		}
		&__row-name {
			flex: 0.7;
			max-width: 70%;
			margin-right: 10px;
			border: 0;
			padding: 5px 0;
			border-bottom: 1px solid transparent;
			color: $text-color;
			background: none;
			font-size: 16px;
			font-weight: normal;
			&:focus {
				outline: none;
				border-bottom: 1px solid $main-color;
			}
		}
		&__row-value {
			width: 100%;
			border: 0;
			padding: 5px 30px 5px 10px;
			border-bottom: 1px solid transparent;
			color: $text-color;
			background: none;
			font-size: 16px;
			font-weight: normal;
			position: relative;
			&:focus {
				outline: none;
				border-bottom: 1px solid $main-color;
			}
		}
		&__row-value-wrapper {
			flex: 0.15;
			max-width: 15%;
			position: relative;
			margin-right: 30px;
			&:after {
				content: "%";
				position: absolute;
				color: rgba($text-color, 0.7);
				font-size: 16px;
				font-weight: normal;
				display: block;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		&__title {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__buttons {
			flex: 0.1;
			width: 10%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__tick-btn {
			border: 0;
			width: 15px;
			height: 15px;
			background: svg-load("tick.svg", fill="#00d70a") center center no-repeat / contain;
		}
		&__remove-btn {
			border: 0;
			width: 15px;
			height: 15px;
			background: svg-load("cross.svg", fill="#bf2929") center center no-repeat / contain;
		}
		&__pencil-btn {
			border: 0;
			width: 15px;
			height: 15px;
			background: svg-load("pencil.svg", fill="$text-color") center center no-repeat / contain;
		}
		&__trash-btn {
			border: 0;
			width: 15px;
			height: 15px;
			background: svg-load("trash.svg", fill="#414c63") center center no-repeat / contain;
		}
		&__controls {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
		&__controls-name {
			flex: 0.6;
			max-width: 70%;
			margin-right: 10px;
			border: 0;
			padding: 5px 0;
			border-bottom: 1px solid $text-color;
			color: $text-color;
			background: none;
			font-size: 18px;
			font-weight: 600;
			&:focus {
				outline: none;
				border-bottom: 1px solid $main-color;
			}
		}
		&__controls-value-wrapper {
			flex: 0.15;
			max-width: 15%;
			position: relative;
			margin-right: 30px;
			&:after {
				content: "%";
				position: absolute;
				color: rgba($text-color, 0.7);
				font-size: 16px;
				font-weight: normal;
				display: block;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		&__controls-value {
			width: 100%;
			border: 0;
			padding: 5px 30px 5px 10px;
			border-bottom: 1px solid $text-color;
			color: $text-color;
			background: none;
			font-size: 18px;
			font-weight: 600;
			position: relative;
			&:focus {
				outline: none;
				border-bottom: 1px solid $main-color;
			}
		}
		&__controls-btn {
			color: $main-color;
			text-decoration: none;
			background: none;
			font-weight: 600;
			width: 40px;
			padding: 0;
			&:before {
				content: "+";
				background-image: linear-gradient(to right, #006aed, #3f35cb);
				width: 40px;
				height: 40px;
				display: inline-block;
				text-align: center;
				font-size: 30px;
				font-weight: 600;
				line-height: 40px;
				color: #fff;
				border-radius: 50%;

			}
			&:hover {
				text-decoration: underline;
			}
			&:disabled {
				opacity: 0.3;
			}
		}
		&__controls-cancel {
			color: $main-color;
			text-decoration: none;
			font-size: 16px;
			font-weight: 600;
			margin-right: 40px;
		}
		&__controls-submit {
			height: 50px;
			border-radius: 25px;
			line-height: 50px;
			text-align: center;
			font-size: 16px;
			font-weight: bold;
			border: 0;
			padding: 0 25px;
			color: #ffffff;
			text-transform: uppercase;
			background-image: linear-gradient(to right, #006aed, #3f35cb);
		}
	}
	.message {
		position: fixed;
		bottom: 0;
		width: 400px;
		color: #fff;

		padding: 20px 30px;
		&--green {
			background: $green-color;
			left: 25%;
			transform: translateX(-50%);
		}
		&--orange {
			background: #b18333;
			left: 50%;
			transform: translateX(-50%);
		}
		&--red {
			background: $red-color;
			left: 75%;
			transform: translateX(-50%);
		}
		&__container {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__text {
			font-size: 18px;
			font-weight: 600;
		}
		&__close {
			display: block;
			width: 20px;
			height: 20px;
			background: none;
			border: 0;
			position: relative;
			&:before {
				position: absolute;
				content: '';
				width: 20px;
				height: 20px;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: svg-load("cross.svg", fill="#fff") center center no-repeat / contain;
			}
		}
	}
	.auth {
		position: relative;
		display: block;
		width: 100%;
		min-height: 100vh;
		background: url("~images/admin/bg.jpg") center center no-repeat;

		&:after {
			position: absolute;
			content: '';
			left: 0;
			width: 100%;
			height: 100%;
			top: 0;
			background: $text-color;
			opacity: 0.9;
			z-index: 2;
		}
		&__content {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: 3;
			padding: 40px 75px 60px;
			background: #fff;
		}
		&__title {
			font-size: 36px;
			font-weight: 600;
			color: $text-color;

		}
		&__close {
			position: absolute;
			right: 30px;
			top: 30px;
			width: 19px;
			height: 19px;
			background: svg-load("cross.svg", fill="$text-color") center center no-repeat / contain;
		}
		&__form {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: stretch;
			margin-top: 20px;
		}
		&__input {
			width: 100%;
			min-width: 100%;
			max-width: 100%;
			border: 0;
			background: transparent;
			border-bottom: 1px solid $text-color;
			padding: 3px 5px 7px 50px;
			font-size: 18px;
			font-weight: bold;
			line-height: 2.67;
			color: $text-color;
			outline: none;
			transition: 0.2s ease-in-out all;
			display: block;
		}
		&__input-wrapper {
			position: relative;
			margin-bottom: 30px;

			&:hover .auth__input, .auth__input:focus {
				border-color: $main-color;
				transition: 0.2s ease-in-out all;
			}
			&:hover .auth__icon, &:focus .auth__icon {
				fill: $main-color;
				transition: 0.2s ease-in-out all;
			}
			&.error .auth__input {
				border-color: $red-color;
				transition: 0.2s ease-in-out all;
			}
			&.error .auth__tooltip {
				display: block;
				opacity: 1;
				left: 50px;
				transition: 0.2s ease-in-out all;
			}
			&.error .auth__icon {
				fill: $red-color;
				transition: 0.2s ease-in-out all;
			}

		}
		&__label {
			font-size: 16px;
			font-weight: 600;
			padding-left: 50px;
			color: rgba($text-color, 0.3);
		}
		&__icon {
			width: 30px;
			height: 30px;
			position: absolute;
			left: 0;
			bottom: 20px;
			&--user {
				background: svg-load("user_.svg", fill="$text-color") center center no-repeat / contain;
			}
			&--password {
				background: svg-load("key.svg", fill="$text-color") center center no-repeat / contain;
			}
		}
		&__submit {
			height: 80px;
			background-image: linear-gradient(to right, rgb(173,0,237) 0%, rgb(129,0,240) 48%, rgb(85,0,242) 100%);
			font-size: 18px;
			font-weight: bold;
			color: #ffffff;
			padding: 0 30px;
			min-width: 90%;
			border: 0;
			border-top-left-radius: 40px;
			border-bottom-right-radius: 40px;
			text-transform: uppercase;
			transition: 0.2s ease-in-out all;

			&:hover {
				background-image: linear-gradient(to right, rgb(187,0,255) 0%, rgb(138,0,255) 48%, rgb(89,0,255) 100%);
				transition: 0.2s ease-in-out all;
			}
		}
	}

</style>
