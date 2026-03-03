'use client'

import { CustomInput } from '@/src/components/L1/date-picker/date-picker'
import {
  CommonDirectButton,
  CommonSubmitButton,
} from '@/src/components/L2/buttons/buttons'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import {
  fetchAddNewPost,
  fetchPostWithId,
  fetchUpdatePost,
} from '@/src/actions/posts'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { Posts } from '@/src/types/posts'
import { useLoading } from '@/src/context/LoadingContext'
import { postFormSchema, PostFormValues } from '@/src/validations/post.schema'
import { ZodError } from 'zod'

export default function PostForm({ id }: { id?: string }) {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [errors, setErrors] = useState<
    Partial<Record<keyof PostFormValues, string>>
  >({})
  const [originalPost, setOriginalPost] = useState<Posts | null>(null)
  const { setLoading } = useLoading()

  const isEditMode = !!id

  // load data khi vào edit
  useEffect(() => {
    if (!isEditMode) return

    async function LoadData() {
      try {
        const post = await fetchPostWithId(id!)
        if (!post || post instanceof Response) {
          router.push('/404')
          return
        }

        setTitle(post.title)
        setContent(post.content)
        setSelectedDate(post.createdAt ?? '')

        // lưu vào state để check thay đổi
        setOriginalPost({
          title: post.title,
          content: post.content,
          createdAt: post.createdAt
            ? format(new Date(post.createdAt), 'yyyy/MM/dd')
            : '',
        })
      } catch {
        router.push('/404')
      }
    }
    LoadData()
  }, [isEditMode, id])

  // hàm submit
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newPost = {
      title,
      content,
      createdAt: selectedDate,
    }

    try {
      setLoading(true)
      postFormSchema.parse(newPost)
      setErrors({})
      // nếu là edit
      if (isEditMode && originalPost) {
        // check giá trị fetch khi vào edit và giá trị của các ô input
        const checkDiff =
          originalPost.title.trim() === newPost.title.trim() &&
          originalPost.content.trim() === newPost.content.trim() &&
          originalPost.createdAt === newPost.createdAt

        // nếu ko thay đổi giá trị, show toast ngắt ctrinh
        if (checkDiff) {
          toast.info('Không có thay đổi để cập nhật')
          return
        } else {
          // nếu có, update
          await fetchUpdatePost(id, newPost)
          toast.success('Cập nhật thành công')
        }
      } else {
        // nếu ko phải edit thì add
        await fetchAddNewPost(newPost)
        toast.success('Thêm mới thành công')
      }
      router.push('/posts')
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Partial<Record<keyof PostFormValues, string>> = {}

        error.issues.forEach(issue => {
          const field = issue.path[0] as keyof PostFormValues
          // chỉ lấy message đầu tiên của từng field
          if (!fieldErrors[field]) {
            fieldErrors[field] = issue.message
          }
        })

        setErrors(fieldErrors)
        return
      }

      if (isEditMode) toast.error('Cập nhật thất bại')
      else toast.error('Thêm mới thất bại')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg h-fit p-4 mt-3 space-y-3 shadow-md"
    >
      <section className="d-flex justify-between">
        <h3 className="text-3xl font-bold">
          {isEditMode ? 'Edit form' : 'Add new form'}
          {isEditMode && ` - Post #${id}`}
        </h3>
        <CommonDirectButton href="/posts" title="← back to lists" />
      </section>
      <section className="space-y-1">
        <p>Title :</p>
        <input
          className="border rounded-lg p-2 w-full"
          type="text"
          placeholder="Title ..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <p className="text-red-500 text-sm">{errors.title}</p>
      </section>
      <section className="space-y-1">
        <p>Content :</p>
        <textarea
          className="border rounded-lg p-2 w-full"
          placeholder="Content ..."
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <p className="text-red-500 text-sm">{errors.content}</p>
      </section>
      <section className="d-flex justify-start space-x-5">
        <p>Created at : </p>
        <DatePicker
          selected={selectedDate ? new Date(selectedDate) : null}
          onChange={(date: Date | null) =>
            setSelectedDate(date ? format(date, 'yyyy/MM/dd') : '')
          }
          dateFormat={'yyyy/MM/dd'}
          customInput={<CustomInput />}
          popperPlacement="bottom-start"
          popperProps={{ strategy: 'fixed' }}
        />
      </section>
      <p className="text-red-500 text-sm">{errors.createdAt}</p>
      <section className="d-flex">
        <CommonSubmitButton
          title={`${isEditMode ? 'Update' : 'Create'}`}
          color={`${isEditMode ? 'yellow' : 'blue'}`}
          classNames="h-12 w-40 text-2xl"
        />
      </section>
    </form>
  )
}
