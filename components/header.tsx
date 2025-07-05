"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false) // Close mobile menu if open

    if (pathname !== "/") {
      // If not on home page, navigate to home first then scroll
      router.push(`/#${sectionId}`)
    } else {
      // If on home page, scroll directly
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname])

  const navItems = [
    { label: "Home", action: () => router.push("/") },
    { label: "Features", action: () => scrollToSection("features") },
    { label: "Partners", action: () => scrollToSection("partners") },
    { label: "FAQs", action: () => scrollToSection("faq") },
    { label: "Our Team", action: () => scrollToSection("team") },
    { label: "Contact Us", action: () => scrollToSection("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/bunky-logo.png" alt="Bunky" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="text-sm font-medium hover:text-[#FC81A0] transition-colors"
              onClick={item.action}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/book-now">
            <Button className="bg-[#FC81A0] hover:bg-[#e06d8a]">Book Now</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="text-left text-lg font-medium hover:text-[#FC81A0] transition-colors py-2"
                  onClick={item.action}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t">
                <Link href="/book-now">
                  <Button className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
