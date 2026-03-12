
import { Heart, Lightbulb, Shield, Star } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ImagePlaceholder } from '@/components/shared/ImagePlaceholder'
import CTASection from '@/components/home/CTASection'

const ICON_MAP = { Heart, Lightbulb, Shield, Star }

export const metadata = {
  title: 'About Us | Hornbill Tech Agency',
  description:
    'Learn about Hornbill Tech Agency — a Mombasa-based tech company empowering African businesses with digital solutions since 2019.',
}

const values = [
  {
    icon: 'Lightbulb',
    title: 'Innovation First',
    desc: 'We stay ahead of technology trends so your business benefits from cutting-edge solutions designed for the African market.',
  },
  {
    icon: 'Shield',
    title: 'Reliability You Can Count On',
    desc: 'We deliver on our promises. Deadlines are sacred, quality is non-negotiable, and your satisfaction is our measure of success.',
  },
  {
    icon: 'Heart',
    title: 'Client-First Always',
    desc: 'Your business goals drive everything we do. We take time to understand your challenges before proposing any solution.',
  },
  {
    icon: 'Star',
    title: 'Excellence in Execution',
    desc: 'Good enough is never good enough. We push the boundaries of what\'s possible on every single project we take on.',
  },
]

const team = [
  {
    name: 'Kelvin Oyugi',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with 5+ years building digital solutions for Kenyan businesses. Passionate about making technology accessible to all.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Sarah Mwenda',
    role: 'UI/UX Designer',
    bio: 'Creative designer with expertise in user experience and conversion-focused design. She makes our websites beautiful and effective.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'David Kamau',
    role: 'Digital Marketing Strategist',
    bio: 'Growth hacker and marketing expert specializing in WhatsApp funnels, social media, and paid advertising for Kenyan markets.',
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Amina Yusuf',
    role: 'AI & Automation Specialist',
    bio: 'Machine learning engineer building intelligent customer assistants and workflow automation systems for businesses across East Africa.',
    color: 'from-purple-400 to-purple-600',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-hornbill-dark pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #F7941D 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-hornbill-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            Our Story 🦅
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Empowering African Businesses with Technology
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            Born in Mombasa, built for Africa. We are a team of passionate technologists on a mission to make world-class digital solutions accessible to every Kenyan business.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Our Journey"
                title="From Mombasa to All of Kenya"
                centered={false}
              />
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Hornbill Tech Agency was founded with a simple but powerful vision: to give every Kenyan business access to the same quality technology that powers global companies — at prices that make sense for the African market.
                </p>
                <p>
                  We saw too many local businesses struggling with outdated systems, missing online sales, and losing customers to competitors who had embraced digital transformation. We decided to change that.
                </p>
                <p>
                  Starting from Mombasa, we have now served 500+ businesses across Kenya and East Africa — from small shops in Mombasa Old Town to growing enterprises in Nairobi. Our solutions have generated millions of shillings in revenue for our clients.
                </p>
                <p>
                  Today, Hornbill Tech Agency is Kenya&apos;s trusted partner for websites, apps, AI automation, and digital marketing. But we are more than a tech company — we are your business growth partner.
                </p>
              </div>
            </div>
            <div>
              <ImagePlaceholder
                label="Hornbill Tech Agency Team in Mombasa"
                aspectRatio="4/3"
                gradient="from-orange-400 to-orange-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-hornbill-light dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-hornbill-orange rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="font-heading font-bold text-2xl mb-4">Our Mission</h2>
              <p className="text-orange-100 leading-relaxed">
                To empower African businesses with affordable, powerful technology solutions that solve real problems, drive growth, and create lasting competitive advantages in the digital economy.
              </p>
            </div>
            <div className="bg-hornbill-black rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🔭</div>
              <h2 className="font-heading font-bold text-2xl mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become East Africa&apos;s leading technology solutions provider — the first name businesses think of when they want to launch faster, grow smarter, and automate intelligently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white dark:bg-hornbill-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="What We Stand For"
            title="Our Core Values"
            subtitle="These aren't just words on a wall — they guide every decision we make and every project we deliver."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = ICON_MAP[value.icon] || Lightbulb
              return (
                <div key={value.title} className="text-center p-6 bg-hornbill-light dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-950 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-hornbill-orange" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-hornbill-black dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-hornbill-light dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="The Dream Team"
            title="The People Behind Hornbill"
            subtitle="A passionate team of technologists, designers, and strategists dedicated to your business success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4`}>
                  {member.name[0]}
                </div>
                <h3 className="font-heading font-bold text-lg text-hornbill-black dark:text-white">{member.name}</h3>
                <p className="text-hornbill-orange text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
