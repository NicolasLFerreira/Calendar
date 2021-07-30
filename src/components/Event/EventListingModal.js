import React from "react"
import Modal from "react-modal"
import EventListing from "./EventListing"
import EventCreationModal from "./EventCreationModal"
import DataManagement from "./DataManagement"

const dataManagement = new DataManagement()
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

	const title = dataManagement.numberWithPrefix("" + props.object.day) + " of " + dataManagement.getProperties("name", props.object.month)
	const weekDay = dataManagement.weekDayName(props.object.month, props.object.day)

	return (
		<div>
			{props.fromUpcoming == null ?
				<div className="day-button" onClick={openModal}>{props.object.day}</div> :
				<button type="button" className="btn btn-primary w-100 mb-1" onClick={openModal}>{title}, {weekDay}: {dataManagement.getEvent(props.object.id).events.length} event{dataManagement.getEvent(props.object.id).events.length == 1 ? "" : "s"}</button>

			}

			<Modal
				isOpen={listingModalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Event Listing Modal"
			>
				<button type="button" className="btn-close float-end" aria-label="Close" onClick={closeModal}></button>
				<div className="">
					<div className="display-3 mb-4">{title}, {weekDay}</div>
					<div className="h4">Events for this day</div>
					<EventListing id={props.object.id} insideModal={true} cap={"cap-lg"} refresh={props.refresh} />
					<div className="btn-group-vertical" role="group" aria-label="Vertical button group">
						<EventCreationModal object={props.object} refresh={props.refresh} />
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default EventListingModal