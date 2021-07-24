import React, { Component } from "react"
import Calendar from "./Calendar/Calendar"
import DataManagement from "./Event/DataManagement"
import EventCreationModal from "./Event/EventCreationModal"
import UpcomingEvents from "./Event/UpcomingEvents"
import Help from "./Help"

import logo from "../images/logo-black.png"
import "../css/App.css"

var dataManagement = new DataManagement()
var object = {
  "name": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "id":  ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  "size": [1, -2, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
}

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  calendarRefresh = () => {
    this.forceUpdate()
  }

  clearEvents = () => {
    if (window.confirm("Are you REALLY sure about that? I'm telling you, there's simply no coming back for your dear grocery store lists...")){
      localStorage.clear()
      dataManagement = new DataManagement()
      this.calendarRefresh()
    }
  }

  render() {
    sessionStorage.setItem("properties", JSON.stringify(object))

    var today = 
    <div className="mb-3">
      Today is {dataManagement.numberWithPrefix("" + new Date().getUTCDate())} {' '}
      of {dataManagement.getProperties("name", new Date().getUTCMonth())} {' '}
      of {new Date().getUTCFullYear()}
    </div>

    return (
      <div className="row left-padding text">
        {/* The left bar of the website */}
        <div className="col-2">
          <div className="row">
            <img src={logo} />
          </div>
          <div>
            {today}
            <EventCreationModal buttonClass={"w-100"} object={undefined} refresh={this.calendarRefresh} pickDate={() => this.dateInput()}/>
            <Help clearEvents={this.clearEvents}/>
            <div className="fw-bold mt-3">Days with upcoming events:</div>
            <div className="showing-events-box day-bg overflow-auto border border-dark border-2 rounded">
                <UpcomingEvents refresh={this.calendarRefresh}/>
            </div>
          </div>
        </div>
        {/* The calendar */}
        <div className="col">
          {<Calendar key={1} refresh={() => this.calendarRefresh()}/>}
        </div>
      </div>
    );
  }
}

export default App