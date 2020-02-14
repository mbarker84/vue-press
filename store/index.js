export const state = () => ({
  posts: [],
  tags: [],
  selectedTag: null,
  info: {
    name: 'Atomic News',
    description: 'test'
  }
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },

  updateTags: (state, tags) => {
    state.tags = tags
  },

  updateSelectedTag(state, tag) {
    state.selectedTag = tag
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
  },

  async getTags({ state, commit }, posts) {
    if (state.tags.length) return
    let allTags = posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])

    allTags = allTags.join()
    try {
      let tags = await fetch(
        `https://css-tricks.com/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then((res) => res.json())
      tags = tags.map(({ id, name }) => ({
        id,
        name
      }))
      commit('updateTags', tags)
    } catch (e) {
      console.log(e)
    }
  },

  selectTag({ commit }, tag) {
    commit('updateSelectedTag', tag)
  }
}
