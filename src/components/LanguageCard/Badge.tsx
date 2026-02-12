interface BadgeProps {
  label: string;
  variant: 'demand' | 'difficulty' | 'investment';
  value: string;
}

export function Badge({ label, variant, value }: BadgeProps) {
  const getColorClass = () => {
    if (variant === 'demand') {
      return {
        'Low': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
        'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        'High': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        'Very High': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
      }[value];
    }
    if (variant === 'investment') {
      return {
        'Low': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        'High': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      }[value];
    }
    return {
      'Easy': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      'Hard': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    }[value];
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</span>
      <span className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${getColorClass()}`}>
        {value}
      </span>
    </div>
  );
}