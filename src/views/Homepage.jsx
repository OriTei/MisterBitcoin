import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import Loader from '../cmps/Loader'
import Chart from '../cmps/Chart'

export default class Homepage extends Component {
    state = {
        user: null,
        coinsRate: null,
        isLoading: false,
    }

    async componentDidMount() {
        const user = userService.getUser()
        this.setState({ user })
        try {
            this.setState({ isLoading: true })
            const coinsRate = await bitcoinService.getRate(user.coins)
            this.setState({ coinsRate, isLoading: false })
        } catch (error) {
            console.error(error)
            this.setState({ isLoading: false })
        }
    }

    render() {
        const { user, coinsRate, isLoading } = this.state
        if (!user || !coinsRate) return <Loader />
        return (
            <section className="homepage-details">
                <div className="top-info">
                    <h2><a href='https://www.coindesk.com/price/bitcoin/' target='blank'>Last Week's news</a></h2>
                    <section className="user-details">
                        <h1 className="flex justify-content space-between">
                            {user.name}
                            <span className="coin-emoji">🚶</span>
                        </h1>
                        <p>
                            Balance:{''}
                            <span className="coin-emoji">{user.coins}💲</span>
                        </p>
                        {isLoading ? (
                            <Loader />
                        ) : (
                            coinsRate && (
                                <p>
                                    In BC:
                                    <span className="coin-emoji">
                                        {' '}
                                        {coinsRate}🪙
                                    </span>{' '}
                                </p>
                            )
                        )}
                    </section>
                </div>
                <section className="charts-container">
                    <Chart
                        data={{
                            action: bitcoinService.getMarketPrice(),
                            title: 'Market Price'
                        }}
                    />
                    <Chart
                        data={{
                            action: bitcoinService.getConfirmedTransactions(),
                            title: 'Confirmed Transactions'
                        }}
                    />
                </section>
            </section>
        )
    }
}
