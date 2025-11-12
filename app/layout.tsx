import React from 'react'
import './globals.css'

export const metadata = {
  title: 'GoConnectAI — AI Receptionists that book appointments 24/7',
  description: 'Never miss a call again — AI receptionists that book appointments 24/7.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
