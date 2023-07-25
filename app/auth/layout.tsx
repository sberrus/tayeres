'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  // hooks
  const router = useRouter()
  // user logged mock
  const isUserLogged = true

  // basic route protection
  if (isUserLogged) {
    router.push('/dashboard')
  }

  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
