import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TimeLine from './TimeLine/TimeLine'
import { CommitContext } from '../../../contexts/github'
import 'react-vertical-timeline-component/style.min.css';

const TimeLineLists = () => {
    const [commit, setCommit] = useContext(CommitContext)
    return (
        <>
            <VerticalTimeline className="bgc">
                {commit.map((value, index) => <TimeLine key={index} value={index} />)}
            </VerticalTimeline>
        </>
    )
}

export default TimeLineLists