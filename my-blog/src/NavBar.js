import { Link } from "react-router-dom";
import { useState } from "react";



const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen (!isOpen);
    };
    return(
        <nav>
            <div className="hamburger" onToggle={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;