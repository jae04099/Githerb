import React, { useContext } from 'react'
import '../../../Graph/Graph.css'
import { UsedLangContext } from '../../../../contexts/plant'

const LGDesc = (value) => {
    const [usedLang, setUsedLang] = useContext(UsedLangContext)
    const circleColor = usedLang[0].datasets[0].backgroundColor[value.value]
    return (
        <div className="lg-desc">
            <span className="circle" style={{ backgroundColor: circleColor }} ></span>
            <div className="desc-word">
                <p className="lang-name">{usedLang[0].labels[value.value]}</p>
                <span className="lang-pc">{usedLang[0].usedper[value.value]}</span>
                <span className="lang-cnt">{usedLang[0].datasets[0].data[value.value]}</span>
            </div>
        </div>
    )
}

export default LGDesc;
