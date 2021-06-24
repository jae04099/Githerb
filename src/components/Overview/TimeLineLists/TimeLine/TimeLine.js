import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PlantInfoContext } from '../../../../contexts/plant'

const TimeLine = ({ value }) => {
    const [plantInfo, setPlantInfo] = useContext(PlantInfoContext)
    const date = plantInfo.commit[value].date
    const finalDate = date.substr(0, 10);
    return (
        <div className="timeline">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '5px solid #0CDAAC', background: '#fff', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date={`Date: ${finalDate}`}
                iconStyle={{ background: '#0CDAAC', color: '#fff' }}
                position={'right'}
            >
                <h3 className="vertical-timeline-element-title">Message: {plantInfo.commit[value].message}</h3>
                <p>
                    Committer: {plantInfo.commit[value].committer}
                </p>
            </VerticalTimelineElement>
        </div>
    )
}

export default TimeLine
