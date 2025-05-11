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
  const qrCodeImage = storeName === "Google Play" ? contentData.qrCodes.googlePlay : contentData.qrCodes.appStore

  return (
    <Link href={storeUrl} target="_blank">
      <div
        className="group relative bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow flex items-center space-x-2 max-w-[180px]"
        title="Scan or tap to download"
      >
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image
            src={qrCodeImage || "/placeholder.svg"}
            alt={`${storeName} QR Code`}
            width={50}
            height={50}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col text-gray-500">
          <span className="text-xs">{storeLabel}</span>
          <span className="font-bold text-sm">{storeName}</span>
        </div>
      </div>
    </Link>
  )
}
