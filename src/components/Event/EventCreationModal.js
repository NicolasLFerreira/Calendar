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

  return (
    <div>
      <button type="button" class="btn btn-success" onClick={openModal}>Add Event</button>
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
                <input type="email" class="form-control" id="floatingInput" placeholder="Do groceries!"/>
                <label for="floatingInput">Event</label>
            </div>
            <div>
                <button type="button" class="btn btn-success" onClick={() => props.object.createEvent(props.object.id)}>
                    Create
                </button>
            </div>
        </div>
        <button type="button" class="btn btn-warning" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  )
}

export default ModalBase

// import React, {Component} from "react"

// class EventCreationModal extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
            
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <div className="display-3 mb-4">{this.props.object.day}, {this.props.object.month}</div>
//                 <div class="form-floating mb-3">
//                     <input type="email" class="form-control" id="floatingInput" placeholder="Do groceries!"/>
//                     <label for="floatingInput">Event</label>
//                 </div>
//                 <div>
//                     <button type="button" class="btn btn-success" onClick={() => this.props.object.createEvent(this.props.object.id)}>
//                         Create
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default EventCreationModal