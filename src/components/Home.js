import React, { Component } from 'react'
import Intro from './Intro'
import Menu from './Menu'
// import logo from "../images/logo.jpeg";

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="MainContainer">
                <div className="Home"/>
                {/* <img className="imgB1"src={logo}/> */}
            </div>
            <Intro/>
            <Menu/>
            </>
        )
    }
}
