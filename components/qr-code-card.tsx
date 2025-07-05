import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface QrCodeCardProps {
  title: string
  qrImage: string
  storeText: string
  storeName: string
  storeIcon: string
}

export function QrCodeCard({ title, qrImage, storeText, storeName, storeIcon }: QrCodeCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-6 text-center">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="mb-4">
          <Image
            src={qrImage || "/placeholder.svg"}
            alt={`QR code for ${storeName}`}
            width={150}
            height={150}
            className="mx-auto rounded-lg"
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Image
            src={storeIcon || "/placeholder.svg"}
            alt={`${storeName} logo`}
            width={24}
            height={24}
            className="rounded"
          />
          <div className="text-sm">
            <div className="text-gray-600">{storeText}</div>
            <div className="font-semibold">{storeName}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
