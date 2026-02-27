import { Posts } from '@/src/types/posts'
import { CommonDirectButton, CommonSubmitButton } from '../L2/buttons/buttons'

interface PostFormProps {
  data: Posts[]
}
export default function PostsForm({ data }: PostFormProps) {
  return (
    <div className="space-y-8">
      <section className="d-flex w-full bg-white rounded-xl p-3">
        <h1 className="text-4xl font-bold">All Posts</h1>
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
              <p className="text-gray-400">Since : {post.createdAt}</p>
              <div className="space-x-4 text-sm d-flex">
                <CommonDirectButton
                  href={`/posts/${post.id}`}
                  title="Edit"
                  color="yellow"
                />
                <CommonSubmitButton title="Delete" />
              </div>
            </section>
          </section>
        ))}
      </section>
    </div>
  )
}
