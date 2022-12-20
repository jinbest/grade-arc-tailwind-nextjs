import React from "react"
import CloseIcon from "../Icons/CloseIcon"
import Image from "next/image"
import moment from "moment"

const LiteratureAssignments = () => {
  return (
    <div className="w-full rounded-2xl h-auto min-h-[141px] bg-white relative flex items-center justify-between pl-6 lx:pl-12 pr-6 ml:pr-80 py-4 overflow-hidden">
      <button className="flex-none bg-default-bgCol text-default-blue text-base lx:text-lg font-sans cursor-pointer w-20 h-10 rounded-2xl hover:opacity-70">
        New
      </button>

      <div className="flex-1 px-5">
        <p className="font-sans text-xl lx:text-2xl font-bold text-default-textCol1">
          Hey Jack, Basics of Literature assignment is due Monday.
          <span className="cursor-pointer text-default-blue underline text-lg pl-4 whitespace-nowrap">
            Set a Reminder
          </span>
        </p>
        <p className="text-default-lightDisable text-sm font-sans mt-3">
          {moment().format("DD / MM / YYYY")}
        </p>
      </div>

      <div className="flex-none shrink-0 absolute bottom-0 right-5 p-0 h-full flex-col justify-end hidden ml:flex">
        <Image src="/sskoo.png" alt="sskoo" width="324" height="141" priority />
      </div>

      <div className="absolute right-4 top-4 cursor-pointer">
        <CloseIcon />
      </div>
    </div>
  )
}

export default LiteratureAssignments
