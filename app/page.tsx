import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-provider"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <ThemeToggle />
      <main className="flex-1 flex flex-col items-center justify-center p-4 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            RideMate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Your Ultimate Riding Companion</p>
        </div>
        
        <div className="w-full max-w-md aspect-video relative overflow-hidden rounded-lg shadow-xl">
          <img
            src="/1.jpeg"
            alt="Motorcycle on a scenic road"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <Card className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Rider's Quote:</p>
            <p className="italic text-gray-600 dark:text-gray-300">
              "Life is short. The road is long. Ride hard."
            </p>
          </CardContent>
        </Card>

        <Link href="/dashboard" className="w-full max-w-md">
          <Button className="w-full h-14 text-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
            Let's Start the Ride
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500 dark:text-gray-400">
        © 2024 RideMate. Ride Safe, Ride Free.
      </footer>
    </div>
  )
}