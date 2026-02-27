import { Calendar } from 'lucide-react'
import { forwardRef } from 'react'

interface CustomInputProps {
  value?: string
  onClick?: () => void
  className?: string
}
export const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ onClick, value }, ref) => (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      className="d-flex gap-2 border p-2 rounded-md w-fit cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"
    >
      <span>{value || 'Chọn ngày'}</span>
      <Calendar size={18} />
    </button>
  ),
)
CustomInput.displayName = 'CustomInput'
