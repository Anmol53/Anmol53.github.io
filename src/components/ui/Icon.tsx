import { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
};

export function Icon({ className, icon: IconComponent, size = 'md', ...props }: IconProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <IconComponent className="w-full h-full" />
    </div>
  );
} 