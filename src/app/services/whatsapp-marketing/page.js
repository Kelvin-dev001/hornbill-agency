
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'WhatsApp Marketing Kenya | Bulk WhatsApp Campaigns | Hornbill Tech',
  description:
    'Reach thousands of customers on WhatsApp with targeted campaigns. WhatsApp marketing setup from KSh 15,000. Mass messaging, automation, and analytics.',
}

const features = [
  {
    icon: 'MessageCircle',
    title: 'Mass Messaging',
    desc: 'Send personalized WhatsApp messages to thousands of contacts at once with high delivery rates.',
    items: ['Bulk WhatsApp broadcasts', 'Personalized message templates', 'Images, videos & documents', 'Product catalogs sending'],
  },
  {
    icon: 'Calendar',
    title: 'Campaign Scheduling',
    desc: 'Plan and schedule campaigns in advance to reach customers at the perfect time.',
    items: ['Schedule campaigns days ahead', 'Time zone optimization', 'Campaign calendar view', 'Automated sequences'],
  },
  {
    icon: 'Users',
    title: 'Contact Management',
    desc: 'Organize your customer database for targeted, relevant messaging that converts.',
    items: ['Import contacts from Excel/CSV', 'Customer segmentation', 'Group management', 'Opt-out handling'],
  },
  {
    icon: 'Zap',
    title: 'Automation',
    desc: 'Set up automated message flows that engage customers without any manual intervention.',
    items: ['Automated follow-up sequences', 'Welcome message automation', 'Birthday/anniversary messages', 'Lead capture automation'],
  },
  {
    icon: 'BarChart2',
    title: 'Analytics & Reporting',
    desc: 'Track performance of every campaign with detailed reports and insights.',
    items: ['Delivery & read receipts', 'Response rate tracking', 'Campaign comparison', 'ROI reporting'],
  },
  {
    icon: 'Shield',
    title: 'Compliance & Safety',
    desc: 'We ensure all campaigns comply with WhatsApp Business policies to protect your number.',
    items: ['WhatsApp Business API compliant', 'Opt-in/opt-out management', 'Message rate limiting', 'Account health monitoring'],
  },
]

const packages = [
  {
    name: 'Starter',
    price: 'KSh 15,000 – 30,000',
    period: 'One-time setup + monthly plan',
    desc: 'For small businesses wanting to start WhatsApp marketing campaigns.',
    features: [
      { name: 'WhatsApp Business Setup', included: true },
      { name: 'Contact Import', included: true, value: 'Up to 1,000 contacts' },
      { name: 'Monthly Campaigns', included: true, value: '2 campaigns/month' },
      { name: 'Message Templates', included: true, value: '5 templates' },
      { name: 'Delivery Reports', included: true },
      { name: 'Automation', included: false },
      { name: 'Dedicated Account Manager', included: false },
    ],
  },
  {
    name: 'Growth',
    price: 'KSh 30,000 – 80,000',
    period: 'One-time setup + monthly plan',
    popular: true,
    desc: 'For growing businesses wanting consistent WhatsApp marketing with automation.',
    features: [
      { name: 'WhatsApp Business API', included: true },
      { name: 'Contact Import', included: true, value: 'Up to 10,000 contacts' },
      { name: 'Monthly Campaigns', included: true, value: 'Unlimited campaigns' },
      { name: 'Message Templates', included: true, value: 'Unlimited templates' },
      { name: 'Delivery Reports', included: true, value: 'Advanced analytics' },
      { name: 'Automation', included: true, value: 'Full automation' },
      { name: 'Dedicated Account Manager', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'Is WhatsApp bulk messaging legal?',
    a: 'Yes, when done correctly. We use the official WhatsApp Business API and ensure all contacts have opted in to receive messages. This is the only legal and sustainable way to do WhatsApp marketing at scale.',
  },
  {
    q: 'Can my number get banned?',
    a: 'Using our approved setup with the official WhatsApp Business API, the risk of being banned is very low. We follow all WhatsApp policies and best practices. Accounts that use unofficial methods risk permanent bans — which is why you should always work with us.',
  },
  {
    q: 'How many people can I message at once?',
    a: 'With our setup, you can message thousands of customers. The exact limit depends on your account tier and messaging history. We start you off properly and scale up as your account builds trust with WhatsApp.',
  },
]

export default function WhatsAppMarketingPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="WhatsApp Marketing Engine — Reach Thousands of Customers Instantly"
        description="Your customers are on WhatsApp. Reach them with targeted campaigns, automated sequences, and broadcast messages that generate real sales for your Kenyan business."
        badge="💬 WhatsApp Marketing Engine"
        gradient="from-emerald-600 to-emerald-800"
      />
      <FeatureGrid features={features} title="Powerful WhatsApp Marketing Tools" />
      <PricingTable packages={packages} title="WhatsApp Marketing Packages" />
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="WhatsApp Marketing FAQ" />
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
        title="Start Reaching Customers on WhatsApp Today"
        subtitle="Set up your WhatsApp marketing in days. Free consultation to discuss your campaign strategy."
      />
    </div>
  )
}
