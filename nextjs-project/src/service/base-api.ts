export type FetchResult<T> = T | Response | void

export async function fetchData<T>(
  url: string,
  headers: HeadersInit = {},
): Promise<FetchResult<T>> {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      cache: 'no-cache',
    })

    if (!res.ok) {
      throw new Error(`GET ${url} failed ${res.status}`)
    }

    // check nếu 204 No Content
    if (res.status === 204) {
      return
    }

    // nếu api ko phải Json -> trả về res
    const contentType = res.headers.get('Content-Type') ?? ''
    if (!contentType.includes('application/json')) {
      return res
    }
    try {
      // parse json, nếu lỗi trả về void
      return await res.json()
    } catch {
      return res
    }
  } catch (error) {
    throw error
  }
}

export async function fetchUpdateData<T>(
  url: string,
  method: 'POST' | 'PUT' | 'DELETE',
  body?: object,
): Promise<FetchResult<T>> {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!res.ok) {
      throw new Error(`${method} ${url} failed ${res.status}`)
    }

    // check nếu 204 No Content
    if (res.status === 204) {
      return
    }

    // nếu api ko phải Json | 204 -> trả về res
    const contentType = res.headers.get('Content-Type') ?? ''
    if (!contentType.includes('application/json')) {
      return res
    }

    try {
      // parse json, nếu lỗi trả về void
      return await res.json()
    } catch {
      return res
    }
  } catch (error) {
    throw error
  }
}
