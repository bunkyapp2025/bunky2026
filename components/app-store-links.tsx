import Image from "next/image"
import Link from "next/link"

export function AppStoreLinks() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Mobile App</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Download The Bunky App</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take Bunky with you on the go. Book tours, manage your itinerary, and connect with local guides from
              anywhere.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-8 md:flex-row">
          <div className="relative h-[500px] w-[250px] md:h-[600px] md:w-[300px] shadow-xl rounded-3xl overflow-hidden border-8 border-gray-800">
            <Image src="/placeholder.svg?height=600&width=300" alt="Bunky App" fill className="object-cover" />
          </div>
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Experience Bunky Anywhere</h3>
              <p className="text-gray-500">
                Our mobile app puts the world's best tour packages at your fingertips. Browse, book, and manage your
                trips with ease.
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Offline access to your itineraries</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Real-time messaging with guides</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Exclusive mobile-only deals</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
              <Link href="#" className="inline-block">
                <div className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
                  <Image src="/images/app-store-logo.png" alt="App Store" width={24} height={24} className="mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="inline-block">
                <div className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
                  <Image src="/images/google-play-logo.png" alt="Google Play" width={24} height={24} className="mr-3" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
