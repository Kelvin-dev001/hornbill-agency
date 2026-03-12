
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'Smart Business Website | Professional Websites in Kenya | Hornbill Tech',
  description:
    'Professional business websites starting from KSh 35,000. Mobile-first, SEO-optimized, with WhatsApp integration and M-Pesa ready. Serving businesses across Kenya.',
}

const features = [
  {
    icon: 'Smartphone',
    title: 'Professional Website Design',
    desc: 'Modern, mobile-first design that loads fast and looks stunning on any device — phone, tablet, or desktop.',
    items: ['Custom design matching your brand', 'Mobile-first responsive layout', 'Fast loading — under 3 seconds', 'SEO-friendly structure'],
  },
  {
    icon: 'Users',
    title: 'Lead Generation Tools',
    desc: 'Every element is designed to turn visitors into paying customers through strategic CTAs and WhatsApp integration.',
    items: ['WhatsApp chat button', 'Contact forms with notifications', 'CTA buttons throughout', 'Inquiry tracking'],
  },
  {
    icon: 'Star',
    title: 'Business Credibility',
    desc: 'Build instant trust with professional pages that showcase your expertise, portfolio, and client testimonials.',
    items: ['Company profile integration', 'Services & portfolio pages', 'Testimonials section', 'Team/about pages'],
  },
  {
    icon: 'Search',
    title: 'Google Visibility',
    desc: 'Get found on Google when potential customers search for your services in Kenya.',
    items: ['Google indexing setup', 'Basic to Advanced SEO', 'Google Business integration', 'Meta tags & descriptions'],
  },
  {
    icon: 'Shield',
    title: 'Security & Performance',
    desc: 'Enterprise-grade security and blazing-fast performance to keep your website safe and your visitors happy.',
    items: ['Free SSL certificate (HTTPS)', 'Speed optimization', 'Spam protection', 'Regular security updates'],
  },
  {
    icon: 'BookOpen',
    title: 'Training & Handover',
    desc: 'We don\'t just build and disappear. We train your team to manage and update your website confidently.',
    items: ['Content management training', 'Video tutorials provided', 'Documentation handover', 'Ongoing support options'],
  },
]

const packages = [
  {
    name: 'Starter',
    price: 'KSh 35,000 – 60,000',
    desc: 'Perfect for small businesses and startups wanting to establish a professional online presence.',
    features: [
      { name: 'Pages', included: true, value: 'Up to 5 pages' },
      { name: 'Mobile Responsive Design', included: true },
      { name: 'Basic SEO Setup', included: true },
      { name: 'WhatsApp Integration', included: true },
      { name: 'Contact Form', included: true, value: '1 form' },
      { name: 'Google Business Setup', included: false },
      { name: 'Content Training', included: true, value: 'Basic' },
      { name: 'Free Maintenance', included: true, value: '1 month' },
      { name: 'SSL Certificate', included: true },
    ],
  },
  {
    name: 'Professional',
    price: 'KSh 80,000 – 150,000',
    popular: true,
    desc: 'For growing businesses that want maximum impact, leads, and online visibility.',
    features: [
      { name: 'Pages', included: true, value: 'Up to 15 pages' },
      { name: 'Mobile Responsive Design', included: true },
      { name: 'Advanced SEO Setup', included: true },
      { name: 'WhatsApp Integration', included: true },
      { name: 'Contact Forms', included: true, value: 'Unlimited' },
      { name: 'Google Business Setup', included: true },
      { name: 'Content Training', included: true, value: 'Full Training' },
      { name: 'Free Maintenance', included: true, value: '3 months' },
      { name: 'SSL Certificate', included: true },
      { name: 'Speed Optimization', included: true },
      { name: 'Analytics Setup', included: true },
    ],
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smart Business Website',
  provider: {
    '@type': 'Organization',
    name: 'Hornbill Tech Agency',
  },
  areaServed: 'Kenya',
  description: 'Professional business websites that convert visitors into customers, starting from KSh 35,000.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'KES',
    price: '35000',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: '35000',
      maxPrice: '150000',
      priceCurrency: 'KES',
    },
  },
}

const faqs = [
  {
    q: 'How long does it take to build my website?',
    a: 'A Starter website typically takes 2–3 weeks from the time we receive your content and branding materials. A Professional website takes 3–5 weeks. We always agree on a clear timeline before starting.',
  },
  {
    q: 'What do I need to provide for my website?',
    a: 'We need your logo, company information, photos (or we can use professional stock photos), service descriptions, and any specific pages you want. We\'ll guide you through everything with a simple checklist.',
  },
  {
    q: 'Will my website rank on Google?',
    a: 'Yes! We set up proper SEO from day one. The Professional package includes advanced SEO that gives you the best chance of ranking for your target keywords in Kenya. SEO results typically take 2–6 months to fully show.',
  },
  {
    q: 'Can I update the website myself after it\'s built?',
    a: 'Absolutely! We build websites on easy-to-use platforms and provide full training. Most clients can update text, images, and add new content within 30 minutes of training.',
  },
  {
    q: 'Do you offer hosting and domain?',
    a: 'We guide you to purchase hosting and domain in your own name (so you always own everything). We assist with the setup at no extra charge. We recommend trusted providers that work well for Kenyan businesses.',
  },
]

export default function SmartBusinessWebsitePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceHero
        title="Smart Business Website — Turn Clicks Into Customers"
        description="Stop losing business to competitors with better websites. We build professional, fast, SEO-optimized websites designed to generate real leads and sales for your Kenyan business."
        badge="🌐 Smart Business Website"
        gradient="from-blue-600 to-blue-800"
      />
      <FeatureGrid
        features={features}
        title="Everything Your Business Website Needs"
        subtitle="We build websites that don't just look good — they work hard to grow your business 24/7."
      />
      <PricingTable packages={packages} title="Website Packages & Pricing" />

      {/* FAQ */}
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="Website Questions Answered" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-hornbill-light dark:bg-gray-900 rounded-xl border-none px-4">
                <AccordionTrigger className="font-semibold text-hornbill-black dark:text-white">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ServiceCTA
        title="Ready for a Website That Wins You Business?"
        subtitle="Get a professional website that works for your business 24/7. Free consultation, no commitment required."
      />
    </div>
  )
}
