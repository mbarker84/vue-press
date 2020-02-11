<template>
  <main class="post individual p-4">
    <!-- <header>
      <h1 class="font-bold">{{ post.title.rendered }}</h1>
    </header>
    <section v-html="post.content.rendered"></section> -->
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
    url() {
      return this.$route.params.slug
    },

    posts() {
      return this.$store.state.posts
    },

    post() {
      return this.posts.find((el) => el.slug === this.url)
    }
  },
  created() {
    this.$store.dispatch('getPosts')
  }
}
</script>
