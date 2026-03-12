'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Calendar, Clock, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input, Textarea, Label, Select } from '@/components/ui/input'
import { SectionHeading } from '@/components/shared/SectionHeading'

const services = [
  'Smart Business Website',
  'E-commerce Development',
  'WhatsApp Marketing Engine',
  'SMS Blaster',
  'AI Customer Assistant',
  'Custom Business Systems',
  'Business Launchpad',
  'Smart Business App',
  'Online Marketing & Sales Booster',
  'Other / Not Sure',
]

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Hornbill Tech Agency',
  description: 'Get in touch with Hornbill Tech Agency for your digital solutions needs.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254759293030',
    email: 'hornbillkenya@gmail.com',
    contactType: 'customer service',
    areaServed: 'KE',
    availableLanguage: ['English', 'Swahili'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  },
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hello Hornbill Tech Agency!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0AService Interest: ${encodeURIComponent(form.service)}%0AMessage: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/254759293030?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <section className="bg-hornbill-dark pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-hornbill-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" />
            We reply within 2 hours ⚡
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Let&apos;s Build Something Amazing
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Get in touch and let&apos;s discuss how we can help you grow. Karibu!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-hornbill-light dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-hornbill-black dark:text-white mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-hornbill-orange/50 transition-all group"
                  >
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-hornbill-black dark:text-white text-sm">WhatsApp (Fastest)</p>
                      <p className="text-gray-500 text-sm">+254 759 293 030</p>
                    </div>
                  </a>

                  <a
                    href="tel:+254759293030"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-hornbill-orange/50 transition-all group"
                  >
                    <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-hornbill-black dark:text-white text-sm">Phone</p>
                      <p className="text-gray-500 text-sm">+254 759 293 030</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hornbillkenya@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-hornbill-orange/50 transition-all group"
                  >
                    <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-hornbill-orange transition-colors">
                      <Mail className="w-5 h-5 text-hornbill-orange group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-hornbill-black dark:text-white text-sm">Email</p>
                      <p className="text-gray-500 text-sm">hornbillkenya@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                    <div className="w-11 h-11 bg-red-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-hornbill-black dark:text-white text-sm">Office</p>
                      <p className="text-gray-500 text-sm">Mombasa, Kenya</p>
                    </div>
                  </div>

                  <a
                    href="https://www.facebook.com/profile.php?id=61585923812346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Facebook className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-hornbill-black dark:text-white text-sm">Facebook</p>
                      <p className="text-gray-500 text-sm">Hornbill Tech Agency</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-hornbill-orange" />
                  <h3 className="font-semibold text-hornbill-black dark:text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-green-600 font-semibold">⚡ WhatsApp replies within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <h2 className="font-heading font-bold text-2xl text-hornbill-black dark:text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form below and we&apos;ll connect you via WhatsApp instantly.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="font-heading font-bold text-xl text-hornbill-black dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500">We&apos;ve received your message and will get back to you within 2 hours via WhatsApp.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          placeholder="John Mwangi"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone / WhatsApp *</Label>
                        <Input
                          id="phone"
                          required
                          placeholder="+254 7XX XXX XXX"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@business.co.ke"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Interest *</Label>
                      <Select
                        id="service"
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="mt-1"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about your project and what you're looking to achieve..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </Button>
                    <p className="text-xs text-gray-400 text-center">
                      This will open WhatsApp with your message pre-filled. We respond within 2 hours.
                    </p>
                  </form>
                )}
              </div>

              {/* Calendly */}
              <div className="mt-8 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-hornbill-orange" />
                  <h3 className="font-heading font-bold text-xl text-hornbill-black dark:text-white">
                    Book a Free 30-Minute Consultation
                  </h3>
                </div>
                <p className="text-gray-500 text-sm mb-5">
                  Prefer a scheduled call? Pick a time that works for you and we&apos;ll discuss your business needs in detail.
                </p>
                <Button asChild size="lg" className="w-full">
                  <a
                    href="https://calendly.com/kelvinoyugi101/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Free Call on Calendly
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
