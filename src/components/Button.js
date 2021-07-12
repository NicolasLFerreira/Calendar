import React from "react"

function Button(props){
    return(
        <button className="col btn btn-light" onClick={() => props.onClickAction()}>{props.text}</button>
    )
}

export default Button