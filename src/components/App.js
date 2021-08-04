import React, { Component } from "react"
import Calendar from "./Calendar/Calendar"
import DataManagement from "./Event/DataManagement"
import EventCreationModal from "./Event/EventCreationModal"
import UpcomingEvents from "./Event/UpcomingEvents"
import Help from "./Help"

import logo from "../images/logo-black.png"
import "../css/App.css"

var dataManagement = new DataManagement()

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
		if (window.confirm("Are you REALLY sure about that? I'm telling you, there's simply no coming back for your dear grocery store lists...")) {
			localStorage.clear()
			dataManagement = new DataManagement()
			this.calendarRefresh()
		}
	}

	render() {
		var today =
			<div className="mb-3">
				Today is {dataManagement.numberWithPrefix("" + new Date().getDate())} {' '}
				of {dataManagement.getProperties("name", new Date().getMonth())} {' '}
				of {new Date().getFullYear()}
			</div>

		// for (let i = 0; i < 31; i++) dataManagement.addEvent("jun" + (i < 10 ? "0" + i : i), "abc")
		
		return (
			<div className="row left-padding text main-height">
				{/* The left bar of the website */}
				<div className="col-2 h-100">
					<div className="row">
						<img src={logo} />
					</div>
					{today}
					<EventCreationModal buttonClass={"w-100"} object={undefined} refresh={this.calendarRefresh} pickDate={() => this.dateInput()} />
					<Help clearEvents={this.clearEvents} />
					<div className="fw-bold mt-3">Days with upcoming events:</div>
					<UpcomingEvents refresh={this.calendarRefresh} />
				</div>
				{/* The calendar */}
				<div className="col h-100">
					{<Calendar key={1} refresh={() => this.calendarRefresh()} />}
				</div>
			</div>
		);
	}
}

export default App