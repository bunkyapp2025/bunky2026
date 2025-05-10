"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Star, MapPin, ArrowLeft, Bed, Bath, Home, SquareUser, Check } from "lucide-react"
import { QRCodeCard } from "@/components/qr-code-card"
import contentData from "@/data/content.json"

export default function PropertyDetails({ params }) {
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const router = useRouter()
  const { id } = params

  // Get property data from the JSON file
  // For simplicity, we'll use the same property data for any ID
  const property = contentData.propertyDetails

  // Extract the review count and review items separately
  const reviewCount = property.reviews
  const reviewItems = property.reviewItems || []

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Property Images */}
        <div className="relative">
          <div className="relative h-[300px] w-full">
            <Image src={property.images[0] || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
            <button className="absolute top-4 left-4 p-2 bg-white rounded-full" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
              1/11
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex overflow-x-auto gap-2 p-2 bg-white">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.name} thumbnail ${index + 2}`}
                  fill
                  className="object-cover rounded"
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
                {property.rating} ({reviewCount})
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

          {/* Call to Action Buttons */}
          <div className="flex gap-2 mt-6">
            <Button variant="outline" className="flex-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C16.4223 21.6445 13.0254 20.3752 10.1 18.28C7.38366 16.3578 5.12548 13.8296 3.59 10.89C1.48235 7.94533 0.210661 4.52149 0 0.959999C-0.000261 0.410211 0.210033 -0.118951 0.584438 -0.494006C0.958843 -0.869061 1.48739 -1.08022 2.04 -1.08H5.04C6.0503 -1.09479 6.92706 -0.365639 7.14 0.619999C7.3731 1.87387 7.74092 3.09882 8.24 4.27C8.51208 4.88961 8.35818 5.6034 7.85 6.07L6.17 7.75C7.59168 10.5721 9.8079 12.9884 12.53 14.61L14.21 12.93C14.6766 12.4218 15.3904 12.2679 16.01 12.54C17.1812 13.0391 18.4062 13.4069 19.66 13.64C20.6649 13.8584 21.4037 14.7458 21.38 15.76L22 16.92Z"
                  fill="#FC81A0"
                />
              </svg>
              Call Now
            </Button>
            <Button variant="outline" className="flex-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
                  stroke="#FC81A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Message Us
            </Button>
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
