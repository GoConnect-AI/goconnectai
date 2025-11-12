import * as React from 'react'

export function Badge({ children, variant='default', className='' }: { children: React.ReactNode; variant?: 'default'|'secondary'; className?: string }) {
  const styles = variant === 'secondary' ? 'bg-gray-100 text-gray-700' : 'bg-black text-white'
  return <span className={['inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', styles, className].join(' ')}>{children}</span>
}
