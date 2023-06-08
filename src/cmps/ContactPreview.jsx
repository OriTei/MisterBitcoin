import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

// Set the app element for the modal
Modal.setAppElement('#root')

export function ContactPreview({ contact, onRemoveContact, onSelectContact }) {
    const [showModal, setShowModal] = useState(false)

    const openModal = (event) => {
        event.preventDefault()
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handleRemoveContact = () => {
        onRemoveContact(contact._id)
        closeModal()
    }

    return (
        <li key={contact._id}>
            <Link
                to={`/contacts/${contact._id}`}
                className="contact-preview flex space-between"
            >
                <div className="contact-cred">
                    <h2>{contact.name}</h2>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>
                <div>
                    <img
                        src={`https://robohash.org/${contact._id}?set=set5&size=100x100`}
                        alt="Contact Profile"
                    />
                </div>
                <button className="remove-btn" onClick={openModal}>
                    <p>x</p>
                </button>
            </Link>

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="Confirm Delete"
                className="custom-modal"
                overlayClassName="custom-overlay"
            >
                <section className="modal-content">
                    <h2>
                        Are you sure you want to delete {contact.name} from your
                        contacts?
                    </h2>
                    <div className="modal-btns">
                        <button onClick={closeModal}>Cancel</button>
                        <button onClick={handleRemoveContact}>Delete</button>
                    </div>
                </section>
            </Modal>
        </li>
    )
}
