import React, {Component} from "react"
import Month from "./Month"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const ids = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const size = [1,-2,1,0,1,0,1,1,0,1,0,1]

class Year extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    buildMonth(){
        var month = []
        var index = this.props.monthNum - 1
        month.push(<Month key={index} name={months[index]} id={ids[index]} size={size[index]} />)
        month.push(<div><br></br><br></br><br></br></div>)
        return month
    }

    render(){
        var month = this.buildMonth()
        return(
            month
        )
    }
}

export default Year