import React from "react"
import EventListingModal from "../Event/EventListingModal"
import EventListing from "../Event/EventListing"
import DataManagement from "../Event/DataManagement"

var dataManagement = new DataManagement()

function Day(props) {
    var objectData = {
        "id": props.id,
        "day": props.day,
        "month": dataManagement.getPropertyIndex("name", props.month)
    }

    // Everything inside the individual day box
    return (
        <div className={"w-100 ps-2 day-bg border-2 border-dark border-bottom border-end " + props.extraStyle}>
            <div className="display-6">{props.month != null ? <EventListingModal object={objectData} refresh={props.refresh} /> : '-'}</div>
            {<EventListing id={props.id} cap={"cap-sm mb-1"} insideModal={false}/>}
        </div>
    )
}

export default Day