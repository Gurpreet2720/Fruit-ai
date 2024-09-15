import React from 'react';
import '../css/Main.css';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="main-container">
            <h1>NutriTech</h1>
            <p className="slogan">"Stay Healthy!"</p>
            <p className="greeting">Welcome, Mr. User!</p>
            <div className="options-grid">
                <Link to="/" className="option-box chat">Chat</Link>
                <Link to="/" className="option-box translator">Translator</Link>
                <Link to="/" className="option-box faqs">FAQs</Link>
                <Link to="/aboutUs" className="option-box about">About</Link>
                <Link to="/" className="option-box login">Login/Signup</Link>
            </div>
        </div>
    );
}
export default Main;