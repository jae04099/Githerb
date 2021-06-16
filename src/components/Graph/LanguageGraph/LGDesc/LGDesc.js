import React, { useContext } from 'react'
import '../../../Graph/Graph.css'
import { UsedLanguageContext } from '../../../../contexts/github'

const LGDesc = (value) => {
    const [usedLanguage, setUsedLanguage] = useContext(UsedLanguageContext)
    const circleColor = usedLanguage[0].datasets[0].backgroundColor[value.value]
    return (
        <div className="lg-desc">
            <span className="circle" style={{ backgroundColor: circleColor }} ></span>
            <div class="desc-word">
                <p className="lang-name">{usedLanguage[0].labels[value.value]}</p>
                <span className="lang-pc">{usedLanguage[0].usedper[value.value]}</span>
                <span className="lang-cnt">{usedLanguage[0].datasets[0].data[value.value]}</span>
            </div>
        </div>
    )
}

export default LGDesc;
