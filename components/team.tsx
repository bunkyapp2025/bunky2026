import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Leaf, Lightbulb, Users, Award, Compass } from "lucide-react"
import contentData from "@/data/content.json"

export function Team() {
  const team = contentData.team || []
  const values = [
    {
      title: "Authenticity",
      description: "We believe in real connections and genuine experiences.",
      icon: Heart,
    },
    {
      title: "Sustainability",
      description: "We're committed to responsible tourism that benefits local communities.",
      icon: Leaf,
    },
    {
      title: "Innovation",
      description: "We constantly seek new ways to improve the travel experience.",
      icon: Lightbulb,
    },
    {
      title: "Inclusivity",
      description: "We create experiences that are accessible and welcoming to all.",
      icon: Users,
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
      icon: Award,
    },
    {
      title: "Passion",
      description: "We're driven by our love for travel and cultural exchange.",
      icon: Compass,
    },
  ]

  return (
    <section id="team" className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet The People Behind Bunky</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our diverse team of travel enthusiasts is dedicated to creating exceptional experiences for our customers.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Card key={i} className="overflow-hidden border-2 border-[#FC81A0]/10">
              <div className="relative h-60">
                <Image
                  src={member.image || "/placeholder.svg?height=240&width=240"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">{member.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative max-w-3xl rounded-xl bg-[#FC81A0]/10 p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Organizational Values</h3>
              <p className="mt-2 text-gray-500">Our team is guided by these core principles in everything we do</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {values.map((value, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-2">
                    {value.icon && <value.icon className="h-6 w-6 text-[#FC81A0]" />}
                  </div>
                  <h4 className="font-bold text-[#FC81A0]">{value.title}</h4>
                  <p className="mt-1 text-sm text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
