import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, CreditCard, Search, Heart, Globe } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">
              What is Bunky?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your All-in-One Travel Platform</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Bunky connects travelers with unique tour packages and accommodations around the world. Book your stay and
              adventure in one seamless experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card className="border-2 border-[#FC81A0]/10 shadow-md">
            <CardHeader className="pb-2">
              <Search className="h-10 w-10 text-[#FC81A0]" />
              <CardTitle className="text-xl">Discover</CardTitle>
              <CardDescription>Find unique tour packages tailored to your interests</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Browse through thousands of curated tour packages from trusted providers around the world.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#FC81A0]/10 shadow-md">
            <CardHeader className="pb-2">
              <Calendar className="h-10 w-10 text-[#FC81A0]" />
              <CardTitle className="text-xl">Book</CardTitle>
              <CardDescription>Secure your accommodation and activities in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Book your entire trip with just a few clicks - accommodations, activities, and transportation all in one
                place.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#FC81A0]/10 shadow-md">
            <CardHeader className="pb-2">
              <Heart className="h-10 w-10 text-[#FC81A0]" />
              <CardTitle className="text-xl">Experience</CardTitle>
              <CardDescription>Create memories that last a lifetime</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Enjoy seamless travel experiences with 24/7 support and insider access to unique destinations.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#FC81A0]/10 shadow-md">
            <CardHeader className="pb-2">
              <MapPin className="h-10 w-10 text-[#FC81A0]" />
              <CardTitle className="text-xl">Local Guides</CardTitle>
              <CardDescription>Connect with knowledgeable local experts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Our network of local guides ensures authentic experiences and insider knowledge of each destination.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#FC81A0]/10 shadow-md">
            <CardHeader className="pb-2">
              <CreditCard className="h-10 w-10 text-[#FC81A0]" />
              <CardTitle className="text-xl">Secure Payments</CardTitle>
              <CardDescription>Book with confidence using our secure platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Our secure payment system and flexible cancellation policies give you peace of mind when booking.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#FC81A0]/10 shadow-md">
            <CardHeader className="pb-2">
              <Globe className="h-10 w-10 text-[#FC81A0]" />
              <CardTitle className="text-xl">Global Reach</CardTitle>
              <CardDescription>Access tour packages from around the world</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                With partners in over 100 countries, Bunky offers tour packages for every type of traveler.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
