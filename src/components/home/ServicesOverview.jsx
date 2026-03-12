'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, ShoppingCart, MessageCircle, Smartphone, Bot, Settings, Rocket, AppWindow, TrendingUp, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: Globe,
    title: 'Smart Business Website',
    desc: 'Professional websites that turn visitors into paying customers. SEO-optimized, mobile-first, and built to convert.',
    href: '/services/smart-business-website',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    desc: 'Full online stores with M-Pesa integration. Sell online and accept payments from anywhere in Kenya.',
    href: '/services/ecommerce-development',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing Engine',
    desc: 'Reach thousands of customers on WhatsApp with targeted campaigns, automation, and analytics.',
    href: '/services/whatsapp-marketing',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: Smartphone,
    title: 'Business SMS Blaster',
    desc: 'Send bulk SMS to thousands of customers instantly with branded sender IDs and delivery reports.',
    href: '/services/sms-blaster',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Bot,
    title: 'AI Customer Assistant',
    desc: 'AI that replies to customers 24/7 on WhatsApp — answers FAQs, captures leads, and qualifies prospects.',
    href: '/services/ai-customer-assistant',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: Settings,
    title: 'Custom Business Systems',
    desc: 'Software built specifically for your operations — dashboards, CRMs, inventory, school systems, and more.',
    href: '/services/custom-business-systems',
    color: 'from-orange-500 to-orange-700',
  },
  {
    icon: Rocket,
    title: 'Business Launchpad',
    desc: 'Everything to launch your business in 7 days — registration, branding, eTIMS, website, and Google Business.',
    href: '/services/business-launchpad',
    color: 'from-rose-500 to-rose-700',
  },
  {
    icon: AppWindow,
    title: 'Smart Business App',
    desc: 'Put your business in customers\' pockets with a custom Android & iOS app featuring M-Pesa payments.',
    href: '/services/smart-business-app',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    icon: TrendingUp,
    title: 'Online Marketing & Sales Booster',
    desc: 'More leads and sales every month through social media, Google Ads, content, and WhatsApp funnels.',
    href: '/services/online-marketing',
    color: 'from-amber-500 to-amber-700',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 px-4 bg-hornbill-light dark:bg-gray-950" id="services" aria-label="Services overview">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Our Services"
          title="9 Ways We Help Your Business Grow"
          subtitle="From beautiful websites to AI-powered automation — we have everything your Kenyan business needs to thrive in the digital age."
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.href} variants={item}>
                <Link
                  href={service.href}
                  className="group block bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-hornbill-orange/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-hornbill-black dark:text-white mb-2 group-hover:text-hornbill-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-hornbill-orange text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
