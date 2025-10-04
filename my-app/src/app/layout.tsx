import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Navbar } from "@/components/Navbar"

export const metadata: Metadata = {
  title: "CoreEd",
  description: "Created with Taha Ahmed ",
  generator: "Own",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} dark`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
