import { useEffect, useState } from 'react'

const MAPS_URL = 'https://maps.google.com/?cid=17494163896465365060' // placeholder, da confermare
const PHONE_DISPLAY = '351 967 7743'
const PHONE_TEL = 'tel:+393519677743'
const WHATSAPP_URL = 'https://wa.me/393519677743?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento'

const NAV = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#galleria', label: 'Galleria' },
  { href: '#prezzi', label: 'Prezzi' },
  { href: '#faq', label: 'FAQ' },
  { href: '#recensioni', label: 'Recensioni' },
  { href: '#contatti', label: 'Contatti' },
]

const SERVICES = [
  { name: 'Taglio', desc: 'Taglio personalizzato in base a forma del viso e stile, finitura di precisione.' },
  { name: 'Barba', desc: 'Modellatura e cura della barba con prodotti dedicati.' },
  { name: 'Rasoio tradizionale', desc: 'Rasatura a lama con panno caldo, per un risultato perfetto.' },
  { name: 'Taglio + barba', desc: 'Il servizio completo: viene con un taglio, esce con uno stile.' },
]

// Listino di ESEMPIO: prezzi finti, da confermare col salone
const PREZZI = [
  { name: 'Taglio', price: '18' },
  { name: 'Barba', price: '12' },
  { name: 'Rasoio tradizionale', price: '20' },
  { name: 'Taglio + barba', price: '25' },
]

// FAQ di ESEMPIO: risposte da confermare col salone
const FAQS = [
  { q: 'Bisogna prenotare?', a: 'Consigliamo di prenotare per evitare attese: puoi chiamare o scriverci su WhatsApp.' },
  { q: 'Accettate carte e pagamenti digitali?', a: 'Sì, accettiamo contanti, carte e pagamenti contactless.' },
  { q: 'Fate tagli anche per bambini?', a: 'Sì, tagliamo grandi e piccoli, anche i più piccoli.' },
  { q: 'Dove siete?', a: 'In Via G. Marconi 69 a Ponte San Nicolò (PD). Parcheggio facile nei dintorni.' },
]

// Galleria: 6 foto di esempio, da sostituire con le foto vere del salone
const GALLERY = [
  { src: './gallery/gallery-1.jpg', alt: 'Rasatura con rasoio tradizionale' },
  { src: './gallery/gallery-2.jpg', alt: 'Taglio in corso' },
  { src: './gallery/gallery-3.jpg', alt: 'Interno del salone' },
  { src: './gallery/gallery-4.jpg', alt: 'Panno caldo' },
  { src: './gallery/gallery-5.jpg', alt: 'Gli strumenti del barbiere' },
  { src: './gallery/gallery-6.jpg', alt: 'Styling finale allo specchio' },
  { src: './gallery/gallery-7.jpg', alt: 'Sapone e pennello' },
  { src: './gallery/gallery-8.jpg', alt: 'Zona attesa' },
  { src: './gallery/gallery-9.jpg', alt: 'Rifinitura del taglio' },
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
          <a className="btn btn-ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Scrivici su WhatsApp</a>
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

function Prices() {
  return (
    <section className="section" id="prezzi">
      <div className="section-head">
        <p className="eyebrow">Prezzi</p>
        <h2>Il listino</h2>
      </div>
      <div className="prezzi">
        {PREZZI.map((p) => (
          <div className="prezzo-row" key={p.name}>
            <span>{p.name}</span>
            <span className="prezzo-dots" aria-hidden="true" />
            <span className="prezzo-val">€ {p.price}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="section-head">
        <p className="eyebrow">FAQ</p>
        <h2>Domande frequenti</h2>
      </div>
      <div className="faq">
        {FAQS.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  const [open, setOpen] = useState(-1)
  const [visibili, setVisibili] = useState(6) // quante foto mostrare prima del bottone
  useEffect(() => {
    const onKey = (e) => {
      if (open < 0) return
      if (e.key === 'Escape') setOpen(-1)
      else if (e.key === 'ArrowRight') setOpen((open + 1) % GALLERY.length)
      else if (e.key === 'ArrowLeft') setOpen((open + GALLERY.length - 1) % GALLERY.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return (
    <section className="section" id="galleria">
      <div className="section-head">
        <p className="eyebrow">Galleria</p>
        <h2>Il salone, dal vivo</h2>
      </div>
      <div className="gallery-grid">
        {GALLERY.slice(0, visibili).map((g, i) => (
          <button key={g.src} className="gallery-item" onClick={() => setOpen(i)} aria-label={g.alt}>
            <img src={g.src} alt={g.alt} loading="lazy" />
          </button>
        ))}
      </div>
      {visibili < GALLERY.length && (
        <div className="gallery-more">
          <button className="btn btn-ghost" onClick={() => setVisibili(v => v + 6)}>Mostra altre foto</button>
        </div>
      )}
      {open >= 0 && (
        <div className="lightbox" onClick={() => setOpen(-1)}>
          <button className="lightbox-close" aria-label="Chiudi" onClick={() => setOpen(-1)}>×</button>
          <img src={GALLERY[open].src} alt={GALLERY[open].alt} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption" onClick={(e) => e.stopPropagation()}>{GALLERY[open].alt}</p>
          <div className="lightbox-nav" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Precedente" onClick={() => setOpen((open + GALLERY.length - 1) % GALLERY.length)}>‹</button>
            <button aria-label="Successiva" onClick={() => setOpen((open + 1) % GALLERY.length)}>›</button>
          </div>
        </div>
      )}
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
          <p><a className="link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Scrivici su WhatsApp →</a></p>
          <p className="muted">Chiamaci o scrivici, rispondiamo in orario di apertura.</p>
        </article>
        <article className="card">
          <h3>Orari</h3>
          <p>Mar – Ven: 8.30 – 12.30 / 15.00 – 21.30<br />Sab: 8.30 – 12.30 / 15.00 – 20.00<br />Lun e Dom: chiuso</p>
        </article>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <p className="footer-cta-title">Ti piace questo sito?</p>
        <p className="footer-cta-text">Prenotalo a prezzo scontato fino al 31/12/2026.<br />
          <a className="link" href="tel:+393472545771">347 254 5771</a> &middot; <a className="link" href="mailto:paolocattani0501@gmail.com">paolocattani0501@gmail.com</a>
        </p>
      </div>
      <p className="brand">BEAR<span className="brand-sub"> Barber Shop</span></p>
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
        <Gallery />
        <Prices />
        <Faq />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
