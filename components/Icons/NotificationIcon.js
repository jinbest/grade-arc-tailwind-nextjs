import React from "react"
// Ammazing reference
// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const SVG = ({ width = "18px", height = "20px", fill = "#BFBFBF", className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11 18C10.7968 18.3042 10.505 18.5566 10.154 18.7321C9.80302 18.9076 9.40506 19 9 19C8.59494 19 8.19698 18.9076 7.84598 18.7321C7.49498 18.5566 7.20325 18.3042 7 18M14.3333 6.2C14.3333 4.82087 13.7714 3.49823 12.7712 2.52304C11.771 1.54786 10.4145 1 9 1C7.58551 1 6.22896 1.54786 5.22876 2.52304C4.22857 3.49823 3.66667 4.82087 3.66667 6.2C3.66667 12.2667 1 14 1 14H17C17 14 14.3333 12.2667 14.3333 6.2Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SVG
