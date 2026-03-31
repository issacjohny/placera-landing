'use client'
import { useState, useEffect } from 'react'

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', college: '', interest: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

async function handleSubmit() {
  if (!formData.name || !formData.email || !formData.college) {
    alert('Please fill in name, email and college name.')
    return
  }
  setSubmitting(true)
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (res.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', college: '', interest: '', message: '' })
    } else {
      alert('Something went wrong. Please email us directly at johnydurai@gmail.com')
    }
  } catch {
    alert('Something went wrong. Please email us directly at johnydurai@gmail.com')
  }
  setSubmitting(false)
}

  const features = [
    { icon: '#E6F1FB', stroke: '#185FA5', title: 'Smart call queue', desc: 'Officers see exactly who to call every morning — ranked by priority and follow-up date.' },
    { icon: '#E1F5EE', stroke: '#085041', title: 'HR contact database', desc: 'Import all HR contacts from Excel in one click. Full call history for every contact.' },
    { icon: '#FAEEDA', stroke: '#633806', title: 'Outcome logging', desc: 'Log call results in 2 taps. Automatic follow-up reminders. Nothing falls through the cracks.' },
    { icon: '#EEEDFE', stroke: '#3C3489', title: 'Student pipeline', desc: 'Track every student from unplaced to offer accepted. See placement rate live.' },
    { icon: '#EAF3DE', stroke: '#27500A', title: 'Director analytics', desc: 'See officer activity, placement funnel, and sector breakdown at a glance.' },
    { icon: '#FAECE7', stroke: '#712B13', title: 'Excel / CSV import', desc: 'Bulk import hundreds of HR contacts and students from Excel files in seconds.' },
  ]

  const steps = [
    { title: 'Sign up your college', desc: 'Enter college details and create a director account. 30-day free trial starts immediately.' },
    { title: 'Import your HR contacts', desc: 'Upload your Excel sheet. Placera maps the columns automatically.' },
    { title: 'Add officers and students', desc: 'Create accounts for placement officers. Import your student batch.' },
    { title: 'Start placing students', desc: 'Officers log in, see their call queue, and track placements in real time.' },
  ]

  const plans = [
    { name: 'Starter', price: '₹2,999', desc: 'For small colleges', features: ['Up to 3 officers', '500 HR contacts', 'Student pipeline', 'Director dashboard', 'Excel import', 'Email support'], pop: false },
    { name: 'Growth', price: '₹5,999', desc: 'For growing colleges', features: ['Up to 10 officers', 'Unlimited HR contacts', 'Everything in Starter', 'Principal dashboard', 'Bulk email (soon)', 'Priority support'], pop: true },
    { name: 'Campus', price: '₹12,999', desc: 'For large institutions', features: ['Unlimited officers', 'Unlimited everything', 'Everything in Growth', 'White label option', 'Custom domain', 'Dedicated support'], pop: false },
  ]

  const inputStyle = {
    width: '100%',
    padding: '11px 13px',
    fontSize: '15px',
    background: '#f8f9fc',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    color: '#1a1a18',
    outline: 'none',
    fontFamily: 'system-ui',
    boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    fontSize: '13px',
    color: '#555',
    display: 'block' as const,
    marginBottom: '6px',
    fontWeight: '500' as const,
  }

  const m = isMobile

  if (!mounted) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui', color: '#1D9E75', fontSize: '16px', fontWeight: '500' }}>
      Loading Placera...
    </div>
  )

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a18', background: '#ffffff', overflowX: 'hidden' as const }}>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', height: '60px', background: '#ffffff', borderBottom: '1px solid #f0f0f0', position: 'sticky' as const, top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', background: '#1D9E75', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 14 L9 4 L14 14"/><path d="M6.5 10 L11.5 10"/>
            </svg>
          </div>
          <span style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a18' }}>Placera</span>
        </div>
        {m ? (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', color: '#1a1a18' }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen
                ? <><path d="M4 4l14 14M18 4L4 18"/></>
                : <><path d="M3 6h16M3 11h16M3 16h16"/></>
              }
            </svg>
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {['Features', 'Pricing', 'Contact'].map(item => (
              <span key={item} style={{ fontSize: '14px', color: '#555', padding: '7px 14px', cursor: 'pointer' }}
                onClick={() => { const el = document.getElementById(item.toLowerCase()); el?.scrollIntoView({ behavior: 'smooth' }) }}>
                {item}
              </span>
            ))}
            <button style={{ fontSize: '13px', color: '#1a1a18', padding: '8px 16px', border: '1px solid #d0d0d0', borderRadius: '8px', cursor: 'pointer', background: '#fff', marginLeft: '8px' }}
              onClick={() => window.open('https://login.placera.in', '_blank')}>
              Sign in
            </button>
            <button style={{ fontSize: '13px', fontWeight: '600', color: '#fff', padding: '9px 18px', background: '#1D9E75', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
              onClick={() => window.open('https://login.placera.in/signup', '_blank')}>
              Start free trial
            </button>
          </div>
        )}
      </nav>

      {menuOpen && m && (
        <div style={{ background: '#ffffff', borderBottom: '1px solid #f0f0f0', padding: '12px 20px', display: 'flex', flexDirection: 'column' as const, gap: '4px', position: 'sticky' as const, top: '60px', zIndex: 99 }}>
          {['Features', 'Pricing', 'Contact'].map(item => (
            <span key={item} style={{ fontSize: '16px', color: '#1a1a18', padding: '12px 0', cursor: 'pointer', borderBottom: '1px solid #f8f8f8', fontWeight: '500' }}
              onClick={() => { setMenuOpen(false); setTimeout(() => { const el = document.getElementById(item.toLowerCase()); el?.scrollIntoView({ behavior: 'smooth' }) }, 100) }}>
              {item}
            </span>
          ))}
          <button style={{ marginTop: '10px', padding: '14px', background: '#1D9E75', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
            onClick={() => { setMenuOpen(false); window.open('https://login.placera.in/signup', '_blank') }}>
            Start free trial
          </button>
          <button style={{ marginTop: '8px', padding: '13px', background: '#fff', color: '#1a1a18', border: '1px solid #d0d0d0', borderRadius: '10px', fontSize: '15px', cursor: 'pointer' }}
            onClick={() => { setMenuOpen(false); window.open('https://login.placera.in', '_blank') }}>
            Sign in
          </button>
        </div>
      )}

      <div style={{ padding: m ? '48px 20px 40px' : '80px 48px 70px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? '32px' : '48px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E1F5EE', color: '#085041', fontSize: '12px', fontWeight: '600', padding: '5px 12px', borderRadius: '20px', marginBottom: '20px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1D9E75' }}></div>
              Built for Indian colleges
            </div>
            <h1 style={{ fontSize: m ? '34px' : '44px', fontWeight: '700', lineHeight: '1.18', marginBottom: '16px', color: '#1a1a18', letterSpacing: '-.3px' }}>
              The smarter way to{' '}
              <span style={{ color: '#1D9E75' }}>place your students</span>
            </h1>
            <p style={{ fontSize: m ? '15px' : '16px', color: '#555', lineHeight: '1.7', marginBottom: '28px' }}>
              Placera gives Training and Placement Officers a complete platform to manage HR contacts, track placements, and close more offers — replacing Excel forever.
            </p>
            <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row' as const, gap: '10px', marginBottom: '16px' }}>
              <button style={{ fontSize: '16px', fontWeight: '600', color: '#fff', padding: '14px 24px', background: '#1D9E75', border: 'none', borderRadius: '10px', cursor: 'pointer', width: m ? '100%' : 'auto' }}
                onClick={() => window.open('https://login.placera.in/signup', '_blank')}>
                Start free 30-day trial
              </button>
              <button style={{ fontSize: '15px', color: '#1a1a18', padding: '14px 24px', border: '1px solid #d0d0d0', borderRadius: '10px', cursor: 'pointer', background: '#fff', width: m ? '100%' : 'auto' }}
                onClick={() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }) }}>
                Talk to us
              </button>
            </div>
            <div style={{ fontSize: '12px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' as const }}>
              <span>No credit card</span>
              <div style={{ width: '1px', height: '12px', background: '#ddd' }}></div>
              <span>Setup in 5 minutes</span>
              <div style={{ width: '1px', height: '12px', background: '#ddd' }}></div>
              <span>Cancel anytime</span>
            </div>
          </div>

          <div style={{ background: '#f8f9fc', borderRadius: '16px', padding: '18px', border: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a18' }}>Today's call queue</span>
              <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '12px', background: '#E1F5EE', color: '#085041', fontWeight: '600' }}>8 contacts</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '12px' }}>
              {[{ label: 'Calls today', val: '6', color: '#185FA5' }, { label: 'Pipeline', val: '23', color: '#27500A' }, { label: 'Placed', val: '31', color: '#633806' }].map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '8px', padding: '10px', border: '1px solid #eee', textAlign: 'center' as const }}>
                  <div style={{ fontSize: '10px', color: '#aaa', marginBottom: '3px' }}>{s.label}</div>
                  <div style={{ fontSize: '20px', fontWeight: '700', color: s.color }}>{s.val}</div>
                </div>
              ))}
            </div>
            {[
              { av: 'SI', bg: '#FCEBEB', fg: '#A32D2D', name: 'Sneha Iyer', co: 'Infosys', dot: '#E24B4A' },
              { av: 'RN', bg: '#FAEEDA', fg: '#633806', name: 'Ramesh Nair', co: 'TCS', dot: '#EF9F27' },
              { av: 'DP', bg: '#E6F1FB', fg: '#0C447C', name: 'Divya Pillai', co: 'Wipro', dot: '#378ADD' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', borderRadius: '8px', padding: '9px 10px', border: '1px solid #eee', marginBottom: '6px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '700', flexShrink: 0 }}>{c.av}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#1a1a18' }}>{c.name}</div>
                  <div style={{ fontSize: '11px', color: '#aaa' }}>{c.co}</div>
                </div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.dot, flexShrink: 0 }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#f8f9fc', padding: '20px', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '900px', margin: '0 auto', flexWrap: 'wrap' as const }}>
          <span style={{ fontSize: '11px', color: '#aaa', textTransform: 'uppercase' as const, letterSpacing: '.06em', fontWeight: '600', whiteSpace: 'nowrap' as const }}>Trusted by</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
            {['GSB Tiruchirappalli', 'Anna University', 'PSG Tech', 'SRMVEC', 'KCT'].map(b => (
              <span key={b} style={{ fontSize: '12px', color: '#555', padding: '5px 12px', borderRadius: '20px', border: '1px solid #e0e0e0', background: '#fff', fontWeight: '500', whiteSpace: 'nowrap' as const }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      <div id="features" style={{ padding: m ? '56px 20px' : '80px 48px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#1D9E75', textTransform: 'uppercase' as const, letterSpacing: '.1em', marginBottom: '10px' }}>Features</div>
          <div style={{ fontSize: m ? '26px' : '32px', fontWeight: '700', color: '#1a1a18', marginBottom: '10px' }}>Everything your placement cell needs</div>
          <div style={{ fontSize: '15px', color: '#555', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>Built specifically for TPOs — not a generic CRM</div>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))', gap: '12px' }}>
          {features.map((f, i) => (
            <div key={i} style={{ border: '1px solid #eee', borderRadius: '14px', padding: '22px', background: '#fff' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: f.icon, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={f.stroke} strokeWidth="1.8" strokeLinecap="round">
                  {i === 0 && <><rect x="3" y="3" width="14" height="14" rx="3"/><line x1="7" y1="7" x2="13" y2="7"/><line x1="7" y1="10" x2="13" y2="10"/><line x1="7" y1="13" x2="10" y2="13"/></>}
                  {i === 1 && <><circle cx="10" cy="7" r="3"/><path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6"/></>}
                  {i === 2 && <path d="M4 10l4 4 8-8"/>}
                  {i === 3 && <><rect x="3" y="10" width="4" height="7" rx="1"/><rect x="8" y="6" width="4" height="11" rx="1"/><rect x="13" y="3" width="4" height="14" rx="1"/></>}
                  {i === 4 && <><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 3"/></>}
                  {i === 5 && <><path d="M10 3v10M6 9l4 4 4-4"/><path d="M4 15h12"/></>}
                </svg>
              </div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a18', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: m ? '56px 20px' : '80px 48px', background: '#f8f9fc' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#1D9E75', textTransform: 'uppercase' as const, letterSpacing: '.1em', marginBottom: '10px' }}>How it works</div>
          <div style={{ fontSize: m ? '26px' : '32px', fontWeight: '700', color: '#1a1a18', marginBottom: '10px' }}>Up and running in 30 minutes</div>
          <div style={{ fontSize: '15px', color: '#555', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>No technical knowledge needed</div>
        </div>
        <div style={{ maxWidth: '560px', margin: '0 auto', display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: '#fff', borderRadius: '12px', padding: '18px 20px', border: '1px solid #eee' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: '#fff', flexShrink: 0 }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a18', marginBottom: '4px' }}>{step.title}</div>
                <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="pricing" style={{ padding: m ? '56px 20px' : '80px 48px', background: '#ffffff' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#1D9E75', textTransform: 'uppercase' as const, letterSpacing: '.1em', marginBottom: '10px' }}>Pricing</div>
          <div style={{ fontSize: m ? '26px' : '32px', fontWeight: '700', color: '#1a1a18', marginBottom: '10px' }}>Simple, transparent pricing</div>
          <div style={{ fontSize: '15px', color: '#555', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>Start free. Pay only when you are ready.</div>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,minmax(0,1fr))', gap: '14px' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{ border: plan.pop ? '2px solid #1D9E75' : '1px solid #eee', borderRadius: '14px', padding: '26px 22px', position: 'relative' as const, background: '#fff' }}>
              {plan.pop && (
                <div style={{ position: 'absolute' as const, top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#1D9E75', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' as const }}>
                  Most popular
                </div>
              )}
              <div style={{ fontSize: '11px', fontWeight: '700', color: plan.pop ? '#1D9E75' : '#aaa', textTransform: 'uppercase' as const, letterSpacing: '.08em', marginBottom: '6px' }}>{plan.name}</div>
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#1a1a18', marginBottom: '2px', letterSpacing: '-.5px' }}>{plan.price}</div>
              <div style={{ fontSize: '13px', color: '#aaa', marginBottom: '6px' }}>per month</div>
              <div style={{ fontSize: '13px', color: '#555', marginBottom: '18px', paddingBottom: '18px', borderBottom: '1px solid #f0f0f0' }}>{plan.desc}</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '9px', marginBottom: '22px' }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#444' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: plan.pop ? '#1D9E75' : '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: plan.pop ? '#fff' : '#085041', flexShrink: 0, fontWeight: '700' }}>✓</div>
                    {f}
                  </div>
                ))}
              </div>
              <button
                onClick={() => window.open('https://login.placera.in/signup', '_blank')}
                style={{ width: '100%', padding: '13px', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', border: 'none', background: plan.pop ? '#1D9E75' : '#f5f5f5', color: plan.pop ? '#fff' : '#333' }}>
                {plan.name === 'Campus' ? 'Contact us' : 'Start free trial'}
              </button>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '13px', color: '#aaa', marginTop: '16px' }}>All plans include a 30-day free trial. No credit card required.</p>
      </div>

      <div id="contact" style={{ padding: m ? '56px 20px' : '80px 48px', background: '#f8f9fc' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#1D9E75', textTransform: 'uppercase' as const, letterSpacing: '.1em', marginBottom: '10px' }}>Contact</div>
          <div style={{ fontSize: m ? '26px' : '32px', fontWeight: '700', color: '#1a1a18', marginBottom: '10px' }}>Get in touch with us</div>
          <div style={{ fontSize: '15px', color: '#555', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>Questions about Placera? Want a demo? We respond within 24 hours.</div>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: '32px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '24px' }}>
              Whether you want a product demo, have questions about pricing, or need help getting started — we are here to help.
            </p>
            {[
              { label: 'Email', val: 'johnydurai@gmail.com' },
              { label: 'Response time', val: 'Within 24 hours' },
              { label: 'Location', val: 'Tiruchirappalli, Tamil Nadu' },
              { label: 'Working hours', val: 'Mon–Sat, 9am–6pm IST' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1D9E75' }}></div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#aaa', fontWeight: '600', textTransform: 'uppercase' as const, letterSpacing: '.04em', marginBottom: '2px' }}>{c.label}</div>
                  <div style={{ fontSize: '14px', color: '#1a1a18', fontWeight: '500' }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '16px', padding: m ? '20px' : '28px' }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a18', marginBottom: '20px' }}>Send us a message</div>
            <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
              <div>
                <label style={labelStyle}>Your name</label>
                <input style={inputStyle} type="text" placeholder="Dr. S. Dhanapal" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}/>
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input style={inputStyle} type="email" placeholder="you@college.ac.in" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}/>
              </div>
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={labelStyle}>College name</label>
              <input style={inputStyle} type="text" placeholder="Government School of Business" value={formData.college} onChange={e => setFormData({ ...formData, college: e.target.value })}/>
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={labelStyle}>I am interested in</label>
              <select style={{ ...inputStyle, color: '#555' }} value={formData.interest} onChange={e => setFormData({ ...formData, interest: e.target.value })}>
                <option value="">Select an option</option>
                <option>Free trial — want to try Placera</option>
                <option>Demo — want a walkthrough</option>
                <option>Starter plan — ₹2,999/month</option>
                <option>Growth plan — ₹5,999/month</option>
                <option>Campus plan — ₹12,999/month</option>
                <option>General enquiry</option>
              </select>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Message</label>
              <textarea style={{ ...inputStyle, resize: 'none' as const, lineHeight: '1.5' }} rows={4} placeholder="Tell us about your college..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}/>
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              style={{ width: '100%', padding: '14px', background: submitting ? '#9FE1CB' : '#1D9E75', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '700', cursor: submitting ? 'not-allowed' : 'pointer' }}>
              {submitting ? 'Sending...' : 'Send message'}
            </button>
            <div style={{ fontSize: '12px', color: '#aaa', textAlign: 'center', marginTop: '10px' }}>We reply within 24 hours on working days</div>
            {submitted && (
              <div style={{ background: '#E1F5EE', border: '1px solid #1D9E75', borderRadius: '10px', padding: '14px', fontSize: '14px', color: '#085041', textAlign: 'center', marginTop: '12px', fontWeight: '500' }}>
                Message sent. We will get back to you within 24 hours.
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ padding: m ? '56px 20px' : '80px 48px', textAlign: 'center', background: '#1D9E75' }}>
        <div style={{ fontSize: m ? '28px' : '36px', fontWeight: '700', color: '#fff', marginBottom: '14px', lineHeight: '1.2' }}>
          Ready to transform your placement cell?
        </div>
        <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', marginBottom: '28px', maxWidth: '440px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          Join colleges across India using Placera to place more students, faster.
        </div>
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row' as const, gap: '10px', justifyContent: 'center', marginBottom: '14px' }}>
          <button onClick={() => window.open('https://login.placera.in/signup', '_blank')}
            style={{ fontSize: '16px', fontWeight: '700', color: '#1D9E75', padding: '14px 28px', background: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
            Start your free 30-day trial
          </button>
          <button onClick={() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{ fontSize: '15px', color: '#fff', padding: '14px 28px', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '10px', cursor: 'pointer', background: 'transparent' }}>
            Talk to us
          </button>
        </div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>No credit card · Setup in 5 minutes · Cancel anytime</div>
      </div>

      <div style={{ background: '#f8f9fc', borderTop: '1px solid #f0f0f0', padding: '24px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: m ? 'column' : 'row' as const, alignItems: m ? 'flex-start' : 'center', justifyContent: 'space-between', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '30px', height: '30px', background: '#1D9E75', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 14 L9 4 L14 14"/><path d="M6.5 10 L11.5 10"/>
              </svg>
            </div>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a18' }}>Placera</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const }}>
            {['Features', 'Pricing', 'Contact', 'Sign up', 'Sign in', 'Privacy policy', 'Terms'].map(link => (
  <span key={link} style={{ fontSize: '13px', color: '#555', cursor: 'pointer' }}
    onClick={() => {
      if (link === 'Sign up') window.open('https://login.placera.in/signup', '_blank')
      else if (link === 'Sign in') window.open('https://login.placera.in', '_blank')
      else if (link === 'Privacy policy') window.location.href = '/privacy'
      else if (link === 'Terms') window.location.href = '/terms'
      else { const el = document.getElementById(link.toLowerCase()); el?.scrollIntoView({ behavior: 'smooth' }) }
    }}>
    {link}
  </span>
))}
          </div>
          <div style={{ fontSize: '12px', color: '#aaa' }}>© 2026 Placera</div>
        </div>
      </div>

    </div>
  )
}