import React, {Component} from "react"
import DataManagement from "./Event/DataManagement"
import EventCreationModal from "./Event/EventCreationModal"
import UpcomingEvents from "./Event/UpcomingEvents"

class ToolBar extends Component{
    constructor(props){
        super(props)

    }

    // Clear all the events and updates the calendar
    clearEvents = () => {
        localStorage.clear()
        var management = new DataManagement()
        this.props.calendarRefresh()
    }

    render(){
        return(
            <div>
                <div role="group" className="mb-3 btn-group min-vw-25">
                    <button type="button" className="btn btn-primary">Home</button>
                    <button type="button" className="btn btn-primary">Settings</button>
                    <button type="button" className="btn btn-primary">Help</button>
                </div>
                <div className="btn-group-vertical d-grid gap-2 mb-3" role="group" aria-label="Basic button group">
                    <EventCreationModal object={undefined} refresh={this.props.calendarRefresh} pickDate={() => this.dateInput()}/>
                    <button type="button" className="btn btn-danger" onClick={this.clearEvents}>Delete All</button>
                </div>
                <div className="overflow border text">
                    <UpcomingEvents/>
                </div>
            </div>
        )
    }
}

export default ToolBar