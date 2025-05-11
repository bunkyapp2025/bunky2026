import Image from "next/image"
import Link from "next/link"
import contentData from "@/data/content.json"

export function Partners() {
  const partners = contentData.partners || []

  return (
    <section id="partners" className="bg-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Our Partners</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted By Industry Leaders</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We collaborate with the best in the travel industry to bring you exceptional experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, i) => (
            <Link
              key={i}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-110"
            >
              <Image
                src={partner.logo || "/placeholder.svg?height=60&width=120"}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
