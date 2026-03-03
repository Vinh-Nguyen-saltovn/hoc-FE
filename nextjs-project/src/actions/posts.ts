'use server'

import { API_ENDPOINT } from '../configs/api-endpoint'
import { fetchData, FetchResult, fetchUpdateData } from '../service/base-api'
import { Posts } from '../types/posts'

export async function fetchPostsList(): Promise<FetchResult<Posts[]>> {
  return fetchData<Posts[]>(API_ENDPOINT.getPostList)
}

export async function fetchAddNewPost(
  data: Posts,
): Promise<FetchResult<Posts>> {
  return fetchUpdateData(API_ENDPOINT.postList, 'POST', data)
}

export async function fetchPostWithId(id: string): Promise<FetchResult<Posts>> {
  return fetchData<Posts>(API_ENDPOINT.postItem.replace(':id', id))
}

export async function fetchUpdatePost(
  id: string,
  data: Posts,
): Promise<FetchResult<Posts>> {
  return fetchUpdateData<Posts>(
    API_ENDPOINT.postItem.replace(':id', id),
    'PUT',
    data,
  )
}

export async function fetchDeletePost(id: string): Promise<FetchResult<void>> {
  return fetchUpdateData(API_ENDPOINT.postItem.replace(':id', id), 'DELETE')
}
