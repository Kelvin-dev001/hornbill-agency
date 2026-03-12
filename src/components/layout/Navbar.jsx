'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="18" cy="18" r="18" fill="#F7941D" />
        <path d="M10 22 C10 22, 12 14, 18 12 C24 10, 28 14, 26 20 C24 26, 18 26, 18 26 L10 22Z" fill="#1A1A1A" />
        <path d="M18 12 L26 8 C26 8, 28 12, 24 14 L18 12Z" fill="#E8751A" />
        <circle cx="22" cy="16" r="2" fill="white" />
        <circle cx="23" cy="15.5" r="0.8" fill="#1A1A1A" />
      </svg>
      <span className="font-heading font-bold text-xl">
        <span className="text-hornbill-orange">Hornbill</span>
        <span className="text-hornbill-black dark:text-white"> Tech</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      setVisible(currentY < lastScrollY || currentY < 80)
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 dark:bg-hornbill-dark/95 backdrop-blur-md shadow-md' : 'bg-transparent',
        visible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-hornbill-orange hover:bg-orange-50 dark:hover:bg-orange-950',
                  pathname === link.href ? 'text-hornbill-orange' : 'text-gray-700 dark:text-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/about"
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-hornbill-orange hover:bg-orange-50 dark:hover:bg-orange-950',
                pathname === '/about' ? 'text-hornbill-orange' : 'text-gray-700 dark:text-gray-300'
              )}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-hornbill-orange hover:bg-orange-50 dark:hover:bg-orange-950',
                  pathname.startsWith('/services') ? 'text-hornbill-orange' : 'text-gray-700 dark:text-gray-300'
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={cn('w-4 h-4 transition-transform', servicesOpen && 'rotate-180')} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64">
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-2">
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-sm font-semibold text-hornbill-orange hover:bg-orange-50 dark:hover:bg-orange-950 rounded-lg mb-1"
                    >
                      All Services →
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={cn(
                          'block px-3 py-2 text-sm rounded-lg transition-colors hover:bg-orange-50 dark:hover:bg-orange-950 hover:text-hornbill-orange',
                          pathname === service.href ? 'text-hornbill-orange bg-orange-50 dark:bg-orange-950' : 'text-gray-700 dark:text-gray-300'
                        )}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-hornbill-orange hover:bg-orange-50 dark:hover:bg-orange-950',
                  pathname === link.href ? 'text-hornbill-orange' : 'text-gray-700 dark:text-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm">
              <a
                href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </a>
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-orange-50 dark:bg-orange-950 text-hornbill-orange'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/about"
              className={cn(
                'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                pathname === '/about'
                  ? 'bg-orange-50 dark:bg-orange-950 text-hornbill-orange'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              )}
            >
              About
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Services
                <ChevronDown className={cn('w-4 h-4 transition-transform', servicesOpen && 'rotate-180')} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link href="/services" className="block px-4 py-2 text-sm font-semibold text-hornbill-orange">
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-hornbill-orange"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-orange-50 dark:bg-orange-950 text-hornbill-orange'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-200 dark:border-gray-800">
              <Button asChild className="w-full">
                <a
                  href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
