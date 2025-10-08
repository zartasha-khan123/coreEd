import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import  Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} dark`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar/>
          {children}
           <Footer /> 
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
