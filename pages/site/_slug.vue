<template>
  <main class="text-white">
    <page-header :title="page.title" />
    <h1 class="text-white"></h1>
    <div class="c-page-body">
      <p>{{ body }}</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    pages() {
      return this.$store.state.pages
    },

    page() {
      return this.pages.find((el) => el.slug === this.slug)
    },

    body() {
      return this.page.intro
    }
  },
  methods: {},
  created() {
    this.$store.dispatch('getPages')
  }
}
</script>
