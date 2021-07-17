import React from "react"
import EventModal from "./EventModal"
import EventListing from "../Event/EventListing"

function Day(props){
    return(
        <div className="col day-box border text">
            <div className="row display-6">{props.month != null ? <EventModal id={props.id} day={props.day} month={props.month}/> : null}</div>
            <ul className="row event-box overflow-auto">{<EventListing id={props.id} delete={false}/>}</ul>
        </div>
    )
}

export default Day