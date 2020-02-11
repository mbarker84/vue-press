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
        `${process.env.dbUrl}/?rest_route=/wp/v2/posts`
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
