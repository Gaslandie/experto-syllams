import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
const MainLogo = `${import.meta.env.BASE_URL}images/experto-syllams-horizontal.webp`;
const DarkLogo = `${import.meta.env.BASE_URL}images/experto-syllams-horizontal.webp`;
const StickyLogo = `${import.meta.env.BASE_URL}images/experto-syllams-horizontal.webp`;
const MobileLogo = `${import.meta.env.BASE_URL}images/experto-syllams-horizontal.webp`;

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
                    <li><i className="fa-solid fa-envelope"/> <a href="mailto:manager@experto-syllams.com">manager@experto-syllams.com</a>
                    </li>
                    <li><i className="fa-solid fa-location-dot"/> Guinée, Conakry</li>
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
                            <img src={isDarkMode ? DarkLogo : MainLogo} alt="Groupe Experto-Syllams" title="GROUPE EXPERTO-SYLLAMS" fetchPriority="high" style={{ width: 220, height: 60, objectFit: "contain", backgroundColor: "white" }}/>
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
                            <a href="tel:+224628216975">+224 628 21 69 75</a>
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
                    <div className="nav-logo"><Link to="/"><img src={MobileLogo} alt="Groupe Experto-Syllams" style={{ width: 200, height: 55, objectFit: "contain", backgroundColor: "white" }}/></Link></div>
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
                        <a href="tel:+224628216975">+224 628 21 69 75</a>
                        </div>
                    </li>
                    <li>
                        <div className="contact-info-box">
                        <span className="icon lnr-icon-envelope1"></span>
                        <span className="title">Send Email</span>
                        <a href="mailto:manager@experto-syllams.com">manager@experto-syllams.com</a>
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
                    <form onSubmit={event => { event.preventDefault(); window.location.assign(`${import.meta.env.BASE_URL}recherche`); }}>
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
                            <img src={isDarkMode ? DarkLogo : StickyLogo} alt="Groupe Experto-Syllams" style={{ width: 200, height: 48, maxHeight: 48, objectFit: "contain", backgroundColor: "white" }}/>
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