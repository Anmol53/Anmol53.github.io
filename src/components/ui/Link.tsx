import NextLink from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
}

export function Link({ className, href, external, children, ...props }: LinkProps) {
  const isExternal = external || href.startsWith('http') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(
          'text-gray-300 hover:text-white transition-colors duration-200',
          className
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={cn(
        'text-gray-300 hover:text-white transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
} 