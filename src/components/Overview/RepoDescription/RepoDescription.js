import React, { useState, useContext } from 'react'
import { PlantInfoContext } from '../../../contexts/plant'
import './RepoDescription.css'

const RepoDescription = () => {
    const [plantInfo, setPlantInfo] = useContext(PlantInfoContext)
    return (
        <div className="rp-desc-wrap">
             <h1>🌿 {plantInfo.repoName}</h1>
             <p>{plantInfo.repoDesc}</p>
        </div>
    )
}

export default RepoDescription
