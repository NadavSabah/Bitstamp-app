import React from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux';
import './HomePage.css'

class HomePage extends React.Component {

    toggleButton = () => {
        this.props.toggleButton(!this.props.isClose)
    }

    render() {
        return (

            <div className="container">
                <div className="price-container">

                    <span title='First Price' className='price-rate'>{this.props.firstPrice} </span>
                    <span title='Current Price' className={"price-rate " + (this.props.currPrice >= this.props.prePrice ? 'green' : 'red')}>{this.props.currPrice}</span>
                </div>
                <button className='stop-start_btn' onClick={this.toggleButton}>{this.props.isClose ? 'Start' : 'Stop'}</button>
            <div className="bgc-img">
               <h1>Bitstamp Exchange</h1>
            </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toggleButton: (isClose) => {
            dispatch({ type: 'SET_IS_CLOSE', data: isClose })
        }
    }
}

const mapStateToProps = state => {
    return {
        currPrice: state.currPrice,
        prePrice: state.prePrice,
        firstPrice: state.firstPrice,
        isClose: state.isClose
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)