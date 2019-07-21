<template lang="pug">
	.wrapper
		template(v-if="$route.meta.public")
			router-view

		template(v-else-if="userIsLogged")
			app-header
			app-menu
			main.content
				router-view(:pageTitle="$route.meta.title")
			tooltips(:class="{'visible' : visible}")


</template>

<script>
  import { mapState, mapActions, mapGetters } from "vuex";
	export default {
		components: {
			appHeader: () => import("components/header"),
			appMenu: () => import("components/menu"),
			tooltips: () =>import("components/tooltips")
		},
		computed: {
			...mapGetters("user", ["userIsLogged"]),
			...mapState("tooltips", { visible: state => state.visible })
		},
    methods: {
      ...mapActions("tooltips", ["closeTooltip"])
    },
    watch: {
      visible(value) {
        if (value === true) {
          let timeout;
          clearTimeout(timeout);

          timeout = setTimeout(() => {
            this.closeTooltip();
          }, 3000);
        }
      }
    }
	}

</script>

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
		background: transparent;
		&:before {
			content: "+";
			background-image: linear-gradient(to right, #006aed, #3f35cb);
			width: 21px;
			height: 21px;
			display: inline-block;
			text-align: center;
			line-height: 21px;
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
			width: calc(100% / 3 -14px);
			&:nth-child(3n+2) {
				margin: 0 21px 30px;
			}
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
		&__file-label {
			display: block;
			width: 100%;
			height: 250px;
			cursor: pointer;
			position: relative;
			
			&.hasPhoto {
				.form__user-photo {
					width: 100%;
					height: 200px;
					border-radius: 50%;
					overflow: hidden;
					background: center center no-repeat /cover;
				}
				
				&:before {
					display: none;
				}
				
			}
			&:before {
				position: absolute;
				content: '';
				width: 150px;
				height: 150px;
				top: 20px;
				left: 50%;
				transform: translate(-50%, 0);
				background: svg-load("user.svg", fill="#fff") center center no-repeat / contain;
			}
			&:after {
				content: attr(data-value);
				color: $main-color;
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				text-decoration: none;
				font-size: 16px;
				font-weight: 600;
				text-align: center;
			}
		}
		&__file {
			opacity: 0;
			width: 100%;
			height: 100%;
			cursor: pointer;
			position: relative;
			z-index: 9999;
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
			border-bottom: 1px solid $text-color;
			color: $text-color;
			background: none;
			font-size: 16px;
			font-weight: normal;
			transition: all 0.2s ease-in-out;
			&:focus{
				outline: none;
				border-bottom: 1px solid $main-color;
				transition: all 0.2s ease-in-out;
			}
			&[disabled] {
				border-bottom: 1px solid transparent;
				transition: all 0.2s ease-in-out;
			}
		}
		&__row-value {
			width: 100%;
			border: 0;
			padding: 5px 20px 5px 10px;
			border-bottom: 1px solid $text-color;
			color: $text-color;
			background: none;
			font-size: 16px;
			font-weight: normal;
			position: relative;
			transition: all 0.2s ease-in-out;
			&:focus {
				outline: none;
				border-bottom: 1px solid $main-color;
				transition: all 0.2s ease-in-out;
			}
			&[disabled] {
				border-bottom: 1px solid transparent;
				transition: all 0.2s ease-in-out;
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
			flex: 0.20;
			max-width: 20%;
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
	.disabled {
		opacity: 0.5;
		filter: grayscale(100%);
		pointer-events: none;
		user-select: none;
	}

</style>
