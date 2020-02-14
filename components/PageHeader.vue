<template>
  <header class="mb-8 text-white">
    <h1 class="font-bold mb-4 text-xl md:text-3xl lg:text-6xl">{{ title }}</h1>
    <p v-if="body" class="font-bold">{{ body }}</p>
  </header>
</template>

<script>
export default {
  props: ['title', 'body']
}
</script>
