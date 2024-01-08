import { ReactNode } from "react"

/**
 * {
 *   name?: string | null
 * }
 */
export type UNullish<T> = {
  [K in keyof T]+?: T[K] | null
}

/**
 * type TUser = IUser | null | undefined
 */
export type UNullishObj<T> = T | null | undefined

/**
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
