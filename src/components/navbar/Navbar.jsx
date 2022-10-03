import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './navbar.css'
import { links } from '../../data'
import Logo from '../../images/kaliiston-logo.png'
import { GoThreeBars } from 'react-icons/go'

const Navbar = () => {

    const [showNav, setShowNav] =useState(false);

  return (
    <div>
        <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="logo" />
            </Link>
            <ul className={`nav__links ${showNav ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li className='nav__items'>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setShowNav (!showNav)}>
                <GoThreeBars />
            </button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar