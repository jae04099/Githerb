import React, { useState, useContext } from 'react'
import { PlantInfoContext } from '../../../contexts/plant'

const RepoDescription = () => {
    const [plantInfo, setPlantInfo] = useContext(PlantInfoContext)
    return (
        <div>
             <h1>{plantInfo.repoName}</h1>
             <p>{plantInfo.repoDesc}</p>
        </div>
    )
}

export default RepoDescription
