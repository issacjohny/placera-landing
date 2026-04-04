'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

/* ── scroll-reveal hook (deferred until mounted) ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const init = useCallback(() => {
    const el = ref.current
    if (!el || visible) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect() } }, { threshold: 0.1, rootMargin: '50px' })
    io.observe(el)
  }, [visible])
  return { ref, visible, init }
}

export default function LandingPage() {
  /* ── state ── */
  const [formData, setFormData] = useState({ name: '', email: '', college: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [m, setM] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredBtn, setHoveredBtn] = useState('')

  useEffect(() => {
    setMounted(true)
    const check = () => setM(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('resize', check); window.removeEventListener('scroll', onScroll) }
  }, [])

  /* ── reveal refs ── */
  const heroReveal = useReveal()
  const socialReveal = useReveal()
  const statsReveal = useReveal()
  const featReveal = useReveal()
  const stepsReveal = useReveal()
  const priceReveal = useReveal()
  const quoteReveal = useReveal()
  const contactReveal = useReveal()
  const ctaReveal = useReveal()

  /* init observers after mount (refs aren't attached until mounted=true renders the page) */
  useEffect(() => {
    if (!mounted) return
    // small delay to ensure DOM is painted
    const t = setTimeout(() => {
      heroReveal.init(); socialReveal.init(); statsReveal.init(); featReveal.init()
      stepsReveal.init(); priceReveal.init(); quoteReveal.init(); contactReveal.init(); ctaReveal.init()
    }, 50)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  /* ── contact form ── */
  async function handleSubmit() {
    if (!formData.name || !formData.email || !formData.college) { alert('Please fill in name, email and college name.'); return }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) })
      if (res.ok) { setSubmitted(true); setFormData({ name: '', email: '', college: '', interest: '', message: '' }) }
      else alert('Something went wrong. Please email us directly at johnydurai@gmail.com')
    } catch { alert('Something went wrong. Please email us directly at johnydurai@gmail.com') }
    setSubmitting(false)
  }

  /* ── data ── */
  const features = [
    { bg: '#E6F1FB', stroke: '#185FA5', title: 'Smart call queue', desc: 'Officers see exactly who to call every morning — ranked by priority and follow-up date.' },
    { bg: '#E8FAF3', stroke: '#085041', title: 'HR contact database', desc: 'Import all HR contacts from Excel in one click. Full call history for every contact.' },
    { bg: '#FAEEDA', stroke: '#633806', title: 'Outcome logging', desc: 'Log call results in 2 taps. Automatic follow-up reminders. Nothing falls through the cracks.' },
    { bg: '#EEEDFE', stroke: '#3C3489', title: 'Student pipeline', desc: 'Track every student from unplaced to offer accepted. See placement rate live.' },
    { bg: '#EAF3DE', stroke: '#27500A', title: 'Director analytics', desc: 'See officer activity, placement funnel, and sector breakdown at a glance.' },
    { bg: '#FAECE7', stroke: '#712B13', title: 'Excel / CSV import', desc: 'Bulk import hundreds of HR contacts and students from Excel files in seconds.' },
  ]

  const featureIcons = [
    <><rect x="3" y="3" width="14" height="14" rx="3"/><line x1="7" y1="7" x2="13" y2="7"/><line x1="7" y1="10" x2="13" y2="10"/><line x1="7" y1="13" x2="10" y2="13"/></>,
    <><circle cx="10" cy="7" r="3"/><path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6"/></>,
    <path d="M4 10l4 4 8-8"/>,
    <><rect x="3" y="10" width="4" height="7" rx="1"/><rect x="8" y="6" width="4" height="11" rx="1"/><rect x="13" y="3" width="4" height="14" rx="1"/></>,
    <><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 3"/></>,
    <><path d="M10 3v10M6 9l4 4 4-4"/><path d="M4 15h12"/></>,
  ]

  const steps = [
    { title: 'Sign up your college', desc: 'Enter college details and create a director account. Free trial starts immediately.' },
    { title: 'Import your HR contacts', desc: 'Upload your Excel sheet. Placera maps the columns automatically.' },
    { title: 'Add officers and students', desc: 'Create accounts for placement officers. Import your student batch.' },
    { title: 'Start placing students', desc: 'Officers log in, see their call queue, and track placements in real time.' },
  ]

  const plans = [
    {
      name: 'Starter', price: '\u20B936,000', sub: '/year', desc: 'For small placement cells — 3 users',
      features: ['Principal + Director + Coordinator', 'Unlimited HR contacts', 'Student pipeline', 'Director dashboard', 'Excel import', 'Email support'],
      cta: 'Start free trial', ctaStyle: 'outline' as const, badge: null,
    },
    {
      name: 'Professional', price: '\u20B972,000', sub: '/year', desc: 'For active placement teams — up to 9 users',
      features: ['Everything in Starter', 'Placement Officer + 6 Coordinators', 'Principal dashboard', 'Advanced analytics', 'Priority support', 'Up to ~9 users'],
      cta: 'Start free trial', ctaStyle: 'primary' as const, badge: 'Recommended',
    },
    {
      name: 'Enterprise', price: 'Custom', sub: '', desc: 'For large institutions with advanced needs',
      features: ['Everything in Professional', 'Unlimited users', 'Training Admin access', 'Student Login', 'AI Placement Predictions (Beta)', 'Dedicated support'],
      cta: 'Contact us', ctaStyle: 'beta' as const, badge: null,
    },
  ]

  const stats = [
    { val: '500+', label: 'Students placed' },
    { val: '15+', label: 'Colleges onboarded' },
    { val: '10,000+', label: 'Interactions tracked' },
  ]

  /* ── helpers ── */
  const reveal = (v: boolean, delay = 0): React.CSSProperties => ({
    opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  })

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', fontSize: '15px', background: '#F4F4F5',
    border: '1.5px solid #E4E4E7', borderRadius: '10px', color: '#0F0F0E', outline: 'none',
    fontFamily: 'system-ui', boxSizing: 'border-box', transition: 'border-color 0.15s, box-shadow 0.15s',
  }

  const Logo = ({ size = 32 }: { size?: number }) => (
    <div style={{ width: size, height: size, background: '#1D9E75', borderRadius: size * 0.25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
        <path d="M4 14 L9 4 L14 14"/><path d="M6.5 10 L11.5 10"/>
      </svg>
    </div>
  )

  /* ── loading state ── */
  if (!mounted) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui', color: '#1D9E75', fontSize: '16px', fontWeight: 500 }}>
      Loading Placera...
    </div>
  )

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#0F0F0E', background: '#ffffff', overflowX: 'hidden' }}>

      {/* ════════════ NAVBAR ════════════ */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: '56px',
        background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(12px) saturate(1.5)', WebkitBackdropFilter: 'blur(12px) saturate(1.5)',
        borderBottom: '1px solid rgba(0,0,0,0.06)', position: 'sticky', top: 0, zIndex: 100,
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.04)' : 'none', transition: 'box-shadow 0.3s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', maxWidth: 1120, margin: '0 auto', width: '100%', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Logo size={30} />
            <span style={{ fontSize: '17px', fontWeight: 700, color: '#0F0F0E', letterSpacing: '-0.01em' }}>Placera</span>
          </div>
          {m ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', color: '#0F0F0E' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? <><path d="M4 4l14 14M18 4L4 18"/></> : <><path d="M3 6h16M3 11h16M3 16h16"/></>}
              </svg>
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {['Features', 'Pricing', 'Contact'].map(item => (
                <span key={item} style={{ fontSize: '14px', color: '#52525B', padding: '7px 14px', cursor: 'pointer', fontWeight: 500, borderRadius: '6px', transition: 'background 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#F4F4F5')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  onClick={() => scrollTo(item.toLowerCase())}>
                  {item}
                </span>
              ))}
              <button style={{ fontSize: '13px', color: '#52525B', padding: '8px 16px', border: 'none', borderRadius: '8px', cursor: 'pointer', background: 'transparent', fontWeight: 500, marginLeft: '4px', transition: 'background 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F4F4F5')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                onClick={() => window.open('https://login.placera.in', '_blank')}>
                Sign in
              </button>
              <button style={{
                fontSize: '13px', fontWeight: 600, color: '#fff', padding: '9px 18px',
                background: hoveredBtn === 'nav-cta' ? '#178A66' : '#1D9E75',
                border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.15s',
                transform: hoveredBtn === 'nav-cta' ? 'scale(1.02)' : 'scale(1)',
              }}
                onMouseEnter={() => setHoveredBtn('nav-cta')} onMouseLeave={() => setHoveredBtn('')}
                onClick={() => window.open('https://login.placera.in/signup', '_blank')}>
                Start free trial
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ── mobile menu ── */}
      {menuOpen && m && (
        <div style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E4E4E7', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: '4px', position: 'sticky', top: '56px', zIndex: 99 }}>
          {['Features', 'Pricing', 'Contact'].map(item => (
            <span key={item} style={{ fontSize: '16px', color: '#0F0F0E', padding: '14px 0', cursor: 'pointer', borderBottom: '1px solid #F4F4F5', fontWeight: 500 }}
              onClick={() => { setMenuOpen(false); setTimeout(() => scrollTo(item.toLowerCase()), 100) }}>
              {item}
            </span>
          ))}
          <button style={{ marginTop: '10px', padding: '14px', background: '#1D9E75', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
            onClick={() => { setMenuOpen(false); window.open('https://login.placera.in/signup', '_blank') }}>
            Start free trial
          </button>
          <button style={{ marginTop: '8px', padding: '13px', background: '#fff', color: '#0F0F0E', border: '1px solid #E4E4E7', borderRadius: '10px', fontSize: '15px', cursor: 'pointer' }}
            onClick={() => { setMenuOpen(false); window.open('https://login.placera.in', '_blank') }}>
            Sign in
          </button>
        </div>
      )}

      {/* ════════════ HERO ════════════ */}
      <div ref={heroReveal.ref} style={{ padding: m ? '56px 20px 48px' : '100px 48px 80px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? '36px' : '56px', alignItems: 'center' }}>
          <div style={reveal(heroReveal.visible)}>
            {/* eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #1D9E75, #15B886) border-box',
              border: '1.5px solid transparent', fontSize: '12px', fontWeight: 600, padding: '5px 14px', borderRadius: '20px', marginBottom: '22px', color: '#085041',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1D9E75' }} />
              Built for Indian colleges
            </div>
            <h1 style={{ fontSize: m ? '36px' : '56px', fontWeight: 800, lineHeight: 1.1, marginBottom: '18px', color: '#0F0F0E', letterSpacing: '-0.04em' }}>
              The smarter way to{' '}
              <span style={{ background: 'linear-gradient(135deg, #1D9E75, #15B886)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                place your students
              </span>
            </h1>
            <p style={{ fontSize: m ? '16px' : '18px', color: '#52525B', lineHeight: 1.7, marginBottom: '30px', maxWidth: 460 }}>
              Placera gives Training and Placement Officers a complete platform to manage HR contacts, track placements, and close more offers — replacing Excel forever.
            </p>
            <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: '10px', marginBottom: '18px' }}>
              <button style={{
                fontSize: '16px', fontWeight: 600, color: '#fff', padding: '15px 28px',
                background: hoveredBtn === 'hero-cta' ? '#178A66' : '#1D9E75',
                border: 'none', borderRadius: '10px', cursor: 'pointer', width: m ? '100%' : 'auto',
                transition: 'all 0.15s', transform: hoveredBtn === 'hero-cta' ? 'scale(1.02)' : 'scale(1)',
                boxShadow: hoveredBtn === 'hero-cta' ? '0 4px 16px rgba(29,158,117,0.3)' : '0 2px 8px rgba(29,158,117,0.15)',
              }}
                onMouseEnter={() => setHoveredBtn('hero-cta')} onMouseLeave={() => setHoveredBtn('')}
                onClick={() => window.open('https://login.placera.in/signup', '_blank')}>
                Start free 30-day trial
              </button>
              <button style={{
                fontSize: '15px', color: '#0F0F0E', padding: '15px 28px', border: '1.5px solid #E4E4E7', borderRadius: '10px', cursor: 'pointer',
                background: hoveredBtn === 'hero-talk' ? '#F4F4F5' : '#fff', width: m ? '100%' : 'auto', transition: 'all 0.15s', fontWeight: 500,
              }}
                onMouseEnter={() => setHoveredBtn('hero-talk')} onMouseLeave={() => setHoveredBtn('')}
                onClick={() => scrollTo('contact')}>
                Talk to us
              </button>
            </div>
            <div style={{ fontSize: '13px', color: '#A1A1AA', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              {['No credit card', 'Setup in 5 minutes', 'Cancel anytime'].map((t, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  {i > 0 && <span style={{ color: '#E4E4E7' }}>|</span>}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#E8FAF3"/><path d="M5 8l2 2 4-4" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── hero mockup ── */}
          <div style={{
            ...reveal(heroReveal.visible, 200),
            background: '#F4F4F5', borderRadius: '18px', padding: '20px', border: '1px solid #E4E4E7',
            boxShadow: '0 24px 48px -12px rgba(0,0,0,0.08)', transform: heroReveal.visible ? (m ? 'none' : 'perspective(1200px) rotateY(-2deg)') : 'perspective(1200px) rotateY(-2deg) translateY(24px)',
            transition: 'opacity 0.6s ease 200ms, transform 0.8s ease 200ms',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#0F0F0E' }}>Today&apos;s call queue</span>
              <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: '#E8FAF3', color: '#085041', fontWeight: 600 }}>8 contacts</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '14px' }}>
              {[{ label: 'Calls today', val: '6', color: '#185FA5' }, { label: 'Pipeline', val: '23', color: '#27500A' }, { label: 'Placed', val: '31', color: '#633806' }].map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '12px', border: '1px solid #E4E4E7', textAlign: 'center' }}>
                  <div style={{ fontSize: '10px', color: '#A1A1AA', marginBottom: '4px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: s.color }}>{s.val}</div>
                </div>
              ))}
            </div>
            {[
              { av: 'SI', bg: '#FCEBEB', fg: '#A32D2D', name: 'Sneha Iyer', co: 'Infosys — HR Manager', dot: '#E24B4A' },
              { av: 'RN', bg: '#FAEEDA', fg: '#633806', name: 'Ramesh Nair', co: 'TCS — Campus Lead', dot: '#EF9F27' },
              { av: 'DP', bg: '#E6F1FB', fg: '#0C447C', name: 'Divya Pillai', co: 'Wipro — Recruiter', dot: '#378ADD' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '10px', padding: '11px 12px', border: '1px solid #E4E4E7', marginBottom: '6px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, flexShrink: 0 }}>{c.av}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#0F0F0E' }}>{c.name}</div>
                  <div style={{ fontSize: '12px', color: '#A1A1AA' }}>{c.co}</div>
                </div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.dot, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════ SOCIAL PROOF ════════════ */}
      <div ref={socialReveal.ref} style={{ borderTop: '1px solid #E4E4E7', borderBottom: '1px solid #E4E4E7', padding: '20px 24px', ...reveal(socialReveal.visible) }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: 1120, margin: '0 auto', flexWrap: 'wrap', justifyContent: m ? 'center' : 'flex-start' }}>
          <span style={{ fontSize: '12px', color: '#A1A1AA', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600, whiteSpace: 'nowrap' }}>Trusted by 5+ placement cells</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: m ? 'center' : 'flex-start' }}>
            {['GSB Tiruchirappalli', 'Anna University', 'PSG Tech', 'SRMVEC', 'KCT'].map(b => (
              <span key={b} style={{ fontSize: '12px', color: '#52525B', padding: '5px 14px', borderRadius: '20px', border: '1px solid #E4E4E7', background: '#fff', fontWeight: 500, whiteSpace: 'nowrap' }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════ STATS BAR ════════════ */}
      <div ref={statsReveal.ref} style={{ background: '#1D9E75', padding: m ? '36px 20px' : '44px 48px', ...reveal(statsReveal.visible) }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: m ? 'column' : 'row', alignItems: 'center', justifyContent: 'center', gap: m ? '24px' : '0' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, position: 'relative' }}>
              {!m && i > 0 && (
                <div style={{ position: 'absolute', left: 0, top: '10%', height: '80%', width: '1px', background: 'rgba(255,255,255,0.2)' }} />
              )}
              <div style={{ fontSize: m ? '32px' : '36px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{s.val}</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════ FEATURES ════════════ */}
      <div id="features" ref={featReveal.ref} style={{ padding: m ? '64px 20px' : '96px 48px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px', ...reveal(featReveal.visible) }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Features</div>
          <div style={{ fontSize: m ? '28px' : '40px', fontWeight: 700, color: '#0F0F0E', marginBottom: '12px', letterSpacing: '-0.02em' }}>Everything your placement cell needs</div>
          <div style={{ fontSize: m ? '16px' : '18px', color: '#52525B', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>Built specifically for TPOs — not a generic CRM</div>
        </div>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: '14px' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              display: 'flex', gap: '16px', alignItems: 'flex-start',
              border: '1.5px solid #E4E4E7', borderRadius: '16px', padding: m ? '20px' : '24px 28px', background: '#fff',
              transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'default',
              ...reveal(featReveal.visible, i * 80),
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(29,158,117,0.3)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E4E4E7'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: f.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke={f.stroke} strokeWidth="1.8" strokeLinecap="round">{featureIcons[i]}</svg>
              </div>
              <div>
                <div style={{ fontSize: '17px', fontWeight: 600, color: '#0F0F0E', marginBottom: '6px', letterSpacing: '-0.01em' }}>{f.title}</div>
                <div style={{ fontSize: '15px', color: '#52525B', lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════ HOW IT WORKS ════════════ */}
      <div ref={stepsReveal.ref} style={{ padding: m ? '64px 20px' : '96px 48px', background: '#F4F4F5' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px', ...reveal(stepsReveal.visible) }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>How it works</div>
          <div style={{ fontSize: m ? '28px' : '40px', fontWeight: 700, color: '#0F0F0E', marginBottom: '12px', letterSpacing: '-0.02em' }}>Up and running in 30 minutes</div>
          <div style={{ fontSize: m ? '16px' : '18px', color: '#52525B', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>No technical knowledge needed</div>
        </div>

        {m ? (
          /* mobile: vertical cards */
          <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#fff', borderRadius: '14px', padding: '20px', border: '1px solid #E4E4E7', ...reveal(stepsReveal.visible, i * 80) }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#0F0F0E', marginBottom: '4px' }}>{step.title}</div>
                  <div style={{ fontSize: '15px', color: '#52525B', lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* desktop: horizontal timeline */
          <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative' }}>
            {/* connecting line */}
            <div style={{ position: 'absolute', top: '20px', left: '60px', right: '60px', height: '2px', background: '#C5F0DE', zIndex: 0 }}>
              <div style={{ height: '100%', background: '#1D9E75', transition: 'width 1s ease', width: stepsReveal.visible ? '100%' : '0%' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', position: 'relative', zIndex: 1 }}>
              {steps.map((step, i) => (
                <div key={i} style={{ textAlign: 'center', ...reveal(stepsReveal.visible, i * 120) }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: '#fff', margin: '0 auto 16px', boxShadow: '0 0 0 4px #F4F4F5, 0 0 0 6px #C5F0DE' }}>{i + 1}</div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#0F0F0E', marginBottom: '6px' }}>{step.title}</div>
                  <div style={{ fontSize: '14px', color: '#52525B', lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ════════════ PRICING ════════════ */}
      <div id="pricing" ref={priceReveal.ref} style={{ padding: m ? '64px 20px' : '96px 48px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px', ...reveal(priceReveal.visible) }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Pricing</div>
          <div style={{ fontSize: m ? '28px' : '40px', fontWeight: 700, color: '#0F0F0E', marginBottom: '12px', letterSpacing: '-0.02em' }}>Simple, transparent pricing</div>
          <div style={{ fontSize: m ? '16px' : '18px', color: '#52525B', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>Start free. Pay only when you are ready.</div>
        </div>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: '16px', alignItems: 'start' }}>
          {plans.map((plan, i) => {
            const isPrimary = plan.ctaStyle === 'primary'
            const isBeta = plan.ctaStyle === 'beta'
            return (
              <div key={i} style={{
                border: isPrimary ? '2px solid #1D9E75' : isBeta ? '2px dashed #A1A1AA' : '1.5px solid #E4E4E7',
                borderRadius: '18px', padding: '28px 24px', position: 'relative', background: '#fff',
                transform: isPrimary && !m ? 'scale(1.03)' : 'none',
                boxShadow: isPrimary ? '0 8px 32px rgba(29,158,117,0.12)' : 'none',
                ...reveal(priceReveal.visible, i * 100),
              }}>
                {plan.badge && (
                  <div style={{
                    position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)',
                    background: isPrimary ? '#1D9E75' : '#52525B', color: '#fff',
                    fontSize: '11px', fontWeight: 700, padding: '4px 16px', borderRadius: '20px', whiteSpace: 'nowrap',
                  }}>
                    {plan.badge}
                  </div>
                )}
                <div style={{ fontSize: '13px', fontWeight: 600, color: isPrimary ? '#1D9E75' : '#A1A1AA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{plan.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontSize: isBeta ? '28px' : '40px', fontWeight: 800, color: '#0F0F0E', letterSpacing: '-0.02em' }}>{plan.price}</span>
                  {plan.sub && <span style={{ fontSize: '15px', color: '#A1A1AA', fontWeight: 500 }}>{plan.sub}</span>}
                </div>
                {!isBeta && plan.sub && <div style={{ fontSize: '13px', color: '#A1A1AA', marginBottom: '4px' }}>{plan.name === 'Starter' ? '\u20B93,000' : '\u20B96,000'}/mo billed annually</div>}
                <div style={{ fontSize: '14px', color: '#52525B', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #F4F4F5' }}>{plan.desc}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#52525B' }}>
                      <div style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        background: isPrimary ? '#1D9E75' : '#E8FAF3',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '11px', color: isPrimary ? '#fff' : '#1D9E75', flexShrink: 0, fontWeight: 700,
                      }}>✓</div>
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => isBeta ? scrollTo('contact') : window.open('https://login.placera.in/signup', '_blank')}
                  style={{
                    width: '100%', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
                    border: isPrimary ? 'none' : '1.5px solid #E4E4E7',
                    background: isPrimary ? '#1D9E75' : '#fff', color: isPrimary ? '#fff' : '#0F0F0E',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { if (isPrimary) { e.currentTarget.style.background = '#178A66'; e.currentTarget.style.transform = 'scale(1.02)' } else { e.currentTarget.style.background = '#F4F4F5' } }}
                  onMouseLeave={e => { if (isPrimary) { e.currentTarget.style.background = '#1D9E75'; e.currentTarget.style.transform = 'scale(1)' } else { e.currentTarget.style.background = '#fff' } }}>
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>
        <p style={{ textAlign: 'center', fontSize: '13px', color: '#A1A1AA', marginTop: '20px' }}>All plans include a 30-day free trial. No credit card required.</p>
      </div>

      {/* ════════════ TESTIMONIAL ════════════ */}
      <div ref={quoteReveal.ref} style={{ padding: m ? '64px 20px' : '80px 48px', background: '#F4F4F5' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', ...reveal(quoteReveal.visible) }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ marginBottom: '20px' }}>
            <path d="M10 25c0-5.5 4-10 9-12l1.5 2.5C16.5 17.5 15 20 15 22h4v8H10V25zm15 0c0-5.5 4-10 9-12l1.5 2.5C31.5 17.5 30 20 30 22h4v8H25V25z" fill="#C5F0DE"/>
          </svg>
          <p style={{ fontSize: m ? '20px' : '24px', color: '#0F0F0E', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px', fontWeight: 500 }}>
            &ldquo;Placera replaced 6 Excel sheets and 3 WhatsApp groups for our placement cell. Our officers now spend time calling HRs, not updating spreadsheets.&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E8FAF3', color: '#085041', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700 }}>SD</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#0F0F0E' }}>Dr. S. Dhanapal</div>
              <div style={{ fontSize: '13px', color: '#A1A1AA' }}>Director, GSB Tiruchirappalli</div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════ CONTACT ════════════ */}
      <div id="contact" ref={contactReveal.ref} style={{ padding: m ? '64px 20px' : '96px 48px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px', ...reveal(contactReveal.visible) }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Contact</div>
          <div style={{ fontSize: m ? '28px' : '40px', fontWeight: 700, color: '#0F0F0E', marginBottom: '12px', letterSpacing: '-0.02em' }}>Get in touch with us</div>
          <div style={{ fontSize: m ? '16px' : '18px', color: '#52525B', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>Questions about Placera? Want a demo? We respond within 24 hours.</div>
        </div>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: '36px', alignItems: 'start', ...reveal(contactReveal.visible, 100) }}>
          <div>
            <p style={{ fontSize: '16px', color: '#52525B', lineHeight: 1.7, marginBottom: '28px' }}>
              Whether you want a product demo, have questions about pricing, or need help getting started — we are here to help.
            </p>
            {[
              { label: 'Email', val: 'johnydurai@gmail.com' },
              { label: 'Response time', val: 'Within 24 hours' },
              { label: 'Location', val: 'Tiruchirappalli, Tamil Nadu' },
              { label: 'Working hours', val: 'Mon\u2013Sat, 9am\u20136pm IST' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#E8FAF3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1D9E75' }} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#A1A1AA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em', marginBottom: '2px' }}>{c.label}</div>
                  <div style={{ fontSize: '15px', color: '#0F0F0E', fontWeight: 500 }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', border: '1.5px solid #E4E4E7', borderRadius: '18px', padding: m ? '22px' : '28px', boxShadow: '0 8px 32px rgba(0,0,0,0.04)' }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#0F0F0E', marginBottom: '22px' }}>Send us a message</div>
            <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
              <div>
                <label style={{ fontSize: '13px', color: '#52525B', display: 'block', marginBottom: '6px', fontWeight: 500 }}>Your name</label>
                <input style={inputStyle} type="text" placeholder="Dr. S. Dhanapal" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                  onFocus={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(29,158,117,0.1)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#E4E4E7'; e.currentTarget.style.boxShadow = 'none' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: '#52525B', display: 'block', marginBottom: '6px', fontWeight: 500 }}>Email</label>
                <input style={inputStyle} type="email" placeholder="you@college.ac.in" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                  onFocus={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(29,158,117,0.1)' }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#E4E4E7'; e.currentTarget.style.boxShadow = 'none' }} />
              </div>
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '13px', color: '#52525B', display: 'block', marginBottom: '6px', fontWeight: 500 }}>College name</label>
              <input style={inputStyle} type="text" placeholder="Government School of Business" value={formData.college} onChange={e => setFormData({ ...formData, college: e.target.value })}
                onFocus={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(29,158,117,0.1)' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#E4E4E7'; e.currentTarget.style.boxShadow = 'none' }} />
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '13px', color: '#52525B', display: 'block', marginBottom: '6px', fontWeight: 500 }}>I am interested in</label>
              <select style={{ ...inputStyle, color: formData.interest ? '#0F0F0E' : '#A1A1AA' }} value={formData.interest} onChange={e => setFormData({ ...formData, interest: e.target.value })}
                onFocus={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(29,158,117,0.1)' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#E4E4E7'; e.currentTarget.style.boxShadow = 'none' }}>
                <option value="">Select an option</option>
                <option>Free trial — want to try Placera</option>
                <option>Demo — want a walkthrough</option>
                <option>Starter plan — ₹36,000/year</option>
                <option>Professional plan — ₹72,000/year</option>
                <option>Enterprise plan — custom pricing</option>
                <option>General enquiry</option>
              </select>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '13px', color: '#52525B', display: 'block', marginBottom: '6px', fontWeight: 500 }}>Message</label>
              <textarea style={{ ...inputStyle, resize: 'none', lineHeight: 1.5 }} rows={4} placeholder="Tell us about your college..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                onFocus={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(29,158,117,0.1)' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#E4E4E7'; e.currentTarget.style.boxShadow = 'none' }} />
            </div>
            <button onClick={handleSubmit} disabled={submitting}
              style={{
                width: '100%', padding: '15px', background: submitting ? '#9FE1CB' : '#1D9E75', color: '#fff',
                border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 700, cursor: submitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = '#178A66' }}
              onMouseLeave={e => { if (!submitting) e.currentTarget.style.background = '#1D9E75' }}>
              {submitting ? 'Sending...' : 'Send message'}
            </button>
            <div style={{ fontSize: '12px', color: '#A1A1AA', textAlign: 'center', marginTop: '10px' }}>We reply within 24 hours on working days</div>
            {submitted && (
              <div style={{ background: '#E8FAF3', border: '1.5px solid #1D9E75', borderRadius: '10px', padding: '14px', fontSize: '14px', color: '#085041', textAlign: 'center', marginTop: '12px', fontWeight: 500 }}>
                Message sent. We will get back to you within 24 hours.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ════════════ CTA BANNER ════════════ */}
      <div ref={ctaReveal.ref} style={{
        padding: m ? '64px 20px' : '100px 48px', textAlign: 'center',
        background: 'linear-gradient(135deg, #1D9E75 0%, #15B886 50%, #178A66 100%)',
        ...reveal(ctaReveal.visible),
      }}>
        <div style={{ fontSize: m ? '30px' : '44px', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Ready to transform your{m ? ' ' : <br />}placement cell?
        </div>
        <div style={{ fontSize: m ? '16px' : '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Join colleges across India using Placera to place more students, faster.
        </div>
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: '12px', justifyContent: 'center', marginBottom: '16px' }}>
          <button onClick={() => window.open('https://login.placera.in/signup', '_blank')}
            style={{
              fontSize: '16px', fontWeight: 700, color: '#1D9E75', padding: '16px 32px', background: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer',
              transition: 'all 0.15s', boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}>
            Start your free 30-day trial
          </button>
          <button onClick={() => scrollTo('contact')}
            style={{ fontSize: '15px', color: '#fff', padding: '16px 32px', border: '2px solid rgba(255,255,255,0.35)', borderRadius: '10px', cursor: 'pointer', background: 'transparent', fontWeight: 600, transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.background = 'transparent' }}>
            Talk to us
          </button>
        </div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>No credit card · Setup in 5 minutes · Cancel anytime</div>
      </div>

      {/* ════════════ FOOTER ════════════ */}
      <footer style={{ background: '#0F0F0E', padding: m ? '40px 20px' : '56px 48px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '2fr 1fr 1fr', gap: m ? '32px' : '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Logo size={28} />
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Placera</span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 320 }}>
              Smart placement management for Indian colleges. Helping TPOs place more students, faster.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Product</div>
            {[
              { label: 'Features', action: () => scrollTo('features') },
              { label: 'Pricing', action: () => scrollTo('pricing') },
              { label: 'Sign up', action: () => window.open('https://login.placera.in/signup', '_blank') },
              { label: 'Sign in', action: () => window.open('https://login.placera.in', '_blank') },
            ].map(l => (
              <div key={l.label} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '5px 0', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onClick={l.action}>
                {l.label}
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Company</div>
            {[
              { label: 'Contact', action: () => scrollTo('contact') },
              { label: 'Privacy policy', action: () => (window.location.href = '/privacy') },
              { label: 'Terms', action: () => (window.location.href = '/terms') },
            ].map(l => (
              <div key={l.label} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '5px 0', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onClick={l.action}>
                {l.label}
              </div>
            ))}
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '12px' }}>johnydurai@gmail.com</div>
          </div>
        </div>
        <div style={{ maxWidth: 1120, margin: '32px auto 0', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
          © 2026 Placera. All rights reserved.
        </div>
      </footer>

    </div>
  )
}
