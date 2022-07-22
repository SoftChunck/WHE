import React from "react";
import {FaBars} from 'react-icons/fa';
import './Navbar.css'
const Navbar = () => {    
    React.useEffect(()=>{
        var navbtn = document.querySelector('.navbar-toggler');
        var navlist = document.querySelector('.navbar-collapse')
        let show = false;
        navbtn.addEventListener('click',()=>{
            if(!show)
            {
                show = true;
                navlist.classList.add('show');
            }
            else
            {
                show = false;
                navlist.classList.remove('show');
            }
        })
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="container">
                    <img src="assets/images/logo1.png" className="navbar-brand col-1"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars className="text-light" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav  text-center">
                        <li className="nav-item">
                        <a className="nav-link1 active" aria-current="page" href="./">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">Collection</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">Benefits</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link1" href="#">Roadmap</a>
                        </li>
                        <li className="nav-item justify-content-center d-flex">
                        <button className="nav-link1 nav-btn px-4 mx-2" href="#">Mint</button>
                        </li>
                        <li className="nav-item justify-content-center d-flex">
                        <button className="nav-link1  nav-btn px-4 mx-2" href="#">No Wallet</button>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    );
} 
export default Navbar;