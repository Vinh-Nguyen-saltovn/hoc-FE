'use server'

import {
  fetchData,
  fetchDeleteData,
  fetchPostData,
  fetchUpdateData,
} from '../service/base-api'
import { Posts } from '../types/posts'

export async function fetchPostsList(): Promise<Posts[]> {
  return fetchData('http://localhost:3001/posts')
}

export async function fetchAddNewPost(data: Posts): Promise<Posts> {
  return fetchPostData('http://localhost:3001/posts', data)
}

export async function fetchPostWithId(id: string): Promise<Posts> {
  return fetchData(`http://localhost:3001/posts/${id}`)
}

export async function fetchUpdatePost(id: string, data: Posts): Promise<Posts> {
  return fetchUpdateData(`http://localhost:3001/posts/${id}`, data)
}

export async function fetchDeletePost(id: string): Promise<string> {
  return fetchDeleteData(`http://localhost:3001/posts/${id}`)
}
