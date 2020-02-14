<template>
  <main class="text-white">
    <page-header :title="title" :body="intro" />
    <h1 class="text-white"></h1>
    <div v-if="body" class="c-page-body">
      <p>{{ body }}</p>
    </div>
  </main>
</template>

<script>
import PageHeader from '../../components/PageHeader'

export default {
  data() {
    return {
      slug: this.$route.params.slug
    }
  },

  components: {
    PageHeader
  },

  computed: {
    pages() {
      return this.$store.state.pages
    },

    page() {
      return this.pages.find((el) => el.slug === this.slug)
    },

    intro() {
      return this.page.intro
    },

    body() {
      return this.page.body
    },

    title() {
      return this.page.title
    }
  },
  methods: {},
  created() {
    // this.$store.dispatch('getPages')
  }
}
</script>
