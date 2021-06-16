import React, { useContext } from 'react'
import '../Graph.css'
import { Doughnut } from 'react-chartjs-2';
import { UsedLanguageContext } from '../../../contexts/github'
import LGDesc from '../LanguageGraph/LGDesc/LGDesc'

const LanguageGraph = () => {
    const [usedLanguage, setUsedLanguage] = useContext(UsedLanguageContext)
    return (
        <div className="lg">
            <Doughnut data={usedLanguage[0]}/>
            <div className="LGDesc-wrap">
                {usedLanguage[0].labels.map((value, index) =>
                    <LGDesc key={index} value={index} />
                )}
            </div>
        </div>
    )
}

export default LanguageGraph;
