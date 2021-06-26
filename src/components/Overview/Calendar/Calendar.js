import React, { useState, useContext, useEffect } from 'react'
import { isSameDay } from 'date-fns'
import ko from 'date-fns/locale/ko'
import { Calendar } from 'react-nice-dates'
import { PlantInfoContext } from '../../../contexts/plant'
import 'react-nice-dates/build/style.css'
import './Calendar.css'


function CalendarExample() {
  const [plantInfo, setPlantInfo] = useContext(PlantInfoContext)
  const [comDateArr, setComDateArr] = useState([])

  const modifiers = {
    selected: date => comDateArr.some(selectedDate => 
      isSameDay(selectedDate, date)
      )
  }

  // const handleDayClick = date => {
  //   const testDate = date.toString().substr(4,11)
  //   console.log(Date.parse(comDateArr[0]))
  //   console.log(comDateArr[0])
  //   console.log(new Date(1617321600000))
  //   moment(testDate, "MMM DD YYYY").format("YYYY-MM-DD")
  //   //Tue Jun 08 2021 00:00:00 GMT+0900 (대한민국 표준시)
  //   setSelectedDates([...selectedDates, date])
  // }
  
  useEffect(() => {
    setComDateArr(getComDate(plantInfo.commit))
  }, [])

  
  function getComDate(comDate) {
    const comDateArr = []
    for (let i = 0; i < comDate.length; i++) {
      const date = Date.parse(comDate[i].date.substr(0, 10))
      const finDate = new Date(date)
      comDateArr.push(finDate)
    }
    return comDateArr;
  }
  
  return (
    <Calendar modifiers={modifiers} locale={ko} />
  )
}

export default CalendarExample;
