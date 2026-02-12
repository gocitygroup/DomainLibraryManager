import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white dark:bg-gray-800 
      rounded-xl shadow-md hover:shadow-lg 
      transition-all duration-200
      dark:shadow-gray-900/30 
      border border-gray-100 dark:border-gray-700
      p-6
      ${className}
    `}>
      {children}
    </div>
  );
}