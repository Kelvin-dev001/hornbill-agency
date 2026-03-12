'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      className="py-24 px-4 bg-gradient-to-br from-hornbill-orange via-hornbill-dark-orange to-orange-800 relative overflow-hidden"
      aria-label="Call to action"
      ref={ref}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Limited slots for March — Book now before they fill up!
          </div>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>

          <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ Kenyan businesses that have already taken the leap with Hornbill Tech Agency.
            Get a free consultation today — no commitment, no pressure, just honest advice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="xl" variant="white" className="font-bold text-hornbill-orange">
              <a
                href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-hornbill-orange font-bold"
            >
              <a
                href="https://calendly.com/kelvinoyugi101/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-bold"
            >
              <a href="tel:+254759293030" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-orange-100 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-300 font-bold">✓</span>
              Free consultation, no strings attached
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 font-bold">✓</span>
              Response within 2 hours
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-300 font-bold">✓</span>
              500+ businesses served
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
