import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, BookOpen, MessageSquare, FileQuestion, Phone, Mail } from "lucide-react"

export default function HelpCenter() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Help Center</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to your questions and get the support you need
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search for help..."
                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-8 pr-4 text-sm outline-none focus:border-[#FC81A0] focus:ring-1 focus:ring-[#FC81A0]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-[#FC81A0]/10">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-[#FC81A0]" />
                  <CardTitle>Guides & Resources</CardTitle>
                  <CardDescription>Learn how to use Bunky and make the most of your experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#" className="text-[#FC81A0] hover:underline">
                        Getting Started with Bunky
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#FC81A0] hover:underline">
                        Booking Your First Tour
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#FC81A0] hover:underline">
                        Payment Methods & Security
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#FC81A0] hover:underline">
                        Managing Your Bookings
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#FC81A0]/10">
                <CardHeader>
                  <FileQuestion className="h-8 w-8 text-[#FC81A0]" />
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Quick answers to common questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#" className="text-[#FC81A0] hover:underline">
                        Booking & Cancellation Policies
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#FC81A0] hover:underline">
                        Account Management
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#FC81A0] hover:underline">
                        Tour Package Details
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-[#FC81A0] hover:underline">
                        Host Information
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#FC81A0]/10">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-[#FC81A0]" />
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Get in touch with our customer support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#FC81A0]" />
                    <span>bunky-ph@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#FC81A0]" />
                    <span>+1 (555) 000-0000</span>
                  </div>
                  <Button className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]">Submit a Request</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
