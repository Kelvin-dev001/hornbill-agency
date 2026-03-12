import HeroSection from '@/components/home/HeroSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import Testimonials from '@/components/home/Testimonials'
import ClientLogos from '@/components/home/ClientLogos'
import FAQ from '@/components/home/FAQ'
import CTASection from '@/components/home/CTASection'

export const metadata = {
  title: 'Hornbill Tech Agency | Websites, Apps & Digital Solutions in Kenya',
  description:
    'Kenya\'s leading tech agency for websites, e-commerce, AI assistants, WhatsApp marketing, and custom business systems. Serving businesses across Kenya from Mombasa.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <Testimonials />
      <ClientLogos />
      <FAQ />
      <CTASection />
    </>
  )
}
