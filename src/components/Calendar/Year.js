import React, {Component} from "react"
import Month from "./Month"

class Year extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    buildMonth(){
        var month = []
        var index = this.props.monthNum - 1
        month.push(<Month key={index} name={this.props.months[index]} id={this.props.ids[index]} size={this.props.size[index]} />)
        return month
    }

    render(){
        return(
            <div className="big-box">
                {this.buildMonth()}
            </div>
        )
    }
}

export default Year