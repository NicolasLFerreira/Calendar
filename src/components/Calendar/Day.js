import React, {Component} from "react"

class Day extends Component {
    constructor(props){
        super(props)

        this.state = {
            day: this.props.day
        }

    }

    render(){
        return(
            <div className="col box text">
                <div className="row">{this.state.day}</div>
                <div className="row">Content</div>
            </div>
        )
    }
}

export default Day