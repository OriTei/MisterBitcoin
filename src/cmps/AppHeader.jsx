import React, { Component } from 'react'
import logo from '../assets/imgs/svg.bit.png'
import { Link } from 'react-router-dom'
export default class AppHeader extends Component {
    render() {
        return (
            <section className="header-container">
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contacts'}>Contacts</Link>
                </nav>
                <div className="logo-container">
                    <Link to="/">
                        <h1>MisterBitcoin</h1>
                        <img src={logo} alt="bitcoin-logo" />
                    </Link>
                </div>
            </section>
        )
    }
}
