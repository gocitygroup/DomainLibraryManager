import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const variants = {
  primary: `
    bg-gocity-blue-500 text-white 
    hover:bg-gocity-blue-600
    dark:bg-gocity-blue-600 dark:hover:bg-gocity-blue-700
    focus:ring-gocity-blue-500
  `,
  secondary: `
    bg-white text-gray-700 border border-gray-300
    hover:bg-gray-50
    dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600
    dark:hover:bg-gray-700
    focus:ring-gocity-blue-500
  `,
  ghost: `
    text-gray-600 hover:bg-gray-100
    dark:text-gray-400 dark:hover:bg-gray-800
    focus:ring-gray-500
  `,
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-medium rounded-lg
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}