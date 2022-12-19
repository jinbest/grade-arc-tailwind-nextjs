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
