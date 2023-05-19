import { Component } from 'react'
import { contactService } from '../services/contact.service'
export class ContactDetails extends Component {
    state = {
        contact: null
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
        }
    }

    render() {
        const { conatct } = this.state
        return (
            <section className="contact-details">
                <h1>{}</h1>
            </section>
        )
    }
}
