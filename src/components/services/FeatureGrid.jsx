'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Globe, ShoppingCart, MessageCircle, Smartphone, Bot, Settings, Rocket, AppWindow, TrendingUp, Search, Users, Star, Shield, BookOpen, CreditCard, Package, Truck, BarChart2, Calendar, Zap, Database, Tag, Clock, Brain, Palette, FileText, Bell, Instagram, Video, Target } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { useInView } from 'react-intersection-observer'

const ICON_MAP = {
  Globe, ShoppingCart, MessageCircle, Smartphone, Bot, Settings, Rocket, AppWindow,
  TrendingUp, Search, Users, Star, Shield, BookOpen, CreditCard, Package, Truck,
  BarChart2, Calendar, Zap, Database, Tag, Clock, Brain, Palette, FileText, Bell,
  Instagram, Video, Target, CheckCircle2,
}

export default function FeatureGrid({ features, title = 'What You Get', subtitle }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 px-4 bg-hornbill-light dark:bg-gray-950" aria-label="Features">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          badge="Features"
          title={title}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = typeof feature.icon === 'string' ? (ICON_MAP[feature.icon] || CheckCircle2) : (feature.icon || CheckCircle2)
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-hornbill-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 bg-orange-100 dark:bg-orange-950 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-hornbill-orange" />
                </div>
                <h3 className="font-heading font-bold text-base text-hornbill-black dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
                {feature.items && (
                  <ul className="mt-3 space-y-1.5">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
