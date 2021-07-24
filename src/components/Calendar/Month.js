import React, {Component} from "react"
import Day from "./Day"
import DataManagement from "../Event/DataManagement"

// this.state = {
//     name: this.props.name,
//     id: this.props.id,
//     size: 30 + this.props.size
// }

const dataManagement = new DataManagement()

class Month extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: dataManagement.getProperties("name", this.props.index),
            size: 30 + dataManagement.getProperties("size", this.props.index),
            id: dataManagement.getProperties("id", this.props.index)
        }
    }

    render(){
        var month = []
        var week = []
        var days = []

        var dayId
        var content
        var extraStyle
        
        // The empty squares 
        days.push(<Day extraStyle={" round-bottom-right"} day="" content="" id={-1}/>)
        for(let fixDay = 1; fixDay < 35 - this.state.size; fixDay++){
            if (fixDay == 6) extraStyle = " border-start round-bottom-left"
            days.push(<Day extraStyle={extraStyle} day="" content="" id={-1}/>)
        }
        
        extraStyle = undefined

        // Creates the days
        for(let currentDay = this.state.size; currentDay > 0; currentDay--){
            content = localStorage.getItem(currentDay)
            dayId = currentDay < 10 ? this.state.id + "0" + String(currentDay) : this.state.id + String(currentDay)
            if ((currentDay - 1) % 7 == 0) extraStyle = " border-start"
            if (currentDay == 29) {extraStyle += " round-bottom-left"}
            days.push(<Day month={this.state.name} day={currentDay} content={content} id={dayId} extraStyle={extraStyle} refresh={this.props.refresh}/>)
            dayId = undefined
            extraStyle = undefined
        }

        // Creates the weeks
        for(let weekIndex = 0; weekIndex <= 4; weekIndex++){
            for(let weekDay = 1; weekDay <= 7; weekDay++){
                week.push(days.pop())
            }
            month.push(<div className="row">{week}</div>)
            week = []
        }

        return(
            <div className="row">
                <div className="row">
                    <div className="text-center calendar-box month-bg border border-dark border-2 rounded-top display-2">
                        {this.state.name}
                    </div>
                </div>
                {month}
            </div>
        )
    }
}

export default Month