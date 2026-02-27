import { buttonColor, ButtonColorTypes } from '@/src/constants/color'
import Link from 'next/link'

interface CommonDirectButtonProps {
  href: string
  color?: ButtonColorTypes
  classNames?: string
  title: string
}

interface CommonSubmitButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  color?: ButtonColorTypes
  classNames?: string
  title: string
}

export function CommonDirectButton({
  href,
  color = 'blue',
  classNames,
  title,
}: CommonDirectButtonProps) {
  return (
    <Link
      href={href}
      className={`${buttonColor[color]} text-white px-4 py-2 rounded-lg transition cursor-pointer ${classNames}`}
    >
      {title}
    </Link>
  )
}

export function CommonSubmitButton({
  color = 'red',
  classNames,
  title,
  onClick,
}: CommonSubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${buttonColor[color]} text-white px-4 py-2 rounded-lg transition cursor-pointer ${classNames}`}
    >
      {title}
    </button>
  )
}
