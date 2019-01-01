import React from 'react';
import Link from 'gatsby-link';
import '../styles/header.scss';

const NavHeader = props => {
    return (
        <div>
            <nav className='nav'>
                <div className="nav-list">
                    {/*<Link className="nav-item" to={'/'}>Home</Link>*/}
                    {/*<Link className="nav-item" to={'/about'}>About</Link>*/}
                    {/*<Link className="nav-item" to={'/tech'}>Tech Stack</Link>*/}
                </div>
            </nav>
        </div>
    );
};

export default NavHeader;
