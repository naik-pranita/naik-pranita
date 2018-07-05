import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';


const onClick = (e) => {
    let element = document.getElementById(e.target.getAttribute('data-target'));
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
};

const NavBar = () => {
    return <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <Nav>
                    <NavItem eventKey={1} href='#' className='introduction text-uppercase'>

                        <div className='hidden-xs img-container'><img data-target='about' className='avatar'
                                                                      src='/assets/images/pranita.jpg'/></div>
                        <span className='title'>Pranita Naik</span><span
                        className='sub-title hidden-xs'>Frontend Developer</span>
                    </NavItem>
                </Nav>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href='#' className='link about-link'>
                    <i className='fas fa-user'>
                        <span className='link-text' onClick={onClick} data-target='about'>About</span>
                    </i>
                </NavItem>
                <NavItem eventKey={2} href='#' className='link experience-link'>
                    <i className='fas fa-chart-line'><
                        span className='link-text' onClick={onClick} data-target='experience'>Experience</span>
                    </i>
                </NavItem>
                <NavItem eventKey={3} href='#' className='link experience-link'>
                    <i className='fas fa-columns'>
                        <span className='link-text' onClick={onClick} data-target='projects'>Projects</span>
                    </i>
                </NavItem>
                <NavItem eventKey={4} href='#' className='link experience-link'>
                    <i className='fas fa-chart-bar'>
                        <span className='link-text' onClick={onClick} data-target='skills'>Skills</span>
                    </i>
                </NavItem>
                <NavItem eventKey={5} href='#' className='link experience-link'>
                    <i className='fas fa-graduation-cap'>
                        <span className='link-text' onClick={onClick} data-target='education'>Education</span>
                    </i>
                </NavItem>
                <NavItem eventKey={6} href='#' className='link experience-link'>
                    <i className='fas fa-envelope'>
                        <span className='link-text' onClick={onClick} data-target='contact'>Contact</span>
                    </i>
                </NavItem>
                <NavItem eventKey={7} href='#' className='link experience-link'>
                    <i className='fas fa-file-alt'>
                        <span className='link-text'>Resume</span>
                    </i>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

};

export default NavBar;