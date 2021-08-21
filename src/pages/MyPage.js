import React from 'react'
import './MyPage.css'
import MyRepoLists from '../components/MyPage/MyRepoList/MyRepoList'
import Profile from '../components/MyPage/Profile/Profile'
import RepoOverview from '../components/MyPage/RepoOverview/RepoOverview'
import UserArchive from '../components/MyPage/UserArchive/UserArchive'

const MyPage = () => {
    return (
        <>
            <div className="MyPageWrap">
                <Profile />
                <RepoOverview />
                <UserArchive />
                <MyRepoLists />
            </div>
        </>
    )
}

export default MyPage
