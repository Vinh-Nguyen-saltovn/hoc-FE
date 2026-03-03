import Modal from 'react-modal'
import { CommonSubmitButton } from '../../L2/buttons/buttons'

interface DeleteModalProps {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  postId: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function DeleteModal({
  openModal,
  setOpenModal,
  postId,
  onClick,
}: DeleteModalProps) {
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
          <CommonSubmitButton title="Delete" onClick={onClick} />
        </div>
      </div>
    </Modal>
  )
}
