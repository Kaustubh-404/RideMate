import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"

export default function Destinations() {
  const popularDestinations = [
    { name: "Mountain Pass Loop", rating: 4.8, description: "Scenic mountain roads with breathtaking views." },
    { name: "Coastal Highway", rating: 4.5, description: "Beautiful ocean views and winding coastal roads." },
    { name: "Desert Adventure Route", rating: 4.2, description: "Challenging terrain through stunning desert landscapes." },
  ]

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400">
        Popular Destinations
      </h1>
      
      <div className="space-y-4">
        {popularDestinations.map((destination, index) => (
          <Card key={index} className="bg-white dark:bg-gray-800 border-t-4 border-green-500 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-green-600 dark:text-green-400">
                <span>{destination.name}</span>
                <span className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  {destination.rating}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{destination.description}</p>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 border-green-500 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900">
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white transition-colors duration-200">
                  Plan Trip
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}