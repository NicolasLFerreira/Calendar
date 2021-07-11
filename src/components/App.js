import { computeHeadingLevel } from "@testing-library/react"
import React, {Component} from "react"
import "../css/App.css"
import Calendar from "./Calendar/Calendar"
import Year from "./Calendar/Year"
import Month from "./Calendar/Month"
import ChangeMonth from "./ChangeMonth"
import logo from "../images/logo.png"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const ids = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const size = [1,-2,1,0,1,0,1,1,0,1,0,1]

class App extends Component{
  constructor(){
    super()

    this.state = {
      dateInput: "01",
      dayInput: "01",
      monthInput: "01",
      contentInput: "Event"
    }
  } 
  
  // setData(){
  //   localStorage.clear()
  //   localStorage.setItem("jul18", "Nicolas' birthday!")
  //   localStorage.setItem("dec25", "Christmas!")
  //   localStorage.setItem("jan01", "New year!")
  //   localStorage.setItem("jan31", "Mum's birthday!")
  //   localStorage.setItem("nov17", "Dad's birthday!")
  //   localStorage.setItem("jul16", "When this assessment is due")
  //}

  dateInput = (dom) => {
    var input = document.getElementById(dom).value
    var size = input.length
    var day = "" + input[size - 2] + input[size - 1]
    var month = "" + input[size - 5] + input[size - 4]

    this.setState(() => {
      return{
        dateInput: input,
        dayInput: day,
        monthInput: month
      }
    })
  }

  contentInput = (dom) => {
    this.setState(() => {
      return{
        contentInput: document.getElementById(dom).value
      }
    })
  }

  createEvent = () => {
    var id = ids[this.state.monthInput - 1] + this.state.dayInput
    localStorage.setItem(id, this.state.contentInput)

    document.getElementById("input-content").value = ""
    document.getElementById("input-date").value = ""

    this.forceUpdate()
  }

  clearEvents = () => {
    localStorage.clear()
    this.forceUpdate()
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <div className="row">
            <img src={logo}/>
          </div>
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
            
            <input id="input-content" placeholder="Content..." onInput={() => this.contentInput("input-content")}></input>
            <input id="input-date" type="date" onInput={() => this.dateInput("input-date")}></input>
            <button className="" onClick={() => this.createEvent()}>Create Event</button>
            <button className="" onClick={() => this.clearEvents()}>Clear Events</button>
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
        {<Calendar months={months} ids={ids} size={size}/>}
      </div>
    );
  }
}

export default App