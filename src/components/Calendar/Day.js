import React, {Component} from "react"

class Day extends Component {
    constructor(props){
        super(props)

        this.state = {
            day: this.props.day,
            content: this.props.content
        }
    }

    render(){
        return(
            <div className="col box text">
                <div className="row display-6"><p>{this.state.day}</p></div>
                <div className="row">{this.state.content}</div>
            </div>
        )
    }
}

export default Day