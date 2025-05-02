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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PartnerForAds() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    industry: "",
    adBudget: "",
    adType: "",
    campaignGoals: "",
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

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, adType: value }))
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
        industry: "",
        adBudget: "",
        adType: "",
        campaignGoals: "",
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Partner for Ads</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Promote your brand to millions of travel enthusiasts through our platform
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
                      Thank you for your interest in advertising with Bunky. Our team will review your application and
                      contact you within 2 business days to discuss partnership opportunities.
                    </p>
                    <Button className="mt-4 bg-[#FC81A0] hover:bg-[#e06d8a]" onClick={() => setFormStatus("idle")}>
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold">Contact Information</h2>
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
                      <h2 className="text-xl font-bold">Company Information</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleChange}
                            required
                            className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) => handleSelectChange("industry", value)}
                        >
                          <SelectTrigger className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tourism">Tourism & Hospitality</SelectItem>
                            <SelectItem value="travel-gear">Travel Gear & Equipment</SelectItem>
                            <SelectItem value="transportation">Transportation</SelectItem>
                            <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Financial Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-xl font-bold">Advertising Information</h2>
                      <div className="space-y-2">
                        <Label htmlFor="adBudget">Monthly Ad Budget</Label>
                        <Select
                          value={formData.adBudget}
                          onValueChange={(value) => handleSelectChange("adBudget", value)}
                        >
                          <SelectTrigger className="border-[#FC81A0]/20 focus-visible:ring-[#FC81A0]">
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                            <SelectItem value="over-25000">Over $25,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Ad Types</Label>
                        <RadioGroup value={formData.adType} onValueChange={handleRadioChange} className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="display"
                              id="display"
                              className="border-[#FC81A0]/20 text-[#FC81A0]"
                            />
                            <Label htmlFor="display">Display Ads</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="sponsored"
                              id="sponsored"
                              className="border-[#FC81A0]/20 text-[#FC81A0]"
                            />
                            <Label htmlFor="sponsored">Sponsored Listings</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email" className="border-[#FC81A0]/20 text-[#FC81A0]" />
                            <Label htmlFor="email">Email Campaigns</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="content"
                              id="content"
                              className="border-[#FC81A0]/20 text-[#FC81A0]"
                            />
                            <Label htmlFor="content">Content Partnerships</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="campaignGoals">Campaign Goals & Target Audience</Label>
                        <Textarea
                          id="campaignGoals"
                          name="campaignGoals"
                          value={formData.campaignGoals}
                          onChange={handleChange}
                          required
                          placeholder="Describe your advertising goals, target audience, and any specific requirements for your campaign."
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
