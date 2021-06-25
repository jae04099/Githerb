import React, { useState, useEffect, createContext } from 'react';
import plantData from '../json/plant.json'

export const PlantInfoContext = createContext();
export const PlantInfoProvider = props => {
    const [plantInfo, setPlantInfo] = useState(plantData)
    return (
        <PlantInfoContext.Provider value={[plantInfo, setPlantInfo]}>
            {props.children}
        </PlantInfoContext.Provider>
    )
}

export const UsedLangContext = createContext();
export const UsedLangProvider = props => {
    let doughFormat = [
        {
            labels: [
            ],
            usedper: [
            ],
            datasets: [{
                data: [],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#56ff64',
                    '#bb56ff'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#56ff64',
                    '#bb56ff'
                ]
            }]
        }
    ]

    const [doughData, setDoughData] = useState(doughFormat)
    const { langArr, percentageArr, usedLineArr } = extractData(plantData.comLang);

    // useMemo, currying () => () => {}

    useEffect(() => {
        const newObj = [{
            ...doughData[0],
            labels: [...langArr],
            usedper: [...percentageArr],
            datasets: [{ ...doughData[0].datasets[0], data: [...usedLineArr] }]
        }]
        setDoughData([...newObj]);
    }, [])

    return (
        <UsedLangContext.Provider value={[doughData, setDoughData]}>
            {props.children}
        </UsedLangContext.Provider>
    )
}

function extractData(comLang) {
    const langArr = [];
    const percentageArr = [];
    const usedLineArr = [];

    for (let i = 0; i < comLang.length; i++) {
        const { lang, percentage, usedLine } = comLang[i];
        langArr.push(lang)
        percentageArr.push(percentage)
        usedLineArr.push(usedLine);
    }
    return { langArr, percentageArr, usedLineArr };
}
