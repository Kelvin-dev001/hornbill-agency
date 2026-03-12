'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'

export default function ServiceCTA({ title = 'Ready to get started?', subtitle }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-hornbill-black to-gray-900 relative overflow-hidden"
      aria-label="Service call to action"
      ref={ref}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, #F7941D 0%, transparent 60%)`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-hornbill-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          <Clock className="w-4 h-4" />
          Limited slots available — Act now
        </div>

        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          {title}
        </h2>

        {subtitle && (
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg">
            <a
              href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
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
          <Button asChild size="lg" variant="ghost" className="text-gray-400 hover:text-white">
            <a href="tel:+254759293030" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +254 759 293 030
            </a>
          </Button>
        </div>

        <p className="text-gray-500 text-sm">
          Free consultation • No commitment • Response within 2 hours
        </p>
      </motion.div>
    </section>
  )
}
