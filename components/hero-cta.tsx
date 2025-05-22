// Let's create a new component for an enhanced CTA section

// Create a new component for a floating CTA that appears as users scroll
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function HeroCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA when user scrolls past 60% of the viewport height
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isDismissed || !isVisible) return null

  return (
    <div className="fixed bottom-20 right-8 z-40 max-w-xs animate-slide-in-bottom">
      <div className="relative bg-white rounded-lg shadow-lg border-2 border-[#FC81A0]/20 p-4">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mb-3">
          <h4 className="font-bold text-[#FC81A0]">Ready for an adventure?</h4>
          <p className="text-sm text-gray-500">Book your dream vacation today!</p>
        </div>
        <Button className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => (window.location.href = "/book-now")}>
          Book Now
        </Button>
      </div>
    </div>
  )
}
