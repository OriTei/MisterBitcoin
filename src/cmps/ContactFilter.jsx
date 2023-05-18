import React, { Component } from 'react'

export class RobotFilter extends Component {

    state = {
        filterBy: null
    }

    componentDidMount() {
        this.setState({ filterBy: { ...this.props.filterBy } })
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break;
            default:
                break;
        }
        this.setState(
            ({ filterBy }) => ({ filterBy: { ...filterBy, [field]: value } }),
            () => this.props.onChangeFilter(this.state.filterBy)
        )

    }

    render() {
        if (!this.state.filterBy) return <div>Loading...</div>
        const { model, type, minBatteryStatus, maxBatteryStatus } = this.state.filterBy
        return (
            <form className='robot-filter'>
                <section>
                    <label htmlFor="model">Model</label>
                    <input onChange={this.handleChange} value={model} type="text" name="model" id="model" />
                </section>
                <section>
                    <label htmlFor="type">Type</label>
                    <input onChange={this.handleChange} value={type} type="text" name="type" id="type" />
                </section>
                <section>
                    <label htmlFor="minBatteryStatus">MinBatteryStatus</label>
                    <input onChange={this.handleChange} value={minBatteryStatus} type="number" name="minBatteryStatus" id="minBatteryStatus" />
                </section>
                <section>
                    <label htmlFor="maxBatteryStatus">MaxBatteryStatus</label>
                    <input onChange={this.handleChange} value={maxBatteryStatus} type="number" name="maxBatteryStatus" id="maxBatteryStatus" />
                </section>
            </form>
        )
    }
}
