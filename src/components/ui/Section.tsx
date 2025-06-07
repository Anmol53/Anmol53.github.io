import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
}

export function Section({
  title,
  subtitle,
  children,
  className,
  fullWidth = false,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20", className)} {...props}>
      <div className={fullWidth ? "" : "container mx-auto px-4 max-w-4xl"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title && (
            <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-400 text-center mb-12">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
