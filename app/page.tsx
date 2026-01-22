"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"
import { AppScreenshots } from "@/components/app-screenshots"
import { MissionVision } from "@/components/mission-vision"
// import { Partners } from "@/components/partners"
// import { Testimonials } from "@/components/testimonials"
// import { Team } from "@/components/team"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { HostPartnerCTA } from "@/components/host-partner-cta"
import { AdSection } from "@/components/ad-section"
import { AppDownloadBanner } from "@/components/app-download-banner"
import { Star, MapPin, TrendingUp } from "lucide-react"
import contentData from "@/data/content.json"
import { HeroCTA } from "@/components/hero-cta"

export default function Home() {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const heroImage = contentData.landingPageImages?.hero || "/placeholder.svg?height=550&width=500"

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AppDownloadBanner />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white py-20 md:py-32">
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FC81A0]/10 animate-pulse"></div>
          <div
            className="absolute top-1/2 left-10 h-16 w-16 rounded-full bg-[#FC81A0]/20 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-20 right-1/4 h-24 w-24 rounded-full bg-[#FC81A0]/15 animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#FC81A0]/10"></div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unforgettable <span className="text-[#FC81A0]">Adventures</span> Await You
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Experience the world's most breathtaking destinations with our curated rentals & tour packages. Book
                    your stay and adventure in one place.
                  </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-[#FC81A0] hover:bg-[#e06d8a] shadow-lg transition-all hover:translate-y-[-2px]"
                    onClick={() => (window.location.href = "/book-now")}
                  >
                    Book Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#FC81A0] text-[#FC81A0] hover:bg-[#FC81A0]/10"
                    onClick={() => scrollToSection("host-partner-cta")}
                  >
                    Partner with Us
                  </Button>
                </div>

              </div>

              <div className="flex items-center justify-center mt-8 md:mt-0">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative h-[350px] w-[300px] sm:h-[450px] sm:w-[400px] lg:h-[550px] lg:w-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
                    <Image
                      src={heroImage || "/placeholder.svg"}
                      alt="Bunky App Hero"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -left-6 h-20 w-36 rounded-lg bg-white p-2 shadow-lg rotate-[-6deg] animate-float">
                    <div className="flex items-center h-full">
                      <div className="h-16 w-16 rounded-md overflow-hidden mr-2 relative">
                        <Image
                          src={contentData.landingPageImages?.palawanCard || "/placeholder.svg?height=70&width=70"}
                          alt="Palawan destination"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xs">
                        <p className="font-bold">Palawan</p>
                        <p className="text-[#FC81A0]">₱1,499</p>
                        <div className="flex mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-2 w-2 text-[#FC81A0]" fill="#FC81A0" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -bottom-4 -right-4 h-20 w-36 rounded-lg bg-white p-2 shadow-lg rotate-[4deg] animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="flex items-center h-full">
                      <div className="h-16 w-16 rounded-md overflow-hidden mr-2 relative">
                        <Image
                          src={contentData.landingPageImages?.boracayCard || "/placeholder.svg?height=70&width=70"}
                          alt="Boracay destination"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xs">
                        <p className="font-bold">Boracay</p>
                        <p className="text-[#FC81A0]">₱1,999</p>
                        <div className="flex mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-2 w-2 text-[#FC81A0]" fill="#FC81A0" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Features Section */}
        <Features />

        {/* App Screenshots */}
        <AppScreenshots />

        {/* Mission and Vision */}
        <MissionVision />

        {/* Partners */}
      

        {/* Testimonials */}
        {/* <Testimonials /> */}

        {/* Host & Partner CTA */}
        <HostPartnerCTA />

        {/* FAQ */}
        <FAQ />

        {/* Team */}
        {/* <Team /> */}

        {/* Contact Form */}
        <ContactForm />

        {/* Ad Section */}
        <AdSection />
      </main>
      <Footer />
      <HeroCTA />
    </div>
  )
}
