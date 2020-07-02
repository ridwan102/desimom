import React, { Component } from 'react'
import loadingGif from '../images/loading-arrow.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <h4>Menu Loading...</h4>
                <img src={loadingGif} alt='loadingGif'/>
            </div>
        )
    }
}
