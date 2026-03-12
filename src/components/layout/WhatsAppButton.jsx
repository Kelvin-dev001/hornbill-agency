'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 whitespace-nowrap">
          Chat with us on WhatsApp 💬
        </div>
      )}
      <a
        href="https://wa.me/254759293030?text=Hello%20Hornbill%20Tech%20Agency"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  )
}
