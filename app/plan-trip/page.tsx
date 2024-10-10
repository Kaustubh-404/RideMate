'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bike, Car, Truck, Compass, Sun, Mountain } from "lucide-react"
import { useState } from "react"

const destinations = [
  {
    id: 1,
    name: "Mountain Pass Loop",
    icon: <Mountain className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    routes: ["Route 66", "Blue Ridge Parkway", "Tail of the Dragon"],
    duration: "3-5 days",
    precautions: [
      "Check brakes before steep descents",
      "Watch for wildlife crossings",
      "Prepare for rapid weather changes"
    ],
    packingList: [
      "Warm and cool weather gear",
      "Rain gear",
      "First aid kit",
      "Tire repair kit",
      "Portable battery pack"
    ]
  },
  {
    id: 2,
    name: "Coastal Highway",
    icon: <Compass className="h-5 w-5 text-green-600 dark:text-green-400" />,
    routes: ["Pacific Coast Highway", "Overseas Highway", "Atlantic Road"],
    duration: "4-7 days",
    precautions: [
      "Be aware of strong coastal winds",
      "Watch for wet and slippery roads",
      "Plan for ferry crossings"
    ],
    packingList: [
      "Sunscreen and sunglasses",
      "Waterproof gear",
      "Swimwear",
      "Camera for scenic views",
      "Seasickness medication"
    ]
  },
  {
    id: 3,
    name: "Desert Adventure Route",
    icon: <Sun className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />,
    routes: ["Mojave Road", "Valley of Fire Highway", "Death Valley Scenic Byway"],
    duration: "2-4 days",
    precautions: [
      "Carry extra water and stay hydrated",
      "Protect against sun exposure",
      "Check fuel availability along route"
    ],
    packingList: [
      "High SPF sunscreen",
      "Cooling neck wrap",
      "Extra water containers",
      "Shade umbrella or canopy",
      "Emergency satellite communicator"
    ]
  }
]

export default function PlanTrip() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [selectedDestination, setSelectedDestination] = useState(null)

  const handlePlanRoute = () => {
    const destination = destinations.find(d => d.name === to)
    setSelectedDestination(destination)
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
        Plan Your Epic Journey
      </h1>
      
      <Card className="bg-white dark:bg-gray-800 border-t-4 border-purple-500 shadow-lg mb-6">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">Route Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="from" className="text-gray-700 dark:text-gray-300">From</Label>
            <Input 
              id="from" 
              placeholder="Starting point" 
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="to" className="text-gray-700 dark:text-gray-300">To</Label>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger id="to" className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                {destinations.map((dest) => (
                  <SelectItem key={dest.id} value={dest.name} className="text-gray-900 dark:text-white">
                    <span className="flex items-center">
                      {dest.icon}
                      <span className="ml-2">{dest.name}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle" className="text-gray-700 dark:text-gray-300">Vehicle Type</Label>
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger id="vehicle" className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-gray-300  dark:border-gray-600">
                <SelectItem value="motorcycle" className="text-gray-900 dark:text-white">
                  <span className="flex items-center">
                    <Bike className="mr-2 h-4 w-4 text-blue-600 dark:text-blue-400" />
                    Motorcycle
                  </span>
                </SelectItem>
                <SelectItem value="car" className="text-gray-900 dark:text-white">
                  <span className="flex items-center">
                    <Car className="mr-2 h-4 w-4 text-green-600 dark:text-green-400" />
                    Car
                  </span>
                </SelectItem>
                <SelectItem value="rv" className="text-gray-900 dark:text-white">
                  <span className="flex items-center">
                    <Truck className="mr-2 h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    RV
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
            onClick={handlePlanRoute}
          >
            Plan Route
          </Button>
        </CardContent>
      </Card>

      {selectedDestination && (
        <Card className="bg-white dark:bg-gray-800 border-t-4 border-indigo-500 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-600 dark:text-indigo-400 flex items-center">
              {selectedDestination.icon}
              <span className="ml-2">{selectedDestination.name} Trip Info</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Recommended Routes:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {selectedDestination.routes.map((route, index) => (
                  <li key={index}>{route}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Estimated Duration:</h3>
              <p className="text-gray-700 dark:text-gray-300">{selectedDestination.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Precautions:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {selectedDestination.precautions.map((precaution, index) => (
                  <li key={index}>{precaution}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Packing List:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {selectedDestination.packingList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}