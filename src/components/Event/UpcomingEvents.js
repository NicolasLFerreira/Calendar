import React, { Component } from "react"
import DataManagement from "./DataManagement"
import EventListingModal from "./EventListingModal"

const dataManagement = new DataManagement()
const today = new Date()

class UpcomingEvents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            day: today.getDate(),
            month: today.getMonth(),
            id: dataManagement.getProperties("id", today.getMonth()) + today.getDate()
        }
    }

    upcomingEventsDays() {
        var finalComponent = []
        var objectData = {}
        var events = JSON.parse(localStorage.getItem("events"))
        console.log(events)
        var id

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
                    "month": month
                }
                finalComponent.push(<EventListingModal object={objectData} refresh={this.props.refresh} fromUpcoming={0} />)
            }
        }
        return finalComponent
    }

    // day-bg overflow-auto border border-dark border-2 rounded h-100
    render() {
        return (
            <div className="m-1 p-1 d-inline-block day-bg overflow-auto border border-dark border-2 rounded h-75">
                {this.upcomingEventsDays()}
            </div>
        )
    }
}

export default UpcomingEvents