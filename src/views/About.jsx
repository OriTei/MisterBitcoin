import React from 'react'
import { useHistory } from 'react-router-dom'

export default function About() {
    const history = useHistory()

    const moveToLoginPage = () => {
        history.push('/login')
    }

    return (
        <>
            <section className="about-container">
                <h1>Welcome to MisterBitcoin!</h1>
                <p>
                    Introducing MisterBitcoin, the ultimate coin transfer wallet
                    simulation app. Experience the thrill of securely managing
                    and transferring virtual currency with ease. With intuitive
                    user interfaces and real-time transaction tracking,
                    MisterBitcoin lets you explore the world of digital wealth
                    management. Embrace the future of finance at your
                    fingertips.{' '}
                    <span className="signup-link" onClick={moveToLoginPage}>
                        Join MisterBitcoin now!
                    </span>
                </p>
                <section className="coin-container">
                    <div className="spinning-coin coin-1">₿</div>
                </section>
            </section>
        </>
    )
}
