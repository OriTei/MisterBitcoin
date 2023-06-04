import './assets/scss/global.scss'
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Homepage from './views/Homepage';
import About from './views/About';
import AppHeader from './cmps/AppHeader'
import ContactIndex from './views/ContactIndex';
function App() {
    return (
        <Router>
            <section className="main-app">
                <header>
                    <AppHeader />
                </header>
            <main className="home-container">
                    <Switch>
                        {/* <Route path="/contacts/:id" component={ContactDetailsPage} /> */}
                        <Route path="/contacts" component={ContactIndex} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Homepage} />
                    </Switch>
                </main>
                {/* <footer>
                    <AppFooter />
                </footer> */}
            </section>
        </Router>
    )
}

export default App;
