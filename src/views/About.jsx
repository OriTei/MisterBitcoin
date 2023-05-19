import React from 'react'

export default function About() {
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
                    fingertips. Get MisterBitcoin now!
                </p>
            </section>
            <section className="coin-container">
                <div className="spinning-coin">₿</div>
            </section>
        </>
    )
}
