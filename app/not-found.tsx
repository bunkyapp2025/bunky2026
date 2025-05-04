import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white p-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-9xl font-bold text-[#FC81A0]">404</h1>
        <h2 className="text-2xl font-bold mt-4 mb-6">Page Not Found</h2>

        <p className="text-gray-600 mb-8">
          The page you are looking for is currently under construction or doesn't exist. Our website is being updated to
          bring you an amazing travel experience.
        </p>

        <Link href="/">
          <Button className="bg-[#FC81A0] hover:bg-[#e06d8a]">Return Home</Button>
        </Link>
      </div>

      <div className="mt-12 text-center">
        <div className="text-2xl font-bold text-[#FC81A0] mb-2">Bunky</div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Bunky. All rights reserved.</p>
      </div>
    </div>
  )
}
