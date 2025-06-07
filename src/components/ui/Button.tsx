import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'px-5 py-2.5 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base font-medium';
    const variants = {
      primary: cn(
        'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400',
        'text-white shadow-blue-500/20 hover:shadow-blue-500/30'
      ),
      secondary: cn(
        'bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700',
        'text-gray-900 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white',
        'ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-600',
        'shadow-gray-200/20 dark:shadow-black/20 hover:shadow-gray-200/40 dark:hover:shadow-black/40'
      )
    };

    const loadingSpinner = (
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Loading...
      </div>
    );

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          isLoading && 'opacity-70 cursor-not-allowed',
          disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? loadingSpinner : children}
      </button>
    );
  }
);

Button.displayName = 'Button'; 