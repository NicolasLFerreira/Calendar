import React from "react"

function EventItem(props){
    return(
        <div className="row">
            <li className="col-11" >{props.text}</li>
            {props.delete ? <button className="col-1">x</button> : null}
        </div>
        
    )
}

export default EventItem