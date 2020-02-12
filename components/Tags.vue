<template>
  <div class="text-white mb-4 md:mb-8">
    <nav>
      <ul>
        <li
          v-for="tag in tags"
          :key="tag.id"
          @click="$store.dispatch('selectTag', { ...tag })"
          class="inline-block m-1 border-2 text-sm"
        >
          <a
            class="px-2 py-1 block cursor-pointer hover:bg-purple-700 focus:bg-purple-700"
          >{{ tag.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['tags'],

  mutations: {},

  methods: {
    // onClick(tag) {
    //   this.$store.dispatch('selectTag', tag)
    // }
  },

  actions: {}
}
</script>
