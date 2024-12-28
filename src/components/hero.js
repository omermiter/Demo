import React from 'react';
import "../styles/hero.css"

function HeroSection(){
    return (
        <main>
            <div className='hero-cont'>
                <div className='slogan-cont'>
                    <h1 className='slogan'>Your World, Connected</h1>
                </div>
                <p className='second-title'>The best e-sim packages you can find</p>
                <a href='#plans' className='cta hero-cta'>Buy Now</a>
            </div>
            <div className='hero-img'>
            </div>
        </main>
    );
}

export default HeroSection;