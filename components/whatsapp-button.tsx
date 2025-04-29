"use client"

import { MessageSquare } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <div className="opacity-0 scale-95 origin-right transform transition-all duration-300 ease-in-out absolute right-16 group-hover:opacity-100 group-hover:scale-100">
        <div className="bg-white text-green-600 py-2 px-4 rounded-lg shadow-lg font-medium whitespace-nowrap">
          ¡Contáctanos por WhatsApp!
        </div>
      </div>

      <div
        className="bg-green-500 text-white p-4 rounded-full shadow-lg 
        transition-all duration-300 transform hover:scale-110
        flex items-center justify-center"
      >
        <MessageSquare size={28} />
      </div>
    </a>
  )
}
