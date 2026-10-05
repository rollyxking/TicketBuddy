import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { EVENTS, CITIES, CATEGORIES } from '../data'
import Card from './Card'

function Row({ title, events }) {
  const ref = useRef(null)
  const scroll = (d) => ref.current.scrollBy({ left: d * 280, behavior: 'smooth' })
  return (
    <section className="mt-10">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll(-1)} aria-label="Scroll left" className="h-8 w-8 rounded border border-zinc-700 hover:border-accent">{'<'}</button>
          <button onClick={() => scroll(1)} aria-label="Scroll right" className="h-8 w-8 rounded border border-zinc-700 hover:border-accent">{'>'}</button>
        </div>
      </div>
      <div ref={ref} className="scroll-row flex gap-4 overflow-x-auto pb-2">
        {events.map((ev) => <Card key={ev.id} ev={ev} />)}
      </div>
    </section>
  )
}

export default function Home() {
  const hero = EVENTS[0]
  return (
    <>
      <section className="rounded-xl border border-zinc-800 p-8 md:p-12" style={{ background: 'linear-gradient(120deg, #0d2a1a, #09090b 70%)' }}>
        <p className="text-sm text-accent">$ npm run tonight</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">{hero.name}</h1>
        <p className="mt-3 text-zinc-400">{hero.venue}, {hero.city}</p>
        <Link to={'/event/' + hero.id} className="mt-6 inline-block rounded bg-accent px-5 py-3 text-sm font-bold text-black">Get tickets</Link>
      </section>
      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <Link key={c} to={'/search?cat=' + c} className="rounded-full border border-zinc-700 px-4 py-1 text-sm hover:border-accent">{c}</Link>
        ))}
      </div>
      <Row title="Happening soon" events={[...EVENTS].sort((a, b) => a.date.localeCompare(b.date))} />
      <Row title="Concerts" events={EVENTS.filter((e) => e.cat === 'Concerts')} />
      <section className="mt-10">
        <h2 className="mb-3 text-xl font-bold">Browse by city</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {CITIES.map((c, i) => (
            <Link key={c} to={'/search?city=' + c} className="rounded-lg p-6 text-center font-bold" style={{ background: `hsl(${i * 70} 50% 18%)` }}>{c}</Link>
          ))}
        </div>
      </section>
    </>
  )
}
