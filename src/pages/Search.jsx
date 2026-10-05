import { useSearchParams } from 'react-router-dom'
import { EVENTS, CITIES, CATEGORIES } from '../data'
import Card from './Card'

export default function Search() {
  const [sp, setSp] = useSearchParams()
  const q = (sp.get('q') || '').toLowerCase()
  const cat = sp.get('cat') || ''
  const city = sp.get('city') || ''
  const max = Number(sp.get('max') || 200)
  const set = (k, v) => { const n = new URLSearchParams(sp); v ? n.set(k, v) : n.delete(k); setSp(n) }

  const results = EVENTS.filter((e) =>
    (!q || (e.name + e.city + e.venue).toLowerCase().includes(q)) &&
    (!cat || e.cat === cat) && (!city || e.city === city) && e.price <= max)

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <select value={cat} onChange={(e) => set('cat', e.target.value)} aria-label="Category" className="rounded border border-zinc-700 bg-panel p-2">
          <option value="">All categories</option>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={city} onChange={(e) => set('city', e.target.value)} aria-label="City" className="rounded border border-zinc-700 bg-panel p-2">
          <option value="">All cities</option>{CITIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <label className="flex items-center gap-2">Max price ${max}
          <input type="range" min="10" max="200" value={max} onChange={(e) => set('max', e.target.value)} />
        </label>
      </div>
      <h1 className="mt-6 text-xl font-bold">{results.length} events</h1>
      {results.length === 0 && <p className="mt-4 text-zinc-400">No events match. Try clearing a filter.</p>}
      <div className="mt-4 flex flex-wrap gap-4">{results.map((ev) => <Card key={ev.id} ev={ev} />)}</div>
    </>
  )
}
