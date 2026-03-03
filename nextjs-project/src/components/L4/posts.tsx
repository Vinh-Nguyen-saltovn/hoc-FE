'use server'

import { fetchPostsList } from '@/src/actions/posts'
import PostsList from '../L3/lists'

export default async function Posts() {
  const data = await fetchPostsList()

  if (!data || data instanceof Response) {
    return <p>Không thể tải danh sách bài viết</p>
  }

  return <PostsList data={data} />
}
