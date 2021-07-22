import React from "react"
import EventListingModal from "../Event/EventListingModal"
import EventListing from "../Event/EventListing"


function Day(props){
    var objectData = {
        "id": props.id,
        "day": props.day,
        "month": props.month
    }

    // Everything inside the individual day box
    return(
        <div className={"col calendar-box border-bottom border-end border-dark border-2 rounded" + props.extraStyle}>
            <div className="row display-6">{props.month != null ? <EventListingModal object={objectData} refresh={props.refresh}/> : null}</div>
            {<EventListing id={props.id} cap={"cap-sm"} insideModal={false}/>}
        </div>
    )
}

export default Day