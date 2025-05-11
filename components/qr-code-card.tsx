import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import contentData from "@/data/content.json"

export function QRCodeCard() {
  const qrCodes = contentData.qrCodes || {
    googlePlay: "/placeholder.svg?height=150&width=150",
    appStore: "/placeholder.svg?height=150&width=150",
  }

  return (
    <Card className="overflow-hidden border-2 border-[#FC81A0]/10">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-bold">Scan to Download</h3>
          <p className="text-center text-sm text-gray-500">
            Scan these QR codes to download the Bunky app on your mobile device.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="relative h-32 w-32 overflow-hidden rounded-lg">
                <Image
                  src={qrCodes.googlePlay || "/placeholder.svg"}
                  alt="Google Play QR Code"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium">Google Play</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="relative h-32 w-32 overflow-hidden rounded-lg">
                <Image
                  src={qrCodes.appStore || "/placeholder.svg"}
                  alt="App Store QR Code"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium">App Store</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
