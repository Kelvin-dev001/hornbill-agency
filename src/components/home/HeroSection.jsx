'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustBadges = [
  { value: '500+', label: 'Businesses Served' },
  { value: '5+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${4 + Math.random() * 6}s`,
  size: `${4 + Math.random() * 8}px`,
  opacity: 0.1 + Math.random() * 0.3,
}))

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-hornbill-dark overflow-hidden"
      aria-label="Hero section"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hornbill-dark via-gray-900 to-black" />
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-transparent" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(247,148,29,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(247,148,29,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-hornbill-orange particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-hornbill-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-hornbill-orange rounded-full animate-pulse" />
            Karibu — Welcome to Hornbill Tech Agency 🇰🇪
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6"
          >
            We Offer Technology Solutions That Help{' '}
            <span className="text-hornbill-orange">African Businesses</span>{' '}
            Launch, Grow, and Automate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl"
          >
            Hornbill Tech Agency helps startups and growing companies build powerful smart websites,
            automate customer conversations with AI, and develop custom business systems that scale their operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Button asChild size="lg">
              <a
                href="https://calendly.com/kelvinoyugi101/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Get Free Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
              <Link href="/services" className="flex items-center gap-2">
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="w-5 h-5 text-hornbill-orange flex-shrink-0" />
                <div>
                  <div className="font-heading font-bold text-xl text-white">{badge.value}</div>
                  <div className="text-xs text-gray-400">{badge.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-hornbill-dark to-transparent" />
    </section>
  )
}
