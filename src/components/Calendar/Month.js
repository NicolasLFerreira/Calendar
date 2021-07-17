import React, {Component} from "react"
import Day from "./Day"

class Month extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: this.props.name,
            id: this.props.id,
            size: 30 + this.props.size
        }
    }

    render(){
        var month = []
        var week = []
        var days = []

        var dayId
        var content
        
        // The empty squares 
        for(let fixDay = 0; fixDay < 35 - this.state.size; fixDay++){
            days.push(<Day day="" content="" id={-1}/>)
        }

        // Creates the days
        for(let currentDay = this.state.size; currentDay > 0; currentDay--){
            content = localStorage.getItem(currentDay)
            dayId = currentDay < 10 ? this.state.id + "0" + String(currentDay) : this.state.id + String(currentDay)
            days.push(<Day month={this.state.name} day={currentDay} content={content} id={dayId} refresh={this.props.refresh}/>)
            dayId = undefined
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
            <div className="container row">
                <div className="row">
                    <div className="box border text display-1">
                        {this.state.name}
                    </div>
                </div>
                {month}
            </div>
        )
    }
}

export default Month