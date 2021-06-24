import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TimeLine from './TimeLine/TimeLine'
import { PlantInfoContext } from '../../../contexts/plant'
import 'react-vertical-timeline-component/style.min.css';

const TimeLineLists = () => {
    const [plantInfo, setPlantInfo] = useContext(PlantInfoContext)
    return (
        <>
            <VerticalTimeline className="bgc">
                {plantInfo.commit.map((value, index) => <TimeLine key={index} value={index} />)}
            </VerticalTimeline>
        </>
    )
}

export default TimeLineLists