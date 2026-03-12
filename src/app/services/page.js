
import Link from 'next/link'
import { Globe, ShoppingCart, MessageCircle, Smartphone, Bot, Settings, Rocket, AppWindow, TrendingUp, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/button'
import CTASection from '@/components/home/CTASection'

const ICON_MAP = { Globe, ShoppingCart, MessageCircle, Smartphone, Bot, Settings, Rocket, AppWindow, TrendingUp }

export const metadata = {
  title: 'Our Services | Hornbill Tech Agency',
  description:
    'Explore all 9 digital services from Hornbill Tech Agency — websites, e-commerce, WhatsApp marketing, AI assistants, custom systems, and more for Kenyan businesses.',
}

const services = [
  {
    icon: 'Globe',
    title: 'Smart Business Website',
    desc: 'Professional, mobile-first websites that turn visitors into paying customers. SEO-optimized and built to convert.',
    href: '/services/smart-business-website',
    price: 'From KSh 35,000',
    color: 'from-blue-500 to-blue-700',
    highlights: ['5–15 pages', 'WhatsApp integration', 'SEO setup', 'Google Business'],
  },
  {
    icon: 'ShoppingCart',
    title: 'E-commerce Development',
    desc: 'Full online stores with M-Pesa integration, inventory management, and everything to sell online.',
    href: '/services/ecommerce-development',
    price: 'From KSh 80,000',
    color: 'from-green-500 to-green-700',
    highlights: ['M-Pesa payments', 'Product catalog', 'Order management', 'Marketing tools'],
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Marketing Engine',
    desc: 'Reach thousands of customers on WhatsApp with targeted campaigns, automation, and detailed analytics.',
    href: '/services/whatsapp-marketing',
    price: 'From KSh 15,000 setup',
    color: 'from-emerald-500 to-emerald-700',
    highlights: ['Mass messaging', 'Campaign automation', 'Contact management', 'Delivery analytics'],
  },
  {
    icon: 'Smartphone',
    title: 'Business SMS Blaster',
    desc: 'Send bulk SMS to thousands of customers instantly with branded sender IDs and delivery reports.',
    href: '/services/sms-blaster',
    price: 'From KSh 10,000 setup',
    color: 'from-purple-500 to-purple-700',
    highlights: ['Branded sender ID', 'Bulk SMS', 'Scheduled campaigns', 'Delivery reports'],
  },
  {
    icon: 'Bot',
    title: 'AI Customer Assistant',
    desc: 'AI that replies to customers 24/7 on WhatsApp — FAQs, lead capture, product info, and qualification.',
    href: '/services/ai-customer-assistant',
    price: 'From KSh 50,000 setup',
    color: 'from-indigo-500 to-indigo-700',
    highlights: ['24/7 responses', 'Lead capture', 'WhatsApp integration', 'Analytics dashboard'],
  },
  {
    icon: 'Settings',
    title: 'Custom Business Systems',
    desc: 'Software built specifically for your operations — dashboards, CRMs, inventory, school systems.',
    href: '/services/custom-business-systems',
    price: 'From KSh 150,000',
    color: 'from-orange-500 to-orange-700',
    highlights: ['Custom dashboards', 'M-Pesa integration', 'User management', 'Reporting & analytics'],
  },
  {
    icon: 'Rocket',
    title: 'Business Launchpad',
    desc: 'Everything to launch your business in 7 days — registration, branding, eTIMS, website, and Google Business.',
    href: '/services/business-launchpad',
    price: 'From KSh 18,000',
    color: 'from-rose-500 to-rose-700',
    highlights: ['Company registration', 'Logo design', 'Business cards', 'eTIMS setup'],
  },
  {
    icon: 'AppWindow',
    title: 'Smart Business App',
    desc: 'Custom Android & iOS apps with M-Pesa payments, push notifications, and full admin dashboard.',
    href: '/services/smart-business-app',
    price: 'From KSh 120,000',
    color: 'from-cyan-500 to-cyan-700',
    highlights: ['Android & iOS', 'M-Pesa payments', 'Push notifications', 'Admin dashboard'],
  },
  {
    icon: 'TrendingUp',
    title: 'Online Marketing & Sales Booster',
    desc: 'More leads and sales every month — social media, Google Ads, content creation, and WhatsApp funnels.',
    href: '/services/online-marketing',
    price: 'From KSh 20,000/mo',
    color: 'from-amber-500 to-amber-700',
    highlights: ['Social media', 'Google Ads', 'Content creation', 'WhatsApp funnels'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hornbill-dark pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-hornbill-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            9 Services to Grow Your Business
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Everything Your Business Needs to Thrive Online
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From a simple business website to enterprise AI systems — we have the expertise and tools to transform your business, all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-hornbill-light dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="All Services"
            title="Pick the Service That Fits Your Needs"
            subtitle="Not sure where to start? Book a free consultation and we'll recommend the best solution for your business."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = ICON_MAP[service.icon] || Globe
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-hornbill-orange/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                    <Icon className="w-8 h-8 mb-3" />
                    <h2 className="font-heading font-bold text-xl mb-1">{service.title}</h2>
                    <p className="text-white/80 text-sm font-semibold">{service.price}</p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {service.desc}
                    </p>
                    <ul className="space-y-1 mb-5">
                      {service.highlights.map((h) => (
                        <li key={h} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-hornbill-orange rounded-full flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-hornbill-orange text-sm font-semibold group-hover:gap-2 transition-all">
                      Explore Service <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Not Sure? */}
      <section className="py-16 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl text-hornbill-black dark:text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Book a free 30-minute consultation with our team. We will analyze your business and recommend the exact solutions that will drive the most growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a
                href="https://calendly.com/kelvinoyugi101/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
