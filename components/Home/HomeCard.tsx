import React from "react"
import { CardParam } from "../../models"
import Image from "next/image"
import BookIcon from "../Icons/BookIcon"
import PlayCircleIcon from "../Icons/PlayCircleIcon"
import BookOpenIcon from "../Icons/BookOpenIcon"

interface HomeCardProps {
  data: CardParam
}

const HomeCard = ({ data }: HomeCardProps) => {
  return (
    <div className="w-full rounded-2xl h-auto min-h-[203px] relative overflow-hidden">
      <div
        className="absolute w-full h-full opacity-30 z-0 left-0 top-0"
        style={{ background: data.bgCol }}
      />

      <div className="relative w-full h-full z-10 bg-transparent p-8">
        <div className="absolute right-0 bottom-0 z-0 flex flex-col justify-end">
          {data.type === "book" && (
            <Image src="/book.png" alt="book" priority width="145" height="98" />
          )}
          {data.type === "play_circle" && (
            <Image src="/play-circle.png" alt="play_circle" priority width="185" height="95" />
          )}
          {data.type === "book_opened" && (
            <Image src="/book-open.png" alt="book_opened" priority width="136" height="141" />
          )}
        </div>

        <div className="w-full flex items-center justify-between z-10 relative">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-3xl">
            {data.type === "book" && <BookIcon />}
            {data.type === "play_circle" && <PlayCircleIcon />}
            {data.type === "book_opened" && <BookOpenIcon />}
          </div>
          <p className="text-default-blue underline font-sans cursor-pointer text-base hover:opacity-70">
            View All
          </p>
        </div>

        <div className="flex items-center mt-4 z-10 relative">
          <p className="font-grotesk text-6xl font-bold" style={{ color: data.textCol }}>
            {data.count}
          </p>
          <p className="font-sans max-w-[126px] text-card-textCol text-lg ml-4">{data.text}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
