<template>
  <div class="posts">
    <header>
      <h1 class="font-bold text-white mb-4 text-xl lg:text-6xl">{{ name }}</h1>
      <h3 class="font-bold text-white text-lg md:text-2xl mb-4">Filter by category</h3>
      <tags :tags="tags" />
    </header>
    <!-- here we loop through the posts -->
    <div class="g-posts-grid">
      <post-preview
        v-for="post in sortedPosts"
        :key="post.id"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :slug="`blog/${post.slug}`"
        :tags="postTags(post.tags)"
      ></post-preview>
    </div>
  </div>
</template>

<script>
import PostPreview from '../components/PostPreview'
import Tags from '../components/Tags'

export default {
  components: {
    PostPreview,
    Tags
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },

    name() {
      return this.$store.state.info.name
    },

    tags() {
      return this.$store.state.tags
    },

    tagsIDs() {
      return this.tags.map((tag) => tag.id)
    },

    sortedPosts() {
      if (!this.selectedTag()) return this.posts
      return this.posts.filter((el) => el.tags.includes(this.selectedTag().id))
    }
  },

  methods: {
    postTags(tagIDs) {
      return tagIDs.map((id) => {
        const tag = this.tags.find((tag) => tag.id === id)
        return tag
      })
    },

    selectedTag() {
      return this.$store.state.selectedTag
    }
  },

  created() {}
}
</script>
