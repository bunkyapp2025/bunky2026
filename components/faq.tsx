import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#FC81A0]/10 px-3 py-1 text-sm text-[#FC81A0]">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about Bunky's tour packages and services.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Tabs defaultValue="guests" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-[#FC81A0]/10">
                <TabsTrigger
                  value="guests"
                  className="data-[state=active]:bg-[#FC81A0] data-[state=active]:text-white transition-colors"
                >
                  For Guests
                </TabsTrigger>
                <TabsTrigger
                  value="hosts"
                  className="data-[state=active]:bg-[#FC81A0] data-[state=active]:text-white transition-colors"
                >
                  For Hosts
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="guests" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                {guestFAQs.map((faq, i) => (
                  <AccordionItem key={i} value={`guest-item-${i}`}>
                    <AccordionTrigger className="text-left hover:text-[#FC81A0] transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="hosts" className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                {hostFAQs.map((faq, i) => (
                  <AccordionItem key={i} value={`host-item-${i}`}>
                    <AccordionTrigger className="text-left hover:text-[#FC81A0] transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

const guestFAQs = [
  {
    question: "How do I book a tour package on Bunky?",
    answer:
      "Booking a tour package on Bunky is easy! Simply search for your desired destination, browse available packages, select the one that interests you, choose your dates, and complete the booking process. You'll receive an instant confirmation and all the details in your email.",
  },
  {
    question: "What is included in a typical Bunky tour package?",
    answer:
      "Bunky tour packages typically include accommodation, guided activities, and sometimes meals and transportation. The exact inclusions vary by package and are clearly listed on each tour's details page before you book.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, most bookings can be canceled or modified, subject to the cancellation policy of the specific tour package. Cancellation policies are clearly displayed before you complete your booking. For modifications, please contact our customer support team.",
  },
  {
    question: "How do I contact my tour guide or host?",
    answer:
      "Once your booking is confirmed, you'll have access to a messaging system in the Bunky app where you can communicate directly with your tour guide or host. Contact information is also included in your booking confirmation.",
  },
  {
    question: "Is Bunky available worldwide?",
    answer:
      "Bunky currently offers tour packages in over 100 countries and is continuously expanding. If you don't see your desired destination, check back soon or contact us to request it.",
  },
  {
    question: "How does Bunky ensure the quality of tour packages?",
    answer:
      "All tour providers on Bunky go through a rigorous verification process. We also collect and monitor guest reviews and regularly audit our partners to ensure they maintain our high standards of quality and service.",
  },
]

const hostFAQs = [
  {
    question: "How do I become a host on Bunky?",
    answer:
      "To become a host on Bunky, click on the 'Become a Host' button, complete the application form, and submit the required documentation. Our team will review your application and get back to you within 5-7 business days.",
  },
  {
    question: "What types of tour packages can I offer on Bunky?",
    answer:
      "You can offer a wide range of tour packages on Bunky, including cultural experiences, adventure activities, food tours, wellness retreats, and more. All packages should provide unique, authentic experiences that align with Bunky's quality standards.",
  },
  {
    question: "How much does it cost to list my tour packages on Bunky?",
    answer:
      "Listing your tour packages on Bunky is free. We operate on a commission-based model, taking a percentage of each booking. The exact commission rate depends on your package type and location.",
  },
  {
    question: "How do I receive payments for my bookings?",
    answer:
      "Payments are processed through our secure payment system. Once a guest completes their stay, the payment (minus Bunky's commission) is released to your designated bank account within 24-48 hours.",
  },
  {
    question: "Can I set my own availability and pricing?",
    answer:
      "Yes, you have full control over your availability calendar and pricing. You can also set seasonal rates, special offers, and minimum/maximum stay requirements through your host dashboard.",
  },
  {
    question: "What support does Bunky provide to hosts?",
    answer:
      "Bunky provides hosts with a dedicated support team, marketing tools, professional photography services in select locations, pricing recommendations, and access to our host community forum where you can share best practices with other hosts.",
  },
]
