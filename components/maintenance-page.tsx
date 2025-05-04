import { Button } from "@/components/ui/button"
import { Construction, Clock, Mail } from "lucide-react"

export function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative h-40 w-40">
            <div className="absolute inset-0 rounded-full bg-[#FC81A0]/10 animate-pulse"></div>
            <Construction className="h-20 w-20 text-[#FC81A0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          We're <span className="text-[#FC81A0]">Coming Soon</span>
        </h1>

        <p className="text-gray-600 mb-8">
          Our website is currently under construction. We're working hard to bring you an amazing travel experience.
          Please check back soon!
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-[#FC81A0] mr-2" />
            <h2 className="text-xl font-semibold">Launch Countdown</h2>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-[#FC81A0]/5 rounded-lg p-3">
              <div className="text-2xl font-bold text-[#FC81A0]">15</div>
              <div className="text-xs text-gray-500">Days</div>
            </div>
            <div className="bg-[#FC81A0]/5 rounded-lg p-3">
              <div className="text-2xl font-bold text-[#FC81A0]">08</div>
              <div className="text-xs text-gray-500">Hours</div>
            </div>
            <div className="bg-[#FC81A0]/5 rounded-lg p-3">
              <div className="text-2xl font-bold text-[#FC81A0]">23</div>
              <div className="text-xs text-gray-500">Minutes</div>
            </div>
            <div className="bg-[#FC81A0]/5 rounded-lg p-3">
              <div className="text-2xl font-bold text-[#FC81A0]">42</div>
              <div className="text-xs text-gray-500">Seconds</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-gray-600 mb-4">Want to be notified when we launch?</p>

          <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-[#FC81A0]/20 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FC81A0]"
            />
            <Button className="bg-[#FC81A0] hover:bg-[#e06d8a]">Notify Me</Button>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <Mail className="h-4 w-4 mr-2" />
            <span>Contact us: bunky-ph@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="text-2xl font-bold text-[#FC81A0] mb-2">Bunky</div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Bunky. All rights reserved.</p>
      </div>
    </div>
  )
}
