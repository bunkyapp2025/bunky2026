"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import contentData from "@/data/content.json"

export function AdSection() {
  const adImage = contentData.landingPageImages?.adOffer || "/placeholder.svg?height=300&width=300"

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-xl bg-[#FC81A0]/5 p-6 shadow-sm">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FC81A0]/10"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#FC81A0]/10"></div>
          <div className="relative grid gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="col-span-2 flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                  Special Offer: 15% Off Your First Tour Package
                </h3>
                <p className="text-gray-500 md:text-lg">
                  Use code <span className="font-bold text-[#FC81A0]">BUNKY15</span> at checkout to receive 15% off your
                  first booking. Limited time offer for new customers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  className="bg-[#FC81A0] hover:bg-[#e06d8a]"
                  onClick={() => (window.location.href = "/book-now")}
                >
                  Book Now
                </Button>
                <Link href="/special-offer">
                  <Button variant="outline" className="border-[#FC81A0] text-[#FC81A0]">
                    Learn More
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-gray-500">
                *Terms and conditions apply. Offer valid for first-time customers only. Cannot be combined with other
                promotions.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-full w-full min-h-[200px]">
                <Image
                  src={adImage || "/placeholder.svg"}
                  alt="Special offer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
