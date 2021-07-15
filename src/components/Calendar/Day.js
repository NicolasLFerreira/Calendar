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
        return(
            <div className="col box border text">
                <div className="row display-6"><p>{this.state.day}</p></div>
                <div className="row">{localStorage.getItem(this.state.id)}</div>
            </div>
        )
    }
}

export default Day