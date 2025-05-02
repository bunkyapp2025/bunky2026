"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function ApplyAsHost() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    tourType: "",
    locations: "",
    experience: "",
    description: "",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // In a real application, you would send the form data to bunky-ph@gmail.com
      console.log("Form submitted:", formData)
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        website: "",
        tourType: "",
        locations: "",
        experience: "",
        description: "",
        termsAccepted: false,
      })
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Apply as a Host</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community of hosts and share your unique tour packages with travelers around the world
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border-2 border-[#FC81A0]/10 bg-white p-6 shadow-sm">
                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="rounded-full bg-green-100 p-3">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Application Submitted!</h2>
                    <p className="text-gray-500">
                      Thank you for your interest in becoming a Bunky host. We've received your application and will
                      contact you within 3-5 business days.
                    </p>
                    <Button className="mt-4 bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => setFormStatus("idle")}>
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold">Personal Information</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-xl font-bold">Business Information</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name (if applicable)</Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website (if applicable)</Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleChange}
                            className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-xl font-bold">Tour Information</h2>
                      <div className="space-y-2">
                        <Label htmlFor="tourType">Type of Tours</Label>
                        <Select
                          value={formData.tourType}
                          onValueChange={(value) => handleSelectChange("tourType", value)}
                        >
                          <SelectTrigger className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]">
                            <SelectValue placeholder="Select tour type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="adventure">Adventure Tours</SelectItem>
                            <SelectItem value="cultural">Cultural Tours</SelectItem>
                            <SelectItem value="food">Food & Culinary Tours</SelectItem>
                            <SelectItem value="nature">Nature & Wildlife Tours</SelectItem>
                            <SelectItem value="urban">Urban Tours</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="locations">Locations Offered</Label>
                        <Input
                          id="locations"
                          name="locations"
                          value={formData.locations}
                          onChange={handleChange}
                          required
                          placeholder="e.g., Bali, Indonesia; Tokyo, Japan"
                          className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) => handleSelectChange("experience", value)}
                        >
                          <SelectTrigger className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]">
                            <SelectValue placeholder="Select years of experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="more-than-10">More than 10 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Tell us about your tour packages</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          required
                          placeholder="Describe the unique experiences you offer, what makes your tours special, and why travelers should choose your packages."
                          className="min-h-32 border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={handleCheckboxChange}
                        className="mt-1 data-[state=checked]:bg-[#FC81A0] data-[state=checked]:border-[#FC81A0]"
                      />
                      <Label htmlFor="termsAccepted" className="text-sm">
                        I agree to the{" "}
                        <a href="/terms-of-service" className="text-[#FC81A0] hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy-policy" className="text-[#FC81A0] hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]"
                      disabled={formStatus === "submitting" || !formData.termsAccepted}
                    >
                      {formStatus === "submitting" ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
