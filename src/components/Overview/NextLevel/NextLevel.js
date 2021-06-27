import React, { useContext, useEffect, useState } from 'react'
import { PlantInfoContext } from '../../../contexts/plant'
import NextLevelGraph from '../../Graph/NextLevelGraph'

export default function NextLevel() {
  const [plantInfo, setPlantInfo] = useContext(PlantInfoContext);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    setLevel(parseInt((plantInfo.commitCount / plantInfo.Totalcommit) * 100));
  }, [plantInfo])
  return (
    <div>
      <p style={{ color: "#767676", fontWeight: "bold", fontSize: "10px" }}>{"꽃이 예쁘게 피기까지"}</p>
      <h3 style={{ color: "#28B797", margin: "15px 0 10px 0", fontWeight: "bold" }}>{`${level}% complete`}</h3>
      <NextLevelGraph data={level} />
    </div >
  )
}
