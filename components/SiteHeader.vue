<template>
  <header class="p-4 text-white bg-purple-700 fixed w-full top-0 left-0 z-10">
    <div @click="resetFilters()">
      <router-link to="/" class="p-2 font-bold">Home</router-link>
      <router-link to="/about" class="p-2 font-bold">About</router-link>
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
