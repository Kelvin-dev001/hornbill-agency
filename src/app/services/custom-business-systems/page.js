
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'Custom Business Systems Kenya | Software Development | Hornbill Tech',
  description:
    'Custom software systems for Kenyan businesses — dashboards, CRMs, inventory, school systems, Sacco systems, and more. Starting from KSh 150,000.',
}

const features = [
  {
    icon: 'BarChart2',
    title: 'Management Dashboards',
    desc: 'See everything about your business in one place with real-time dashboards built for decision-makers.',
    items: ['CEO/Management dashboards', 'Real-time business metrics', 'Custom KPI tracking', 'Mobile-accessible reports'],
  },
  {
    icon: 'Settings',
    title: 'Workflow Automation',
    desc: 'Eliminate manual, repetitive tasks with automated workflows that save hours every week.',
    items: ['Automated approvals', 'Task assignment & tracking', 'Email/SMS notifications', 'Document generation'],
  },
  {
    icon: 'Database',
    title: 'Data Management',
    desc: 'Organize, search, and manage all your business data securely and efficiently.',
    items: ['Customer databases', 'File & document management', 'Advanced search & filtering', 'Data import/export'],
  },
  {
    icon: 'Users',
    title: 'Multi-User Access',
    desc: 'Control who sees what with role-based permissions for your entire team.',
    items: ['Role-based access control', 'Department-level permissions', 'Audit trails & activity logs', 'Multi-branch support'],
  },
  {
    icon: 'Shield',
    title: 'Security & Compliance',
    desc: 'Enterprise-grade security to protect your business data and ensure compliance.',
    items: ['End-to-end encryption', 'Daily automated backups', 'Access logs & monitoring', 'KRA/regulatory compliance'],
  },
  {
    icon: 'Zap',
    title: 'Integrations & APIs',
    desc: 'Connect your system with M-Pesa, email, WhatsApp, and any other tools your business uses.',
    items: ['M-Pesa Daraja API', 'WhatsApp Business API', 'Email automation', 'Third-party API connections'],
  },
]

const packages = [
  {
    name: 'Small System',
    price: 'KSh 150,000 – 400,000',
    desc: 'For SMEs needing a focused system to manage a specific business process.',
    features: [
      { name: 'Custom Module Development', included: true, value: 'Up to 5 modules' },
      { name: 'User Accounts', included: true, value: 'Up to 10 users' },
      { name: 'M-Pesa Integration', included: true },
      { name: 'Reporting & Analytics', included: true, value: 'Basic reports' },
      { name: 'Mobile Responsive', included: true },
      { name: 'API Integrations', included: true, value: '1 integration' },
      { name: 'Training', included: true, value: '1 day' },
      { name: 'Support', included: true, value: '3 months' },
    ],
  },
  {
    name: 'Enterprise System',
    price: 'KSh 500,000 – 2,000,000+',
    popular: true,
    desc: 'Full enterprise system with unlimited capabilities for large or complex operations.',
    features: [
      { name: 'Custom Module Development', included: true, value: 'Unlimited modules' },
      { name: 'User Accounts', included: true, value: 'Unlimited users' },
      { name: 'M-Pesa + Payment Suite', included: true },
      { name: 'Reporting & Analytics', included: true, value: 'Advanced BI dashboard' },
      { name: 'Mobile App Included', included: true },
      { name: 'API Integrations', included: true, value: 'Unlimited' },
      { name: 'Training', included: true, value: 'Comprehensive (1 week)' },
      { name: 'Support', included: true, value: '12 months SLA' },
      { name: 'Source Code Ownership', included: true },
      { name: 'Dedicated Dev Team', included: true },
    ],
  },
]

const systemExamples = [
  'CEO Dashboards & Executive Reporting',
  'HR & Payroll Management Systems',
  'Inventory & Stock Control Systems',
  'School Management Systems (fees, marks, attendance)',
  'Sacco & MFI Management Systems',
  'Hospital / Clinic Management Systems',
  'Hotel Property Management Systems',
  'Restaurant POS & Management Systems',
  'Logistics & Fleet Management Systems',
  'Booking & Reservation Systems',
]

const faqs = [
  {
    q: 'How do you price custom systems?',
    a: 'Custom systems are priced based on complexity, number of features, and integration requirements. We provide a detailed quote after a discovery session where we understand exactly what you need. Our pricing is transparent — no hidden costs.',
  },
  {
    q: 'Who owns the system after it\'s built?',
    a: 'You own 100% of the system. For Enterprise packages, we provide full source code ownership. We\'re not trying to lock you in — we want a long-term relationship, not a hostage situation.',
  },
  {
    q: 'Can you build a mobile app as part of the system?',
    a: 'Yes! Many of our enterprise systems include companion mobile apps for Android and iOS. This is quoted separately or included in the Enterprise System package depending on requirements.',
  },
  {
    q: 'How long does it take to build a custom system?',
    a: 'Small systems take 8–16 weeks. Enterprise systems take 4–12 months depending on complexity. We use agile development with regular demos so you can see progress and provide feedback throughout.',
  },
]

export default function CustomBusinessSystemsPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Custom Business Systems — Software Built for Your Operations"
        description="Stop struggling with off-the-shelf software that doesn't fit your business. We build custom systems that match exactly how your business works — saving time, reducing errors, and driving growth."
        badge="⚙️ Custom Business Systems"
        gradient="from-orange-600 to-orange-800"
      />
      <FeatureGrid features={features} title="Enterprise-Grade Capabilities" />

      {/* System Examples */}
      <section className="py-16 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="We've Built These" title="Types of Systems We Build" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {systemExamples.map((example) => (
              <div key={example} className="bg-hornbill-light dark:bg-gray-900 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingTable packages={packages} title="Custom System Pricing" />
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="Custom Systems FAQ" />
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
        title="Let's Build the System Your Business Needs"
        subtitle="Book a free discovery session. We'll listen to your challenges and propose the right solution."
      />
    </div>
  )
}
