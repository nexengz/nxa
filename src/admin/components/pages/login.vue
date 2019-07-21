<template lang="pug">
	section.auth
		.auth__content
			.auth__title Авторизация
			button.auth__close
			form.auth__form(@submit.prevent="login")
				.auth__input-wrapper
					label.auth__label Логин
					.auth__icon.auth__icon--user
					input(type="text" name="login" v-model="user.name").auth__input
					.auth__tooltip
				.auth__input-wrapper
					label.auth__label Пароль
					.auth__icon.auth__icon--password
					input(type="password" name="password" v-model="user.password").auth__input
					.auth__tooltip
				button.auth__submit Отправить
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import $axios from "@/requests"
import { setToken, setAuthHttpHeaderToAxios } from "@/helpers/token.js";
export default {
  components: {},
	data() {
    return {
      user: {
        name: "nexengz",
				password: ""
			}
		}
	},
	methods: {
    ...mapActions("user", ["loginUser"]),
    async login() {
      try {
        const {data: {token}} = await this.loginUser(this.user);
        setToken(token);
        setAuthHttpHeaderToAxios($axios, token);
        
        this.$router.replace('/');
      } catch (e) {
				//messages
      }
		}
	}
  
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
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



