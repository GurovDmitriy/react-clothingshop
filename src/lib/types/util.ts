import { ReactNode } from "react"

/**
 * UtilNullish
 *
 * Output
 * {
 *   name?: string | null
 * }
 */
export type UNullish<T> = {
  [K in keyof T]+?: T[K] | null
}

/**
 * UtilNullable
 *
 * Output
 * {
 *   name: string | null
 * }
 */
export type UNullable<T> = {
  [K in keyof T]: T[K] | null
}

export type UPropsWithChildren<P = unknown> = P & { children: ReactNode }

export type UPropsWithOptionalChildren<P = unknown> = P & {
  children?: ReactNode
}
