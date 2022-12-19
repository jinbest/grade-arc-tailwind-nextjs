import React from "react"
import Image from "next/image"
import { observer } from "mobx-react"
import { store } from "../store"
import Link from "next/link"
import { RouterParam } from "../models"
import dynamic from "next/dynamic"
import ActiveMenuRoundIcon from "./Icons/ActiveMenuRoundIcon"

const DynamicPageIcon = dynamic(() => import("./PageIcon"), { ssr: false })

const Sidebar = () => {
  const { openDrawer, setOpenDrawer, routers, extraRouters } = store

  return (
    <div
      className={`flex flex-col h-screen bg-white ${
        openDrawer ? "w-60" : "w-16"
      } flex-none p-0 box-border`}
    >
      <div className="w-full flex flex-none justify-between items-center h-16 py-1 px-4">
        {openDrawer && (
          <div className="flex items-center">
            <div className="border-2 border-default-lightGrey p-1 w-10 h-10 rounded flex justify-center items-center">
              <Image src="/logo.png" alt="logo" width="20" height="20" />
            </div>
            <p className="font-sans font-bold pl-2 text-lg">Grade Arc</p>
          </div>
        )}

        <div
          className={`cursor-pointer ${openDrawer ? "ml-auto" : "m-auto rotate-180"}`}
          onClick={() => {
            setOpenDrawer(!openDrawer)
          }}
        >
          <Image src="/drawer-switch.png" alt="drawer-switch" width="20" height="20" />
        </div>
      </div>

      <div className="flex-1 relative">
        <div
          className="mt-3 overflow-y-auto hide-scrollbar"
          style={{ maxHeight: "calc(100vh - 195px)" }}
        >
          {routers.map((item: RouterParam) => (
            <Link href={item.route} key={item.index}>
              <React.Fragment>
                <div
                  className={`${
                    openDrawer ? "pl-6" : "px-0 justify-center"
                  } flex py-0 items-center cursor-pointer hover:opacity-70 h-14`}
                  data-tip
                  data-for={`router-${item.index}`}
                >
                  <DynamicPageIcon type={item.type} active={item.active} className="shrink-0" />
                  {openDrawer && (
                    <p
                      className={`pl-3 ${
                        item.active ? "text-default-blue" : "text-default-disable"
                      } font-sans`}
                    >
                      {item.label}
                    </p>
                  )}
                  {item.active && openDrawer && (
                    <div className="ml-auto">
                      <ActiveMenuRoundIcon />
                    </div>
                  )}
                </div>
              </React.Fragment>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full pb-1 border-t-2 border-default-borderCol">
          {extraRouters.map((item: RouterParam) => (
            <Link href={item.route} key={`extra-${item.index}`}>
              <div
                className={`${
                  openDrawer ? "pl-6" : "px-0 justify-center"
                } flex py-0 items-center cursor-pointer hover:opacity-70 h-14`}
              >
                <DynamicPageIcon type={item.type} active={item.active} className="shrink-0" />
                {openDrawer && (
                  <p
                    className={`pl-3 ${
                      item.active ? "text-default-blue" : "text-default-disable"
                    } font-sans`}
                  >
                    {item.label}
                  </p>
                )}
                {item.active && openDrawer && (
                  <div className="ml-auto">
                    <ActiveMenuRoundIcon />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default observer(Sidebar)
