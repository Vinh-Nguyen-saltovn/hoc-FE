import { Posts } from '@/app/types/posts'
import Link from 'next/link'

interface PostFormProps {
  data: Posts[]
}
export default function PostsForm({ data }: PostFormProps) {
  return (
    <div className="space-y-8">
      <section className="d-flex justify-between">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <Link
          href="/posts/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + New Post
        </Link>
      </section>
      <section className="space-y-5">
        {data.map(post => (
          <section
            key={post.id}
            className="bg-white p-6 rounded-xl shadow-sm space-y-3"
          >
            <h2 className="text-l">{post.title}</h2>
            <p>{post.content}</p>
            <section className="d-flex justify-between w-full">
              <p>Day</p>
              <div className="space-x-4 text-sm font-medium">
                <button className="text-blue-600 hover:underline cursor-pointer text-lg">
                  View
                </button>
                <button className="text-yellow-600 hover:underline cursor-pointer text-lg">
                  Edit
                </button>
                <button className="text-red-600 hover:underline cursor-pointer text-lg">
                  Delete
                </button>
              </div>
            </section>
          </section>
        ))}
      </section>
    </div>
  )
}
