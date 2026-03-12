'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MessageCircle, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ServiceHero({ title, description, gradient = 'from-hornbill-orange to-hornbill-dark-orange', badge, breadcrumb }) {
  return (
    <section className={`relative bg-gradient-to-br ${gradient} pt-32 pb-20 px-4 overflow-hidden`} aria-label="Service hero">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-4xl leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/85 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" variant="white">
            <a
              href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Get a Free Quote
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-hornbill-orange"
          >
            <a
              href="https://calendly.com/kelvinoyugi101/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
