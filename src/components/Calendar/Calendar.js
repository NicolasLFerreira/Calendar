import React, {Component} from "react"
import Year from "./Year"
import ChangeMonth from "../ChangeMonth"

class Calendar extends Component{
    constructor(props){
        super(props)

        this.state = {
            showingMonth: 1
        }
    }

    ChangeMonth = (index) => {
        this.setState(() => {
            return{
                showingMonth: index
            }
        })
    }

    render(){
        return(
            <div className="col-7">
                <ChangeMonth changeMonth={(index) => this.ChangeMonth(index)}/>
                <Year yearNum={2021} monthNum={this.state.showingMonth} months={this.props.months} ids={this.props.ids} size={this.props.size}/>
            </div>
        )
    }
}

export default Calendar