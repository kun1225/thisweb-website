import { HTMLProps } from "react"
import clsx from "clsx"

const Stack = ({
  as: Component = 'div',
  gap = 4,
  direction = 'row',
  wrap = false,
  className,
  children
}: {
  as?: 'div' | 'section' | 'main' | 'ul' | 'li' | 'article' | 'nav',
  gap?: number,
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  wrap?: boolean
  className?: HTMLProps<HTMLElement>["className"]
  children?: React.ReactNode
}) => {

  return (
    <Component className={`
      flex
      gap-${gap}
      flex-${direction}
      ${wrap && 'flex-wrap'}
      ${className}
    `}>
      {children}
    </Component>
  )
}

export default Stack