import Image from "next/image"

interface Product {
  id: number
  name: string
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-purple-800 mb-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Ver detalles
        </button>
      </div>
    </div>
  )
}
