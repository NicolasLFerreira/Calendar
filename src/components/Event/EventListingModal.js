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
      <div className="day-button" onClick={openModal}>{props.object.day}</div>
      <Modal
        isOpen={listingModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button type="button" className="btn btn-danger float-end" onClick={closeModal}>x</button>
        <div className="">
            <div className="display-1 mb-4">{props.object.day}, {props.object.month}</div>
            <div className="h4">Events for this day</div>
            <EventListing id={props.object.id} insideModal={true} cap={"cap-lg"} refresh={props.refresh}/>
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
              <EventCreationModal object={props.object} refresh={props.refresh}/>
              
            </div>
        </div>
        
      </Modal>
    </div>
  )
}

export default EventListingModal