import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import ContactList from '../cmps/ContactList'
import { ContactDetails } from './ContactDetailsPage'
import { ContactFilter } from '../cmps/ContactFilter'
import { Link } from 'react-router-dom'
export default class ContactIndex extends Component {
    state = {
        contacts: null,
        filterBy: {
            name: '',
            phone: '',
            email: ''
        },
        selectedContacts: []
    }
    componentDidMount() {
        this.loadContacts()
    }

    onRemoveContact = async (contactId) => {
        try {
            debugger
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
        const { contacts, filterBy } = this.state
        return (
            <section className="contact-index">
                <ContactFilter
                    filterBy={filterBy}
                    onChangeFilter={this.onChangeFilter}
                />
                <Link to={'/contacts/edit'} className="add-contact-link">
                    Add contact
                </Link>
                <ContactList
                    contacts={contacts}
                    onRemoveContact={this.onRemoveContact}
                    onSelectContact={this.onSelectContact}
                />
            </section>
        )
    }
}
