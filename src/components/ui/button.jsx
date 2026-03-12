import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hornbill-orange disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-hornbill-orange text-white hover:bg-hornbill-dark-orange hover:shadow-lg hover:shadow-orange-500/30',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'border-2 border-hornbill-orange text-hornbill-orange hover:bg-hornbill-orange hover:text-white',
        secondary: 'bg-hornbill-black text-white hover:bg-gray-800 dark:bg-white dark:text-hornbill-black dark:hover:bg-gray-100',
        ghost: 'hover:bg-orange-50 hover:text-hornbill-orange dark:hover:bg-orange-950',
        link: 'text-hornbill-orange underline-offset-4 hover:underline',
        white: 'bg-white text-hornbill-orange hover:bg-orange-50',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 rounded-md px-4 text-xs',
        lg: 'h-14 rounded-xl px-8 text-base',
        xl: 'h-16 rounded-xl px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { buttonVariants }
