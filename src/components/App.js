import { computeHeadingLevel } from "@testing-library/react"
import React, { Component } from "react"
import Calendar from "./Calendar/Calendar"
import ToolBar from "./ToolBar"
import DataManagement from "./Event/DataManagement"

import logo from "../images/logo.png"
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

  render() {
    sessionStorage.setItem("properties", JSON.stringify(object))
    return (
      <div className="row left-padding">
        
        <div className="col-2">
          <div className="row">
            <img src={logo} />
          </div>
          {<ToolBar key={0} calendarRefresh={() => this.calendarRefresh()} />}
        </div>
        <div className="col">
          {<Calendar key={1} refresh={() => this.calendarRefresh()}/>}
        </div>
      </div>
    );
  }
}

export default App