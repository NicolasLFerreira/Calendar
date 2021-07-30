import React from "react"
import Modal from "react-modal"

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

function HelpModal(props) {
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

	// Custom functions

	function kitItemTab(name, text, index) {
		var show = index == 0 ? " active" : ""
		var id = ("list-" + name.toLowerCase()).replace(' ', '-')
		return [
			<a class={"list-group-item list-group-item-action" + show} id={id + "-list"} data-bs-toggle="list" href={"#" + id} role="tab">{name}</a>,
			<div class={"tab-pane fade show" + show} id={id} role="tabpanel">{text}</div>
		]
	}

	function buildComponent(arr) {
		var items = []
		var tabs = []

		var name
		var text
		var kit

		for (let index = 0; index < arr.length; index++) {
			name = arr[index].name
			text = arr[index].text

			kit = kitItemTab(name, text, index)

			items.push(kit[0])
			tabs.push(kit[1])
		}

		return [
			<div className="col-5 col-lg-4">
				<div className="list-group" id="list-tab" role="tablist">
					{items}
					<a className="list-group-item list-group-item-action" id="list-danger-list" data-bs-toggle="list" href="#list-danger" role="tab">Danger Zone</a>
				</div>
			</div>,
			<div className="col-7 col-lg-8">
				<div className="tab-content" id="list-nav-tabContent">
					{tabs}
				</div>
			</div>
		]
	}

	var arr = [
		{
			"name": "Switch Months",
			"text": "To change the current showing month, use the blue horizontal button bar with the name of each month on top of the calendar."
		},
		{
			"name": "Event Listing",
			"text": "To see a more detailed info on a day, click on its number. By doing that, a small window will open, with more utilities and details on events."
		},
		{
			"name": "Create Events",
			"text": "To create events, you can use the button on the left bar of the site or in the day window mentioned before in the Event Listing section."
		},
		{
			"name": "Upcoming Events",
			"text": "In the left bar of the site, you will have a list of the events in a ordered manner. You can click on them to open the same window with details about the day."
		},
	]
	return (

		<div>
			<button type="button" className="btn btn-danger w-100 mt-1" onClick={openModal}>Help</button>
			<Modal
				isOpen={createModalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Help Modal"
			>
				<button type="button" className="btn-close float-end" aria-label="Close" onClick={closeModal}></button>
				<div>
					<div className="display-4">How to use {"<Cal-&-r/>"}</div>
					<p className="fs-4">A quick tutorial on its functionalities</p>
					<div className="row">
						{buildComponent(arr)}
					</div>
				</div>
				<div className="tab-pane fade" id="list-danger">
					<div className="display-6 text-danger text-center p-5">DANGER ZONE: </div>
					<div className="text-center fs-5">Things went south? Added <b>way</b> too many events? Have to delete <b>everything</b> for whatever reason, <b>forever</b>? Well, go ahead and do it! But be aware, because there is <span className="text-danger">no coming back, you will delete <b>EVERYTHING... FOREVER!!!</b></span></div>
					<button type="button" className="btn btn-danger w-100 m-1" onClick={() => props.clearEvents()}>Clear All Events</button>
				</div>
			</Modal>
		</div>
	)
}

export default HelpModal