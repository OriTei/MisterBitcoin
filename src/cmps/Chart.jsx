import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import Loader from './Loader'
import Chart from 'chart.js/auto' // this line is necessary

export default class MarketPriceChart extends Component {
    state = {
        chartData: null,
        isLoading: true,
        error: null,
        chartOptions: {
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    }
                },

            },
            plugins:{
                legend:false,
            }
        }
    }

    async componentDidMount() {
        const {action,title} = this.props.data
        try {
            const marketPriceData = await action
            const chartData = {
                labels: marketPriceData.values.map((value) =>
                    new Date(value.x * 1000).toLocaleDateString()
                ),
                datasets: [
                    {
                        label: title,
                        data: marketPriceData.values.map((value) => value.y),
                        borderColor: 'lightseagreen',
                        borderWidth: 3,
                        fill: false
                    }
                ]
            }
            this.setState({ chartData, isLoading: false })
        } catch (error) {
            this.setState({ error: error.message, isLoading: false })
        }
    }

    render() {
        const { chartData, isLoading, error,chartOptions } = this.state
        const {title} = this.props.data

        if (isLoading) {
            return <Loader />
        }

        if (error) {
            return <p>Error: {error}</p>
        }

        return (
            <div className='chart-container' style={{ color: 'white', }}>
                <h2>{title}</h2>
                <Line data={chartData} options={chartOptions} />
            </div>
        )
    }
}
