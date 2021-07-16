import React from "react"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
}

function EventModal(props) {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00"
  }

  function closeModal() {
    setIsOpen(false)
  }

  function showEvents() {
    var component = []
    if (localStorage.getItem(props.id) != null){
      var data = JSON.parse(localStorage.getItem(props.id))

      for (var index = 0; index < data.events.length; index++){
        component.push(<li>{data.events[index]}</li>)
      }
    }
    return component
  }

  return (
    <div>
      <div class="day-button" onClick={openModal}>{props.day}</div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.day}, {props.month}</h2>
        <div>Event for this day:</div>
        <ol>{showEvents()}</ol>
        <div>Create new event:</div>
        <div>
          <input placeholder="Event name"/>
          <button>Add</button>
          <button>Delete</button>
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
}

export default EventModal