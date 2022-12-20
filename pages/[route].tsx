import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import { store } from "../store"
import { PageParam, RouterParam } from "../models"
import { findIndex, cloneDeep } from "lodash"
import { useRouter } from "next/router"
import MainLayout from "../layouts/main-layout"
import CalendarPage from "../views/Calendar"
import ChatPage from "../views/Chat"
import ClassesPage from "../views/Classes"
import DrivePage from "../views/Drive"
import SchedulePage from "../views/Schedule"
import AssignmentsPage from "../views/Assignments"
import GradesPage from "../views/Grades"
import OtherPage from "../views/Other"
import NotificationsPage from "../views/Notifications"
import SettingsPage from "../views/Settings"

const Slug = () => {
  const { setRouters, routers, setExtraRouters, extraRouters } = store
  const router = useRouter()

  const [route, setRoute] = useState("")

  useEffect(() => {
    if (router.query?.route) {
      onChangeRouters(router.query.route as PageParam)
    }
  }, [router])

  const onChangeRouters = (route: PageParam) => {
    setRoute(route)
    const cntRouters = cloneDeep(routers),
      cntExtraRouters = cloneDeep(extraRouters)
    const pageIndex = findIndex(cntRouters, (o) => o.type === route)
    const extraPageIndex = findIndex(cntExtraRouters, (o) => o.type === route)

    if (pageIndex < 0 && extraPageIndex < 0) {
      router.push("/")
      return
    }

    cntRouters.forEach((item: RouterParam) => {
      const index = item.index
      if (index === pageIndex) {
        cntRouters[index].active = true
      } else {
        cntRouters[index].active = false
      }
    })

    cntExtraRouters.forEach((item: RouterParam) => {
      const index = item.index
      if (index === extraPageIndex) {
        cntExtraRouters[index].active = true
      } else {
        cntExtraRouters[index].active = false
      }
    })

    setRouters([...cntRouters])
    setExtraRouters([...cntExtraRouters])
  }

  return (
    <div className="h-screen bg-default-bgCol">
      <MainLayout>
        {route === "calendar" && <CalendarPage />}
        {route === "chat" && <ChatPage />}
        {route === "classes" && <ClassesPage />}
        {route === "drive" && <DrivePage />}
        {route === "schedule" && <SchedulePage />}
        {route === "assignments" && <AssignmentsPage />}
        {route === "grades" && <GradesPage />}
        {route === "other" && <OtherPage />}
        {route === "notifications" && <NotificationsPage />}
        {route === "settings" && <SettingsPage />}
      </MainLayout>
    </div>
  )
}

export default observer(Slug)
