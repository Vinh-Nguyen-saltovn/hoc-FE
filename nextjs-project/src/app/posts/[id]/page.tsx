import {
  CommonDirectButton,
  CommonSubmitButton,
} from '@/src/components/L2/buttons/buttons'

export default function PostDetailPage() {
  return (
    <>
      <CommonDirectButton href="/posts" title="← back to lists" />
      <div className="bg-white p-6 rounded-xl shadow-sm mt-5 space-y-4">
        <p className="text-3xl font-bold">Post #id</p>
        <h2 className="text-2xl">ABC</h2>
        <div className="text-xl">abc</div>
        <div className="d-flex justify-between w-full">
          <p className="text-gray-400">Since : </p>
          <section className="space-x-4 text-sm d-flex">
            <CommonSubmitButton title="Edit" color="yellow" />
            <CommonSubmitButton title="Delete" />
          </section>
        </div>
      </div>
    </>
  )
}
