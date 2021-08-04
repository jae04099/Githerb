import React from 'react'
import Button from '../../common/Button'
import './FirstDesc.css'
import firstFlower from './firstFlower.jpg'

const FirstDesc = () => {
    return (
        <>
            <div className="firstDescWrap">
                <div className="flexWrap">
                    <div className="descPart">
                        <h1>Growing <br />your own plants with <br /><span>GitHerb</span>.</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Aspernatur explicabo quia praesentium!</p>
                        <Button  value={"Join Now"}></Button>
                    </div>

                    <div className="nonDescPart">
                        <div className="firstImg">
                            <img src={firstFlower} alt="flower" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstDesc
