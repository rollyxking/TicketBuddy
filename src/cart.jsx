import { createContext, useContext, useState } from 'react'
const Ctx = createContext(null)
export const useCart = () => useContext(Ctx)

export function CartProvider({ children }) {
  const [items, setItems] = useState([]) // { key, eventId, tier, qty, unit }
  const add = (line) =>
    setItems((cur) => {
      const key = line.eventId + '-' + line.tier
      const hit = cur.find((i) => i.key === key)
      return hit ? cur.map((i) => (i.key === key ? { ...i, qty: i.qty + line.qty } : i)) : [...cur, { ...line, key }]
    })
  const remove = (key) => setItems((cur) => cur.filter((i) => i.key !== key))
  const clear = () => setItems([])
  const count = items.reduce((n, i) => n + i.qty, 0)
  const total = items.reduce((n, i) => n + i.qty * i.unit, 0)
  return <Ctx.Provider value={{ items, add, remove, clear, count, total }}>{children}</Ctx.Provider>
}
