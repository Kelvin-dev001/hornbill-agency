
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'E-commerce Development Kenya | Online Store with M-Pesa | Hornbill Tech',
  description:
    'Build a powerful online store with M-Pesa integration, product catalog, order management, and marketing tools. Starting from KSh 80,000.',
}

const features = [
  {
    icon: 'ShoppingCart',
    title: 'Full Online Store',
    desc: 'A complete, professional e-commerce platform designed for the Kenyan market.',
    items: ['Product catalog with categories', 'Search & filter functionality', 'Customer reviews & ratings', 'Wishlist & favourites'],
  },
  {
    icon: 'CreditCard',
    title: 'M-Pesa & Payment Integration',
    desc: 'Accept payments through all major Kenyan payment methods with instant confirmation.',
    items: ['M-Pesa STK Push integration', 'Card payments (Visa/Mastercard)', 'Bank transfer options', 'Payment reconciliation'],
  },
  {
    icon: 'Package',
    title: 'Order Management',
    desc: 'A powerful dashboard to manage every aspect of your online business with ease.',
    items: ['Real-time order dashboard', 'Inventory tracking & alerts', 'Sales reports & analytics', 'Customer management'],
  },
  {
    icon: 'Truck',
    title: 'Delivery Setup',
    desc: 'Smart delivery configuration for the Kenyan market with flexible shipping options.',
    items: ['Nairobi delivery zones', 'Countrywide shipping setup', 'G4S/Sendy integration', 'Order tracking for customers'],
  },
  {
    icon: 'Users',
    title: 'Customer Experience',
    desc: 'Keep customers happy and coming back with excellent post-purchase experience.',
    items: ['WhatsApp order notifications', 'Email order confirmations', 'Customer accounts & history', 'Easy returns process'],
  },
  {
    icon: 'BarChart2',
    title: 'Marketing Tools',
    desc: 'Grow your online store with built-in marketing and promotion tools.',
    items: ['Discount & coupon system', 'Promotional banners', 'Facebook Pixel integration', 'Google Analytics setup'],
  },
]

const packages = [
  {
    name: 'Starter Store',
    price: 'KSh 80,000 – 150,000',
    desc: 'Perfect for businesses starting their e-commerce journey with a focused product catalog.',
    features: [
      { name: 'Products', included: true, value: 'Up to 100 products' },
      { name: 'M-Pesa Integration', included: true },
      { name: 'Card Payments', included: false },
      { name: 'Inventory Management', included: true, value: 'Basic' },
      { name: 'Order Dashboard', included: true },
      { name: 'Delivery Setup', included: true, value: 'Nairobi' },
      { name: 'Marketing Tools', included: true, value: 'Basic' },
      { name: 'Staff Accounts', included: true, value: '2 users' },
      { name: 'Training', included: true, value: 'Basic (2 hours)' },
      { name: 'Support', included: true, value: '1 month' },
    ],
  },
  {
    name: 'Advanced Store',
    price: 'KSh 150,000 – 350,000',
    popular: true,
    desc: 'For established businesses wanting full e-commerce capabilities with maximum features.',
    features: [
      { name: 'Products', included: true, value: 'Unlimited products' },
      { name: 'M-Pesa Integration', included: true },
      { name: 'Card Payments', included: true },
      { name: 'Inventory Management', included: true, value: 'Advanced + Alerts' },
      { name: 'Order Dashboard', included: true, value: 'Advanced Analytics' },
      { name: 'Delivery Setup', included: true, value: 'Countrywide' },
      { name: 'Marketing Tools', included: true, value: 'Full Suite' },
      { name: 'Staff Accounts', included: true, value: 'Unlimited' },
      { name: 'Training', included: true, value: 'Comprehensive (1 day)' },
      { name: 'Support', included: true, value: '3 months' },
      { name: 'SEO Optimization', included: true },
      { name: 'Facebook Pixel', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'How does M-Pesa payment integration work?',
    a: 'When a customer checks out, they enter their M-Pesa number and receive an STK push (prompt) on their phone to confirm payment. The money goes directly to your M-Pesa Paybill or Till number. We handle all the technical setup with Safaricom\'s Daraja API.',
  },
  {
    q: 'Can I manage my store from my phone?',
    a: 'Yes! Your store comes with a mobile-friendly admin panel that you can access from any smartphone. You can add products, process orders, update inventory, and view sales reports from anywhere.',
  },
  {
    q: 'How long does it take to build an e-commerce website?',
    a: 'A Starter store typically takes 4–6 weeks. An Advanced store takes 6–10 weeks. Timeline depends on how quickly you provide product information and the number of integrations required.',
  },
  {
    q: 'Do you help with adding products to the store?',
    a: 'For up to 50 products, we load them for free as part of the setup. For larger catalogs, we offer a product upload service at an additional cost, or we train your team to do it themselves.',
  },
]

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="E-commerce Development — Sell Online with M-Pesa Integration"
        description="Launch a powerful online store that accepts M-Pesa, card payments, and manages your inventory automatically. Join thousands of Kenyan businesses selling online with Hornbill."
        badge="🛒 E-commerce Development"
        gradient="from-green-600 to-green-800"
      />
      <FeatureGrid
        features={features}
        title="Everything You Need to Sell Online in Kenya"
        subtitle="More than just an online store — a complete e-commerce ecosystem built for Kenyan businesses."
      />
      <PricingTable packages={packages} title="E-commerce Packages & Pricing" />
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="E-commerce Questions Answered" />
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
        title="Ready to Start Selling Online?"
        subtitle="Join hundreds of Kenyan businesses making sales online every day. Start with a free consultation."
      />
    </div>
  )
}
