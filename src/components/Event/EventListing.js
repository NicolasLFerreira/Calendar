import React from "react"
import DataManagement from "./DataManagement"

const management = new DataManagement()
function deleteItem(refresh, data){
    management.deleteEvent(data.id, data.index)
    refresh()
}

function EventItem(props){
    return(
        <li className={"list-group-item " + (props.insideModal ? null : "list-group-item-dark")}>
            {props.text}
            {props.insideModal ? 
                <button type="button" className="btn btn-outline-success float-end"
                    onClick={() => deleteItem(props.refresh, props)}>
                    ✓
                </button> : 
            null}
        </li>
    )
}

function EventListing(props){

    const data = management.getData(props.id) === null ? [] :  new DataManagement().getData(props.id).events
    var component = []

    if (data.length === 0 && props.insideModal) {
        component = <div>There are no events for today</div>
    }
    else{
        for (let index = 0; index < data.length; index++) {
            component.push(<EventItem insideModal={props.insideModal} text={data[index]} index={index} id={props.id} refresh={props.refresh}/>)
        }
    }

    return(
        <ul className={props.cap + " overflow-auto list-group"}>
            {component}
        </ul>
    )
}

export default EventListing