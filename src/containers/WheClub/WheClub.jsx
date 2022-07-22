import React from "react";
import Button_WHE from "../../components/Button_WHE/Button_WHE";
import './WheClub.css'
const WheClub = () => {
    return (
        <div className="WheClub justify-content-center p-5">
            <div className="row justify-content-center align-items-center">
                <img src="assets/images/nft.png" className="col-lg-4 m-5"/>
                <div className="col-lg-7 my-5">
                        <h1 className="d-flex flex-row">WHE CLUB– YOUR KEY TO EXPLORING METAVERSE</h1>
                        <p className="text-start">
                            We believe that one of the most valuable aspects of any community is user generated content. More importantly user generated content that helps the community foster and grow. WHE Metaverse is an interactive 3D universe based in space, with the freedom to explore different virtual worlds and communities, it is not necessarily a game in and of itself. It can instead best be described as a hub for virtual social interaction and expression, and trading and collecting assets within a digital economy, and our WHE Club is the key to unlocking this world. WHE Club NFTs is a limited collection of unique, programmatically generated NFTs hosted on the Polygon blockchain. Each WHE is unique – just like you and programmatically generated from over 200 possible traits, including clothing, city background, expression and more.
                        </p>
                        <Button_WHE data="Read More"></Button_WHE>
                </div>
            </div>
        </div>
    );
} 
export default WheClub;