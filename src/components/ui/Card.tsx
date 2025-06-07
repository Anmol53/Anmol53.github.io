import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  index?: number;
  children?: ReactNode;
  className?: string;
}

export function Card({ className, hover = true, index = 0, children, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'group relative bg-white dark:bg-gray-900/50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800/50 backdrop-blur-sm p-8',
        hover && 'hover:shadow-xl hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300',
        className
      )}
      {...props}
    >
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
} 