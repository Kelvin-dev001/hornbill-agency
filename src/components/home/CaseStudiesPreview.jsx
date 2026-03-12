'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

const caseStudies = [
  {
    client: 'Nairobi Fashion Hub',
    industry: 'E-commerce / Retail',
    challenge: 'Struggling with manual order management and no online presence',
    solution: 'Custom e-commerce website with M-Pesa integration and WhatsApp order notifications',
    result: '+280% revenue increase in 90 days',
    metric1: { label: 'Monthly Revenue', before: 'KSh 45K', after: 'KSh 171K' },
    metric2: { label: 'Online Orders', before: '0/month', after: '200+/month' },
    color: 'from-blue-500 to-blue-700',
  },
  {
    client: 'Mama Mboga Chain',
    industry: 'Food / Agriculture',
    challenge: 'Unable to reach customers efficiently, losing sales to competitors',
    solution: 'WhatsApp Marketing Engine + AI Customer Assistant for 24/7 order taking',
    result: '5x customer base growth in 60 days',
    metric1: { label: 'Customer Reach', before: '200 contacts', after: '1,200+ contacts' },
    metric2: { label: 'Daily Orders', before: '15/day', after: '75+/day' },
    color: 'from-green-500 to-green-700',
  },
  {
    client: 'Safari Logistics Ltd.',
    industry: 'Transport / Logistics',
    challenge: 'Tracking 50 drivers manually via phone calls, billing errors, no data',
    solution: 'Custom Business System with driver tracking, automated invoicing, and reporting dashboard',
    result: '35% operational cost reduction',
    metric1: { label: 'Admin Hours Saved', before: '40hrs/week', after: '6hrs/week' },
    metric2: { label: 'Billing Accuracy', before: '72%', after: '99.9%' },
    color: 'from-orange-500 to-orange-700',
  },
]

export default function CaseStudiesPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 px-4 bg-white dark:bg-hornbill-dark" aria-label="Case studies preview">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          badge="Proof of Work"
          title="Real Results for Real Businesses"
          subtitle="Numbers don't lie. See how we've transformed Kenyan businesses just like yours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-hornbill-light dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${cs.color} p-6 text-white`}>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-3">
                  {cs.industry}
                </Badge>
                <h3 className="font-heading font-bold text-xl">{cs.client}</h3>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{cs.challenge}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Solution</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{cs.solution}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  {[cs.metric1, cs.metric2].map((metric) => (
                    <div key={metric.label} className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                      <div className="flex items-center justify-center gap-2 text-xs">
                        <span className="text-red-500 line-through">{metric.before}</span>
                        <ArrowRight className="w-3 h-3 text-gray-400" />
                        <span className="text-green-600 font-bold">{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-hornbill-orange font-semibold text-sm bg-orange-50 dark:bg-orange-950 rounded-xl p-3">
                  <TrendingUp className="w-4 h-4" />
                  {cs.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/case-studies" className="flex items-center gap-2">
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
