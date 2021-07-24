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

  function kitItemTab(name, text, index){
    var show = index == 0 ? " active" : ""
    var id = ("list-" + name.toLowerCase()).replace(' ', '-')
    return [
      <a class={"list-group-item list-group-item-action" + show} id={id + "-list"} data-bs-toggle="list" href={"#" + id} role="tab">{name}</a>,
      <div class={"tab-pane fade show" + show} id={id} role="tabpanel">{text}</div>
    ]
  }

  function buildComponent(arr){
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

    return[
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
      "name":"Switch Months", 
      "text":"To change the current month being shown, click on the horizontal bar with the months' name ontop of the calendar."
    },
    {
      "name":"Listing Events",
      "text":"You can see the events of a specific day either in its own box in the calendar or by clicking on its number, where it will open a small popup window where you can also remove or add new ones."
    },
    {
      "name":"Crete Events",
      "text":"To create a new event, you can use the [New Event] button to the left of the calendar, or open the event listing and click on the [New Event]. The former requires you to enter a date, and the latter already has it."
    }
  ]
  return (
    
    <div>
      <button type="button" className="btn btn-primary w-100 mt-1" onClick={openModal}>Help</button>
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
          <div className="text-center">Things went south? Added <b>way</b> too many events? Have to delete <b>everything</b> for whatever reason, forever? Well, go ahead and do it! But be aware, because there is <span className="text-danger">no coming back, you will delete <b>EVERYTHING... FOREVER!!!</b></span></div>
          <button type="button" className="btn btn-danger w-100 m-1" onClick={() => props.clearEvents()}>Clear All Events</button>
        </div>
      </Modal>
    </div>
  )
}

export default HelpModal