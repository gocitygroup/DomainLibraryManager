import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div className="w-full">
      <div className="rounded-xl border border-gray-200/70 dark:border-gray-700/70 bg-gray-50/70 dark:bg-gray-900/20 p-1">
        <nav className="flex gap-1 overflow-x-auto scroll-smooth" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-none whitespace-nowrap px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white
                dark:focus-visible:ring-offset-gray-800
                ${activeTab === tab.id
                  ? 'bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 shadow-sm ring-1 ring-gray-200/80 dark:ring-gray-700/80'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-100'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4 sm:mt-6">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}