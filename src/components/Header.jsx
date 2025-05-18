import { Link } from 'react-router-dom';
import '../style/Header.css';
import '../style/Srollheadr'
const Header = () => {
    return (
        <header className="myHeader">
            <Link to="/" className="logo" alt="logo">HUY PHAM</Link>
            <input type="checkbox" name="" id="check"></input>
            <label htmlFor="check" className="icons">
                <i className="bx bx-menu" id="menu-icon" />
                <i className="bx bx-x" id="close-icon" />
            </label>
            <nav className="myNavbar flex">
                <Link to='/' alt=''>Home</Link>
                <Link to='/about' alt=''>About</Link>
                <Link to='/front-end' alt=''>Front End</Link>
                <Link to='/bim-cad' alt=''>Bim CAD</Link>
                <Link to='/certificate' alt=''>Certificate</Link>
                <Link to='/contact' alt=''>Contact</Link>
                <button className='change--theme'>
                    <i className='bx bx-moon'></i>
                </button>

            </nav>
        </header>
    );
}

export default Header;