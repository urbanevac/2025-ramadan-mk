"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ramadanData } from "@/lib/ramadan-data"

export function Calendar() {
  const [page, setPage] = useState(0)
  const itemsPerPage = 10
  const totalPages = Math.ceil(ramadanData.length / itemsPerPage)

  const paginatedData = ramadanData.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

  return (
    <Card className="bg-white dark:bg-slate-900 border-amber-200 dark:border-amber-800">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-amber-800 dark:text-amber-400 flex items-center gap-2">
            <CalendarIcon className="h-6 w-6" />
            Ramadan Calendar
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="border-amber-200 dark:border-amber-800"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <span className="text-sm">
              Page {page + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="border-amber-200 dark:border-amber-800"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-amber-50 dark:bg-amber-950/50">
                <TableHead className="text-amber-800 dark:text-amber-400">Date</TableHead>
                <TableHead className="text-amber-800 dark:text-amber-400">Ramadan</TableHead>
                <TableHead className="text-amber-800 dark:text-amber-400">Fajr</TableHead>
                <TableHead className="text-amber-800 dark:text-amber-400">Sunrise</TableHead>
                <TableHead className="text-amber-800 dark:text-amber-400">Dhuhr</TableHead>
                <TableHead className="text-amber-800 dark:text-amber-400">Asr</TableHead>
                <TableHead className="text-amber-800 dark:text-amber-400">Maghrib</TableHead>
                <TableHead className="text-amber-800 dark:text-amber-400">Isha</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((day) => (
                <TableRow key={day.ramadanDay} className={day.isToday ? "bg-amber-100 dark:bg-amber-900/30" : ""}>
                  <TableCell className="font-medium">{day.date}</TableCell>
                  <TableCell>{day.ramadanDay}</TableCell>
                  <TableCell>
                    <div>{day.fajr}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{day.fajrIqamah}</div>
                  </TableCell>
                  <TableCell>{day.sunrise}</TableCell>
                  <TableCell>
                    <div>{day.dhuhr}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{day.dhuhrIqamah}</div>
                  </TableCell>
                  <TableCell>
                    <div>{day.asr}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{day.asrIqamah}</div>
                  </TableCell>
                  <TableCell>
                    <div>{day.maghrib}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{day.maghribIqamah}</div>
                  </TableCell>
                  <TableCell>
                    <div>{day.isha}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{day.ishaIqamah}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

