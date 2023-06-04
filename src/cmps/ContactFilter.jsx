import React, { Component } from 'react'
import Loader from './Loader'
export class ContactFilter extends Component {
    state = {
        filterBy: null
    }

    componentDidMount() {
        this.setState({ filterBy: { ...this.props.filterBy } })
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        this.setState(
            ({ filterBy }) => ({ filterBy: { ...filterBy, [field]: value } }),
            () => {
                this.props.onChangeFilter(this.state.filterBy)
            }
        )
    }


    render() {
        if (!this.state.filterBy) return <Loader />
        const { contactName, email, phoneNumber } = this.state.filterBy
        return (
            <form className="contact-filter">
                <section>
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={this.handleChange}
                        value={contactName}
                        type="text"
                        name="name"
                    />
                </section>
                <section>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        onChange={this.handleChange}
                        value={phoneNumber}
                        type="text"
                        name="phone"
                    />
                </section>
                <section>
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={this.handleChange}
                        value={email}
                        type="text"
                        name="email"
                    />
                </section>
            </form>
        )
    }
}
