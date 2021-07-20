import React, {Component} from "react"
import DataManagement from "./DataManagement"
import EventListingModal from "./EventListingModal"

const dataManagement = new DataManagement()
const today = new Date()

class UpcomingEvents extends Component{
    constructor(props){
        super(props)

        this.state = {
            day: today.getDate(),
            month: today.getMonth(),
            id: dataManagement.getProperties("id", today.getMonth()) + today.getDate()
        }
    }

    localStorageItems(){
        var components = []
        var objectData = {}
        var events = JSON.parse(localStorage.getItem("events"))
        var id = dataManagement.getProperties("id", 1)
        
        // Runs through the local storage "events"
        for (let month = 0; month < 12; month++) {
            
            // The id of the current month
            id = dataManagement.getProperties("id", month)

            if (events[id].length == 0) continue
            
            // If the month is not empty, adds the days
            for (let index = 0; index <= events[id].length - 1; index++) {
                objectData = {
                    "id": dataManagement.getProperties("id", month) + events[id][index],
                    "day": parseInt(events[id][index]),
                    "month": dataManagement.getProperties("name", month),
                    "title": dataManagement.getProperties("name", month) + ", " + events[id][index]
                }
                components.push(<EventListingModal object={objectData} refresh={this.props.refresh} fromUpcoming={0}/>)
            }
        }
        return components
    }

    render(){
        return(
            <div className="overflow-auto text-break text">
                {this.localStorageItems()}
            </div>
        )
    }
}

export default UpcomingEvents