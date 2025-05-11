"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function AvailabilityCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Generate days for the current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)

    // Day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay()
    // Total days in the month
    const daysInMonth = lastDay.getDate()

    // Current date for highlighting today
    const today = new Date()

    // Generate array of day objects
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ day: null, isToday: false, isAvailable: false })
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year

      // Simulate availability (random for demo purposes)
      const isAvailable = Math.random() > 0.3

      days.push({ day, isToday, isAvailable })
    }

    return days
  }

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Format month name
  const formatMonth = () => {
    return currentMonth.toLocaleString("default", { month: "long", year: "numeric" })
  }

  // Days of the week
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Generate calendar days
  const calendarDays = generateCalendarDays()

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-3">Availability</h2>

      <div className="border rounded-lg overflow-hidden">
        {/* Calendar header */}
        <div className="flex items-center justify-between bg-gray-50 p-3 border-b">
          <Button variant="ghost" size="sm" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="font-medium">{formatMonth()}</h3>
          <Button variant="ghost" size="sm" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 border-b">
          {weekdays.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 text-center">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`py-2 text-sm ${!day.day ? "text-gray-300" : day.isToday ? "bg-[#FC81A0]/10 font-bold" : ""}`}
            >
              {day.day && (
                <div
                  className={`mx-auto w-8 h-8 flex items-center justify-center rounded-full ${
                    day.isAvailable ? "text-gray-700 hover:bg-gray-100 cursor-pointer" : "text-gray-400 line-through"
                  }`}
                >
                  {day.day}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-between items-center p-3 border-t text-xs text-gray-500">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#FC81A0]/10 rounded-full mr-1"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-white border rounded-full mr-1"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-white border rounded-full mr-1 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-gray-400 rotate-45"></div>
              </div>
            </div>
            <span>Unavailable</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2">Select a date to check pricing and availability.</p>
    </div>
  )
}
