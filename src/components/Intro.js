import React, { Component } from 'react'
import Title from './Title'

export default class Intro extends Component {
    render() {
        return (
            <section className='intro'>
                <Title title='Origin' />
                <div className='intro-center'>
                    <image/>
                    <p>
                    The origin of Desimom starts with preserving the culture of the Pakistani culture which
                    which stems from its humble roots in the village. We want to preserve this culture 
                    through our love for food and share it with the world. Whether young and old, or even 
                    not Desi, we want everyone to feel the warmth it brings to have a homecooked meal everyday.

                    The origin of Desimom starts with preserving the culture of the Pakistani culture which
                    which stems from its humble roots in the village. We want to preserve this culture 
                    through our love for food and share it with the world. Whether young and old, or even 
                    not Desi, we want everyone to feel the warmth it brings to have a homecooked meal everyday.
                    </p>
                </div>
            </section>
        )
    }
}
