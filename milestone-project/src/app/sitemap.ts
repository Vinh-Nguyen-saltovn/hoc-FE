// app/sitemap.ts
export default function sitemap() {
  const baseUrl = 'http://localhost:3000'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/auth`,
      lastModified: new Date(),
    },
  ]
}
