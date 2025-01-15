import React, { useState, useEffect } from 'react';
import './Slider.css';
import imageSlide from './SliderData';
import OffcanvasExample from '../NavigationBar/Navbar';

const NewSlider = () => {
    const [currentState, setCurrentState] = useState(0);

    // Automatically switch slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentState((prevState) =>
                prevState === imageSlide.length - 1 ? 0 : prevState + 1
            );
        }, 3000)
        return () => clearInterval(interval);
    }, []);

    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    };

    return (
        <div className="container-style">
            <div style={bgImageStyle}>
                <div className="slider-content">
                    <OffcanvasExample />
                    <div className='mainContainer'>
                        <div className='heroSec-InfoBox'>
                            <div className='heroSec-text'>
                                <h4 style={{ color: 'white' }}>BMW iDrive</h4>
                                <p className='heroPara'>An Evolution of Control and Inteligent Connectivity</p>
                                <button className='readMoreBtn' >Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSlider;
