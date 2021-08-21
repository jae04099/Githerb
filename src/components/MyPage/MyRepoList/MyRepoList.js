import React from 'react'
import MyRepoItems from './MyRepoListItem/MyRepoListItem'
import './MyRepoList.css'

const MyRepoList = () => {
    return (
        <>
            <div className="myRepoListWrap"><h5 className="compTitle">My Repositories</h5><div className="repoItemWrap"><MyRepoItems /><MyRepoItems /><MyRepoItems /><MyRepoItems /><MyRepoItems /><MyRepoItems /><MyRepoItems className="last-comp"/></div></div>
        </>
    )
}

export default MyRepoList;