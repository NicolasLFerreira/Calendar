import { computeHeadingLevel } from "@testing-library/react"
import React, {Component} from "react"

class ToolBar extends Component{
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <div className="col-3">
                <p>this will make the app change</p>
            </div>
        )
    }
}

export default ToolBar