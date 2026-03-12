'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { useInView } from 'react-intersection-observer'

const clients = [
  { name: 'Nairobi Tech Hub', color: 'bg-blue-100 dark:bg-blue-900' },
  { name: 'Coast Traders', color: 'bg-green-100 dark:bg-green-900' },
  { name: 'Savanna Logistics', color: 'bg-yellow-100 dark:bg-yellow-900' },
  { name: 'Maisha Sacco', color: 'bg-purple-100 dark:bg-purple-900' },
  { name: 'Kilimanjaro Foods', color: 'bg-red-100 dark:bg-red-900' },
  { name: 'Diani Resorts', color: 'bg-teal-100 dark:bg-teal-900' },
  { name: 'Nakuru Farmers', color: 'bg-lime-100 dark:bg-lime-900' },
  { name: 'Eastside Fashion', color: 'bg-pink-100 dark:bg-pink-900' },
  { name: 'Mara Adventures', color: 'bg-orange-100 dark:bg-orange-900' },
  { name: 'Kisumu Retail', color: 'bg-indigo-100 dark:bg-indigo-900' },
]

export default function ClientLogos() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-16 px-4 bg-hornbill-light dark:bg-gray-950 overflow-hidden" aria-label="Client logos">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-widest">
            Trusted by businesses across Kenya
          </p>
        </motion.div>

        <div className="marquee-container">
          <div className="flex gap-6 marquee-wrapper">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className={`flex-shrink-0 ${client.color} rounded-xl px-6 py-4 flex items-center justify-center min-w-[160px] h-16 border border-gray-200 dark:border-gray-700`}
              >
                <span className="font-heading font-bold text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
