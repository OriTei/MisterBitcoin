import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import Loader from '../cmps/Loader'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import '../assets/scss/cmps/ContactList.scss'

export class ContactDetails extends Component {
    state = {
        contact: null,
        isLoading: true,
        isModalShown: false,
        isRemoveConfirmed: false
    }

    componentDidMount() {
        this.loadContact()
        this.setState({ isModalShown: false, isRemoveConfirmed: false })
    }

    onRemoveContact = async () => {
        const contactId = this.state.contact._id
        try {
            await contactService.deleteContact(contactId)
            this.props.history.push('/contacts')
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

    openModal = () => {
        this.setState({ isModalShown: true })
    }

    closeModal = () => {
        this.setState({ isModalShown: false })
    }

    render() {
        const { contact, isLoading, isModalShown } = this.state

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
                                <p>{contact.phone}</p>
                                <p>{contact.email}</p>
                            </div>
                            <div className="contact-btns">
                                <button onClick={this.openModal}>Delete</button>
                                <Link to={`/contacts/edit/${contact._id}`}>
                                    Edit
                                </Link>
                            </div>
                            <Link to="/contacts" className="back-link">
                                Back to contacts
                            </Link>
                        </div>
                        <Modal
                            isOpen={isModalShown}
                            onRequestClose={this.closeModal}
                            contentLabel="Confirm Delete"
                            className="custom-modal"
                            overlayClassName="custom-overlay"
                        >
                            <section className="modal-content">
                                <h2>
                                    Are you sure you want to delete{' '}
                                    {contact.name} from your contacts?
                                </h2>
                                <div className="modal-btns">
                                    <button onClick={this.closeModal}>
                                        Cancel
                                    </button>
                                    <button onClick={this.onRemoveContact}>
                                        Delete
                                    </button>
                                </div>
                            </section>
                        </Modal>
                    </>
                ) : (
                    <p>Contact not found.</p>
                )}
            </section>
        )
    }
}
