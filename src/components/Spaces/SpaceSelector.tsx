import { Space } from '../../types/spaces';

interface SpaceSelectorProps {
  spaces: Space[];
  activeSpace: string;
  onSpaceChange: (spaceId: string) => void;
}

export function SpaceSelector({ spaces, activeSpace, onSpaceChange }: SpaceSelectorProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 p-1.5 mb-8 transition-colors duration-200">
      <div className="flex gap-1 overflow-x-auto sm:overflow-visible -mx-1 px-1 sm:mx-0 sm:px-0">
        {spaces.map((space) => (
          <button
            key={space.id}
            onClick={() => onSpaceChange(space.id)}
            aria-current={activeSpace === space.id ? 'page' : undefined}
            className={`
              flex-none sm:flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-semibold
              whitespace-nowrap transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white
              dark:focus-visible:ring-offset-gray-800
              ${activeSpace === space.id
                ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 shadow-sm dark:shadow-gray-900/50 ring-1 ring-blue-100 dark:ring-blue-900/60'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
              }
            `}
          >
            <span className="text-lg sm:text-xl">{space.icon}</span>
            <span>{space.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}