import React, { useState } from 'react';
import './assets/scss/global.scss';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Homepage from './views/Homepage';
import About from './views/About';
import AppHeader from './cmps/AppHeader';
import ContactIndex from './views/ContactIndex';
import LoginPage from './views/LoginPage'
import { ContactDetails } from './views/ContactDetailsPage';
import ContactEditPage from './views/ContactEditPage'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleOpenMenu = () => {
        setIsMenuOpen(true)
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <Router>
            <section className='main-app'>
                <header>
                    <AppHeader handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} />
                </header>
                <main className={isMenuOpen ? 'home-container' : 'home-container blur'}>
                    <Switch>
                        <Route path="/contacts/edit/:id?" component={ContactEditPage} />
                        <Route path="/contacts/:id" component={ContactDetails} />
                        <Route path="/contacts" component={ContactIndex} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Homepage} />
                    </Switch>
                </main>
            </section>
        </Router>
    );
}

export default App;
