import React from "react"
import Modal from "react-modal"
import DataManagement from "./DataManagement"

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

function ModalBase(props) {
  const [createModalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false)
  }

  function createEvent(){
    management.addEvent(props.object.id, document.getElementById("content-input").value)
    props.refresh()
    closeModal()
  }

  var management = new DataManagement()

  return (
    <div>
      <button type="button" class="btn btn-success" onClick={openModal}>New Event</button>
      <Modal
        isOpen={createModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
            <div className="display-3 mb-4">{props.object.day}, {props.object.month}</div>
            <div class="form-floating mb-3">
                <input type="" class="form-control" id="content-input" placeholder="Do groceries!"/>
                <label for="floatingInput">Event</label>
            </div>
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <button type="button" class="btn btn-success" onClick={createEvent}>Save</button>
                <button type="button" class="btn btn-warning" onClick={closeModal}>Close</button>
            </div>
        </div>
        
      </Modal>
    </div>
  )
}

export default ModalBase