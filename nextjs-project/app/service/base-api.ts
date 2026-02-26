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
    throw new Error(`GET ${url} failed`)
  }

  return res.json()
}
