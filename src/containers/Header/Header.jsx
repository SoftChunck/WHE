import React from "react";
import Button_WHE from "../../components/Button_WHE/Button_WHE";
import './Header.css'
const Header = () => {
    return (
        <div className="Header text-white p-5">
            <div class="row justify-content-around">
                <div class="col-md-5 mx-5 pt-5">
                    <h1>Welcome To WHE NFT</h1>
                    <p>An exclusive private-members club by Swap. Swap NFTs in a decentralized environment, with an
                        escrow mechanism
                        facilitating swaps between users. On WHE NFT, every swap is resolved to the full satisfaction of
                        participants.</p>
                    <p>A private and unique collection of 10000 NFT, which act as a membership for the WHE Club. WHE is
                        next-generation decentralized NFT platform for all types of marketplaces catering to the growing
                        world of
                        digital artists, creators, and collectors. WHE NFT wants to be the first truly community-run
                        marketplace and
                        believes that the diversity will make it an eccent
                        ric and truly one-of-a-kind project in the world</p>
                </div>
                <div class="col-md-4 d-flex justify-content-center my-5">

                    <div class="three-d-container">
                        <input type="radio" checked class="three-d-bullet a" name="three-d" />
                        <input type="radio" class="three-d-bullet b" name="three-d" />
                        <input type="radio" class="three-d-bullet c" name="three-d" />
                        <input type="radio" class="three-d-bullet d" name="three-d" />
                        <input type="radio" class="three-d-bullet e" name="three-d" />
                        <input type="radio" class="three-d-bullet f" name="three-d" />
                        <div class="three-d-cube">
                            <figure class="three-d-item">
                                <img src="/assets/images/cube1.png" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/assets/images/cube2.png" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/assets/images/cube3.png" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/assets/images/cube4.png" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/assets//images/cube5.png" alt="" />
                            </figure>
                            <figure class="three-d-item">
                                <img src="/assets/images/cube2.png" alt="" />
                            </figure>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
} 
export default Header;