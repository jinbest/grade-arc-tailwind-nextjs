import { CardTypeParam, CardParam } from "../models"
import avatar from "../public/avatar.png"

export const user = {
  name: "Harold shutzr",
  avatar: avatar,
}

export const homeCards = [
  {
    type: "book" as CardTypeParam,
    count: 16,
    text: "Completed Assignments",
    bgCol: "#C9D2F8",
    textCol: "#313E78",
  },
  {
    type: "play_circle" as CardTypeParam,
    count: 8,
    text: "Missing Assignments",
    bgCol: "#FFCCCC",
    textCol: "#DD0E31",
  },
  {
    type: "book_opened" as CardTypeParam,
    count: 7,
    text: "New Materials Posted",
    bgCol: "#009416",
    textCol: "#009416",
  },
] as CardParam[]
