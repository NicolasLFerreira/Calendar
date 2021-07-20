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
    localStorage.clear()
    dataManagement = new DataManagement()
    this.calendarRefresh()
  }

  render() {
    sessionStorage.setItem("properties", JSON.stringify(object))
    return (
      <div className="row left-padding">
        <div className="col-2">
          <div className="row">
            <img src={logo} />
          </div>
          <div className="text">
            <div role="group" className="mb-3 btn-group min-vw-25">
                <button type="button" className="btn btn-primary">Home</button>
                <button type="button" className="btn btn-primary">Settings</button>
                <Help />
            </div>
            <div className="btn-group-vertical gap-2 mb-3" role="group" aria-label="Basic button group">
                <EventCreationModal object={undefined} refresh={this.calendarRefresh} pickDate={() => this.dateInput()}/>
                <button type="button" className="btn btn-danger" onClick={this.clearEvents}>Delete All</button>
            </div>
            <div className="mb-3 mt-3">
                Today is {new Date().getUTCDate()}, {dataManagement.getProperties("name", new Date().getUTCMonth())} of {new Date().getUTCFullYear()}
            </div>
            <div className="overflow border border-dark">
                <div>Days with upcoming events:</div>
                <UpcomingEvents refresh={this.calendarRefresh}/>
            </div>
          </div>
        </div>
        <div className="col">
          {<Calendar key={1} refresh={() => this.calendarRefresh()}/>}
        </div>
      </div>
    );
  }
}

export default App