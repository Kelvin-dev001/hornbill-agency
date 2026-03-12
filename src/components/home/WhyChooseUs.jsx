'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, HeartHandshake, Globe2 } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: '500', suffix: '+', label: 'Projects Delivered', icon: '🚀' },
  { value: '98', suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
  { value: '24', suffix: '/7', label: 'Support Available', icon: '🛟' },
  { value: '5', suffix: '+', label: 'Years of Excellence', icon: '🏆' },
]

const reasons = [
  {
    icon: Globe2,
    title: 'Deep Local Expertise',
    desc: 'We understand the Kenyan market. From M-Pesa integration to Swahili content, we build solutions that resonate with your local customers.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery, No Excuses',
    desc: 'Our streamlined process means you get your project on time, every time. No endless delays — just results that work for your business.',
  },
  {
    icon: HeartHandshake,
    title: 'Affordable Premium Quality',
    desc: 'Silicon Valley quality at Nairobi prices. We believe great technology should be accessible to every Kenyan business, no matter the size.',
  },
  {
    icon: Shield,
    title: 'Ongoing Support & Training',
    desc: 'We don\'t just build and disappear. After launch, we train your team, provide maintenance, and stay available whenever you need us.',
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 px-4 bg-white dark:bg-hornbill-dark" aria-label="Why choose us">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Why Hornbill?"
          title="Built for African Businesses. Proven by Results."
          subtitle="We are not just developers — we are your business growth partners. Here is why 500+ businesses across Kenya trust us."
        />

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center bg-hornbill-light dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-heading font-black text-4xl text-hornbill-orange">
                {inView ? (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-950 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-hornbill-orange" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-hornbill-black dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
