import React from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

type Props = {
  children?: any
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="h-screen flex">
      <Sidebar />

      <div className="flex flex-1 flex-col h-screen">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
