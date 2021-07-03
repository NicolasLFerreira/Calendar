import React, {Component} from "react"
import Day from "./Day"

class Month extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.id,
            size: 30 + this.props.size
        }
    }

    manageLocalStorage = () => {
        localStorage.setItem(this.state.id, "soon I will have some json here")
    }

    render(){
        var month = []
        var week = []
        var days = []

        // The empty squares 
        for(var fixDay = 0; fixDay < 35 - this.state.size; fixDay++){
            days.push(<Day day=" " content=""/>)
        }

        // Creates the days
        for(var currentDay = this.state.size; currentDay > 0; currentDay--){
            days.push(<Day day={currentDay} content="Content"/>)
        }

        // Creates the weeks
        for(var weekIndex = 0; weekIndex <= 4; weekIndex++){
            for(var weekDay = 1; weekDay <= 7; weekDay++){
                week.push(days.pop())
            }
            month.push(<div className="row">{week}</div>)
            week = []
        }

        this.manageLocalStorage();

        return(
            <div className="container">
                <div className="row">
                    <div className="box text display-1">
                        {this.state.id}
                    </div>
                </div>
                {month}
            </div>
        )
    }
}

export default Month