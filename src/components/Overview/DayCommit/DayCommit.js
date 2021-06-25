import React, { useState, useContext, useEffect } from 'react'
import DayCommitGraph from '../../Graph/DayCommitGraph'
import { PlantInfoContext } from '../../../contexts/plant'


const makeDayCommitFormat = (commitList) => {
  const newArr = [0, 0, 0, 0];
  for (let { date } of commitList) {
    const [day, time] = date.split('T');
    let x = time.substr(0, 5);

    if ("06:00" <= x && x < "12:00") newArr[0]++;
    else if ("12:00" <= x && x < "18:00") newArr[1]++;
    else if ("18:00" <= x && x < "24:00") newArr[2]++;
    else if ("00:00" <= x && x < "6:00") newArr[3]++;
  }
  return newArr;
}

export default function DayCommit() {
  const [plantInfo, setPlantInfo] = useContext(PlantInfoContext);
  const [dayCommitData, setDayCommitData] = useState();

  useEffect(() => {
    setDayCommitData(makeDayCommitFormat(plantInfo.commit))
  }, [plantInfo]);


  return (
    <div>
      <DayCommitGraph data={dayCommitData}></DayCommitGraph>
    </div>
  )
}
