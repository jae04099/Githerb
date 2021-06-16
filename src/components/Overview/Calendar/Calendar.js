import React, { useState } from 'react'
import { isSameDay } from 'date-fns'
import ko from 'date-fns/locale/ko'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './Calendar.css'
// Very rough implementation of multiple date selection
function CalendarExample() {
  const [selectedDates, setSelectedDates] = useState([])
  const modifiers = {
    selected: date => selectedDates.some(selectedDate => isSameDay(selectedDate, date))
  }
  const handleDayClick = date => {
    setSelectedDates([...selectedDates, date])
  }
  return (
    <Calendar onDayClick={handleDayClick} modifiers={modifiers} locale={ko} />
  )
}

export default CalendarExample;