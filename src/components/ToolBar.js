import React, {Component} from "react"
import Button from "./Button"
import logo from "../images/logo.png"

class ToolBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            selectedDate: undefined,
            selectedDay: undefined,
            selectedMonth: undefined,
            newId: undefined,
            contentInput: undefined
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
                contentInput: document.getElementById(dom).value
            }
        })
    }

    // Creates a new event with the chosen content and for the chosen date and updates the calendar
    createEvent = () => {
        var id = this.props.ids[this.state.selectedMonth - 1] + this.state.selectedDay
        localStorage.setItem(id, this.state.contentInput)
        this.props.calendarRefresh()
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
                    <Button text="Home" onClickAction={() => 0}/>
                    <Button text="Settings" onClickAction={() => 0}/>
                    <Button text="Help" onClickAction={() => 0}/>
                </div>
                <div className="row">       
                    <input className="form-control" id="input-content" placeholder="Content..." onInput={() => this.contentInput("input-content")}></input>
                    <input className="form-control" id="input-date" type="date" onInput={() => this.dateInput("input-date")}></input>
                    <Button text="Create Event" onClickAction={() => this.createEvent()}/>
                </div>
                <div className="row">
                    <Button text="Clear Event" onClickAction={() => this.clearEvent()}/>
                    <Button text="Clear All" onClickAction={() => this.clearEvents()}/>
                </div>
                <div className="row">
                    <Button text="Template" onClickAction={() => 0}/>
                    <Button text="Notification" onClickAction={() => 0}/>
                </div>
            </div>
        )
    }
}

export default ToolBar