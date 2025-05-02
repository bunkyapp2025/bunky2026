"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, CreditCard, Search, Heart, Globe } from "lucide-react"

export function Features() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: Search,
      title: "Discover",
      description: "Find unique tour packages tailored to your interests",
      content: "Browse through thousands of curated tour packages from trusted providers around the world.",
    },
    {
      icon: Calendar,
      title: "Book",
      description: "Secure your accommodation and activities in one place",
      content:
        "Book your entire trip with just a few clicks - accommodations, activities, and transportation all in one place.",
    },
    {
      icon: Heart,
      title: "Experience",
      description: "Create memories that last a lifetime",
      content: "Enjoy seamless travel experiences with 24/7 support and insider access to unique destinations.",
    },
    {
      icon: MapPin,
      title: "Local Guides",
      description: "Connect with knowledgeable local experts",
      content: "Our network of local guides ensures authentic experiences and insider knowledge of each destination.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Book with confidence using our secure platform",
      content: "Our secure payment system and flexible cancellation policies give you peace of mind when booking.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access tour packages from around the world",
      content: "With partners in over 100 countries, Bunky offers tour packages for every type of traveler.",
    },
  ]

  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">
              What is Bunky?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your All-in-One Travel Platform</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bunky connects travelers with unique tour packages and accommodations around the world. Book your stay and
              adventure in one seamless experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-2 ${
                hoveredCard === index
                  ? "border-[#FC81A0] shadow-lg transform scale-105 bg-[#FC81A0]/5"
                  : "border-[#FC81A0]/10 shadow-md"
              } transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-2">
                <feature.icon
                  className={`h-10 w-10 ${hoveredCard === index ? "text-[#FC81A0] animate-bounce" : "text-[#FC81A0]"}`}
                  style={{ animationDuration: "2s" }}
                />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{feature.content}</p>
                {hoveredCard === index && (
                  <div className="mt-4 flex justify-center">
                    {/*<span className="inline-flex items-center text-sm font-medium text-[#FC81A0]">
                      Learn more
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>*/}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
