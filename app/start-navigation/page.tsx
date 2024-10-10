import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Compass, MapPin } from "lucide-react"

export default function StartNavigation() {
  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
        Start Navigation
      </h1>
      
      <Card className="bg-white dark:bg-gray-800 border-t-4 border-blue-500 shadow-lg mb-4">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Enter Destination</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-gray-700 dark:text-gray-300">Destination</Label>
            <Input 
              id="destination" 
              placeholder="Enter your destination" 
              className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
            <Compass className="mr-2 h-4 w-4" />
            Start Navigation
          </Button>
        </CardContent>
      </Card>
      
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 shadow-lg">
        <MapPin className="h-12 w-12 text-gray-400 dark:text-gray-500" />
        <p className="text-gray-500 dark:text-gray-400 ml-2">Map will be displayed here</p>
      </div>
      
      <Card className="bg-white dark:bg-gray-800 border-t-4 border-cyan-500 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-cyan-600 dark:text-cyan-400">Navigation Info</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
            Turn-by-turn directions and real-time updates will appear here once navigation starts.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}