import React from 'react'

const Color = (props) => {
    const color = props.color
    const currentColor = props.currentColor
    const colorClicked = props.colorClicked
  
    // copy color value for className string
    let classNameStr = color
  
    // create condition for adding to class string
    if(classNameStr === currentColor & classNameStr != color + ' selected'){
      classNameStr += ' selected'
      console.log(classNameStr)
    }
    // construct return div
    let data = <div className={classNameStr} onClick={() => colorClicked(color)}></div>
    return(data)
}

export default Color