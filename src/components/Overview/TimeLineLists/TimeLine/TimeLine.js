import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CommitContext } from '../../../../contexts/github'

const TimeLine = ({ value }) => {
    const [commit, setCommit] = useContext(CommitContext)
    const date = commit[value].commit.author.date
    const finalDate = date.substr(0, 10);
    console.log(finalDate)
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
                <h3 className="vertical-timeline-element-title">Commit Message: {commit[value].commit.message}</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">{commit[0].commit.committer.name}</h4> */}
                <p>
                    Committer: {commit[value].commit.committer.name}
                </p>
            </VerticalTimelineElement>
        </div>
    )
}

export default TimeLine
