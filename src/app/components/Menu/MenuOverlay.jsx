// Import Libraries
import React from 'react';
import NavLink from '../Navbar/NavLink';

const MenuOverlay = ({ links, onClick }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} onClick={onClick} />
                </li>
            ))}
        </ul>
    );
}

export default MenuOverlay;