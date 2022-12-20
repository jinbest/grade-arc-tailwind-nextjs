import React from "react"
// Ammazing reference
// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const SVG = ({ width = "24px", height = "24px", fill = "#DD0E31", className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.9586 22C17.3235 22 21.6727 17.5228 21.6727 12C21.6727 6.47715 17.3235 2 11.9586 2C6.59374 2 2.24463 6.47715 2.24463 12C2.24463 17.5228 6.59374 22 11.9586 22Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0158 8L15.8442 12L10.0158 16V8Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SVG
