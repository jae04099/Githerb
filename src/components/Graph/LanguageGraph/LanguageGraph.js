import React, { useContext } from 'react'
import '../Graph.css'
import { Doughnut } from 'react-chartjs-2';
import { UsedLangContext } from '../../../contexts/plant';
import LGDesc from '../LanguageGraph/LGDesc/LGDesc'

const LanguageGraph = () => {
    const [doughData, setDoughData] = useContext(UsedLangContext)

    return (
        <div className="lg">
            <Doughnut className="doughnut" data={doughData[0]} options={{
                plugins: {
                    legend: {
                        display: false
                    }
                },
                legend: 'none',
                responsive: true,
                maintainAspectRatio: true
            }} />
            <div className="LGDesc-wrap">
                {doughData[0].labels.map((value, index) =>
                    <LGDesc key={index} value={index} />
                )}
            </div>
        </div>
    )
}

export default LanguageGraph;
