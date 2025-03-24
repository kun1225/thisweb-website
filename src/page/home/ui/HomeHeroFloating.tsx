'use client';

import { useRef } from 'react';
import type { IconType } from 'react-icons';
import { FaCode, FaReact, FaRegFileCode, FaSquareJs } from 'react-icons/fa6';
// Components
import { ImCodepen, ImCss3, ImHtmlFive2 } from 'react-icons/im';
import { randomInt } from '@/src/shared/lib/utils';
import { useMouse } from '../../../shared/hooks/useMouse';
import { motion } from 'motion/react';

interface FloatingIconProps {
  Icon: IconType;
  x: number;
  y: number;
  scale?: number;
  style?: React.CSSProperties;
}

interface IconConfig {
  Icon: IconType;
  left: number;
  top: number;
  scale: number;
}

const ICONS_CONFIG: IconConfig[] = [
  {
    Icon: ImHtmlFive2,
    left: 8,
    top: 21,
    scale: randomInt(8, 10) / 10,
  },
  {
    Icon: ImCss3,
    left: 88,
    top: 16,
    scale: randomInt(8, 10) / 10,
  },
  {
    Icon: FaSquareJs,
    left: 35,
    top: 12,
    scale: randomInt(8, 10) / 10,
  },
  {
    Icon: FaReact,
    left: 59,
    top: 10,
    scale: randomInt(8, 10) / 10,
  },
  {
    Icon: FaCode,
    left: 15,
    top: 85,
    scale: randomInt(8, 10) / 10,
  },
  {
    Icon: ImCodepen,
    left: 77,
    top: 88,
    scale: randomInt(8, 10) / 10,
  },
  {
    Icon: FaRegFileCode,
    left: 45,
    top: 75,
    scale: randomInt(8, 10) / 10,
  },
];

export function HomeHeroFloating() {
  const [mousePosition] = useMouse();
  const { x, y } = mousePosition;

  return (
    <div className="absolute inset-0 -z-10">
      {ICONS_CONFIG.map((config, index) => {
        const { left, top } = config;

        return (
          <HomeHeroIcon
            key={index}
            Icon={config.Icon}
            x={x * 0.02}
            y={y * 0.02}
            scale={config.scale}
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        );
      })}
    </div>
  );
}

function HomeHeroIcon({ Icon, x, y, scale = 0, style = {} }: FloatingIconProps) {
  const randomMometun = useRef<number>((Math.random() > 0.5 ? 1 : -1) * (Math.random() * 5));

  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.06, scale }}
      transition={{
        duration: 0.3,
        ease: 'anticipate',
      }}
      style={{
        ...style,
        x: x * randomMometun.current,
        y: y * randomMometun.current,
        transition: 'transform 0.5s ease-out',
      }}
    >
      <Icon className="h-12 w-12" />
    </motion.div>
  );
}
