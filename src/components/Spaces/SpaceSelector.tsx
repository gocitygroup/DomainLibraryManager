import { Space } from '../../types/spaces';

interface SpaceSelectorProps {
  spaces: Space[];
  activeSpace: string;
  onSpaceChange: (spaceId: string) => void;
}

export function SpaceSelector({ spaces, activeSpace, onSpaceChange }: SpaceSelectorProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 p-1 mb-8 transition-colors duration-200">
      <div className="flex space-x-1">
        {spaces.map((space) => (
          <button
            key={space.id}
            onClick={() => onSpaceChange(space.id)}
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200
              ${activeSpace === space.id
                ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 shadow-sm dark:shadow-gray-900/50'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
              }
            `}
          >
            <span className="text-xl">{space.icon}</span>
            <span>{space.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}