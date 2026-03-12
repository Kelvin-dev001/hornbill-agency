'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, X, MessageCircle, Star } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useInView } from 'react-intersection-observer'

export default function PricingTable({ packages, title = 'Pricing & Packages' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 px-4 bg-white dark:bg-hornbill-dark" aria-label="Pricing">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          badge="Pricing"
          title={title}
          subtitle="All prices in KES. Flexible payment plans available. Contact us for a custom quote."
        />

        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(packages.length, 3)} gap-8`}>
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl border-2 overflow-hidden ${
                pkg.popular
                  ? 'border-hornbill-orange shadow-2xl shadow-orange-500/20 scale-105'
                  : 'border-gray-200 dark:border-gray-800'
              }`}
            >
              {pkg.popular && (
                <div className="bg-hornbill-orange text-white text-center text-xs font-bold py-2 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? 'bg-orange-50 dark:bg-orange-950/30' : 'bg-white dark:bg-gray-900'}`}>
                <Badge variant={pkg.popular ? 'default' : 'secondary'} className="mb-3">
                  {pkg.name}
                </Badge>
                <div className="mb-6">
                  <div className="font-heading font-black text-3xl text-hornbill-black dark:text-white">
                    {pkg.price}
                  </div>
                  {pkg.period && (
                    <div className="text-sm text-gray-500">{pkg.period}</div>
                  )}
                  {pkg.note && (
                    <div className="text-xs text-hornbill-orange mt-1 font-medium">{pkg.note}</div>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {pkg.desc}
                </p>

                <Button
                  asChild
                  className="w-full mb-6"
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  <a
                    href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get Started
                  </a>
                </Button>

                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2.5 text-sm">
                      {feature.included ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'}>
                        {feature.name}
                        {feature.value && <span className="font-semibold text-hornbill-black dark:text-white"> — {feature.value}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>All prices are in KES (Kenyan Shillings). Prices may vary based on project complexity.</p>
          <p className="mt-1">Need something custom? <a href="https://wa.me/254759293030" target="_blank" rel="noopener noreferrer" className="text-hornbill-orange hover:underline">WhatsApp us</a> for a tailored quote.</p>
        </div>
      </div>
    </section>
  )
}
