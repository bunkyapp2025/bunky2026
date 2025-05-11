"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Calendar } from "lucide-react"
import contentData from "@/data/content.json"

export function SimilarPackages({ currentPackageId, itineraryId }) {
  const router = useRouter()

  // Get all packages from the itinerary
  const itinerary = contentData.itineraryDetails

  // Filter out the current package and get other packages
  const similarPackages = itinerary.packages.filter((pkg) => pkg.id.toString() !== currentPackageId.toString())

  if (similarPackages.length === 0) {
    return null
  }

  return (
    <div className="mt-8 mb-24">
      <h2 className="text-lg font-bold mb-4">Other Packages You May Like</h2>
      <div className="space-y-4">
        {similarPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="border rounded-lg overflow-hidden shadow-sm cursor-pointer"
            onClick={() => router.push(`/itinerary/${itineraryId}/package/${pkg.id}`)}
          >
            <div className="flex">
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={(pkg.images && pkg.images[0]) || (itinerary.images && itinerary.images[0]) || "/placeholder.svg"}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex-grow">
                <h3 className="font-bold text-sm">{pkg.name}</h3>
                <div className="flex items-center text-gray-500 text-xs mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{pkg.duration}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{pkg.description}</p>
              </div>
              <div className="p-3 flex flex-col items-end justify-center">
                <div className="text-[#FC81A0] font-bold">{pkg.price}</div>
                <div className="text-gray-500 text-xs">/ per head</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
