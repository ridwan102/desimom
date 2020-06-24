import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error extends Component {
    render() {
        return (
            <div className='Error'>
                <div className='banner'>
                <h1>404 Error</h1>
                <Link to='/' className='button'>
                    Return Home
                </Link>
                </div>
            </div>
        )
    }
}
