import React, { Component } from 'react'
import Title from './Title'
import {MenuContext} from '../context';
import Loading from './Loading';
import MenuItems from './MenuItems';

export default class Menu extends Component {
    static contextType = MenuContext
    render() {
        let {loading, menuItems } = this.context
        menuItems = menuItems.map(menuItem => {
            return <MenuItems key={menuItem.id} menuItem={menuItem}/>;
        })
        console.log(menuItems);
        return (
            <section className='menu-items'>
                <Title title='Menu'/>
                <div className ='menu-items-center'>
                    {loading ? <Loading/> : menuItems}
                </div>
            </section>
        );
    }
}