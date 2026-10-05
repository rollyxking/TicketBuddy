import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate, useParams, useSearchParams, useLocation } from "react-router-dom";
import { categories, events, art, trending, popular, spotlights, presales, guides, discover, cities, featured, footerCols, homeImages } from "./data.js";

const q = (s) => `/search?q=${encodeURIComponent(s)}`;
const accountStorageKey = "stagekit.registeredUser";
const ticketStorageKey = (email) => `ticketbubby.tickets.${email}`;

function readTicketOrders(email) {
  try {
    const orders = JSON.parse(localStorage.getItem(ticketStorageKey(email)) || "[]");
    return Array.isArray(orders) ? orders : [];
  } catch {
    return [];
  }
}

function Header({ registeredUser }) {
  const nav = useNavigate();
  const [bar, setBar] = useState(true);
  const [f, setF] = useState({ loc: "", text: "" });
  const go = (e) => { e.preventDefault(); const p = new URLSearchParams(); if (f.text) p.set("q", f.text); if (f.loc) p.set("city", f.loc); nav(`/search?${p}`); };
  const items = [["Concerts", "/search?cat=Concerts"], ["Sports", "/search?cat=Sports"], ["Arts, Theater & Comedy", `/search?cat=${encodeURIComponent("Arts, Theater & Comedy")}`], ["Family", "/search?cat=Family"], ["Cities", "/#cities"]];
  return (
    <>
      <nav className="top" aria-label="Main Navigation"><div className="wrap">
        <Link to="/" className="logo">TicketBubby</Link>
        <ul className="cats">
          {items.map(([t, h]) => <li key={t}><Link to={h}>{t}</Link></li>)}
          <li><button className="linklike">More</button></li>
        </ul>
        <div className="acts">
          <button className="icon" aria-expanded={bar} onClick={() => setBar(!bar)}>⌕<span className="sr">Toggle search bar</span></button>
          <Link to={registeredUser ? "/dashboard" : "/signin"} className="signin">{registeredUser ? "Dashboard" : "Sign In/Register"}</Link>
        </div>
      </div></nav>
      {bar && (
        <div className="sbar"><form className="wrap sform" role="search" onSubmit={go}>
          <label className="fld"><span>Location</span><input placeholder="City or Zip Code" value={f.loc} onChange={(e) => setF({ ...f, loc: e.target.value })} /></label>
          <button type="button" className="fld dates"><span>Dates</span>All Dates ▾</button>
          <label className="fld grow"><span>Search</span><input type="search" maxLength={120} placeholder="Artist, Event or Venue" value={f.text} onChange={(e) => setF({ ...f, text: e.target.value })} /></label>
          <button className="btn go">Search</button>
        </form></div>
      )}
    </>
  );
}

