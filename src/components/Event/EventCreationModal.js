import React from "react"
import Modal from "react-modal"
import DataManagement from "./DataManagement"
import InputManagement  from "./InputManagement"

const customStyles = {
  content: {
    top: "25%",
    left: "25%",
    right: "25%",
    bottom: "auto",
    marginRight: "0%",
    transform: "translate(-0%, -0%)"
  },
}

const dataManagement = new DataManagement()
const inputManagement = new InputManagement()

function EventCreationModal(props) {
  
  
  // Pre made code
  const [createModalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false)
  }
  
  // Custom code

  // IF the modal was called from inside a day, uses the first case. Else, uses the last one.
  function createEvent(){
    if (document.getElementById("input-content").value == "" || document.getElementById("input-date").value == ""){
      alert("Please don't leave neither of the inputs blank.")
      return
    }

    if (props.object !== undefined){  
      dataManagement.addEvent(props.object.id, document.getElementById("input-content").value)
      props.refresh()
      closeModal()
    }
    else{
      dataManagement.addEvent(inputManagement.dateProcessor("input-date").id, document.getElementById("input-content").value)
      props.refresh()
      closeModal()
    }
  }

  // Date title management
  function dateTitle(){
    if (props.object === undefined){
      if (document.getElementById("input-date") !== null){
        
      }
    }
  }

  // The date picker input
  function datePicker() {
    return props.object === undefined ? <input id="input-date" type="date" className="form-control mb-3 p-3" placeholder="pick a date"></input> : null
  }
  

  return (
    <div>
      <button type="button" className="btn btn-success" onClick={openModal}>New Event</button>
      <Modal
        isOpen={createModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button type="button" className="btn btn-danger float-end mb-3" onClick={closeModal}>x</button>
          <div id="create-event-date" className="display-3 mb-4">
            {dateTitle()}
          </div>
          <div className="form-floating mb-3">
              <input id="input-content" type="text" className="form-control" placeholder="Do groceries!"/>
              <label for="floatingInput" className="mt-4">Event</label>
          </div>
          {datePicker()}
          <button type="button" className="btn btn-success" onClick={createEvent}>Save</button>        
      </Modal>
    </div>
  )
}

export default EventCreationModal