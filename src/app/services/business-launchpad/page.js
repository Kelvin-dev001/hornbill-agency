
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'Business Launchpad Kenya | Company Registration & Branding | Hornbill Tech',
  description:
    'Launch your business in 7 days! Company registration, logo design, branding, eTIMS setup, and website. Starting from KSh 18,000. All-in-one launch package.',
}

const features = [
  {
    icon: 'FileText',
    title: 'Business Registration',
    desc: 'We handle all the paperwork for your business registration so you can focus on what matters.',
    items: ['Business name search & registration', 'Certificate of Registration', 'KRA PIN registration', 'eTIMS setup for invoicing'],
  },
  {
    icon: 'Palette',
    title: 'Professional Branding',
    desc: 'Make a powerful first impression with professional branding that commands trust and credibility.',
    items: ['Logo design (5 concepts)', 'Business cards (100 cards)', 'Letterhead template', 'Email signature'],
  },
  {
    icon: 'Star',
    title: 'Brand Identity Kit',
    desc: 'A complete brand kit ensures your business looks consistent and professional everywhere.',
    items: ['Brand color palette', 'Typography guide', 'Brand usage guidelines', 'Social media profile images'],
  },
  {
    icon: 'Globe',
    title: 'Online Presence Setup',
    desc: 'Get your business found online from day one with essential digital presence setup.',
    items: ['Google Business Profile', 'Business domain & email', 'Social media pages', 'Website / landing page'],
  },
  {
    icon: 'FileText',
    title: 'Business Documents',
    desc: 'Professional templates that make you look established and trustworthy to clients.',
    items: ['Company profile document', 'Invoice template', 'Quotation template', 'Proposal template'],
  },
  {
    icon: 'CheckCircle2',
    title: '7-Day Delivery Promise',
    desc: 'We deliver the Starter package in 7 business days. You\'ll be open for business faster than you thought.',
    items: ['Day 1-2: Registration documents', 'Day 2-4: Logo & branding', 'Day 4-6: Documents & templates', 'Day 7: Handover & training'],
  },
]

const packages = [
  {
    name: 'Starter',
    price: 'KSh 18,000 – 30,000',
    note: '7-day delivery',
    desc: 'Everything to legally register and brand your new business.',
    features: [
      { name: 'Company Registration', included: true },
      { name: 'KRA PIN Registration', included: true },
      { name: 'eTIMS Setup', included: true },
      { name: 'Logo Design', included: true, value: '3 concepts' },
      { name: 'Business Cards (100)', included: true },
      { name: 'Letterhead Template', included: true },
      { name: 'Invoice Template', included: true },
      { name: 'Email Signature', included: false },
      { name: 'Company Profile', included: false },
      { name: 'Google Business Setup', included: false },
      { name: 'Website', included: false },
    ],
  },
  {
    name: 'Pro',
    price: 'KSh 35,000 – 60,000',
    note: '10-day delivery',
    popular: true,
    desc: 'Complete business launch with brand kit, company profile, and social media presence.',
    features: [
      { name: 'Company Registration', included: true },
      { name: 'KRA PIN Registration', included: true },
      { name: 'eTIMS Setup', included: true },
      { name: 'Logo Design', included: true, value: '5 concepts' },
      { name: 'Business Cards (200)', included: true },
      { name: 'Letterhead Template', included: true },
      { name: 'Invoice Template', included: true },
      { name: 'Email Signature', included: true },
      { name: 'Company Profile (8 pages)', included: true },
      { name: 'Social Media Brand Kit', included: true },
      { name: 'Google Business Setup', included: false },
      { name: 'Website', included: false },
    ],
  },
  {
    name: 'Premium',
    price: 'KSh 80,000 – 150,000',
    note: '14-day delivery',
    desc: 'Full business launch including website, Google Business, domain, and email setup.',
    features: [
      { name: 'Company Registration', included: true },
      { name: 'KRA PIN Registration', included: true },
      { name: 'eTIMS Setup', included: true },
      { name: 'Logo Design', included: true, value: '7 concepts' },
      { name: 'Business Cards (500)', included: true },
      { name: 'Letterhead Template', included: true },
      { name: 'Invoice Template', included: true },
      { name: 'Email Signature', included: true },
      { name: 'Company Profile (12 pages)', included: true },
      { name: 'Social Media Brand Kit', included: true },
      { name: 'Google Business Setup', included: true },
      { name: '5-Page Website', included: true },
      { name: 'Domain + Business Email', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'Can you register my business if I\'m outside Nairobi?',
    a: 'Yes! We handle business registration 100% online. It doesn\'t matter if you\'re in Mombasa, Kisumu, Nakuru, or anywhere else in Kenya. We handle everything remotely and courier documents where needed.',
  },
  {
    q: 'What is eTIMS and why do I need it?',
    a: 'eTIMS (Electronic Tax Invoice Management System) is the KRA system for issuing digital tax invoices. Since 2023, all businesses must use it. We set it up for you so you can issue compliant invoices from day one.',
  },
  {
    q: 'How many logo designs will I see?',
    a: 'Depending on your package, you\'ll see 3–7 logo concepts. We then refine your chosen concept with unlimited revisions until you\'re 100% happy. We don\'t stop until you love your logo.',
  },
  {
    q: 'Do I own everything you create for me?',
    a: 'Yes, 100%. All designs, documents, and digital assets are yours entirely. We provide the editable source files for all designs so you can use them with any printer or designer in the future.',
  },
]

export default function BusinessLaunchpadPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Business Launchpad — From Idea to Running Business in 7 Days"
        description="Stop procrastinating on launching your business. We handle everything — registration, branding, eTIMS, and online presence — so you can focus on getting your first customer."
        badge="🚀 Business Launchpad"
        gradient="from-rose-600 to-rose-800"
      />
      <FeatureGrid features={features} title="Everything to Launch Your Business" />
      <PricingTable packages={packages} title="Launchpad Packages" />
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="Launchpad Questions" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-hornbill-light dark:bg-gray-900 rounded-xl border-none px-4">
                <AccordionTrigger className="font-semibold text-hornbill-black dark:text-white">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <ServiceCTA
        title="Ready to Launch Your Business?"
        subtitle="Stop waiting. Your business journey starts today. Book a free consultation and let's get you launched."
      />
    </div>
  )
}
