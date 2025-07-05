import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AppStoreLinks() {
  return (
    <section className="py-16 bg-[#FC81A0]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Download the Bunky App</h2>
            <p className="max-w-[600px] text-white/90 md:text-lg">
              Get the best booking experience on your mobile device. Available for iOS and Android.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="inline-block">
              <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-100 h-14 px-6">
                <div className="flex items-center space-x-3">
                  <Image src="/images/app-store-logo.png" alt="App Store" width={28} height={28} className="rounded" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">GET IT ON</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </Button>
            </Link>

            <Link href="#" className="inline-block">
              <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-100 h-14 px-6">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/google-play-logo.png"
                    alt="Google Play"
                    width={28}
                    height={28}
                    className="rounded"
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
