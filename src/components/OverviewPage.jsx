import React, { useState } from 'react';
import '../css/overview.css';

function OverviewPage() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div>
            <nav className={`top-nav ${menuVisible ? 'visible' : ''}`}>
                <div className="nav-wrapper">
                    <div className="menu-button" onClick={toggleMenu}>
                        ☰
                    </div>
                    <ul className={`nav-list ${menuVisible ? 'display' : ''}`}>
                        <li><a href="/home">Home</a></li>
                        <li><a href="">Chat</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a href="">Translator</a></li>
                        <li><a href="/faqs">FAQs</a></li>
                    </ul>
                </div>
            </nav>
            <div className="content-wrapper">
                <h1>About Us</h1>
                <div className="details-section">
                    <h2>Our Identity</h2>
                    <p>
                        At NutriTech, we are committed to enhancing healthy living through cutting-edge technology. Our team of specialists is dedicated to developing innovative solutions that empower individuals to make well-informed nutritional choices.
                    </p>
                    <h2>Our Goal</h2>
                    <p>
                        Our goal is to simplify and enrich the experience of healthy eating. By utilizing artificial intelligence and comprehensive data analysis, we deliver personalized advice and essential information about various fruits and their health benefits.
                    </p>
                    <h2>Our Services</h2>
                    <p>
                        NutriTech offers a wide array of features to assist you on your health journey. From in-depth fruit details to interactive tools, we are here to guide you in making the best decisions for your lifestyle.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OverviewPage;
