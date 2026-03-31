export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a1a18', background: '#ffffff', minHeight: '100vh' }}>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', height: '64px', borderBottom: '1px solid #f0f0f0', position: 'sticky' as const, top: 0, background: '#ffffff', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
          <div style={{ width: '32px', height: '32px', background: '#1D9E75', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 14 L9 4 L14 14"/><path d="M6.5 10 L11.5 10"/>
            </svg>
          </div>
          <span style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a18' }}>Placera</span>
        </div>
        <a href="/" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}>← Back to home</a>
      </nav>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>

        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#1D9E75', textTransform: 'uppercase' as const, letterSpacing: '.1em', marginBottom: '12px' }}>Legal</div>
          <h1 style={{ fontSize: '40px', fontWeight: '700', color: '#1a1a18', marginBottom: '12px', letterSpacing: '-.5px', lineHeight: '1.2' }}>Privacy Policy</h1>
          <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '8px' }}>
            This Privacy Policy explains how Placera collects, uses, stores, and protects personal data in compliance with the Digital Personal Data Protection Act 2023 (DPDPA) of India.
          </p>
          <p style={{ fontSize: '13px', color: '#aaa' }}>Last updated: March 2026 · Effective date: March 2026</p>
        </div>

        <div style={{ background: '#E1F5EE', border: '1px solid #1D9E75', borderRadius: '12px', padding: '20px 24px', marginBottom: '48px' }}>
          <p style={{ fontSize: '14px', color: '#085041', lineHeight: '1.7', margin: 0 }}>
            <strong>Plain language summary:</strong> Placera is a placement management platform for Indian colleges. We collect data about students, HR contacts, and placement officers to help colleges manage their placement process. We do not sell your data. We do not share it with third parties. Each college's data is completely isolated from other colleges. You can request deletion of your data at any time by emailing us.
          </p>
        </div>

        {[
          {
            title: '1. Who we are',
            content: `Placera is a Software as a Service (SaaS) platform for Training and Placement Officers (TPOs) at Indian colleges. Placera is operated by Issac Johny, based in Tiruchirappalli, Tamil Nadu, India.

For the purposes of the Digital Personal Data Protection Act 2023, Placera acts as a Data Fiduciary — we determine the purposes and means of processing personal data. Colleges that use Placera act as Data Principals in relation to their own institutional data, and their students and contacts are also Data Principals whose rights we are committed to protecting.

Contact: johnydurai@gmail.com | placera.in`
          },
          {
            title: '2. What data we collect',
            content: `We collect only the data necessary to provide our placement management service. This includes:

College and institutional data:
— College name, city, state, contact email, phone number
— Subscription plan and trial status

User account data (for directors, officers, and principals):
— Full name and email address
— Role within the college
— Account creation date

Student data (uploaded by colleges):
— Student name and email address
— Department, batch year, and degree
— Placement status — unplaced, in process, or placed
— Company name and package if placed

HR contact data (uploaded by colleges):
— HR contact name, designation, company
— Phone number and email address
— Call history and follow-up notes
— Contact status

We do not collect:
— Aadhaar numbers or government IDs
— Financial account details or bank information
— Biometric data
— Health or medical information
— Political, religious, or caste information`
          },
          {
            title: '3. Why we collect this data',
            content: `We collect and process personal data for the following specific purposes only:

— To provide the placement management service to colleges
— To enable placement officers to track and follow up with HR contacts
— To track student placement status and outcomes
— To generate placement analytics and reports for directors
— To send transactional emails such as account creation, password reset, and trial notifications
— To provide customer support

We do not use your data for advertising, profiling, or any purpose beyond what is described above. We will never sell your data to third parties.`
          },
          {
            title: '4. Legal basis for processing',
            content: `Under the Digital Personal Data Protection Act 2023, we process personal data on the following legal bases:

Consent: When a college signs up for Placera, the director provides explicit consent on behalf of the institution for data processing as described in this policy.

Legitimate interest: Processing data that is necessary to deliver the placement management service that colleges have signed up for.

Contractual necessity: Processing required to fulfil our service agreement with colleges.

By signing up for Placera, colleges confirm they have obtained appropriate consent from their students and staff to have their data stored and processed on this platform for placement management purposes.`
          },
          {
            title: '5. How we store and protect your data',
            content: `All data is stored on Supabase — an enterprise-grade database platform hosted on Amazon Web Services in the Singapore region (ap-southeast-1).

Security measures we have implemented:

— Row Level Security (RLS): Each college's data is completely isolated. No college can ever access another college's data.
— Role-based access control: Directors, officers, and principals each see only what their role permits.
— Encrypted connections: All data is transmitted over HTTPS with TLS encryption.
— Authentication: Managed by Supabase Auth with industry-standard security.
— Regular backups: Supabase performs automated daily backups of all data.

We do not store passwords in plain text. All passwords are hashed using industry-standard bcrypt encryption.`
          },
          {
            title: '6. Data retention',
            content: `We retain personal data for as long as a college maintains an active account with Placera.

Upon account cancellation or request for deletion:
— College data is deleted within 30 days of the request
— Student and HR contact data is deleted within 30 days
— Backup copies are purged within 90 days

We may retain anonymised, aggregated statistical data — such as total placement rates across our platform — indefinitely for product improvement purposes. This data cannot be linked back to any individual person or college.`
          },
          {
            title: '7. Your rights as a Data Principal',
            content: `Under the Digital Personal Data Protection Act 2023, you have the following rights:

Right to access: You can request a copy of all personal data we hold about you.

Right to correction: You can request correction of inaccurate or incomplete personal data.

Right to erasure: You can request deletion of your personal data. We will process this within 30 days.

Right to grievance redressal: You can raise a complaint about how we handle your data.

Right to nominate: You can nominate another person to exercise your rights on your behalf.

To exercise any of these rights, email us at johnydurai@gmail.com with the subject line "Data Rights Request". We will respond within 30 days.

For students: If you are a student whose data has been uploaded to Placera by your college, you may contact us directly to access, correct, or request deletion of your data. We will coordinate with your college to process the request.`
          },
          {
            title: '8. Data sharing and third parties',
            content: `We do not sell, rent, or trade personal data to any third party under any circumstances.

We share data only with the following service providers who process data on our behalf as Data Processors:

Supabase (database and authentication): supabase.com — Privacy policy at supabase.com/privacy
Vercel (web hosting): vercel.com — Privacy policy at vercel.com/legal/privacy-policy
Resend (transactional email): resend.com — Privacy policy at resend.com/privacy

Each of these providers is contractually bound to process data only as instructed by us and to maintain appropriate security standards.

We will disclose personal data to government or law enforcement authorities only if required by law or a valid court order.`
          },
          {
            title: '9. Cookies and tracking',
            content: `Placera uses minimal cookies strictly necessary for the service to function:

— Authentication session cookie: keeps you logged in during your session
— No advertising cookies
— No third-party tracking cookies
— No analytics that track individual users across sessions

We do not use Google Analytics, Facebook Pixel, or any other behavioural tracking technology.`
          },
          {
            title: '10. Children\'s data',
            content: `Some college students may be under 18 years of age. Under the DPDPA 2023, processing data of children requires verifiable parental consent.

Colleges using Placera are responsible for ensuring they have obtained appropriate consent from students or their parents or guardians before uploading student data to the platform.

Placera does not knowingly collect data from children without appropriate consent being in place at the institutional level.`
          },
          {
            title: '11. Data breach notification',
            content: `In the event of a personal data breach that is likely to result in harm to Data Principals, we will:

— Notify the Data Protection Board of India as required by law
— Notify affected colleges and users promptly
— Describe the nature of the breach, data affected, and steps taken
— Provide guidance on steps individuals can take to protect themselves

We have implemented technical and organisational measures to prevent data breaches, including access controls, encryption, and security monitoring.`
          },
          {
            title: '12. Changes to this policy',
            content: `We may update this Privacy Policy from time to time as our service evolves or as legal requirements change.

When we make material changes we will:
— Update the "Last updated" date at the top of this page
— Send an email notification to all active college directors
— Provide at least 14 days notice before changes take effect

Your continued use of Placera after the effective date of changes constitutes acceptance of the updated policy.`
          },
          {
            title: '13. Contact us',
            content: `For any privacy-related questions, requests, or complaints:

Issac Johny
Founder, Placera
Email: johnydurai@gmail.com
Website: placera.in
Location: Tiruchirappalli, Tamil Nadu, India

We aim to respond to all privacy enquiries within 30 days. If you are not satisfied with our response you have the right to approach the Data Protection Board of India once it is established.`
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: i < 12 ? '1px solid #f0f0f0' : 'none' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a18', marginBottom: '14px', letterSpacing: '-.2px' }}>
              {section.title}
            </h2>
            <div style={{ fontSize: '15px', color: '#444', lineHeight: '1.8' }}>
              {section.content.split('\n').map((line, j) => (
                line.trim() === '' ? <br key={j}/> :
                line.startsWith('—') ? (
                  <div key={j} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: '#1D9E75', flexShrink: 0 }}>—</span>
                    <span>{line.substring(1).trim()}</span>
                  </div>
                ) : (
                  <p key={j} style={{ marginBottom: '10px', margin: '0 0 10px' }}>{line}</p>
                )
              ))}
            </div>
          </div>
        ))}

        <div style={{ background: '#f8f9fc', borderRadius: '12px', padding: '24px', marginTop: '48px', textAlign: 'center' as const }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', lineHeight: '1.7' }}>
            Have questions about this Privacy Policy or how we handle your data?
          </p>
          <a href="mailto:johnydurai@gmail.com" style={{ display: 'inline-block', background: '#1D9E75', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
            Email us at johnydurai@gmail.com
          </a>
        </div>

      </div>

      <div style={{ background: '#f8f9fc', borderTop: '1px solid #f0f0f0', padding: '24px 48px', marginTop: '64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', background: '#1D9E75', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 14 L9 4 L14 14"/><path d="M6.5 10 L11.5 10"/>
              </svg>
            </div>
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a18' }}>Placera</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}>Home</a>
            <a href="/privacy" style={{ fontSize: '13px', color: '#1D9E75', textDecoration: 'none', fontWeight: '600' }}>Privacy Policy</a>
            <a href="https://login.placera.in/signup" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}>Sign up</a>
          </div>
          <div style={{ fontSize: '12px', color: '#aaa' }}>© 2026 Placera</div>
        </div>
      </div>

    </div>
  )
}