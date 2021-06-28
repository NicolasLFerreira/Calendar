import React, {Component} from "react"
import WeekDay from "./WeekDay"

class Week extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentWeek: this.props.item.week
        }
    }

    assembleWeek = () => {
        var week = []
        for(var i = 0; i < 7; ){
            week.push(<WeekDay day={i*this.state.currentWeek}/>)
        }
    }

    render(){

        return(
            <div className="row">
                {this.assembleWeek()}
            </div>
        )
    }
}

export default Week