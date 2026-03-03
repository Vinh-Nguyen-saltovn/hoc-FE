'use client'

import { useLoading } from '@/src/context/LoadingContext'
import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

export function LoadingSpinner() {
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const { loading } = useLoading()

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setShowLoading(false), 300)
      return () => clearTimeout(t)
    }
  }, [loading])

  if (loading && !showLoading) {
    setShowLoading(true)
  }

  if (!showLoading) return null

  return (
    <div className="fixed inset-0 bg-black/40 d-flex z-50">
      <ClipLoader color="#ddd" size={60} />
    </div>
  )
}
