
import ServiceHero from '@/components/services/ServiceHero'
import FeatureGrid from '@/components/services/FeatureGrid'
import PricingTable from '@/components/services/PricingTable'
import ServiceCTA from '@/components/services/ServiceCTA'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/shared/SectionHeading'

export const metadata = {
  title: 'Online Marketing Kenya | Social Media & Digital Marketing | Hornbill Tech',
  description:
    'More leads and sales every month with professional social media management, Google Ads, content creation, and WhatsApp sales funnels. From KSh 20,000/month.',
}

const features = [
  {
    icon: 'Instagram',
    title: 'Social Media Management',
    desc: 'Professional content creation and posting across TikTok, Facebook, and Instagram to grow your following.',
    items: ['TikTok, Facebook & Instagram', 'Professional graphic design', 'Video content creation', 'Community management'],
  },
  {
    icon: 'Video',
    title: 'Video & Content Creation',
    desc: 'Engaging video and written content that captures attention and drives action from Kenyan audiences.',
    items: ['Short-form videos (TikTok/Reels)', 'Product showcase videos', 'Testimonial videos', 'Blog & caption writing'],
  },
  {
    icon: 'Target',
    title: 'Paid Advertising',
    desc: 'Targeted paid campaigns on Facebook, Instagram, and Google that bring paying customers to your business.',
    items: ['Facebook & Instagram Ads', 'Google Ads management', 'Retargeting campaigns', 'Budget optimization'],
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Sales Funnel',
    desc: 'Turn social media followers and ad clicks into WhatsApp conversations and closed sales.',
    items: ['Click-to-WhatsApp ads', 'Automated lead nurturing', 'Sales conversation scripts', 'Lead tracking'],
  },
  {
    icon: 'TrendingUp',
    title: 'Lead Generation',
    desc: 'Systematic campaigns designed to generate a consistent flow of qualified leads for your business.',
    items: ['Lead generation ads', 'Landing page optimization', 'Lead capture forms', 'CRM integration'],
  },
  {
    icon: 'BarChart2',
    title: 'Analytics & Reporting',
    desc: 'Know exactly what\'s working with detailed monthly reports and actionable insights.',
    items: ['Monthly performance reports', 'Ad spend ROI tracking', 'Follower growth analytics', 'Competitor benchmarking'],
  },
]

const packages = [
  {
    name: 'Starter / Visibility',
    price: 'KSh 20,000 – 35,000',
    period: 'per month',
    desc: 'Build your social media presence and stay consistently visible to your target market.',
    features: [
      { name: 'Platforms', included: true, value: 'TikTok + Facebook + Instagram' },
      { name: 'Videos per month', included: true, value: '8 videos' },
      { name: 'Graphics per month', included: true, value: '15 graphics' },
      { name: 'Community Management', included: true, value: 'Basic' },
      { name: 'Paid Ads Management', included: false },
      { name: 'WhatsApp Funnel', included: false },
      { name: 'Monthly Analytics Report', included: true },
    ],
  },
  {
    name: 'Growth / Lead Gen',
    price: 'KSh 45,000 – 80,000',
    period: 'per month',
    popular: true,
    desc: 'Aggressive growth strategy with paid ads and WhatsApp funnels for consistent lead generation.',
    features: [
      { name: 'Platforms', included: true, value: 'TikTok + FB + IG + Google' },
      { name: 'Videos per month', included: true, value: '16 videos' },
      { name: 'Graphics per month', included: true, value: '30 graphics' },
      { name: 'Community Management', included: true, value: 'Active daily' },
      { name: 'Paid Ads Management', included: true, value: 'FB + IG Ads' },
      { name: 'WhatsApp Funnel', included: true },
      { name: 'Analytics Report', included: true, value: 'Bi-weekly' },
      { name: 'Dedicated Strategist', included: true },
    ],
  },
  {
    name: 'Premium / Sales Engine',
    price: 'KSh 100,000 – 250,000',
    period: 'per month',
    desc: 'Full-service digital marketing engine driving maximum leads and revenue growth.',
    features: [
      { name: 'All Platforms', included: true, value: 'Social + Google + YouTube' },
      { name: 'Videos per month', included: true, value: '30+ videos' },
      { name: 'Graphics per month', included: true, value: 'Unlimited' },
      { name: 'Community Management', included: true, value: 'Premium 24/7' },
      { name: 'Full Ad Management', included: true, value: 'Google + Social Ads' },
      { name: 'WhatsApp Automation', included: true, value: 'Full funnel' },
      { name: 'Landing Pages', included: true },
      { name: 'Retargeting Campaigns', included: true },
      { name: 'Weekly Reporting', included: true },
      { name: 'Dedicated Account Team', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'How long before I see results from marketing?',
    a: 'Organic social media growth typically takes 2–3 months to build momentum. Paid advertising campaigns can generate leads within the first week. We set realistic expectations at the start and show you progress monthly.',
  },
  {
    q: 'Do you create the content or do I provide it?',
    a: 'We create all the content — graphics, videos, captions, everything. We will need some input from you (product information, photos of your premises or products), but we handle all the creative work.',
  },
  {
    q: 'How much should I budget for paid ads?',
    a: 'Ad spend is separate from our management fee. For Facebook/Instagram ads, we recommend a minimum of KSh 10,000/month to see results. Google Ads typically need KSh 15,000+ per month. We optimize every shilling you spend.',
  },
  {
    q: 'Can you market my business if I don\'t have good photos or videos?',
    a: 'Yes! We have solutions including AI-generated imagery, stock photography, and we can organize professional photoshoots for you in Mombasa or Nairobi. Great content can be created without expensive equipment.',
  },
]

export default function OnlineMarketingPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="Online Marketing & Sales Booster — More Leads Every Month"
        description="Stop hoping customers will find you. We build powerful digital marketing machines that consistently attract, engage, and convert your ideal Kenyan customers into paying clients."
        badge="📈 Online Marketing & Sales Booster"
        gradient="from-amber-600 to-amber-800"
      />
      <FeatureGrid features={features} title="Complete Digital Marketing Services" />
      <PricingTable packages={packages} title="Marketing Packages" />
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-4xl mx-auto">
          <SectionHeading badge="FAQ" title="Digital Marketing FAQ" />
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
        title="Ready to Supercharge Your Marketing?"
        subtitle="Book a free marketing strategy session. We'll analyze your current presence and show you exactly how to grow."
      />
    </div>
  )
}
