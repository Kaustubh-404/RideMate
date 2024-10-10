'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const initialMessages = [
  { id: 1, user: "RoadKing", message: "Hey everyone! Planning a trip to the Mountain Pass Loop next month. Anyone interested?" },
  { id: 2, user: "CruiserQueen", message: "Sounds exciting! I might be up for it. What dates are you thinking?" },
  { id: 3, user: "SpeedDemon", message: "Count me in! I've done that route before, it's amazing." },
]

export default function GroupChat() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: "You", message: newMessage }])
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400">
        Group Chat
      </h1>
      
      <Card className="bg-white dark:bg-gray-800 border-t-4 border-yellow-500 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-yellow-600 dark:text-yellow-400">Riders' Lounge</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-md p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex items-start space-x-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {msg.user[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{msg.user}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input 
                placeholder="Type your message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              />
              <Button onClick={handleSendMessage} className="bg-yellow-600 hover:bg-yellow-700 text-white">Send</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}