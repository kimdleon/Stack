import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit'
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  type = 'button',
  size = 'sm',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        size === 'sm' && 'prose-sm px-2.5 py-1.5',
        size === 'md' && 'prose-md px-4 py-2',
        size === 'lg' && 'prose-lg px-6 py-3'
      )}
    >
      {children}
    </button>
  )
}
