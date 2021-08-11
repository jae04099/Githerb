import React from 'react'
import './Profile.css'
import profile_img from './profile_sample.png'

const Profile = () => {
    return (
        <>
            <div className="profileWrap"><div className="profileFlexWrap">
                <img src={profile_img} alt="profile" className="profPic" /><div className="userId">User ID</div><div className="githubId"><i className="fab fa-github"> github id</i></div><div className="job">Front End Engineer</div><div className="goal">I wanna be famous rock star!</div><button className="editBtn">edit profile</button><ul className="following">
                    <li className="followers">2 followers</li>
                    <li className="following">2 following</li>
                </ul></div></div>
        </>
    )
}

export default Profile
