import React, { useContext, useEffect, useState } from 'react'
import ExpGraph from "../../Graph/ExpGraph";
import { PlantInfoContext } from '../../../contexts/plant'
import './Exp.css'

const makeGraphObj = (list) => {
  const map = new Map();
  let count = 1;
  for (let item of list) {
    const date = item.date.split('T');
    // if (map.has(date[0])) map.set(date[0], map.get(date[0]) + 1);
    // else map.set(date[0], map.get(date[0]) + 1);
    map.set(date[0], count++);
  }

  const obj = { id: "ExpGraph", data: [] }

  for (let [key, value] of map) {
    obj.data.push({ x: key, y: value });
  }

  const data = [];
  data.push(obj);
  return data;
}

export default function Exp() {
  const [plantInfo, setPlantInfo] = useContext(PlantInfoContext);
  const [ExpData, setExpData] = useState({});

  useEffect(() => {
    setExpData(makeGraphObj(plantInfo.commit))
  }, [plantInfo]);

  return (
    <>
      <div className="Exp_Container">
        <ExpGraph data={ExpData} />
        <p className="commitHeader">commit</p>
      </div>
    </>
  )
}
