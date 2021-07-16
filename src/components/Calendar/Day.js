import React, {Component} from "react"
import DayData from "./DayData"

class Day extends Component {
    constructor(props){
        super(props)

        this.state = {
            day: this.props.day,
            id: this.props.id
        }
    }

    render(){
        var component = []
        if (localStorage.getItem(this.state.id) != null){
            var item = JSON.parse(localStorage.getItem(this.state.id))
            var size = item.events.length < 5 ? item.events.length : 3

            for (var index = 0; index < size; index++)
            {
                component.push(<DayData content={item.events[index]} index={index}/>)
            }

            if (item.events.length > 4) component.push(<DayData content="..."/>)
        }

        return(
            <div className="col day-box border text">
                <div className="row display-6"><p>{this.state.day}</p></div>
                <div className="row event-text">{component}</div>
            </div>
        )
    }
}

export default Day