import React, {Component} from "react"

class Day extends Component {
    constructor(props){
        super(props)

        this.state = {
            day: this.props.day,
            id: this.props.id
        }
    }

    render(){
        var content = localStorage.getItem(this.state.id)

        return(
            <div className="col box text">
                <div className="row display-6"><p>{this.state.day}</p></div>
                <div className="row">{content}</div>
            </div>
        )
    }
}

export default Day