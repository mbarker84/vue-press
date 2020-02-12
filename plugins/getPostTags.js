export default async ({ store }) => {
  await store.dispatch('getPosts')
  await store.dispatch('getTags', store.state.posts)
}
