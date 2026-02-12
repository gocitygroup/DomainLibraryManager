interface BadgeProps {
  label: string;
  variant: 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

const variants = {
  success: 'bg-gocity-blue-100 text-gocity-blue-800 dark:bg-gocity-blue-900/30 dark:text-gocity-blue-400',
  warning: 'bg-gocity-orange-100 text-gocity-orange-800 dark:bg-gocity-orange-900/30 dark:text-gocity-orange-400',
  error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  info: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

export function Badge({ 
  label, 
  variant = 'info',
  size = 'sm',
  className = '' 
}: BadgeProps) {
  return (
    <span className={`
      inline-flex items-center justify-center
      font-medium rounded-full
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `}>
      {label}
    </span>
  );
}