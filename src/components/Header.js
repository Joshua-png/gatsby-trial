import React from 'react';
import {Link} from 'gatsby';
import headerStyles from './header.module.css';

const Header = () => {
    return(
        <header>
            <h1 className={headerStyles.h1}>Blog site</h1>
            <nav>
                <ul className={headerStyles.container}>
                    <li >
                       <Link to ="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
                    </li>
                    <li >
                       <Link to ="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
                    </li>
                    <li >
                        <Link to ="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
                    </li>
                    <li >
                        <Link to ="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
                    </li>
                </ul>
            </nav> 
        </header>
    );
}

export default Header;