import React from "react"
import LiteratureAssignments from "../components/Home/LiteratureAssignments"
import { homeCards } from "../services/data"
import { CardParam } from "../models"
import HomeCard from "../components/Home/HomeCard"

const HomePage = () => {
  return (
    <div className="flex-1 p-3 overflow-y-scroll hide-scrollbar">
      <div className="w-full max-w-screen-ls h-full">
        <LiteratureAssignments />

        <div className="grid grid-cols-1 md:grid-cols-2 lx:grid-cols-3 gap-3 py-4">
          {homeCards.map((item: CardParam, index: number) => (
            <HomeCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
