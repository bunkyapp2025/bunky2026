"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ArrowLeft, Calendar, Check, X } from "lucide-react"
import { QRCodeCard } from "@/components/qr-code-card"
import contentData from "@/data/content.json"

export default function ItineraryDetails({ params }) {
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const router = useRouter()
  const { id } = params

  // Get itinerary data from the JSON file
  // For simplicity, we'll use the same itinerary data for any ID
  const itinerary = contentData.itineraryDetails

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white pb-20">
        {/* Hero Image */}
        <div className="relative">
          <div className="relative h-[300px] w-full">
            <Image src={itinerary.images[0] || "/placeholder.svg"} alt={itinerary.name} fill className="object-cover" />
            <button className="absolute top-4 left-4 p-2 bg-white rounded-full" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex overflow-x-auto gap-2 p-2 bg-white">
            {itinerary.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${itinerary.name} thumbnail ${index + 2}`}
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

                {pkg.schedule && (
                  <div className="mt-4">
                    <h4 className="font-bold text-base mb-2">Travel Itinerary</h4>

                    {pkg.schedule.map((day, dayIndex) => (
                      <div key={dayIndex} className="mb-4">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-4 w-4 text-[#FC81A0] mr-2" />
                          <h5 className="font-bold">Day {day.day}</h5>
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

                    {/* Inclusions & Exclusions */}
                    {(pkg.inclusions || pkg.exclusions) && (
                      <div className="mt-4 border border-dashed rounded-lg p-3">
                        {pkg.inclusions && (
                          <div className="mb-2">
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-[#FC81A0] mr-2" />
                              <span className="font-bold text-sm">Inclusions:</span>
                            </div>
                            <p className="text-sm ml-6">{pkg.inclusions.join(", ")}</p>
                          </div>
                        )}

                        {pkg.exclusions && (
                          <div>
                            <div className="flex items-center">
                              <X className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="font-bold text-sm">Exclusions:</span>
                            </div>
                            <p className="text-sm ml-6">{pkg.exclusions.join(", ")}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <Button
                  className="w-full mt-4 bg-[#FC81A0] hover:bg-[#e06d8a]"
                  onClick={() => setShowDownloadModal(true)}
                >
                  See Package
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 flex flex-col gap-2 p-4 bg-white border-t">
          <Button variant="outline" className="w-full">
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
          <Button variant="outline" className="w-full">
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
