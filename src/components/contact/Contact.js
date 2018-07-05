import React from 'react';

const Contact = () => {
    return (
        <section className='flex component contact' id='contact'>
            <div className='component-container'><h3>Contact Details:</h3>
                <ul>
                    <li><a href=''><i className='fas fa-phone'/> +918087809466</a></li>
                    <li><a href='mailto:naik.pranita25@gmail.com' className='text-uppercase'><i
                        className='fas fa-envelope'/>naik.pranita25@gmail.com</a>
                    </li>
                </ul>
                <a href='https://www.linkedin.com/in/pranita-naik' target='_blank'><i className='fab fa-linkedin-in'/></a>
                <a href='https://github.com/pnaik93' target='_blank'><i className='fab fa-github'/></a>
                <a href='https://twitter.com/Pranita_Naik_08' target='_blank'><i className='fab fa-twitter'/></a>
                <a href='https://www.facebook.com/pranita.naik93' target='_blank'><i className='fab fa-facebook-square'/></a>
            </div>
        </section>)
};


export default Contact;