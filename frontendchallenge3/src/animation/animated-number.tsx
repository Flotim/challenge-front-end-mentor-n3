"use client";

import { ComponentPropsWithoutRef, useEffect, useState } from "react";

type HighlightProps = ComponentPropsWithoutRef<"div"> & {
  trigger: number; 
  duration: number;
  className?: string;
};

export default function Highlight({ trigger, duration, className = "", ...props }: HighlightProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (trigger !== count) {
      let stepCount = Math.min(60, duration / 2); 
      let increment = trigger / stepCount; 

      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        setCount((prev) => (prev + increment > trigger ? trigger : prev + increment));

        if (current >= trigger) clearInterval(interval);
      }, duration / stepCount);

      return () => clearInterval(interval);
    }
  }, [trigger, duration]);

  return (
    <div {...props} className={`text-4xl ${className} font-bold text-[var(--dark-brown)]`}>
      {count.toFixed(2)}
    </div>
  );
}
