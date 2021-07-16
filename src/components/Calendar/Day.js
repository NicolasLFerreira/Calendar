import React from "react"
import DayData from "./DayData"
import EventModal from "./EventModal"


function Day(props){
    var component = []
    
    if (localStorage.getItem(props.id) != null){
        var data = JSON.parse(localStorage.getItem(props.id))

        for (var index = 0; index < data.events.length; index++)
        {
            component.push(<li className="day-item">{data.events[index]}</li>)
        }
    }

    return(
        <div className="col day-box border text">
            <div className="row display-6">{props.month != null ? <EventModal id={props.id} day={props.day} month={props.month}/> : null}</div>
            <ul className="row event-box overflow-auto">{component}</ul>
        </div>
    )
}

export default Day