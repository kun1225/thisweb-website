'use client'

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function NumberCounter({
  value,
  direction = "up",
  className = "",
}: {
  value: number;
  direction?: "up" | "down";
  className?: React.HTMLAttributes<HTMLElement>["className"];
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 200,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-TW").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <p ref={ref}>{direction === "down" ? value : 0}</p>;
}