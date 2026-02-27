import EditPost from '@/src/components/L4/edit'

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <EditPost id={id} />
}
