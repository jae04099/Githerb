import React, {useState, createContext} from 'react';
import userData from '../json/user.json'

export const UserInfoContext = createContext();
export const UserInfoProvider = props => {
    const [userInfo, setUserInfo] = useState(userData)
    return (
        <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
            {props.children}
        </UserInfoContext.Provider>
    )
}