import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    //navbar toggle; adjust .nav-links in CSS (43:06 of video Resort React Tutorial)
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className='navbar'>
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} alt='logo' className='nav-image'/>
                        </Link>
                        <button 
                            type='button' 
                            className='nav-btn'
                            onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon'/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to='/menu'>Menu</Link>
                        </li>
                        <li>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfThLvU7L_MlS4eRNIzJ7Q7y71f2bOrJRkzkcW_mtm0FADXmg/viewform' 
                        target="_blank" rel="noopener noreferrer">
                            {/* <i className="fas fa-cart-arrow-down fa-lg" /> */}
                            Order
                        </a>
                        </li>
                    </ul>
                </div>


            </nav>
        )
    }
}

