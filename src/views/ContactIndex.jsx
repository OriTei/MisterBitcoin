import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import ContactList from '../cmps/ContactList'
export default class ContactIndex extends Component {
    state = {
        contacts: null,
        filterBy: { name: '', phone: '', email: '' }
    }
    componentDidMount(){
        this.loadContacts()
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts(this.filterBy)
            this.setState({ contacts })
        } catch(err) {
            console.error('err:', err)
        }
    }
    render() {
        const {contacts} = this.state
        return (
            <setction className="contact-index">
                <ContactList contacts={contacts}/>
            </setction>
        )
    }
}
