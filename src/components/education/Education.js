import React from 'react';

const Education = () => {
    return <section id='education' className='flex component education'>
        <div className='component-container'><h3>EDUCATION</h3>
            <ul>
                <li><i className='fa fa-graduation-cap' aria-hidden='true'/><i>College:</i><h4> MIT College of Engineering, Kothrud, Pune. <i className='duration'>2011-2015</i>
                </h4></li>
                <li><i className='fa fa-university' aria-hidden='true'/><i>Junior College:</i><h4> Laxmanrao Apte Junior College, Deccan, Pune. <i
                    className='duration'>2009-2011</i></h4></li>
                <li><i className='fa fa-building'/> <i>School:</i><h4> Vidyanand Bhavan High School, Nigdi, Pune. <i className='duration'>2009</i></h4>
                </li>
            </ul>
        </div>
    </section>
};

export default Education;