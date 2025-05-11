"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Star, MapPin } from "lucide-react"
import contentData from "@/data/content.json"

export function SimilarProperties({ currentPropertyId }) {
  const router = useRouter()

  // Get all properties from the content data
  const allProperties = [
    ...contentData.featuredRentals,
    ...contentData.topRatedRentals,
    ...contentData.discountedRentals,
  ]

  // Filter out the current property and get 4 random properties
  const similarProperties = allProperties
    .filter((property) => property.id.toString() !== currentPropertyId.toString())
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  return (
    <div className="mt-8 mb-24">
      <h2 className="text-lg font-bold mb-4">Similar Properties You May Like</h2>
      <div className="grid grid-cols-2 gap-4">
        {similarProperties.map((property) => (
          <div
            key={property.id}
            className="relative rounded-lg overflow-hidden shadow-md bg-white cursor-pointer"
            onClick={() => router.push(`/property/${property.id}`)}
          >
            <div className="relative h-32 w-full">
              <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
            </div>
            <div className="p-2">
              <h3 className="font-bold text-sm truncate">{property.name}</h3>
              <div className="flex items-center text-gray-500 text-xs mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="truncate">{property.location}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="font-bold text-sm">{property.price}</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-[#FC81A0] fill-[#FC81A0]" />
                  <span className="text-xs ml-1">{property.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
