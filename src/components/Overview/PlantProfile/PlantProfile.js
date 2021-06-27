import React, { useContext, useEffect, useState } from 'react'
import './PlantProfile.css'
import { PlantInfoContext } from '../../../contexts/plant'
import Button from '../../common/Button'

export default function PlantProfile() {
  const [plantInfo, setPlantInfo] = useContext(PlantInfoContext);
  const [plantProfile, setPlantProfile] = useState({});

  useEffect(() => {
    let today = new Date();


    setPlantProfile((prev) => ({
      ...prev,
      plantName: plantInfo.plantName,
      plantLevel: plantInfo.plantLevel,
      startDate: plantInfo.startDate,
      deadLine: plantInfo.deadLine,
    }))
  }, [plantInfo]);

  return (
    <div className="plantContainer">
      <div className="plantImg" />
      <h3 className="plantName">{plantProfile.plantName}</h3>
      <p className="plantLevel">{`Lv. ${plantProfile.plantLevel}`}</p>
      <p className="plantDate">{`${plantProfile.startDate} ~ ${plantProfile.deadLine}`}</p>
      <Button white={true} value={"D-20"} />
      <Button value={"View Githerb Repo"} />
    </div>
  )
}
