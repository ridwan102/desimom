import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5' style={{color:'var(--mainYellow'}}>
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to='/' className='navbar-brand'>
                    <img src={logo} alt='logo' className='navbar-brand'/>
                    {/* <i class="fas fa-home fa-lg"></i> */}
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

