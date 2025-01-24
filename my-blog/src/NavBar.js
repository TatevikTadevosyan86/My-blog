import { Link } from "react-router-dom";
import { useState } from "react";



const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen (!isOpen);
    };
    const closeMenu = () =>{
        setIsOpen(false)
    }
    return(
        <nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={isOpen? "show": ""}>
                <li>
                    <Link to='/' onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to='/about' onClick={closeMenu}>About</Link>
                </li>
                <li>
                    <Link to='/portfolio' onClick={closeMenu}>Portfolio</Link>
                </li>
                <li>
                    <Link to='/contact' onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;