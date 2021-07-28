import * as React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './css/NavMenu.css';
import HoverImage from './HoverImage';

import homeLogo from './img/Home.png';
import homeHoverLogo from './img/HomeHover.png';
import searchLogo from './img/Search.png';
import searchHoverLogo from './img/SearchHover.png';

const NavMenu: React.FunctionComponent = () => {

    return (
        <div className="sidenav">
            <NavItem>
                <NavLink tag={Link} style={{ textDecoration: 'none' }} to="/">
                    <HoverImage hoverSrc={homeHoverLogo} src={homeLogo} />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} style={{ textDecoration: 'none' }} to="/search">
                    <HoverImage hoverSrc={searchHoverLogo} src={searchLogo} />
                </NavLink>
            </NavItem>
        </div>
    );
}

export default NavMenu
