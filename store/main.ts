import { autorun, configure, makeAutoObservable } from "mobx"
import { initial_routers, initial_extra_routers } from "../static/const"
import { cloneDeep } from "lodash"
import { RouterParam } from "../models"

configure({ enforceActions: "always" })

export class MainStore {
  openDrawer = true
  routers: RouterParam[] = cloneDeep(initial_routers)
  extraRouters: RouterParam[] = cloneDeep(initial_extra_routers)

  constructor() {
    this.load()
    autorun(this.save)
    makeAutoObservable(this)
  }

  private save = () => {
    if (
      typeof window !== "undefined" &&
      window.localStorage !== null &&
      typeof window.localStorage !== "undefined"
    ) {
      window.localStorage.setItem(
        MainStore.name,
        JSON.stringify({
          openDrawer: this.openDrawer,
          routers: this.routers,
          extraRouters: this.extraRouters,
        })
      )
    }
  }

  private load = () => {
    Object.assign(this, {})
  }

  setOpenDrawer = (openDrawer: boolean) => {
    this.openDrawer = openDrawer
    this.save()
  }

  setRouters = (routers: RouterParam[]) => {
    this.routers = routers
    this.save()
  }

  setExtraRouters = (extraRouters: RouterParam[]) => {
    this.extraRouters = extraRouters
    this.save()
  }

  clearForm = () => {
    this.openDrawer = true
    this.routers = cloneDeep(initial_routers)
    this.extraRouters = cloneDeep(initial_extra_routers)
    this.save()
  }
}

export default new MainStore()
