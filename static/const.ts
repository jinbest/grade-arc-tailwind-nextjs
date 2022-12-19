import { PageParam, RouterParam } from "../models"

export const initial_routers = [
  {
    type: "home" as PageParam,
    route: "/",
    label: "Home",
    active: true,
    index: 0,
  },
  {
    type: "calendar" as PageParam,
    route: "/calendar",
    label: "Calendar",
    active: false,
    index: 1,
  },
  {
    type: "chat" as PageParam,
    route: "/chat",
    label: "Chat",
    active: false,
    index: 2,
  },
  {
    type: "classes" as PageParam,
    route: "/classes",
    label: "Classes",
    active: false,
    index: 3,
  },
  {
    type: "drive" as PageParam,
    route: "/drive",
    label: "Drive",
    active: false,
    index: 4,
  },
  {
    type: "schedule" as PageParam,
    route: "/schedule",
    label: "Schedule",
    active: false,
    index: 5,
  },
  {
    type: "assignments" as PageParam,
    route: "/assignments",
    label: "Assignments",
    active: false,
    index: 6,
  },
  {
    type: "grades" as PageParam,
    route: "/grades",
    label: "Grades",
    active: false,
    index: 7,
  },
  {
    type: "other" as PageParam,
    route: "/other",
    label: "Other",
    active: false,
    index: 8,
  },
] as RouterParam[]

export const initial_extra_routers = [
  {
    type: "notifications" as PageParam,
    route: "/notifications",
    label: "Notifications",
    active: false,
    index: 0,
  },
  {
    type: "settings" as PageParam,
    route: "/settings",
    label: "Settings",
    active: false,
    index: 1,
  },
]
