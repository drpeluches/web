"use client"

import { MessageSquare } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5212345678?text=Hola,%20me%20gustaría%20reservar%20una%20cita%20para%20un%20servicio%20de%20peluquería%20a%20domicilio."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <div className="opacity-0 scale-95 origin-right transform transition-all duration-300 ease-in-out absolute right-16 group-hover:opacity-100 group-hover:scale-100">
        <div className="bg-white text-green-600 py-2 px-4 rounded-lg shadow-lg font-medium whitespace-nowrap">
          ¡Reserva por WhatsApp!
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