function Carousel({ title, children, seeAll, id }) {
  const r = useRef(null);
  const by = (d) => r.current.scrollBy({ left: d * r.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <section className="sec" id={id}>
      <div className="sh"><h2>{title}</h2>
        <div className="ctl">{seeAll && <Link to={seeAll} className="seeall">See All</Link>}
          <button onClick={() => by(-1)} aria-label="Previous items">←</button><button onClick={() => by(1)} aria-label="Next items">→</button></div></div>
      <div className="car" ref={r}>{children}</div>
    </section>
  );
}
const Tile = ({ to, tag, name, tall, image, loading = "lazy" }) => (
  <Link to={to} className={"tile" + (tall ? " tall" : "")}><div className="im" style={{ background: art(name) }}>{image && <img className="tile-image" src={image} alt="" loading={loading} />}</div><div className="tb">{tag && <span className="tag">{tag}</span>}<h3>{name}</h3></div></Link>
);

function Home() {
  const hero = "Disney On Ice presents Jump In!";
  return (
    <div className="wrap">
      <section className="hl">
        <Link to={q("Disney On Ice")} className="promo"><div className="im" style={{ background: art(hero) }}><img className="promo-image" src={homeImages.hero} alt="" /><span className="badge">Ice Shows</span></div><h1>{hero}</h1></Link>
        <ul className="spots">{spotlights.map(([t, n], i) => <li key={n}><Link to={q(n)}><div className="im" style={{ background: art(n) }}><img className="tile-image" src={homeImages.spotlights[i]} alt="" loading="eager" /><span className="badge">{t}</span></div><h2>{n}</h2></Link></li>)}</ul>
      </section>
      <Carousel title="Trending Searches">{trending.map(([g, n]) => <Tile key={n} to={q(n)} tag={g} name={n} image={homeImages.trending[n]} loading="eager" />)}</Carousel>
      <Carousel title="Happening This Week">
        {events.map((e, i) => (
          <Link key={e.id} to={`/event/${e.id}`} className="tile">
            <div className="im" style={{ background: e.art }}>{e.image && <img className="tile-image" src={e.image} alt="" loading="eager" />}{i < 6 && <span className="badge">{i < 3 ? "Today" : "Tomorrow"}</span>}</div>
            <div className="tb"><div className="mute">{e.date}</div><h3>{e.title}</h3><div className="mute">{e.venue} • {e.city}</div></div>
          </Link>
        ))}
      </Carousel>
      <Carousel title="Sponsored Presales and Offers">
        {presales.map(([d, t, v, s]) => (
          <Link key={t} to={q(t)} className="tile wide"><div className="im" style={{ background: art(t) }}><span className="badge">Presale</span></div>
            <div className="tb"><div className="mute">{d}</div><h3>{t}</h3><div className="mute">{v}</div><div className="mute presale">Presale starts {s}</div></div></Link>
        ))}
      </Carousel>
      <h2 className="pn">Popular Near You</h2>
      {Object.entries(popular).map(([cat, list]) => (
        <Carousel key={cat} title={cat} seeAll={`/search?cat=${encodeURIComponent(cat)}`}>{list.map(([g, n], i) => <Tile key={n + i} to={q(n)} tag={g} name={n} image={homeImages.popular[cat]?.[i]} loading={i < 2 ? "eager" : "lazy"} />)}</Carousel>
      ))}
      <Carousel title="Entertainment Guides">{guides.map(([t, d], i) => <Link key={t} to={q(t)} className="tile"><div className="im" style={{ background: art(t) }}><img className="tile-image" src={homeImages.guides[i]} alt="" loading="lazy" /></div><div className="tb"><h3>{t}</h3><p className="mute">{d}</p></div></Link>)}</Carousel>
      <Carousel title="Discover More">{discover.map(([g, t, d], i) => <Link key={t} to="/" className="tile"><div className="im" style={{ background: art(t) }}><img className="tile-image" src={homeImages.discover[i]} alt="" loading="lazy" /></div><div className="tb"><span className="tag">{g}</span><h3>{t}</h3><p className="mute">{d}</p><span className="tag">Discover More</span></div></Link>)}</Carousel>
      <Carousel title="Popular Cities" seeAll="/search" id="cities">{cities.map((c) => <Tile key={c} to={q(c)} name={c} image={homeImages.cities[c]} />)}</Carousel>
      <section className="sec"><h2>Featured</h2><ul className="feat">{featured.map((n, i) => <li key={n}><Tile to="/search" name={n} image={homeImages.featured[i]} /></li>)}</ul></section>
    </div>
  );
}

function Search() {
  const [p, setP] = useSearchParams();
  const t = (p.get("q") || "").toLowerCase(), cat = p.get("cat") || "", city = (p.get("city") || "").toLowerCase();
  const set = (k, v) => { const n = new URLSearchParams(p); v ? n.set(k, v) : n.delete(k); setP(n); };
  const list = events.filter((e) => (!t || (e.title + e.venue + e.city).toLowerCase().includes(t)) && (!cat || e.cat === cat) && (!city || e.city.toLowerCase().includes(city)));
  return (
    <div className="wrap">
      <h2>{list.length} events</h2>
      <div className="filters">
        <select value={cat} onChange={(e) => set("cat", e.target.value)} aria-label="Category"><option value="">All categories</option>{categories.map((c) => <option key={c}>{c}</option>)}</select>
      </div>
      {list.length ? <div className="grid">{list.map((e) => (
        <Link key={e.id} to={`/event/${e.id}`} className="tile"><div className="im" style={{ background: e.art }}>{e.image && <img className="tile-image" src={e.image} alt="" loading="lazy" />}</div><div className="tb"><div className="mute">{e.date}</div><h3>{e.title}</h3><div className="mute">{e.venue} • {e.city}</div></div></Link>
      ))}</div> : <p className="mute">No events match. Clear a filter or try another search.</p>}
    </div>
  );
}

function EventPage({ registeredUser }) {
  const e = events.find((x) => x.id === +useParams().id);
  const [qty, setQty] = useState(2);
  const [done, setDone] = useState(null);
  const [purchaseError, setPurchaseError] = useState("");
  const navigate = useNavigate();
  if (!e) return <div className="wrap"><h2>Event not found</h2><Link className="btn" to="/">Back to home</Link></div>;
  const fee = 2.5;
  const buyTickets = () => {
    const order = {
      reference: `TB-${Date.now().toString(36).toUpperCase()}`,
      eventId: e.id,
      quantity: qty,
      total: Number(((e.price + fee) * qty).toFixed(2)),
      purchasedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(ticketStorageKey(registeredUser.email), JSON.stringify([order, ...readTicketOrders(registeredUser.email)]));
      setDone(order);
      setPurchaseError("");
    } catch {
      setPurchaseError("Tickets could not be saved. Check your browser storage and try again.");
    }
  };
  return (
    <div className="wrap detail">
      <div><div className="art" style={{ background: e.art }}>{e.image && <img className="event-art-image" src={e.image} alt="" />}</div><div className="tag">{e.cat}</div><h1>{e.title}</h1><p className="mute">{e.date} · {e.venue}, {e.city}</p></div>
      <aside className="box"><h2 style={{ marginTop: 0 }}>Get tickets</h2>
        {["General", "Premium"].map((t, n) => <div className="row" key={t}><span>{t}<div className="mute">${e.price * (n + 1)} each</div></span><span className="mono">${e.price * (n + 1)}</span></div>)}
        <div className="row"><span>Quantity</span><span className="qty"><button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Fewer">−</button>{qty}<button onClick={() => setQty(Math.min(8, qty + 1))} aria-label="More">+</button></span></div>
        <div className="row"><span>Total (incl. ${fee} fee each)</span><strong className="mono">${((e.price + fee) * qty).toFixed(2)}</strong></div>
        {done ? (
          <div className="purchase-confirmation">
            <p className="tag">Tickets reserved. Order {done.reference}</p>
            <button className="btn" onClick={() => navigate("/dashboard")}>View my tickets</button>
          </div>
        ) : <button className="btn" onClick={buyTickets}>Buy tickets</button>}
        {purchaseError && <p className="auth-notice" role="alert">{purchaseError}</p>}
      </aside>
    </div>
  );
}

function SignInPage({ registeredUser, onRegister }) {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState(registeredUser?.email || "");
  const [name, setName] = useState(registeredUser?.name || "");
  const [userLocation, setUserLocation] = useState(registeredUser?.location || "");
  const [profilePicture, setProfilePicture] = useState(registeredUser?.profilePicture || "");
  const [notice, setNotice] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const continueWithEmail = (event) => {
    event.preventDefault();
    setNotice("");
    setStep("register");
  };
  const chooseProfilePicture = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setNotice("Choose an image file for your profile picture.");
      event.target.value = "";
      return;
    }
    if (file.size > 1_000_000) {
      setNotice("Choose an image smaller than 1 MB.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setProfilePicture(reader.result);
        setNotice("");
      }
    };
    reader.onerror = () => setNotice("This image could not be opened. Choose another file.");
    reader.readAsDataURL(file);
  };
  const submitRegistration = (event) => {
    event.preventDefault();
    if (!profilePicture) {
      setNotice("Choose a profile picture to finish creating your account.");
      return;
    }
    const account = { name: name.trim(), email: email.trim().toLowerCase(), location: userLocation, profilePicture };
    try {
      localStorage.setItem("stagekit.registeredUser", JSON.stringify(account));
      onRegister(account);
      navigate("/dashboard", { replace: true });
    } catch {
      setNotice("Registration could not be saved. Check your browser storage settings and try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-layout">
        <aside className="auth-aside">
          <Link to="/" className="auth-logo">TicketBubby<span> / LIVE EVENTS</span></Link>
          <div className="auth-welcome">
            <p className="auth-eyebrow">YOUR NIGHT, YOUR WAY</p>
            <h1>Welcome to the live.</h1>
            <p>Discover events, keep your plans together, and get back to the moments that matter.</p>
          </div>
          <p className="auth-aside-note">Find your people. Feel the moment.</p>
        </aside>

        <section className="auth-content" aria-labelledby="auth-title">
          <div className="auth-form">
            <Link to="/" className="auth-back">← <span>Back to events</span></Link>
            {registeredUser ? (
              <>
                <h2 id="auth-title">Welcome, {registeredUser.name}</h2>
                <p className="auth-description">Your account is ready.</p>
                <button className="auth-submit" type="button" onClick={() => navigate("/dashboard", { replace: true })}>Open your dashboard</button>
              </>
            ) : step === "email" ? (
              <>
                <h2 id="auth-title">Sign in or create account</h2>
                <p className="auth-description">Enter your email address to continue.</p>
                <form onSubmit={continueWithEmail}>
                  <label htmlFor="auth-email">Email address</label>
                  <input id="auth-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
                  <button className="auth-submit" type="submit">Continue</button>
                </form>
              </>
            ) : (
              <>
                <h2 id="auth-title">Create your account</h2>
                <p className="auth-description">Registering with <strong>{email}</strong>. <button type="button" className="auth-inline" onClick={() => { setStep("email"); setNotice(""); }}>Edit</button></p>
                <form onSubmit={submitRegistration}>
                  <label htmlFor="auth-name">Full name</label>
                  <input id="auth-name" autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} />
                  <label htmlFor="auth-location">Your city</label>
                  <select id="auth-location" required value={userLocation} onChange={(event) => setUserLocation(event.target.value)}>
                    <option value="">Choose a city</option>
                    {cities.map((city) => <option key={city} value={city}>{city}</option>)}
                  </select>
                  <label htmlFor="auth-profile-picture">Profile picture</label>
                  <input id="auth-profile-picture" type="file" accept="image/*" required onChange={chooseProfilePicture} />
                  {profilePicture && <img className="auth-photo-preview" src={profilePicture} alt="Profile picture preview" />}
                  <button className="auth-submit" type="submit">Create account</button>
                </form>
              </>
            )}
            {notice && <p className="auth-notice" role="status">{notice}</p>}
            <p className="auth-terms">By continuing, you agree to TicketBubby’s <a href="#terms">Terms of Use</a> and acknowledge the <a href="#privacy">Privacy Policy</a>.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function Dashboard({ registeredUser, orders, onLogout }) {
  return (
    <section className="wrap dashboard">
      <div className="dashboard-heading">
        <div>
          <p className="dashboard-eyebrow">ACCOUNT DASHBOARD</p>
          <h1>Welcome, {registeredUser.name}</h1>
          <p className="mute">Your TicketBubby profile information.</p>
        </div>
        <div className="dashboard-actions">
          <Link to="/" className="btn">Explore events</Link>
          <button type="button" className="dashboard-logout" onClick={onLogout}>Log out</button>
        </div>
      </div>
      <section className="dashboard-profile" aria-labelledby="profile-heading">
        <h2 id="profile-heading">Profile information</h2>
        {registeredUser.profilePicture && <img className="dashboard-avatar" src={registeredUser.profilePicture} alt={`${registeredUser.name}'s profile`} />}
        <dl className="dashboard-details">
          <div><dt>Full name</dt><dd>{registeredUser.name}</dd></div>
          <div><dt>Email address</dt><dd>{registeredUser.email}</dd></div>
          <div><dt>City</dt><dd>{registeredUser.location}</dd></div>
        </dl>
      </section>
      <section className="dashboard-orders" aria-labelledby="tickets-heading">
        <div className="dashboard-section-heading">
          <div><p className="dashboard-eyebrow">YOUR ACTIVITY</p><h2 id="tickets-heading">My tickets</h2></div>
          <Link to="/search" className="dashboard-text-link">Find events</Link>
        </div>
        {orders.length ? (
          <div className="dashboard-order-list">
            {orders.map((order) => {
              const event = events.find((item) => item.id === order.eventId);
              if (!event) return null;
              return (
                <article className="dashboard-order" key={order.reference}>
                  <div className="dashboard-order-art" style={{ background: event.art }} />
                  <div className="dashboard-order-info">
                    <h3>{event.title}</h3>
                    <p>{event.date} · {event.venue}, {event.city}</p>
                    <p>{order.quantity} {order.quantity === 1 ? "ticket" : "tickets"} · Order {order.reference}</p>
                  </div>
                  <div className="dashboard-order-total"><strong>${order.total.toFixed(2)}</strong><Link to={`/event/${event.id}`}>Event details</Link></div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="dashboard-empty"><p>You haven’t reserved any tickets yet.</p><Link className="btn" to="/search">Browse events</Link></div>
        )}
      </section>
    </section>
  );
}

function Footer() {
  const [open, setOpen] = useState("");
  return (
    <footer className="foot" aria-label="TicketBubby Footer Navigation"><div className="wrap">
      <div className="fgrid">
        <div>
          <div className="logo">TicketBubby</div>
          <h2>Let's connect</h2><ul className="inl social-icons">{["Facebook", "X", "Blog", "YouTube", "Instagram"].map((s) => <li key={s}><a href="#social" aria-label={s}><img src={homeImages.social[s]} alt={s} loading="lazy" /></a></li>)}</ul>
          <h2>Download Our Apps</h2><ul className="inl"><li><a className="store" href="#app"><img src={homeImages.stores["App Store"]} alt="Download on the App Store" loading="lazy" /></a></li><li><a className="store" href="#app"><img src={homeImages.stores["Google Play"]} alt="Get it on Google Play" loading="lazy" /></a></li></ul>
          <p className="mute">By continuing past this page, you agree to our <a href="#terms" className="u">terms of use</a></p>
        </div>
        <div>{Object.entries(footerCols).map(([h, ls]) => (
          <div key={h} className="acc"><h2><button aria-expanded={open === h} onClick={() => setOpen(open === h ? "" : h)}>{h} <span>{open === h ? "▴" : "▾"}</span></button></h2>
            {open === h && <ul>{ls.map((l) => <li key={l}><a href="#x">{l}</a></li>)}</ul>}</div>
        ))}</div>
      </div>
      <div className="footer-brands" aria-label="Payment and partner brands">
        <img src={homeImages.payments.PayPal} alt="PayPal" loading="lazy" />
        <img src={homeImages.payments.Citi} alt="Citi" loading="lazy" />
      </div>
      <hr />
      <ul className="inl pol">{["Our Policies", "Privacy Policy", "Cookie Policy"].map((l) => <li key={l}><a href="#x">{l}</a></li>)}<li><button className="linklike">Manage my cookies and ad choices</button></li></ul>
      <p className="mute">© 1999-2026 TicketBubby. All rights reserved.</p>
    </div></footer>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [registeredUser, setRegisteredUser] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(accountStorageKey));
      return saved?.name && saved?.email && saved?.location ? saved : null;
    } catch {
      return null;
    }
  });
  const logout = () => {
    try {
      localStorage.removeItem(accountStorageKey);
    } catch {
      // Keep the app navigable even when browser storage is unavailable.
    }
    setRegisteredUser(null);
    navigate("/signin", { replace: true });
  };
  const isAuthPage = pathname === "/signin";
  useEffect(() => { if (location.hash === "#cities") document.getElementById("cities")?.scrollIntoView(); }, []);
  if (!registeredUser && !isAuthPage) return <Navigate to="/signin" replace state={{ from: location }} />;
  return (
    <>
      {!isAuthPage && <Header registeredUser={registeredUser} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/event/:id" element={<EventPage registeredUser={registeredUser} />} />
          <Route path="/signin" element={<SignInPage registeredUser={registeredUser} onRegister={setRegisteredUser} />} />
          <Route path="/dashboard" element={<Dashboard registeredUser={registeredUser} orders={registeredUser ? readTicketOrders(registeredUser.email) : []} onLogout={logout} />} />
          <Route path="*" element={<div className="wrap"><h2>Page not found</h2><Link className="btn" to="/">Back to home</Link></div>} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
}
