import React from 'react';

const NavbarComponent = () => {

    const navElements = [
        { href: '/domeinen', text: 'Domeinen' },
        { href: '/winkelwagen', text: 'Winkelwagen' },
        { href: '/bestellingen', text: 'Bestellingen' },
    ];

    return (
        <div className='navbar'>
            <div className="navbar-left">
                <a className="navbar-left-brand" href="/">Domains.nl</a>
            </div>
            <div className="navbar-right">
                {navElements.map((element, index) => (
                    <a key={index} className='navbar-right-element' href={element.href}>{element.text}</a>
                ))}
            </div>
        </div>
    );
};

export default NavbarComponent;
