"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#FC81A0]">Bunky</span>
        </Link>
        <nav className="ml-auto hidden gap-6 md:flex">
          <Link href="#features" className="text-sm font-medium hover:text-[#FC81A0]">
            Features
          </Link>
          {/* <Link href="#tours" className="text-sm font-medium hover:text-[#FC81A0]">
            Tours
          </Link> */}
          <Link href="#about" className="text-sm font-medium hover:text-[#FC81A0]">
            About
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-[#FC81A0]">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-[#FC81A0]">
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4 flex gap-2">
          <Button variant="outline" className="hidden md:inline-flex border-[#FC81A0] text-[#FC81A0]">
            Sign In
          </Button>
          <Button className="hidden md:inline-flex bg-[#FC81A0] hover:bg-[#e06d8a]">Sign Up</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-[#FC81A0]"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#tours"
              className="text-sm font-medium hover:text-[#FC81A0]"
              onClick={() => setIsMenuOpen(false)}
            >
              Tours
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[#FC81A0]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-[#FC81A0]"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-[#FC81A0]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="w-full border-[#FC81A0] text-[#FC81A0]">
                Sign In
              </Button>
              <Button className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
