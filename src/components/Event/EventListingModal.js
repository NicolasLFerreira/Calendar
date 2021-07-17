import React, {Component} from "react"
import Modal from "react-modal"
import EventListing from "./EventListing"
import EventCreationModal from "./EventCreationModal"

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

function EventListingModal(props) {
  const [listingModalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <div class="day-button" onClick={openModal}>{props.object.day}</div>
      <Modal
        isOpen={listingModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
            <div className="display-1 mb-4">{props.object.day}, {props.object.month}</div>
            <div className="h4">Events for this day</div>
            <ol>
                <EventListing id={props.object.id} insideModal={true}/>
            </ol>
            <EventCreationModal object={props.object}/>
        </div>
        <button type="button" class="btn btn-warning" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  )
}

export default EventListingModal