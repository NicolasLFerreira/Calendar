import { computeHeadingLevel } from "@testing-library/react"
import React, {Component} from "react"
import "../css/App.css"
import Calendar from "./Calendar/Calendar"
import ToolBar from "./ToolBar"
import Year from "./Calendar/Year"
import Month from "./Calendar/Month"
import ChangeMonth from "./ChangeMonth"
import Button from "./Button"
import logo from "../images/logo.png"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const ids = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const size = [1,-2,1,0,1,0,1,1,0,1,0,1]

class App extends Component{
  constructor(){
    super()

    this.state = {
      selectedDate: undefined,
      selectedDay: undefined,
      selectedMonth: undefined,
      newId: undefined,
      contentInput: undefined
    }
  }

  dateInput = (dom) => {
    var input = document.getElementById(dom).value
    var size = input.length
    var dayInput = "" + input[size - 2] + input[size - 1]
    var monthInput = "" + input[size - 5] + input[size - 4]

    this.setState(() => {
      return{
        selectedDate: input,
        selectedDay: dayInput,
        selectedMonth: monthInput,
        newId: ids[monthInput - 1] + dayInput
      }
    })
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