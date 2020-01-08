import axios from 'axios'

export default {
    getPrice,
    subscribe,
    getData

}


async function getData() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/albums')
    return res.data
}   












var socket = new WebSocket("wss://ws.bitstamp.net.");
function subscribe() {
    socket.onopen = (event) => {
        console.log('event in the socket ', event)
        socket.send(JSON.stringify({
            "event": "bts:subscribe",
            "data": {
                "channel": "order_book_btcusd"
            }
        }))
    }
}
function getPrice() {
    socket.onmessage = (msg => {
        let res = JSON.parse(msg.data)
        if (res.data.bids && res.data.asks) {
            let bid = +res.data.bids[0][0]
            let ask = +res.data.asks[0][0]
            let price = +((bid + ask) / 2).toFixed(2)
            // console.log('the price is ',price)

            return price
        }

    })
}
