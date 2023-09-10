import { redirect } from 'next/navigation'

const RootPage = () => {
  redirect('/auth/login')
}

export default RootPage
