import React from 'react'

export const Square = (props) => {
  return (
    <div className='square'
    onClick={props.onClick}
    style={{ 
        border:"2px solid",
        height:"100px", 
        width:"100%", 
        justifyContent:"center",
        alignItems:"center", 
        display:"flex"
        }}>
        <h5>{props.value}</h5>
    </div>
  )
}
