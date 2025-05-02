import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"
import { AppScreenshots } from "@/components/app-screenshots"
import { MissionVision } from "@/components/mission-vision"
import { Partners } from "@/components/partners"
import { Testimonials } from "@/components/testimonials"
import { Team } from "@/components/team"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { HostPartnerCTA } from "@/components/host-partner-cta"
import { AdSection } from "@/components/ad-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-pink-50 to-white py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Amazing Places with Bunky
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Experience the world's most breathtaking destinations with our curated rentals & tour packages. Book your stay
                    and adventure in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#FC81A0] hover:bg-[#e06d8a]">
                    Book Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#FC81A0] text-[#FC81A0]">
                    Explore Packages
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[300px] sm:h-[450px] sm:w-[400px] lg:h-[550px] lg:w-[500px]">
                  <Image
                    src="/placeholder.svg?height=550&width=500"
                    alt="Bunky App Hero"
                    fill
                    className="object-contain"
                    priority
                  />
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
        <Partners />

        {/* Testimonials */}
        <Testimonials />

        {/* Team */}
        <Team />

        {/* FAQ */}
        <FAQ />

        {/* Host & Partner CTA */}
        <HostPartnerCTA />

        {/* Contact Form */}
        <ContactForm />

        {/* Ad Section */}
        <AdSection />
      </main>
      <Footer />
    </div>
  )
}
