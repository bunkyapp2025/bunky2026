import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p className="text-gray-500">
                  Welcome to Bunky. These Terms of Service govern your use of our website and services. By accessing or
                  using Bunky, you agree to be bound by these Terms. If you disagree with any part of the terms, you may
                  not access the service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Use of Our Services</h2>
                <p className="text-gray-500">
                  You must follow any policies made available to you within the Services. You may use our Services only
                  as permitted by law. We may suspend or stop providing our Services to you if you do not comply with
                  our terms or policies or if we are investigating suspected misconduct.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. Account Registration</h2>
                <p className="text-gray-500">
                  To access certain features of the Service, you may be required to register for an account. You must
                  provide accurate and complete information and keep your account information updated. You are
                  responsible for safeguarding the password that you use to access the Service and for any activities or
                  actions under your password.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Booking and Cancellation</h2>
                <p className="text-gray-500">
                  When you book a tour package through Bunky, you agree to the specific terms and conditions of that
                  booking, including cancellation policies. Different hosts may have different policies, and these will
                  be clearly communicated to you before you complete your booking.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. User Content</h2>
                <p className="text-gray-500">
                  Our Service allows you to post, link, store, share and otherwise make available certain information,
                  text, graphics, videos, or other material. You are responsible for the content that you post to the
                  Service, including its legality, reliability, and appropriateness.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Limitation of Liability</h2>
                <p className="text-gray-500">
                  In no event shall Bunky, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                  liable for any indirect, incidental, special, consequential or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your
                  access to or use of or inability to access or use the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Changes to Terms</h2>
                <p className="text-gray-500">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                  effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Contact Us</h2>
                <p className="text-gray-500">
                  If you have any questions about these Terms, please contact us at bunky-ph@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
