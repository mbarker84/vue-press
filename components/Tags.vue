<template>
  <div class="text-white mb-4 md:mb-8">
    <nav>
      <ul>
        <li
          v-if="showAll"
          :key="all"
          @click="select(tag)"
          :class="[!selected ? activeClass : inactiveClass]"
        >
          <a
            class="px-2 py-1 block cursor-pointer hover:bg-purple-700 focus:bg-purple-700"
          >All categories</a>
        </li>
        <li
          v-for="tag in tags"
          :key="tag.id"
          @click="select(tag)"
          :class="[selected && tag.id === selected.id ? activeClass : inactiveClass]"
        >
          <a
            class="c-tags__link px-2 py-1 block cursor-pointer hover:bg-purple-700 focus:bg-purple-700"
          >{{ tag.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass:
        'inline-block m-1 border-2 text-sm text-purple-700 border-purple-700 hover:text-white',
      inactiveClass: 'inline-block m-1 border-2 text-sm'
    }
  },

  props: ['tags', 'showAll'],

  computed: {
    selected() {
      return this.$store.state.selectedTag
    }
  },

  methods: {
    select(tag) {
      this.$store.dispatch('selectTag', tag)
    }
  }
}
</script>
