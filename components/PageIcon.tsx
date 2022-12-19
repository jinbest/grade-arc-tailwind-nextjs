import React from "react"
import { PageParam } from "../models"
import HomeIcon from "./Icons/HomeIcon"
import CalendarIcon from "./Icons/CalendarIcon"
import ChatIcon from "./Icons/ChatIcon"
import ClassesIcon from "./Icons/ClassesIcon"
import DriveIcon from "./Icons/DriveIcon"
import ScheduleIcon from "./Icons/ScheduleIcon"
import AssignmentsIcon from "./Icons/AssignmentsIcon"
import GradesIcon from "./Icons/GradesIcon"
import OtherIcon from "./Icons/OtherIcon"
import NotificationIcon from "./Icons/NotificationIcon"
import SettingIcon from "./Icons/SettingIcon"

interface PageIconProps {
  type: PageParam
  active: boolean
  className: string
}

const PageIcon = ({ type, active, className }: PageIconProps) => {
  return (
    <React.Fragment>
      {type === "home" && <HomeIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />}
      {type === "calendar" && (
        <CalendarIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
      {type === "chat" && <ChatIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />}
      {type === "classes" && (
        <ClassesIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
      {type === "drive" && (
        <DriveIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
      {type === "schedule" && (
        <ScheduleIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
      {type === "assignments" && (
        <AssignmentsIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
      {type === "grades" && (
        <GradesIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
      {type === "other" && (
        <OtherIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
      {type === "notifications" && (
        <NotificationIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
      {type === "settings" && (
        <SettingIcon fill={active ? "#667EEA" : "#BFBFBF"} className={className} />
      )}
    </React.Fragment>
  )
}

export default PageIcon
