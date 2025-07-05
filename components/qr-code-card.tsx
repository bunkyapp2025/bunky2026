"use client"

import Image from "next/image"
import Link from "next/link"
import contentData from "@/data/content.json"

interface QRCodeCardProps {
  storeName: string
  storeLabel: string
  storeUrl: string
  size?: "small" | "medium" | "large"
}

export function QRCodeCard({ storeName, storeLabel, storeUrl, size = "medium" }: QRCodeCardProps) {
  // Get QR code image based on store name
  const qrCodeImage = storeName.includes("Google Play") ? contentData.qrCodes.googlePlay : contentData.qrCodes.appStore

  // Get store logo based on store name
  const storeLogo = storeName.includes("Google Play") ? "/images/google-play-logo.png" : "/images/app-store-logo.png"

  return (
    <Link href={storeUrl} target="_blank">
      <div
        className="group relative bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow flex items-center space-x-3 max-w-[200px]"
        title="Scan or tap to download"
      >
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden">
          <Image
            src={qrCodeImage || "/placeholder.svg?height=48&width=48"}
            alt={`${storeName} QR Code`}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <div className="relative h-4 w-4 flex-shrink-0">
              <Image src={storeLogo || "/placeholder.svg"} alt={`${storeName} Logo`} fill className="object-contain" />
            </div>
            <span className="text-xs text-gray-500">{storeLabel}</span>
          </div>
          <span className="font-bold text-sm">{storeName}</span>
        </div>
      </div>
    </Link>
  )
}
