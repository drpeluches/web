import Image from "next/image"

interface Service {
  id: number
  name: string
  image: string
  description: string
  price: string
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100">
        <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-contain p-4" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-purple-800 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-2">{service.description}</p>
        <p className="text-lg font-bold text-pink-600">{service.price}</p>
        <a href="#cita">
          <button className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Reservar
          </button>
        </a>
      </div>
    </div>
  )
}
