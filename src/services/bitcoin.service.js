import axios from "axios"
import { storageService } from './storage.service'
const BITCOIN_API_URL = 'https://api.blockchain.info';

export const bitcoinService = {
    getRate,
    getConfirmedTransactions,
    getMarketPrice,
}

async function getRate(coins) {
    try {

        const rate = await axios(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        storageService.store('bitcoinRateDB', rate.data)
        return rate.data
    } catch (error) {
        console.error(`Error: ${error.message}`)
        throw new Error('Failed to get market price')
    }
}


async function getMarketPrice() {
    const url = `${BITCOIN_API_URL}/charts/market-price?timespan=1weeks&format=json&cors=true`;
    try {
        const savedInfo = storageService.load('bitcoinMarketPriceDB')
        if (savedInfo) return savedInfo
        const marketPrice = await axios(url)
        storageService.store('bitcoinMarketPriceDB', marketPrice.data)
        return marketPrice.data
    } catch {
        console.log('Error')
    }
}

async function getConfirmedTransactions() {
    const url = `${BITCOIN_API_URL}/charts/n-transactions?timespan=1weeks&format=json&cors=true`;
    try {
        const savedInfo = storageService.load('bitcoinTransDB')
        if (savedInfo) return savedInfo
        const trans = await axios(url)
        storageService.store('bitcoinTransDB',trans.data)
        return trans.data
    } catch {
        console.log('Error')
    }
}