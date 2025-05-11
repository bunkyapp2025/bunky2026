"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

export function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (rating === 0) {
      alert("Please select a rating")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setRating(0)
      setComment("")

      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
        <h3 className="font-bold text-green-600">Thank you for your review!</h3>
        <p className="text-sm text-green-600">Your feedback helps other travelers make better choices.</p>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-3">Write a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Your Rating</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="p-1"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                <Star
                  className={`h-6 w-6 ${
                    (hoveredRating || rating) >= star ? "text-[#FC81A0] fill-[#FC81A0]" : "text-gray-300"
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 text-sm text-gray-500 self-center">
              {rating > 0 ? `${rating} star${rating > 1 ? "s" : ""}` : "Select a rating"}
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium mb-2">
            Your Review
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with this property..."
            className="min-h-32 border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
            required
          />
        </div>

        <Button type="submit" className="bg-[#FC81A0] hover:bg-[#e06d8a]" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  )
}
