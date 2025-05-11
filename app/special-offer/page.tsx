import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Calendar, Clock, Tag } from "lucide-react"
import contentData from "@/data/content.json"

export default function SpecialOffer() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">
                    Limited Time Offer
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    15% Off Your First Tour Package
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Experience the world's most breathtaking destinations with our curated tour packages at a special
                    introductory price.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#FC81A0]" />
                    <span className="text-sm text-gray-500">Valid until December 31, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4 text-[#FC81A0]" />
                    <span className="text-sm text-gray-500">Code: BUNKY15</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#FC81A0] hover:bg-[#e06d8a]">
                    Book Now
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
                  <Image
                    src={contentData.landingPageImages.adOffer || "/placeholder.svg"}
                    alt="Special Offer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Offer Details</h2>
                <p className="text-gray-500">
                  Take advantage of our special introductory offer and save 15% on your first tour package booking with
                  Bunky. This limited-time offer is perfect for new customers looking to experience our premium tour
                  packages.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="border-2 border-[#FC81A0]/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-2">
                        <Check className="mt-1 h-5 w-5 text-[#FC81A0]" />
                        <div>
                          <h3 className="font-bold">How to Redeem</h3>
                          <p className="text-sm text-gray-500">
                            Simply enter the code BUNKY15 at checkout when booking your first tour package.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="mt-1 h-5 w-5 text-[#FC81A0]" />
                        <div>
                          <h3 className="font-bold">Eligible Packages</h3>
                          <p className="text-sm text-gray-500">
                            This offer is valid on all tour packages with a minimum value of $200.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="mt-1 h-5 w-5 text-[#FC81A0]" />
                        <div>
                          <h3 className="font-bold">Booking Period</h3>
                          <p className="text-sm text-gray-500">
                            Book by December 31, 2023 for travel anytime in the next 12 months.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-[#FC81A0]/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-2">
                        <Clock className="mt-1 h-5 w-5 text-[#FC81A0]" />
                        <div>
                          <h3 className="font-bold">Terms & Conditions</h3>
                          <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Valid for first-time customers only</li>
                            <li>• Cannot be combined with other offers</li>
                            <li>• Discount applies to package price only</li>
                            <li>• Subject to availability</li>
                            <li>• Bunky reserves the right to modify or cancel this promotion at any time</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
