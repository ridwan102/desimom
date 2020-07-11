import React, { Component } from 'react'
import Intro from './Intro'
import Menu from './Menu'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className='Home'/>
            <Intro/>
            <Menu/>
            </>
        )
    }
}
