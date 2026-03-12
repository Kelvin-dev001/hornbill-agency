
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'SMS Blaster Kenya | Bulk SMS Marketing | Hornbill Tech Agency',
  description:
    'Send bulk SMS to thousands of customers instantly with branded sender IDs. SMS setup from KSh 10,000. Delivery reports, scheduling, and analytics included.',
}

const features = [
  {
    icon: 'Smartphone',
    title: 'Mass SMS Sending',
    desc: 'Send thousands of SMS messages instantly to your customer database with high delivery rates across all Kenyan networks.',
    items: ['Safaricom, Airtel & Telkom delivery', 'Unicode support (Swahili messages)', 'Long message support', 'Flash SMS for urgent messages'],
  },
  {
    icon: 'Tag',
    title: 'Branded Sender ID',
    desc: 'Messages appear from your business name, not a random number, building instant recognition and trust.',
    items: ['Custom sender ID (e.g. "BIASHARA")', 'Brand consistency across all messages', 'Higher open rates vs. numbers', 'Professional appearance'],
  },
  {
    icon: 'Clock',
    title: 'Scheduling & Automation',
    desc: 'Plan your SMS campaigns in advance and let them send automatically at the perfect moment.',
    items: ['Schedule campaigns in advance', 'Automated birthday SMS', 'Appointment reminders', 'Payment due reminders'],
  },
  {
    icon: 'Users',
    title: 'Contact Segmentation',
    desc: 'Send the right message to the right people with powerful contact grouping and filtering.',
    items: ['Import from Excel/CSV', 'Group by location, age, purchase history', 'Opt-out management', 'Duplicate removal'],
  },
  {
    icon: 'BarChart2',
    title: 'Delivery Reports',
    desc: 'Know exactly how your campaigns perform with detailed real-time delivery and engagement analytics.',
    items: ['Real-time delivery reports', 'Failed delivery tracking', 'Campaign performance history', 'Cost per SMS tracking'],
  },
  {
    icon: 'Zap',
    title: 'Use Cases',
    desc: 'SMS works across all business types and communication needs.',
    items: ['Promotional offers & discounts', 'Appointment reminders', 'Payment reminders', 'Event announcements'],
  },
]

const packages = [
  {
    name: 'Basic',
    price: 'KSh 10,000 – 20,000',
    period: 'One-time setup + SMS credits',
    desc: 'For businesses wanting to start SMS marketing with essential features.',
    features: [
      { name: 'Platform Setup', included: true },
      { name: 'Branded Sender ID', included: true },
      { name: 'Contact Import', included: true, value: 'Up to 5,000' },
      { name: 'Campaign Scheduling', included: true },
      { name: 'Delivery Reports', included: true, value: 'Basic' },
      { name: 'Automation', included: false },
      { name: 'Dedicated Support', included: false },
    ],
  },
  {
    name: 'Business',
    price: 'KSh 25,000 – 60,000',
    period: 'One-time setup + monthly SMS bundle',
    popular: true,
    desc: 'For businesses needing consistent SMS campaigns with automation.',
    features: [
      { name: 'Platform Setup', included: true },
      { name: 'Branded Sender ID', included: true },
      { name: 'Contact Import', included: true, value: 'Unlimited contacts' },
      { name: 'Campaign Scheduling', included: true, value: 'Advanced' },
      { name: 'Delivery Reports', included: true, value: 'Advanced analytics' },
      { name: 'Automation', included: true, value: 'Full automation' },
      { name: 'Dedicated Support', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'How much does each SMS cost?',
    a: 'SMS costs vary by network and volume. On average, each SMS costs between KSh 0.50 – KSh 2.00. We offer bulk SMS bundles that reduce the per-SMS cost. Contact us for current pricing based on your expected volume.',
  },
  {
    q: 'How fast does SMS delivery happen?',
    a: 'SMS delivery is typically within seconds for most contacts. Delivery to all major Kenyan networks (Safaricom, Airtel, Telkom) is immediate for most messages. Congestion may cause slight delays during peak hours.',
  },
  {
    q: 'Can I send SMS in Swahili?',
    a: 'Yes! Our platform fully supports Unicode/Swahili characters. Note that Swahili messages using special characters may use more SMS credits than standard English messages, but we\'ll advise you on optimizing your messages.',
  },
]

export default function SMSBlasterPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Business SMS Blaster — Reach Every Customer Instantly"
        description="The fastest way to reach all your customers at once. Send bulk SMS with your branded name, track delivery, and automate campaigns that keep your business top-of-mind."
        badge="📱 Business SMS Blaster"
        gradient="from-purple-600 to-purple-800"
      />
      <FeatureGrid features={features} title="Complete SMS Marketing Platform" />
      <PricingTable packages={packages} title="SMS Blaster Packages" />
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="SMS Marketing Questions" />
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
        title="Start Sending Bulk SMS Today"
        subtitle="Set up your SMS marketing in 24 hours. Contact us for volume pricing and to get started."
      />
    </div>
  )
}
