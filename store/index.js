export const state = () => ({
  posts: [],
  info: {
    name: 'Atomic News',
    description: 'test'
  }
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  }
}

export const actions = {
  async getPosts({ state, commit }) {
    if (state.posts.length) return
    try {
      let posts = await fetch(
        'https://css-tricks.com/wp-json/wp/v2/posts?page=1&per_page=20'
      ).then((res) => res.json())
      posts = posts
        .filter((el) => el.status === 'publish')
        .map(({ id, slug, title, excerpt, date, tags, content, link }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
          link
        }))
      commit('updatePosts', posts)
    } catch (err) {
      console.log(err)
    }
  }
}
