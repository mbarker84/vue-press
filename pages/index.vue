<template>
  <div class="posts">
    <header>
      <h1 class="font-bold text-white mb-4 text-xl lg:text-6xl">{{ name }}</h1>
      <h3 class="font-bold text-white text-lg md:text-2xl mb-4">Filter by category</h3>
      <tags :tags="tags" :show-all="true" />
    </header>
    <!-- here we loop through the posts -->
    <transition-group
      class="g-posts-grid"
      name="posts"
      tag="div"
      mode="out-in"
      v-on:before-leave="beforeLeave"
    >
      <post-preview
        v-for="post in sortedPosts"
        :key="post.id"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :slug="`blog/${post.slug}`"
        :tags="postTags(post.tags)"
      ></post-preview>
    </transition-group>
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
    },

    getItemWidth(el) {
      return getComputedStyle(el).width
    },

    beforeLeave(el) {
      el.style.width = this.getItemWidth(el)
      el.style.position = 'absolute'
    }
  },

  created() {}
}
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 500ms cubic-bezier(0.26, 0.07, 0.3, 0.98),
    transform 500ms cubic-bezier(0.26, 0.07, 0.3, 0.98);
}

.page-enter,
.page-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}

.posts-item {
  display: block;
}

.posts-enter-active {
  transition: opacity 300ms 300ms, transform 300ms 300ms;
}

.posts-leave-active {
  position: absolute;
  transition: opacity 300ms, transform 300ms;
}

.posts-enter,
.posts-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.posts-move {
  transition: transform 1s;
}
</style>
