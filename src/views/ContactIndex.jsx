import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import ContactList from '../cmps/ContactList'
import { ContactDetails } from './ContactDetailsPage'

export default class ContactIndex extends Component {
    state = {
        contacts: null,
        selectedContactId: null,
        filterBy: { name: '', phone: '', email: '' }
    }
    componentDidMount() {
        this.loadContacts()
    }

    onSelectContact = (contactId) => {
        console.log(contactId)
        this.setState({ selectedContactId: contactId })
    }
    onRemoveContact = async (contactId) => {
        try {
            await contactService.deleteContact(contactId)
            this.setState(({ contacts }) => ({
                contacts: contacts.filter(
                    (contact) => contact._id !== contactId
                )
            }))
        } catch (err) {
            console.error('err:', err)
        }
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts(this.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.error('err:', err)
        }
    }
    render() {
        const { contacts, selectedContactId } = this.state
        return (
            <section className="contact-index">
                {selectedContactId ? (
                    <ContactDetails contactId={selectedContactId}/>
                ) : (
                    <ContactList
                        contacts={contacts}
                        onRemoveContact={this.onRemoveContact}
                        onSelectContact={this.onSelectContact}
                    />
                )}
            </section>
        )
    }
}
