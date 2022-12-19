import * as React from "react"
import ReactTooltip from "react-tooltip"

const CustomTooltip = ({ hint, id, children }) => {
  return (
    <ReactTooltip id={id} place="top" effect="solid">
      <div className="custom-tooltip-text">{children ? children : <p>{hint}</p>}</div>
    </ReactTooltip>
  )
}

export default CustomTooltip
