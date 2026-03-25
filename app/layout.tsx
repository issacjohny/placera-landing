import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Placera — Smart Placement Management for Indian Colleges',
  description: 'Placera helps Training and Placement Officers manage HR contacts, track student placements, and close more offers. Built for Indian colleges.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#1D9E75"/>
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
