'use server'

import { fetchData, fetchUpdateData } from '../service/base-api'
import { Posts } from '../types/posts'

export async function fetchPostsList(): Promise<Posts[]> {
  return fetchData('http://localhost:3001/posts')
}

export async function fetchAddNewPost(data: Posts): Promise<Posts> {
  return fetchUpdateData('http://localhost:3001/posts', data)
}
