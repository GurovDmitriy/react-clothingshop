export interface IPropsChildrenNode {
  children: React.ReactNode
}

export interface IPropsChildrenElem {
  children: React.ReactElement
}

export interface IPropsError {
  error: Error
  reset: () => void
}

export interface IPropsErrorGlobal {
  error: Error & { digest?: string }
  reset: () => void
}

export interface IPropsClassName {
  className?: string
}

export interface IPropsCSS {
  style: React.CSSProperties
}

export type TStatus = "useless" | "pending" | "success" | "failure"
