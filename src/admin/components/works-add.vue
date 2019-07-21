<template lang="pug">
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
					work-tags()
		.form__controls
			a(href="").form__controls-cancel Отменить
			input(name="name" type="submit" value="Сохранить").form__controls-submit
</template>

<script>
import { generateStdError } from "@/helpers/errorHandler";
export default {
	components: {
	  workTags: () => import('components/work-tags')
	}
}
</script>

<style>

</style>