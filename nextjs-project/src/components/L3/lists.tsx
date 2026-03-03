'use client'

import { Posts } from '@/src/types/posts'
import { CommonDirectButton } from '../L2/buttons/buttons'
import { useState } from 'react'
import DeleteModal from '../L1/modals/delete-modal'
import { useLoading } from '@/src/context/LoadingContext'
import { toast } from 'react-toastify'
import { fetchDeletePost } from '@/src/actions/posts'
import { useRouter } from 'next/navigation'

interface PostListProps {
  data: Posts[]
}
export default function PostsList({ data }: PostListProps) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [selectedPostId, setSelectedPostId] = useState<string>('')
  const { setLoading } = useLoading()
  const router = useRouter()

  async function handleDeletePost() {
    setLoading(true)
    try {
      await fetchDeletePost(selectedPostId)
      setShowDeleteModal(false)
      toast.success(`Xóa post có id = ${selectedPostId} thành công`)
      router.refresh()
    } catch (error) {
      toast.error('Xóa post ko thành công')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

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
                <button
                  onClick={() => {
                    setSelectedPostId(post.id as string)
                    setShowDeleteModal(true)
                  }}
                  className="text-white px-4 py-2 rounded-lg transition cursor-pointer bg-red-500 hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </section>
          </section>
        ))}
        <DeleteModal
          openModal={showDeleteModal}
          setOpenModal={setShowDeleteModal}
          postId={selectedPostId}
          onClick={handleDeletePost}
        />
      </section>
    </div>
  )
}
