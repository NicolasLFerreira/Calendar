import React, {Component} from "react"
import Day from "./Day"

class Month extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.monthId,
            name: this.props.monthName,
            size: 30 + this.props.monthSize
        }
    }

    render(){
        var month = []
        var week = []
        var days = []

        for(var i = this.state.size; i > 0; i--){
        days.push(<Day day={i}/>)
        }

        for(var j = 0; j < 5; j++){
            for(var i = 1; i < 8; i++){
                week.push(days.pop())
                if (j == 4 && i > this.state.size - 35){
                week.push(<div className="col box text"> </div>)
                }
            }
            month.push(<div className="row">{week}</div>)
            week = []
        }
    
        return(
            month
        )
    }
}

export default Month