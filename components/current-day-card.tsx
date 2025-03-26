"use client"

import { useEffect, useState } from "react"
import { format } from "date-fns"
import { Clock, Sunrise, Sun, Sunset, Moon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ramadanData } from "@/lib/ramadan-data"

export function CurrentDayCard() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [currentTime, setCurrentTime] = useState<string>("")

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentDate(now)
      setCurrentTime(format(now, "HH:mm"))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  // Find current Ramadan day
  const day = format(currentDate, "dd/MM")
  const currentDay = ramadanData.find((d) => d.date === day)

  // If not Ramadan, show the first day
  const dayToShow = currentDay || ramadanData[0]

  // Determine next prayer
  const getNextPrayer = () => {
    if (!currentDay) return null

    const timeNow = currentTime.replace(":", "")
    const prayers = [
      { name: "Fajr", time: currentDay.fajr.replace(":", "") },
      { name: "Sunrise", time: currentDay.sunrise.replace(":", "") },
      { name: "Dhuhr", time: currentDay.dhuhr.replace(":", "") },
      { name: "Asr", time: currentDay.asr.replace(":", "") },
      { name: "Maghrib", time: currentDay.maghrib.replace(":", "") },
      { name: "Isha", time: currentDay.isha.replace(":", "") },
    ]

    // Check if any prayer time is after current time
    for (const prayer of prayers) {
      if (Number.parseInt(timeNow) < Number.parseInt(prayer.time)) {
        return prayer.name
      }
    }

    // If we're here, all prayers for today have passed
    // So the next prayer is Fajr tomorrow
    return "Fajr (Tomorrow)"
  }

  const nextPrayer = getNextPrayer()

  return (
    <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-slate-900 border-amber-200 dark:border-amber-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-2xl text-amber-800 dark:text-amber-400">
          Today's Prayer Times - {dayToShow.ramadanDay} Ramadan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-slate-900/50 rounded-lg">
            <p className="text-slate-600 dark:text-slate-300 mb-2">Current Date</p>
            <p className="text-2xl font-bold text-amber-800 dark:text-amber-400">
              {format(currentDate, "dd MMMM yyyy")}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Clock className="h-5 w-5 text-amber-600 dark:text-amber-500" />
              <p className="text-xl font-semibold">{currentTime}</p>
            </div>
            {nextPrayer && (
              <p className="mt-4 text-center text-slate-700 dark:text-slate-200">
                Next prayer: <span className="font-bold text-amber-700 dark:text-amber-400">{nextPrayer}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Sunrise className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                <p className="font-medium text-slate-700 dark:text-slate-200">Fajr</p>
              </div>
              <p className="text-xl font-bold text-amber-800 dark:text-amber-400">{dayToShow.fajr}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Iqamah: {dayToShow.fajrIqamah}</p>
            </div>

            <div className="flex flex-col items-center p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Sun className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                <p className="font-medium text-slate-700 dark:text-slate-200">Dhuhr</p>
              </div>
              <p className="text-xl font-bold text-amber-800 dark:text-amber-400">{dayToShow.dhuhr}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Iqamah: {dayToShow.dhuhrIqamah}</p>
            </div>

            <div className="flex flex-col items-center p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Sun className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                <p className="font-medium text-slate-700 dark:text-slate-200">Asr</p>
              </div>
              <p className="text-xl font-bold text-amber-800 dark:text-amber-400">{dayToShow.asr}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Iqamah: {dayToShow.asrIqamah}</p>
            </div>

            <div className="flex flex-col items-center p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Sunset className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                <p className="font-medium text-slate-700 dark:text-slate-200">Maghrib</p>
              </div>
              <p className="text-xl font-bold text-amber-800 dark:text-amber-400">{dayToShow.maghrib}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Iqamah: {dayToShow.maghribIqamah}</p>
            </div>

            <div className="flex flex-col items-center p-3 bg-white/50 dark:bg-slate-900/50 rounded-lg col-span-2">
              <div className="flex items-center gap-2 mb-1">
                <Moon className="h-5 w-5 text-amber-600 dark:text-amber-500" />
                <p className="font-medium text-slate-700 dark:text-slate-200">Isha</p>
              </div>
              <p className="text-xl font-bold text-amber-800 dark:text-amber-400">{dayToShow.isha}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Iqamah: {dayToShow.ishaIqamah}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

