import React from "react"
import Modal from "react-modal"
import EventListing from "../Event/EventListing"

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
        <ol>{<EventListing id={props.id} delete={true}/>}</ol>
        <div>Create new event:</div>
        <div>
          <input placeholder="Event content"/>
          <button>Add</button>
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
}

export default EventModal