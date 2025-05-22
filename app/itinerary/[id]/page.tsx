"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { QRCodeCard } from "@/components/qr-code-card"
import { DownloadAppModal } from "@/components/download-app-modal"
import contentData from "@/data/content.json"

export default function ItineraryDetails({ params }) {
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()
  const { id } = params

  // Get itinerary data from the JSON file
  // For simplicity, we'll use the same itinerary data for any ID
  const itinerary = contentData.itineraryDetails

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? itinerary.images.length - 1 : prev - 1))
  }

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === itinerary.images.length - 1 ? 0 : prev + 1))
  }

  // Set current image by clicking on thumbnail
  const setImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white pb-20">
        {/* Hero Image */}
        <div className="relative">
          <div className="relative h-[300px] w-full">
            <Image
              src={itinerary.images[currentImageIndex] || "/placeholder.svg"}
              alt={itinerary.name}
              fill
              className="object-cover"
            />
            <button className="absolute top-4 left-4 p-2 bg-white rounded-full" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1}/{itinerary.images.length}
            </div>

            {/* Navigation arrows */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex overflow-x-auto gap-2 p-2 bg-white">
            {itinerary.images.map((image, index) => (
              <div
                key={index}
                className={`relative h-16 w-16 flex-shrink-0 cursor-pointer ${index === currentImageIndex ? "border-2 border-[#FC81A0]" : ""}`}
                onClick={() => setImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${itinerary.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary Details */}
        <div className="p-4">
          <h1 className="text-xl font-bold">{itinerary.name}</h1>
          <p className="text-gray-600 text-sm mt-2">{itinerary.description}</p>

          {/* Tour Packages */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Tour Packages</h2>

            {itinerary.packages.map((pkg, index) => (
              <div key={index} className="mb-6 border rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{pkg.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{pkg.duration}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{pkg.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FC81A0] font-bold text-xl">{pkg.price}</div>
                    <div className="text-gray-500 text-xs">/ per head</div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <Button
                    variant="outline"
                    className="border-[#FC81A0] text-[#FC81A0] hover:bg-[#FC81A0]/10"
                    onClick={() => router.push(`/itinerary/${id}/package/${pkg.id}`)}
                  >
                    View Details
                  </Button>
                  <Button className="bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => setShowDownloadModal(true)}>
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Download App Modal */}
      <DownloadAppModal isOpen={showDownloadModal} onOpenChange={setShowDownloadModal} />

      <Footer />
    </div>
  )
}
