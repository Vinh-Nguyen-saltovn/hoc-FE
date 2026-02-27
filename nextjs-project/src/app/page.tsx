import { CommonDirectButton } from '../components/L2/buttons/buttons'

export default function Home() {
  return (
    <div className="bg-white p-8 rounded shadow text-center space-y-4">
      <h1 className="text-3xl font-bold ">Mini Blog App</h1>
      <p className="text-gray-600">
        Simple CRUD blog built with Next.js + json-server
      </p>

      <CommonDirectButton href="/posts" title="Go to Posts List" />
    </div>
  )
}
