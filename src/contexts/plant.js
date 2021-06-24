import React, { useState, useEffect, createContext } from 'react';
// import axios from "axios";
import plantData from '../json/plant.json'

export const PlantInfoContext = createContext();
export const PlantInfoProvider = props => {
     const [plantInfo, setPlantInfo] = useState(plantData)
    // useEffect(() => {
    //     let url = "./plant.json";
    //     axios
    //       .get(url)
    //       .then(function (response) {
    //         setPlantInfo(response);
    //         console.log(response)
    //       })
    //       .catch((error) => console.log(error));
    //   }, []);
    return (
        <PlantInfoContext.Provider value={[plantInfo, setPlantInfo]}>
            {props.children}
        </PlantInfoContext.Provider>
    )
}