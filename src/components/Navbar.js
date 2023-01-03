import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from './images/logo-crop.jpg';
import { Link } from 'react-scroll';



const Navbar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-custom'>
        <div className='container-fluid'>
          <div className='navbar-brand' id='home'>
            <img src={logo} alt='Isaac Kimsey logo' />
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <AiOutlineMenu className='hamburger' />
            {/* <span className='navbar-toggler-icon'></span> */}
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto text-center mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  activeClass='active'
                  to='home'
                  spy={true}
   
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='about' spy={true} >
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  to='projects'
                  spy={true}

                >
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link contact-title'
                  to='contact'
                  spy={true}

                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navbar
