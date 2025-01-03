export type PageParam =
  | "home"
  | "calendar"
  | "chat"
  | "classes"
  | "drive"
  | "schedule"
  | "assignments"
  | "grades"
  | "other"
  | "notifications"
  | "settings"

export interface RouterParam {
  type: PageParam
  route: string
  label: string
  active: boolean
  index: number
}

export type CardTypeParam = "book" | "play_circle" | "book_opened"

export interface CardParam {
  type: CardTypeParam
  count: number
  text: string
  bgCol: string
  textCol: string
}
