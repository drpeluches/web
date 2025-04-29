"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 relative mr-2">
              <Image
                src="/placeholder.svg?height=100&width=100&text=DrP"
                alt="DrPeluche Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              DrPeluche
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="text-purple-800 hover:text-pink-500 font-medium transition-colors">
              Inicio
            </Link>
            <Link href="#productos" className="text-purple-800 hover:text-pink-500 font-medium transition-colors">
              Productos
            </Link>
            <Link href="#" className="text-purple-800 hover:text-pink-500 font-medium transition-colors">
              Sorteos
            </Link>
            <Link href="#" className="text-purple-800 hover:text-pink-500 font-medium transition-colors">
              Transmisiones
            </Link>
            <Link href="#" className="text-purple-800 hover:text-pink-500 font-medium transition-colors">
              Contacto
            </Link>
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
            <Link
              href="#"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#productos"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="#"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Sorteos
            </Link>
            <Link
              href="#"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Transmisiones
            </Link>
            <Link
              href="#"
              className="text-purple-800 hover:text-pink-500 font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
