"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowLeft, Calendar, Check, X, ChevronLeft, ChevronRight } from "lucide-react"
import { QRCodeCard } from "@/components/qr-code-card"
import contentData from "@/data/content.json"
import { SimilarPackages } from "@/components/similar-packages"

export default function PackageDetails({ params }) {
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()
  const { id, packageId } = params

  // Get itinerary data from the JSON file
  const itinerary = contentData.itineraryDetails

  // Find the specific package
  const packageData = itinerary.packages.find((pkg) => pkg.id.toString() === packageId) || itinerary.packages[0]

  // Get package images or use itinerary images as fallback
  const images = packageData.images || itinerary.images

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Set current image by clicking on thumbnail
  const setImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white pb-24">
        {/* Hero Image */}
        <div className="relative">
          <div className="relative h-[300px] w-full">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={packageData.name}
              fill
              className="object-cover"
            />
            <button className="absolute top-4 left-4 p-2 bg-white rounded-full" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1}/{images.length}
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
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative h-16 w-16 flex-shrink-0 cursor-pointer ${index === currentImageIndex ? "border-2 border-[#FC81A0]" : ""}`}
                onClick={() => setImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${packageData.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Package Details */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold">{packageData.name}</h1>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{packageData.duration}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[#FC81A0] font-bold text-xl">{packageData.price}</div>
              <div className="text-gray-500 text-xs">/ per head</div>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-3">{packageData.description}</p>

          {/* Day-by-day Itinerary */}
          {packageData.schedule && (
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-3">Day-by-Day Itinerary</h2>

              {packageData.schedule.map((day, dayIndex) => (
                <div key={dayIndex} className="mb-6">
                  <div className="flex items-center mb-2 bg-[#FC81A0]/10 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-[#FC81A0] mr-2" />
                    <h3 className="font-bold">Day {day.day}</h3>
                  </div>

                  <div className="ml-6 border-l-2 border-[#FC81A0] pl-4 space-y-4">
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="relative">
                        <div className="absolute -left-6 top-1 w-2 h-2 rounded-full bg-[#FC81A0]"></div>
                        <div className="text-xs text-[#FC81A0] font-bold">{activity.time}</div>
                        <div className="text-sm">{activity.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Inclusions & Exclusions */}
          {(packageData.inclusions || packageData.exclusions) && (
            <div className="mt-6 border border-dashed rounded-lg p-4">
              {packageData.inclusions && (
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Check className="h-4 w-4 text-[#FC81A0] mr-2" />
                    <span className="font-bold">Inclusions:</span>
                  </div>
                  <ul className="space-y-2 pl-6">
                    {packageData.inclusions.map((item, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <span className="h-2 w-2 rounded-full bg-[#FC81A0] mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {packageData.exclusions && (
                <div>
                  <div className="flex items-center mb-2">
                    <X className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="font-bold">Exclusions:</span>
                  </div>
                  <ul className="space-y-2 pl-6">
                    {packageData.exclusions.map((item, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <span className="h-2 w-2 rounded-full bg-gray-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Similar Packages */}
          <SimilarPackages currentPackageId={packageId} itineraryId={id} />
        </div>
      </main>

      {/* Sticky Bottom with Price and Book Now */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between">
        <div>
          <span className="font-bold text-xl">{packageData.price}</span>
          <span className="text-gray-500 text-sm ml-1">/ per head</span>
        </div>
        <Button className="bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => setShowDownloadModal(true)}>
          Book Now
        </Button>
      </div>

      {/* Download App Modal */}
      <Dialog open={showDownloadModal} onOpenChange={setShowDownloadModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Complete Your Booking on the App</DialogTitle>
            <DialogDescription className="text-center">
              Download the Bunky app for the best booking experience and exclusive mobile-only deals!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 py-4">
            <div className="relative h-[200px] w-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Bunky App Screenshot"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <QRCodeCard
                storeName="Google Play"
                storeLabel="GET IT ON"
                storeUrl="https://play.google.com/store"
                size="large"
              />
              <QRCodeCard
                storeName="App Store"
                storeLabel="DOWNLOAD ON THE"
                storeUrl="https://apps.apple.com"
                size="large"
              />
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              Continue your booking process seamlessly on our mobile app with more features and exclusive discounts.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
