import React, { useState } from 'react'
import Loader from './Loader'
import { ContactPreview } from './ContactPreview'

const ContactList = ({ contacts }) => {
    if (!contacts) {
        return <Loader />
    }

    if (contacts.length === 0) {
        return <h1>No contacts found.</h1>
    }

    return (
        <ul className="contact-list">
            {contacts.map((contact) => (
            <ContactPreview contact={contact} />
            ))}
        </ul>
    )
}

export default ContactList
