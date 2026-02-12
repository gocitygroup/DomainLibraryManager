import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  className?: string;
}

export function Select({
  label,
  error,
  options,
  className = '',
  ...props
}: SelectProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <select
        className={`
          block w-full rounded-lg
          border border-gray-300 dark:border-gray-700
          bg-white dark:bg-gray-800
          px-4 py-2
          text-gray-900 dark:text-white
          transition-colors duration-200
          focus:border-gocity-blue-500 dark:focus:border-gocity-blue-400
          focus:outline-none focus:ring-2
          focus:ring-gocity-blue-500/20 dark:focus:ring-gocity-blue-400/20
          disabled:cursor-not-allowed disabled:opacity-50
          ${error ? 'border-red-500 dark:border-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}