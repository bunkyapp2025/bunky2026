"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { QRCodeCard } from "@/components/qr-code-card"

interface DownloadAppModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
}

export function DownloadAppModal({
  isOpen,
  onOpenChange,
  title = "Complete Your Booking on the App",
  description = "Download the Bunky app for the best booking experience and exclusive mobile-only deals!",
}: DownloadAppModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">{title}</DialogTitle>
          <DialogDescription className="text-center">{description}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="relative h-[150px] w-[150px] flex items-center justify-center">
            <Image src="/images/bunky-logo.png" alt="Bunky Logo" width={150} height={150} className="object-contain" />
          </div>

          {/* QR Code Download Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 w-full">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QRCodeCard storeName="Google Play" storeLabel="GET IT ON" storeUrl="https://play.google.com/store" />
              <QRCodeCard storeName="App Store" storeLabel="DOWNLOAD ON" storeUrl="https://apps.apple.com" />
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            Continue your booking process seamlessly on our mobile app with more features and exclusive discounts.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
