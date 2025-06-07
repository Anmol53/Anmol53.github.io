"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

interface MarqueeGroupProps {
  children: ReactNode;
}

interface MarqueeProps extends MarqueeGroupProps {
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export const MarqueeGroup = ({ children }: MarqueeGroupProps) => (
  <div className="flex gap-8 min-w-max py-2">{children}</div>
);

export const Marquee = ({
  children,
  direction = "left",
  speed = 35,
  className = "",
}: MarqueeProps) => (
  <div className={`relative flex w-full overflow-hidden ${className}`}>
    <div
      className="flex animate-marquee"
      style={{
        animationDirection: direction === "left" ? "normal" : "reverse",
        animationDuration: `${speed}s`,
      }}
    >
      <MarqueeGroup>{children}</MarqueeGroup>
      <MarqueeGroup>{children}</MarqueeGroup>
    </div>
    <div
      className="flex animate-marquee"
      aria-hidden="true"
      style={{
        animationDirection: direction === "left" ? "normal" : "reverse",
        animationDuration: `${speed}s`,
      }}
    >
      <MarqueeGroup>{children}</MarqueeGroup>
      <MarqueeGroup>{children}</MarqueeGroup>
    </div>
  </div>
);

export const SkillCard = ({
  name,
  icon,
  color,
}: {
  name: string;
  icon: string;
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center gap-2 px-4 py-3 min-w-[120px] transition-transform"
  >
    {icon === "custom-datadog" ? (
      <i className="w-9 h-9 relative">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/datadog.svg"
          alt="DataDog"
          width={32}
          height={32}
          className={color}
        />
      </i>
    ) : (
      <i className={`${icon} text-4xl ${color}`} />
    )}
    <span className="text-sm font-medium whitespace-nowrap">{name}</span>
  </motion.div>
);
