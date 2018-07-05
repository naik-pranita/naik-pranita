import React from 'react';

import Canvas from '../canvas/Canvas';

const About = ({onClick}) => {
    return (
        <section id='about' className='about component flex'>
            <div className='component-container'>
                <Canvas/>
                <div className='flex'>
                    <div className='intro'><p>Hi! I'm Pranita, Front End Developer.</p>
                        <p>
                            <button type='button' className='view-profile-button btn btn-default' onClick={onClick}><span
                                className='btn-name'>View Profile <span
                                className='fas fa-arrow-down'/></span></button>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default About;