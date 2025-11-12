import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: 'default' | 'outline'
  size?: 'sm' | 'lg' | 'default'
  className?: string
}

export function Button({ asChild, variant='default', size='default', className='', ...props }: ButtonProps) {
  const Comp: any = asChild ? Slot : 'button'
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white'
  const variants = variant === 'outline'
    ? 'border border-primary text-primary bg-transparent hover:bg-primary/5'
    : 'bg-primary text-white hover:bg-[#00B69E]'
  const sizes = size === 'sm' ? 'h-8 px-3 py-1.5'
    : size === 'lg' ? 'h-11 px-5 py-3 text-base'
    : 'h-10 px-4 py-2'
  return <Comp className={[base, variants, sizes, className].join(' ')} {...props} />
}
