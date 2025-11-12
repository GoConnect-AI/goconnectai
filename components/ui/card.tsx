import * as React from 'react'

export function Card({ className='', children }: { className?: string; children: React.ReactNode }) {
  return <div className={['border rounded-xl bg-white', className].join(' ')}>{children}</div>
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="px-5 pt-5">{children}</div>
}

export function CardTitle({ children, className='' }: { children: React.ReactNode; className?: string }) {
  return <h3 className={['text-lg font-semibold', className].join(' ')}>{children}</h3>
}

export function CardContent({ children, className='' }: { children: React.ReactNode; className?: string }) {
  return <div className={['px-5 pb-5', className].join(' ')}>{children}</div>
}
