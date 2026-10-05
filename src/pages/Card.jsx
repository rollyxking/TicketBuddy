import { Link } from 'react-router-dom'
import { fmtDate, price } from '../data'

export default function Card({ ev }) {
  return (
    <Link to={'/event/' + ev.id} className="block w-64 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-panel hover:border-accent">
      <div className="h-32" style={{ background: `linear-gradient(135deg, hsl(${ev.hue} 70% 35%), hsl(${ev.hue + 60} 60% 12%))` }} />
      <div className="p-3">
        <p className="text-xs text-zinc-400">{fmtDate(ev.date)} - {ev.city}</p>
        <h3 className="mt-1 text-sm font-bold leading-snug">{ev.name}</h3>
        <p className="mt-2 text-xs text-accent">From {price(ev.price)}</p>
      </div>
    </Link>
  )
}
