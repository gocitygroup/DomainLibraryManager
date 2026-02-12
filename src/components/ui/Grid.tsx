import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 2 | 4 | 6 | 8;
  className?: string;
}

const colsConfig = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

const gapConfig = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
};

export function Grid({
  children,
  cols = 1,
  gap = 6,
  className = '',
}: GridProps) {
  return (
    <div className={`grid ${colsConfig[cols]} ${gapConfig[gap]} ${className}`}>
      {children}
    </div>
  );
}