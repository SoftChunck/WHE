import React from "react";
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="footer p-5 justify-content-center">
            <div className="px-5 footer-body row align-items-center justify-content-center gy-5 ">
                <div className="col-lg-3 col-md-5 flex-column d-flex align-items-center">
                    <img src="assets/images/logo1.png" className="col-6"/>
                    <div className="col-10 d-flex flex-row justify-content-around mt-4">
                        <FaFacebookF className="footer-icons p-2 fs-1"></FaFacebookF>
                        <FaTwitter  className="footer-icons p-2 fs-1"></FaTwitter>
                        <FaInstagram  className="footer-icons p-2 fs-1"></FaInstagram>
                        <FaWhatsapp  className="footer-icons p-2 fs-1"></FaWhatsapp>
                    </div>
                </div>
                <div className="col-lg-3 col-md-5 flex-column d-flex text-center">
                    <h1 className="white-text">Quick links</h1>
                    <a className="color-dark">Home</a>
                    <a className="color-dark">About Us</a>
                    <a className="color-dark">Benefits</a>
                    <a className="color-dark">Collect</a>
                </div>
                <div className="col-lg-3 col-md-5 flex-column d-flex text-center">
                    <h1 className="white-text">Market Place</h1>
                    <a className="color-dark">Roadmap</a>
                    <a className="color-dark">Mint</a>
                    <a className="color-dark">Privacy-Policy</a>
                    <a className="color-dark">Terms & Conditions</a>
                </div>
                <div className="col-lg-3 col-md-5 flex-column d-flex text-center">
                    <h1 className="white-text">About Us</h1>
                    <p className="white-text">Metaverse is a wide new world with endless possibilities and new experiences, and our WHE Club is the key to unlocking this world.</p>
                </div>
            </div>
        </div>
    );
} 
export default Footer;