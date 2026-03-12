import { cn } from '@/lib/utils'

export function ImagePlaceholder({
  label,
  aspectRatio = '16/9',
  className,
  gradient = 'from-orange-400 to-orange-600',
}) {
  return (
    <div
      className={cn(
        `bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white font-medium`,
        className
      )}
      style={{ width: '100%', aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div className="text-center p-4">
        <div className="text-3xl mb-2">🦅</div>
        <span className="text-sm font-semibold opacity-90">{label}</span>
      </div>
    </div>
  )
}
