import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import ContactList from '../cmps/ContactList'
import { ContactDetails } from './ContactDetailsPage'
import { ContactFilter } from '../cmps/ContactFilter'
import { log } from 'util'

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
        const newFilterBy = this.state.filterBy
        console.log(newFilterBy)
        try {
            const contacts = await contactService.getContacts(newFilterBy)
            this.setState({ contacts })
        } catch (err) {
            console.error('err:', err)
        }
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy: { ...filterBy } }, this.loadContacts)
    }

    render() {
        const { contacts, selectedContactId, filterBy } = this.state
        return (
            <section className="contact-index">
                <ContactFilter
                    filterBy={filterBy}
                    onChangeFilter={this.onChangeFilter}
                />
                {selectedContactId ? (
                    <ContactDetails contactId={selectedContactId} />
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
