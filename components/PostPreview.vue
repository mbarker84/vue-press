<template>
  <article class="c-post-preview p-4 md:p-8 bg-teal-300">
    <h3 class="font-bold mb-4 text-lg md:text-2xl leading-tight">
      <nuxt-link v-bind:to="slug">{{ title }}</nuxt-link>
    </h3>
    <div class="mb-4" v-html="excerpt"></div>
    <nuxt-link v-bind:to="slug" class="underline font-bold"
      >Read more ⟶</nuxt-link
    >
  </article>
</template>

<script>
export default {
  props: ['title', 'slug', 'excerpt']
}
</script>
