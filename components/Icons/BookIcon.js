import React from "react"
// Ammazing reference
// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const SVG = ({ width = "24px", height = "24px", fill = "#667EEA", className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4.36969 19.5C4.36969 18.837 4.62555 18.2011 5.08098 17.7322C5.53641 17.2634 6.15411 17 6.79819 17H19.9121M4.36969 19.5C4.36969 20.163 4.62555 20.7989 5.08098 21.2678C5.53641 21.7366 6.15411 22 6.79819 22H19.9121V2H6.79819C6.15411 2 5.53641 2.26339 5.08098 2.73223C4.62555 3.20107 4.36969 3.83696 4.36969 4.5V19.5Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SVG
