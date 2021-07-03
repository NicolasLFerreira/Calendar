import { computeHeadingLevel } from "@testing-library/react"
import React, {Component} from "react"
import "../css/App.css"
import Month from "./Calendar/Month"

class App extends Component{
  constructor(){
    super()

    this.state = {

    }
  } 

  render() {

    var month = []
    month.push(<Month id="January" size={1}/>)
    month.push(<div><br></br><br></br><br></br></div>)
    month.push(<Month id="February" size={-2}/>)

    return (
      <div className="row">
        <div className="col-3"> 
          <div className="row">
            <div>
              <button>Home</button>
              <button>Settings</button>
              <button>Help</button>
            </div>
          </div>
            <br></br><br></br><br></br><br></br>
          <div className="row">
            <button>Template</button>
            <button>Notification</button>
          </div>
          <div className="row">
            <p className="text">Upcoming:</p>
            <div className="box text">
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Event name: 32/13/2022</a></li>
                <li><a class="dropdown-item" href="#">Meeting name: 29/02/2024</a></li>
                <li><a class="dropdown-item" href="#">Birthday: 18/07/2021</a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          {month}
        </div>
      </div>
    );
  }
}

export default App;
