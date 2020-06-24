import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

export default class Navbar extends Component {
    //navbar toggle; adjust .nav-links in CSS (43:06 of video Resort React Tutorial)
    // state={
    //     isOpen:false
    // }
    // handleToggle = () =>{
    //     this.setState({isOpen:!this.state.isOpen})
    // }
    render() {
        return (
            <nav className='navbar'>
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to='/'>
                    <img src={logo} alt='logo' className='nav-brand'/>
                </Link>

                {/* <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'/>
                    <Link to='/cart' className='nav-link'>
                        Cart
                    </Link>
                </ul> */}

                <Link to='/cart' className='ml-auto'>
                    <i class="fas fa-cart-arrow-down fa-lg" style={{color:'var(--mainWhite'}}/>
                </Link>
            </nav>
        )
    }
}

