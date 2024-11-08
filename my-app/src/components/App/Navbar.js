import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const CloseMobileMenu = () => setClick(false);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TREL <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {/* User can toggle between meun and page */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                    </div>
                    {/* After a user clicks a meun item, the meun closes */}
                    <ul className={click ? 'nav-meun active' : 'nav-meun'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={CloseMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={CloseMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={CloseMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={CloseMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        
        </>

    )
}

export default Navbar