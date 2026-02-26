import Link from 'next/link'
import { CommonDirectButton } from '../L2/buttons/buttons'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <Link href="/" className="font-bold text-xl">
          Mini Blog App
        </Link>
        <nav className="flex gap-4">
          <CommonDirectButton href="/posts/add-new" title="+ New Post" />
        </nav>
      </div>
    </header>
  )
}
