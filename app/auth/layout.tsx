'use client'

import { useRouter } from 'next/navigation'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  // user logged mock
  const isUserLogged = false
  // basic route protection
  if (isUserLogged) {
    router.push('/dashboard')
  }

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
