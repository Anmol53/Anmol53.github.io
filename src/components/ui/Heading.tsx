import { HTMLAttributes, createElement } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
}

const headingClasses = {
  1: 'text-5xl leading-normal font-bold',
  2: 'text-4xl leading-normal font-bold',
  3: 'text-3xl leading-normal font-bold',
  4: 'text-2xl leading-normal font-bold',
  5: 'text-xl leading-normal font-bold',
  6: 'text-lg leading-normal font-bold'
};

export function Heading({ className, level = 2, gradient = false, children, ...props }: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      className: cn(
        headingClasses[level],
        gradient && 'bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400',
        className
      ),
      ...props
    },
    children
  );
} 