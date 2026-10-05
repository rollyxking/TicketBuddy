import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { EVENTS, TIERS, price, fmtDate } from '../data'
import { useCart } from '../cart'

export default function Event() {
  const { id } = useParams()
  const ev = EVENTS.find((e) => e.id === Number(id))
  const { add } = useCart()
  const nav = useNavigate()
  const [qty, setQty] = useState(() => Object.fromEntries(TIERS.map((t) => [t.id, 0])))
  if (!ev) return <p>Event not found. <Link to="/" className="text-accent">Back home</Link></p>

  const picked = TIERS.filter((t) => qty[t.id] > 0)
  const addAll = () => {
    picked.forEach((t) => add({ eventId: ev.id, tier: t.id, qty: qty[t.id], unit: ev.price * t.mult }))
    nav('/cart')
  }
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <div className="h-64 rounded-xl" style={{ background: `linear-gradient(135deg, hsl(${ev.hue} 70% 35%), hsl(${ev.hue + 60} 60% 12%))` }} />
        <h1 className="mt-4 text-2xl font-bold">{ev.name}</h1>
        <p className="mt-2 text-zinc-400">{fmtDate(ev.date)} - {ev.venue}, {ev.city}</p>
      </div>
      <section className="rounded-xl border border-zinc-800 bg-panel p-5">
        <h2 className="font-bold">Choose tickets</h2>
        {TIERS.map((t) => (
          <div key={t.id} className="mt-4 flex items-center justify-between">
            <div><p className="text-sm">{t.name}</p><p className="text-xs text-accent">{price(ev.price * t.mult)} each</p></div>
            <div className="flex items-center gap-3">
              <button aria-label={'Fewer ' + t.name} onClick={() => setQty({ ...qty, [t.id]: Math.max(0, qty[t.id] - 1) })} className="h-8 w-8 rounded border border-zinc-700">-</button>
              <span className="w-4 text-center">{qty[t.id]}</span>
              <button aria-label={'More ' + t.name} onClick={() => setQty({ ...qty, [t.id]: Math.min(8, qty[t.id] + 1) })} className="h-8 w-8 rounded border border-zinc-700">+</button>
            </div>
          </div>
        ))}
        <button disabled={!picked.length} onClick={addAll} className="mt-6 w-full rounded bg-accent py-3 font-bold text-black disabled:bg-zinc-700 disabled:text-zinc-400">
          Add to cart
        </button>
      </section>
    </div>
  )
}
