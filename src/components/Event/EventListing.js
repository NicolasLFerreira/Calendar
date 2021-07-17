import React from "react"
import DataManagement from "./DataManagement"

function EventItem(props){
    return(
        <div>
            <li class="list-group-item">
                {props.text}
                {props.insideModal ? 
                <button type="button" class="position-absolute bottom-0 end-0 btn btn-outline-danger">
                    x
                </button> : null}
            </li>
        </div>
    )
}

function EventListing(props){
    const data = new DataManagement().getEvent(props.id) == null ? [] :  new DataManagement().getEvent(props.id).events
    var component = []

    if (data.length == 0 && props.insideModal) {
        component = <div>There are no events for today</div>
    }
    else{
        for (let index = 0; index < data.length; index++) {
            component.push(<EventItem insideModal={props.insideModal} text={data[index]}/>)
        }
    }

    return(
        <div>
            {component}
        </div>
    )
}

export default EventListing