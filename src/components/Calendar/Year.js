import React, {Component} from "react"
import Month from "./Month"

class Year extends Component{
    constructor(props){
        super(props)

        var month = []
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var ids = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        var size = [1,-2,1,0,1,0,1,1,0,1,0,1]

        // for(var currentMonth = 0; currentMonth <= 11; currentMonth++){
        //     month.push(<Month name={months[currentMonth]} id={ids[currentMonth]} size={size[currentMonth]}/>)
        //     month.push(<div><br></br><br></br><br></br></div>)
        // }

        console.log(this.props.monthNum)
        month.push(<Month name={months[props.monthNum]} id={ids[props.monthNum]} size={size[props.monthNum]} />)
        month.push(<div><br></br><br></br><br></br></div>)

        this.state = {
            months: month,
            toRender: this.props.monthNum
        }
    }

    changeMonth = (index) => {
        this.setState(() => {
            return{
                toRender: index
            }
        })
    }

    render(){
        return(
            this.state.months
        )
    }
}

export default Year