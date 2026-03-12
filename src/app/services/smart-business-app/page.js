
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'Smart Business App Kenya | Custom Mobile App Development | Hornbill Tech',
  description:
    'Custom Android & iOS mobile apps for Kenyan businesses. M-Pesa payments, push notifications, ordering, and booking. Starting from KSh 120,000.',
}

const features = [
  {
    icon: 'Smartphone',
    title: 'Custom Design & UX',
    desc: 'Beautiful, intuitive apps designed specifically for your brand and your customers\' needs.',
    items: ['Custom Android & iOS apps', 'Branded UI matching your identity', 'User-friendly navigation', 'App Store & Play Store deployment'],
  },
  {
    icon: 'Bell',
    title: 'Push Notifications',
    desc: 'Stay connected with your customers through targeted push notifications that drive engagement.',
    items: ['Promotional notifications', 'Order status updates', 'Personalized messages', 'Scheduled campaigns'],
  },
  {
    icon: 'CreditCard',
    title: 'M-Pesa & Payments',
    desc: 'Accept payments directly in your app through M-Pesa and other payment methods.',
    items: ['M-Pesa STK Push', 'Card payments (Visa/MC)', 'In-app wallet', 'Automatic reconciliation'],
  },
  {
    icon: 'AppWindow',
    title: 'Core App Features',
    desc: 'Everything your customers need to engage with your business from their smartphones.',
    items: ['User registration & profiles', 'Product/service catalog', 'Online ordering & booking', 'Real-time order tracking'],
  },
  {
    icon: 'BarChart2',
    title: 'Admin Dashboard',
    desc: 'Manage your entire app from a powerful web-based admin panel.',
    items: ['User management', 'Order management', 'Push notification sending', 'Revenue analytics'],
  },
  {
    icon: 'Shield',
    title: 'Security & Scalability',
    desc: 'Enterprise-grade security and infrastructure that scales as your user base grows.',
    items: ['Data encryption', 'Secure authentication', 'Cloud hosting', 'Handles 100K+ users'],
  },
]

const packages = [
  {
    name: 'Starter App',
    price: 'KSh 120,000 – 250,000',
    desc: 'A focused app with core features to establish your digital presence.',
    features: [
      { name: 'Android App', included: true },
      { name: 'iOS App', included: false, value: 'Add KSh 80K' },
      { name: 'User Registration', included: true },
      { name: 'Product/Service Catalog', included: true },
      { name: 'WhatsApp Integration', included: true },
      { name: 'Push Notifications', included: false },
      { name: 'M-Pesa Payments', included: false },
      { name: 'Admin Dashboard', included: true, value: 'Basic' },
      { name: 'App Store Submission', included: true },
      { name: 'Support', included: true, value: '1 month' },
    ],
  },
  {
    name: 'Business App',
    price: 'KSh 250,000 – 700,000',
    popular: true,
    desc: 'Full-featured business app with payments, notifications, and ordering.',
    features: [
      { name: 'Android App', included: true },
      { name: 'iOS App', included: true },
      { name: 'User Registration & Profiles', included: true },
      { name: 'Product/Service Catalog', included: true },
      { name: 'WhatsApp Integration', included: true },
      { name: 'Push Notifications', included: true },
      { name: 'M-Pesa + Card Payments', included: true },
      { name: 'In-App Ordering', included: true },
      { name: 'Admin Dashboard', included: true, value: 'Advanced' },
      { name: 'App Store Submission', included: true },
      { name: 'Support', included: true, value: '3 months' },
    ],
  },
  {
    name: 'Enterprise App',
    price: 'KSh 800,000 – 2,000,000+',
    desc: 'Fully custom enterprise app with unlimited features and dedicated development.',
    features: [
      { name: 'Android + iOS Apps', included: true },
      { name: 'Web Portal', included: true },
      { name: 'All Business App Features', included: true },
      { name: 'Multi-vendor Support', included: true },
      { name: 'Advanced Analytics & BI', included: true },
      { name: 'Third-party API Integrations', included: true },
      { name: 'Custom AI Features', included: true },
      { name: 'Admin Dashboard', included: true, value: 'Enterprise' },
      { name: 'App Store Submission', included: true },
      { name: 'Support', included: true, value: '12 months SLA' },
      { name: 'Source Code Ownership', included: true },
    ],
  },
]

const industries = ['Restaurants & Food Delivery', 'E-commerce & Retail', 'Schools & Education', 'Logistics & Delivery', 'Gyms & Fitness', 'Salons & Beauty', 'Real Estate', 'Healthcare']

const faqs = [
  {
    q: 'Do you build Android only or iOS too?',
    a: 'We build for both Android and iOS. The Business and Enterprise packages include both platforms. We build using cross-platform technology so you get a native-quality experience on both without paying double.',
  },
  {
    q: 'How do you get the app on the Play Store and App Store?',
    a: 'We handle the entire submission process. For Play Store (Android), you need a Google Developer account (one-time $25). For App Store (iOS), you need an Apple Developer account ($99/year). We submit and manage the review process.',
  },
  {
    q: 'Can I update the app after launch?',
    a: 'Yes! We can add new features, update content, and fix any issues through updates. App updates are deployed to both stores automatically. We offer ongoing development retainers for regular updates.',
  },
  {
    q: 'What industries have you built apps for?',
    a: 'We have built apps for restaurants, retail/e-commerce, schools, logistics, healthcare clinics, gyms, salons, real estate, and more. If you have a business, we can build an app for it.',
  },
]

export default function SmartBusinessAppPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Smart Business App — Put Your Business in Every Customer's Pocket"
        description="Join the mobile revolution. A custom Android & iOS app makes it effortless for customers to buy from you, book your services, and stay engaged with your brand."
        badge="📱 Smart Business App"
        gradient="from-cyan-600 to-cyan-800"
      />
      <FeatureGrid features={features} title="Full Mobile App Capabilities" />

      <section className="py-16 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading badge="Industries We Serve" title="Apps Built for Every Business" />
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <div key={ind} className="px-4 py-2 bg-hornbill-light dark:bg-gray-900 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingTable packages={packages} title="Mobile App Packages" />
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="Mobile App Questions" />
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
        title="Ready to Launch Your Business App?"
        subtitle="Get a free app consultation. We'll design a mockup of your app so you can see it before you commit."
      />
    </div>
  )
}
