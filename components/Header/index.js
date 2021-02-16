import React, {useState, useEffect } from 'react';
import Link from 'next/link';

 const Header = () => {
    const [activeLink, setactiveLink] = useState(null);

    const links = [
        { id: 1, name: "home", to: "/" },
        { id: 2, name: "blog", to: "/blog" },
        { id: 3, name: "lab", to: "/lab" }
    ];

    useEffect( () => {
        const pathName = window.location.pathname;
        
        links.forEach( link =>{
            if (pathName === link.to) {
                setactiveLink(link.id)
            }
        });

    },[links]);

    const activateLink = id => {
        setactiveLink(id);
    }

  return (
    <nav className="header">
        <Link href="/">
            <a className="header__logo">
                <img src="./logo.svg" alt="logo" />
            </a>
        </Link>

        <div className="links">
            {links.map( (link, index) => (
                <Link href={link.to} key={index}>
                    <a
                        onClick={() => activateLink(link.id)}
                        className={"links__item " + (link.id === activeLink ? "link__item--active" : "")}
                    >
                        {link.name}
                    </a>
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Header;