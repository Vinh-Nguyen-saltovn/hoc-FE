import { Posts } from '@/src/types/posts'
import { CommonDirectButton } from '../L2/buttons/buttons'

interface PostFormProps {
  data: Posts[]
}
export default function PostsForm({ data }: PostFormProps) {
  return (
    <div className="space-y-8">
      <section className="d-flex justify-between">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <CommonDirectButton href="/posts/add" color="blue" title="+ New Post" />
      </section>
      <section className="space-y-5">
        {data.map(post => (
          <section
            key={post.id}
            className="bg-white p-6 rounded-xl shadow-sm space-y-3"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <section className="d-flex justify-between w-full">
              <p>Since : {post.createdAt}</p>
              <div className="space-x-4 text-sm font-medium">
                <CommonDirectButton
                  href={`/posts/${post.id}`}
                  title="Edit"
                  color="yellow"
                />
                <button className="bg-red-500 text-white px-2 py-[6px] rounded-lg cursor-pointer hover:bg-red-600 transition">
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
