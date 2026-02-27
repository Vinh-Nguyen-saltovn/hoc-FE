import ClipLoader from 'react-spinners/ClipLoader'

export function LoadingSpinner({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black/40 d-flex z-50">
      <ClipLoader color="#ddd" size={60} />
    </div>
  )
}

export function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms))
}
