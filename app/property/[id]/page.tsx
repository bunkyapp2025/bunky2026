"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Star, MapPin, ArrowLeft, Bed, Bath, Home, SquareUser, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { QRCodeCard } from "@/components/qr-code-card"
import { SimilarProperties } from "@/components/similar-properties"
import contentData from "@/data/content.json"
import { PropertyMap } from "@/components/property-map"
import { AvailabilityCalendar } from "@/components/availability-calendar"
import { ReviewForm } from "@/components/review-form"

export default function PropertyDetails({ params }) {
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()
  const { id } = params

  // Get property data from the JSON file
  // For simplicity, we'll use the same property data for any ID
  const property = contentData.propertyDetails

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))
  }

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))
  }

  // Set current image by clicking on thumbnail
  const setImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Property Images */}
        <div className="relative">
          <div className="relative h-[300px] w-full">
            <Image
              src={property.images[currentImageIndex] || "/placeholder.svg"}
              alt={property.name}
              fill
              className="object-cover"
            />
            <button className="absolute top-4 left-4 p-2 bg-white rounded-full" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
              {currentImageIndex + 1}/{property.images.length}
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
            {property.images.map((image, index) => (
              <div
                key={index}
                className={`relative h-16 w-16 flex-shrink-0 cursor-pointer ${index === currentImageIndex ? "border-2 border-[#FC81A0]" : ""}`}
                onClick={() => setImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-[#FC81A0] fill-[#FC81A0]" />
              <span className="text-sm ml-1">
                {property.rating} ({property.reviews})
              </span>
            </div>
          </div>

          <div className="flex items-center text-gray-500 text-sm mt-1">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{property.location}</span>
          </div>

          {/* Property Features */}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center">
              <Home className="h-5 w-5 text-gray-400 mr-2" />
              <span>{property.rooms} room</span>
            </div>
            <div className="flex items-center">
              <Bed className="h-5 w-5 text-gray-400 mr-2" />
              <span>{property.beds} bed</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 text-gray-400 mr-2" />
              <span>{property.bathrooms} bath</span>
            </div>
            <div className="flex items-center">
              <SquareUser className="h-5 w-5 text-gray-400 mr-2" />
              <span>{property.area}</span>
            </div>
          </div>

          {/* Home Amenities */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3">Home amenities</h2>
            <div className="grid grid-cols-2 gap-y-3">
              {property.amenities.home.slice(0, 8).map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-4 w-4 text-[#FC81A0] mr-2" />
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Amenities (Collapsible) */}
          <div className="mt-4">
            <details className="group">
              <summary className="flex items-center cursor-pointer">
                <span className="text-lg font-bold">Other amenities</span>
                <span className="ml-auto transform group-open:rotate-180 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 space-y-2">
                {property.amenities.other.map((amenity, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-[#FC81A0] mr-2 mt-0.5" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </details>
          </div>

          {/* Nearby Facilities */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3">Nearest public facilities</h2>
            <div className="grid grid-cols-2 gap-y-3">
              {property.nearbyFacilities.map((facility, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="h-4 w-4 text-[#FC81A0] mr-2" />
                  <span className="text-sm">{facility.name}</span>
                  <span className="text-xs text-gray-500 ml-1">{facility.distance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About the Property */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">About the Property</h2>
            <p className="text-sm text-gray-600">{property.description}</p>
          </div>

          {/* Property Map */}
          <PropertyMap location={property.location} />

          {/* Availability Calendar */}
          <AvailabilityCalendar />

          {/* Reviews */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3">Reviews</h2>
            <div className="space-y-4">
              {property.reviewItems &&
                property.reviewItems.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FC81A0] fill-[#FC81A0]" />
                        <span className="text-sm ml-1">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm mt-2">{review.comment}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Review Form */}
          <ReviewForm />

          {/* Similar Properties */}
          <SimilarProperties currentPropertyId={id} />
        </div>

        {/* Price and Book Now */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between">
          <div>
            <span className="font-bold text-xl">{property.price}</span>
            <span className="text-gray-500 text-sm ml-1">/day</span>
          </div>
          <Button className="bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => setShowDownloadModal(true)}>
            Book Now
          </Button>
        </div>
      </main>

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
