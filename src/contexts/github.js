import React, { useState, createContext } from 'react';

export const UsedLanguageContext = createContext();

export const UsedLanguageProvider = props => {
    const [usedLanguage, setUsedLanguage] = useState([
        {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            usedper: [
                '36%',
                '42%',
                '22%'
            ],
            datasets: [{
                data: [78769, 29438, 7769],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        }

    ]);
    return (
        <UsedLanguageContext.Provider value={[usedLanguage, setUsedLanguage]}>
            {props.children}
        </UsedLanguageContext.Provider>
    )
}