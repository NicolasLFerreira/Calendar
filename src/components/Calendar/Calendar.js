import React, {Component} from "react"

import Year from "./Year"

const months = [1,-2,1,0,1,0,1,1,0,1,0,1]

class Calendar extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){

        return(
            <div className="col-7">
                <Year monthNum={11}/>
            </div>
        )
    }
}

export default Calendar