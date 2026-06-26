import type { ElementType, PropsWithChildren } from "react";

export function Container({
  children,
  as: Component = "div",
  className = "",
}: PropsWithChildren<{
  as?: ElementType;
  className?: string;
}>) {
  return <Component className={`container ${className}`}>{children}</Component>;
}
