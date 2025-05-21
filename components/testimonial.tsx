import Image from "next/image"

interface TestimonialProps {
  testimonial: {
    id: number
    name: string
    image: string
    rating: number
    text: string
  }
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-purple-50 p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-pink-200 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-purple-800">{testimonial.name}</h3>
          <div className="flex text-yellow-400">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            {[...Array(5 - testimonial.rating)].map((_, i) => (
              <span key={i + testimonial.rating} className="text-gray-300">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700">"{testimonial.text}"</p>
    </div>
  )
}
