export default function NotFound() {
  return (
    <div className="p-10 d-flex flex-col bg-white">
      <h1 className="text-4xl font-bold">404 - Không tìm thấy bài viết</h1>
      <p className="mt-3">ID bạn nhập không tồn tại trong cơ sở dữ liệu.</p>
      <img src="/404.webp" alt="Page Not Found" width={560} height={560} />
    </div>
  )
}
