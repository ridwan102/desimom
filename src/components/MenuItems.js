import React from 'react'
import defaultImg from '../images/samosa.jpeg'

export default function MenuItems({menuItem}) {
    const{title, price, image, description} = menuItem;
    return (
        <article className='menu'>
            <div className='img-container'>
                <img src={image || defaultImg} alt='samosas'/>
                <div className='price-top'>
                    <h6>${price}</h6>
                </div>
                <h4>{title}</h4>
                <div className='description'>
                </div>
            </div>
        </article>
    )
}
