"use client"
import { motion } from "framer-motion"
import { useRef, useState, HTMLProps } from "react"
import useWindowWidth from "@/hook/useWindowWidth"

const Magnetic = ({
  disableInMobile = true,
  className,
  children
}: {
  disableInMobile?: boolean,
  className?: HTMLProps<HTMLElement>["className"]
  children?: React.ReactNode
}) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const { isDesktop } = useWindowWidth();

  const mouseMove = (e: any) => {

    if (disableInMobile && !isDesktop) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();

    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;

    setPosition({ x, y })
  }

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 30, mass: 0.1 }}
    >
      {children}
    </motion.div>

  )
}

export default Magnetic


// const MotionCustom = motion(CustomComponent, { forwardMotionProps: true })