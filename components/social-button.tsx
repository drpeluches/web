import Link from "next/link"
import type { ReactNode } from "react"

interface SocialButtonProps {
  icon: ReactNode
  name: string
  color: string
  hoverColor: string
  link: string
}

export default function SocialButton({ icon, name, color, hoverColor, link }: SocialButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} hover:${hoverColor} text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 min-w-[200px]`}
    >
      {icon}
      <span>{name}</span>
    </Link>
  )
}
