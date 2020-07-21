import React, { Component } from 'react';

export default class ZFooter extends Component {
    render() {
        return (
            <footer className='footer'>
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <div className='foot-center'>
                    <ul className='foot-links show-foot'>
                        <li>
                            <a href={'mailto:desimomkitchen@gmail.com'}>
                            <i className="far fa-envelope fa-lg" /> </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/desimom/'
                            target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram fa-lg" />
                            </a>
                        </li>
                    </ul>
                    <ul className='foot-links show-foot'>
                        <li>
                        <a href='http://www.ridwanalam.com/'
                            target="_blank" rel="noopener noreferrer"> Created by ThisIsRid </a>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}

