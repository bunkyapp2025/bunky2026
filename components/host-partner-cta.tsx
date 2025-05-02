import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Megaphone } from "lucide-react"

export function HostPartnerCTA() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Join Bunky</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Partner With Us</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Become part of the Bunky community and grow your business with us.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <Card className="border-2 border-[#FC81A0]/10 shadow-md">
            <CardHeader className="pb-2">
              <Home className="h-10 w-10 text-[#FC81A0]" />
              <CardTitle className="text-xl">Become a Host</CardTitle>
              <CardDescription>Offer your tour packages on Bunky</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500">
                Join thousands of hosts who are sharing their expertise and passion with travelers from around the
                world. Bunky provides the platform, tools, and support you need to succeed.
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Reach millions of potential customers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Free listing and easy-to-use host tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Dedicated support for hosts</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/apply-as-host" className="w-full">
                <Button className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]">Apply as Host</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="border-2 border-[#FC81A0]/10 shadow-md">
            <CardHeader className="pb-2">
              <Megaphone className="h-10 w-10 text-[#FC81A0]" />
              <CardTitle className="text-xl">Advertise with Us</CardTitle>
              <CardDescription>Promote your brand to our global audience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-500">
                Reach millions of travel enthusiasts through our platform. Whether you're a tourism board, travel gear
                company, or complementary service, we offer targeted advertising solutions.
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Targeted campaigns for travel audiences</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Multiple ad formats and placements</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                  <span>Performance tracking and analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/partner-for-ads" className="w-full">
                <Button className="w-full bg-[#FC81A0] hover:bg-[#e06d8a]">Partner for Ads</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
