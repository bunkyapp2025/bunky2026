"use client"

import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface DownloadAppModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function DownloadAppModal({ isOpen, onOpenChange }: DownloadAppModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Download Bunky App</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-4">
          <p className="text-center text-gray-600">Get the full Bunky experience on your mobile device</p>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex-1 text-center">
              <div className="mb-3">
                <Image
                  src="/images/app-store-qr.png"
                  alt="App Store QR Code"
                  width={120}
                  height={120}
                  className="mx-auto rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Image
                  src="/images/app-store-logo.png"
                  alt="App Store logo"
                  width={20}
                  height={20}
                  className="rounded"
                />
                <div className="text-sm">
                  <div className="text-gray-600">GET IT ON</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center">
              <Link
                href="https://play.google.com/store/apps/details?id=com.bunky&pcampaignid=web_share"
                target="_blank"
                className="group"
              >
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <Image
                    src="/images/QrCode.png"
                    alt="Google Play QR Code"
                    fill
                    sizes="(max-width: 640px) 7rem, 8rem"
                    className="rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="text-sm mt-2">
                  <div className="text-gray-600">GET IT ON</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">Scan the QR code with your phone camera to download</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
