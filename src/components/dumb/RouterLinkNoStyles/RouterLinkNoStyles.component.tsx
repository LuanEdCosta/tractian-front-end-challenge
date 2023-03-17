import { Link, LinkProps } from 'react-router-dom'

type RouterLinkNoStylesProps = LinkProps & {
  disabled?: boolean
}

export function RouterLinkNoStyles({
  children,
  disabled = false,
  ...props
}: RouterLinkNoStylesProps) {
  return (
    <Link
      {...props}
      style={{
        ...props.style,
        outline: 'none',
        color: 'inherit',
        textDecoration: 'none',
        pointerEvents: disabled ? 'none' : undefined,
      }}
      tabIndex={-1}
    >
      {children}
    </Link>
  )
}
