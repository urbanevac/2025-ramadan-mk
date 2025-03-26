import { Calendar } from "@/components/calendar"
import { CurrentDayCard } from "@/components/current-day-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f4e8] dark:bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="my-8">
          <CurrentDayCard />
        </div>
        <Calendar />
        <Footer />
      </div>
    </main>
  )
}

