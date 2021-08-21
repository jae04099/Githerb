import React from 'react'
import ProcessTable from './ProcessTable/ProcessTable'
import Tier from './Tier/Tier'
import './UserArchive.css'

const UserArchive = () => {
    return (
        <>
            <div className="userArchiveGridWrap">
                <div className="userArchiveFlexWrap">
                    <ProcessTable />
                    <Tier />
                </div>
            </div>
        </>
    )
}

export default UserArchive
