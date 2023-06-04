import React, { useState } from 'react'
import Modal from 'react-modal'
import { setAppElement } from 'react-modal'

export function ContactPreview({ contact, onRemoveContact, onSelectContact }) {
    setAppElement('#root')
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
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
            <section className="contact-preview flex space-between" >
                <div onClick={() => onSelectContact(contact._id)}>
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
            </section>

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
