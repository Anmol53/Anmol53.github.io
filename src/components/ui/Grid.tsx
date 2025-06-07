import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 2 | 4 | 6 | 8 | 10 | 12;
  responsive?: boolean;
}

const colClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6'
};

const gapClasses = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12'
};

export function Grid({ className, cols = 3, gap = 8, responsive = true, children, ...props }: GridProps) {
  return (
    <div
      className={cn(
        'grid',
        colClasses[cols],
        responsive && 'grid-cols-1 sm:grid-cols-2',
        responsive && cols > 2 && `lg:${colClasses[cols]}`,
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 