import React, { Component } from 'react'
import logo from '../assets/imgs/svg.bit.png'
import { Link } from 'react-router-dom'

export default class AppHeader extends Component {
    state = {
        isMenuShown: false,
        isMobile: window.innerWidth < 768
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize)
    }

    handleWindowResize = () => {
        this.setState({ isMobile: window.innerWidth < 768 })
    }

    

    toggleMenu = () => {
        this.setState((prevState) => ({
            isMenuShown: !prevState.isMenuShown
        }))
        const { isMenuShown } = this.state
        isMenuShown ? this.props.handleOpenMenu() : this.props.handleCloseMenu()
    }

    render() {
        const { isMenuShown, isMobile } = this.state

        return (
            <section
                className={
                    isMenuShown ? 'header-container blur' : 'header-container'
                }
            >
                <nav>
                    {isMobile && (
                        <div
                            className="hamburger-menu"
                            onClick={this.toggleMenu}
                        >
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <nav
                                className={
                                    isMenuShown ? 'side-menu open' : 'side-menu'
                                }
                            >
                                <Link to={'/'}>Home</Link>
                                <Link to={'/about'}>About</Link>
                                <Link to={'/contacts'}>Contacts</Link>
                            </nav>
                        </div>
                    )}
                    {!isMobile && (
                        <>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/contacts'}>Contacts</Link>
                        </>
                    )}
                </nav>
                <div className="logo-container">
                    <Link to="/">
                        <h1>MisterBitcoin</h1>
                        <img src={logo} alt="bitcoin-logo" />
                    </Link>
                </div>

                {/* Your main content goes here */}
            </section>
        )
    }
}
