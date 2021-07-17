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
  const [modalIsOpen, setIsOpen] = React.useState(false)

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
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {props.jsx}
        <button type="button" class="btn btn-warning" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  )
}

export default ModalBase