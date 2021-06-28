import React, {Component} from "react"

class WeekDay extends Comoponent {
    constructor(props){
        super(props)

        this.state = {
            day: this.props.day
        }
    }

    render(){
        return(
            <div className="col box">
                <div className="row">{this.state.day}</div>
                <div className="row">Content</div>
            </div>
        )
    }
}

export default WeekDay