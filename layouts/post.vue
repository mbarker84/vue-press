<template>
  <div>
    <site-header />
    <main class="container lg:pb-12 lg:pt-24">
      <div class="bg-white lg:p-8">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader'

export default {
  components: {
    SiteHeader
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
