<template>
  <header class="p-4 text-white bg-purple-700 fixed w-full top-0 left-0 z-10">
    <div @click="resetFilters()">
      <router-link
        to="/"
        class="py-2 px-3 font-bold hover:text-indigo-300 focus:text-indigo-300"
      >Home</router-link>
      <router-link
        to="/about"
        class="py-2 px-3 font-bold hover:text-indigo-300 focus:text-indigo-300"
      >About</router-link>
      <router-link
        v-for="page in pages"
        :key="page.title"
        :to="`/site/${page.slug}`"
        class="py-2 px-3 font-bold hover:text-indigo-300 focus:text-indigo-300"
      >{{ page.title }}</router-link>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.state.pages
    }
  },

  methods: {
    resetFilters() {
      this.$store.dispatch('selectTag', null)
    }
  },

  created() {
    this.$store.dispatch('getPages')
  }
}
</script>
