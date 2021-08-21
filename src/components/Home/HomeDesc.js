import React from 'react'
import './HomeDesc.css'
import FirstDesc from './firstDesc/FirstDesc'
import SecDesc from './secDesc/SecDesc'
import ThirdDesc from './thirdDesc/ThirdDesc'
import FourthDesc from './fourthDesc/FourthDesc'

const HomeDesc = () => {
    return (
        <>
            <div className="descWrap">
                <FirstDesc/>
                <SecDesc/>
                <ThirdDesc/>
                <FourthDesc/>
            </div>
        </>
    )
}

export default HomeDesc;
