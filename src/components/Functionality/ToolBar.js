import React, {Component} from "react"
import Button from "./Button"
import dataManagement from "../Event/DataManagement"
import EventCreationModal from "../Event/EventCreationModal"

const management = new dataManagement()

class ToolBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            selectedDate: null,
            selectedDay: null,
            selectedMonth: null,
            newId: null,
            content: null
        }
    }

    // Processes the date input
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
            newId: JSON.parse(localStorage.getItem("properties")).id[monthInput - 1] + dayInput
          }
        })
    }

    // Processes the text input
    contentInput = (dom) => {
        this.setState(() => {
            return{
                content: document.getElementById(dom).value
            }
        })
    }

    // Creates a new event with the chosen content and for the chosen date and updates the calendar
    createEvent = () => {
        if (this.state.content != null && this.state.selectedDate != null){
            management.addEvent(this.state.newId, this.state.content)

            this.props.calendarRefresh()
            this.setState(() => {
                return{
                    newId: null,
                    content: null,
                    dateInput: null
                }
            })
        }
    }

    // Clears an event based on the chose date and updates the calendar
    clearEvent = () => {
        localStorage.removeItem(this.state.newId)
        this.props.calendarRefresh()
    }

    // Clear all the events and updates the calendar
    clearEvents = () => {
        localStorage.clear()
        this.props.calendarRefresh()
    }

    render(){
        return(
            <div>
                <div className="mb-3">
                    <Button text="Home (WIP)" onClickAction={() => 0}/>
                    <Button text="Settings (WIP)" onClickAction={() => 0}/>
                    <Button text="Help (WIP)" onClickAction={() => 0}/>
                </div>
                <div className="btn-group-vertical col-md-12 mb-3" role="group" aria-label="Basic button group">
                    <EventCreationModal object={undefined} refresh={this.props.calendarRefresh} pickDate={() => this.dateInput()}/>
                    <button type="button" className="btn btn-danger" onClick={this.clearEvents}>Delete All</button>
                </div>
                <div>
                    <div className="box border text">
                        (WIP) upcoming events will here
                    </div>
                </div>
            </div>
        )
    }
}

export default ToolBar