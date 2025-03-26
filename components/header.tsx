"use client"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
      <div>
        <h1 className="text-3xl font-bold text-amber-800 dark:text-amber-400">Ramadan Prayer Timetable</h1>
        <p className="text-slate-600 dark:text-slate-300">2025 - 1446 AH (1 Mar - 30 Mar)</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="border-amber-200 dark:border-amber-800"
        >
          {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}

