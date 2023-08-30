import clsx from "clsx"
import { HTMLProps } from "react"

const Button = ({ 
  className,
  children
}: { 
  className?: HTMLProps<HTMLElement>["className"]
  children: React.ReactNode 
}) => {

  return (
    <button className={`
      w-full 
      md:w-80 
      border-2 
      border-secondary 
      text-secondary
      text-sm 
      px-6 py-2 
      rounded-sm
      duration-200 
      hover:bg-gray-200
      hover:border-transparent
      ${className}`}>{children}</button>
  )
}

export default Button