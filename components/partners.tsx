import Image from "next/image"

export function Partners() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">Our Partners</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted By Leading Companies</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We collaborate with the best in the travel industry to bring you exceptional experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt={`Partner logo ${i}`}
                  width={160}
                  height={80}
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
