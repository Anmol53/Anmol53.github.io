import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: string;
}

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full ring-1 ring-gray-700 hover:shadow-md transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
} 