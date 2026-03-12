import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-hornbill-orange',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-hornbill-orange text-white',
        secondary: 'border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
        destructive: 'border-transparent bg-red-500 text-white',
        outline: 'text-hornbill-orange border-hornbill-orange',
        success: 'border-transparent bg-green-500 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
