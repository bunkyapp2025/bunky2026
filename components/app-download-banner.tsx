"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AppDownloadBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) {
    return null
  }

  const detectMobileDevice = () => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store"
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        window.location.href = "https://apps.apple.com"
      } else {
        // If not on mobile, show both options
        document.getElementById("download-options")?.classList.remove("hidden")
      }
    }
  }

  return (
    <div className="sticky top-16 z-40 w-full bg-gray-100 text-gray-500 shadow-md">
      <div className="container flex items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center space-x-2">
          <Smartphone className="h-5 w-5" />
          <p className="text-sm font-medium">Get the Bunky app for the best experience!</p>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-[#FC81A0]/10 hover:border hover:border-[#FC81A0]" onClick={detectMobileDevice}>
            Download Now
          </Button>

          <div
            id="download-options"
            className="hidden absolute top-full right-4 mt-2 bg-white rounded-lg shadow-lg p-4 z-50"
          >
            <div className="grid grid-cols-2 gap-4">
              <Link href="https://play.google.com/store" target="_blank" className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Google Play QR Code"
                  width={100}
                  height={100}
                  className="rounded-lg mb-2"
                />
                <span className="text-xs text-gray-700">Google Play</span>
              </Link>
              <Link href="https://apps.apple.com" target="_blank" className="flex flex-col items-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="App Store QR Code"
                  width={100}
                  height={100}
                  className="rounded-lg mb-2"
                />
                <span className="text-xs text-gray-700">App Store</span>
              </Link>
            </div>
          </div>

          <button
            className="rounded-full p-1 hover:text-black hover:bg-[#FC81A0]/10 hover:border hover:border-[#FC81A0]"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
