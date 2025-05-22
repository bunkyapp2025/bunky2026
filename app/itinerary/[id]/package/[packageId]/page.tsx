"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { DownloadAppModal } from "@/components/download-app-modal"
import { ArrowLeft, Calendar, Clock, Check, X } from "lucide-react"
import contentData from "@/data/content.json"

const QRCodeCard = ({ storeName, storeLabel, storeUrl }) => {
  return (
    <Link href={storeUrl} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col items-center border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
        <div className="h-16 w-16 relative">
          <Image
            src={`/images/${storeName.toLowerCase().replace(" ", "-")}-qr.png`}
            alt={`${storeName} QR Code`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">{storeLabel}</p>
        <p className="font-semibold text-sm">{storeName}</p>
      </div>
    </Link>
  )
}

export default function PackageDetails({ params }) {
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const router = useRouter()
  const { id, packageId } = params

  // Get itinerary data from the JSON file
  const itinerary = contentData.itineraryDetails

  // Find the specific package
  const packageData = itinerary.packages.find((pkg) => pkg.id.toString() === packageId) || itinerary.packages[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white pb-20">
        {/* Hero Image */}
        <div className="relative">
          <div className="relative h-[300px] w-full">
            <Image
              src={packageData.images[0] || "/placeholder.svg"}
              alt={packageData.name}
              fill
              className="object-cover"
            />
            <button className="absolute top-4 left-4 p-2 bg-white rounded-full" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Package Details */}
        <div className="p-4">
          <h1 className="text-xl font-bold">{packageData.name}</h1>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{packageData.duration}</span>
          </div>
          <p className="text-gray-600 text-sm mt-2">{packageData.description}</p>

          {/* Price */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg mb-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Price per person</p>
                <p className="text-xl font-bold text-[#FC81A0]">{packageData.price}</p>
              </div>
              <Button className="bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => setShowDownloadModal(true)}>
                Book Now
              </Button>
            </div>
          </div>

          {/* Day by Day Itinerary */}
          {packageData.schedule.map((day, index) => (
            <div key={index} className="flex">
              {/* Timeline Column */}
              <div className="flex flex-col items-center mr-4 relative">
                {/* Dot */}
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#FC81A0] text-white">
                  {day.day}
                </div>

                {/* Vertical Line */}
                {index < packageData.schedule.length - 1 && (
                  <div className="absolute top-8 w-0.5 bg-gray-200 h-full"></div>
                )}
              </div>

              {/* Content Column */}
              <div className="flex-1 pb-8"> {/* optional pb here for content spacing */}
                <h3 className="font-bold">Day {day.day}</h3>
                <div className="mt-2 space-y-3">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-start">
                      <div className="min-w-[60px] text-xs text-gray-500">{activity.time}</div>
                      <div className="ml-2 text-sm">{activity.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Inclusions & Exclusions */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold mb-3">Inclusions</h2>
              <ul className="space-y-2">
                {packageData.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Exclusions</h2>
              <ul className="space-y-2">
                {packageData.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-3">Additional Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#FC81A0] mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Booking Deadline</p>
                    <p className="text-sm text-gray-500">Book at least 7 days in advance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-[#FC81A0] mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-sm text-gray-500">Tours run daily, subject to availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 bg-[#FC81A0]/10 p-6 rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">Ready to Experience {packageData.name}?</h3>
            <p className="text-sm text-gray-600 mb-4">Book now to secure your spot on this amazing adventure!</p>
            <Button className="bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => setShowDownloadModal(true)}>
              Book This Package
            </Button>
          </div>
        </div>
      </main>

      {/* Download App Modal */}
      <DownloadAppModal isOpen={showDownloadModal} onOpenChange={setShowDownloadModal} />

      <Footer />
    </div>
  )
}
