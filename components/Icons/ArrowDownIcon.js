import React from "react"
// Ammazing reference
// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const SVG = ({ width = "24px", height = "24px", fill = "#141414", className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.2733 15.5491L5.62331 9.88908C5.52958 9.79611 5.45519 9.68551 5.40442 9.56365C5.35365 9.44179 5.32751 9.31109 5.32751 9.17908C5.32751 9.04706 5.35365 8.91636 5.40442 8.7945C5.45519 8.67264 5.52958 8.56204 5.62331 8.46908C5.81068 8.28283 6.06413 8.17828 6.32831 8.17828C6.5925 8.17828 6.84595 8.28283 7.03331 8.46908L12.0333 13.4191L16.9833 8.46908C17.1707 8.28283 17.4241 8.17828 17.6883 8.17828C17.9525 8.17828 18.2059 8.28283 18.3933 8.46908C18.4878 8.56169 18.563 8.67214 18.6145 8.79401C18.666 8.91589 18.6928 9.04677 18.6933 9.17908C18.6928 9.31138 18.666 9.44227 18.6145 9.56414C18.563 9.68602 18.4878 9.79646 18.3933 9.88908L12.7433 15.5491C12.6497 15.6506 12.536 15.7316 12.4095 15.787C12.283 15.8424 12.1464 15.871 12.0083 15.871C11.8702 15.871 11.7336 15.8424 11.6071 15.787C11.4806 15.7316 11.367 15.6506 11.2733 15.5491Z"
      fill={fill}
    />
  </svg>
)

export default SVG
