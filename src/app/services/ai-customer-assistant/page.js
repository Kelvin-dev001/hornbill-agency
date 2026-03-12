
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'AI Customer Assistant Kenya | WhatsApp AI Chatbot | Hornbill Tech',
  description:
    'AI-powered WhatsApp chatbot that replies to customers 24/7. Answers FAQs, captures leads, takes orders, and qualifies prospects automatically. Setup from KSh 50,000.',
}

const features = [
  {
    icon: 'MessageCircle',
    title: 'Instant Customer Responses',
    desc: 'Your AI assistant replies to customer messages within seconds — 24 hours a day, 7 days a week, no holidays.',
    items: ['Instant FAQ answers', 'Product & pricing information', 'Business hours & location', 'WhatsApp & website integration'],
  },
  {
    icon: 'Brain',
    title: 'Intelligent Conversations',
    desc: 'Our AI understands context and can handle complex, multi-turn conversations naturally in English and Swahili.',
    items: ['Natural language understanding', 'Multi-turn conversation memory', 'English & Swahili support', 'Learns from interactions'],
  },
  {
    icon: 'Users',
    title: 'Lead Capture & Qualification',
    desc: 'Automatically capture customer information and qualify leads before handing them to your sales team.',
    items: ['Name, phone, email capture', 'Budget & timeline qualification', 'Interest scoring', 'CRM integration'],
  },
  {
    icon: 'ShoppingCart',
    title: 'Sales Automation',
    desc: 'Let your AI assistant drive sales by recommending products, sending catalogs, and processing orders.',
    items: ['Product recommendations', 'Catalog sending', 'Order status updates', 'Upsell & cross-sell flows'],
  },
  {
    icon: 'BarChart2',
    title: 'Analytics & Insights',
    desc: 'Understand your customers better with detailed analytics on conversations, common questions, and lead quality.',
    items: ['Conversation analytics', 'Common question tracking', 'Lead quality metrics', 'Response time reports'],
  },
  {
    icon: 'Settings',
    title: 'Human Handoff',
    desc: 'When a conversation needs human attention, the AI smoothly transfers to your team with full context.',
    items: ['Smart escalation triggers', 'Full conversation context transfer', 'Multiple agent support', 'Business hours routing'],
  },
]

const packages = [
  {
    name: 'Starter AI',
    price: 'KSh 50,000 – 100,000',
    period: 'Setup + KSh 10,000–20,000/month',
    desc: 'For businesses wanting basic AI automation for FAQs and lead capture.',
    features: [
      { name: 'WhatsApp Integration', included: true },
      { name: 'FAQ Automation', included: true, value: 'Up to 50 FAQs' },
      { name: 'Lead Capture', included: true, value: 'Basic forms' },
      { name: 'Language Support', included: true, value: 'English only' },
      { name: 'Human Handoff', included: true },
      { name: 'Analytics Dashboard', included: true, value: 'Basic' },
      { name: 'CRM Integration', included: false },
      { name: 'Sales Automation', included: false },
    ],
  },
  {
    name: 'Business AI',
    price: 'KSh 100,000 – 150,000',
    period: 'Setup + KSh 20,000–40,000/month',
    popular: true,
    desc: 'Full AI customer service and sales automation for growing businesses.',
    features: [
      { name: 'WhatsApp + Website Integration', included: true },
      { name: 'FAQ Automation', included: true, value: 'Unlimited FAQs' },
      { name: 'Lead Capture & Qualification', included: true, value: 'Advanced scoring' },
      { name: 'Language Support', included: true, value: 'English & Swahili' },
      { name: 'Human Handoff', included: true, value: 'Smart escalation' },
      { name: 'Analytics Dashboard', included: true, value: 'Advanced insights' },
      { name: 'CRM Integration', included: true },
      { name: 'Sales Automation', included: true, value: 'Full catalog & orders' },
      { name: 'Monthly Optimization', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'Can the AI handle complex customer questions?',
    a: 'Yes! Our AI is trained on your specific business — your services, pricing, policies, and FAQs. It can handle multi-turn conversations and understands context. For questions it can\'t confidently answer, it smoothly transfers to a human agent.',
  },
  {
    q: 'Does it work in Swahili?',
    a: 'Yes, the Business AI package supports both English and Swahili, which is essential for the Kenyan market. The AI can switch between languages within the same conversation automatically.',
  },
  {
    q: 'How long does it take to set up?',
    a: 'Setup takes 2–4 weeks. We spend the first week learning about your business, products, and common customer questions. The second week is building and training the AI. The third week is testing and refinement before launch.',
  },
  {
    q: 'What happens if the AI makes a mistake?',
    a: 'We configure the AI conservatively — it will always escalate to a human when it\'s not confident. We monitor conversations and continuously improve the AI\'s responses. You also have a dashboard to review and correct any AI responses.',
  },
]

export default function AICustomerAssistantPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="AI Customer Assistant — Your Business Never Sleeps"
        description="Deploy an AI-powered WhatsApp assistant that handles customer questions, captures leads, and drives sales 24/7 — while you focus on growing your business."
        badge="🤖 AI Customer Assistant"
        gradient="from-indigo-600 to-indigo-800"
      />
      <FeatureGrid features={features} title="Intelligent Customer Service Automation" />
      <PricingTable packages={packages} title="AI Assistant Packages & Pricing" />
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="AI Assistant Questions" />
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
        title="Let AI Handle Your Customer Service"
        subtitle="Free up your team for high-value work while AI handles routine customer interactions. Book a demo today."
      />
    </div>
  )
}
