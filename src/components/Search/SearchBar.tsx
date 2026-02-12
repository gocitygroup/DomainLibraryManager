import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search languages by name, use cases, or features..."
        className="block w-full pl-10 pr-10 py-3 
          border border-gray-300 dark:border-gray-700 
          rounded-lg leading-5 
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100
          placeholder-gray-500 dark:placeholder-gray-400 
          focus:outline-none 
          focus:placeholder-gray-400 dark:focus:placeholder-gray-500 
          focus:ring-1 focus:ring-blue-500 
          focus:border-blue-500 
          sm:text-sm
          transition-colors duration-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <X className="h-5 w-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" />
        </button>
      )}
    </div>
  );
}