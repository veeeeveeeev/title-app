import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to="/" className='logo'>
                    <p>LOGO</p>
                </Link>
                <Link to="/">
                    <p>HOME</p>
                </Link>
                <Link to="/content">
                    <p>CONTENT</p>
                </Link>
                <Link to="/about">
                    <p>ABOUT</p>
                </Link>
                <Link to="/contact">
                    <p>CONTACT</p>
                </Link>
                {/* <Link to="/" className='logo'>
                    <p>SEARCH</p>
                </Link> */}
            </div>
        </header>
    )
};

export default Navbar;