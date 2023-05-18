import React from 'react'

export function ContactPreview({ contact }) {
    return (
        <li key={contact._id}>
            <section className="contact-preview flex space-between">
                    <div>
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
            </section>
        </li>
    )
}
