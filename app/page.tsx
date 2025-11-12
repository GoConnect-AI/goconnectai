'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Check,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Shield,
  Users,
  Layers,
  LineChart,
  Clock,
  Rocket,
  Workflow,
  Building2,
} from 'lucide-react'

const CONFIG = {
  brand: {
    name: 'GoConnectAI',
    tagline:
      'Grow revenue on autopilot — AI receptionists plus full-funnel automation for lead gen, reactivation, and retention.',
    ctaPrimary: { label: 'Book a demo', href: '#contact' },
    ctaSecondary: { label: 'Learn more', href: '#services' },
  },
  services: [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'AI Receptionist',
      desc: 'Smart inbound call handling that answers FAQs and books patients automatically.',
      points: [
        'Natural voice with 11Labs',
        'One-question-at-a-time flow',
        'HIPAA/GDPR-minded',
      ],
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: 'Clinic Automations',
      desc: 'Integrations with calendars, CRMs and PMS (SOE/Exact, Dentally, HighLevel, Google Calendar).',
      points: [
        'Missed-call capture',
        'Reschedule & cancellations',
        'Lead routing to CRM',
      ],
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Growth Systems',
      desc: 'Automation for reactivation, retention, and lead generation that fuels predictable revenue.',
      points: [
        'Marketing reactivation',
        'Customer retention',
        'Lead generation automations',
      ],
    },
  ],
  process: [
    {
      icon: <Users className="h-5 w-5" />,
      title: '1. Discover',
      desc: '30–45 min call to map your intake flow and KPIs (missed calls, show rate).',
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: '2. Design',
      desc: 'We script the voice agent, write on-brand copy, and wireframe your funnel.',
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: '3. Build',
      desc: 'Configure Vapi/11Labs, Make scenarios, and Next.js site with tracking.',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: '4. Launch',
      desc: 'Deploy, connect domain, QA calls, and review metrics in week 1.',
    },
  ],
  pricing: [
    {
      name: 'AI Receptionist',
      price: 'From £1,500 setup + monthly',
      blurb:
        'Voice agent + booking workflow + calendar/CRM integration.',
      features: [
        'Custom call script',
        'Reschedule/cancel',
        'Analytics dashboard',
        'Priority support',
      ],
      cta: 'Book a demo',
      highlighted: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      blurb:
        'Multi-location clinics, advanced reporting, or complex PMS integrations.',
      features: [
        'Unlimited flows',
        'Team training',
        'CRO testing',
        'SLA options',
      ],
      cta: 'Request a quote',
      highlighted: false,
    },
  ],
  faq: [
    {
      q: 'How does the AI handle complex queries?',
      a: 'We design a one-question-at-a-time flow with guardrails. For edge cases, it escalates to a human inbox or callback.',
    },
    {
      q: 'Can it integrate with our system?',
      a: 'We connect calendars, CRMs and—where supported—your practice system via API or secure exports.',
    },
    {
      q: 'Is it GDPR compliant?',
      a: 'We follow data-minimisation, encryption-in-transit, and provide a DPA on request. You retain data ownership.',
    },
  ],
  contact: {
    email: 'hello@goconnectai.com',
    phone: '+44 20 0000 0000',
    address: 'London, United Kingdom',
  },
}

const Section = ({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) => (
  <section
    id={id}
    className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </section>
)

const FadeIn = ({
  delay = 0,
  children,
}: {
  delay?: number
  children: React.ReactNode
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

export default function Page() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-primary/20">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold tracking-tight">
              {CONFIG.brand.name}
            </span>
            <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">
              Agency
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Solutions
            </a>
            <a
              href="#process"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Process
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button asChild size="sm">
            <a href={CONFIG.brand.ctaPrimary.href}>
              {CONFIG.brand.ctaPrimary.label}
            </a>
          </Button>
        </Section>
      </header>

      {/* Hero */}
      <Section className="pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {CONFIG.brand.tagline}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We combine AI, automation, and data to help you grow revenue and
              streamline operations — without extra staff.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href={CONFIG.brand.ctaPrimary.href}>
                  {CONFIG.brand.ctaPrimary.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl"
              >
                <a href={CONFIG.brand.ctaSecondary.href}>
                  {CONFIG.brand.ctaSecondary.label}
                </a>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Shield className="h-5 w-5" />
                  Quality by design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FeatureLine text="Turn more calls into bookings" />
                <FeatureLine text="Optimised for Google visibility & tracking" />
                <FeatureLine text="Fast, accessible, and secure by default" />
                <FeatureLine text="Automations for reactivation & retention" />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">
            <span className="underline decoration-primary/40 underline-offset-8">
              Solutions
            </span>
          </h2>
          <p className="mt-2 text-gray-600">
            From AI receptionists to marketing automation — everything connects.
          </p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {CONFIG.services.map((s) => (
            <FadeIn key={s.title}>
              <Card className="rounded-2xl h-full hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    {s.icon}
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">
            <span className="underline decoration-primary/40 underline-offset-8">
              Process
            </span>
          </h2>
          <p className="mt-2 text-gray-600">Simple steps, fast results.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {CONFIG.process.map((step) => (
            <FadeIn key={step.title}>
              <Card className="rounded-2xl h-full hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    {step.icon}
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">
            <span className="underline decoration-primary/40 underline-offset-8">
              Pricing
            </span>
          </h2>
          <p className="mt-2 text-gray-600">Transparent packages for any scale.</p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {CONFIG.pricing.map((tier) => (
            <FadeIn key={tier.name}>
              <Card
                className={`rounded-2xl h-full ${
                  tier.highlighted ? 'border border-primary shadow-lg' : ''
                }`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-primary">
                    {tier.name}
                    {tier.highlighted && (
                      <Badge className="bg-primary text-white">Popular</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold">{tier.price}</div>
                  <p className="text-sm text-gray-600">{tier.blurb}</p>
                  <ul className="space-y-2 text-sm">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-2xl">
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-16">
        <FadeIn>
          <h2 className="text-3xl font-bold">
            <span className="underline decoration-primary/40 underline-offset-8">
              FAQ
            </span>
          </h2>
          <p className="mt-2 text-gray-600">
            If it’s not here, ask below.
          </p>
        </FadeIn>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {CONFIG.faq.map((f, i) => (
            <FadeIn key={i}>
              <Card className="rounded-2xl h-full hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-primary">{f.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{f.a}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary">
              Let’s build something great
            </h2>
            <p className="mt-2 text-gray-600">
              Tell us about your project. We’ll reply within 1 business day.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> {CONFIG.contact.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> {CONFIG.contact.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> {CONFIG.contact.address}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="rounded-2xl shadow-lg border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Project Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  action="https://formspree.io/f/your-id"
                  method="post"
                >
                  <Input name="name" placeholder="Your name" required />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <Input name="company" placeholder="Company (optional)" />
                  <Textarea
                    name="message"
                    placeholder="What are you trying to achieve?"
                    rows={5}
                    required
                  />
                  <Button type="submit" className="w-full rounded-2xl">
                    Send
                  </Button>
                </form>
                <p className="mt-2 text-xs text-gray-500">
                  Replace the action URL with your Formspree endpoint.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white/50">
        <Section className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Building2 className="h-4 w-4 text-primary" />
            <span>
              © {new Date().getFullYear()} {CONFIG.brand.name}. All rights
              reserved.
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>
        </Section>
      </footer>
    </div>
  )
}

function FeatureLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Check className="h-4 w-4 text-primary" />
      <span>{text}</span>
    </div>
  )
}
