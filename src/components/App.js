import { computeHeadingLevel } from "@testing-library/react"
import React, {Component} from "react"
import "../css/App.css"
import Calendar from "./Calendar/Calendar"
import ToolBar from "./Functionality/ToolBar"
import Year from "./Calendar/Year"
import Month from "./Calendar/Month"
import ChangeMonth from "./Functionality/ChangeMonth"
import Button from "./Functionality/Button"
import logo from "../images/logo.png"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const ids = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const size = [1,-2,1,0,1,0,1,1,0,1,0,1]

class App extends Component{
  constructor(){
    super()

    this.state = {
      
    }
  }

  calendarRefresh = () => {
    document.getElementById("input-content").value = ""
    document.getElementById("input-date").value = ""
    this.forceUpdate()
  }

  render() {
    return (
      <div className="row left-padding">
        <div className="col-3">
          <div className="row">
              <img src={logo}/>
          </div>
          {<ToolBar ids={ids} calendarRefresh={() => this.calendarRefresh()}/>}
        </div>
        {<Calendar months={months} ids={ids} size={size}/>}
      </div>
    );
  }
}

export default App