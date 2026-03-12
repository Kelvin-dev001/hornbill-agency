import { cn } from '@/lib/utils'

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
}) {
  return (
    <div className={cn(centered ? 'text-center' : 'text-left', 'mb-12', className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-950 text-hornbill-orange rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
          <span className="w-2 h-2 bg-hornbill-orange rounded-full animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          'font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-hornbill-black dark:text-white leading-tight',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl',
            centered && 'mx-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
