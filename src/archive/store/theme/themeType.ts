import { ActionStatus } from "../storeType"

export enum ThemeType {
  light = "light",
  dark = "dark",
}

export type ThemeEntities = {
  value: ThemeType
}

export type ThemeModule = {
  entities?: ThemeEntities | null
  status: ActionStatus
  error?: string | null
}
