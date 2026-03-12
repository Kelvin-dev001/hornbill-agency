'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: 'James Mwangi',
    company: 'Mwangi Electronics',
    role: 'CEO',
    text: 'Hornbill built our e-commerce website with M-Pesa integration and our online sales increased by 300% in 3 months. Best investment we ever made for our business!',
    rating: 5,
    location: 'Nairobi',
  },
  {
    name: 'Fatuma Hassan',
    company: 'Coastal Spices Co.',
    role: 'Founder',
    text: 'The WhatsApp marketing automation has completely transformed how we communicate with customers. We went from manual messaging to automated campaigns that run themselves.',
    rating: 5,
    location: 'Mombasa',
  },
  {
    name: 'Peter Ochieng',
    company: 'TechStart Kenya',
    role: 'Managing Director',
    text: 'Our AI customer assistant handles 200+ customer queries daily without any human intervention. Hornbill delivered exactly what they promised, on time and within budget.',
    rating: 5,
    location: 'Kisumu',
  },
  {
    name: 'Grace Wanjiku',
    company: 'Wanjiku Beauty Centre',
    role: 'Owner',
    text: 'The Business Launchpad package was incredible value. We got our company registered, branded, and online in just one week. Absolutely amazing service from the Hornbill team!',
    rating: 5,
    location: 'Thika',
  },
  {
    name: 'Samuel Kipchoge',
    company: 'Rift Logistics',
    role: 'Operations Manager',
    text: 'Our custom business system manages 50+ drivers, delivery tracking, and invoicing. It has saved us 20+ hours every week. Worth every shilling we invested.',
    rating: 5,
    location: 'Nakuru',
  },
  {
    name: 'Amina Osman',
    company: 'Somali Fashion House',
    role: 'Creative Director',
    text: 'The Smart Business App they built for us has over 1,000 downloads in the first month! Our customers love it and we\'ve seen a huge boost in repeat purchases.',
    rating: 5,
    location: 'Nairobi',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-hornbill-orange text-hornbill-orange' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const visibleCount = 3
  const visible = testimonials.slice(current, current + visibleCount).concat(
    testimonials.slice(0, Math.max(0, current + visibleCount - testimonials.length))
  )

  return (
    <section className="py-24 px-4 bg-hornbill-light dark:bg-gray-950" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          badge="Client Love"
          title="What Kenyan Businesses Say About Us"
          subtitle="Don't just take our word for it. Here are real stories from real businesses we've helped transform."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.name}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm relative"
              >
                <Quote className="w-8 h-8 text-hornbill-orange/20 absolute top-4 right-4" />
                <StarRating rating={t.rating} />
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-4 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-hornbill-orange to-hornbill-dark-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-hornbill-black dark:text-white text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                    <div className="text-xs text-hornbill-orange">📍 {t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-hornbill-orange hover:border-hornbill-orange hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-hornbill-orange w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-hornbill-orange hover:border-hornbill-orange hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
