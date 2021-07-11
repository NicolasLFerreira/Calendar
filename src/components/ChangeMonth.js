import React, {Component} from "react"

class ChangeMonth extends Component{
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
        
        for(var index = 1; index <= 12; index++){
            pageItems.push(this.pageItem(index))
        }

        return(
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    {pageItems}
                </ul>
            </nav>
        )
    }
}

export default ChangeMonth