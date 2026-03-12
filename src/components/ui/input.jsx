import { cn } from '@/lib/utils'

export function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hornbill-orange focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
        className
      )}
      {...props}
    />
  )
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[100px] w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hornbill-orange focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none',
        className
      )}
      {...props}
    />
  )
}

export function Label({ className, ...props }) {
  return (
    <label
      className={cn('text-sm font-medium text-gray-700 dark:text-gray-300', className)}
      {...props}
    />
  )
}

export function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        'flex h-11 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hornbill-orange focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}
