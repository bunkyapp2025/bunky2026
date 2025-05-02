"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false) // Close mobile menu if open

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#FC81A0]">Bunky</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-[#FC81A0]">
            Features
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-[#FC81A0]">
            About
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-[#FC81A0]">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-[#FC81A0]">
            Contact
          </button>
        </nav>
        <div className="ml-auto md:ml-4 flex gap-2">
          <Button className="hidden md:inline-flex bg-[#FC81A0] hover:bg-[#e06d8a]">Book Now</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <button className="text-sm font-medium hover:text-[#FC81A0]" onClick={() => scrollToSection("features")}>
              Features
            </button>
            <button className="text-sm font-medium hover:text-[#FC81A0]" onClick={() => scrollToSection("about")}>
              About
            </button>
            <button
              className="text-sm font-medium hover:text-[#FC81A0]"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </button>
            <button className="text-sm font-medium hover:text-[#FC81A0]" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
            <div className="flex gap-2 pt-2">
              <Button size="lg" className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]">
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
