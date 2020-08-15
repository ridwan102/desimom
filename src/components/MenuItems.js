import React from 'react'
import defaultImg from '../images/samosa.jpeg'

export default function MenuItems({menuItem}) {
    const{title, price, image} = menuItem;
    return (
        <article className='menu'>
            <div className='img-container'>
                <img src={image || defaultImg} alt='samosas'/>
                <div className='price-top'>
                    <h6>${price}</h6>
                </div>
                <h5>{title}</h5>
                <div className='description'/>
            </div>
        </article>
    )
}
