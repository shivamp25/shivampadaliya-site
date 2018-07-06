import React from 'react'
import Link from 'gatsby-link'
import SocialLinks from '../components/FoundMe';

import '../styles/index.scss';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import email from '../images/email.svg';
const links = [
    {
        href: 'https://github.com/shivam25',
        title: 'Github',
        image: github,
    },
    {
        href: 'https://www.linkedin.com/in/shivampadaliya/',
        title: 'Linkedin',
        image: linkedin,
    },
    {
        href: 'mailto:shivampadaliya25@gmail.com',
        title: 'Email',
        image: email,
    }
];

const IndexPage = () => (
    <div className="hero">
        <div className="container">
            <h1 className="t-bold t-mtb-15">
                Hey! 👋 I'm <span className="t-span">Shivam Padaliya</span>
            </h1>
            <h2 className="t-regular t-mtb-15">
                <span className="t-span t-bold">Software Engineer</span> at HUTN GROUP
            </h2>
            <SocialLinks links={links} />
        </div>
    </div>
);

export default IndexPage
