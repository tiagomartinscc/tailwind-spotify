import { ReactNode } from 'react'

interface VerticalCardProps {
  img?: ReactNode
  href?: string
  title: string
  subtitle: string;
}

export function VerticalCard ({img, href, title, subtitle}: VerticalCardProps) {
  return (
    <a href={href} className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      {img}
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-zinc-400">{subtitle}</span>
    </a>
  )
}