'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMouseParallax } from '../hooks/useMouseParallax';
// Components
import { ImHtmlFive2, ImCss3, ImCodepen } from 'react-icons/im';
import { FaSquareJs, FaReact, FaCode, FaRegFileCode } from 'react-icons/fa6';

import type { IconType } from 'react-icons';

interface FloatingIconProps {
  Icon: IconType;
  x: number;
  y: number;
  delay?: number;
  style?: React.CSSProperties;
}

interface IconConfig {
  Icon: IconType;
  left: number;
  top: number;
  delay: number;
}

const ICONS_CONFIG: IconConfig[] = [
  {
    Icon: ImHtmlFive2,
    left: 10,
    top: 15,
    delay: Math.random(),
  },
  {
    Icon: ImCss3,
    left: 75,
    top: 20,
    delay: Math.random(),
  },
  {
    Icon: FaSquareJs,
    left: 45,
    top: 35,
    delay: Math.random(),
  },
  {
    Icon: FaReact,
    left: 85,
    top: 55,
    delay: Math.random(),
  },
  {
    Icon: FaCode,
    left: 15,
    top: 85,
    delay: Math.random(),
  },
  {
    Icon: ImCodepen,
    left: 75,
    top: 76,
    delay: Math.random(),
  },
  {
    Icon: FaRegFileCode,
    left: 45,
    top: 80,
    delay: Math.random(),
  },
];

export function HomeHeroFloating() {
  const { x, y } = useMouseParallax();

  return (
    <div className="absolute inset-0 -z-10">
      {ICONS_CONFIG.map((config, index) => {
        const { left, top } = config;

        return (
          <HomeHeroIcon
            key={index}
            Icon={config.Icon}
            x={x}
            y={y}
            delay={config.delay}
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        );
      })}
    </div>
  );
}

function HomeHeroIcon({ Icon, x, y, delay = 0, style = {} }: FloatingIconProps) {
  const randomMometun = useRef<number>((Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5));

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.07, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      style={{
        ...style,
        x: x * randomMometun.current,
        y: y * randomMometun.current,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <Icon className="h-12 w-12" />
    </motion.div>
  );
}
