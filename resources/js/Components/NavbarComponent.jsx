import React from 'react';

const NavbarComponent = (props) => {

    const active = props.active;
    console.log(active)

    const navElements = [
        {href: '/domeinen', text: 'Domeinen'},
        {href: '/winkelwagen', text: 'Winkelwagen'},
        {href: '/bestellingen', text: 'Bestellingen'},
    ];

    return (
        <div className='navbar'>
            <div className="navbar-left">
                <a className="navbar-left-brand" href="/">Domains.nl</a>
            </div>
            <div className="navbar-right">
                {navElements.map((element, index) => (
                    <a key={index}
                       className={"navbar-right-element " + (active === element.href ? 'active' : '')}
                       href={element.href}>
                        {element.text}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NavbarComponent;
