import Image from "next/image"

export function MissionVision() {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Our Mission</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Connecting Travelers With Unforgettable Experiences
            </h2>
            <p className="text-gray-500 md:text-xl">
              At Bunky, our mission is to make travel more accessible, enjoyable, and meaningful by connecting travelers
              with authentic local experiences and comfortable accommodations.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                <span>Empower local communities through sustainable tourism</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                <span>Provide exceptional value to our customers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                <span>Foster cultural exchange and understanding</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] lg:h-auto rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Travelers experiencing local culture"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] lg:h-auto rounded-xl overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=800" alt="Future of travel" fill className="object-cover" />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Our Vision</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reimagining The Future Of Travel
            </h2>
            <p className="text-gray-500 md:text-xl">
              We envision a world where travel is seamless, sustainable, and transformative. Where every journey creates
              positive impact for travelers and communities alike.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                <span>Become the world's most trusted platform for tour packages</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                <span>Pioneer innovative solutions for sustainable tourism</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FC81A0]"></span>
                <span>Create economic opportunities for local communities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
