import { CommonDirectButton } from '@/src/components/L2/buttons/buttons'

export default function PostDetailPage() {
  return (
    <div className="space-y-6">
      <CommonDirectButton href="/posts" title="← back to lists" />
      <div className="bg-white p-8 rounded-xl shadow-sm mt-3">
        <h1 className="text-3xl font-bold mb-2">ABC</h1>
        <p className="text-sm text-gray-400 mb-6">Published on day</p>
        <div className="text-gray-700 ">abc</div>
        <div className="flex gap-4 mt-8">
          <button className="bg-edit-btn text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer">
            Edit
          </button>
          <button className="bg-delete-btn text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
