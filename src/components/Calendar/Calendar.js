import React, {Component} from "react"

import Year from "./Year"

const months = [1,-2,1,0,1,0,1,1,0,1,0,1]

class Calendar extends Component{
    constructor(){
        super()

        this.state = {
            
        }
    }

    render(){

        return(
            <div className="col-7">
                <Year />
            </div>
        )
    }
}

export default Calendar