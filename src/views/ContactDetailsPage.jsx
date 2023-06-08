import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import Loader from '../cmps/Loader'
import { Link } from 'react-router-dom'

export class ContactDetails extends Component {
    state = {
        contact: null,
        isLoading: true
    }

    componentDidMount() {
        this.loadContact()
    }

    onRemoveContact = async (contactId) => {
        try {
        } catch (err) {
            console.error('err:', err)
        }
    }

    loadContact = async () => {
        try {
            const contact = await contactService.getContactById(
                this.props.match.params.id
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

        if (isLoading) {
            return <Loader />
        }

        return (
            <section className="contact-details">
                {contact ? (
                    <>
                        <div className="contact-cred">
                            <img
                                onLoad={() =>
                                    this.setState({ isLoading: false })
                                }
                                src={`https://robohash.org/${contact._id}?set=set5&size=220x200`}
                                alt="Contact Profile"
                            />
                            <div className="contact-cred">
                                <h1>{contact.name}</h1>
                                <p>
                                    <span>Phone:</span>{' '}
                                    <span>{contact.phone}</span>
                                </p>
                                <p>
                                    <span>Email:</span>{' '}
                                    <span>{contact.email}</span>
                                </p>
                            </div>
                            <div className="contact-btns">
                                <button onClick={this.onRemoveContact}>
                                    Delete
                                </button>
                                <Link to={`/contacts/edit/${contact._id}`}>
                                    Edit
                                </Link>
                            </div>
                            <Link to="/contacts" className="back-link">
                                Back to contacts
                            </Link>
                        </div>
                    </>
                ) : (
                    <p>Contact not found.</p>
                )}
            </section>
        )
    }
}
