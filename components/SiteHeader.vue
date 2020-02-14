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
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    resetFilters() {
      this.$store.dispatch('selectTag', null)
    }
  }
}
</script>
