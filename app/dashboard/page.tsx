import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass, Map, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col p-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Welcome to RideMate
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">What's your adventure today?</p>
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/plan-trip">
          <Card className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t-4 border-purple-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-600 dark:text-purple-400">
                <Map className="mr-2 h-6 w-6" />
                Plan Trip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">Create and customize your epic journey</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/start-navigation">
          <Card className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t-4 border-blue-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                <Compass className="mr-2 h-6 w-6" />
                Start Navigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">Begin your journey with turn-by-turn directions</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/destinations">
          <Card className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t-4 border-green-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                <MapPin className="mr-2 h-6 w-6" />
                Destinations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">Explore popular biker destinations</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/group-chat">
          <Card className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-t-4 border-yellow-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                <MessageSquare className="mr-2 h-6 w-6" />
                Group Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">Connect with other riders and plan group trips</p>
            </CardContent>
          </Card>
        </Link>
      </main>
    </div>
  )
}