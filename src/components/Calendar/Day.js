import React from "react"
import EventListingModal from "../Event/EventListingModal"
import EventListing from "../Event/EventListing"


function Day(props){
    var objectData = {
        "id": props.id,
        "day": props.day,
        "month": props.month
    }

    return(
        <div className="col day-box border text">
            <div className="row display-6">{props.month != null ? <EventListingModal object={objectData}/> : null}</div>
            <ul class="list-group list-group-numbered">{<EventListing id={props.id} insideModal={false}/>}</ul>
        </div>
    )
}

export default Day