import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-pink-50 to-white py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
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
                  At Bunky, we respect your privacy and are committed to protecting your personal data. This Privacy
                  Policy will inform you about how we look after your personal data when you visit our website and tell
                  you about your privacy rights and how the law protects you.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                <p className="text-gray-500">
                  We collect several different types of information for various purposes to provide and improve our
                  Service to you:
                </p>
                <ul className="list-disc pl-6 text-gray-500 space-y-2">
                  <li>
                    Personal Data: While using our Service, we may ask you to provide us with certain personally
                    identifiable information that can be used to contact or identify you.
                  </li>
                  <li>Usage Data: We may also collect information on how the Service is accessed and used.</li>
                  <li>
                    Tracking & Cookies Data: We use cookies and similar tracking technologies to track activity on our
                    Service and hold certain information.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
                <p className="text-gray-500">We use the collected data for various purposes:</p>
                <ul className="list-disc pl-6 text-gray-500 space-y-2">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Data Security</h2>
                <p className="text-gray-500">
                  The security of your data is important to us, but remember that no method of transmission over the
                  Internet, or method of electronic storage is 100% secure. While we strive to use commercially
                  acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Your Data Protection Rights</h2>
                <p className="text-gray-500">
                  You have certain data protection rights. If you wish to be informed what Personal Data we hold about
                  you and if you want it to be removed from our systems, please contact us.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Changes to This Privacy Policy</h2>
                <p className="text-gray-500">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any
                  changes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Contact Us</h2>
                <p className="text-gray-500">
                  If you have any questions about this Privacy Policy, please contact us at bunky-ph@gmail.com.
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
