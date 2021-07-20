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
    if (props.object === undefined){
      if (inputManagement.isEmpty("input-date") || inputManagement.isEmpty("input-content")) return
      dataManagement.addEvent(inputManagement.dateProcessor("input-date").id, document.getElementById("input-content").value)
    }
    else{
      if (inputManagement.isEmpty("input-content")) return
      dataManagement.addEvent(props.object.id, document.getElementById("input-content").value)
    }        
    props.refresh()
    closeModal()
  }

  return (
    <div>
      <button type="button" className="btn btn-success mt-3" onClick={openModal}>New Event</button>
      <Modal
        isOpen={createModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Event Creation Modal"
      >
        <button type="button" className="btn-close float-end" aria-label="Close" onClick={closeModal}></button>
        <div>
          <div className="display-3">Create a new event</div>
          <div>Fill everything before creating it</div>
          <div className="form-floating mb-3">
              <input id="input-content" type="text" className="form-control" placeholder="Do groceries!"/>
              <label htmlFor="floatingInput">Event</label>
          </div>
          <input id="input-date" type="date" className="form-control mb-3 p-3" placeholder="pick a date" hidden={(props.object !== undefined)}></input>
          <button type="button" className="btn btn-success" onClick={createEvent}>Save</button>
        </div>
      </Modal>
    </div>
  )
}

export default EventCreationModal