<template>
  <header class="p-4 text-white bg-purple-700 fixed w-full top-0 left-0 z-10">
    <div @click="resetFilters()">
      <router-link to="/">Home</router-link>
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
