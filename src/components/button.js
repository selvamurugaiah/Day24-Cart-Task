//reusable components
import React from "react"



const Button=({name,bgClr,clr,onClick})=>{
    return(
        < button style={{backgroundColor:bgClr, color:clr}} 
        className="My-btn"
        onClick={onClick}>
            {name}</button>
    )
  
}
export default Button