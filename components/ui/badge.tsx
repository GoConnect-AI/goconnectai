import * as React from 'react'

export function Badge({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'default' | 'secondary'
  className?: string
}) {
  const styles =
    variant === 'secondary'
      ? 'bg-primary/10 text-primary'
      : 'bg-primary text-white'

  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        styles,
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
