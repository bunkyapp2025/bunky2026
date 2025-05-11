"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function PropertyMap({ location }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-3">Location</h2>
      <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
        {/* This is a placeholder for a real map. In a production app, you would integrate with Google Maps or similar */}
        <div className="absolute inset-0 bg-gray-200">
          <Image
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt={`Map of ${location}`}
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-2 rounded-full shadow-lg">
              <MapPin className="h-6 w-6 text-[#FC81A0]" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-sm shadow">{location}</div>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">Exact location provided after booking for security reasons.</p>
    </div>
  )
}
