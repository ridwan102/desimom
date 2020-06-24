import React, { Component } from 'react'
import Title from './Title'
import MenuItems from './MenuItems'

export default class Menu extends Component {
    render() {
        return (
            <section>
                <Title title='Menu'/>
                <MenuItems />
            </section>
        )
    }
}
