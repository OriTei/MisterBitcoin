import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import Loader from '../cmps/Loader'

export class ContactDetails extends Component {
    state = {
        contact: null,
        isLoading: true
    }

    componentDidMount() {
        this.loadContact()
    }

    loadContact = async () => {
        try {
            const contact = await contactService.getContactById(
                this.props.contactId
            )
            this.setState({ contact })
        } catch (error) {
            console.log('error:', error)
        } finally {
            this.setState({ isLoading: false })
        }
    }

    render() {
        const { contact, isLoading } = this.state
        if (isLoading) return <Loader />

        return (
            <section className="contact-details">
                {contact && (
                    <>
                        {!isLoading && (
                            <img
                                src={`https://robohash.org/${contact._id}?set=set5&size=200x200`}
                                alt="Contact Profile"
                                onLoad={() =>
                                    this.setState({ isLoading: false })
                                }
                            />
                        )}
                        <div className="contact-cred">
                            <h1>{contact.name}</h1>
                            <p>
                                <span>Phone:</span> <span>{contact.phone}</span>
                            </p>
                            <p>
                                <span>Email:</span> <span>{contact.email}</span>
                            </p>
                        </div>
                    </>
                )}
            </section>
        )
    }
}
