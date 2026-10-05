import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EVENTS, TIERS, price } from '../data'
import { useCart } from '../cart'

export default function Cart() {
  const { items, remove, clear, total } = useCart()
  const [done, setDone] = useState(null)

  if (done) return (
    <div className="py-16 text-center">
      <h1 className="text-2xl font-bold text-accent">Order confirmed</h1>
      <p className="mt-2 text-zinc-400">Order {done.ref} for {price(done.total)}. This is a demo, so no payment was taken.</p>
      <Link to="/" className="mt-6 inline-block rounded bg-accent px-5 py-3 font-bold text-black">Find more events</Link>
    </div>
  )
  if (!items.length) return <p>Your cart is empty. <Link to="/" className="text-accent">Browse events</Link></p>

  const submit = (e) => {
    e.preventDefault()
    setDone({ ref: 'SK-' + Math.random().toString(36).slice(2, 8).toUpperCase(), total })
    clear()
  }
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <section>
        <h1 className="text-xl font-bold">Your cart</h1>
        {items.map((i) => {
          const ev = EVENTS.find((x) => x.id === i.eventId)
          return (
            <div key={i.key} className="mt-4 flex items-start justify-between border-b border-zinc-800 pb-3 text-sm">
              <div>
                <p className="font-bold">{ev.name}</p>
                <p className="text-zinc-400">{i.qty} x {TIERS.find((t) => t.id === i.tier).name}</p>
              </div>
              <div className="text-right">
                <p>{price(i.qty * i.unit)}</p>
                <button onClick={() => remove(i.key)} className="text-xs text-zinc-400 hover:text-accent">Remove</button>
              </div>
            </div>
          )
        })}
        <p className="mt-4 text-right text-lg font-bold">Total {price(total)}</p>
      </section>
      <form onSubmit={submit} className="space-y-3 rounded-xl border border-zinc-800 bg-panel p-5">
        <h2 className="font-bold">Checkout (demo)</h2>
        <input required aria-label="Full name" placeholder="Full name" className="w-full rounded border border-zinc-700 bg-ink p-2" />
        <input required type="email" aria-label="Email" placeholder="Email" className="w-full rounded border border-zinc-700 bg-ink p-2" />
        <p className="text-xs text-zinc-500">No card details needed. Do not enter real payment information.</p>
        <button className="w-full rounded bg-accent py-3 font-bold text-black">Place order</button>
      </form>
    </div>
  )
}
