import React, {Component} from "react"
import Year from "./Year"
import ChangeMonth from "../ChangeMonth"

const months = [1,-2,1,0,1,0,1,1,0,1,0,1]

class Calendar extends Component{
    constructor(props){
        super(props)

        this.state = {
            showingMonth: 1
        }
    }

    monthToShow = (index) => {
        console.log("Month to show index: " + index)
        this.setState(() => {
            return{
                showingMonth: index
            }
        })
    }

    render(){
        console.log("Showing month state: " + this.state.showingMonth)
        return(
            <div className="col-7"> 
                <ChangeMonth changeMonth={(index) => this.monthToShow(index)}/>
                <Year monthNum={this.state.showingMonth}/>
            </div>
        )
    }
}

export default Calendar