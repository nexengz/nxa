<template lang="pug">
	nav.menu
		.container
			ul.menu__list
				li.menu__item
					router-link(tag="a" to="/").menu__link Обо мне
					//a(href="").menu__link Обо мне
				li.menu__item
					router-link(tag="a" to="/works").menu__link Работы
					//a(href="").menu__link Работы
				li.menu__item
					router-link(tag="a" to="/reviews").menu__link Отзывы
					//a(href="").menu__link Отзывы
</template>