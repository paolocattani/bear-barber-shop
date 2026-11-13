const MAPS_URL = 'https://maps.google.com/?cid=17494163896465365060' // placeholder, da confermare
const PHONE_DISPLAY = '351 967 7743'
const PHONE_TEL = 'tel:+393519677743'

const NAV = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#contatti', label: 'Contatti' },
]

const SERVICES = [
  { name: 'Taglio', desc: 'Taglio personalizzato in base a forma del viso e stile, finitura di precisione.' },
  { name: 'Barba', desc: 'Modellatura e cura della barba con prodotti dedicati.' },
  { name: 'Rasoio tradizionale', desc: 'Rasatura a lama con panno caldo, per un risultato perfetto.' },
  { name: 'Taglio + barba', desc: 'Il servizio completo: viene con un taglio, esce con uno stile.' },
]

function Badge() {
  return (
    <p className="rating">
      <span className="stars" aria-hidden="true">★★★★★</span>
      <strong>5.0</strong> su Google · 813 recensioni
    </p>
  )
}

function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">BEAR<span className="brand-sub"> Barber Shop</span></a>
      <nav className="nav-links">
        {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <a className="btn btn-gold" href={PHONE_TEL}>Prenota</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src="./hero.png" alt="Interno del salone: sedia da barbiere in pelle e luce calda" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Barbiere · Ponte San Nicolò</p>
        <h1>Il taglio giusto, <em>ogni volta</em>.</h1>
        <Badge />
        <div className="hero-cta">
          <a className="btn btn-gold" href={PHONE_TEL}>Chiama per prenotare</a>
          <a className="btn btn-ghost" href={MAPS_URL} target="_blank" rel="noreferrer">Trovasi su Google Maps</a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="servizi">
      <div className="section-head">
        <p className="eyebrow">Servizi</p>
        <h2>Poco, ma fatto bene</h2>
      </div>
      <div className="grid">
        {SERVICES.map((s) => (
          <article className="card" key={s.name}>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="section reviews" id="recensioni">
      <img className="tools-img" src="./tools.png" alt="Rasoio, forbici e pennello da barbiere su tavolo di legno" />
      <div className="reviews-text">
        <p className="eyebrow">Recensioni</p>
        <h2>813 recensioni a 5 stelle.<br />I clienti parlano al posto nostro.</h2>
        <p className="muted">Il punteggio più alto tra i barbieri della zona, visibile sulla scheda Google del salone.</p>
        <a className="btn btn-ghost" href={MAPS_URL} target="_blank" rel="noreferrer">Leggi le recensioni</a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contatti">
      <div className="section-head">
        <p className="eyebrow">Contatti</p>
        <h2>Passa, chiamaci, prenota</h2>
      </div>
      <div className="grid contact-grid">
        <article className="card">
          <h3>Dove siamo</h3>
          <p>Via G. Marconi 69<br />35020 Ponte San Nicolò (PD)</p>
          <a className="link" href={MAPS_URL} target="_blank" rel="noreferrer">Apri su Google Maps →</a>
        </article>
        <article className="card">
          <h3>Telefono</h3>
          <p><a className="link" href={PHONE_TEL}>{PHONE_DISPLAY}</a></p>
          <p className="muted">Chiamaci o scrivici su WhatsApp.</p>
        </article>
        <article className="card">
          <h3>Orari</h3>
          <p>Mar – Ven: 8.30 – 12.30 / 15 – 21.30<br />Sab: 8.30 – 12.30 / 15 – 20<br />Lun e Dom: chiuso</p>
          <p className="muted small">Orari dalla scheda Google, da confermare col salone.</p>
        </article>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p className="brand">BEAR<span className="brand-sub"> Barber Shop</span></p>
      <p className="muted small">Demo di anteprima: testi, servizi e orari sono esempi da confermare con il salone prima della pubblicazione.</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
