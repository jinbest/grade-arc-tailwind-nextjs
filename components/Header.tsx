import React from "react"
import { observer } from "mobx-react"
import SearchIcon from "./Icons/SearchIcon"
import ArrowDownIcon from "./Icons/ArrowDownIcon"
import { user } from "../services/data"
import Image from "next/image"
// import { store } from "../store"

const Header = () => {
  return (
    <div className="py-2 px-3 bg-white h-16 flex flex-none items-center justify-start lx:justify-center relative">
      <div className="h-10 bg-default-bgCol w-9/12 lx:w-3/5 rounded-lg overflow-hidden flex items-center justify-between pl-3">
        <SearchIcon className="shrink-0" />
        <input
          className="flex-1 h-full outline-0 bg-default-bgCol px-3 font-sans text-sm"
          placeholder="What are you looking for?"
        />
        <button className="flex-none w-24 bg-default-blue text-white font-sans cursor-pointer h-full hover:opacity-70">
          Search
        </button>
      </div>

      <div className="absolute right-4 flex items-center cursor-pointer">
        <Image src={user.avatar} alt="avatar" width="24" height="24" className="pr-2" priority />
        <p className="font-sans text-base pr-2 hidden lg:block">{user.name}</p>
        <ArrowDownIcon />
      </div>
    </div>
  )
}

export default observer(Header)
