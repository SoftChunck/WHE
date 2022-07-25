import React, { useState } from "react";
import './Collections.css'
import Button_WHE from "../../components/Button_WHE/Button_WHE";
import Currency from "../../components/Currency/Currency";
const Collections = () => {
    const [currency_list,setcurrency_list] = new useState([
        {image:'assets/images/bnb.png',heading:'Binance Coin',price:'USD 263.600'},
        {image:'assets/images/logo1.png',heading:'WHE',price:'USD 0.002'}
    ])
    return (
        <div className="collection">
            <div className="collection-header justify-content-center p-5">
                    <h4 className="text-center">NEW COLLECTION</h4>
                    <h1 className="text-center">All Collections</h1>
            </div>
            <div className="collection-mint p-5">                    
                    <h1 className="text-center text-white">MINT</h1>
                    <div className="row justify-content-around p-5 align-items-center">
                        <img src="assets/images/collection-lion.png" className="col-lg-3 col-md-3 lion-img"/>
                        <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center py-5">
                            <input type="text" className="bg-transparent fs-1 collection-input mb-5"/>
                            <div className="d-flex flex-row align-items-center justify-content-around my-3">
                                <Button_WHE data="Mint with BNB"></Button_WHE>
                                <p className="mx-5 p-text">Price : 0 BND</p>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-around my-3">
                                <Button_WHE data="Mint with WHE"></Button_WHE>
                                <p className="mx-5 p-text">Price : 0 WHE</p>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-around my-3">
                                <Button_WHE data="Mint with Busd"></Button_WHE>
                                <p className="mx-5 p-text">Price : 0 BUSD</p>
                            </div>                            
                        </div>
                    </div>
            </div>
            <div className="collection-mint justify-content-center p-5">
                    <h4 className="text-center fs-3">CRYPTOCURRENCIES</h4>
                    <h1 className="text-center fs-1">Top Cryptocurrencies</h1>
                    <div className="row justify-content-center gap-5 p-5">
                        <Currency data={currency_list[0]}></Currency>
                        <Currency data={currency_list[1]}></Currency>
                    </div>
            </div>
        </div>
    );
} 
export default Collections;