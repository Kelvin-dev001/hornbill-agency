'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Filter } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import CTASection from '@/components/home/CTASection'

const caseStudies = [
  {
    id: 1,
    client: 'Nairobi Fashion Hub',
    industry: 'Retail & E-commerce',
    challenge: 'The business had no online presence and was losing sales to competitors with online stores. Order management was entirely manual using WhatsApp messages.',
    solution: 'We built a full e-commerce platform with M-Pesa integration, WhatsApp order notifications, inventory management, and automated delivery tracking.',
    results: ['280% revenue increase in 90 days', 'KSh 171K monthly revenue (from KSh 45K)', '200+ online orders per month', 'Zero manual order entry errors'],
    quote: 'Hornbill transformed our business completely. We went from struggling to thriving in just three months.',
    quoteName: 'Mary Wangari, CEO',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 2,
    client: 'Mama Mboga Chain',
    industry: 'Food & Agriculture',
    challenge: 'A growing vegetable retail chain with 5 locations struggling to coordinate orders, manage customer communication, and track inventory across branches.',
    solution: 'WhatsApp Marketing Engine with automated campaigns, AI Customer Assistant for 24/7 order taking, and a custom inventory management system.',
    results: ['5x customer base growth in 60 days', '1,200+ active customers (from 200)', '75+ daily orders (from 15)', 'Saved 6 staff hours per day'],
    quote: 'Our customers now order via WhatsApp automatically. We wake up to orders every morning without doing anything!',
    quoteName: 'Jane Njoroge, Founder',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 3,
    client: 'Safari Logistics Ltd.',
    industry: 'Transport & Logistics',
    challenge: 'Managing 50+ drivers manually via phone calls, with billing errors costing KSh 200,000+ monthly and zero visibility into fleet performance.',
    solution: 'Custom Business System with real-time driver tracking, automated job dispatch, digital invoicing, payment reconciliation, and management dashboard.',
    results: ['35% operational cost reduction', 'KSh 200K+ saved monthly on billing errors', '34 admin hours saved per week', '99.9% billing accuracy'],
    quote: 'The system paid for itself within the first month. I now run 50 drivers from my phone.',
    quoteName: 'Samuel Kipchoge, Operations Manager',
    color: 'from-orange-500 to-orange-700',
  },
  {
    id: 4,
    client: 'Coastal Dental Clinic',
    industry: 'Healthcare',
    challenge: 'Appointment booking was via phone only, causing missed appointments, double bookings, and overwhelmed reception staff.',
    solution: 'Smart Business Website with online booking, AI Customer Assistant for appointment queries, SMS/WhatsApp appointment reminders, and patient management dashboard.',
    results: ['60% reduction in no-shows', 'Online appointments now 70% of all bookings', 'Reception workload reduced by 50%', '35% revenue growth in 6 months'],
    quote: 'The AI assistant answers patient questions at 2am when we\'re closed. Incredible technology.',
    quoteName: 'Dr. Hassan Abdi, Clinic Owner',
    color: 'from-teal-500 to-teal-700',
  },
  {
    id: 5,
    client: 'Savanna Real Estate',
    industry: 'Real Estate',
    challenge: 'No digital presence, losing leads to competitors with professional websites. Property listings managed in Excel spreadsheets.',
    solution: 'Professional website with property listing system, WhatsApp chat integration, Google Business setup, and SEO optimization targeting Nairobi property searches.',
    results: ['Page 1 Google ranking for "houses for sale Nairobi"', '150+ monthly website enquiries', '25 properties sold in first 3 months online', 'KSh 4M+ in commissions generated'],
    quote: 'We went from zero online presence to dominating Google search for our market. Best investment ever.',
    quoteName: 'Peter Omondi, Sales Director',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 6,
    client: 'Starline Secondary School',
    industry: 'Education',
    challenge: 'Student records on paper, fee payments tracked manually, parent communication via physical notices, and no visibility on student performance.',
    solution: 'Custom School Management System with student records, fee management with M-Pesa integration, parent portal, and performance analytics dashboard.',
    results: ['100% digital fee collection', '95% reduction in fee collection errors', 'Parent satisfaction score up 40%', 'Administration time cut by 60%'],
    quote: 'Parents can now check their child\'s fees and performance from their phones. We are a modern school now.',
    quoteName: 'Principal Grace Muthoni',
    color: 'from-indigo-500 to-indigo-700',
  },
]

const industries = ['All', ...new Set(caseStudies.map((cs) => cs.industry))]

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? caseStudies : caseStudies.filter((cs) => cs.industry === filter)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hornbill-dark pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-hornbill-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Real Results, Real Businesses
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
            Case Studies: How We Transform Kenyan Businesses
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Every business is unique. See how we have solved real challenges for businesses across Kenya with measurable, lasting results.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 bg-white dark:bg-hornbill-dark border-b border-gray-100 dark:border-gray-800 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-gray-500" />
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filter === ind
                    ? 'bg-hornbill-orange text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-orange-950 hover:text-hornbill-orange'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-hornbill-light dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {filtered.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className={`bg-gradient-to-br ${cs.color} p-8 text-white flex flex-col justify-between`}>
                    <div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                        {cs.industry}
                      </Badge>
                      <h2 className="font-heading font-bold text-2xl mb-4">{cs.client}</h2>
                    </div>
                    <blockquote className="border-l-2 border-white/50 pl-4">
                      <p className="text-white/85 text-sm italic mb-2">&ldquo;{cs.quote}&rdquo;</p>
                      <cite className="text-white/70 text-xs font-semibold">— {cs.quoteName}</cite>
                    </blockquote>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">The Challenge</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Our Solution</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Results Achieved</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cs.results.map((result) => (
                          <div key={result} className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
