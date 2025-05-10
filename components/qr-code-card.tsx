"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

interface QRCodeCardProps {
  storeName: string
  storeLabel: string
  storeUrl: string
  size?: "small" | "medium" | "large"
}

export function QRCodeCard({ storeName, storeLabel, storeUrl, size = "medium" }: QRCodeCardProps) {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Size configurations
  const sizeConfig = {
    small: {
      container: "p-2 space-x-2 max-w-[160px]",
      qrSize: 12,
      qrWidth: 48,
      qrHeight: 48,
      labelSize: "text-[10px]",
      nameSize: "text-xs",
    },
    medium: {
      container: "p-3 space-x-2 max-w-[180px]",
      qrSize: 14,
      qrWidth: 56,
      qrHeight: 56,
      labelSize: "text-xs",
      nameSize: "text-sm",
    },
    large: {
      container: "p-3 space-x-3 max-w-[200px]",
      qrSize: 16,
      qrWidth: 64,
      qrHeight: 64,
      labelSize: "text-xs",
      nameSize: "text-base",
    },
  }

  const config = sizeConfig[size]

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setTooltipPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top + 20, // Position tooltip below cursor
      })
    }
  }

  return (
    <Link href={storeUrl} target="_blank" className="block">
      <div
        ref={cardRef}
        className={`group relative bg-gray-500 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center ${config.container}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className={`relative h-${config.qrSize} w-${config.qrSize} flex-shrink-0`}>
          <Image
            src={`/placeholder.svg?height=${config.qrWidth}&width=${config.qrHeight}`}
            alt={`${storeName} QR Code`}
            width={config.qrWidth}
            height={config.qrHeight}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <span className={`${config.labelSize} text-gray-100`}>{storeLabel}</span>
          <span className={`font-bold text-white ${config.nameSize}`}>{storeName}</span>
        </div>

        {/* Cursor-following tooltip */}
        {showTooltip && (
          <div
            className="absolute bg-black bg-opacity-75 text-white text-xs py-1 px-2 rounded pointer-events-none z-10"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: "translate(-50%, 0)",
            }}
          >
            Scan or tap to download
          </div>
        )}
      </div>
    </Link>
  )
}
