'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Check, ArrowRight, Sparkles, Star, Quote, Phone, Mail, MapPin, Rocket, Shield, Clock, Workflow, Building2, Users, LineChart, Layers } from 'lucide-react'

const CONFIG = {
  brand: {
    name: 'GoConnectAI',
    tagline: 'Never miss a call again — AI receptionists that book appointments 24/7.',
    ctaPrimary: { label: 'Book a demo', href: '#contact' },
    ctaSecondary: { label: 'See results', href: '#work' },
  },
  nav: [
    { label: 'Solutions', href: '#services' },
    { label: 'Results', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  logos: ['Westwood Dental', 'Nova Dental', 'Cliniko Partners', 'SmileBright', 'HealthHub', 'MediFlow'],
  services: [
    { icon: <Phone className="h-6 w-6"/>, title: 'AI Receptionist', desc: 'Smart inbound call handling that answers FAQs and books patients automatically.', points: ['Natural voice with 11Labs', 'One-question-at-a-time flow', 'HIPAA/GDPR-minded'] },
    { icon: <Workflow className="h-6 w-6"/>, title: 'Clinic Automations', desc: 'Integrations with calendars, CRMs and PMS (SOE/Exact, Dentally, HighLevel, Google Calendar).', points: ['Missed-call capture', 'Reschedule & cancellations', 'Lead routing to CRM'] },
    { icon: <Rocket className="h-6 w-6"/>, title: 'Web & Booking Funnels', desc: 'Conversion-first landing pages wired to your booking system and AI agent.', points: ['Next.js + Tailwind', 'SEO + analytics', 'Secure intake forms'] },
  ],
  work: [
    { title: 'Westwood Dental Practice', industry: 'Healthcare', result: '+37% bookings in 60 days', desc: 'AI receptionist + online booking + missed-call capture reduced admin time and filled gaps.', tags: ['Vapi', 'Make', 'Next.js', 'Calendar'], link: '#' },
    { title: 'SmileBright Clinic', industry: 'Healthcare', result: '-45% missed call leakage', desc: 'Automated triage, rescheduling, and reminders integrated with CRM.', tags: ['Voice AI', 'CRM', 'Automations'], link: '#' },
    { title: 'GoConnectAI Landing', industry: 'Services', result: '+22% demo conversions', desc: 'New website and funnel copy with analytics-led iteration.', tags: ['Next.js', 'CRO', 'GA4'], link: '#' },
  ],
  process: [
    { icon: <Users className="h-5 w-5"/>, title: '1. Discover', desc: '30–45 min call to map your intake flow and KPIs (missed calls, show rate).' },
    { icon: <Layers className="h-5 w-5"/>, title: '2. Design', desc: 'We script the voice agent, write on-brand copy, and wireframe your funnel.' },
    { icon: <LineChart className="h-5 w-5"/>, title: '3. Build', desc: 'Configure Vapi/11Labs, Make scenarios, and Next.js site with tracking.' },
    { icon: <Clock className="h-5 w-5"/>, title: '4. Launch', desc: 'Deploy, connect domain, QA calls, and review metrics in week 1.' },
  ],
  pricing: [
    { name: 'Starter', price: '£0–£15/mo', blurb: 'Static landing + demo form. Ideal for early validation.', features: ['1–3 sections', 'Copy included', 'Basic SEO', 'Deploy help'], cta: 'Start now', highlighted: false },
    { name: 'AI Receptionist', price: 'From £1,500 setup + monthly', blurb: 'Voice agent + booking workflow + calendar/CRM integration.', features: ['Custom call script', 'Reschedule/cancel', 'Analytics dashboard', 'Priority support'], cta: 'Book a demo', highlighted: true },
    { name: 'Scale', price: 'Custom', blurb: 'Multi-location clinics, advanced reporting, or complex PMS integrations.', features: ['Unlimited flows', 'Team training', 'CRO testing', 'SLA options'], cta: 'Request a quote', highlighted: false },
  ],
  testimonials: [
    { quote: 'Bookings went up and admin load dropped. Patients love the instant confirmation.', author: 'Practice Manager', role: 'Dental Clinic' },
    { quote: 'We recovered missed-call revenue within the first month.', author: 'Owner', role: 'Private Clinic' },
  ],
  faq: [
    { q: 'How does the AI handle complex queries?', a: 'We design a one-question-at-a-time flow with guardrails. For edge cases, it escalates to a human inbox or callback.' },
    { q: 'Can it integrate with our system?', a: 'We connect calendars, CRMs and—where supported—your practice system via API or secure exports.' },
    { q: 'Is it GDPR compliant?', a: 'We follow data-minimisation, encryption-in-transit, and provide a DPA on request. You retain data ownership.' },
  ],
  contact: {
    email: 'hello@goconnectai.com',
    phone: '+44 20 0000 0000',
    address: 'London, United Kingdom',
  },
}

const Section = ({ id, className = '', children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

const FadeIn = ({ delay = 0, children }: { delay?: number; children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
    {children}
  </motion.div>
)

export default function Page() {
  return (
    <div className="min-h-screen text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold tracking-tight">{CONFIG.brand.name}</span>
            <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">Agency</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {CONFIG.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-500 hover:text-black transition-colors">{item.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm">
              <a href={CONFIG.brand.ctaPrimary.href}>{CONFIG.brand.ctaPrimary.label}</a>
            </Button>
          </div>
        </Section>
      </header>

      {/* HERO */}
      <Section className="pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {CONFIG.brand.tagline}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We blend design, copy, and engineering to launch high-performing websites and automations. No fluff—just outcomes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href={CONFIG.brand.ctaPrimary.href}>
                  {CONFIG.brand.ctaPrimary.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl">
                <a href={CONFIG.brand.ctaSecondary.href}>{CONFIG.brand.ctaSecondary.label}</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="text-sm text-gray-600">Clients rate us 5/5</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5"/>Quality by design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FeatureLine text="Conversion-first UX" />
                <FeatureLine text="SEO + analytics baked in" />
                <FeatureLine text="Fast, accessible, secure" />
                <FeatureLine text="Automations that save hours" />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* LOGOS */}
      <Section className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 items-center gap-6 opacity-80">
          {CONFIG.logos.map((logo) => (
            <div key={logo} className="text-center text-sm font-medium border rounded-xl py-3 bg-white">{logo}</div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">Solutions</h2>
          <p className="mt-2 text-gray-600">Pick what you need—or let us tailor a package.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {CONFIG.services.map((s) => (
            <FadeIn key={s.title}>
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {s.icon}
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2"><Check className="h-4 w-4"/>{pt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* WORK */}
      <Section id="work" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">Results</h2>
          <p className="mt-2 text-gray-600">Recent projects and outcomes.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {CONFIG.work.map((w) => (
            <FadeIn key={w.title}>
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{w.title}</CardTitle>
                    <Badge>{w.industry}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">{w.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </div>
                  <div className="text-sm font-medium">Result: {w.result}</div>
                  <Button asChild variant="outline" size="sm" className="rounded-xl">
                    <a href={w.link}>View case</a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">Process</h2>
          <p className="mt-2 text-gray-600">Clear steps, predictable timelines.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {CONFIG.process.map((step) => (
            <FadeIn key={step.title}>
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">{step.icon}{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">Pricing</h2>
          <p className="mt-2 text-gray-600">Transparent tiers. Custom scopes welcome.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {CONFIG.pricing.map((tier) => (
            <FadeIn key={tier.name}>
              <Card className={`rounded-2xl h-full ${tier.highlighted ? 'border border-black shadow-lg' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {tier.name}
                    {tier.highlighted && <Badge>Popular</Badge>}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold">{tier.price}</div>
                  <p className="text-sm text-gray-600">{tier.blurb}</p>
                  <ul className="space-y-2 text-sm">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4"/>{f}</li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-2xl">{tier.cta}</Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">What Clients Say</h2>
          <p className="mt-2 text-gray-600">Results, not buzzwords.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {CONFIG.testimonials.map((t, idx) => (
            <FadeIn key={idx}>
              <Card className="rounded-2xl h-full">
                <CardContent className="pt-6">
                  <Quote className="h-5 w-5 mb-2" />
                  <p className="text-base">“{t.quote}”</p>
                  <p className="mt-3 text-sm text-gray-600">{t.author} • {t.role}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-2 text-gray-600">Small, senior team shipping quickly with high standards.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Principles</CardTitle></CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-2">
              <p>🚀 Ship value early</p>
              <p>🎯 Obsess over outcomes</p>
              <p>🧪 Test & iterate</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Tooling</CardTitle></CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-2">
              <p>Next.js, Tailwind</p>
              <p>Make, Vapi, HighLevel</p>
              <p>GA4, Tag Manager, Search Console</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader><CardTitle>Coverage</CardTitle></CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-2">
              <p>Remote-first, UK/EU time zones</p>
              <p>Healthcare, SaaS, local services</p>
              <p>Security-first processes</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">FAQ</h2>
          <p className="mt-2 text-gray-600">If it’s not here, ask below.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {CONFIG.faq.map((f, i) => (
            <FadeIn key={i}>
              <Card className="rounded-2xl h-full">
                <CardHeader><CardTitle>{f.q}</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-gray-600">{f.a}</p></CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <h2 className="text-3xl font-bold">Let’s build something great</h2>
            <p className="mt-2 text-gray-600">Tell us about your project. We’ll reply within 1 business day.</p>

            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> {CONFIG.contact.phone}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> {CONFIG.contact.email}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {CONFIG.contact.address}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="rounded-2xl shadow-lg">
              <CardHeader><CardTitle>Project Form</CardTitle></CardHeader>
              <CardContent>
                <form className="space-y-4" action="https://formspree.io/f/your-id" method="post">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" type="email" placeholder="Email" required />
                  <Input name="company" placeholder="Company (optional)" />
                  <Textarea name="message" placeholder="What are you trying to achieve?" rows={5} required />
                  <Button type="submit" className="w-full rounded-2xl">Send</Button>
                </form>
                <p className="mt-2 text-xs text-gray-500">Replace the action URL with your Formspree endpoint.</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t bg-white/50">
        <Section className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Building2 className="h-4 w-4"/>
            <span>© {new Date().getFullYear()} {CONFIG.brand.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </Section>
      </footer>
    </div>
  )
}

function FeatureLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Check className="h-4 w-4" />
      <span>{text}</span>
    </div>
  )
}
