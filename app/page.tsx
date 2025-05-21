import Image from "next/image"
import { Poppins } from "next/font/google"
import { Scissors, MapPin, Clock, Phone, CheckCircle, Mail, Instagram, Facebook } from "lucide-react"
import Navbar from "@/components/navbar"
import ServiceCard from "@/components/service-card"
import WhatsAppButton from "@/components/whatsapp-button"
import AppointmentForm from "@/components/appointment-form"
import Testimonial from "@/components/testimonial"
import PriceTable from "@/components/price-table"
import ContactForm from "@/components/contact-form"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function Home() {
  const services = [
    {
      id: 1,
      name: "Corte de Cabello",
      image: "/placeholder.svg?height=200&width=200&text=Corte",
      description: "Cortes modernos y clásicos para todos los estilos",
      price: "Desde $150",
    },
    {
      id: 2,
      name: "Tinte y Color",
      image: "/placeholder.svg?height=200&width=200&text=Tinte",
      description: "Coloración profesional con productos de calidad",
      price: "Desde $350",
    },
    {
      id: 3,
      name: "Peinados",
      image: "/placeholder.svg?height=200&width=200&text=Peinado",
      description: "Peinados para eventos especiales y ocasiones",
      price: "Desde $200",
    },
    {
      id: 4,
      name: "Tratamientos",
      image: "/placeholder.svg?height=200&width=200&text=Tratamiento",
      description: "Hidratación, reparación y cuidado del cabello",
      price: "Desde $250",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Laura Martínez",
      image: "/placeholder.svg?height=100&width=100&text=Laura",
      rating: 5,
      text: "Excelente servicio a domicilio. La estilista fue muy profesional y el resultado quedó increíble. Muy conveniente no tener que salir de casa.",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      image: "/placeholder.svg?height=100&width=100&text=Carlos",
      rating: 5,
      text: "Primera vez que pruebo un servicio de peluquería a domicilio y quedé muy satisfecho. Puntualidad, profesionalismo y excelente trabajo.",
    },
    {
      id: 3,
      name: "María González",
      image: "/placeholder.svg?height=100&width=100&text=María",
      rating: 4,
      text: "Muy buena experiencia. El corte quedó exactamente como lo pedí y la estilista fue muy amable. Definitivamente repetiré.",
    },
  ]

  const benefits = [
    {
      icon: <Clock className="w-10 h-10 text-purple-600" />,
      title: "Ahorra Tiempo",
      description: "Sin desplazamientos ni esperas. Aprovecha tu tiempo en lo que realmente importa.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-purple-600" />,
      title: "Comodidad Total",
      description: "Disfruta de nuestros servicios en la comodidad de tu hogar u oficina.",
    },
    {
      icon: <Scissors className="w-10 h-10 text-purple-600" />,
      title: "Estilistas Profesionales",
      description: "Nuestro equipo cuenta con años de experiencia y formación continua.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
      title: "Productos de Calidad",
      description: "Utilizamos solo productos profesionales y de las mejores marcas.",
    },
  ]

  return (
    <main
      id="top"
      className={`${poppins.className} min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hero-section">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/70 via-pink-500/70 to-blue-500/70 z-10"></div>
          <Image
            src="img\img-hero-1.webp?height=1080&width=1920&text=Peluquería+a+Domicilio"
            alt="Peluquería a Domicilio"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Belleza y Estilo en la Comodidad de tu Hogar
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            Servicios profesionales de peluquería a domicilio. Cortes, tintes, peinados y más.
          </p>
          <a href="#cita" className="inline-block">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
              Reserva tu Cita Ahora
            </button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">
            ¿Por qué elegir nuestro servicio?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl shadow-md transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-center mb-2 text-purple-800">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">Nuestros Servicios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#precios" className="inline-block">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
                Ver Lista Completa de Precios
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="precios" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">Lista de Precios</h2>
          <PriceTable />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">¿Cómo Funciona?</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Reserva tu Cita</h3>
              <p>Elige el servicio que deseas y programa una fecha y hora que te convenga</p>
            </div>
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Recibe a tu Estilista</h3>
              <p>Nuestro profesional llegará puntual a tu domicilio con todo el equipo necesario</p>
            </div>
            <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Disfruta el Resultado</h3>
              <p>Relájate y disfruta de tu nuevo look sin salir de casa</p>
            </div>
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
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="cita" className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">Reserva tu Cita</h2>
          <AppointmentForm />
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Zonas de Servicio</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Ofrecemos nuestros servicios de peluquería a domicilio en las siguientes áreas:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Centro", "Polanco", "Condesa", "Roma", "Del Valle", "Nápoles", "Santa Fe", "Coyoacán"].map(
              (area, index) => (
                <div
                  key={index}
                  className="bg-white/20 p-4 rounded-lg backdrop-blur-sm flex items-center justify-center"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-medium">{area}</span>
                </div>
              ),
            )}
          </div>
          <p className="mt-8 text-lg">¿No ves tu zona? Contáctanos para verificar disponibilidad en otras áreas.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-800">Contáctanos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-purple-50 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-6">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-800">Teléfono</h4>
                      <p className="text-gray-600">+52 55 1234 5678</p>
                      <p className="text-gray-600">Lunes a Domingo: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-800">Correo Electrónico</h4>
                      <p className="text-gray-600">info@peluqueriadomicilio.com</p>
                      <p className="text-gray-600">Respondemos en menos de 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-800">Horarios de Servicio</h4>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sábados: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Domingos: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-gray-800 mb-4">Síguenos en Redes Sociales</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/5212345678"
                      className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-purple-50 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-6">Ubicación</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Mapa+de+Ubicación"
                    alt="Mapa de ubicación"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-gray-600">
                  Nuestro equipo de estilistas se desplaza a tu domicilio en las zonas indicadas. Oficina central: Av.
                  Ejemplo #123, Col. Centro, Ciudad de México.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-purple-50 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-6">Envíanos un Mensaje</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Peluquería a Domicilio</h3>
              <p className="mb-4">Belleza y estilo en la comodidad de tu hogar</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-pink-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-pink-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horarios de Servicio</h3>
              <ul>
                <li className="mb-2">Lunes a Viernes: 9:00 AM - 8:00 PM</li>
                <li className="mb-2">Sábados: 9:00 AM - 6:00 PM</li>
                <li>Domingos: 10:00 AM - 4:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="mb-2 flex items-center">
                <Phone className="w-5 h-5 mr-2" /> WhatsApp: +52 55 1234 5678
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>{" "}
                Email: info@peluqueriadomicilio.com
              </p>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Peluquería a Domicilio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}
