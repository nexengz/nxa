<template lang="pug">
	label(for="tags").form__label Добавление тега
		input(name="tags").form__input
		tags()
</template>
<script>
export default {
  components: {
    tags: () => import("./tags")
	}
}
</script>

<style>

</style>