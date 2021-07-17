import React, {Component} from "react"

class MonthPagination extends Component{
    constructor(props){
        super(props)
    }

    pageItem = (num) => {
        return(
            <li class="page-item"><button class="page-link" href="#" onClick={() => this.props.changeMonth(num)}>Month: {num}</button></li>
        )
    }

    render(){
        var pageItems = []
        
        for(let index = 1; index <= 12; index++){
            pageItems.push(this.pageItem(index))
        }

        return(
            <div className="container">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        {pageItems}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MonthPagination