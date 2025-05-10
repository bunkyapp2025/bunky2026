"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QRCodeCard } from "@/components/qr-code-card"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubscriptionStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setSubscriptionStatus("success")
      setEmail("")
      // After 3 seconds, reset the status
      setTimeout(() => setSubscriptionStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-gray-100">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#FC81A0]">Bunky</h3>
            <p className="text-sm text-gray-500">
              Discover amazing tour packages and book your next adventure with Bunky.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-[#FC81A0]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#FC81A0]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#FC81A0]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-[#FC81A0]">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="text-sm text-gray-500 hover:text-[#FC81A0]">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-[#FC81A0]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-[#FC81A0]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="mx-auto max-w-md">
            <h3 className="text-center text-sm font-bold uppercase tracking-wider mb-4">Subscribe to Our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                disabled={subscriptionStatus === "submitting" || subscriptionStatus === "success"}
              />
              <Button
                type="submit"
                className="bg-[#FC81A0] hover:bg-[#e06d8a]"
                disabled={subscriptionStatus === "submitting" || subscriptionStatus === "success"}
              >
                {subscriptionStatus === "submitting" ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            {subscriptionStatus === "success" && (
              <p className="text-center text-green-600 mt-2 text-sm">Thank you for subscribing to our newsletter!</p>
            )}
            {subscriptionStatus === "error" && (
              <p className="text-center text-red-600 mt-2 text-sm">There was an error subscribing. Please try again.</p>
            )}
            <p className="text-center text-xs text-gray-500 mt-2">
              Stay updated with our latest tour packages, travel tips, and exclusive offers.
            </p>
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">
            © {new Date().getFullYear()} Bunky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
