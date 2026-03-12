'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    q: 'How much does a business website cost in Kenya?',
    a: 'Our websites start from KSh 35,000 for a Starter package (up to 5 pages) and go up to KSh 150,000+ for a Professional package with advanced SEO and more pages. The exact price depends on your specific requirements. We offer flexible payment plans — contact us for a free quote.',
  },
  {
    q: 'Do you offer M-Pesa integration?',
    a: 'Yes! M-Pesa integration is a specialty of ours. We integrate M-Pesa into e-commerce sites, business apps, booking systems, and any other platform that needs payment processing. We work with all M-Pesa APIs including STK Push, C2B, and B2C.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A standard business website takes 2–4 weeks from kickoff to launch. An e-commerce site takes 4–8 weeks. A custom business system can take 8–16 weeks depending on complexity. We always give you a clear timeline before we start, and we stick to it.',
  },
  {
    q: 'Can you help me register my business and brand it?',
    a: 'Absolutely! Our Business Launchpad package covers everything — company registration, logo design, business cards, letterhead, eTIMS setup, and even a website. It\'s designed to get your business fully set up in just 7 days.',
  },
  {
    q: 'What is an AI Customer Assistant and how does it work?',
    a: 'Our AI Customer Assistant is a WhatsApp chatbot powered by artificial intelligence. It automatically answers customer questions, provides product information, captures leads, and qualifies prospects — 24 hours a day, 7 days a week, without any human intervention.',
  },
  {
    q: 'Do you offer ongoing support after the project is complete?',
    a: 'Yes! All our packages include a free support period (1–3 months depending on the package). After that, we offer monthly maintenance plans. We also provide training so your team can manage your website/system confidently.',
  },
  {
    q: 'Can you build a mobile app for my business?',
    a: 'Yes! Our Smart Business App service creates custom Android and iOS apps for all types of businesses. Apps start from KSh 120,000 for a basic app and go up to KSh 2M+ for enterprise-grade applications with complex features.',
  },
  {
    q: 'How do I get started with Hornbill Tech Agency?',
    a: 'It\'s simple! Book a free 30-minute consultation via our Calendly link, or send us a WhatsApp message at +254 759 293 030. We\'ll discuss your needs, give you a proposal, and get started once you\'re happy. No commitment required for the consultation.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 px-4 bg-white dark:bg-hornbill-dark" aria-label="Frequently asked questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto" ref={ref}>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Hornbill Tech Agency. Can't find your answer? WhatsApp us!"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-hornbill-light dark:bg-gray-900 rounded-xl border-none px-4">
                <AccordionTrigger className="font-semibold text-hornbill-black dark:text-white hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
