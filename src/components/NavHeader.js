import React from 'react';
import Link from 'gatsby-link';
// import logo from '../images/ewh.svg';
import '../styles/header.scss';

const NavHeader = props => {
    return (
        <div>
            <nav className='nav'>
                <div className="nav-list">
                    {/*<Link className="nav-item" to={'/about/'}>About</Link>*/}
                    {/*<Link className="nav-item" to={'/resume/'}>Resume</Link>*/}
                </div>
            </nav>
        </div>
    );
};

export default NavHeader;
