import React from 'react';
// import 'boxicons'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-icons'>
              <box-icon type='logo' name='facebook-circle'></box-icon>
              <box-icon name='youtube' type='logo' ></box-icon>
              <box-icon name='twitter' type='logo' ></box-icon>
              <box-icon name='instagram' type='logo' ></box-icon>
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Centre</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className='copyright-text'> 1997-2023 Netflix, Inc.</p>
        </div>
    );
};

export default Footer;