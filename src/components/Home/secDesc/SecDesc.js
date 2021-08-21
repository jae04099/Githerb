import React from 'react'
import './SecDesc.css'
import firstImg from './secImg/secFirst.png'
import secImg from './secImg/secSec.png'
import thirdImg from './secImg/secThird.png'
import fourthImg from './secImg/secFourth.png'

const SecDesc = () => {
    return (
        <>
            <div className="secDescWrap">
                <div className="flexWrap">
                    <div className="descPart"><h2>Monitoring Your Growth</h2></div>
                    <ul>
                        <li>
                            <div className="topWrap">
                                <img src={firstImg} alt="" />
                            </div>
                            <div className="bottomWrap">
                                <span>first</span>
                                <p>Keep commit and spread your job</p>
                            </div>
                        </li>
                        <li>
                            <div className="topWrap">
                                <img src={secImg} alt="" />
                            </div>
                            <div className="bottomWrap">
                            <span>second</span>
                                <p>Various kinds of graph will motivate your dev life</p>
                            </div>
                        </li>
                        <li>
                            <div className="topWrap">
                                <img src={thirdImg} alt="" />
                            </div>
                            <div className="bottomWrap">
                            <span>third</span>
                                <p>Personal level verify your sincerity</p>
                            </div>
                        </li>
                        <li>
                            <div className="topWrap">
                                <img src={fourthImg} alt="" />
                            </div>
                            <div className="bottomWrap">
                            <span>and more...</span>
                                <p>Let people know what plants you collected!</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SecDesc
