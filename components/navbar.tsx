"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Scissors } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Función para manejar el scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    // Si es el enlace de inicio, scroll al top
    if (targetId === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      setIsOpen(false)
      return
    }

    // Para otros enlaces, buscar el elemento por ID
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Obtener la posición del elemento
      const yOffset = -80 // Ajuste para compensar la altura del navbar
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      })

      // Cerrar el menú móvil si está abierto
      setIsOpen(false)
    }
  }

  // Añadir scroll-behavior: smooth al elemento html
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 relative mr-2 flex items-center justify-center bg-purple-600 rounded-full">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Peluquería a Domicilio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#top"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "top")}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "servicios")}
            >
              Servicios
            </a>
            <a
              href="#precios"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "precios")}
            >
              Precios
            </a>
            <a
              href="#cita"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "cita")}
            >
              Reservar Cita
            </a>
            <a
              href="#contacto"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors"
              onClick={(e) => handleSmoothScroll(e, "contacto")}
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-purple-800 hover:text-pink-500 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#top"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2 border-b border-gray-100"
              onClick={(e) => handleSmoothScroll(e, "top")}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2 border-b border-gray-100"
              onClick={(e) => handleSmoothScroll(e, "servicios")}
            >
              Servicios
            </a>
            <a
              href="#precios"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2 border-b border-gray-100"
              onClick={(e) => handleSmoothScroll(e, "precios")}
            >
              Precios
            </a>
            <a
              href="#cita"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2 border-b border-gray-100"
              onClick={(e) => handleSmoothScroll(e, "cita")}
            >
              Reservar Cita
            </a>
            <a
              href="#contacto"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2"
              onClick={(e) => handleSmoothScroll(e, "contacto")}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
