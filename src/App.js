import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import RestApiPage from './pages/RestApiPage/RestApiPage'
import NavBar from './components/NavBar/NavBar'
import { connect } from 'react-redux'






var socket = new WebSocket("wss://ws.bitstamp.net.");
class App extends React.Component {

  componentDidMount() {

    socket.onopen = (event) => {
      socket.send(JSON.stringify({
        "event": "bts:subscribe",
        "data": {
          "channel": "order_book_btcusd"
        }
      }))
    }


    socket.onmessage = (msg => {
      let res = JSON.parse(msg.data)
      if (res.data.bids && res.data.asks) {
        let bid = +res.data.bids[0][0]
        let ask = +res.data.asks[0][0]
        let price = +((bid + ask) / 2).toFixed(2)
        if (!this.props.isClose) {

          if (!this.props.currPrice) {
            this.props.setFirstPrice(price)
          }
          else { this.props.setPrice(price) }
        }
      }
    })

  }

  componentWillUnmount() {
    socket.close()
    socket.onclose(console.log('Closing socket...'))
  }



  render() {

    return (
      <Router>

        <NavBar></NavBar>
        <Route path="/" exact component={HomePage} />
        <Route path="/RestApi" exact component={RestApiPage} />
      </Router>
    )
  }
}
const mapStateToProps = state => {
  return {
    currPrice: state.currPrice,
    isClose: state.isClose

  }
}
const mapDispatchToProps = dispatch => {
  return {
    setFirstPrice: (price) => {
      dispatch({ type: 'SET_FIRST_PRICE', data: price })
    },
    setPrice: (price) => {
      dispatch({ type: 'SET_PRICE', data: price })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
