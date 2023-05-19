import React, { useState } from 'react'
import Loader from './Loader'
import { ContactPreview } from './ContactPreview'

const ContactList = ({ contacts, onRemoveContact, onSelectContact }) => {
    if (!contacts) {
        return <Loader />
    }

    if (contacts.length === 0) {
        return <h1 className="no-contacts-header">No contacts found.</h1>
    }

    return (
        <ul className="contact-list">
            {contacts.map((contact) => (
                <ContactPreview
                    key={contact._id}
                    contact={contact}
                    onRemoveContact={onRemoveContact}
                    onSelectContact={onSelectContact}
                />
            ))}
        </ul>
    )
}

export default ContactList
