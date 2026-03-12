'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, MessageCircle, ArrowUp } from 'lucide-react'

const services = [
  { name: 'Smart Business Website', href: '/services/smart-business-website' },
  { name: 'E-commerce Development', href: '/services/ecommerce-development' },
  { name: 'WhatsApp Marketing', href: '/services/whatsapp-marketing' },
  { name: 'SMS Blaster', href: '/services/sms-blaster' },
  { name: 'AI Customer Assistant', href: '/services/ai-customer-assistant' },
  { name: 'Custom Business Systems', href: '/services/custom-business-systems' },
  { name: 'Business Launchpad', href: '/services/business-launchpad' },
  { name: 'Smart Business App', href: '/services/smart-business-app' },
  { name: 'Online Marketing', href: '/services/online-marketing' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-hornbill-black text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="18" cy="18" r="18" fill="#F7941D" />
                <path d="M10 22 C10 22, 12 14, 18 12 C24 10, 28 14, 26 20 C24 26, 18 26, 18 26 L10 22Z" fill="#1A1A1A" />
                <path d="M18 12 L26 8 C26 8, 28 12, 24 14 L18 12Z" fill="#E8751A" />
                <circle cx="22" cy="16" r="2" fill="white" />
                <circle cx="23" cy="15.5" r="0.8" fill="#1A1A1A" />
              </svg>
              <span className="font-heading font-bold text-xl">
                <span className="text-hornbill-orange">Hornbill</span>
                <span className="text-white"> Tech</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering African businesses with cutting-edge technology solutions. From websites to AI assistants — we help you grow.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61585923812346"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-hornbill-orange rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-hornbill-orange text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-hornbill-orange text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:+254759293030"
                className="flex items-center gap-3 text-gray-400 hover:text-hornbill-orange text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-hornbill-orange flex-shrink-0" />
                +254 759 293 030
              </a>
              <a
                href="mailto:hornbillkenya@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-hornbill-orange text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-hornbill-orange flex-shrink-0" />
                hornbillkenya@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-hornbill-orange flex-shrink-0" />
                Mombasa, Kenya
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-3">Get free business tips:</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-hornbill-orange"
                />
                <button
                  type="submit"
                  className="bg-hornbill-orange hover:bg-hornbill-dark-orange text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hornbill Tech Agency. All rights reserved. Made with ❤️ in Mombasa, Kenya.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-gray-500 hover:text-hornbill-orange text-sm transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
