import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import contentData from "@/data/content.json"

export function Testimonials() {
  const testimonials = contentData.testimonials || []

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what travelers have to say about their Bunky experience.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-2 border-[#FC81A0]/10">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FC81A0] text-[#FC81A0]" />
                    ))}
                </div>
                <p className="text-gray-500">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 p-6 pt-0">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover h-10 w-10"
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
