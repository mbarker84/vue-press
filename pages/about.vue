<template>
  <div class="text-white">
    <page-header title="About" :body="body" />
    <div class="c-page-body">
      <p>Welcome to Atomic News, a test project with Vue / Nuxt.js, Tailwind and headless Wordpress.</p>
      <p>
        <a
          href="https://www.smashingmagazine.com/2020/02/headless-wordpress-site-jamstack/"
          class="text-pink-400 hover:text-teal-500 focus:text-teal-500 font-bold underline inline-block lg:mt-4"
        >Read Sarah and Geoff’s article ⟶</a>
      </p>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'

export default {
  data() {
    return {
      body: 'What’s this all about, then?'
    }
  },

  components: {
    PageHeader
  }
}
</script>
