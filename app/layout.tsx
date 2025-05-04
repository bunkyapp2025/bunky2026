import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MaintenancePage } from "@/components/maintenance-page"

const inter = Inter({ subsets: ["latin"] })

// Set this to true to enable maintenance mode, false to disable
const MAINTENANCE_MODE = true

export const metadata: Metadata = {
  title: "Bunky - Your All-in-One Travel Platform",
  description: "Discover amazing tour packages and book your next adventure with Bunky.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {MAINTENANCE_MODE ? <MaintenancePage /> : children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
