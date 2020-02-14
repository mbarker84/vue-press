<template>
  <main class="post individual p-4 lg:p-8">
    <header class="text-white">
      <h1
        class="font-bold text-center mb-4 text-xl leading-tight md:mb-8 lg:text-6xl"
      >{{ postTitle() }}</h1>
    </header>
    <div class="g-post-content bg-white p-4 md:p-8">
      <section v-if="postContent()" v-html="postContent()"></section>
      <div class="mt-4 lg:mt-8 text-center">
        <a :href="`${postLink()}`" class="underline text-pink-700">Read it on the website ⟶</a>
      </div>
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
    posts() {
      return this.$store.state.posts
    },

    post() {
      return this.posts.find((el) => el.slug === this.slug)
    }
  },
  methods: {
    postTitle() {
      return this.post ? this.post.title.rendered : 'loading...'
    },
    postContent() {
      return this.post ? this.post.content.rendered : ''
    },
    postLink() {
      return this.post ? this.post.link : ''
    }
  },
  created() {
    this.$store.dispatch('getPosts')
  }
}
</script>
