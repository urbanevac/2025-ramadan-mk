import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-amber-200 dark:border-amber-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h2 className="text-xl font-bold text-amber-800 dark:text-amber-400">MKMA Islamic Center MK</h2>
          <p className="text-slate-600 dark:text-slate-300">Trubys Garden, Coffee Hall, Milton Keynes, MK6 5HA</p>
          <p className="text-slate-600 dark:text-slate-300">Tel: 01908 231777</p>
          <Link
            href="https://www.mkmuslims.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
          >
            www.mkmuslims.org
            <ExternalLink className="h-4 w-4" />
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
            Prayer times data sourced from MKMA Community
          </p>
          <div className="mt-2 pt-4 border-t border-amber-100 dark:border-amber-900 w-24">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Designed in 🇬🇧 by{" "}
              <Link
                href="https://morituri.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
              >
                morituri.co
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

