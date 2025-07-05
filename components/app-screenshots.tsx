import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AppScreenshots() {
  const images = [
    "/images/app-screenshot-discover.png",
    "/images/app-screenshot-book.png",
    "/images/app-screenshot-experience.png",
  ]

  return (
    <section id="app" className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Mobile App</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Book On The Go!</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our mobile app makes it easy to discover, book, and manage your bookings from anywhere.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="discover" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-[#FC81A0]/10">
                <TabsTrigger
                  value="discover"
                  className="data-[state=active]:bg-[#FC81A0] data-[state=active]:text-white"
                >
                  Discover
                </TabsTrigger>
                <TabsTrigger value="book" className="data-[state=active]:bg-[#FC81A0] data-[state=active]:text-white">
                  Book
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-[#FC81A0] data-[state=active]:text-white"
                >
                  Experience
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="discover" className="mt-0">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative w-[250px] md:w-[300px] h-[500px] md:h-[600px] shadow-xl rounded-3xl border-8 border-gray-800 overflow-hidden">
                  <div className="h-full overflow-y-auto scrollbar-hide">
                    <Image
                      src={images[0] || "/placeholder.svg"}
                      alt="Bunky App Discover Screen"
                      width={284}
                      height={1200}
                      className="w-full object-top"
                      priority
                    />
                  </div>
                </div>
                <div className="max-w-md space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold">Discover Amazing Tours</h3>
                  <p className="text-gray-500">
                    Browse through featured rentals, top-rated properties, and discounted stays. Find travel itineraries
                    tailored to your preferences and explore exciting destinations.
                  </p>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>Personalized recommendations</span>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>Advanced search filters</span>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>Save favorites for later</span>
                    </li>
                  </ul>

                  {/* QR Code Download Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-row gap-4 justify-center md:justify-start">
                      <Link href="https://play.google.com/store" target="_blank">
                        <div
                          className="group relative bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow flex items-center space-x-2 max-w-[180px]"
                          title="Scan or tap to download"
                        >
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              src="/images/google-play-qr.png"
                              alt="Google Play QR Code"
                              width={50}
                              height={50}
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col text-gray-500">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/google-play-logo.png"
                                alt="Google Play"
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-xs">GET IT ON</span>
                            </div>
                            <span className="font-bold text-sm">Google Play</span>
                          </div>
                        </div>
                      </Link>

                      <Link href="https://apps.apple.com" target="_blank">
                        <div
                          className="group relative bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow flex items-center space-x-2 max-w-[180px]"
                          title="Scan or tap to download"
                        >
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              src="/images/app-store-qr.png"
                              alt="App Store QR Code"
                              width={50}
                              height={50}
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col text-gray-500">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/app-store-logo.png"
                                alt="App Store"
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-xs">GET IT ON</span>
                            </div>
                            <span className="font-bold text-sm">App Store</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="book" className="mt-0">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative w-[250px] md:w-[300px] h-[500px] md:h-[600px] shadow-xl rounded-3xl border-8 border-gray-800 overflow-hidden">
                  <div className="h-full overflow-y-auto scrollbar-hide">
                    <Image
                      src={images[1] || "/placeholder.svg"}
                      alt="Bunky App Booking Screen"
                      width={284}
                      height={1200}
                      className="w-full object-top"
                    />
                  </div>
                </div>
                <div className="max-w-md space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold">Detailed Property Information</h3>
                  <p className="text-gray-500">
                    View comprehensive property details including amenities, location maps, and authentic guest reviews.
                    Get all the information you need to make the perfect choice for your stay.
                  </p>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>Secure payment options</span>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>Flexible cancellation policies</span>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>Instant confirmation</span>
                    </li>
                  </ul>

                  {/* QR Code Download Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-row gap-4 justify-center md:justify-start">
                      <Link href="https://play.google.com/store" target="_blank">
                        <div
                          className="group relative bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow flex items-center space-x-2 max-w-[180px]"
                          title="Scan or tap to download"
                        >
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              src="/images/google-play-qr.png"
                              alt="Google Play QR Code"
                              width={50}
                              height={50}
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col text-gray-500">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/google-play-logo.png"
                                alt="Google Play"
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-xs">GET IT ON</span>
                            </div>
                            <span className="font-bold text-sm">Google Play</span>
                          </div>
                        </div>
                      </Link>

                      <Link href="https://apps.apple.com" target="_blank">
                        <div
                          className="group relative bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow flex items-center space-x-2 max-w-[180px]"
                          title="Scan or tap to download"
                        >
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              src="/images/app-store-qr.png"
                              alt="App Store QR Code"
                              width={50}
                              height={50}
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col text-gray-500">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/app-store-logo.png"
                                alt="App Store"
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-xs">GET IT ON</span>
                            </div>
                            <span className="font-bold text-sm">App Store</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="mt-0">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative w-[250px] md:w-[300px] h-[500px] md:h-[600px] shadow-xl rounded-3xl border-8 border-gray-800 overflow-hidden">
                  <div className="h-full overflow-y-auto scrollbar-hide">
                    <Image
                      src={images[2] || "/placeholder.svg"}
                      alt="Bunky App Experience Screen"
                      width={284}
                      height={1200}
                      className="w-full object-top"
                    />
                  </div>
                </div>
                <div className="max-w-md space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold">Explore Tour Packages</h3>
                  <p className="text-gray-500">
                    Choose from a variety of tour packages at different price points, from budget-friendly options to
                    luxurious getaways. Each package is carefully curated to provide an unforgettable experience.
                  </p>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>Digital itinerary</span>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>In-app messaging with guides</span>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                      <span>Offline access to important information</span>
                    </li>
                  </ul>

                  {/* QR Code Download Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-row gap-4 justify-center md:justify-start">
                      <Link href="https://play.google.com/store" target="_blank">
                        <div
                          className="group relative bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow flex items-center space-x-2 max-w-[180px]"
                          title="Scan or tap to download"
                        >
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              src="/images/google-play-qr.png"
                              alt="Google Play QR Code"
                              width={50}
                              height={50}
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col text-gray-500">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/google-play-logo.png"
                                alt="Google Play"
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-xs">GET IT ON</span>
                            </div>
                            <span className="font-bold text-sm">Google Play</span>
                          </div>
                        </div>
                      </Link>

                      <Link href="https://apps.apple.com" target="_blank">
                        <div
                          className="group relative bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition-shadow flex items-center space-x-2 max-w-[180px]"
                          title="Scan or tap to download"
                        >
                          <div className="relative h-12 w-12 flex-shrink-0">
                            <Image
                              src="/images/app-store-qr.png"
                              alt="App Store QR Code"
                              width={50}
                              height={50}
                              className="rounded-md"
                            />
                          </div>
                          <div className="flex flex-col text-gray-500">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/app-store-logo.png"
                                alt="App Store"
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-xs">GET IT ON</span>
                            </div>
                            <span className="font-bold text-sm">App Store</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
