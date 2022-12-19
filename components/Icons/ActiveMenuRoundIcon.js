import React from "react"
// Ammazing reference
// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const SVG = ({ width = "5px", height = "38px", fill = "#667EEA", className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 5 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="8" height="38" rx="4" fill={fill} />
  </svg>
)

export default SVG
