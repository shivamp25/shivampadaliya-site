import React from 'react';

import '../styles/found-me.scss';

export default ({ links }) => (
    <ul className="found-me">
        {
            links.map(({href, title, image}) => (
                <li key={href}>
                    <a href={href} title={title}>
                        <img src={image} alt={title} />
                    </a>
                </li>
            ))
        }
    </ul>
);