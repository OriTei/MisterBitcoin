import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
export default class ContactEditPage extends Component {
    state = {
        contact: contactService.getEmptyContact(),
        isEdit: false,
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        this.setState(({ contact }) => ({
            contact: { ...contact, [field]: value }
        }))
    }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        if (contactId) {
            const contact = await contactService.getContactById(contactId)
            this.setState({ contact, isEdit: true })
        }
    }

    onSaveContact = async (ev) => {
        const { contact } = this.state
        console.log(contact)
        debugger
        ev.preventDefault()
        try {
            console.log({ ...contact })
            await contactService.saveContact({ ...contact })
            this.props.history.push('/contacts')
        } catch (error) {
            console.log('error', error)
        }
    }

    render() {
        const { isEdit } = this.state
        const { name, phone, email } = this.state.contact
        return (
            <section className="contact-edit-container">
                <h1>{isEdit ? 'Edit' : 'Add'} contact</h1>
                <form>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Contacts name..."
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone..."
                        value={phone}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <div className="edit-btns">
                        <button onClick={this.onSaveContact}>Save</button>
                        <button
                            onClick={() => this.props.history.push('/contacts')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}
