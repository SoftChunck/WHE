import React from "react";
import { useState } from "react";
import Benefits from "../../components/Benefits/Benefits";
import './Speciality.css'
const Speciality = () => {
    const [benefit_list,setbenefit_list] = new useState([
        {heading:'OWN THE FULL COMMERCIAL RIGHTS',desc:'NFTs prove ownership of a unique digital asset like art, music, collectibles, videos, or anything else with blockchain technology, if you buy a physical painting, you know it’s real because you see the artist’s signature on the canvas. Somebody can photocopy the painting, but they don’t own it — you do. Before NFTs, digital assets were like photocopies: When you buy a WHE Club NFT, the artwork is yours to keep or use in advertising, whether you plan to sell it or not.'},
        {heading:'EXPLORE THE METAVERSE WITH US',desc:'The metaverse is an online, three-dimensional universe that combines multiple virtual spaces. It can be compared to a future version of the internet. With metaverse, users will be able to collaborate, meet, play games, and socialize in these 3D spaces. By joining the WHE Club, you will have access to every metaverse we enter. Plus, there will be additional perks within our metaverse Private members club for WHE Club NFT holders.'},
        {heading:'DISPLAY ART IN HIGH RESOLUTION',desc:'An NFT token has metadata encoded permanently on the blockchain in a format that is "non fungible", it includes a URI which points to a unique JPEG, a piece of art which is the visual representation of this token, All WHE Club NFTs are available as high-resolution jpegs, which allows you to print a high-quality physical copy or display it on screen.'},
        {heading:'BE PART OF A GLOBAL COMMUNITY',desc:'We are on a journey to create the next generation of the internet that will have a more decentralized architecture, giving control back to users, be a part of a global community that supports and empowers each other as we embark on this thrilling Metaverse journey.'}
    ]);
    return (
        <div className="Speciality justify-content-center text-center">
            <h3 className="pt-5">OUR SPECIALITY</h3>
            <h1>BENEFITS OF WHE CLUB NFTs</h1>
            <p>Holders of WHE NFTs will get exclusive membership to WHE club a private members only club in the metaverse</p>
            <div className="row gap-5 justify-content-center py-5">                
                <Benefits data={benefit_list[0]}></Benefits>
                <Benefits data={benefit_list[1]}></Benefits>
                <Benefits data={benefit_list[2]}></Benefits>
                <Benefits data={benefit_list[3]}></Benefits>
            </div>
        </div>
    );
} 
export default Speciality;