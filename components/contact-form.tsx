"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Contact Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or need assistance? We're here to help you plan your perfect adventure.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#FC81A0]" />
              <div>
                <h3 className="font-bold">Email Us</h3>
                <p className="text-gray-500">Our friendly team is here to help.</p>
                <p className="mt-1 font-medium">hello@bunky.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-[#FC81A0]" />
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p className="text-gray-500">Mon-Fri from 8am to 5pm.</p>
                <p className="mt-1 font-medium">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-[#FC81A0]" />
              <div>
                <h3 className="font-bold">Visit Us</h3>
                <p className="text-gray-500">Come say hello at our headquarters.</p>
                <p className="mt-1 font-medium">123 Travel Lane, San Francisco, CA 94107</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border-2 border-[#FC81A0]/10 bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  required
                  className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your inquiry..."
                  required
                  className="min-h-32 border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </Button>
              {formStatus === "success" && (
                <p className="text-center text-green-600">Your message has been sent successfully!</p>
              )}
              {formStatus === "error" && (
                <p className="text-center text-red-600">There was an error sending your message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
