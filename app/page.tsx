import { redirect } from 'next/navigation'

const RootPage = () => {
  redirect('/auth')
}

export default RootPage
