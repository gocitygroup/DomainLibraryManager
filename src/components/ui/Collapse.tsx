import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Collapse({ title, children, defaultOpen = false }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex justify-between items-center 
          bg-gray-50 dark:bg-gray-800 
          hover:bg-gray-100 dark:hover:bg-gray-700 
          text-gray-900 dark:text-gray-100
          rounded-lg transition-colors duration-200"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? 
          <ChevronUp size={20} className="text-gray-500 dark:text-gray-400" /> : 
          <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
        }
      </button>
      {isOpen && (
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-b-lg transition-colors duration-200">
          {children}
        </div>
      )}
    </div>
  );
}