"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Star, MapPin, ChevronRight } from "lucide-react"
import { QRCodeCard } from "@/components/qr-code-card"
import contentData from "@/data/content.json"

export default function BookNow() {
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const router = useRouter()

  // Get data from the JSON file
  const featuredRentals = contentData.featuredRentals
  const topRatedRentals = contentData.topRatedRentals
  const discountedRentals = contentData.discountedRentals
  const travelItineraries = contentData.travelItineraries

  // Render a rental card
  const RentalCard = ({ rental, discounted = false }) => (
    <div
      className="relative rounded-lg overflow-hidden shadow-md bg-white cursor-pointer min-w-[280px] max-w-[280px] flex-shrink-0"
      onClick={() => router.push(`/property/${rental.id}`)}
    >
      <div className="relative h-48 w-full">
        <Image src={rental.image || "/placeholder.svg"} alt={rental.name} fill className="object-cover" />
        {discounted && (
          <div className="absolute top-2 left-2 bg-[#FC81A0] text-white text-xs font-bold px-2 py-1 rounded">
            {rental.discount}
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-base">{rental.name}</h3>
          {rental.rating && (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-[#FC81A0] fill-[#FC81A0]" />
              <span className="text-sm ml-1">
                {rental.rating} ({rental.reviews})
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span>{rental.location}</span>
        </div>
        <div className="mt-2 flex items-end">
          <span className="font-bold text-base">{rental.price}</span>
          {discounted && <span className="text-gray-400 text-sm line-through ml-2">{rental.originalPrice}</span>}
          <span className="text-gray-500 text-sm ml-1">{rental.perDay ? "/day" : rental.perHead ? "/head" : ""}</span>
        </div>
        <Button
          className="w-full mt-3 bg-[#FC81A0] hover:bg-[#e06d8a]"
          onClick={(e) => {
            e.stopPropagation() // Prevent triggering the parent onClick
            setShowDownloadModal(true)
          }}
        >
          Book Now
        </Button>
      </div>
    </div>
  )

  // Render an itinerary card
  const ItineraryCard = ({ itinerary }) => (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md mb-4 cursor-pointer"
      onClick={() => router.push(`/itinerary/${itinerary.id}`)}
    >
      <div className="relative h-48 w-full">
        <Image src={itinerary.image || "/placeholder.svg"} alt={itinerary.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-base">{itinerary.name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{itinerary.description}</p>
        <div className="mt-2">
          <span className="text-[#FC81A0] font-bold">{itinerary.priceRange}</span>
          <span className="text-gray-500 text-sm ml-1">{itinerary.perHead ? "per head" : ""}</span>
        </div>
        <Button
          variant="outline"
          className="w-full mt-3 border-[#FC81A0] text-[#FC81A0] hover:bg-[#FC81A0]/10"
          onClick={(e) => {
            e.stopPropagation() // Prevent triggering the parent onClick
            router.push(`/itinerary/${itinerary.id}`)
          }}
        >
          Read more
        </Button>
      </div>
    </div>
  )

  // Render section with "See all" link
  const SectionHeader = ({ title }) => (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <button className="text-[#FC81A0] text-sm flex items-center" onClick={() => setShowDownloadModal(true)}>
        See all <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container px-4 py-6">
          {/* Featured Rentals */}
          <section className="mb-8">
            <SectionHeader title="Featured Rentals" />
            <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {featuredRentals.map((rental) => (
                <RentalCard key={rental.id} rental={rental} />
              ))}
            </div>
          </section>

          {/* Top Rated Rentals */}
          <section className="mb-8">
            <SectionHeader title="Top Rated Rentals" />
            <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {topRatedRentals.map((rental) => (
                <RentalCard key={rental.id} rental={rental} />
              ))}
            </div>
          </section>

          {/* Discounted Rentals */}
          <section className="mb-8">
            <SectionHeader title="Discounted Rentals" />
            <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {discountedRentals.map((rental) => (
                <RentalCard key={rental.id} rental={rental} discounted={true} />
              ))}
            </div>
          </section>

          {/* Travel Itinerary */}
          <section className="mb-8">
            <SectionHeader title="Travel Itinerary for you!" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {travelItineraries.map((itinerary) => (
                <ItineraryCard key={itinerary.id} itinerary={itinerary} />
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-[#FC81A0] text-[#FC81A0] hover:bg-[#FC81A0]/10"
              onClick={() => setShowDownloadModal(true)}
            >
              See more itineraries
            </Button>
          </section>
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

            {/* QR Code Download Section */}
            <div className="mt-8 pt-6 border-t border-gray-200 w-full">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QRCodeCard storeName="Google Play" storeLabel="GET IT ON" storeUrl="https://play.google.com/store" />
                <QRCodeCard storeName="App Store" storeLabel="DOWNLOAD ON" storeUrl="https://apps.apple.com" />
              </div>
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
