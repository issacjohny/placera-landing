'use client'
export default function TermsOfService() {
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
          <h1 style={{ fontSize: '40px', fontWeight: '700', color: '#1a1a18', marginBottom: '12px', letterSpacing: '-.5px', lineHeight: '1.2' }}>Terms of Service</h1>
          <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '8px' }}>
            These Terms of Service govern your use of the Placera platform. By signing up and using Placera, you agree to these terms. Please read them carefully.
          </p>
          <p style={{ fontSize: '13px', color: '#aaa' }}>Last updated: March 2026 · Effective date: March 2026</p>
        </div>

        <div style={{ background: '#E1F5EE', border: '1px solid #1D9E75', borderRadius: '12px', padding: '20px 24px', marginBottom: '48px' }}>
          <p style={{ fontSize: '14px', color: '#085041', lineHeight: '1.7', margin: 0 }}>
            <strong>Plain language summary:</strong> Placera provides a placement management platform for Indian colleges on a subscription basis. You own your data. We provide the service honestly and securely. You agree to use it lawfully. Either party can terminate the agreement. We are not liable for losses beyond what you paid us.
          </p>
        </div>

        {[
          {
            title: '1. Definitions',
            content: `In these Terms of Service:

— "Placera", "we", "us", or "our" refers to the Placera platform operated by Issac Johny, Tiruchirappalli, Tamil Nadu, India.
— "Service" refers to the Placera web application accessible at login.placera.in and associated services.
— "College" or "you" refers to the educational institution that signs up for and uses the Service.
— "Users" refers to directors, placement officers, principals, and any other individuals authorised by the College to use the Service.
— "Data" refers to all content, information, and personal data uploaded to or generated within the Service by the College.
— "Subscription" refers to the paid or trial plan under which the College accesses the Service.
— "Trial Period" refers to the 30-day free trial available to new colleges upon signup.`
          },
          {
            title: '2. Acceptance of terms',
            content: `By creating an account on Placera, the College agrees to be bound by these Terms of Service and our Privacy Policy.

The person creating the account on behalf of a college represents and warrants that they have the authority to bind the college to these Terms. If you do not have such authority, or if you do not agree to these Terms, you must not use the Service.

These Terms constitute a legally binding agreement between the College and Placera. They apply to all users of the Service including directors, placement officers, and principals.`
          },
          {
            title: '3. The service',
            content: `Placera provides a cloud-based placement management platform that enables colleges to:

— Manage HR contacts and track communication history
— Assign contacts to placement officers and manage call queues
— Track student placement status and outcomes
— Generate placement analytics and reports
— Manage placement officer performance
— Communicate with HR contacts for placement drives

We reserve the right to modify, improve, or discontinue features of the Service at any time. We will provide reasonable notice of significant changes that affect your use of the Service.`
          },
          {
            title: '4. Trial period and subscription',
            content: `Trial period:
New colleges receive a 30-day free trial upon signup. No credit card is required to start a trial. The trial provides full access to all features of the Service.

After the trial period, continued use of the Service requires a paid subscription. We will notify you before your trial expires.

Subscription plans:
— Starter: ₹2,999 per month — up to 3 officers, 500 HR contacts
— Growth: ₹5,999 per month — up to 10 officers, unlimited contacts
— Campus: ₹12,999 per month — unlimited officers and contacts

Billing:
Subscriptions are billed monthly in advance. Payment is due on the first day of each billing cycle. We currently accept payment via Razorpay or SBI. It may change. 

Cancellation:
You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial months.

Price changes:
We reserve the right to change subscription prices with 30 days advance notice. Continued use after the effective date of a price change constitutes acceptance of the new price.`
          },
          {
            title: '5. Your data',
            content: `Ownership:
You own all data you upload to Placera. We do not claim any ownership rights over your data.

Licence to us:
By uploading data to Placera, you grant us a limited, non-exclusive licence to store, process, and display your data solely for the purpose of providing the Service to you.

Your responsibilities:
You are responsible for ensuring that:
— You have the legal right to upload and process the data you submit
— You have obtained appropriate consent from students and staff whose data you upload
— The data you upload is accurate and lawful
— You comply with applicable data protection laws including the DPDPA 2023

Data on termination:
Upon termination of your account, we will make your data available for export for 30 days. After this period, your data will be permanently deleted from our systems within 90 days.`
          },
          {
            title: '6. Acceptable use',
            content: `You agree to use Placera only for lawful purposes and in accordance with these Terms. You must not:

— Use the Service to upload, transmit, or store unlawful, harmful, or offensive content
— Attempt to gain unauthorised access to any part of the Service or other colleges' data
— Use the Service to send unsolicited commercial communications or spam
— Reverse engineer, decompile, or attempt to extract the source code of the Service
— Use automated tools to scrape, crawl, or extract data from the Service
— Share your login credentials with unauthorised persons
— Use the Service in a manner that could damage, disable, or impair the platform
— Misrepresent your identity or affiliation when using the Service
— Use the Service for any purpose other than placement management

We reserve the right to suspend or terminate accounts that violate these terms without notice.`
          },
          {
            title: '7. User accounts and security',
            content: `Account creation:
Each college creates one director account during signup. The director is responsible for creating and managing accounts for placement officers and principals.

Account security:
You are responsible for maintaining the confidentiality of your login credentials. You must notify us immediately at johnydurai@gmail.com if you suspect unauthorised access to your account.

We are not liable for any loss or damage arising from unauthorised use of your account due to your failure to maintain the security of your credentials.

Account accuracy:
You agree to provide accurate and complete information when creating your account and to keep this information up to date.`
          },
          {
            title: '8. Intellectual property',
            content: `Placera platform:
The Placera platform, including its design, code, features, and branding, is the intellectual property of Issac Johny. All rights are reserved.

You are granted a limited, non-exclusive, non-transferable licence to access and use the Service during your subscription period for your internal placement management purposes only.

You must not copy, reproduce, distribute, or create derivative works based on the Placera platform without our express written consent.

Your content:
You retain all intellectual property rights in the data and content you upload to Placera. Nothing in these Terms transfers ownership of your content to us.

Feedback:
If you provide feedback or suggestions about the Service, we may use this feedback to improve the platform without any obligation to compensate you.`
          },
          {
            title: '9. Service availability and support',
            content: `Availability:
We aim to provide a reliable service but do not guarantee 100% uptime. We will make reasonable efforts to maintain service availability and to restore service promptly in the event of outages.

Planned maintenance will be communicated in advance where possible.

Support:
We provide support via email at johnydurai@gmail.com. We aim to respond to support requests within 24 hours on working days — Monday to Saturday, 9am to 6pm IST.

We do not provide guaranteed service level agreements on free trial or Starter plans. Growth and Campus plan subscribers receive priority support.`
          },
          {
            title: '10. Limitation of liability',
            content: `To the maximum extent permitted by applicable law:

— Placera provides the Service on an "as is" and "as available" basis without warranties of any kind
— We do not warrant that the Service will be uninterrupted, error-free, or free of viruses
— We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Service
— Our total liability to you for any claim arising under these Terms shall not exceed the total amount you paid us in the 3 months preceding the claim
— We are not liable for any loss of data, loss of profits, or business interruption

Nothing in these Terms excludes liability for fraud, death, or personal injury caused by our negligence.`
          },
          {
            title: '11. Indemnification',
            content: `You agree to indemnify and hold harmless Placera and its operators from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:

— Your use of the Service in violation of these Terms
— Your violation of any applicable law or regulation
— Your violation of any third party rights including data protection rights of students and staff
— Any data you upload to the Service that infringes third party rights or violates applicable law`
          },
          {
            title: '12. Termination',
            content: `Termination by you:
You may terminate your account at any time by contacting us at johnydurai@gmail.com. Termination takes effect at the end of your current billing period.

Termination by us:
We may suspend or terminate your account immediately if:
— You materially breach these Terms and fail to remedy the breach within 7 days of notice
— You use the Service for unlawful purposes
— You fail to pay subscription fees when due
— We are required to do so by law

Effect of termination:
On termination, your right to access the Service ceases immediately. We will make your data available for export for 30 days following termination. After this period, your data will be permanently deleted.

Survival:
Clauses relating to intellectual property, limitation of liability, indemnification, and governing law survive termination of these Terms.`
          },
          {
            title: '13. Governing law and disputes',
            content: `These Terms are governed by the laws of India.

Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good faith negotiation between the parties.

If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts of Tiruchirappalli, Tamil Nadu, India.

We are committed to resolving disputes fairly and promptly. If you have a concern, please contact us at johnydurai@gmail.com before initiating legal proceedings.`
          },
          {
            title: '14. Changes to these terms',
            content: `We may update these Terms of Service from time to time as our service evolves or as legal requirements change.

When we make material changes we will:
— Update the "Last updated" date at the top of this page
— Send an email notification to all active college directors
— Provide at least 14 days notice before changes take effect

Your continued use of Placera after the effective date constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Service and terminate your account.`
          },
          {
            title: '15. Contact',
            content: `For any questions about these Terms of Service:

Issac Johny
Founder, Placera
Email: johnydurai@gmail.com
Website: placera.in
Location: Tiruchirappalli, Tamil Nadu, India

We aim to respond to all enquiries within 30 days.`
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: i < 14 ? '1px solid #f0f0f0' : 'none' }}>
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
                ) : line.endsWith(':') && line.length < 40 ? (
                  <p key={j} style={{ fontWeight: '600', color: '#1a1a18', margin: '14px 0 6px' }}>{line}</p>
                ) : (
                  <p key={j} style={{ marginBottom: '10px', margin: '0 0 10px' }}>{line}</p>
                )
              ))}
            </div>
          </div>
        ))}

        <div style={{ background: '#f8f9fc', borderRadius: '12px', padding: '24px', marginTop: '48px', textAlign: 'center' as const }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px', lineHeight: '1.7' }}>
            Have questions about these Terms of Service?
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
            <a href="/privacy" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ fontSize: '13px', color: '#1D9E75', textDecoration: 'none', fontWeight: '600' }}>Terms of Service</a>
          </div>
          <div style={{ fontSize: '12px', color: '#aaa' }}>© 2026 Placera</div>
        </div>
      </div>

    </div>
  )
}