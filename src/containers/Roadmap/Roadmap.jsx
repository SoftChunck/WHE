import React from "react";
import './Roadmap.css'
import { useState } from "react";
import Roadmap_component from "../../components/Roadmap_component/Roadmap_component";
const Roadmap = () => {
    const [road_mapData,setroad_mapData] = new useState([
        {desc:'2021 It will be listing at Pancake Swap in third quarter of 2021.'},
        {desc:'2021 Listing at Coin Market Cap and Coin Gecko in the last quarter of 2021.'},
        {desc:'2022 Worthwhile Coin will be used with various well known e-commerce portals globally in the 1st quarter of 2022..'},
        {desc:'2022 Worthwhile Coin will be launched in their own exchange in the 2nd quarter of 2022.'},
        {desc:'2022 It will be listing at various most popular exchanges in 3rd Quarter of 2022.'},
        {desc:'2022 Worthwhile Coin will be attached with block chain Gaming platform in the 4th quarter of 2022.'}
    ])
    return (
        <div className="RoadMap p-5">
            <h4 className="text-center  fs-3">NEW ROADMAP</h4>
            <h1 className="text-center  fs-1">NFTs Roadmap Project</h1>
            <div className="row justify-content-center">
                <Roadmap_component data={road_mapData[0]}></Roadmap_component>
                <Roadmap_component data={road_mapData[1]}></Roadmap_component>
                <Roadmap_component data={road_mapData[2]}></Roadmap_component>
                <Roadmap_component data={road_mapData[3]}></Roadmap_component>
                <Roadmap_component data={road_mapData[4]}></Roadmap_component>
                <Roadmap_component data={road_mapData[5]}></Roadmap_component>
            </div>
        </div>
    );
} 
export default Roadmap;