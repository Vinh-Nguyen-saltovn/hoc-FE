export async function fetchData<T>(
  url: string,
  headers: HeadersInit = {},
): Promise<T> {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`GET ${url} failed ${res.status}`)
  }

  return res.json()
}

export async function fetchPostData<T>(url: string, body = {}): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`POST ${url} failed ${res.status}`)
  }
  return res.json()
}

export async function fetchUpdateData<T>(url: string, body = {}): Promise<T> {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`PUT ${url} failed ${res.status}`)
  }
  return res.json()
}

export async function fetchDeleteData<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    method: 'DELETE',
  })
  if (!res.ok) {
    throw new Error(`DELETE ${url} failed ${res.status}`)
  }
  return res.json()
}
