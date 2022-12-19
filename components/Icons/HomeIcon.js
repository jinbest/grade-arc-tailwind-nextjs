import React from "react"
// Ammazing reference
// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const SVG = ({ width = "22px", height = "22px", fill = "#667EEA", className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8.77778 3C8.77778 1.89543 7.88235 1 6.77778 1H3C1.89543 1 1 1.89543 1 3V6.77778C1 7.88235 1.89543 8.77778 3 8.77778H6.77778C7.88235 8.77778 8.77778 7.88235 8.77778 6.77778V3Z"
      fill={fill}
    />
    <path
      d="M21 3C21 1.89543 20.1046 1 19 1H15.2222C14.1177 1 13.2222 1.89543 13.2222 3V6.77778C13.2222 7.88235 14.1177 8.77778 15.2222 8.77778H19C20.1046 8.77778 21 7.88235 21 6.77778V3Z"
      fill={fill}
    />
    <path
      d="M21 15.2222C21 14.1177 20.1046 13.2222 19 13.2222H15.2222C14.1177 13.2222 13.2222 14.1177 13.2222 15.2222V19C13.2222 20.1046 14.1177 21 15.2222 21H19C20.1046 21 21 20.1046 21 19V15.2222Z"
      fill={fill}
    />
    <path
      d="M8.77778 15.2222C8.77778 14.1177 7.88235 13.2222 6.77778 13.2222H3C1.89543 13.2222 1 14.1177 1 15.2222V19C1 20.1046 1.89543 21 3 21H6.77778C7.88235 21 8.77778 20.1046 8.77778 19V15.2222Z"
      fill={fill}
    />
    <path
      d="M8.77778 3C8.77778 1.89543 7.88235 1 6.77778 1H3C1.89543 1 1 1.89543 1 3V6.77778C1 7.88235 1.89543 8.77778 3 8.77778H6.77778C7.88235 8.77778 8.77778 7.88235 8.77778 6.77778V3Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3C21 1.89543 20.1046 1 19 1H15.2222C14.1177 1 13.2222 1.89543 13.2222 3V6.77778C13.2222 7.88235 14.1177 8.77778 15.2222 8.77778H19C20.1046 8.77778 21 7.88235 21 6.77778V3Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 15.2222C21 14.1177 20.1046 13.2222 19 13.2222H15.2222C14.1177 13.2222 13.2222 14.1177 13.2222 15.2222V19C13.2222 20.1046 14.1177 21 15.2222 21H19C20.1046 21 21 20.1046 21 19V15.2222Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.77778 15.2222C8.77778 14.1177 7.88235 13.2222 6.77778 13.2222H3C1.89543 13.2222 1 14.1177 1 15.2222V19C1 20.1046 1.89543 21 3 21H6.77778C7.88235 21 8.77778 20.1046 8.77778 19V15.2222Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SVG
