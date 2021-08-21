import React from 'react'
import './MyRepoListItem.css'
import repo_flower from './profile_plant.jpg'

const MyRepoListItem = () => {
    return (
        <>
        <div className="repoWrap"><div className="repoInfo"><div className="repoTitle">color-picker-app</div><div className="repoDesc">명사형으로 색상을 검색하는 프로그램 입니다.</div><ul>
            <li className="repoDue">21.05.20 - 21.06.20</li>
            <li className="repoProgress">60%</li>
        </ul></div><div className="imgWrap"><img className="repoPlantImg" src={repo_flower} alt="repo plant" /></div></div>
        </>
    )
}

export default MyRepoListItem
