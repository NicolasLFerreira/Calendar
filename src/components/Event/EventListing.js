import React from "react"
import DataManagement from "./DataManagement"
import EventItem from "./EventItem"

function EventListing(props){
    const data = new DataManagement().getEvent(props.id) == null ? [] :  new DataManagement().getEvent(props.id).events
    var component = []
    for (let index = 0; index < data.length; index++) {
        component.push(<EventItem delete={props.delete} text={data[index]}/>)
    }

    return(
        <div>
            {component}
        </div>
    )
}

export default EventListing