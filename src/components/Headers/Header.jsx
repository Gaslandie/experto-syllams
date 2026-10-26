import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
const MainLogo = "/images/experto-syllams.jpeg";
const DarkLogo = "/images/experto-syllams.jpeg";
const StickyLogo = "/images/experto-syllams.jpeg";
const MobileLogo = "/images/experto-syllams.jpeg";

const Header = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
        useEffect(() => {
            const checkDarkMode = () => {
            const hasDarkClass = document.body.classList.contains('dark-mode');
            setIsDarkMode(hasDarkClass);
        };
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
            observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class'],
        });
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            {/* Header Top */}
            <div className="header-top">
                <div className="auto-container">
                <div className="top-left">
                    {/* Info List */}
                    <ul className="info-list">
                    <li><i className="fa-solid fa-envelope"/> <Link to="/contacts">Email: to be confirmed</Link>
                    </li>
                    <li><i className="fa-solid fa-location-dot"/> Address: to be confirmed</li>
                    </ul>
                </div>

                <div className="top-right">
                    <ul className="useful-links">
                    <li><Link to="/page-about">About</Link></li>
                    <li><Link to="/page-faq">Faqs</Link></li>
                    <li><Link to="/page-contact">Contact</Link></li>
                    </ul>
                    <ul className="top-social-icon">
                    <li><Link to="/contacts"><i className="fa-brands fa-facebook-f"/></Link></li>
                    <li><Link to="/contacts"><i className="fa-brands fa-instagram"/></Link></li>
                    <li><Link to="/contacts"><i className="fa-brands fa-x-twitter"/></Link></li>
                    <li><Link to="/contacts"><i className="fa-brands fa-linkedin-in"/></Link></li>
                    </ul>
                </div>
                </div>
            </div>
            {/* <!-- Header Top --> */}

            {/* <!-- Main box --> */}
            <div className="main-box">
                <div className="logo-box">
                    <div className="logo">
                        <Link to="/">
                            <img src={isDarkMode ? DarkLogo : MainLogo} alt="Groupe Experto-Syllams" title="GROUPE EXPERTO-SYLLAMS" style={{ width: 170, height: 60, objectFit: "contain" }}/>
                        </Link>
                    </div>
                </div>
                {/* Nav Box */}
                <div className="nav-outer">
                    <nav className="nav main-menu">
                        <NavLinks />
                    </nav>
                    {/* Main Menu End */}
                </div>
                <div className="outer-box">
                    <div className="info-box">
                        <div className="call-info">
                        <i className="fa-solid fa-phone ring__animation"/>
                        <div>
                            <h6 className="title">Phone:</h6>
                            <Link to="/contacts">To be confirmed</Link>
                        </div>
                        </div>
                        <Link className="btn-two" to="/page-contact">Contact Now</Link>
                    </div>
                    <div className="mobile-nav-toggler d-block d-lg-none" onClick={handleOpen}><i className="icon lnr-icon-bars"/></div>
                    {/* Mobile Nav toggler */}
                </div>
            </div>
            <div className="auto-container">
                {/* Mobile Menu */}
                <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove} />
                <nav className="menu-box">
                    <div className="upper-box">
                    <div className="nav-logo"><Link to="/"><img src={MobileLogo} alt="Groupe Experto-Syllams" style={{ width: 150, height: 50, objectFit: "contain" }}/></Link></div>
                    <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times"/></div>
                    </div>
                <ul className="navigation clearfix d-block d-lg-none">
                    <MobileMenu/>
                </ul>
                <div className="content-box d-none d-lg-block">
                    <h4 className="title">About Us</h4>
                    <p className="text">GROUPE EXPERTO-SYLLAMS brings together six firms in audit, consulting and training.</p>
                </div>
                    <ul className="contact-list-one">
                    <li>
                        <div className="contact-info-box">
                        <i className="icon lnr-icon-phone-handset"/>
                        <span className="title">Call Now</span>
                        <Link to="/contacts">To be confirmed</Link>
                        </div>
                    </li>
                    <li>
                        <div className="contact-info-box">
                        <span className="icon lnr-icon-envelope1"></span>
                        <span className="title">Send Email</span>
                        <Link to="/contacts">To be confirmed</Link>
                        </div>
                    </li>
                    <li>
                        <div className="contact-info-box">
                        <span className="icon lnr-icon-clock"></span>
                        <span className="title">Opening Hours</span>
                        Opening hours: to be confirmed
                        </div>
                    </li>
                    </ul>
                    <ul className="social-links">
                    <li><Link to="/"><i className="fab fa-x-twitter"/></Link></li>
                    <li><Link to="/"><i className="fab fa-facebook-f"/></Link></li>
                    <li><Link to="/"><i className="fab fa-pinterest"/></Link></li>
                    <li><Link to="/"><i className="fab fa-instagram"/></Link></li>
                    </ul>
                </nav>
                </div>
                <div className="search-popup">
                <span className="search-back-drop" onClick={handleToggle}></span>
                <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
                <div className="search-inner">
                    <form onSubmit={event => { event.preventDefault(); window.location.assign("/recherche"); }}>
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search..." required=""/>
                            <button type="submit"><i className="fa fa-search"/></button>
                        </div>
                    </form>
                </div>
                </div>
                {/* <!-- End Header Search --> */}

                {/* <!-- Sticky Header  --> */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={isDarkMode ? DarkLogo : StickyLogo} alt="Groupe Experto-Syllams"/>
                        </Link>
                    </div>
                    <div className="nav-outer">
                        <nav className="main-menu">
                        <div className="navbar-collapse show collapse clearfix">
                            <NavLinks/>
                        </div>
                        </nav>
                        {/* <!--Mobile Navigation Toggler--> */}
                        <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
        </>
    );
};

export default Header;