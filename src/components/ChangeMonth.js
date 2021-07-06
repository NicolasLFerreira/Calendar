import React, {Component} from "react"

class ChangeMonth extends Component{
    constructor(props){
        super(props)
    }

    pageItem = (num) => {
        return(
            <li class="page-item"><button class="page-link" href="#" onClick={() => this.props.changeMonth(num)}>{num}</button></li>
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
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    {pageItems}
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                    </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default ChangeMonth