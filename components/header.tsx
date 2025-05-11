"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false) // Close mobile menu if open

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    // If we're already on the home page, prevent default link behavior
    // and manually scroll to top
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    // Otherwise, let the Link component handle navigation
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center" onClick={handleLogoClick}>
          <Image
            src="/images/bunky-logo.png"
            alt="Bunky Logo"
            width={120}
            height={40}
            priority
          />

        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-[#FC81A0]">
            About
          </button>
          <button onClick={() => scrollToSection("partners")} className="text-sm font-medium hover:text-[#FC81A0]">
            Partners
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-[#FC81A0]">
            FAQs
          </button>
          <button onClick={() => scrollToSection("team")} className="text-sm font-medium hover:text-[#FC81A0]">
            Our Team
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-[#FC81A0]">
            Contact Us
          </button>
        </nav>
        <div className="ml-auto md:ml-4 flex gap-2">
          <Link href="/book-now">
            <Button className="hidden md:inline-flex bg-[#FC81A0] hover:bg-[#e06d8a]">Book Now</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <button className="text-sm font-medium hover:text-[#FC81A0]" onClick={() => scrollToSection("features")}>
              About
            </button>
            <button className="text-sm font-medium hover:text-[#FC81A0]" onClick={() => scrollToSection("partners")}>
              Partners
            </button>
            <button className="text-sm font-medium hover:text-[#FC81A0]" onClick={() => scrollToSection("faq")}>
              FAQs
            </button>
            <button className="text-sm font-medium hover:text-[#FC81A0]" onClick={() => scrollToSection("team")}>
              Our Team
            </button>
            <button className="text-sm font-medium hover:text-[#FC81A0]" onClick={() => scrollToSection("contact")}>
              Contact Us
            </button>
            <div className="flex gap-2 pt-2">
              <Link href="/book-now" className="w-full">
                <Button size="lg" className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]">
                  Book Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
