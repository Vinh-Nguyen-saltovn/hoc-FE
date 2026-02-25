'use server'

import { fetchData } from '../service/base-api'
import { Posts } from '../types/posts'

export async function fetchPostsList(): Promise<Posts[]> {
  return fetchData<Posts[]>('http://localhost:3001/posts')
}
