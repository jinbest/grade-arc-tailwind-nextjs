import React, { useEffect } from "react"
import type { NextPage } from "next"
import MainLayout from "../layouts/main-layout"
import HomePage from "../views/Home"
import { observer } from "mobx-react"
import { store } from "../store"
import { RouterParam } from "../models"
import { findIndex, cloneDeep } from "lodash"

const Index: NextPage = () => {
  const { setRouters, routers, setExtraRouters, extraRouters } = store

  useEffect(() => {
    onChangeRouters()
  }, [])

  const onChangeRouters = () => {
    const cntRouters = cloneDeep(routers),
      cntExtraRouters = cloneDeep(extraRouters)
    const pageIndex = findIndex(cntRouters, (o) => o.type === "home")

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
      cntExtraRouters[index].active = false
    })

    setRouters([...cntRouters])
    setExtraRouters([...cntExtraRouters])
  }

  return (
    <div className="h-screen bg-default-bgCol">
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  )
}

export default observer(Index)
