<template>
  <div class="posts">
    <header>
      <h1 class="font-bold text-white mb-4 text-xl lg:text-6xl">
        {{ name }}
      </h1>
    </header>
    <!-- here we loop through the posts -->
    <div class="g-posts-grid">
      <post-preview
        v-for="post in posts"
        :key="post.id"
        v-bind:title="post.title.rendered"
        v-bind:excerpt="post.excerpt.rendered"
        v-bind:slug="`blog/${post.slug}`"
      ></post-preview>
    </div>
  </div>
</template>

<script>
import PostPreview from '../components/PostPreview'

export default {
  components: {
    PostPreview
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    name() {
      return this.$store.state.info.name
    }
  },
  created() {
    this.$store.dispatch('getPosts')
  }
}
</script>
