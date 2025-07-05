"use client"

import { useState } from "react"
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
    setIsOpen(false)

    // If not on home page, navigate to home first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`)
      return
    }

    // If on home page, scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { name: "Home", href: "/", sectionId: "hero" },
    { name: "About", href: "/#about", sectionId: "about" },
    { name: "Features", href: "/#features", sectionId: "features" },
    { name: "Screenshots", href: "/#screenshots", sectionId: "screenshots" },
    { name: "Testimonials", href: "/#testimonials", sectionId: "testimonials" },
    { name: "Contact", href: "/#contact", sectionId: "contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/bunky-logo.png" alt="Bunky" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-[#FC81A0]">Bunky</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-sm font-medium text-gray-600 hover:text-[#FC81A0] transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/book-now">
            <Button className="hidden sm:inline-flex bg-[#FC81A0] hover:bg-[#e06d8a]">Book Now</Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-left text-lg font-medium text-gray-600 hover:text-[#FC81A0] transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <Link href="/book-now" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mt-4 bg-[#FC81A0] hover:bg-[#e06d8a]">Book Now</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
