import React, { Component } from "react"
import Day from "./Day"
import DataManagement from "../Event/DataManagement"

const dataManagement = new DataManagement()

class Month extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: dataManagement.getProperties("name", this.props.index),
            size: 30 + dataManagement.getProperties("size", this.props.index),
            id: dataManagement.getProperties("id", this.props.index)
        }
    }

    render() {
        var month = []
        var week = []
        var days = []

        var dayId
        var content
        var extraStyle

        // The empty squares 
        days.push(<Day extraStyle={" round-bottom-right"} day="" content="" id={-1} />)
        for (let fixDay = 1; fixDay < 35 - this.state.size; fixDay++) {
            if (fixDay == 6) extraStyle = " border-start round-bottom-left"
            days.push(<Day extraStyle={extraStyle} day="" content="" id={-1} />)
        }

        extraStyle = undefined

        // Creates the days
        for (let currentDay = this.state.size; currentDay > 0; currentDay--) {
            content = localStorage.getItem(currentDay)
            dayId = currentDay < 10 ? this.state.id + "0" + String(currentDay) : this.state.id + String(currentDay)
            if ((currentDay - 1) % 7 == 0) extraStyle = " border-start"
            if (currentDay == 29) { extraStyle += " round-bottom-left" }
            days.push(<Day month={this.state.name} day={currentDay} content={content} id={dayId} extraStyle={extraStyle} refresh={this.props.refresh} />)
            dayId = undefined
            extraStyle = undefined
        }

        // Creates the weeks
        for (let weekIndex = 0; weekIndex <= 4; weekIndex++) {
            for (let weekDay = 1; weekDay <= 7; weekDay++) {
                week.push(<div className="flex-fill bd-highlight w-100">{days.pop()}</div>)
            }
            month.push(<div className="d-flex flex-row bd-highlight">{week}</div>)
            week = []
        }

        return (
            <div>
                <div className="">
                    <div className="text-center month-bg border border-dark border-2 rounded-top display-3 pb-3">
                        {this.state.name}
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight">
                    {month}
                </div>
            </div>
        )
    }
}

export default Month