import { Play } from 'lucide-react'
import { ReactNode } from 'react'

interface HorizontalCardProps {
  img?: ReactNode
  href?: string
  title: String
}

export function HorizontalCard ({img, href, title}: HorizontalCardProps) {
  return (
    <a href={href} className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transitions-colors">
      {img}
        <strong>{title}</strong>
        <button className="invisible group-hover:visible w-14 h-14 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
          <Play fill='bg-black' />
        </button>
    </a>
  )
}