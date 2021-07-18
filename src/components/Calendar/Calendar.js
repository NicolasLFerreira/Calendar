import React, {Component} from "react"
import Year from "./Year"

class Calendar extends Component{
    constructor(props){
        super(props)

        this.state = {
            showingMonth: 1
        }
    }

    // Changes the current month that will be shown
    changeMonth = (index) => {
        this.setState(() => {
            return{
                showingMonth: index
            }
        })
    }

    // The pagination bar for changing the showing month
    monthPagination(){
        var pageItems = []
        for(let index = 1; index <= 12; index++){
            pageItems.push(<button type="button" className="btn btn-primary" onClick={() => this.changeMonth(index)}>Month: {index}</button>)
            
        }

        return(
            <div className="btn-group" role="group" aria-label="Basic button group">
                {pageItems}
            </div>
        )
    }

    // Returns the pagination bar and the showing month of the current year
    render(){
        return(
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-center p-2">
                        {this.monthPagination()}
                    </div>
                    <Year key={2021} monthNum={this.state.showingMonth} refresh={this.props.refresh}/>
                </div>
            </div>
        )
    }
}

export default Calendar