import Image from "next/image"
import { Poppins } from "next/font/google"
import { PhoneCall, Facebook, Instagram, ShoppingBag, Gift, Clock } from "lucide-react"
import ProductCard from "@/components/product-card"
import SocialButton from "@/components/social-button"
import WhatsAppButton from "@/components/whatsapp-button"
import Navbar from "@/components/navbar"
import ProductCarousel from "@/components/product-carousel"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Sorteos",
      image: "/placeholder.svg?height=200&width=200",
      description: "Participa en nuestros sorteos semanales",
    },
    {
      id: 2,
      name: "Peluches",
      image: "/placeholder.svg?height=200&width=200",
      description: "Peluches de alta calidad para todas las edades",
    },
    {
      id: 3,
      name: "Novedades electrónicas",
      image: "/placeholder.svg?height=200&width=200",
      description: "Lo último en tecnología",
    },
    {
      id: 4,
      name: "Carteras",
      image: "/placeholder.svg?height=200&width=200",
      description: "Carteras de moda para toda ocasión",
    },
    { id: 5, name: "Perfumes", image: "/placeholder.svg?height=200&width=200", description: "Fragancias exclusivas" },
    { id: 6, name: "Accesorios", image: "/placeholder.svg?height=200&width=200", description: "Complementa tu estilo" },
    { id: 7, name: "Cremas", image: "/placeholder.svg?height=200&width=200", description: "Cuidado para tu piel" },
    {
      id: 8,
      name: "Y mucho más",
      image: "/placeholder.svg?height=200&width=200",
      description: "Descubre todas nuestras sorpresas",
    },
  ]

  return (
    <main className={`${poppins.className} min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/70 via-pink-500/70 to-blue-500/70 z-10"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Entretenimientos DrPeluche"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Entretenimientos DrPeluche</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            ¡Diversión, sorpresas y grandes ofertas en cada transmisión!
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
            ¡Únete a nuestras transmisiones!
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">Nuestros Productos</h2>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="md:hidden">
            <ProductCarousel products={products} />
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Cómo Comprar?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sintoniza nuestros Lives</h3>
              <p>Conéctate a nuestras transmisiones en vivo por Facebook</p>
            </div>
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Elige tus productos</h3>
              <p>Comenta en el live para apartar los productos que te gusten</p>
            </div>
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneCall className="text-purple-900 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contáctanos</h3>
              <p>Escríbenos por WhatsApp para coordinar el pago y la entrega</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sorteos Section */}
      <section className="py-16 px-4 bg-yellow-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-800">Sorteos Vigentes</h2>
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <Gift className="w-16 h-16 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-800">¡Gran Sorteo Semanal!</h3>
            <p className="text-gray-700 mb-6">
              Participa en nuestro próximo sorteo y gana increíbles premios. Por cada compra recibes un número para
              participar.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="w-6 h-6 text-blue-600" />
              <div className="text-xl font-bold text-blue-600">Próximo sorteo: Viernes 8:00 PM</div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
              Ver detalles del sorteo
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Síguenos en Redes Sociales</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <SocialButton
              icon={<Facebook className="w-8 h-8" />}
              name="Facebook"
              color="bg-blue-600"
              hoverColor="bg-blue-700"
              link="https://facebook.com/entretenimientosdrpeluche"
            />
            <SocialButton
              icon={<Instagram className="w-8 h-8" />}
              name="Instagram"
              color="bg-pink-600"
              hoverColor="bg-pink-700"
              link="https://instagram.com/entretenimientosdrpeluche"
            />
            <SocialButton
              icon={<PhoneCall className="w-8 h-8" />}
              name="WhatsApp"
              color="bg-green-600"
              hoverColor="bg-green-700"
              link="https://wa.me/1234567890"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-purple-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=Cliente${i}`}
                      alt={`Cliente ${i}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-800">Cliente Feliz</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, j) => (
                        <span key={j}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  "¡Me encantaron los productos! La atención fue excelente y la entrega muy rápida. Definitivamente
                  volveré a comprar."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Entretenimientos DrPeluche</h3>
              <p className="mb-4">¡Diversión, sorpresas y grandes ofertas en cada transmisión!</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horarios de Transmisión</h3>
              <ul>
                <li className="mb-2">Lunes a Viernes: 8:00 PM</li>
                <li className="mb-2">Sábados: 7:00 PM</li>
                <li>Domingos: 6:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="mb-2">WhatsApp: +123 456 7890</p>
              <p>Email: info@drpeluche.com</p>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Entretenimientos DrPeluche. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
