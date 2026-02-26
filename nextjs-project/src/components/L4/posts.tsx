import { fetchPostsList } from '@/src/actions/posts'
import PostsForm from '../L3/lists'

export default async function PostsLists() {
  const data = await fetchPostsList()
  return <PostsForm data={data} />
}
