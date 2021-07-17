import React, {Component} from "react"
import Button from "./Button"
import dataManagement from "../Event/DataManagement"

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
            newId: this.props.ids[monthInput - 1] + dayInput
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
            <div className="row">
                <div className="row">
                    <Button text="Home (WIP)" onClickAction={() => 0}/>
                    <Button text="Settings (WIP)" onClickAction={() => 0}/>
                    <Button text="Help (WIP)" onClickAction={() => 0}/>
                </div>
                <div className="row">
                    <br></br>
                </div>
                <div className="row">
                    <input className="form-control" id="input-content" placeholder="Content..." onInput={() => this.contentInput("input-content")}></input>
                    <input className="form-control" id="input-date" type="date" onInput={() => this.dateInput("input-date")}></input>
                </div>
                <div className="row">
                    <br></br>
                </div>
                <div className="row">
                    <Button text="Create Event" onClickAction={() => this.createEvent()}/>
                    <Button text="Delete Event" onClickAction={() => this.clearEvent()}/>
                    <Button text="Delete All" onClickAction={() => this.clearEvents()}/>
                </div>
                <div className="row">
                    <br></br>
                </div>
                <div className="row">
                    <Button text="Template (WIP)" onClickAction={() => 0}/>
                </div>
                <div className="row">
                    <Button text="Notification (WIP)" onClickAction={() => 0}/>
                </div>
                <div className="row"><br></br></div>
                <div className="row">
                    <div className="box border text">
                        (WIP) upcoming events will here
                    </div>
                </div>
            </div>
        )
    }
}

export default ToolBar