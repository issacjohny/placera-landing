'use client'
import { useState } from 'react'

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', college: '', interest: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit() {
    if (!formData.name || !formData.email || !formData.college) {
      alert('Please fill in name, email and college name.')
      return
    }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', college: '', interest: '', message: '' })
  }

  const s = {
    page: { fontFamily: 'system-ui, sans-serif', color: '#1a1a18', background: '#ffffff' },
    nav: { display: 'flex' as const, alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '68px', background: '#ffffff', borderBottom: '0.5px solid #f0f0f0', position: 'sticky' as const, top: 0, zIndex: 100 },
    logoMark: { width: '36px', height: '36px', background: '#1D9E75', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    logoName: { fontSize: '20px', fontWeight: '500', color: '#1a1a18' },
    navItem: { fontSize: '14px', color: '#555', padding: '7px 14px', borderRadius: '6px', cursor: 'pointer' },
    btnGhost: { fontSize: '13px', color: '#1a1a18', padding: '8px 18px', border: '0.5px solid #d0d0d0', borderRadius: '8px', cursor: 'pointer', background: '#fff' },
    btnGreen: { fontSize: '13px', fontWeight: '500' as const, color: '#fff', padding: '9px 20px', background: '#1D9E75', border: 'none', borderRadius: '8px', cursor: 'pointer' },
    tag: { display: 'inline-flex' as const, alignItems: 'center', gap: '6px', background: '#E1F5EE', color: '#085041', fontSize: '12px', fontWeight: '500' as const, padding: '5px 12px', borderRadius: '20px', marginBottom: '20px' },
    h1: { fontSize: '44px', fontWeight: '500' as const, lineHeight: '1.18', marginBottom: '18px', color: '#1a1a18' },
    heroP: { fontSize: '16px', color: '#555', lineHeight: '1.7', marginBottom: '28px' },
    btnLg: { fontSize: '15px', fontWeight: '500' as const, color: '#fff', padding: '13px 26px', background: '#1D9E75', border: 'none', borderRadius: '10px', cursor: 'pointer' },
    btnLgO: { fontSize: '15px', color: '#1a1a18', padding: '13px 26px', border: '0.5px solid #d0d0d0', borderRadius: '10px', cursor: 'pointer', background: '#fff' },
    visual: { background: '#f8f9fc', borderRadius: '16px', padding: '20px', border: '0.5px solid #eee' },
    card: { background: '#ffffff', border: '0.5px solid #eee', borderRadius: '14px', padding: '24px' },
    secEye: { fontSize: '11px', fontWeight: '500' as const, color: '#1D9E75', textTransform: 'uppercase' as const, letterSpacing: '.08em', marginBottom: '10px', textAlign: 'center' as const },
    secTitle: { fontSize: '32px', fontWeight: '500' as const, color: '#1a1a18', marginBottom: '10px', textAlign: 'center' as const },
    secSub: { fontSize: '15px', color: '#555', maxWidth: '480px', margin: '0 auto 48px', lineHeight: '1.6', textAlign: 'center' as const },
    featCard: { border: '0.5px solid #eee', borderRadius: '14px', padding: '24px', cursor: 'pointer', background: '#fff' },
    featIcon: (bg: string) => ({ width: '40px', height: '40px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }),
    stepNum: (active: boolean) => ({ width: '32px', height: '32px', borderRadius: '50%', border: active ? 'none' : '0.5px solid #ddd', background: active ? '#1D9E75' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '500' as const, color: active ? '#fff' : '#aaa', flexShrink: 0 }),
    priceCard: (pop: boolean) => ({ border: pop ? '1.5px solid #1D9E75' : '0.5px solid #eee', borderRadius: '14px', padding: '28px 24px', position: 'relative' as const, background: '#fff' }),
    pfCheck: (pop: boolean) => ({ width: '16px', height: '16px', borderRadius: '50%', background: pop ? '#1D9E75' : '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: pop ? '#fff' : '#085041', flexShrink: 0 }),
    formInput: { width: '100%', padding: '10px 12px', fontSize: '14px', background: '#f8f9fc', border: '0.5px solid #e0e0e0', borderRadius: '8px', color: '#1a1a18', outline: 'none', fontFamily: 'system-ui' },
    formLabel: { fontSize: '12px', color: '#555', display: 'block', marginBottom: '6px', fontWeight: '500' as const },
  }

  const features = [
    { icon: '#E6F1FB', stroke: '#185FA5', title: 'Smart call queue', desc: 'Officers see exactly who to call every morning — ranked by priority, follow-up date, and last contact. No more Excel sheets.' },
    { icon: '#E1F5EE', stroke: '#085041', title: 'HR contact database', desc: 'Import all HR contacts from Excel in one click. Full call history and status tracking for every contact.' },
    { icon: '#FAEEDA', stroke: '#633806', title: 'Outcome logging', desc: 'Log call results in 2 taps. Automatic follow-up reminders. Nothing falls through the cracks.' },
    { icon: '#EEEDFE', stroke: '#3C3489', title: 'Student pipeline', desc: 'Track every student from unplaced to offer accepted. See placement rate live. Mark placed with one click.' },
    { icon: '#EAF3DE', stroke: '#27500A', title: 'Director analytics', desc: 'See officer activity, placement funnel, and sector breakdown at a glance. Know where the pipeline leaks.' },
    { icon: '#FAECE7', stroke: '#712B13', title: 'Excel / CSV import', desc: 'Bulk import hundreds of HR contacts and students from your existing Excel files in seconds.' },
  ]

  const steps = [
    { title: 'Sign up your college', desc: 'Enter college details and create a director account. 30-day free trial starts immediately.' },
    { title: 'Import your HR contacts', desc: 'Upload your Excel sheet of HR contacts. Placera maps columns automatically.' },
    { title: 'Add officers and students', desc: 'Create accounts for placement officers. Import your student batch.' },
    { title: 'Start placing students', desc: 'Officers log in, see their call queue, log outcomes, and track placements in real time.' },
  ]

  const plans = [
    { name: 'Starter', price: '₹2,999', desc: 'Perfect for small colleges', features: ['Up to 3 officers', '500 HR contacts', 'Student pipeline', 'Director dashboard', 'Excel import', 'Email support'], pop: false },
    { name: 'Growth', price: '₹5,999', desc: 'For growing colleges', features: ['Up to 10 officers', 'Unlimited HR contacts', 'Everything in Starter', 'Principal dashboard', 'Bulk email (coming soon)', 'Priority support'], pop: true },
    { name: 'Campus', price: '₹12,999', desc: 'For large institutions', features: ['Unlimited officers', 'Unlimited everything', 'Everything in Growth', 'White label option', 'Custom domain', 'Dedicated support'], pop: false },
  ]

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={s.logoMark}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 14 L9 4 L14 14"/><path d="M6.5 10 L11.5 10"/>
            </svg>
          </div>
          <span style={s.logoName}>Placera</span>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {['Product', 'Features', 'Pricing', 'Contact'].map(item => (
            <span key={item} style={s.navItem}
              onClick={() => {
                const el = document.getElementById(item.toLowerCase())
                el?.scrollIntoView({ behavior: 'smooth' })
              }}>
              {item}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={s.btnGhost} onClick={() => window.open('https://login.placera.in', '_blank')}>Sign in</button>
          <button style={s.btnGreen} onClick={() => window.open('https://login.placera.in/signup', '_blank')}>Start free trial</button>
        </div>
      </nav>

      <div style={{ padding: '80px 48px 70px', background: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={s.tag}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1D9E75' }}></div>Built for Indian colleges</div>
            <h1 style={s.h1}>The smarter way to <span style={{ color: '#1D9E75' }}>place your students</span></h1>
            <p style={s.heroP}>Placera gives Training and Placement Officers a complete platform to manage HR contacts, track student placements, and close more offers — replacing Excel forever.</p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button style={s.btnLg} onClick={() => window.open('https://login.placera.in/signup', '_blank')}>Start free 30-day trial</button>
              <button style={s.btnLgO} onClick={() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }) }}>Talk to us</button>
            </div>
            <div style={{ fontSize: '12px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span>No credit card</span>
              <div style={{ width: '1px', height: '12px', background: '#ddd' }}></div>
              <span>Setup in 5 minutes</span>
              <div style={{ width: '1px', height: '12px', background: '#ddd' }}></div>
              <span>Cancel anytime</span>
            </div>
          </div>
          <div style={s.visual}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: '500', color: '#1a1a18' }}>Today's call queue</span>
              <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '12px', background: '#E1F5EE', color: '#085041' }}>8 contacts</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '14px' }}>
              {[{ label: 'Calls today', val: '6', color: '#185FA5' }, { label: 'Pipeline', val: '23', color: '#27500A' }, { label: 'Placed', val: '31', color: '#633806' }].map((s2, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '8px', padding: '10px 12px', border: '0.5px solid #eee' }}>
                  <div style={{ fontSize: '10px', color: '#aaa', marginBottom: '3px' }}>{s2.label}</div>
                  <div style={{ fontSize: '18px', fontWeight: '500', color: s2.color }}>{s2.val}</div>
                </div>
              ))}
            </div>
            {[
              { av: 'SI', bg: '#FCEBEB', fg: '#A32D2D', name: 'Sneha Iyer', co: 'Infosys · Follow up overdue', dot: '#E24B4A' },
              { av: 'RN', bg: '#FAEEDA', fg: '#633806', name: 'Ramesh Nair', co: 'TCS · Call back this week', dot: '#EF9F27' },
              { av: 'DP', bg: '#E6F1FB', fg: '#0C447C', name: 'Divya Pillai', co: 'Wipro · New contact', dot: '#378ADD' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', borderRadius: '8px', padding: '8px 10px', border: '0.5px solid #eee', marginBottom: '6px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '500', flexShrink: 0 }}>{c.av}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '12px', fontWeight: '500', color: '#1a1a18' }}>{c.name}</div>
                  <div style={{ fontSize: '11px', color: '#aaa' }}>{c.co}</div>
                </div>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: c.dot, flexShrink: 0 }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#f8f9fc', padding: '22px 48px', borderTop: '0.5px solid #f0f0f0', borderBottom: '0.5px solid #f0f0f0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' as const }}>
          <span style={{ fontSize: '11px', color: '#aaa', textTransform: 'uppercase' as const, letterSpacing: '.06em', whiteSpace: 'nowrap' as const }}>Trusted by colleges</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
            {['GSB Tiruchirappalli', 'Anna University', 'PSG Tech', 'SRMVEC', 'KCT Coimbatore'].map(b => (
              <span key={b} style={{ fontSize: '12px', color: '#555', padding: '5px 14px', borderRadius: '20px', border: '0.5px solid #e0e0e0', background: '#fff', fontWeight: '500' }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      <div id="features" style={{ padding: '80px 48px', background: '#ffffff' }}>
        <div style={s.secEye}>Features</div>
        <div style={s.secTitle}>Everything your placement cell needs</div>
        <div style={s.secSub}>Built specifically for TPOs — not a generic CRM adapted for placements</div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '14px' }}>
          {features.map((f, i) => (
            <div key={i} style={s.featCard}>
              <div style={s.featIcon(f.icon)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={f.stroke} strokeWidth="1.5" strokeLinecap="round">
                  {i === 0 && <><rect x="3" y="3" width="14" height="14" rx="3"/><line x1="7" y1="7" x2="13" y2="7"/><line x1="7" y1="10" x2="13" y2="10"/><line x1="7" y1="13" x2="10" y2="13"/></>}
                  {i === 1 && <><circle cx="10" cy="7" r="3"/><path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6"/></>}
                  {i === 2 && <path d="M4 10l4 4 8-8"/>}
                  {i === 3 && <><rect x="3" y="10" width="4" height="7" rx="1"/><rect x="8" y="6" width="4" height="11" rx="1"/><rect x="13" y="3" width="4" height="14" rx="1"/></>}
                  {i === 4 && <><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 3"/></>}
                  {i === 5 && <><path d="M10 3v10M6 9l4 4 4-4"/><path d="M4 15h12"/></>}
                </svg>
              </div>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#1a1a18', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '80px 48px', background: '#f8f9fc' }}>
        <div style={s.secEye}>How it works</div>
        <div style={s.secTitle}>Up and running in 30 minutes</div>
        <div style={s.secSub}>No technical knowledge needed. Your placement cell is live today.</div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
          <div>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '18px 0', borderBottom: i < steps.length - 1 ? '0.5px solid #eee' : 'none' }}>
                <div style={s.stepNum(i === 0)}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '500', color: i === 0 ? '#1a1a18' : '#aaa', marginBottom: '4px' }}>{step.title}</div>
                  <div style={{ fontSize: '13px', color: '#aaa', lineHeight: '1.6' }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: '14px', padding: '22px', border: '0.5px solid #eee' }}>
            <div style={{ fontSize: '10px', fontWeight: '500', color: '#aaa', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '10px' }}>Placement progress</div>
            <div style={{ height: '8px', borderRadius: '4px', background: '#f0f0f0', overflow: 'hidden', marginBottom: '6px' }}>
              <div style={{ height: '100%', width: '68%', background: '#1D9E75', borderRadius: '4px' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#aaa', marginBottom: '16px' }}>
              <span>34 placed of 50 students</span>
              <span style={{ fontWeight: '500', color: '#1D9E75' }}>68%</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '14px' }}>
              {[{ lbl: 'Placed', val: '34', color: '#27500A' }, { lbl: 'In process', val: '9', color: '#633806' }, { lbl: 'Unplaced', val: '7', color: '#791F1F' }].map((m, i) => (
                <div key={i} style={{ background: '#f8f9fc', borderRadius: '8px', padding: '10px', textAlign: 'center' as const }}>
                  <div style={{ fontSize: '9px', color: '#aaa', textTransform: 'uppercase' as const, letterSpacing: '.05em', marginBottom: '3px' }}>{m.lbl}</div>
                  <div style={{ fontSize: '18px', fontWeight: '500', color: m.color }}>{m.val}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '10px', fontWeight: '500', color: '#aaa', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '8px' }}>Recent placements</div>
            {[{ av: 'AK', name: 'Arjun Kumar', co: 'Infosys' }, { av: 'PS', name: 'Priya Sharma', co: 'TCS' }].map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 8px', background: '#f8f9fc', borderRadius: '8px', marginBottom: '5px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EAF3DE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: '500', color: '#27500A' }}>{p.av}</div>
                <div style={{ flex: 1, fontSize: '12px', color: '#333', fontWeight: '500' }}>{p.name}</div>
                <div style={{ fontSize: '10px', padding: '2px 7px', borderRadius: '8px', background: '#EAF3DE', color: '#27500A', fontWeight: '500' }}>{p.co}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="pricing" style={{ padding: '80px 48px', background: '#ffffff' }}>
        <div style={s.secEye}>Pricing</div>
        <div style={s.secTitle}>Simple, transparent pricing</div>
        <div style={s.secSub}>Start free. Pay only when you are ready. No hidden charges.</div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '14px' }}>
          {plans.map((plan, i) => (
            <div key={i} style={s.priceCard(plan.pop)}>
              {plan.pop && (
                <div style={{ position: 'absolute', top: '-11px', left: '50%', transform: 'translateX(-50%)', background: '#1D9E75', color: '#fff', fontSize: '11px', fontWeight: '500', padding: '3px 12px', borderRadius: '20px', whiteSpace: 'nowrap' as const }}>
                  Most popular
                </div>
              )}
              <div style={{ fontSize: '11px', fontWeight: '500', color: plan.pop ? '#1D9E75' : '#aaa', textTransform: 'uppercase' as const, letterSpacing: '.06em', marginBottom: '6px' }}>{plan.name}</div>
              <div style={{ fontSize: '36px', fontWeight: '500', color: '#1a1a18', marginBottom: '2px' }}>{plan.price}</div>
              <div style={{ fontSize: '13px', color: '#aaa', marginBottom: '6px' }}>per month</div>
              <div style={{ fontSize: '13px', color: '#555', marginBottom: '20px', paddingBottom: '20px', borderBottom: '0.5px solid #f0f0f0' }}>{plan.desc}</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '9px', marginBottom: '24px' }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#555' }}>
                    <div style={s.pfCheck(plan.pop)}>✓</div>
                    {f}
                  </div>
                ))}
              </div>
              <button
                onClick={() => window.open('https://login.placera.in/signup', '_blank')}
                style={{ width: '100%', padding: '11px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', border: 'none', background: plan.pop ? '#1D9E75' : '#f5f5f5', color: plan.pop ? '#fff' : '#333' }}>
                {plan.name === 'Campus' ? 'Contact us' : 'Start free trial'}
              </button>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#aaa', marginTop: '16px' }}>All plans include a 30-day free trial. No credit card required.</p>
      </div>

      <div id="contact" style={{ padding: '80px 48px', background: '#f8f9fc' }}>
        <div style={s.secEye}>Contact</div>
        <div style={s.secTitle}>Get in touch with us</div>
        <div style={s.secSub}>Questions about Placera? Want a demo? We respond within 24 hours.</div>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', marginBottom: '28px' }}>
              Whether you want a product demo, have questions about pricing, or need help getting started — we are here to help your college place more students faster.
            </p>
            {[
              { icon: 'M2 4l6 5 6-5 M1 3h14a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V4a1 1 0 011-1z', label: 'Email', val: 'johnydurai@gmail.com' },
              { icon: 'M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z M8 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z', label: 'Location', val: 'Tiruchirappalli, Tamil Nadu, India' },
              { icon: 'M8 2a6 6 0 100 12A6 6 0 008 2z M8 5v3l2 2', label: 'Response time', val: 'Within 24 hours' },
              { icon: 'M2 3h3l1.5 3.5-2 1.2A10 10 0 008.3 10l1.2-2L13 9.5V13a1 1 0 01-1 1C5 14 2 7 2 4a1 1 0 011-1z', label: 'Working hours', val: 'Mon–Sat, 9am–6pm IST' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '18px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round">
                    <path d={c.icon}/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#aaa', marginBottom: '2px', fontWeight: '500', textTransform: 'uppercase' as const, letterSpacing: '.04em' }}>{c.label}</div>
                  <div style={{ fontSize: '13px', color: '#1a1a18', fontWeight: '500' }}>{c.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', border: '0.5px solid #eee', borderRadius: '16px', padding: '28px' }}>
            <div style={{ fontSize: '16px', fontWeight: '500', color: '#1a1a18', marginBottom: '20px' }}>Send us a message</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
              <div>
                <label style={s.formLabel}>Your name</label>
                <input style={s.formInput} type="text" placeholder="Dr. S. Dhanapal" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}/>
              </div>
              <div>
                <label style={s.formLabel}>Email</label>
                <input style={s.formInput} type="email" placeholder="you@college.ac.in" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}/>
              </div>
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={s.formLabel}>College name</label>
              <input style={s.formInput} type="text" placeholder="Government School of Business" value={formData.college} onChange={e => setFormData({ ...formData, college: e.target.value })}/>
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={s.formLabel}>I am interested in</label>
              <select style={{ ...s.formInput, color: '#555' }} value={formData.interest} onChange={e => setFormData({ ...formData, interest: e.target.value })}>
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
              <label style={s.formLabel}>Message</label>
              <textarea style={{ ...s.formInput, resize: 'none' as const, lineHeight: '1.5' }} rows={4} placeholder="Tell us about your college and what you are looking for..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}/>
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              style={{ width: '100%', padding: '12px', background: submitting ? '#9FE1CB' : '#1D9E75', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: submitting ? 'not-allowed' : 'pointer' }}>
              {submitting ? 'Sending...' : 'Send message'}
            </button>
            <div style={{ fontSize: '11px', color: '#aaa', textAlign: 'center', marginTop: '10px' }}>We will reply within 24 hours on working days</div>
            {submitted && (
              <div style={{ background: '#E1F5EE', border: '0.5px solid #1D9E75', borderRadius: '8px', padding: '12px', fontSize: '13px', color: '#085041', textAlign: 'center', marginTop: '10px', fontWeight: '500' }}>
                Message sent. We will get back to you within 24 hours.
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ padding: '80px 48px', textAlign: 'center', background: '#1D9E75' }}>
        <div style={{ fontSize: '36px', fontWeight: '500', color: '#fff', marginBottom: '14px', lineHeight: '1.2' }}>Ready to transform your placement cell?</div>
        <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '440px', margin: '0 auto 32px', lineHeight: '1.7' }}>
          Join colleges across India using Placera to place more students, faster.
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '14px' }}>
          <button onClick={() => window.open('https://login.placera.in/signup', '_blank')} style={{ fontSize: '15px', fontWeight: '500', color: '#1D9E75', padding: '13px 26px', background: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
            Start your free 30-day trial
          </button>
          <button onClick={() => { const el = document.getElementById('contact'); el?.scrollIntoView({ behavior: 'smooth' }) }} style={{ fontSize: '15px', color: '#fff', padding: '13px 26px', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: '10px', cursor: 'pointer', background: 'transparent' }}>
            Talk to us
          </button>
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>No credit card · Setup in 5 minutes · Cancel anytime</div>
      </div>

      <div style={{ background: '#f8f9fc', borderTop: '0.5px solid #f0f0f0', padding: '28px 48px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={s.logoMark}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 14 L9 4 L14 14"/><path d="M6.5 10 L11.5 10"/>
              </svg>
            </div>
            <span style={s.logoName}>Placera</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' as const }}>
            {['Features', 'Pricing', 'Contact', 'Sign up', 'Sign in', 'Privacy policy'].map(link => (
              <span key={link} style={{ fontSize: '13px', color: '#555', cursor: 'pointer' }}>{link}</span>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#aaa' }}>© 2026 Placera · Smart Placement Management</div>
        </div>
      </div>
    </div>
  )
}