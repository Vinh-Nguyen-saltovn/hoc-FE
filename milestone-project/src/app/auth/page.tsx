import Image from 'next/image'

export const metadata = {
  title: 'Trang đăng nhập',
  description: 'Trang đăng nhập người dùng.',
  openGraph: {
    title: 'Trang đăng nhập',
    description: 'Trang đăng nhập người dùng.',
    url: 'http://localhost:3000/login',
  },
}

export default function Auth() {
  return (
    <>
      <h1 className="text-4xl text-center mt-4 font-bold">{metadata.title}</h1>
      <section className="flex justify-evenly items-center">
        <section>
          <Image
            src="/og-default.png"
            alt="ảnh đăng nhập"
            width={400}
            height={400}
          />
        </section>
        <section className="border p-4 rounded-lg text-2xl font-semibold">
          <h2>Form đăng nhập</h2>
        </section>
      </section>
    </>
  )
}
