<template>
  <article class="c-post-preview bg-teal-300 relative">
    <nuxt-link
      :to="slug"
      class="c-post-preview__absolute-link block absolute w-full h-full top-0 left-0"
      aria-hidden="true"
    ></nuxt-link>
    <div class="c-post-preview__bg bg-teal-300 p-4 md:p-8 h-full">
      <h3 class="font-bold mb-4 text-lg md:text-2xl leading-tight">
        <nuxt-link v-bind:to="slug">{{ title }}</nuxt-link>
      </h3>
      <div class="mb-4" v-html="excerpt"></div>
      <tags :tags="tags" />
      <nuxt-link v-bind:to="slug" class="underline font-bold">Read more ⟶</nuxt-link>
    </div>
  </article>
</template>

<script>
import Tags from './Tags'

export default {
  props: ['title', 'slug', 'excerpt', 'tags'],
  components: { Tags }
}
</script>

