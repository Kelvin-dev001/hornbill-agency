'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-hornbill-orange" />
      ) : (
        <Moon className="w-4 h-4 text-gray-600" />
      )}
    </button>
  )
}
