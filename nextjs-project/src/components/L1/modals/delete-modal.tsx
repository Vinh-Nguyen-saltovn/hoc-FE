'use client'

import Modal from 'react-modal'
import { CommonSubmitButton } from '../../L2/buttons/buttons'
import { fetchDeletePost } from '@/src/actions/posts'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { delay } from '../../L2/loading/loading'

interface DeleteModalProps {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  postId: string
  setIsLoading: (value: boolean) => void
}

export default function DeleteModal({
  openModal,
  setOpenModal,
  postId,
  setIsLoading,
}: DeleteModalProps) {
  const router = useRouter()

  async function handleDeletePost() {
    setIsLoading(true)
    try {
      await fetchDeletePost(postId)
      setOpenModal(false)
      await delay(1000)
      toast.success(`Xóa post có id = ${postId} thành công`)
      router.refresh()
    } catch (error) {
      await delay(1000)
      toast.error('Xóa post ko thành công')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(!openModal)}
      className="modal"
      overlayClassName="overlayModal"
      ariaHideApp={false}
    >
      <div className="text-center">
        <div className="modal-header">
          <div></div>
          <h2 className="text-2xl font-semibold">Delete modal</h2>
          <button onClick={() => setOpenModal(!openModal)}>
            <span className="text-xl cursor-pointer">&times;</span>
          </button>
        </div>
        <div className="space-y-3">
          <p className="text-xl">
            Bạn có muốn xóa post có id = {postId} không ?
          </p>
          <CommonSubmitButton title="Delete" onClick={handleDeletePost} />
        </div>
      </div>
    </Modal>
  )
}
